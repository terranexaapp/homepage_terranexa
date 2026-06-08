import React from "react";

/**
 * TerraNexa Input — labeled text field styled for dark surfaces
 * (translucent fill, hairline border, green focus ring).
 */
export function Input({ label, type = "text", id, style = {}, ...rest }) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return (
    <label
      htmlFor={fieldId}
      style={{
        display: "grid",
        gap: "8px",
        color: "#d9e3da",
        fontFamily: "var(--tnx-sans)",
        fontSize: "12px",
        fontWeight: 750,
      }}
    >
      {label}
      <input
        id={fieldId}
        type={type}
        style={{
          width: "100%",
          height: "50px",
          border: "1px solid rgba(255,255,255,0.14)",
          borderRadius: "12px",
          outline: "none",
          background: "rgba(255,255,255,0.055)",
          color: "#fff",
          padding: "0 14px",
          fontFamily: "var(--tnx-sans)",
          fontSize: "14px",
          ...style,
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(116,202,69,0.65)";
          e.target.style.boxShadow = "0 0 0 3px rgba(116,202,69,0.11)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(255,255,255,0.14)";
          e.target.style.boxShadow = "none";
        }}
        {...rest}
      />
    </label>
  );
}
