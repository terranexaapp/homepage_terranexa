/* TerraNexa app UI kit — screens & shared pieces.
   All names/photos/farm anonymized. Faithful to the product's
   light theme: Georgia serif, monospace labels, green-ink palette. */
(function () {
const { Menu, Refresh, Locate, Bug, Back, Fwd, Plus, Search, Close, Check, Pin, Crosshair, Layers, Chevron } = window.TNXAppIcons;

/* ---------- anonymized demo data ---------- */
const OWNER = "Ricardo Menezes";
const FARM = "Boa Vista";
const LOCATION = "Baixa Grande · BA";
const TECHS = [
  { name: "Camila Duarte", initials: "CD", color: "var(--green-dp)", trilha: "569", pontos: 3, ocorr: 5, visitas: 1,
    grupo: "DANINHAS", grupoN: 2, planta: "Vassourinha-de-botão", sci: "Spermacoce verticillata" },
  { name: "André Tavares", initials: "AT", color: "var(--soil)", trilha: "68", pontos: 4, ocorr: 4, visitas: 4,
    grupo: "COLHEITA", grupoN: 1, planta: "Perda de colheita", sci: "Média 0,63 sc/ha" },
  { name: "Marina Reis", initials: "MR", color: "var(--blue)", trilha: "412", pontos: 2, ocorr: 3, visitas: 2,
    grupo: "PRAGAS", grupoN: 1, planta: "Percevejo-marrom", sci: "Euschistus heros" },
];

/* ---------- Avatar (initials only — no real photos) ---------- */
function Avatar({ initials, color = "var(--green-dp)", size = 46 }) {
  return (
    <div style={{ width: size, height: size, borderRadius: 999, flexShrink: 0, background: color,
      color: "#fff", display: "grid", placeItems: "center", fontFamily: "var(--mono)",
      fontWeight: 800, fontSize: size * 0.3, letterSpacing: "0.5px" }}>{initials}</div>
  );
}

/* ---------- Brand wordmark ---------- */
function Wordmark({ sub }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
      <img src="../../assets/terranexa-icon.svg" alt="" style={{ width: 38, height: 38, borderRadius: 999 }} />
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 19, lineHeight: 1 }}>
          <span style={{ color: "var(--green-dp)" }}>Terra</span><span style={{ color: "var(--amber)" }}>Nexa</span>
        </div>
        {sub && <p className="tnx-eyebrow" style={{ marginTop: 4, letterSpacing: "2px" }}>{sub}</p>}
      </div>
    </div>
  );
}

