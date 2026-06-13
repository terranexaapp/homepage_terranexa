/* TerraNexa — fluxo de assinatura em 2 passos.
   Passo 1 (/assinar): escolha de plano e faixa de hectares.
   Passo 2 (/assinar/cadastro): cadastro público + checkout Asaas.
   Visual fiel ao modal "Solicite uma demonstração" (tokens do site). */
import React from "react";
import { Check } from "./icons.jsx";

/* Endpoint público de billing (já em produção no backend terranexa).
   Usado no passo 2 para o cadastro público + checkout Asaas. */
const BILLING_BASE = "https://app.terranexa.com.br/api/billing";

/* Os planos são lidos direto do Supabase público (chave publicável; tabelas
   com RLS de leitura liberada apenas para SELECT em anon). */
const SUPABASE_URL = "https://wqnhzbwrsjwcvhnbzwtb.supabase.co";
const SUPABASE_KEY = "sb_publishable_IuWhkC5_5lggizFYoaDahw_HVRtR4oc";
const TRIAL_DIAS_FALLBACK = 30;
const LIMITE_HA_FALLBACK = 3000;

/* ---------------- Helpers ---------------- */
const onlyDigits = (v) => (v || "").toString().replace(/\D+/g, "");

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});
const formatBRL = (n) => brl.format(Math.round(Number(n) || 0));

function formatTelefone(v) {
  const d = onlyDigits(v).slice(0, 11);
  if (d.length <= 10) {
    return d
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d{1,4})$/, "$1-$2");
  }
  return d
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
}

function formatDocumento(v) {
  const d = onlyDigits(v).slice(0, 14);
  if (d.length <= 11) {
    return d
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  return d
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2}\.\d{3})(\d)/, "$1.$2")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}

function validaCPF(value) {
  const cpf = onlyDigits(value);
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf[i], 10) * (10 - i);
  let d1 = (soma * 10) % 11;
  if (d1 === 10) d1 = 0;
  if (d1 !== parseInt(cpf[9], 10)) return false;
  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf[i], 10) * (11 - i);
  let d2 = (soma * 10) % 11;
  if (d2 === 10) d2 = 0;
  return d2 === parseInt(cpf[10], 10);
}

function validaCNPJ(value) {
  const cnpj = onlyDigits(value);
  if (cnpj.length !== 14 || /^(\d)\1{13}$/.test(cnpj)) return false;
  const calc = (len) => {
    let pos = len - 7;
    let soma = 0;
    for (let i = len; i >= 1; i--) {
      soma += parseInt(cnpj[len - i], 10) * pos--;
      if (pos < 2) pos = 9;
    }
    const r = soma % 11;
    return r < 2 ? 0 : 11 - r;
  };
  if (calc(12) !== parseInt(cnpj[12], 10)) return false;
  return calc(13) === parseInt(cnpj[13], 10);
}

function tipoDocumento(value) {
  return onlyDigits(value).length > 11 ? "CNPJ" : "CPF";
}
function validaDocumento(value) {
  return tipoDocumento(value) === "CNPJ" ? validaCNPJ(value) : validaCPF(value);
}

// Mesma política de senha do Supabase Auth usada no app: mín. 8 caracteres com
// maiúscula, minúscula, número e símbolo. O backend (cadastro-publico) aplica a
// mesma regra no servidor.
const SENHA_REQUISITOS =
  "A senha precisa ter no mínimo 8 caracteres e incluir pelo menos uma letra maiúscula, uma letra minúscula, um número e um símbolo.";
function validaSenha(value) {
  const v = String(value || "");
  return v.length >= 8 && /[a-z]/.test(v) && /[A-Z]/.test(v) && /\d/.test(v) && /[^A-Za-z0-9]/.test(v);
}

/* ---------------- Planos: leitura do Supabase + normalização ---------------- */
// Descrições de apoio (as tabelas não têm copy de marketing).
const DESCRICOES = {
  Essencial: "O essencial para organizar talhões, operações e custos da fazenda.",
  Profissional: "Gestão completa com monitoramento, solo e inteligência agronômica.",
};

