/* TerraNexa homepage — section components. Faithful recreation of the
   production marketing page, factored into composable sections. */
import React from "react";
import { Chevron, ChevronLeft, ChevronRight, ChevronDown, Play, Check, Integration, Trend, Leaf, Farm, Order, Soil, Layers } from "./icons.jsx";

const LOGO = "/assets/terranexa-logo-footer.svg";

/* ---------------- Header ---------------- */
function Header({ scrolled, menuOpen, setMenuOpen, openGroup, setOpenGroup, onPlanos, base = "" }) {
  const closeMenus = () => { setOpenGroup(null); setMenuOpen(false); };
  const Group = ({ id, label, links }) => (
    <div className={"nav-group" + (openGroup === id ? " is-open" : "")}>
      <button type="button" aria-expanded={openGroup === id} onClick={() => setOpenGroup(openGroup === id ? null : id)}>
        {label} <Chevron />
      </button>
      <div className="nav-dropdown">
        {links.map((l) =>
          l.action ? (
            <a key={l.label} href={l.href || base + "#demonstracao"} onClick={(e) => { e.preventDefault(); closeMenus(); l.action(); }}>{l.label}</a>
          ) : (
            <a key={l.label} href={l.href} onClick={closeMenus}>{l.label}</a>
          )
        )}
      </div>
    </div>
  );
  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="container header-inner">
        <a className="brand" href={base + "#inicio"} aria-label="TerraNexa"><span className="brand-wordmark"><span>Terra</span><span>Nexa</span></span></a>
        <button className={"menu-toggle" + (menuOpen ? " is-open" : "")} type="button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={"main-navigation" + (menuOpen ? " is-open" : "")} aria-label="Navegação principal">
          <a href={base + "#inicio"}>Início</a>
          <Group id="sol" label="Soluções" links={[
            { label: "Visão integrada", href: base + "#plataforma" },
            { label: "Módulos da plataforma", href: base + "#modulos" },
            { label: "Produto em ação", href: base + "#produto" },
          ]} />
          <Group id="rec" label="Recursos" links={[
            { label: "Tecnologia no campo", href: base + "#campo" },
            { label: "Resultados operacionais", href: base + "#resultados" },
            { label: "Falar com a TerraNexa", href: base + "#contato" },
          ]} />
          <a href={base + "#plataforma"}>Plataforma</a>
          <a href={base + "#contato"}>Contato</a>
          <a className="nav-platform-access" href="https://app.terranexa.com.br" target="_blank" rel="noopener noreferrer" onClick={closeMenus}>Acessar plataforma</a>
        </nav>
        <div className="header-actions">
          <a className="button button-ghost button-small" href="https://www.terranexa.com.br/login" target="_blank" rel="noopener noreferrer">Entrar</a>
          <button className="button button-gold button-small" onClick={onPlanos}>Conhecer nossos planos</button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ onPlanos }) {
  return (
    <section className="hero" id="inicio">
      <img className="hero-background" src="/assets/hero-algodao.webp" srcSet="/assets/hero-algodao-768.webp 768w, /assets/hero-algodao-1200.webp 1200w, /assets/hero-algodao.webp 1672w" sizes="100vw" alt="Produtora no campo de algodão usando a plataforma TerraNexa" fetchpriority="high" decoding="async" />
      <div className="hero-shade"></div>
      <div className="container hero-layout hero-layout-solo">
        <div className="hero-copy">
          <h1>Gestão agrícola <em>inteligente</em> para decisões mais precisas no campo.</h1>
          <p className="hero-description">Gestão de talhões, operações agrícolas, monitoramento e solo em uma única plataforma. Registre e edite informações no campo offline, com sincronização quando houver conexão.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={onPlanos}>Começar agora</button>
            <a className="button button-glass" href="#produto"><Play /> Ver a plataforma</a>
          </div>
        </div>
      </div>
      <a className="scroll-indicator" href="#plataforma" aria-label="Próxima seção"><ChevronDown /></a>
    </section>
  );
}

/* ---------------- Proof strip ---------------- */
function ProofStrip() {
  const items = [
    ["Mapas", "Leitura territorial por talhão"],
    ["Operações", "Planejamento e custo real"],
    ["Monitoramento", "Ocorrências com evidências"],
    ["Solo", "Análise e recomendação técnica"],
  ];
  return (
    <section className="proof-strip" aria-label="Principais recursos">
      <div className="container proof-grid">
        {items.map(([t, s]) => (<div key={t}><strong>{t}</strong><span>{s}</span></div>))}
      </div>
    </section>
  );
}

