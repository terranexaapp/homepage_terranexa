import React from "react";

/**
 * TerraNexa ModuleCard — the platform-module tile: round green icon,
 * serif title, muted description, and a "explorar" link with arrow.
 * Hover lifts the card and reveals a green corner glow.
 */
export function ModuleCard({ icon, title, description, linkLabel = "Explorar módulo", href = "#", style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "260px",
        border: `1px solid ${hover ? "rgba(116,202,69,0.38)" : "var(--tnx-line)"}`,
        borderRadius: "var(--tnx-radius-xl)",
        background: "linear-gradient(145deg, #102419, #0b1b11)",
        padding: "30px",
        boxShadow: hover ? "var(--tnx-shadow-card)" : "none",
        transform: hover ? "translateY(-7px)" : "none",
        transition: "transform .25s var(--tnx-ease), border-color .25s var(--tnx-ease), box-shadow .25s var(--tnx-ease)",
        fontFamily: "var(--tnx-sans)",
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          position: "absolute",
          right: "-70px",
          bottom: "-90px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(116,202,69,0.12), transparent 70%)",
        }}
      />
      <span
        style={{
          display: "grid",
          placeItems: "center",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "var(--tnx-tint-green)",
          color: "var(--tnx-green)",
        }}
      >
        {icon}
      </span>
      <h3 style={{ margin: "22px 0 10px", fontFamily: "var(--tnx-serif)", fontSize: "22px", color: "var(--tnx-text)" }}>
        {title}
      </h3>
      <p style={{ margin: 0, color: "var(--tnx-muted)", fontSize: "13px", lineHeight: 1.6 }}>{description}</p>
      <a
        href={href}
        style={{
          position: "relative",
          zIndex: 1,
          display: "inline-flex",
          gap: "8px",
          marginTop: "24px",
          color: "var(--tnx-green)",
          fontSize: "13px",
          fontWeight: 800,
          textDecoration: "none",
        }}
      >
        {linkLabel} <span style={{ transform: hover ? "translateX(4px)" : "none", transition: "transform .2s var(--tnx-ease)" }}>→</span>
      </a>
    </article>
  );
}