/* ---------- Floating farm header (white pill on maps) ---------- */
function FloatingFarmHeader({ onMenu }) {
  return (
    <div style={{ position: "absolute", top: 14, left: 14, zIndex: 20, display: "flex", alignItems: "center", gap: 11,
      background: "rgba(255,255,255,0.94)", border: "1px solid var(--border)", borderRadius: 14, padding: 8,
      boxShadow: "0 10px 30px rgba(0,0,0,0.12)", backdropFilter: "blur(10px)" }}>
      <button onClick={onMenu} aria-label="Menu" style={{ background: "var(--green-dp)", color: "#fff", border: "none",
        borderRadius: 9, width: 40, height: 40, display: "grid", placeItems: "center" }}><Menu /></button>
      <div style={{ paddingRight: 10 }}>
        <p className="tnx-eyebrow" style={{ letterSpacing: "2.4px", color: "var(--text-dim)" }}>FAZENDA</p>
        <p style={{ margin: "2px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 21, color: "var(--text-dk)", lineHeight: 1 }}>{FARM}</p>
      </div>
    </div>
  );
}

/* ---------- Parcel grid (satellite-style talhões) ---------- */
function ParcelGrid({ tint = "rgba(255,255,255,0.85)", cells }) {
  const labels = cells || ["A26","A28","A27","A25","A18","A16","A19","A21","A14","A17","A15","A10","A13","A06","A04","A07","C09","A02","A05","B09","C04","A01","B05","B07"];
  return (
    <svg viewBox="0 0 414 560" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <g transform="rotate(-24 207 280)" stroke={tint} strokeWidth="1.1" fill="none" opacity="0.9">
        {Array.from({ length: 7 }).map((_, i) => (<line key={"h" + i} x1="-120" y1={60 + i * 78} x2="540" y2={60 + i * 78} />))}
        {Array.from({ length: 8 }).map((_, i) => (<line key={"v" + i} x1={-40 + i * 78} y1="-40" x2={-40 + i * 78} y2="620" />))}
      </g>
      <g fill="#fff" fontFamily="var(--sans)" fontSize="11" fontWeight="700" opacity="0.92" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
        {labels.map((l, i) => {
          const col = i % 6, row = Math.floor(i / 6);
          return (<text key={l} x={34 + col * 66} y={70 + row * 92} textAnchor="middle">{l}</text>);
        })}
      </g>
    </svg>
  );
}

/* ---------- Occurrence pin (crosshair + count) ---------- */
function OccurrencePin({ x, y, n, tone = "var(--amber)" }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%,-50%)", zIndex: 6 }}>
      <div style={{ width: 34, height: 34, borderRadius: 999, background: "rgba(20,40,18,0.78)", border: "2px solid " + tone,
        display: "grid", placeItems: "center", boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}>
        <div style={{ width: 12, height: 12, borderRadius: 999, border: "2px solid " + tone }} />
      </div>
      <div style={{ position: "absolute", top: -6, right: -6, width: 18, height: 18, borderRadius: 999, background: "#1a2e16",
        color: "#fff", fontFamily: "var(--mono)", fontSize: 10, fontWeight: 800, display: "grid", placeItems: "center", border: "1.5px solid #fff" }}>{n}</div>
    </div>
  );
}

/* ---------- Severity legend (on monitoring map) ---------- */
function SeverityLegend() {
  const rows = [["Severa", "var(--red)"], ["Moderada", "var(--amber)"], ["Leve", "var(--green)"], ["Saudável", "var(--green-dp)"]];
  return (
    <div style={{ position: "absolute", top: 14, right: 14, zIndex: 7, background: "rgba(255,255,255,0.95)",
      border: "1px solid var(--border)", borderRadius: 14, padding: "12px 14px", boxShadow: "0 8px 22px rgba(0,0,0,0.18)", display: "grid", gap: 7 }}>
      {rows.map(([l, c]) => (
        <div key={l} style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: "var(--serif)", fontSize: 14, color: "var(--text-dk)" }}>
          <span style={{ width: 11, height: 11, borderRadius: 999, background: c }} />{l}
        </div>
      ))}
    </div>
  );
}

/* ---------- Map tool dock (right edge) ---------- */
function ToolDock({ onMonitor }) {
  const btn = { width: 46, height: 46, borderRadius: 12, border: "1px solid var(--border)", background: "rgba(255,255,255,0.96)",
    color: "var(--green-dp)", display: "grid", placeItems: "center", boxShadow: "0 6px 16px rgba(0,0,0,0.16)" };
  return (
    <div style={{ position: "absolute", top: 90, right: 14, zIndex: 20, display: "grid", gap: 9 }}>
      <button style={btn} aria-label="Camadas"><Layers /></button>
      <button style={btn} aria-label="Atualizar"><Refresh /></button>
      <button style={btn} aria-label="Localizar"><Crosshair /></button>
      <button style={{ ...btn, background: "var(--green-dp)", color: "#fff", border: "none" }} aria-label="Monitorar" onClick={onMonitor}><Bug /></button>
    </div>
  );
}

/* =====================================================================
   SCREEN 1 — Fazendas (home / property list)
   ===================================================================== */
