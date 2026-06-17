# Arquitetura — Notificação do Produtor via WhatsApp

> Documento de arquitetura. Define **o que precisa existir** para avisar o produtor
> rural, pelo WhatsApp, sobre o que sincronizou na sua fazenda — **resumo diário,
> talhão a talhão**. Ainda **não** decide linguagem nem framework do backend.

- **Produto:** TerraNexa — Gestão agrícola inteligente
- **Status:** proposta (v1)
- **Escopo desta v1:** monitoramentos, análises de solo e operações do caderno de
  campo que foram sincronizados; consolidados em **uma mensagem por produtor por dia**.

---

## 1. Objetivo e princípios

Avisar o produtor, uma vez por dia, do que entrou no sistema vindo do campo —
sem spam, sem custo desnecessário e dentro das regras da Meta e da LGPD.

Princípios que guiam todas as decisões abaixo:

1. **Notificar no lote, não no item.** O detalhe talhão a talhão fica no **link**,
   não no corpo da mensagem.
2. **A notificação nunca trava a sincronização.** Se o WhatsApp estiver fora do ar,
   o produtor ainda sincroniza normalmente. Envio é assíncrono e desacoplado.
3. **Sem opt-in, sem mensagem.** Consentimento é pré-condição registrada.
4. **Idempotência.** O app de campo reenvia dados; cada item gera no máximo uma
   linha de resumo, e cada dia gera no máximo uma mensagem por produtor.

---

## 2. Visão geral do fluxo

```
[App de campo sincroniza]
        |
        v
[API de ingestão]  grava monitoramento / análise de solo / operação
        |            (sempre associado a produtor_id + talhao_id)
        v
[Tabela de eventos de notificação]   <- registro append-only do que aconteceu no dia
        |
        v
[Job diário (cron, ex.: 18h)]
        |  1. seleciona eventos do dia ainda não notificados, por produtor
        |  2. verifica opt-in + preferências (canal, horário, tipos)
        |  3. monta o resumo (contagens + nº de talhões + deep link)
        |  4. cria 1 registro de envio (outbox) por produtor
        v
[Worker de envio]  ->  [Provedor WhatsApp (BSP/Meta)]  ->  [Produtor]
        |
        v
[Webhook de status]  atualiza enviado / entregue / lido / falhou
```

Por ser **resumo diário**, não há necessidade de fila em tempo real nem janela de
debounce: o agrupamento acontece naturalmente no recorte do dia feito pelo cron.

---

## 3. Modelo de dados

Tabelas mínimas. Nomes em português; tipos genéricos (independente de banco).
A chave de tudo é o eixo **produtor → talhão → evento**.

### 3.1 produtor
| campo | tipo | observação |
|---|---|---|
| id | uuid (PK) | |
| nome | texto | |
| telefone_e164 | texto | formato internacional, ex.: `+5511999999999` |
| criado_em | timestamp | |

### 3.2 talhao
| campo | tipo | observação |
|---|---|---|
| id | uuid (PK) | |
| produtor_id | uuid (FK → produtor) | |
| nome | texto | ex.: "Talhão 12 — Soja" |
| area_ha | numérico | opcional |

### 3.3 consentimento_whatsapp (opt-in / LGPD)
Prova de que o produtor autorizou. **Pré-requisito da Meta e da LGPD.**
| campo | tipo | observação |
|---|---|---|
| id | uuid (PK) | |
| produtor_id | uuid (FK) | |
| status | enum | `ativo` \| `revogado` |
| canal_origem | texto | onde consentiu (app, web, contrato) |
| texto_consentimento | texto | exatamente o que ele aceitou |
| concedido_em | timestamp | |
| revogado_em | timestamp | nulo se ativo |

### 3.4 preferencia_notificacao
| campo | tipo | observação |
|---|---|---|
| produtor_id | uuid (PK/FK) | |
| canal | enum | `whatsapp` (único na v1) |
| frequencia | enum | `diaria` (única na v1) |
| horario_envio | hora | ex.: `18:00`; respeita fuso |
| tipos | conjunto | quais notificar: `monitoramento`, `solo`, `operacao` |
| ativo | booleano | desliga tudo sem perder o histórico |

