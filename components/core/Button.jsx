import React from "react";

/**
 * TerraNexa Button
 * Variants mirror the marketing site: primary (green gradient),
 * gold (harvest CTA), ghost/glass (translucent), and link.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  icon = null,
  iconRight = null,
  href,
  disabled = false,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    border: "1px solid transparent",
    borderRadius: size === "sm" ? "12px" : "var(--tnx-radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    fontFamily: "var(--tnx-sans)",
    fontWeight: 800,
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "transform .2s var(--tnx-ease), box-shadow .2s var(--tnx-ease), background .2s var(--tnx-ease), border-color .2s var(--tnx-ease)",
    opacity: disabled ? 0.5 : 1,
    minHeight: size === "sm" ? "44px" : "56px",
    padding: size === "sm" ? "0 18px" : "0 26px",
    fontSize: size === "sm" ? "13px" : "15px",
  };

  const variants = {
    primary: {
      background: "linear-gradient(180deg, var(--tnx-green), var(--tnx-green-strong))",
      color: "#fff",
      boxShadow: "var(--tnx-shadow-green)",
    },
    gold: {
      background: "linear-gradient(135deg, var(--tnx-gold-light), var(--tnx-gold-deep))",
      color: "#13200e",
      boxShadow: "var(--tnx-shadow-gold)",
    },
    ghost: {
      background: "rgba(255,255,255,0.055)",
      color: "#fff",
      borderColor: "var(--tnx-line-strong)",
    },
    glass: {
      background: "rgba(255,255,255,0.055)",
      color: "#fff",
      borderColor: "var(--tnx-line-strong)",
    },
    link: {
      background: "transparent",
      color: "var(--tnx-green)",
      minHeight: "auto",
      padding: 0,
      boxShadow: "none",
    },
  };

  const styles = { ...base, ...variants[variant], ...style };

  const content = (
    <>
      {icon}
      {children}
      {iconRight}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} style={styles} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} disabled={disabled} style={styles} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
