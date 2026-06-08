import React from "react";

/**
 * TerraNexa Badge — small status/category pill. Tints sit on dark surfaces.
 */
export function Badge({ children, tone = "green", style = {}, ...rest }) {
  const tones = {
    green: { color: "var(--tnx-green)", bg: "rgba(116,202,69,0.12)", bd: "rgba(116,202,69,0.3)" },
    gold: { color: "var(--tnx-gold)", bg: "rgba(232,168,76,0.13)", bd: "rgba(232,168,76,0.32)" },
    danger: { color: "#ff8d72", bg: "rgba(232,90,58,0.15)", bd: "rgba(232,90,58,0.34)" },
    info: { color: "#8ec3e6", bg: "rgba(74,138,184,0.16)", bd: "rgba(74,138,184,0.34)" },
    neutral: { color: "var(--tnx-text-soft)", bg: "rgba(255,255,255,0.06)", bd: "var(--tnx-line-strong)" },
  };
  const t = tones[tone] || tones.green;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        borderRadius: "var(--tnx-radius-pill)",
        border: `1px solid ${t.bd}`,
        background: t.bg,
        color: t.color,
        padding: "5px 11px",
        fontFamily: "var(--tnx-sans)",
        fontSize: "12px",
        fontWeight: 700,
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
