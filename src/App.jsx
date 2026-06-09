/* TerraNexa homepage — interactive app shell. */
import React from "react";
import { Header, Hero, ProofStrip, Platform, Modules, Product, Results, DemoCTA, Footer } from "./sections.jsx";
import { Check } from "./icons.jsx";
import CookieConsent from "./CookieConsent.jsx";

// Endpoint do formulário de demonstração (Supabase Edge Function pública).
// A chave publicável pode ficar no cliente; a tabela leads tem RLS travado.
const LEAD_ENDPOINT = "https://wqnhzbwrsjwcvhnbzwtb.supabase.co/functions/v1/lead-demo";
const LEAD_KEY = "sb_publishable_IuWhkC5_5lggizFYoaDahw_HVRtR4oc";

function DemoDialog({ open, onClose }) {
  const ref = React.useRef(null);
  const [status, setStatus] = React.useState("");
  const [sending, setSending] = React.useState(false);
  React.useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) { d.showModal(); setStatus(""); }
    if (!open && d.open) d.close();
  }, [open]);
  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const payload = {
      nome: (f.get("nome") || "").toString().trim(),
      email: (f.get("email") || "").toString().trim(),
      telefone: (f.get("telefone") || "").toString().trim(),
      origem: (f.get("origem") || "").toString(),
      mensagem: (f.get("mensagem") || "").toString().trim(),
      empresa: (f.get("empresa") || "").toString(),
      pagina: typeof window !== "undefined" ? window.location.href : "",
    };
    setSending(true);
    setStatus("Enviando sua solicitação…");
    try {
      const res = await fetch(LEAD_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: LEAD_KEY, Authorization: `Bearer ${LEAD_KEY}` },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request_failed");
      form.reset();
      setStatus("Recebemos sua solicitação! Nossa equipe agronômica retorna em até 1 dia útil.");
      setTimeout(onClose, 2800);
    } catch (err) {
      setStatus("Não foi possível enviar agora. Tente novamente ou escreva para contato@terranexa.com.br.");
    } finally {
      setSending(false);
    }
  };
  const benefits = [
    "Demonstração guiada pela realidade da sua fazenda",
    "Gestão de talhões, operações agrícolas, monitoramento e solo em uma única plataforma",
    "Registre e edite informações no campo offline, com sincronização quando houver conexão",
  ];
  return (
    <dialog className="demo-dialog" ref={ref} onClose={onClose} onCancel={onClose} aria-labelledby="demo-title">
      <div className="demo-shell">
        <aside className="demo-aside">
          <img className="demo-aside-bg" src="assets/demo-aside.webp" alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <div className="demo-aside-shade"></div>
          <div className="demo-aside-head">
            <span className="brand-wordmark"><span>Terra</span><span>Nexa</span></span>
            <h2>Veja a plataforma <em>aplicada à sua operação.</em></h2>
          </div>
          <div>
            <ul className="demo-benefits">
              {benefits.map((b) => (
                <li className="demo-benefit" key={b}><Check /><span>{b}</span></li>
              ))}
            </ul>
            <div className="demo-contact">
              <span>Prefere falar direto?</span>
              <a href="mailto:contato@terranexa.com.br">contato@terranexa.com.br</a>
            </div>
          </div>
        </aside>

        <div className="demo-main">
          <button className="dialog-close" type="button" aria-label="Fechar" onClick={onClose}>×</button>
          <p className="demo-eyebrow">Solicite uma demonstração</p>
          <h3 id="demo-title">Prepare uma conversa direcionada</h3>
          <p className="demo-sub">Preencha os dados e nossa equipe agronômica retorna em até 1 dia útil.</p>
          <form className="demo-form" onSubmit={submit}>
            <input type="text" name="empresa" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
            <label>Nome<input name="nome" type="text" autoComplete="name" placeholder="Seu nome completo" required /></label>
            <label>Email<input name="email" type="email" autoComplete="email" placeholder="voce@fazenda.com.br" required /></label>
            <label>Telefone / WhatsApp<input name="telefone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" required /></label>
            <label>Onde você nos encontrou
              <select name="origem" defaultValue="" required>
                <option value="" disabled>Selecione</option>
                <option>Busca no Google</option>
                <option>Indicação de um produtor</option>
                <option>Instagram</option>
                <option>LinkedIn</option>
                <option>Evento ou feira agro</option>
                <option>Outro</option>
              </select>
            </label>
            <label className="full">Conte sobre sua operação <span style={{ color: "#6f8073", fontWeight: 500 }}>(opcional)</span>
              <textarea name="mensagem" placeholder="Área cultivada, culturas, principais desafios…"></textarea>
            </label>
            <button className="button button-gold" type="submit" disabled={sending}>{sending ? "Enviando…" : "Enviar solicitação"}</button>
            <p className="demo-privacy">Ao enviar, você concorda em ser contatado pela equipe TerraNexa. Seus dados não são compartilhados.</p>
            <p className="form-status" role="status">{status}</p>
          </form>
        </div>
      </div>
    </dialog>
  );
}

function App() {
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openGroup, setOpenGroup] = React.useState(null);
  const [demoOpen, setDemoOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-reveal
  React.useEffect(() => {
    const els = document.querySelectorAll(".section-copy, .field-visual, .section-heading, .module-card, .result-grid, .demo-panel");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
    return () => io.disconnect();
  }, []);

  const openDemo = () => { setMenuOpen(false); setDemoOpen(true); };

  return (
    <React.Fragment>
      <a className="skip-link" href="#conteudo" style={{ position: "fixed", top: 10, left: 10, zIndex: 999, transform: "translateY(-140%)" }}>Pular para o conteúdo</a>
      <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} openGroup={openGroup} setOpenGroup={setOpenGroup} onDemo={openDemo} />
      <main id="conteudo">
        <Hero onDemo={openDemo} />
        <ProofStrip />
        <Platform />
        <Modules />
        <Product />
        <Results />
        <DemoCTA onDemo={openDemo} />
      </main>
      <Footer onDemo={openDemo} />
      <DemoDialog open={demoOpen} onClose={() => setDemoOpen(false)} />
      <CookieConsent />
    </React.Fragment>
  );
}

export default App;
