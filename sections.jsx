/* TerraNexa homepage — section components. Faithful recreation of the
   production marketing page, factored into composable sections. */
(function () {
const { Chevron, ChevronLeft, ChevronRight, ChevronDown, Play, Check, Integration, Trend, Leaf, Farm, Order, Soil, Layers } = window.TNXIcons;

const LOGO = "assets/logo-terranexa.png";

/* ---------------- Header ---------------- */
function Header({ scrolled, menuOpen, setMenuOpen, openGroup, setOpenGroup, onDemo }) {
  const Group = ({ id, label, links }) => (
    <div className={"nav-group" + (openGroup === id ? " is-open" : "")}>
      <button type="button" onClick={() => setOpenGroup(openGroup === id ? null : id)}>
        {label} <Chevron />
      </button>
      <div className="nav-dropdown">
        {links.map((l) => (<a key={l} href="#" onClick={(e) => e.preventDefault()}>{l}</a>))}
      </div>
    </div>
  );
  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <div className="container header-inner">
        <a className="brand" href="#inicio" aria-label="TerraNexa"><span className="brand-wordmark"><span>Terra</span><span>Nexa</span></span></a>
        <button className={"menu-toggle" + (menuOpen ? " is-open" : "")} type="button" aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>
        <nav className={"main-navigation" + (menuOpen ? " is-open" : "")} aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <Group id="sol" label="Soluções" links={["Visão integrada", "Módulos da plataforma", "Produto em ação"]} />
          <Group id="rec" label="Recursos" links={["Tecnologia no campo", "Resultados operacionais", "Falar com a TerraNexa"]} />
          <a href="#produto">Plataforma</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className="header-actions">
          <a className="button button-ghost button-small" href="#" onClick={(e) => e.preventDefault()}>Entrar</a>
          <button className="button button-gold button-small" onClick={onDemo}>Solicitar demonstração</button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ onDemo }) {
  return (
    <section className="hero" id="inicio">
      <img className="hero-background" src="assets/hero-algodao.png" alt="Produtora no campo de algodão usando a plataforma TerraNexa" />
      <div className="hero-shade"></div>
      <div className="container hero-layout hero-layout-solo">
        <div className="hero-copy">
          <h1>Gestão agrícola <em>inteligente</em> para decisões mais precisas no campo.</h1>
          <p className="hero-description">Gestão de talhões, operações agrícolas, monitoramento e solo em uma única plataforma. Registre e edite informações no campo offline, com sincronização quando houver conexão.</p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={onDemo}>Começar agora</button>
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
    [<Trend />, "Decisões no campo OFFLINE", "Indicadores confiáveis para priorizar o que importa."],
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
          <img src="assets/produto-colheita.png" alt="Produtor ajoelhado no campo de soja conferindo grãos pelo celular durante a colheita" />
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
    ["produto-mapas.png", "Visão territorial", "Mapas inteligentes por talhão"],
    ["produto-os.png", "Controle operacional", "Ordens de serviço com custo real"],
    ["produto-monitoramento.png", "Campo conectado", "Monitoramento com evidências"],
    ["produto-solo.png", "Inteligência agronômica", "Solo e fertilidade com precisão"],
    ["produto-custos.png", "Gestão financeira", "Custos organizados por operação"],
    ["produto-equipe.png", "Gestão de pessoas", "Equipe e execução no mesmo fluxo"],
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
        <div className="product-track" ref={trackRef}>
          {cards.map(([img, tag, title]) => (
            <article className="product-card" key={img}>
              <img src={"assets/" + img} alt={title} />
              <div className="product-card-caption"><span>{tag}</span><h3>{title}</h3></div>
            </article>
          ))}
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
function DemoCTA({ onDemo }) {
  return (
    <section className="demo section" id="demonstracao">
      <div className="container">
        <div className="demo-panel">
          <img src="assets/cta-casal-campo.png" alt="" aria-hidden="true" />
          <div className="demo-shade"></div>
          <div className="demo-copy">
            <p className="section-label section-label-gold">Pronto para transformar sua gestão?</p>
            <h2>Leve inteligência do escritório para cada decisão no campo.</h2>
            <p>Conheça a plataforma em uma demonstração orientada à sua operação.</p>
            <button className="button button-gold demo-cta-button" type="button" onClick={onDemo}>Solicitar demonstração</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={LOGO} alt="TerraNexa" />
          <p>Informação confiável. Gestão inteligente. Campo mais produtivo.</p>
        </div>
        <div>
          <strong>Plataforma</strong>
          <a href="#plataforma">Visão integrada</a>
          <a href="#modulos">Módulos</a>
          <a href="#produto">Produto em ação</a>
        </div>
        <div>
          <strong>Contato</strong>
          <a href="#">contato@terranexa.com.br</a>
          <a href="#demonstracao">Solicitar demonstração</a>
          <a href="#">Acessar plataforma</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 TerraNexa. Todos os direitos reservados.</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}

Object.assign(window, { TNXSections: { Header, Hero, ProofStrip, Platform, Modules, Product, Results, DemoCTA, Footer } });
})();
