/* TerraNexa app UI kit — Solo, Chuva e Executar OS (receituário/custo real). */
(function () {
const { Back, Plus, Close, Check, Menu, Refresh, Crosshair, Layers, Chevron } = window.TNXAppIcons;
const { FloatingFarmHeader, ParcelGrid } = window.TNXAppShared;
const FARM = window.TNX_META.FARM;

/* ---------- shared: dark stat tiles over a map ---------- */
function DarkTiles({ items }) {
  return (
    <div style={{ position: "absolute", left: 12, right: 12, bottom: 14, zIndex: 8, display: "flex", gap: 9 }}>
      {items.map(([l, v, sub]) => (
        <div key={l} style={{ flex: 1, background: "rgba(20,40,18,0.86)", border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 12, padding: "11px 13px", backdropFilter: "blur(4px)" }}>
          <p style={{ margin: 0, fontFamily: "var(--mono)", fontSize: 8.5, letterSpacing: "1px", fontWeight: 800, color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}>{l}</p>
          <p style={{ margin: "5px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 21, color: "#fff", lineHeight: 1 }}>{v}</p>
          {sub && <p style={{ margin: "3px 0 0", fontFamily: "var(--sans)", fontSize: 9.5, color: "rgba(255,255,255,0.65)" }}>{sub}</p>}
        </div>
      ))}
    </div>
  );
}

/* ---------- shared: map legend card ---------- */
function MapLegend({ title, sub, rows, mono }) {
  return (
    <div style={{ position: "absolute", left: 14, bottom: 92, zIndex: 8, background: "rgba(255,255,255,0.96)",
      border: "1px solid var(--border)", borderRadius: 14, padding: "12px 14px", boxShadow: "0 10px 26px rgba(0,0,0,0.2)",
      maxHeight: 300, overflowY: "auto" }}>
      <p style={{ margin: 0, fontFamily: "var(--mono)", fontSize: 11, fontWeight: 800, letterSpacing: "0.5px", color: "var(--text-mid)" }}>{title}</p>
      {sub && <p style={{ margin: "2px 0 8px", fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-dim)" }}>{sub}</p>}
      <div style={{ display: "grid", gap: 5, marginTop: sub ? 0 : 8 }}>
        {rows.map(([l, c]) => (
          <div key={l} style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: mono ? "var(--mono)" : "var(--sans)", fontSize: mono ? 11 : 13, color: "var(--text-dk)" }}>
            <span style={{ width: 14, height: 14, borderRadius: 4, background: c, flexShrink: 0 }} />{l}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Pluviômetro pin (green U marker) ---------- */
function PluvioPin({ x, y, code, mm }) {
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%,-50%)", zIndex: 6, textAlign: "center" }}>
      <div style={{ width: 26, height: 26, borderRadius: 999, background: "rgba(255,255,255,0.95)", border: "2px solid var(--green-dp)",
        display: "grid", placeItems: "center", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 12, color: "var(--green-dp)", boxShadow: "0 3px 8px rgba(0,0,0,0.35)" }}>U</div>
      <p style={{ margin: "2px 0 0", fontFamily: "var(--mono)", fontSize: 9, fontWeight: 800, color: "#fff", textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}>{code} · {mm}</p>
    </div>
  );
}

/* =====================================================================
   A — Solo: Mapa de fósforo + Recomendação por talhão
   ===================================================================== */
function SoloScreen({ onBack }) {
  const [tab, setTab] = React.useState("mapa");
  return (
    <div className="tnx-screen" style={{ background: tab === "mapa" ? "#0e1d14" : "var(--bg)" }}>
      <FloatingFarmHeader onMenu={onBack} />
      <SubTabs tab={tab} setTab={setTab} tabs={[["mapa", "Mapa"], ["rec", "Recomendação"]]} />
      {tab === "mapa" ? (
        <div className="tnx-map-aerial" style={{ position: "relative", height: 844, filter: "saturate(1.15)" }}>
          <div className="tnx-soil-overlay" />
          <ParcelGrid />
          <MapLegend mono title="Fósforo (resina) (mg/dm³)" sub="0–20 cm" rows={[
            ["Alto (> 20)", "#1f7a34"], ["Adequado (15–20)", "#8fcf64"], ["Médio (9–15)", "#f1d97a"],
            ["Baixo (5–9)", "#ef9a4d"], ["Muito baixo (≤ 5)", "#e2503a"]]} />
          <DarkTiles items={[["AMOSTRAS", "1000"], ["ZONAS", "52"], ["CAMADA ATIVA", "0-20 cm"]]} />
        </div>
      ) : (
        <RecomendacaoList />
      )}
    </div>
  );
}

function RecomendacaoList() {
  const talhoes = [
    { cod: "A01", area: 405, amostras: 27, gesso: "0.44" }, { cod: "A02", area: 389, amostras: 26, gesso: "0.56" },
  ];
  const linhas = (g) => [
    ["Calcário", "PRNT 80%", "1.61 t/ha"], ["Gesso", "opcional", g + " t/ha"], ["Nitrogênio", "fixação biológica", "0 kg/ha"],
    ["P₂O₅", "SSP 189 kg/ha", "36 kg/ha"], ["K₂O", "KCl 78 kg/ha", "47 kg/ha"], ["S / Ca", "via SSP", "21 / 32 kg/ha"],
  ];
  return (
    <div style={{ padding: "82px 16px 28px", display: "grid", gap: 16 }}>
      {talhoes.map((t) => (
        <div key={t.cod} style={{ border: "1px solid var(--border)", borderRadius: 16, padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10 }}>
            <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 800, fontSize: 21, color: "var(--text-dk)" }}>Talhão {t.cod}</p>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--mono)", fontSize: 12, color: "var(--text-mid)" }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--green-dp)" }} />Soja · 60 sc/ha</span>
          </div>
          <p style={{ margin: "4px 0 0", fontFamily: "var(--mono)", fontSize: 12, color: "var(--text-dim)" }}>{t.area} ha · {t.amostras} amostra(s) · P Alto · K Alto</p>
          <div style={{ marginTop: 12, display: "grid", gap: 0 }}>
            {linhas(t.gesso).map(([n, s, v], i) => (
              <div key={n} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10,
                padding: "12px 0", borderTop: i ? "1px solid var(--border-soft)" : "none" }}>
                <div>
                  <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 800, fontSize: 16, color: "var(--text-dk)" }}>{n}</p>
                  <p style={{ margin: "2px 0 0", fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-dim)" }}>{s}</p>
                </div>
                <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 800, fontSize: 17, color: "var(--green-dp)" }}>{v}</p>
              </div>
            ))}
          </div>
          <p style={{ margin: "14px 0 8px", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 15, color: "var(--text-dk)" }}>Micronutrientes a lanço</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {[["Boro", "ok", false], ["Cobre", "ok", false], ["Manganês", "ok", false], ["Zinco", "26 kg/ha", true]].map(([n, v, hi]) => (
              <span key={n} style={{ borderRadius: 999, padding: "8px 13px", fontFamily: "var(--serif)", fontWeight: 700, fontSize: 13,
                background: hi ? "var(--green-light)" : "var(--bg-soft)", border: "1px solid " + (hi ? "var(--green-dp)" : "var(--border)"),
                color: hi ? "var(--green-dp)" : "var(--text-mid)" }}>{n}: {v}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* =====================================================================
   B — Chuva acumulada (pluviômetros + heatmap)
   ===================================================================== */
function ChuvaScreen({ onBack }) {
  const pins = [
    ["A04", "0", "16%", "30%"], ["A07", "18", "42%", "33%"], ["A09", "56", "60%", "29%"], ["A11", "56", "74%", "26%"],
    ["A05", "46", "34%", "44%"], ["B05", "33", "44%", "52%"], ["B07", "21", "56%", "44%"], ["B09", "16", "66%", "40%"],
    ["A03", "12", "24%", "48%"], ["A01", "13", "14%", "46%"], ["B03", "34", "32%", "58%"], ["B01", "21", "20%", "62%"],
  ];
  return (
    <div className="tnx-screen tnx-map-rain">
      <FloatingFarmHeader onMenu={onBack} />
      <div style={{ position: "absolute", inset: 0 }}>
        {pins.map((p) => (<PluvioPin key={p[0]} code={p[0]} mm={p[1] + " mm"} x={p[2]} y={p[3]} />))}
      </div>
      <MapLegend mono title="Chuva acumulada (mm)" sub="2026-05-19 a 2026-06-05" rows={[
        ["≤ 5", "#dff0a8"], ["5–15", "#7ad07a"], ["15–25", "#3ab0c9"], ["25–35", "#3a7ad0"],
        ["35–45", "#e89a3a"], ["45–60", "#c4451c"], ["> 60", "#7a1f8a"]]} />
      <DarkTiles items={[["Chuva acum. (média)", "5,7 mm"], ["Maior acumulado", "56,0 mm", "Pluviômetro 11"], ["Menor acumulado", "0,0 mm", "Pluviômetro 13"]]} />
      <div style={{ position: "absolute", right: 8, bottom: 96, zIndex: 5, fontFamily: "var(--sans)", fontSize: 10,
        color: "rgba(255,255,255,0.85)", background: "rgba(0,0,0,0.35)", padding: "2px 6px", borderRadius: 4 }}>Leaflet | Tiles © Esri</div>
    </div>
  );
}

/* ---------- shared: sub-tabs under the floating header ---------- */
function SubTabs({ tab, setTab, tabs }) {
  return (
    <div style={{ position: "absolute", top: 16, right: 14, zIndex: 20, display: "flex", gap: 6, background: "rgba(255,255,255,0.94)",
      border: "1px solid var(--border)", borderRadius: 12, padding: 4, boxShadow: "0 8px 20px rgba(0,0,0,0.16)" }}>
      {tabs.map(([k, l]) => {
        const on = tab === k;
        return (<button key={k} onClick={() => setTab(k)} style={{ border: "none", borderRadius: 9, padding: "8px 13px",
          background: on ? "var(--green-dp)" : "transparent", color: on ? "#fff" : "var(--text-mid)",
          fontFamily: "var(--serif)", fontWeight: 800, fontSize: 13 }}>{l}</button>);
      })}
    </div>
  );
}

/* =====================================================================
   C — Executar OS: receituário + confirmar insumos reais + custo real
   ===================================================================== */
function ExecutarOSModal({ onClose }) {
  const insumos = [
    { nome: "Dual Gold", rec: "1.5 L/ha", dose: "1,5", un: "L/ha", custo: "33410.03", qtd: "607.46 L", carencia: "90 dias" },
    { nome: "Roundup WG 720", rec: "2 kg/ha", dose: "2", un: "kg/ha", custo: "11339.16", qtd: "809.94 kg" },
  ];
  return (
    <div onClick={onClose} style={{ position: "absolute", inset: 0, zIndex: 60, background: "rgba(40,50,30,0.55)", display: "flex", alignItems: "flex-end" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "var(--bg)", width: "100%", maxHeight: "96%", borderRadius: "22px 22px 0 0", overflowY: "auto" }}>
        <div style={{ position: "sticky", top: 0, background: "var(--bg)", padding: "16px 20px 12px", borderBottom: "1px solid var(--border)", zIndex: 1,
          display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p className="tnx-eyebrow" style={{ letterSpacing: "2px" }}>EXECUTAR · OS-0011</p>
            <h2 style={{ margin: "4px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 22, color: "var(--text-dk)" }}>Fechar ordem de serviço</h2>
          </div>
          <button onClick={onClose} aria-label="Fechar" style={{ width: 40, height: 40, borderRadius: 12, border: "1px solid var(--border)", background: "var(--bg-soft)", color: "var(--text-dk)", display: "grid", placeItems: "center" }}><Close /></button>
        </div>

        <div style={{ padding: "16px 20px 24px" }}>
          {/* receituário (amber box) */}
          <div style={{ background: "var(--amber-light)", border: "1px solid #e8a84c55", borderRadius: 14, padding: 14 }}>
            <p style={{ margin: 0, fontFamily: "var(--mono)", fontSize: 12, fontWeight: 800, letterSpacing: "1px", color: "var(--amber-dk)" }}>RECEITUÁRIO</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 0.7fr", gap: 10, marginTop: 12 }}>
              <Field label="AGRÔNOMO"><input placeholder="Eng. Agrônomo…" style={inp} /></Field>
              <Field label="CREA"><input placeholder="CREA-BA 0987…" style={inp} /></Field>
            </div>
          </div>

          <p style={{ margin: "20px 0 4px", fontFamily: "var(--mono)", fontSize: 12, fontWeight: 800, letterSpacing: "1px", color: "var(--text-dim)" }}>CONFIRMAR INSUMOS REAIS</p>
          <p style={{ margin: 0, color: "var(--text-mid)", fontSize: 14 }}>Ajuste se diferente do recomendado:</p>

          <div style={{ display: "grid", gap: 12, marginTop: 12 }}>
            {insumos.map((i) => (
              <div key={i.nome} style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <p style={{ margin: 0, fontFamily: "var(--serif)", fontWeight: 800, fontSize: 18, color: "var(--text-dk)" }}>{i.nome}</p>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-dim)" }}>Rec: {i.rec}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 64px 1.3fr", gap: 10, marginTop: 12, alignItems: "end" }}>
                  <div><p style={lbl}>DOSE REAL</p><input defaultValue={i.dose} style={inp} /></div>
                  <div style={{ ...inp, display: "grid", placeItems: "center", color: "var(--text-mid)", fontFamily: "var(--mono)", fontSize: 12 }}>{i.un}</div>
                  <div style={{ background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 10, padding: "8px 11px" }}>
                    <p style={lbl}>CUSTO CALCULADO</p>
                    <p style={{ margin: "3px 0 0", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 15, color: "var(--green-dp)" }}>R$ {i.custo}</p>
                    <p style={{ margin: "1px 0 0", fontFamily: "var(--mono)", fontSize: 10, color: "var(--text-dim)" }}>{i.qtd}</p>
                  </div>
                </div>
                {i.carencia && <p style={{ margin: "9px 0 0", fontFamily: "var(--mono)", fontSize: 11, fontWeight: 700, color: "var(--amber-dk)" }}>Carência: {i.carencia}</p>}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16 }}>
            <p style={lbl}>OBSERVAÇÕES DA EXECUÇÃO</p>
            <div style={{ ...inp, minHeight: 64, color: "var(--text-dk)", fontFamily: "var(--serif)", fontSize: 15 }}>Executado como pedido!</div>
          </div>

          {/* resumo custo real */}
          <div style={{ marginTop: 16, border: "1px solid var(--border)", borderRadius: 14, padding: 16 }}>
            <p style={{ margin: 0, fontFamily: "var(--mono)", fontSize: 11, fontWeight: 800, letterSpacing: "1px", color: "var(--text-dim)" }}>RESUMO DO CUSTO REAL</p>
            {[["Insumos", "R$ 44749.19"], ["Aplicação", "R$ 0.00"]].map(([l, v]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", marginTop: 11, fontFamily: "var(--serif)", fontSize: 16, color: "var(--text-dk)" }}>
                <span>{l}</span><span style={{ fontFamily: "var(--mono)", fontWeight: 700 }}>{v}</span></div>
            ))}
            <div style={{ height: 1, background: "var(--border)", margin: "12px 0" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: 19, color: "var(--text-dk)" }}>Total Real</span>
              <div style={{ textAlign: "right" }}>
                <p style={{ margin: 0, fontFamily: "var(--mono)", fontWeight: 800, fontSize: 22, color: "var(--green-dp)" }}>R$ 44749.19</p>
                <p style={{ margin: "2px 0 0", fontFamily: "var(--mono)", fontSize: 11, color: "var(--text-dim)" }}>R$ 110.50/ha · 405.0 ha</p>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
            <button onClick={onClose} style={{ flex: 1, border: "1px solid var(--border)", background: "var(--bg)", borderRadius: 12,
              padding: "14px", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 13, letterSpacing: "1px", color: "var(--text-dk)" }}>CANCELAR</button>
            <button onClick={onClose} style={{ flex: 2, border: "none", background: "var(--green-dp)", color: "#fff", borderRadius: 12,
              padding: "14px", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 13, letterSpacing: "1px" }}>FECHAR ORDEM + REGISTRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}
const inp = { width: "100%", boxSizing: "border-box", background: "var(--bg-soft)", border: "1px solid var(--border)", borderRadius: 10, padding: "10px 12px", fontFamily: "var(--serif)", fontSize: 14, color: "var(--text-dk)", outline: "none" };
const lbl = { margin: 0, fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "1.4px", fontWeight: 800, color: "var(--text-dim)" };
function Field({ label, children }) {
  return (<div style={{ minWidth: 0 }}><p style={{ ...lbl, marginBottom: 5 }}>{label}</p>{children}</div>);
}

Object.assign(window.TNXAppScreens, { SoloScreen, ChuvaScreen, ExecutarOSModal });
})();