// Cores de destaque por ordem do plano (mantém os tokens do site).
const CORES_PLANO = ["verde", "azul"];

// Conjunto de fallback (espelha planos_comerciais/planos_faixas) usado se o
// Supabase estiver indisponível. Mantém a página correta mesmo offline.
const DADOS_FALLBACK = {
  trialDias: TRIAL_DIAS_FALLBACK,
  limiteHa: LIMITE_HA_FALLBACK,
  planos: [
    {
      nome: "Essencial",
      cor: "verde",
      descricao: DESCRICOES.Essencial,
      faixas: [
        { rotulo: "Até 100 ha", haMin: 0, precoMensal: 149, precoAnual: 1490 },
        { rotulo: "101 a 300 ha", haMin: 101, precoMensal: 249, precoAnual: 2490 },
        { rotulo: "301 a 700 ha", haMin: 301, precoMensal: 399, precoAnual: 3990 },
        { rotulo: "701 a 1.500 ha", haMin: 701, precoMensal: 649, precoAnual: 6490 },
        { rotulo: "1.501 a 3.000 ha", haMin: 1501, precoMensal: 999, precoAnual: 9990 },
      ],
    },
    {
      nome: "Profissional",
      cor: "azul",
      descricao: DESCRICOES.Profissional,
      faixas: [
        { rotulo: "Até 100 ha", haMin: 0, precoMensal: 209, precoAnual: 2090 },
        { rotulo: "101 a 300 ha", haMin: 101, precoMensal: 349, precoAnual: 3490 },
        { rotulo: "301 a 700 ha", haMin: 301, precoMensal: 559, precoAnual: 5590 },
        { rotulo: "701 a 1.500 ha", haMin: 701, precoMensal: 909, precoAnual: 9090 },
        { rotulo: "1.501 a 3.000 ha", haMin: 1501, precoMensal: 1399, precoAnual: 13990 },
      ],
    },
    { nome: "Cooperativa Enterprise", cor: "enterprise", enterprise: true, descricao: "", faixas: [] },
  ],
};

function rotuloFaixa(haMin, haMax) {
  const f = (n) => Number(n).toLocaleString("pt-BR");
  if (haMax == null) return `Acima de ${f(haMin - 1)} ha`;
  if (!haMin) return `Até ${f(haMax)} ha`;
  return `${f(haMin)} a ${f(haMax)} ha`;
}

function montarDados(comerciais, faixas, config) {
  const cfg = Object.fromEntries((config || []).map((c) => [c.chave, c.valor]));
  const trialDias = Number(cfg.dias_trial) || TRIAL_DIAS_FALLBACK;
  const limiteHa = Number(cfg.limite_autoservico_hectares) || LIMITE_HA_FALLBACK;

  const planos = [];
  let corIdx = 0;
  let enterprise = null;
  for (const pc of comerciais || []) {
    const fx = (faixas || [])
      .filter((f) => f.plano_nome === pc.nome && f.autoservico && f.preco_mensal_centavos > 0)
      .sort((a, b) => a.ha_min - b.ha_min)
      .map((f) => ({
        rotulo: rotuloFaixa(f.ha_min, f.ha_max),
        haMin: f.ha_min,
        precoMensal: Math.round(f.preco_mensal_centavos / 100),
        precoAnual: Math.round(f.preco_anual_centavos / 100),
      }));
    if (fx.length) {
      planos.push({ nome: pc.nome, cor: CORES_PLANO[corIdx++ % CORES_PLANO.length], descricao: DESCRICOES[pc.nome] || "", faixas: fx });
    } else if (!enterprise) {
      enterprise = { nome: pc.nome, cor: "enterprise", enterprise: true, descricao: "", faixas: [] };
    }
  }
  if (enterprise) planos.push(enterprise);
  return { planos, trialDias, limiteHa };
}

