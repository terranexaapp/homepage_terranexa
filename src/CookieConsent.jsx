/* TerraNexa — central de consentimento de cookies (banner + preferências).
   Carrega o Google Analytics (GA4) apenas após consentimento de "análise". */
import React from "react";
import "./cookie-consent.css";

const STORAGE_KEY = "tnx_cookie_consent";
const VERSION = 1;
const GA_ID = "G-YCCZNYCG0Y";

function readConsent() {
  try {
    const v = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (v && v.v === VERSION) return v;
  } catch (_) { /* ignore */ }
  return null;
}

function writeConsent(c) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...c, v: VERSION, ts: Date.now() }));
  } catch (_) { /* ignore */ }
}

function loadGA() {
  if (window.__tnxGA) return;
  window.__tnxGA = true;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

function applyConsent(c) {
  if (c && c.analytics) loadGA();
}

export default function CookieConsent() {
  const stored = React.useRef(readConsent()).current;
  const [decided, setDecided] = React.useState(!!stored);
  const [prefsOpen, setPrefsOpen] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(stored ? !!stored.analytics : true);
  const [marketing, setMarketing] = React.useState(stored ? !!stored.marketing : false);
  const dialogRef = React.useRef(null);

  // Aplica o consentimento já salvo no primeiro carregamento.
  React.useEffect(() => { if (stored) applyConsent(stored); }, []);

  // Controla o <dialog> da central.
  React.useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (prefsOpen && !d.open) d.showModal();
    if (!prefsOpen && d.open) d.close();
  }, [prefsOpen]);

  // Permite reabrir a central de qualquer lugar (ex.: link do rodapé).
  React.useEffect(() => {
    const open = () => {
      const c = readConsent();
      setAnalytics(c ? !!c.analytics : true);
      setMarketing(c ? !!c.marketing : false);
      setPrefsOpen(true);
    };
    window.addEventListener("tnx:cookie-prefs", open);
    return () => window.removeEventListener("tnx:cookie-prefs", open);
  }, []);

  const persist = (c) => { writeConsent(c); applyConsent(c); setDecided(true); setPrefsOpen(false); };
  const acceptAll = () => { setAnalytics(true); setMarketing(true); persist({ analytics: true, marketing: true }); };
  const rejectAll = () => { setAnalytics(false); setMarketing(false); persist({ analytics: false, marketing: false }); };
  const saveChosen = () => persist({ analytics, marketing });

  const showBanner = !decided && !prefsOpen;

  return (
    <React.Fragment>
      {showBanner && (
        <div className="cookie-banner" role="region" aria-label="Aviso de cookies">
          <div className="cookie-banner-body">
            <strong>Sua privacidade no campo digital</strong>
            <p>Usamos cookies para o funcionamento do site e, com seu consentimento, para medir audiência e melhorar a experiência. Você escolhe o que aceitar.</p>
          </div>
          <div className="cookie-banner-actions">
            <button type="button" className="button button-ghost button-small" onClick={() => setPrefsOpen(true)}>Personalizar</button>
            <button type="button" className="button button-glass button-small" onClick={rejectAll}>Recusar não essenciais</button>
            <button type="button" className="button button-gold button-small" onClick={acceptAll}>Aceitar todos</button>
          </div>
        </div>
      )}

      <dialog className="cookie-prefs" ref={dialogRef} onClose={() => setPrefsOpen(false)} onCancel={() => setPrefsOpen(false)} aria-labelledby="cookie-prefs-title">
        <div className="cookie-prefs-inner">
          <button type="button" className="dialog-close" aria-label="Fechar" onClick={() => setPrefsOpen(false)}>×</button>
          <p className="demo-eyebrow">Central de preferências</p>
          <h3 id="cookie-prefs-title">Preferências de cookies</h3>
          <p className="demo-sub">Os cookies necessários mantêm o site funcionando e ficam sempre ativos. Os demais só são usados se você permitir — e você pode mudar sua escolha quando quiser.</p>

          <ul className="cookie-cats">
            <li className="cookie-cat">
              <div className="cookie-cat-head">
                <span className="cookie-cat-name">Necessários</span>
                <span className="cookie-cat-fixed">Sempre ativos</span>
              </div>
              <p>Essenciais para segurança, navegação e funcionalidades básicas do site. Não podem ser desativados.</p>
            </li>

            <li className="cookie-cat">
              <div className="cookie-cat-head">
                <span className="cookie-cat-name">Análise e desempenho</span>
                <label className="cookie-switch">
                  <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} aria-label="Cookies de análise e desempenho" />
                  <span className="cookie-slider" aria-hidden="true"></span>
                </label>
              </div>
              <p>Medição de audiência com o Google Analytics para entender o uso e melhorar o site. Cookies: <code>_ga</code>, <code>_ga_&lt;id&gt;</code>.</p>
            </li>

            <li className="cookie-cat">
              <div className="cookie-cat-head">
                <span className="cookie-cat-name">Marketing</span>
                <label className="cookie-switch">
                  <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} aria-label="Cookies de marketing" />
                  <span className="cookie-slider" aria-hidden="true"></span>
                </label>
              </div>
              <p>Mensuração de campanhas e conteúdo mais relevante. No momento não utilizamos cookies de marketing nesta página.</p>
            </li>
          </ul>

          <div className="cookie-prefs-actions">
            <button type="button" className="button button-glass button-small" onClick={rejectAll}>Recusar não essenciais</button>
            <button type="button" className="button button-ghost button-small" onClick={saveChosen}>Salvar preferências</button>
            <button type="button" className="button button-gold button-small" onClick={acceptAll}>Aceitar todos</button>
          </div>
        </div>
      </dialog>
    </React.Fragment>
  );
}