### 3.5 evento_notificacao (append-only)
O coração do sistema. Cada item sincronizado **relevante** vira uma linha aqui.
Quem grava é a API de ingestão (seção 4).
| campo | tipo | observação |
|---|---|---|
| id | uuid (PK) | |
| produtor_id | uuid (FK) | |
| talhao_id | uuid (FK) | |
| tipo | enum | `monitoramento` \| `solo` \| `operacao` |
| referencia_id | uuid | id do registro de origem (para o deep link e idempotência) |
| ocorrido_em | timestamp | quando sincronizou |
| notificacao_envio_id | uuid (FK, nulo) | preenchido quando entra num resumo |

> **Idempotência:** índice único em (`tipo`, `referencia_id`). Reenvio do app não
> duplica a linha de resumo.

### 3.6 notificacao_envio (outbox)
Uma linha por mensagem que será/foi enviada.
| campo | tipo | observação |
|---|---|---|
| id | uuid (PK) | |
| produtor_id | uuid (FK) | |
| data_referencia | data | o "dia" que este resumo cobre |
| payload | json | variáveis do template já montadas |
| status | enum | `pendente` \| `enviado` \| `entregue` \| `lido` \| `falhou` |
| id_externo | texto | id da mensagem no provedor (para casar com o webhook) |
| erro | texto | motivo, se falhou |
| criado_em / atualizado_em | timestamp | |

> **Idempotência do envio:** índice único em (`produtor_id`, `data_referencia`).
> Garante no máximo uma mensagem por produtor por dia, mesmo se o cron rodar duas vezes.

---

## 4. Ingestão: como o evento nasce

Quando a API recebe uma sincronização e grava um monitoramento, análise de solo ou
operação do caderno de campo, ela **também** insere uma linha em `evento_notificacao`
(mesma transação do dado de origem). Regras:

- Só gera evento o que é **novo e relevante** para o produtor — não toda alteração.
- O `referencia_id` aponta para o registro de origem, sustentando o deep link e a
  idempotência.
- Se o produtor não tem opt-in ativo, **ainda assim grava o evento** (o filtro de
  consentimento é aplicado no envio, não na ingestão — assim, se ele der opt-in
  depois, o histórico existe).

---

## 5. Job diário (cron)

Roda uma vez por dia (ex.: 18h, por fuso do produtor). Passos:

1. **Recortar o dia:** agrupar `evento_notificacao` com `notificacao_envio_id` nulo,
   por `produtor_id`.
2. **Filtrar consentimento e preferência:** descartar produtores sem `consentimento`
   ativo ou com `preferencia.ativo = false`; aplicar os `tipos` escolhidos.
3. **Consolidar:** por produtor, contar itens por tipo e contar talhões distintos.
4. **Montar payload:** nome, contagens, nº de talhões, deep link.
5. **Criar `notificacao_envio`** (status `pendente`) e **carimbar** os eventos com o
   `notificacao_envio_id` (fecha o lote e evita reenvio amanhã).
6. **Enfileirar para o worker de envio.**

Produtor sem nenhum evento no dia **não recebe nada** (sem "resumo vazio").

---

## 6. Envio e template

### 6.1 Template Utility (aprovado pela Meta)
Mensagem ativa fora da janela de 24h exige **template pré-aprovado**, categoria
**Utility**. Texto fixo + variáveis:

```
Olá, {{1}}. Resumo de hoje na sua fazenda:
- {{2}} monitoramentos
- {{3}} análises de solo
- {{4}} operações no caderno de campo
em {{5}} talhões. Toque para ver o detalhe: {{6}}
```

O **detalhe talhão a talhão não vai na mensagem** — vai no `{{6}}` (deep link), que
abre o app/web já filtrado no produtor e no dia.

### 6.2 Worker de envio
- Lê `notificacao_envio` com status `pendente`, chama o provedor, grava `id_externo`
  e move para `enviado`.
- Falha de rede: re-tentativa com backoff; após N tentativas → `falhou` + `erro`.

### 6.3 Webhook de status
Endpoint que o provedor chama para reportar `entregue` / `lido` / `falhou`. Casa pelo
`id_externo` e atualiza a linha em `notificacao_envio`. Serve para métricas e suporte.

---

## 7. Provedor: escolha e custo

Separe sempre **duas cobranças**: a **taxa da Meta** (igual em qualquer caminho) e a
**margem do intermediário** (o que varia).