async function carregarDados() {
  try {
    const headers = { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}`, Accept: "application/json" };
    const base = `${SUPABASE_URL}/rest/v1`;
    const [pcRes, pfRes, cfRes] = await Promise.all([
      fetch(`${base}/planos_comerciais?select=nome,cor,ordem,ativo&ativo=eq.true&order=ordem`, { headers }),
      fetch(`${base}/planos_faixas?select=plano_nome,ha_min,ha_max,preco_mensal_centavos,preco_anual_centavos,autoservico,ordem&order=ordem`, { headers }),
      fetch(`${base}/config_comercial?select=chave,valor`, { headers }),
    ]);
    if (!pcRes.ok || !pfRes.ok) throw new Error("supabase indisponível");
    const comerciais = await pcRes.json();
    const faixas = await pfRes.json();
    const config = cfRes.ok ? await cfRes.json() : [];
    const dados = montarDados(comerciais, faixas, config);
    if (dados.planos.some((p) => !p.enterprise)) return dados;
  } catch (_e) {
    /* silencioso — cai no fallback */
  }
  return DADOS_FALLBACK;
}

/* Economia anual aproximada (para a badge do toggle), derivada do 1º plano. */
function economiaAnualPct(planos) {
  for (const p of planos) {
    const f = p.faixas?.[0];
    if (f && f.precoMensal && f.precoAnual) {
      const pct = Math.round((1 - f.precoAnual / 12 / f.precoMensal) * 100);
      if (pct > 0) return pct;
    }
  }
  return 0;
}

function precoExibido(faixa, ciclo) {
  if (ciclo === "anual") {
    return { valor: Math.round(faixa.precoAnual / 12), sufixo: "/mês", nota: `cobrado anualmente · ${formatBRL(faixa.precoAnual)}/ano` };
  }
  return { valor: faixa.precoMensal, sufixo: "/mês", nota: "cobrança mensal" };
}

/* ---------------- Passo 1: escolha do plano ---------------- */
function AssinarPlanos({ navigate }) {
  const [dados, setDados] = React.useState(null);
  const [ciclo, setCiclo] = React.useState(() => {
    const q = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    return q.get("ciclo") === "anual" ? "anual" : "mensal";
  });
  const [selecao, setSelecao] = React.useState(null); // { planoNome, haMin, rotulo }

  React.useEffect(() => {
    let ativo = true;
    carregarDados().then((d) => {
      if (ativo) setDados(d);
    });
    return () => {
      ativo = false;
    };
  }, []);

  const planos = dados?.planos || null;
  const trialDias = dados?.trialDias || TRIAL_DIAS_FALLBACK;
  const limiteHa = dados?.limiteHa || LIMITE_HA_FALLBACK;
  const pagaveis = (planos || []).filter((p) => !p.enterprise && p.faixas.length);
  const enterprise = (planos || []).find((p) => p.enterprise);
  const economia = planos ? economiaAnualPct(planos) : 0;

  const continuar = () => {
    if (!selecao) return;
    const qs = new URLSearchParams({
      plano: selecao.planoNome,
      ha: String(selecao.haMin),
      ciclo,
    });
    navigate(`/assinar/cadastro?${qs.toString()}`);
  };

  return (
    <main className="assinar" id="conteudo">
      <div className="container">
        <div className="assinar-head">
          <span className="plan-pill"><Check /> {trialDias} dias grátis — sem cobrança imediata</span>
          <h1>Escolha o plano ideal para a sua operação.</h1>
          <p>Comece com {trialDias} dias grátis. Selecione o plano e a faixa de área da sua fazenda — você só confirma o cartão no fim.</p>

          <div className="ciclo-toggle" role="group" aria-label="Ciclo de cobrança">
            <button type="button" className={ciclo === "mensal" ? "is-active" : ""} aria-pressed={ciclo === "mensal"} onClick={() => setCiclo("mensal")}>Mensal</button>
            <button type="button" className={ciclo === "anual" ? "is-active" : ""} aria-pressed={ciclo === "anual"} onClick={() => setCiclo("anual")}>
              Anual{economia > 0 && <span className="ciclo-badge">-{economia}%</span>}
            </button>
          </div>
        </div>

        {!planos ? (
          <p className="assinar-note" style={{ marginTop: 48 }}>Carregando planos…</p>
        ) : (
          <>
            <div className="plan-grid">
              {pagaveis.map((plano) => {
                const cardSelecionado = selecao?.planoNome === plano.nome;
                return (
                  <article key={plano.nome} className={`plan-card plan-card--${plano.cor}${cardSelecionado ? " is-selected" : ""}`}>
                    <span className="plan-accent">{plano.nome}</span>
                    <h3>{plano.nome}</h3>
                    {plano.descricao && <p className="plan-desc">{plano.descricao}</p>}
                    <ul className="faixa-list">
                      {plano.faixas.map((faixa) => {
                        const id = `${plano.nome}-${faixa.haMin}`;
                        const checked = cardSelecionado && selecao?.haMin === faixa.haMin;
                        const preco = precoExibido(faixa, ciclo);
                        return (
                          <li key={id}>
                            <label className={`faixa-option${checked ? " is-checked" : ""}`}>
                              <input
                                type="radio"
                                name="faixa"
                                value={id}
                                checked={checked}
                                onChange={() => setSelecao({ planoNome: plano.nome, haMin: faixa.haMin, rotulo: faixa.rotulo })}
                              />
                              <span className="faixa-mark" aria-hidden="true" />
                              <span className="faixa-text">
                                <span className="faixa-rotulo">{faixa.rotulo}</span>
                                <span className="faixa-preco">{formatBRL(preco.valor)}<small>{preco.sufixo}</small></span>
                              </span>
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                );
              })}
            </div>

            <div className="plan-enterprise">
              <div>
                <h3>{enterprise?.nome || "Enterprise"}</h3>
                <p>{enterprise?.descricao || `Para áreas acima de ${limiteHa.toLocaleString("pt-BR")} ha, cooperativas e grupos: faixas personalizadas, integrações e suporte dedicado.`}</p>
              </div>
              <a href="mailto:contato@terranexa.com.br?subject=Plano%20Enterprise%20TerraNexa">Falar <span aria-hidden="true">↗</span></a>
            </div>

            <div className="assinar-foot">
              <button type="button" className="button button-gold assinar-continue" onClick={continuar} disabled={!selecao}>
                Continuar <span aria-hidden="true">→</span>
              </button>
              <p className="assinar-note">Sem cobrança nos {trialDias} dias de teste. Cancele quando quiser.</p>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

/* ---------------- Passo 2: cadastro ---------------- */
// Mapeia os códigos de erro do endpoint cadastro-publico para mensagens pt-BR.
const MENSAGENS_ERRO = {
  nome_invalido: "Informe seu nome completo.",
  email_invalido: "Informe um e-mail válido.",
  senha_curta: "A senha deve ter ao menos 8 caracteres.",
  senha_fraca:
    "A senha precisa ter no mínimo 8 caracteres e incluir pelo menos uma letra maiúscula, uma letra minúscula, um número e um símbolo.",
  documento_invalido: "CPF/CNPJ inválido.",
  plano_invalido: "Selecione um plano válido.",
  faixa_invalida: "Faixa de hectares inválida. Volte e selecione outra.",
  faixa_nao_disponivel: "Essa faixa não está disponível para contratação online. Fale com a gente para o plano Enterprise.",
  valor_invalido: "Não foi possível calcular o valor do plano. Tente outra faixa.",
  email_ja_cadastrado: "Este e-mail já possui uma conta. Faça login ou use outro e-mail.",
  muitas_tentativas: "Muitas tentativas em pouco tempo. Aguarde alguns minutos e tente novamente.",
  configuracao_indisponivel: "Estamos com uma instabilidade temporária. Tente novamente em instantes.",
  json_invalido: "Não foi possível enviar os dados. Recarregue a página e tente novamente.",
  telefone_invalido: "Informe um telefone válido com DDD.",
};

function lerSelecao() {
  const q = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  return {
    planoNome: q.get("plano") || "",
    haMin: q.get("ha") || "",
    ciclo: q.get("ciclo") === "anual" ? "anual" : "mensal",
  };
}

function AssinarCadastro({ navigate }) {
  const selecao = React.useMemo(lerSelecao, []);
  const [dados, setDados] = React.useState(null);
  const [valores, setValores] = React.useState({ nome: "", email: "", telefone: "", documento: "" });
  const [erros, setErros] = React.useState({});
  const [enviando, setEnviando] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [sucesso, setSucesso] = React.useState(false);
  // Forma de pagamento: só faz sentido escolher no anual. Cartão = recorrente
  // com trial; Pix/boleto = pagamento único do ano, sem trial.
  const ehAnual = selecao.ciclo === "anual";
  const [formaPagamento, setFormaPagamento] = React.useState("cartao");
  const avulso = ehAnual && formaPagamento === "pix_boleto";

  // Redireciona ao passo 1 se chegou sem seleção.
  React.useEffect(() => {
    if (!selecao.planoNome) navigate("/assinar");
  }, []); // eslint-disable-line

  React.useEffect(() => {
    carregarDados().then(setDados);
  }, []);

  const trialDias = dados?.trialDias || TRIAL_DIAS_FALLBACK;
  const resumoPreco = React.useMemo(() => {
    const planos = dados?.planos;
    if (!planos) return null;
    const plano = planos.find((p) => p.nome === selecao.planoNome);
    const faixa = plano?.faixas?.find((f) => String(f.haMin) === String(selecao.haMin)) || plano?.faixas?.[0];
    if (!plano || !faixa) return null;
    return { faixa, preco: precoExibido(faixa, selecao.ciclo) };
  }, [dados, selecao]);

  const set = (campo) => (e) => {
    let v = e.target.value;
    if (campo === "telefone") v = formatTelefone(v);
    if (campo === "documento") v = formatDocumento(v);
    setValores((s) => ({ ...s, [campo]: v }));
    setErros((s) => ({ ...s, [campo]: undefined }));
  };

  function validar() {
    const e = {};
    if (!valores.nome.trim()) e.nome = "Informe seu nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email.trim())) e.email = "Informe um e-mail válido.";
    if (onlyDigits(valores.telefone).length < 10) e.telefone = "Informe um telefone válido com DDD.";
    if (!validaDocumento(valores.documento)) e.documento = "CPF/CNPJ inválido.";
    setErros(e);
    return Object.keys(e).length === 0;
  }

  async function submit(ev) {
    ev.preventDefault();
    if (!validar()) return;
    setEnviando(true);
    setStatus("Criando sua conta…");
    const payload = {
      nome: valores.nome.trim(),
      email: valores.email.trim(),
      telefone: valores.telefone.trim(),
      documento: onlyDigits(valores.documento),
      documentoTipo: tipoDocumento(valores.documento).toLowerCase(), // backend espera 'cpf'/'cnpj' minúsculo
      planoNome: selecao.planoNome,
      haMin: Number(selecao.haMin) || 0,
      ciclo: selecao.ciclo,
      formaPagamento: avulso ? "pix_boleto" : "cartao",
    };
    try {
      const res = await fetch(`${BILLING_BASE}?acao=cadastro-publico`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      let data = {};
      try { data = await res.json(); } catch (_e) { /* corpo vazio */ }
      if (!res.ok) {
        const code = data.error;
        throw new Error(MENSAGENS_ERRO[code] || data.message || `Não foi possível concluir o cadastro (${code || "erro"}).`);
      }
      // Redireciona ao checkout hospedado do Asaas para salvar o cartão. Sem
      // cobrança agora; a 1ª cobrança só no fim do trial.
      const link = data.checkoutUrl || data.linkCheckout || data.url;
      if (link) {
        setStatus("Conta criada! Redirecionando para o pagamento seguro…");
        window.location.href = link;
        return;
      }
      setSucesso(true);
      setStatus("Conta criada! Em instantes você receberá um e-mail para concluir o cadastro do cartão.");
    } catch (err) {
      setStatus(err.message || "Não foi possível concluir o cadastro. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  }

  const cicloLabel = selecao.ciclo === "anual" ? "Anual" : "Mensal";

  return (
    <main className="cadastro" id="conteudo">
      <div className="cadastro-shell">
        <div className="cadastro-summary">
          <div>
            <span className="resumo-label">Plano selecionado</span>
            <strong>
              {selecao.planoNome || "—"} · {cicloLabel}
              {resumoPreco && <> — {formatBRL(resumoPreco.preco.valor)}{resumoPreco.preco.sufixo}</>}
            </strong>
            <span className="resumo-sub">{resumoPreco ? resumoPreco.faixa.rotulo : `A partir de ${selecao.haMin || 0} ha`}</span>
          </div>
          <a className="alterar" href="/assinar" onClick={(e) => { e.preventDefault(); navigate(`/assinar?plano=${encodeURIComponent(selecao.planoNome)}&ciclo=${selecao.ciclo}`); }}>Alterar</a>
        </div>

        <p className="cadastro-eyebrow">Crie sua conta</p>
        <h1>{avulso ? "Ative sua conta TerraNexa" : `Comece seus ${trialDias} dias grátis`}</h1>
        <p className="cadastro-sub">
          {avulso
            ? "Preencha seus dados e gere o pagamento do ano via Pix ou boleto, em ambiente seguro do Asaas. Assim que o pagamento for confirmado, você recebe um e-mail para definir sua senha e o acesso é liberado."
            : `Preencha seus dados e cadastre o cartão no próximo passo, em ambiente seguro do Asaas, sem cobrança durante os ${trialDias} dias de teste. Depois de confirmar, você recebe um e-mail para definir sua senha de acesso.`}
        </p>

        {sucesso ? (
          <p className="form-status" role="status" style={{ marginTop: 28, fontSize: 15 }}>{status}</p>
        ) : (
          <form className="demo-form" onSubmit={submit} noValidate>
            <label className="full">Nome completo
              <input name="nome" type="text" autoComplete="name" placeholder="Seu nome completo" value={valores.nome} onChange={set("nome")} className={erros.nome ? "input-invalid" : ""} />
            </label>
            {erros.nome && <p className="field-error">{erros.nome}</p>}

            <label>E-mail
              <input name="email" type="email" autoComplete="email" placeholder="voce@fazenda.com.br" value={valores.email} onChange={set("email")} className={erros.email ? "input-invalid" : ""} />
            </label>
            <label>Telefone / WhatsApp
              <input name="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" value={valores.telefone} onChange={set("telefone")} className={erros.telefone ? "input-invalid" : ""} />
            </label>
            {(erros.email || erros.telefone) && <p className="field-error">{erros.email || erros.telefone}</p>}

            <label className="full">CPF / CNPJ
              <input name="documento" type="text" inputMode="numeric" placeholder="000.000.000-00" value={valores.documento} onChange={set("documento")} className={erros.documento ? "input-invalid" : ""} />
            </label>
            {erros.documento && <p className="field-error">{erros.documento}</p>}

            {ehAnual && (
              <div className="forma-pagamento full">
                <span className="forma-label">Forma de pagamento</span>
                <div className="ciclo-toggle" role="group" aria-label="Forma de pagamento">
                  <button type="button" className={formaPagamento === "cartao" ? "is-active" : ""} aria-pressed={formaPagamento === "cartao"} onClick={() => setFormaPagamento("cartao")}>Cartão</button>
                  <button type="button" className={formaPagamento === "pix_boleto" ? "is-active" : ""} aria-pressed={formaPagamento === "pix_boleto"} onClick={() => setFormaPagamento("pix_boleto")}>Pix ou boleto</button>
                </div>
                <p className="forma-nota">
                  {avulso
                    ? "Pagamento único do ano via Pix ou boleto, sem renovação automática. O acesso é liberado assim que o pagamento é confirmado."
                    : `Renovação automática no cartão, com ${trialDias} dias grátis antes da primeira cobrança.`}
                </p>
              </div>
            )}

            <button className="button button-gold" type="submit" disabled={enviando}>{enviando ? "Criando conta…" : "Criar conta e ir ao pagamento →"}</button>
            <p className="demo-privacy">Ao criar a conta você concorda com os <a href="/termos">Termos</a> e a <a href="/privacidade">Política de Privacidade</a> da TerraNexa.</p>
            <p className="form-status" role="status">{status}</p>
          </form>
        )}
      </div>
    </main>
  );
}

export { AssinarPlanos, AssinarCadastro };