/* ---------------- Platform ---------------- */
function Platform() {
  const benefits = [
    [<Integration />, "Operação integrada", "Ordens, insumos, custos e equipes no mesmo fluxo."],
    [<Trend />, "Decisões no campo, mesmo offline", "Registre e consulte informações sem conexão; sincroniza ao reconectar."],
    [<Leaf />, "Campo mais produtivo", "Tecnologia simples para executar melhor e reduzir perdas."],
  ];
  return (
    <section className="platform section" id="plataforma">
      <div className="platform-glow" aria-hidden="true"></div>
      <div className="container platform-layout">
        <div className="section-copy">
          <p className="section-label">Do campo ao controle</p>
          <h2>Uma visão única para toda a sua operação.</h2>
          <p>A TerraNexa conecta dados de campo, equipe, custos e recomendações agronômicas. Menos planilhas dispersas. Mais decisão com contexto.</p>
          <ul className="benefit-list">
            {benefits.map(([icon, t, s]) => (
              <li key={t}><span className="benefit-icon">{icon}</span><div><strong>{t}</strong><span>{s}</span></div></li>
            ))}
          </ul>
        </div>
        <div className="field-visual" id="campo">
          <img src="/assets/produto-colheita.webp" srcSet="/assets/produto-colheita-768.webp 768w, /assets/produto-colheita-1100.webp 1100w, /assets/produto-colheita.webp 1400w" sizes="(min-width: 901px) 600px, 100vw" alt="Produtor ajoelhado no campo de soja conferindo grãos pelo celular durante a colheita" loading="lazy" decoding="async" />
          <div className="field-visual-shade"></div>
          <div className="field-data-card">
            <div><span>Monitoramento de campo</span><strong>6 ocorrências</strong><small>2 críticas · equipe notificada</small></div>
            <div className="trail-data"><span>Trilha</span><strong>569 m</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Modules ---------------- */
function Modules() {
  const mods = [
    [<Farm />, "Fazendas e talhões", "Mapa, áreas, culturas, safras e histórico por propriedade."],
    [<Order />, "Ordens de serviço", "Planejamento, execução, prazo, equipe, insumos e custo real."],
    [<Soil />, "Solo e fertilidade", "Análises, mapas de fertilidade e recomendações técnicas."],
    [<Layers />, "Monitoramento", "Ocorrências, trilhas, técnicos, vistorias e evidências."],
  ];
  return (
    <section className="modules section" id="modulos">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Plataforma completa</p>
          <h2>Tudo o que a fazenda precisa para avançar.</h2>
          <p>Módulos conectados, dados consistentes e uma experiência feita para a rotina do campo.</p>
        </div>
        <div className="module-grid">
          {mods.map(([icon, t, s]) => (
            <article className="module-card" key={t}>
              <span className="module-icon">{icon}</span>
              <h3>{t}</h3>
              <p>{s}</p>
              <a href="#produto">Explorar módulo <span>→</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Product gallery ---------------- */
function Product() {
  const trackRef = React.useRef(null);
  const cards = [
    ["produto-mapas.webp", "Visão territorial", "Mapas inteligentes por talhão"],
    ["produto-os.webp", "Controle operacional", "Ordens de serviço com custo real"],
    ["produto-monitoramento.webp", "Campo conectado", "Monitoramento com evidências"],
    ["produto-solo.webp", "Inteligência agronômica", "Solo e fertilidade com precisão"],
    ["produto-custos.webp", "Gestão financeira", "Custos organizados por operação"],
    ["produto-equipe.webp", "Gestão de pessoas", "Equipe e execução no mesmo fluxo"],
  ];
  const scroll = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * (el.clientWidth / 3 + 24), behavior: "smooth" });
  };
  return (
    <section className="product section" id="produto">
      <div className="container">
        <div className="product-heading">
          <div>
            <p className="section-label">Produto em ação</p>
            <h2>Da visão territorial à execução no campo.</h2>
          </div>
          <div className="product-controls" aria-label="Controles da galeria">
            <button type="button" aria-label="Anterior" onClick={() => scroll(-1)}><ChevronLeft /></button>
            <button type="button" aria-label="Próxima" onClick={() => scroll(1)}><ChevronRight /></button>
          </div>
        </div>
        <div className="product-track" ref={trackRef} tabIndex={0} aria-label="Galeria do produto — use as setas do teclado ou arraste para navegar">
          {cards.map(([img, tag, title]) => {
            const base = "/assets/" + img.replace(".webp", "");
            return (
            <article className="product-card" key={img}>
              <img src={"/assets/" + img} srcSet={`${base}-480.webp 480w, ${base}-720.webp 720w, /assets/${img} 900w`} sizes="(min-width: 1101px) 400px, (min-width: 621px) 520px, 88vw" alt={title} loading="lazy" decoding="async" />
              <div className="product-card-caption"><span>{tag}</span><h3>{title}</h3></div>
            </article>
            );
          })}
        </div>
        <p className="product-note">Interface pensada para desktop e mobile, com continuidade entre escritório e campo.</p>
      </div>
    </section>
  );
}

/* ---------------- Results ---------------- */
function Results() {
  const stats = [
    ["1 visão", "para toda a operação"],
    ["4 pilares", "campo, equipe, custos e solo"],
    ["Rastreável", "do planejamento à execução"],
    ["Responsiva", "no escritório e no campo"],
  ];
  return (
    <section className="results section" id="resultados">
      <div className="container">
        <div className="section-heading">
          <p className="section-label section-label-gold">Gestão que gera resultado</p>
          <h2>Mais clareza para decidir. Mais controle para produzir.</h2>
        </div>
        <div className="result-grid">
          {stats.map(([t, s]) => (<div key={t}><strong>{t}</strong><span>{s}</span></div>))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Demo CTA ---------------- */
function DemoCTA({ onPlanos }) {
  return (
    <section className="demo section" id="demonstracao">
      <div className="container">
        <div className="demo-panel">
          <img src="/assets/cta-casal-campo.webp" srcSet="/assets/cta-casal-campo-768.webp 768w, /assets/cta-casal-campo-1200.webp 1200w, /assets/cta-casal-campo.webp 1600w" sizes="(min-width: 1280px) 1232px, 95vw" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <div className="demo-shade"></div>
          <div className="demo-copy">
            <p className="section-label section-label-gold">Pronto para transformar sua gestão?</p>
            <h2>Leve inteligência do escritório para cada decisão no campo.</h2>
            <p>Conheça nossos planos e comece com o primeiro mês por R$ 9,99, no plano ideal para a sua operação.</p>
            <button className="button button-gold demo-cta-button" type="button" onClick={onPlanos}>Conhecer nossos planos</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer({ onPlanos, base = "" }) {
  return (
    <footer className="site-footer" id="contato">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={LOGO} alt="TerraNexa" />
          <p>Informação confiável. Gestão inteligente. Campo mais produtivo.</p>
        </div>
        <div>
          <strong>Plataforma</strong>
          <a href={base + "#plataforma"}>Visão integrada</a>
          <a href={base + "#modulos"}>Módulos</a>
          <a href={base + "#produto"}>Produto em ação</a>
        </div>
        <div>
          <strong>Contato</strong>
          <a href="mailto:contato@terranexa.com.br">contato@terranexa.com.br</a>
          <a href="https://wa.me/5589999915435" target="_blank" rel="noopener noreferrer">Fale conosco no WhatsApp</a>
          <a href="/assinar" onClick={(e) => { e.preventDefault(); onPlanos(); }}>Conhecer nossos planos</a>
          <a href="https://www.terranexa.com.br/login" target="_blank" rel="noopener noreferrer">Acessar plataforma</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 TerraNexa. Todos os direitos reservados.</span>
        <div className="footer-bottom-links">
          <a href="/privacidade">Privacidade</a>
          <a href="/cookies">Cookies</a>
          <a href="/termos">Termos</a>
          <button type="button" className="cookie-link" onClick={() => window.dispatchEvent(new Event("tnx:cookie-prefs"))}>Preferências de cookies</button>
          <a href={base + "#inicio"}>Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}

export { Header, Hero, ProofStrip, Platform, Modules, Product, Results, DemoCTA, Footer };
