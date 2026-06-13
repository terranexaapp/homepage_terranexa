/* TerraNexa homepage — interactive app shell. */
import React from "react";
import { Header, Hero, ProofStrip, Platform, Modules, Product, Results, DemoCTA, Footer } from "./sections.jsx";
import CookieConsent from "./CookieConsent.jsx";
import { AssinarPlanos, AssinarCadastro } from "./assinar.jsx";

/* Conteúdo da homepage (rota "/"). */
function HomePage({ onPlanos }) {
  // Scroll-reveal — só nas seções da home.
  React.useEffect(() => {
    const els = document.querySelectorAll(".section-copy, .field-visual, .section-heading, .module-card, .result-grid, .demo-panel");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <main id="conteudo">
      <Hero onPlanos={onPlanos} />
      <ProofStrip />
      <Platform />
      <Modules />
      <Product />
      <Results />
      <DemoCTA onPlanos={onPlanos} />
    </main>
  );
}

/* Roteador mínimo baseado em history API (sem dependências externas). */
function useRoute() {
  const [path, setPath] = React.useState(() => (typeof window !== "undefined" ? window.location.pathname : "/"));
  React.useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return path;
}

function navigate(to) {
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

/* Página 404 dentro do SPA (rota desconhecida). O fallback de roteamento da
   Vercel serve index.html para qualquer caminho sem arquivo estático, então o
   próprio app decide o que renderizar; páginas estáticas (/termos, /privacidade,
   /cookies) continuam servidas direto pela Vercel. */
function NotFound({ navigate }) {
  return (
    <main id="conteudo" style={{ minHeight: "60vh", display: "grid", placeItems: "center", textAlign: "center", padding: "96px 0" }}>
      <div className="container">
        <p style={{ margin: 0, fontFamily: "var(--serif)", fontSize: 88, lineHeight: 1, fontWeight: 800, color: "var(--green)" }}>404</p>
        <h1 style={{ margin: "8px 0 0" }}>Página não encontrada</h1>
        <p style={{ color: "var(--muted)", maxWidth: 520, margin: "14px auto 28px" }}>
          O endereço que você tentou acessar não existe ou foi movido. Vamos te levar de volta ao caminho certo.
        </p>
        <a className="button button-gold" href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>Ir para a página inicial</a>
      </div>
    </main>
  );
}

function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState(null);
  const rawPath = useRoute();
  const path = rawPath.replace(/\/+$/, "") || "/";
  const isHome = path === "/";
  const base = isHome ? "" : "/";

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ao trocar de rota, sobe ao topo (exceto quando há âncora).
  React.useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [path]);

  // "Conhecer nossos planos": os antigos CTAs de demonstração agora levam à
  // página de planos (/assinar). O fluxo de demonstração foi removido.
  const onPlanos = () => { setMenuOpen(false); navigate("/assinar"); };

  let content;
  if (path === "/assinar") {
    content = <AssinarPlanos navigate={navigate} />;
  } else if (path === "/assinar/cadastro") {
    content = <AssinarCadastro navigate={navigate} />;
  } else if (path === "/") {
    content = <HomePage onPlanos={onPlanos} />;
  } else {
    content = <NotFound navigate={navigate} />;
  }

  return (
    <React.Fragment>
      <a className="skip-link" href="#conteudo" style={{ position: "fixed", top: 10, left: 10, zIndex: 999, transform: "translateY(-140%)" }}>Pular para o conteúdo</a>
      <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} openGroup={openGroup} setOpenGroup={setOpenGroup} onPlanos={onPlanos} base={base} />
      {content}
      <Footer onPlanos={onPlanos} base={base} />
      <CookieConsent />
    </React.Fragment>
  );
}

export default App;