| Caminho | Margem extra | Quando usar |
|---|---|---|
| Twilio / 360dialog | por mensagem | **MVP** — rápido, boa documentação, pouco esforço |
| BSP nacional (Zenvia/Blip/Gupshup) | margem + às vezes mensalidade | suporte e fatura em real |
| Meta Cloud API direto | zero | maior volume; troca margem por trabalho de infra |

**Decisão (v1): WhatsApp Cloud API direto, sem BSP.** Ver seção 7.1.

O **resumo diário** já minimiza o custo: **1 mensagem Utility por produtor por dia**,
em vez de uma por talhão/evento. Utility é a categoria mais barata.

> A tabela de preços da Meta muda com frequência (migrou de "por conversa" para "por
> mensagem"). Confirmar os valores na página oficial de pricing na hora de decidir.
> A **estrutura** (taxa Meta fixa + margem variável) não muda.

### 7.1 Decisão: Meta Cloud API direto (sem BSP)

**"Dá para fazer sozinho?" Sim — usando a WhatsApp Cloud API, a API oficial da Meta,
sem Twilio nem nenhum BSP.** BSPs são camadas de conveniência opcionais; não são
obrigatórios. O único intermediário do qual **não** se foge é a própria Meta — não
existe API legítima de WhatsApp fora dela.

Esclarecimento importante: a **Cloud API é hospedada pela Meta**. Não hospedamos
servidor de WhatsApp nem infra de mensageria — só chamamos um endpoint HTTPS
(`graph.facebook.com`) a partir de uma Edge Function.

| Critério | **Meta Cloud API direto** | Via BSP (Twilio) |
|---|---|---|
| Custo por mensagem | só taxa Meta (mais barato) | taxa Meta + margem |
| Dependência de terceiro | só Meta | Meta + BSP |
| Setup inicial | um pouco mais (token, webhook) | mais guiado |
| Manutenção | nossa (token, erros, webhook) | BSP cuida de parte |
| Controle e portabilidade | total | preso ao BSP |
| Encaixe com Supabase | excelente (Edge Function → Meta) | também funciona |

**Por que direto, para o TerraNexa:** queremos independência, já temos Supabase, e o
volume do resumo diário é baixo e previsível. O atrito real (verificação do negócio +
aprovação do template) existe **nos dois caminhos** — indo direto, economiza a margem
para sempre e não cria dependência a desfazer depois. BSP só valeria por suporte humano
na homologação ou recursos extras (chatbot, multiatendimento), que não são o caso aqui.

**Arquitetura com Meta direto (idêntica à seção 2, troca só quem o worker chama):**

```
[pg_cron 18h] -> cria notificacao_envio (pendente)
      |
      v
[Edge Function "enviar"]  -- HTTPS -->  graph.facebook.com (Cloud API)
      |                                         |
      v                                         v
grava id_externo + status        [Edge Function "webhook"] <- Meta envia status
```

**Checklist de setup (único):**

1. Conta **Meta Business** + **verificação do negócio** (CNPJ, documentos).
2. **WABA** (WhatsApp Business Account) + **número dedicado** (não pode estar em uso no
   app comum do WhatsApp).
3. **App** no Meta for Developers + **System User token** de longa duração.
4. **Submeter o template Utility** para aprovação da Meta.
5. **Edge Function de webhook** (HTTPS) para status e mensagens recebidas.

**O que passamos a manter:** renovação/segurança do token, tratamento de erros e rate
limits, confiabilidade do webhook (retries/idempotência) e a "quality rating" do número.

---

## 8. Custos e estimativas

> Valores de referência de **2026**. A Meta reajusta a tabela periodicamente —
> confirmar na fonte oficial antes de fechar contrato. A **estrutura** não muda.

### 8.1 Por mensagem (resumo diário = template Utility)

| Item | Valor (Brasil, 2026) |
|---|---|
| Meta — mensagem **Utility** | **R$ 0,04 a R$ 0,05** |
| Meta — Utility dentro da janela de 24h (produtor respondeu) | **grátis** (margem do provedor ainda incide) |
| Margem **Twilio** | ~US$ 0,005 (~**R$ 0,03**) por mensagem, sobre a taxa Meta |
| Margem **360dialog** | **assinatura mensal fixa**, repassa a taxa Meta sem margem por mensagem |
| **Combinado Meta + Twilio** | ~**R$ 0,07 a R$ 0,08** por mensagem |

Comparativo de categorias (por que Utility é a escolha certa): Authentication custa
R$ 0,15–0,19 e Marketing R$ 0,31–0,38. **Utility é a mais barata**, e a Meta aplica
**descontos por volume** (volume tiers) a Utility a partir de 2026.

### 8.2 Estimativa mensal (~30 mensagens por produtor/mês)

| Produtores | Mensagens/mês | Meta (~R$0,045) | Twilio (~R$0,03) | **Total/mês** |
|---|---|---|---|---|
| 100 | 3.000 | ~R$ 135 | ~R$ 90 | **~R$ 225** |
| 500 | 15.000 | ~R$ 675 | ~R$ 450 | **~R$ 1.125** |
| 1.000 | 30.000 | ~R$ 1.350 | ~R$ 900 | **~R$ 2.250** |

Pior caso ~**R$ 2,25 por produtor/mês** (1 msg/dia todo dia). Na prática é menos:
produtor sem evento no dia **não recebe nada**.

> Com a **decisão de ir Meta direto** (seção 7.1), a coluna Twilio é **R$ 0** — o custo
> cai para só a taxa Meta (~R$ 135 / R$ 675 / R$ 1.350 por mês). A coluna Twilio fica
> como teto de referência caso um dia se opte por BSP.

### 8.3 Custos fixos e de implementação

A parte cara **não** são as mensagens — é construir a ferramenta.

| Item | Custo | Observação |
|---|---|---|
| Conta WhatsApp Business + verificação Meta | grátis | exige verificação do negócio (CNPJ, documentação) |
| Número de telefone dedicado | baixo | número do remetente |
| Assinatura de provedor (BSP) | R$ 0 na v1 | decidido **Meta direto, sem BSP** (seção 7.1) |
| Backend + banco + cron + webhook | infra mensal | ex.: Supabase plano gratuito; pago a partir de ~US$ 25/mês |
| **Desenvolvimento** | maior custo | ingestão, modelo de dados, job diário, envio, webhook |
| Homologação do template Utility | grátis | aprovação leva de horas a poucos dias |

### 8.4 Leitura rápida

- **Mensagens são baratas:** ~R$ 0,07–0,08 cada; ~R$ 225/mês para 100 produtores.
- **O custo real é construir o backend** (que ainda não existe), não o envio.
- **Twilio:** paga por uso, sem mensalidade — ideal para começar pequeno.
  **360dialog:** mensalidade fixa, compensa em volume maior.

> **Fontes:** Meta WhatsApp Business Platform Pricing; Message Central (Brasil 2026);
> Twilio WhatsApp Pricing; EngageLab Pricing Guide 2026.

---

## 9. Conformidade (Meta + LGPD)

- **Opt-in registrado** antes de qualquer envio (tabela `consentimento_whatsapp`).
- **Opt-out fácil:** revogar muda `status` para `revogado`; o job passa a ignorar.
- **Minimização de dados:** a mensagem leva contagens e link, não dados sensíveis.
- **Janela de 24h:** se o produtor responder, abre conversa de atendimento (mais
  barata/livre) — fora dela, só template.

---

## 10. Decisões tomadas e em aberto

**Decididas:**

- **Plataforma de backend: Supabase** (Postgres + pg_cron + Edge Functions + RLS).
  Conta Supabase já existente.
- **Envio: WhatsApp Cloud API direto, sem BSP** (seção 7.1).
- **Comportamento: resumo diário** (seção 5).
- **Onde fica o código:** **repositório próprio do backend** (separado da homepage
  institucional `homepage_terranexa`). Este documento de arquitetura mora hoje na
  homepage, mas a implementação vai para o repo do backend.

**Em aberto:**

1. **Fuso e horário de envio** por produtor (default 18h).
2. **Formato e rota do deep link** (app nativo vs web).
3. **Definição de "evento relevante"** por tipo (o que merece avisar e o que não).
4. **Homologação do template Utility** na Meta.
5. **Origem dos dados de produtor/talhão** enquanto o app de campo não existe (seed/ingestão de teste).

---

## 11. Resumo de uma frase

Cada item sincronizado vira um **evento** ligado a produtor+talhão; um **cron diário**
consolida os eventos do dia em **uma mensagem Utility por produtor** com um **deep link**
para o detalhe talhão a talhão — assíncrono, idempotente e com opt-in registrado.
