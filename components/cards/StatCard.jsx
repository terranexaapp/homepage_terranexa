import React from "react";

/**
 * TerraNexa StatCard — the glassy "insight" card floated over imagery.
 * Shows an uppercase label, a large value, an optional progress bar and note.
 */
export function StatCard({ label, value, unit, progress, note, noteTone = "green", icon, style = {}, ...rest }) {
  const noteColor = noteTone === "gold" ? "var(--tnx-gold)" : "var(--tnx-green)";
  return (
    <article
      style={{
        width: "270px",
        border: "1px solid rgba(255,255,255,0.13)",
        borderRadius: "var(--tnx-radius-lg)",
        background: "rgba(6,20,11,0.85)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow: "var(--tnx-shadow)",
        padding: "24px",
        fontFamily: "var(--tnx-sans)",
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "var(--tnx-muted)",
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        <span>{label}</span>
        {icon}
      </div>
      <strong style={{ display: "block", marginTop: "13px", fontSize: "42px", letterSpacing: "-0.04em", color: "var(--tnx-text)" }}>
        {value}
        {unit && <small style={{ color: "var(--tnx-muted)", fontSize: "13px", fontWeight: 600 }}> {unit}</small>}
      </strong>
      {typeof progress === "number" && (
        <div
          style={{
            height: "6px",
            overflow: "hidden",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.12)",
            margin: "13px 0 10px",
          }}
        >
          <span
            style={{
              display: "block",
              width: `${progress}%`,
              height: "100%",
              borderRadius: "inherit",
              background: "linear-gradient(90deg, var(--tnx-green-strong), var(--tnx-green))",
            }}
          />
        </div>
      )}
      {note && (
        <small style={{ display: "block", marginTop: progress == null ? "12px" : 0, color: noteColor, fontSize: "12px", fontWeight: 700 }}>
          {note}
        </small>
      )}
    </article>
  );
}
