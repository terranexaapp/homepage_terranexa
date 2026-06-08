import React from "react";

/**
 * TerraNexa Eyebrow — the uppercase, wide-tracked section kicker.
 * "pill" renders the bordered capsule with a glowing dot (hero style);
 * "plain" renders just the colored label (section style).
 */
export function Eyebrow({ children, variant = "plain", tone = "green", style = {}, ...rest }) {
  const color = tone === "gold" ? "var(--tnx-gold)" : "var(--tnx-green)";

  const label = {
    margin: 0,
    color,
    fontFamily: "var(--tnx-sans)",
    fontSize: "12px",
    fontWeight: 900,
    letterSpacing: "var(--tnx-track-eyebrow)",
    textTransform: "uppercase",
  };

  if (variant === "pill") {
    return (
      <p
        style={{
          ...label,
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          border: "1px solid rgba(116,202,69,0.28)",
          borderRadius: "var(--tnx-radius-pill)",
          background: "rgba(116,202,69,0.1)",
          padding: "10px 14px",
          ...style,
        }}
        {...rest}
      >
        <span
          style={{
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: color,
            boxShadow: "0 0 18px rgba(116,202,69,0.75)",
          }}
        />
        {children}
      </p>
    );
  }

  return (
    <p style={{ ...label, ...style }} {...rest}>
      {children}
    </p>
  );
}
