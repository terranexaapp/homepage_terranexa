/* TerraNexa app UI kit — Ordens de Serviço (Central + Nova OS modal). */
(function () {
const { Back, Plus, Search, Close, Check, Chevron } = window.TNXAppIcons;

/* ---------- Central operacional (OS list) ---------- */
function CentralOSScreen({ onBack, onNova, onExecutar }) {
  const [filter, setFilter] = React.useState("Pendentes");
  const stats = [["PENDENTES", 1, "var(--amber-dk)"], ["VENCEM HOJE", 0, "var(--amber-dk)"], ["ATRASADAS", 0, "var(--red)"], ["CONCLUÍDAS", 4, "var(--green-dp)"]];
  return (
    <div className="tnx-screen" style={{ background: "var(--bg)", padding: "16px 16px 28px" }}>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 11, background: "var(--bg-soft)", border: "1px solid var(--border)",
        borderRadius: 14, padding: 8, boxShadow: "0 6px 18px rgba(0,0,0,0.05)" }}>
        <span style={{ background: "var(--green-dp)", color: "#fff", borderRadius: 9, width: 38, height: 38, display: "grid", placeItems: "center", fontWeight: 900 }}>≡</span>
        <div style={{ paddingRight: 8 }}>
          <p className="tnx-eyebrow" style={{ letterSpacing: "2.4px" }}>FAZENDA</p>
          <p style={{ margin: "2px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 20, color: "var(--text-dk)", lineHeight: 1 }}>{window.TNX_META.FARM}</p>
        </div>
      </div>

      <button onClick={onBack} style={{ display: "flex", width: "100%", alignItems: "center", gap: 8, marginTop: 18, border: "1px solid var(--border)",
        background: "var(--green-light)", borderRadius: 12, padding: "12px 14px", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 16, color: "var(--text-dk)" }}>← Gerenciamento</button>

      <p className="tnx-eyebrow" style={{ marginTop: 22, letterSpacing: "2.4px" }}>ORDEM DE SERVIÇO</p>
      <h1 style={{ margin: "6px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 30, color: "var(--text-dk)" }}>Central operacional</h1>

      <button onClick={onNova} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, background: "var(--green-dp)",
        color: "#fff", border: "none", borderRadius: 12, padding: "12px 18px", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 16 }}>
        <Plus width={18} height={18} /> Nova OS</button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 18 }}>
        {stats.map(([l, n, c]) => (
          <div key={l} style={{ border: "1px solid var(--border)", borderRadius: 14, padding: "14px 16px" }}>
            <p className="tnx-eyebrow">{l}</p>
            <p style={{ margin: "8px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 28, color: c }}>{n}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, border: "1px solid var(--border)", borderRadius: 14, padding: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9, background: "var(--bg-soft)", border: "1px solid var(--border)",
          borderRadius: 10, padding: "10px 12px", color: "var(--text-dim)" }}>
          <Search width={17} height={17} /><span style={{ fontFamily: "var(--serif)", fontSize: 15 }}>Buscar por OS, operação, equipe ou talhão…</span>
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
          {["Pendentes", "Concluídas", "Canceladas", "Todas"].map((f) => {
            const on = filter === f;
            return (<button key={f} onClick={() => setFilter(f)} style={{ border: "1px solid " + (on ? "var(--green-dp)" : "var(--border)"),
              background: on ? "var(--green-light)" : "var(--bg)", color: "var(--text-dk)", borderRadius: 10, padding: "8px 14px",
              fontFamily: "var(--serif)", fontWeight: 800, fontSize: 14 }}>{f}</button>);
          })}
        </div>
      </div>

      {/* OS card */}
      <div style={{ marginTop: 14, border: "1px solid var(--green-dp)", background: "var(--green-light)", borderRadius: 16, padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 800, fontSize: 15, color: "var(--text-dk)" }}>OS-0011</span>
          <span style={{ ...pill, background: "var(--amber-light)", color: "var(--amber-dk)" }}>PENDENTE</span>
          <span style={{ ...pill, background: "var(--bg)", color: "var(--text-mid)", border: "1px solid var(--border)" }}>EQ-01</span>
          <button onClick={onExecutar} style={{ marginLeft: "auto", background: "var(--green-dp)", color: "#fff", border: "none", borderRadius: 10,
            padding: "9px 16px", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 12, letterSpacing: "0.5px" }}>EXECUTAR</button>
        </div>
        <p style={{ margin: "12px 0 0", color: "var(--text-mid)", fontStyle: "italic", fontSize: 14 }}>Aplicação Tratorizada Terrestre</p>
        <p style={{ margin: "3px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 19, color: "var(--text-dk)" }}>Dessecação Pré-Plantio</p>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
          <span style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "5px 10px", fontFamily: "var(--mono)", fontSize: 12, fontWeight: 700 }}>A01 · 405 ha</span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--text-mid)" }}>Prazo: 2026-06-11</span>
        </div>
        <p style={{ margin: "10px 0 0", color: "var(--text-mid)", fontSize: 13 }}>2 insumos recomendados</p>
      </div>
    </div>
  );
}
const pill = { borderRadius: 999, padding: "4px 10px", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 11, letterSpacing: "0.5px" };

/* ---------- Nova Ordem de Serviço (modal) ---------- */
function NovaOSModal({ onClose }) {
  const [servico, setServico] = React.useState(0);
  const [nat, setNat] = React.useState(0);
  const servicos = [["Aplicação Tratorizada Terrestre", 9], ["Aplicação Aérea", 5], ["Adubação Autopropelido", 2], ["Adubação Aérea", 2], ["Plantio", 3], ["Colheita", 2], ["Outras Atividades", 2]];
  const naturezas = ["Dessecação Pré-Plantio", "Dessecação Pré-Colheita", "Pré-Emergente", "Pós-Emergente", "Fungicida", "Inseticida", "Micronutriente", "Biológico"];
  return (
    <div onClick={onClose} style={{ position: "absolute", inset: 0, zIndex: 60, background: "rgba(40,50,30,0.55)", display: "flex", alignItems: "flex-end" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "var(--bg)", width: "100%", maxHeight: "94%", borderRadius: "22px 22px 0 0", overflowY: "auto" }}>
        <div style={{ position: "sticky", top: 0, background: "var(--bg)", padding: "20px 20px 14px", borderBottom: "1px solid var(--border)", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <p className="tnx-eyebrow" style={{ letterSpacing: "2.4px" }}>ABRIR ORDEM DE SERVIÇO</p>
              <h2 style={{ margin: "6px 0 0", fontFamily: "var(--serif)", fontWeight: 800, fontSize: 26, color: "var(--text-dk)" }}>Nova Ordem de Serviço</h2>
              <p style={{ margin: "2px 0 0", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 14, color: "var(--green-dp)" }}>OS-0011</p>
            </div>
            <button onClick={onClose} aria-label="Fechar" style={{ width: 40, height: 40, borderRadius: 12, border: "1px solid var(--border)", background: "var(--bg-soft)", color: "var(--text-dk)", display: "grid", placeItems: "center" }}><Close /></button>
          </div>
        </div>

        <div style={{ padding: "18px 20px 24px" }}>
          <SectionLabel n="1" text="SERVIÇO" />
          <div style={{ display: "grid", gap: 9, marginTop: 12 }}>
            {servicos.map(([l, n], i) => {
              const on = servico === i;
              return (
                <button key={l} onClick={() => setServico(i)} style={{ display: "flex", alignItems: "center", gap: 13, textAlign: "left",
                  border: "1px solid " + (on ? "var(--green-dp)" : "var(--border)"), background: on ? "var(--green-light)" : "var(--bg)",
                  borderRadius: 12, padding: "13px 15px" }}>
                  <span style={{ width: 30, height: 30, borderRadius: 8, display: "grid", placeItems: "center", flexShrink: 0,
                    background: on ? "var(--green-dp)" : "transparent", color: on ? "#fff" : "var(--text-dim)",
                    border: on ? "none" : "1px solid var(--border)", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 13 }}>{i + 1}</span>
                  <span style={{ flex: 1, fontFamily: "var(--serif)", fontWeight: 800, fontSize: 17, color: "var(--text-dk)" }}>{l}</span>
                  <span style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--text-dim)" }}>{n}</span>
                </button>
              );
            })}
          </div>

          <div style={{ marginTop: 24 }}><SectionLabel n="2" text="NATUREZA AGRÍCOLA" /></div>
          <div style={{ display: "grid", gap: 9, marginTop: 12 }}>
            {naturezas.map((l, i) => {
              const on = nat === i;
              return (
                <button key={l} onClick={() => setNat(i)} style={{ display: "flex", alignItems: "center", gap: 13, textAlign: "left",
                  border: "1px solid " + (on ? "var(--green-dp)" : "var(--border)"), background: on ? "var(--green-light)" : "var(--bg)",
                  borderRadius: 12, padding: "13px 15px" }}>
                  <span style={{ width: 20, height: 20, borderRadius: 6, flexShrink: 0, display: "grid", placeItems: "center",
                    background: on ? "var(--green-dp)" : "var(--bg-soft)", border: on ? "none" : "1px solid var(--border)", color: "#fff" }}>
                    {on && <Check width={14} height={14} />}</span>
                  <span style={{ flex: 1, fontFamily: "var(--serif)", fontWeight: 800, fontSize: 17, color: "var(--text-dk)" }}>{l}</span>
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: 10, marginTop: 26 }}>
            <button onClick={onClose} style={{ flex: 1, border: "1px solid var(--border)", background: "var(--bg)", borderRadius: 12,
              padding: "14px", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 13, letterSpacing: "1px", color: "var(--text-dk)" }}>CANCELAR</button>
            <button onClick={onClose} style={{ flex: 2, border: "none", background: "var(--green-dp)", color: "#fff", borderRadius: 12,
              padding: "14px", fontFamily: "var(--mono)", fontWeight: 800, fontSize: 13, letterSpacing: "1px" }}>CRIAR ORDEM DE SERVIÇO</button>
          </div>
        </div>
      </div>
    </div>
  );
}
function SectionLabel({ n, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <p style={{ margin: 0, fontFamily: "var(--mono)", fontWeight: 800, fontSize: 13, letterSpacing: "2px", color: "var(--green-dp)" }}>{n}. {text}</p>
      <span style={{ flex: 1, height: 1, background: "var(--border)" }} />
    </div>
  );
}

Object.assign(window.TNXAppScreens, { CentralOSScreen, NovaOSModal });
})();
