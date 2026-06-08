import React from "react";

/**
 * TerraNexa Select — labeled dropdown matching the Input styling.
 * Pass options as [{ value, label }] or plain strings.
 */
export function Select({ label, options = [], id, placeholder, style = {}, ...rest }) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const norm = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
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
      <select
        id={fieldId}
        defaultValue=""
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
          appearance: "none",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%2374ca45' stroke-width='1.8'%3E%3Cpath d='m5 7.5 5 5 5-5'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
          backgroundSize: "18px",
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
      >
        {placeholder && (
          <option value="" disabled style={{ background: "#0b1d12" }}>
            {placeholder}
          </option>
        )}
        {norm.map((o) => (
          <option key={o.value} value={o.value} style={{ background: "#0b1d12" }}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