function FazendasScreen({ onOpenFarm }) {
  return (
    <div className="tnx-screen" style={{ background: "linear-gradient(180deg, #fbfdf6, #f3f7e8 60%, #fdf6e8)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
        padding: "14px 16px", borderBottom: "1px solid var(--border)", background: "rgba(247,250,242,0.7)" }}>
        <Wordmark sub={OWNER.toUpperCase()} />
        <div style={{ display: "flex", gap: 8 }}>
          {["Perfil", "Sair"].map((l) => (
            <button key={l} style={{ border: "1px solid var(--border)", background: "var(--bg)", borderRadius: 10,
              padding: "9px 13px", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 11, letterSpacing: "1px",
              color: "var(--text-dk)", textTransform: "uppercase" }}>{l}</button>
          ))}
        </div>
      </div>
      <div style={{ padding: "26px 20px" }}>
        <p className="tnx-eyebrow" style={{ letterSpacing: "2.4px" }}>MINHAS PROPRIEDADES</p>
        <h1 style={{ margin: "6px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 34, color: "var(--text-dk)" }}>Fazendas</h1>

        <button onClick={onOpenFarm} style={{ width: "100%", textAlign: "left", marginTop: 22, background: "var(--bg)",
          border: "1px solid var(--border)", borderRadius: 18, padding: "20px 22px", boxShadow: "0 10px 28px rgba(26,58,10,0.06)" }}>
          <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 800, fontSize: 24, color: "var(--text-dk)" }}>{FARM}</p>
          <p style={{ margin: "5px 0 0", color: "var(--text-mid)", fontSize: 15 }}>{LOCATION}</p>
          <div style={{ height: 1, background: "var(--border)", margin: "16px 0" }} />
          <div style={{ display: "flex", gap: 40 }}>
            <div><p className="tnx-eyebrow" style={{ letterSpacing: "1.6px" }}>ÁREA TOTAL</p>
              <p style={{ margin: "6px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 22, color: "var(--green-dp)" }}>18.430 ha</p></div>
            <div><p className="tnx-eyebrow" style={{ letterSpacing: "1.6px" }}>TALHÕES</p>
              <p style={{ margin: "6px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 22, color: "var(--amber-dk)" }}>58</p></div>
          </div>
        </button>
      </div>
    </div>
  );
}

/* =====================================================================
   SCREEN 2 — Mapa principal
   ===================================================================== */
function MapaScreen({ onMenu, onMonitor, onOS, onSolo, onChuva }) {
  const mods = [["Monitorar", onMonitor, true], ["Solo", onSolo, false], ["Chuva", onChuva, false], ["Ordens", onOS, false]];
  return (
    <div className="tnx-screen tnx-map-aerial">
      <FloatingFarmHeader onMenu={onMenu} />
      <ToolDock onMonitor={onMonitor} />
      <ParcelGrid />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 16, zIndex: 20, display: "flex", gap: 9,
        padding: "0 14px", overflowX: "auto" }}>
        {mods.map(([l, fn, primary]) => (
          <button key={l} onClick={fn} style={dockBtn(primary)}>{primary && <Bug width={17} height={17} />} {l}</button>
        ))}
      </div>
      <div style={{ position: "absolute", right: 8, bottom: 78, zIndex: 5, fontFamily: "var(--sans)", fontSize: 10,
        color: "rgba(255,255,255,0.85)", background: "rgba(0,0,0,0.35)", padding: "2px 6px", borderRadius: 4 }}>Leaflet | Tiles © Esri</div>
    </div>
  );
}
function dockBtn(primary) {
  return { flex: "0 0 auto", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7, minHeight: 48,
    padding: "0 20px", borderRadius: 14, border: primary ? "none" : "1px solid var(--border)",
    background: primary ? "var(--green-dp)" : "rgba(255,255,255,0.96)", color: primary ? "#fff" : "var(--text-dk)",
    fontFamily: "var(--serif)", fontWeight: 800, fontSize: 15, boxShadow: "0 10px 24px rgba(0,0,0,0.22)" };
}

/* =====================================================================
   SCREEN 3 — Monitoramento (técnico do dia)
   ===================================================================== */
function MonitoramentoScreen({ onBack }) {
  const [idx, setIdx] = React.useState(0);
  const t = TECHS[idx];
  const move = (d) => setIdx((idx + d + TECHS.length) % TECHS.length);
  const metric = (l, v, sub) => (
    <div style={{ flex: 1, textAlign: "center", padding: "4px 6px" }}>
      <p className="tnx-eyebrow">{l}</p>
      <p style={{ margin: "5px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 22, color: "var(--text-dk)" }}>
        {v}{sub && <span style={{ fontSize: 11, color: "var(--text-dim)" }}> {sub}</span>}</p>
    </div>
  );
  return (
    <div className="tnx-screen" style={{ background: "var(--bg)" }}>
      <div style={{ padding: "12px 16px" }}>
        <button onClick={onBack} style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid var(--border)",
          background: "var(--bg)", borderRadius: 12, padding: "9px 15px", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 16, color: "var(--text-dk)" }}>
          <Back /> Voltar</button>
      </div>
      {/* map */}
      <div className="tnx-map-scouting" style={{ position: "relative", height: 300, margin: "0 16px", borderRadius: 16, overflow: "hidden", border: "1px solid var(--border)" }}>
        <SeverityLegend />
        <div style={{ position: "absolute", left: 0, top: "12%", width: "62%", height: "76%", background: "rgba(86,140,58,0.55)", clipPath: "polygon(0 18%, 60% 0, 100% 70%, 36% 100%, 0 80%)" }} />
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}><path d="M150 250 C140 200 120 150 165 95" stroke="var(--amber)" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.92" /></svg>
        <OccurrencePin x="165" y="95" n="2" />
        <OccurrencePin x="150" y="248" n="2" />
        <div style={{ position: "absolute", left: 14, bottom: 14, background: "rgba(255,255,255,0.95)", borderRadius: 12,
          padding: "8px 13px", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 13, color: "var(--text-dk)" }}>A13 · 5 jun</div>
      </div>
      {/* technician selector */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, margin: "16px 16px 0" }}>
        <button onClick={() => move(-1)} style={navBtn}><Back width={16} height={16} /></button>
        <div style={{ flex: 1, textAlign: "center" }}>
          <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 800, fontSize: 22, color: "var(--text-dk)" }}>{t.name}</p>
          <p className="tnx-eyebrow" style={{ marginTop: 5 }}>HOJE · 5 JUN 2026 · {t.ocorr} OCORRÊNCIAS</p>
          <p style={{ margin: "5px 0 0", fontFamily: "var(--mono)", fontSize: 11, fontWeight: 800, letterSpacing: "1px", color: "var(--green-dp)" }}>TÉCNICO {idx + 1} DE {TECHS.length}</p>
        </div>
        <button onClick={() => move(1)} style={navBtn}><Fwd width={16} height={16} /></button>
      </div>
      {/* technician card */}
      <div style={{ margin: "14px 16px 0", border: "1px solid var(--border)", borderRadius: 16, padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
          <Avatar initials={t.initials} color={t.color} />
          <div>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 800, fontSize: 19, color: "var(--text-dk)" }}>{t.name}</p>
            <p className="tnx-eyebrow" style={{ marginTop: 4 }}>5 JUN · {t.visitas} VISITA{t.visitas > 1 ? "S" : ""}</p>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 16, borderTop: "1px solid var(--border-soft)", paddingTop: 14 }}>
          {metric("TRILHA", t.trilha, "m")}{metric("TEMPO", "—")}{metric("PONTOS", t.pontos)}{metric("OCORR.", t.ocorr)}
        </div>
      </div>
      {/* occurrence group */}
      <div style={{ margin: "20px 16px 28px" }}>
        <p className="tnx-eyebrow" style={{ display: "flex", alignItems: "center", gap: 9, letterSpacing: "2px" }}>
          {t.grupo} <span style={{ display: "inline-grid", placeItems: "center", minWidth: 18, height: 18, borderRadius: 999,
            border: "1px solid var(--border)", fontSize: 10 }}>{t.grupoN}</span></p>
        <div style={{ marginTop: 12, border: "1px solid var(--border)", borderRadius: 14, padding: 12, display: "flex", gap: 13, alignItems: "center" }}>
          <div className="tnx-map-scouting" style={{ width: 62, height: 62, borderRadius: 12, flexShrink: 0, border: "1px solid var(--border)" }} />
          <div>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 800, fontSize: 18, color: "var(--text-dk)" }}>{t.planta}</p>
            <p style={{ margin: "3px 0 0", fontStyle: "italic", color: "var(--text-mid)", fontSize: 14 }}>{t.sci}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
const navBtn = { width: 40, height: 40, borderRadius: 12, border: "1px solid var(--border)", background: "var(--bg)",
  color: "var(--text-dk)", display: "grid", placeItems: "center", flexShrink: 0 };

window.TNXAppScreens = { Avatar, Wordmark, FazendasScreen, MapaScreen, MonitoramentoScreen };
window.TNXAppShared = { Avatar, FloatingFarmHeader, ParcelGrid };
window.TNX_TECHS = TECHS;
window.TNX_META = { OWNER, FARM, LOCATION };
})();
