/* @ds-bundle: {"format":3,"namespace":"TerraNexaDesignSystem_b23ba6","components":[{"name":"ModuleCard","sourcePath":"components/cards/ModuleCard.jsx"},{"name":"StatCard","sourcePath":"components/cards/StatCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"}],"sourceHashes":{"components/cards/ModuleCard.jsx":"ed4368661587","components/cards/StatCard.jsx":"28fd82db0268","components/core/Badge.jsx":"96421a4b581e","components/core/Button.jsx":"428783669704","components/core/Eyebrow.jsx":"e1a90b4a260f","components/forms/Input.jsx":"7149e36e77e6","components/forms/Select.jsx":"94b2397b1e0c","ui_kits/app/app.jsx":"959f0398380d","ui_kits/app/icons.jsx":"e92500ef99a1","ui_kits/app/screens.jsx":"a259b612a2a1","ui_kits/app/screens2.jsx":"16df3ee40b88","ui_kits/app/screens3.jsx":"cc6cdc4a43e7","ui_kits/homepage/app.jsx":"ab3eec721ea7","ui_kits/homepage/icons.jsx":"dd64040d5eb6","ui_kits/homepage/sections.jsx":"b74859c89fa5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TerraNexaDesignSystem_b23ba6 = window.TerraNexaDesignSystem_b23ba6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/ModuleCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TerraNexa ModuleCard — the platform-module tile: round green icon,
 * serif title, muted description, and a "explorar" link with arrow.
 * Hover lifts the card and reveals a green corner glow.
 */
function ModuleCard({
  icon,
  title,
  description,
  linkLabel = "Explorar módulo",
  href = "#",
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "-70px",
      bottom: "-90px",
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(116,202,69,0.12), transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      placeItems: "center",
      width: "52px",
      height: "52px",
      borderRadius: "50%",
      background: "var(--tnx-tint-green)",
      color: "var(--tnx-green)"
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "22px 0 10px",
      fontFamily: "var(--tnx-serif)",
      fontSize: "22px",
      color: "var(--tnx-text)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--tnx-muted)",
      fontSize: "13px",
      lineHeight: 1.6
    }
  }, description), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      position: "relative",
      zIndex: 1,
      display: "inline-flex",
      gap: "8px",
      marginTop: "24px",
      color: "var(--tnx-green)",
      fontSize: "13px",
      fontWeight: 800,
      textDecoration: "none"
    }
  }, linkLabel, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover ? "translateX(4px)" : "none",
      transition: "transform .2s var(--tnx-ease)"
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { ModuleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ModuleCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TerraNexa StatCard — the glassy "insight" card floated over imagery.
 * Shows an uppercase label, a large value, an optional progress bar and note.
 */
function StatCard({
  label,
  value,
  unit,
  progress,
  note,
  noteTone = "green",
  icon,
  style = {},
  ...rest
}) {
  const noteColor = noteTone === "gold" ? "var(--tnx-gold)" : "var(--tnx-green)";
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      width: "270px",
      border: "1px solid rgba(255,255,255,0.13)",
      borderRadius: "var(--tnx-radius-lg)",
      background: "rgba(6,20,11,0.85)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      boxShadow: "var(--tnx-shadow)",
      padding: "24px",
      fontFamily: "var(--tnx-sans)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "var(--tnx-muted)",
      fontSize: "10px",
      fontWeight: 800,
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), icon), /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      marginTop: "13px",
      fontSize: "42px",
      letterSpacing: "-0.04em",
      color: "var(--tnx-text)"
    }
  }, value, unit && /*#__PURE__*/React.createElement("small", {
    style: {
      color: "var(--tnx-muted)",
      fontSize: "13px",
      fontWeight: 600
    }
  }, " ", unit)), typeof progress === "number" && /*#__PURE__*/React.createElement("div", {
    style: {
      height: "6px",
      overflow: "hidden",
      borderRadius: "999px",
      background: "rgba(255,255,255,0.12)",
      margin: "13px 0 10px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: `${progress}%`,
      height: "100%",
      borderRadius: "inherit",
      background: "linear-gradient(90deg, var(--tnx-green-strong), var(--tnx-green))"
    }
  })), note && /*#__PURE__*/React.createElement("small", {
    style: {
      display: "block",
      marginTop: progress == null ? "12px" : 0,
      color: noteColor,
      fontSize: "12px",
      fontWeight: 700
    }
  }, note));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TerraNexa Badge — small status/category pill. Tints sit on dark surfaces.
 */
function Badge({
  children,
  tone = "green",
  style = {},
  ...rest
}) {
  const tones = {
    green: {
      color: "var(--tnx-green)",
      bg: "rgba(116,202,69,0.12)",
      bd: "rgba(116,202,69,0.3)"
    },
    gold: {
      color: "var(--tnx-gold)",
      bg: "rgba(232,168,76,0.13)",
      bd: "rgba(232,168,76,0.32)"
    },
    danger: {
      color: "#ff8d72",
      bg: "rgba(232,90,58,0.15)",
      bd: "rgba(232,90,58,0.34)"
    },
    info: {
      color: "#8ec3e6",
      bg: "rgba(74,138,184,0.16)",
      bd: "rgba(74,138,184,0.34)"
    },
    neutral: {
      color: "var(--tnx-text-soft)",
      bg: "rgba(255,255,255,0.06)",
      bd: "var(--tnx-line-strong)"
    }
  };
  const t = tones[tone] || tones.green;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
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
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TerraNexa Button
 * Variants mirror the marketing site: primary (green gradient),
 * gold (harvest CTA), ghost/glass (translucent), and link.
 */
function Button({
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
    fontSize: size === "sm" ? "13px" : "15px"
  };
  const variants = {
    primary: {
      background: "linear-gradient(180deg, var(--tnx-green), var(--tnx-green-strong))",
      color: "#fff",
      boxShadow: "var(--tnx-shadow-green)"
    },
    gold: {
      background: "linear-gradient(135deg, var(--tnx-gold-light), var(--tnx-gold-deep))",
      color: "#13200e",
      boxShadow: "var(--tnx-shadow-gold)"
    },
    ghost: {
      background: "rgba(255,255,255,0.055)",
      color: "#fff",
      borderColor: "var(--tnx-line-strong)"
    },
    glass: {
      background: "rgba(255,255,255,0.055)",
      color: "#fff",
      borderColor: "var(--tnx-line-strong)"
    },
    link: {
      background: "transparent",
      color: "var(--tnx-green)",
      minHeight: "auto",
      padding: 0,
      boxShadow: "none"
    }
  };
  const styles = {
    ...base,
    ...variants[variant],
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon, children, iconRight);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: styles,
      onClick: onClick
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: styles,
    onClick: onClick
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TerraNexa Eyebrow — the uppercase, wide-tracked section kicker.
 * "pill" renders the bordered capsule with a glowing dot (hero style);
 * "plain" renders just the colored label (section style).
 */
function Eyebrow({
  children,
  variant = "plain",
  tone = "green",
  style = {},
  ...rest
}) {
  const color = tone === "gold" ? "var(--tnx-gold)" : "var(--tnx-green)";
  const label = {
    margin: 0,
    color,
    fontFamily: "var(--tnx-sans)",
    fontSize: "12px",
    fontWeight: 900,
    letterSpacing: "var(--tnx-track-eyebrow)",
    textTransform: "uppercase"
  };
  if (variant === "pill") {
    return /*#__PURE__*/React.createElement("p", _extends({
      style: {
        ...label,
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        border: "1px solid rgba(116,202,69,0.28)",
        borderRadius: "var(--tnx-radius-pill)",
        background: "rgba(116,202,69,0.1)",
        padding: "10px 14px",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        width: "7px",
        height: "7px",
        borderRadius: "50%",
        background: color,
        boxShadow: "0 0 18px rgba(116,202,69,0.75)"
      }
    }), children);
  }
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      ...label,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TerraNexa Input — labeled text field styled for dark surfaces
 * (translucent fill, hairline border, green focus ring).
 */
function Input({
  label,
  type = "text",
  id,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "grid",
      gap: "8px",
      color: "#d9e3da",
      fontFamily: "var(--tnx-sans)",
      fontSize: "12px",
      fontWeight: 750
    }
  }, label, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    style: {
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
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = "rgba(116,202,69,0.65)";
      e.target.style.boxShadow = "0 0 0 3px rgba(116,202,69,0.11)";
    },
    onBlur: e => {
      e.target.style.borderColor = "rgba(255,255,255,0.14)";
      e.target.style.boxShadow = "none";
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TerraNexa Select — labeled dropdown matching the Input styling.
 * Pass options as [{ value, label }] or plain strings.
 */
function Select({
  label,
  options = [],
  id,
  placeholder,
  style = {},
  ...rest
}) {
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);
  const norm = options.map(o => typeof o === "string" ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "grid",
      gap: "8px",
      color: "#d9e3da",
      fontFamily: "var(--tnx-sans)",
      fontSize: "12px",
      fontWeight: 750
    }
  }, label, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    defaultValue: "",
    style: {
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
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='none' stroke='%2374ca45' stroke-width='1.8'%3E%3Cpath d='m5 7.5 5 5 5-5'/%3E%3C/svg%3E\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 14px center",
      backgroundSize: "18px",
      ...style
    },
    onFocus: e => {
      e.target.style.borderColor = "rgba(116,202,69,0.65)";
      e.target.style.boxShadow = "0 0 0 3px rgba(116,202,69,0.11)";
    },
    onBlur: e => {
      e.target.style.borderColor = "rgba(255,255,255,0.14)";
      e.target.style.boxShadow = "none";
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true,
    style: {
      background: "#0b1d12"
    }
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    style: {
      background: "#0b1d12"
    }
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/app.jsx
try { (() => {
/* TerraNexa app UI kit — interactive shell (navigation between screens). */
(function () {
  const {
    FazendasScreen,
    MapaScreen,
    MonitoramentoScreen,
    CentralOSScreen,
    NovaOSModal,
    SoloScreen,
    ChuvaScreen,
    ExecutarOSModal
  } = window.TNXAppScreens;
  function App() {
    const [view, setView] = React.useState("fazendas"); // fazendas|mapa|monit|os|solo|chuva
    const [novaOS, setNovaOS] = React.useState(false);
    const [executar, setExecutar] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      className: "tnx-app"
    }, /*#__PURE__*/React.createElement("div", {
      className: "tnx-phone"
    }, view === "fazendas" && /*#__PURE__*/React.createElement(FazendasScreen, {
      onOpenFarm: () => setView("mapa")
    }), view === "mapa" && /*#__PURE__*/React.createElement(MapaScreen, {
      onMenu: () => setView("fazendas"),
      onMonitor: () => setView("monit"),
      onOS: () => setView("os"),
      onSolo: () => setView("solo"),
      onChuva: () => setView("chuva")
    }), view === "monit" && /*#__PURE__*/React.createElement(MonitoramentoScreen, {
      onBack: () => setView("mapa")
    }), view === "solo" && /*#__PURE__*/React.createElement(SoloScreen, {
      onBack: () => setView("mapa")
    }), view === "chuva" && /*#__PURE__*/React.createElement(ChuvaScreen, {
      onBack: () => setView("mapa")
    }), view === "os" && /*#__PURE__*/React.createElement(CentralOSScreen, {
      onBack: () => setView("mapa"),
      onNova: () => setNovaOS(true),
      onExecutar: () => setExecutar(true)
    }), novaOS && /*#__PURE__*/React.createElement(NovaOSModal, {
      onClose: () => setNovaOS(false)
    }), executar && /*#__PURE__*/React.createElement(ExecutarOSModal, {
      onClose: () => setExecutar(false)
    })));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/icons.jsx
try { (() => {
/* TerraNexa app — line icons (stroke 1.8, currentColor). */
(function () {
  const S = p => ({
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  });
  const Menu = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  }));
  const Refresh = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-2.64-6.36M21 4v5h-5"
  }));
  const Locate = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v3M12 19v3M2 12h3M19 12h3"
  }));
  const Bug = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "M8 9a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0zM8 9 5.5 6.5M16 9l2.5-2.5M8 13H4m16 0h-4M8 16l-2.5 2.5M16 16l2.5 2.5M12 5V3"
  }));
  const Back = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }));
  const Fwd = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }));
  const Plus = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }));
  const Search = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  }));
  const Close = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6 6 18"
  }));
  const Check = p => /*#__PURE__*/React.createElement("svg", S({
    strokeWidth: 2.2,
    ...p
  }), /*#__PURE__*/React.createElement("path", {
    d: "m5 13 4 4L19 7"
  }));
  const Pin = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "2.5"
  }));
  const Crosshair = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "7"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v3M12 19v3M2 12h3M19 12h3"
  }));
  const Layers = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 18l9 5 9-5"
  }));
  const Chevron = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }));
  Object.assign(window, {
    TNXAppIcons: {
      Menu,
      Refresh,
      Locate,
      Bug,
      Back,
      Fwd,
      Plus,
      Search,
      Close,
      Check,
      Pin,
      Crosshair,
      Layers,
      Chevron
    }
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens.jsx
try { (() => {
/* TerraNexa app UI kit — screens & shared pieces.
   All names/photos/farm anonymized. Faithful to the product's
   light theme: Georgia serif, monospace labels, green-ink palette. */
(function () {
  const {
    Menu,
    Refresh,
    Locate,
    Bug,
    Back,
    Fwd,
    Plus,
    Search,
    Close,
    Check,
    Pin,
    Crosshair,
    Layers,
    Chevron
  } = window.TNXAppIcons;

  /* ---------- anonymized demo data ---------- */
  const OWNER = "Ricardo Menezes";
  const FARM = "Boa Vista";
  const LOCATION = "Baixa Grande · BA";
  const TECHS = [{
    name: "Camila Duarte",
    initials: "CD",
    color: "var(--green-dp)",
    trilha: "569",
    pontos: 3,
    ocorr: 5,
    visitas: 1,
    grupo: "DANINHAS",
    grupoN: 2,
    planta: "Vassourinha-de-botão",
    sci: "Spermacoce verticillata"
  }, {
    name: "André Tavares",
    initials: "AT",
    color: "var(--soil)",
    trilha: "68",
    pontos: 4,
    ocorr: 4,
    visitas: 4,
    grupo: "COLHEITA",
    grupoN: 1,
    planta: "Perda de colheita",
    sci: "Média 0,63 sc/ha"
  }, {
    name: "Marina Reis",
    initials: "MR",
    color: "var(--blue)",
    trilha: "412",
    pontos: 2,
    ocorr: 3,
    visitas: 2,
    grupo: "PRAGAS",
    grupoN: 1,
    planta: "Percevejo-marrom",
    sci: "Euschistus heros"
  }];

  /* ---------- Avatar (initials only — no real photos) ---------- */
  function Avatar({
    initials,
    color = "var(--green-dp)",
    size = 46
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        borderRadius: 999,
        flexShrink: 0,
        background: color,
        color: "#fff",
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: size * 0.3,
        letterSpacing: "0.5px"
      }
    }, initials);
  }

  /* ---------- Brand wordmark ---------- */
  function Wordmark({
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/terranexa-icon.svg",
      alt: "",
      style: {
        width: 38,
        height: 38,
        borderRadius: 999
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 19,
        lineHeight: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--green-dp)"
      }
    }, "Terra"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--amber)"
      }
    }, "Nexa")), sub && /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        marginTop: 4,
        letterSpacing: "2px"
      }
    }, sub)));
  }

  /* ---------- Floating farm header (white pill on maps) ---------- */
  function FloatingFarmHeader({
    onMenu
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 14,
        left: 14,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        gap: 11,
        background: "rgba(255,255,255,0.94)",
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: 8,
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
        backdropFilter: "blur(10px)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onMenu,
      "aria-label": "Menu",
      style: {
        background: "var(--green-dp)",
        color: "#fff",
        border: "none",
        borderRadius: 9,
        width: 40,
        height: 40,
        display: "grid",
        placeItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Menu, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingRight: 10
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        letterSpacing: "2.4px",
        color: "var(--text-dim)"
      }
    }, "FAZENDA"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 21,
        color: "var(--text-dk)",
        lineHeight: 1
      }
    }, FARM)));
  }

  /* ---------- Parcel grid (satellite-style talhões) ---------- */
  function ParcelGrid({
    tint = "rgba(255,255,255,0.85)",
    cells
  }) {
    const labels = cells || ["A26", "A28", "A27", "A25", "A18", "A16", "A19", "A21", "A14", "A17", "A15", "A10", "A13", "A06", "A04", "A07", "C09", "A02", "A05", "B09", "C04", "A01", "B05", "B07"];
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 414 560",
      preserveAspectRatio: "xMidYMid slice",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("g", {
      transform: "rotate(-24 207 280)",
      stroke: tint,
      strokeWidth: "1.1",
      fill: "none",
      opacity: "0.9"
    }, Array.from({
      length: 7
    }).map((_, i) => /*#__PURE__*/React.createElement("line", {
      key: "h" + i,
      x1: "-120",
      y1: 60 + i * 78,
      x2: "540",
      y2: 60 + i * 78
    })), Array.from({
      length: 8
    }).map((_, i) => /*#__PURE__*/React.createElement("line", {
      key: "v" + i,
      x1: -40 + i * 78,
      y1: "-40",
      x2: -40 + i * 78,
      y2: "620"
    }))), /*#__PURE__*/React.createElement("g", {
      fill: "#fff",
      fontFamily: "var(--sans)",
      fontSize: "11",
      fontWeight: "700",
      opacity: "0.92",
      style: {
        textShadow: "0 1px 3px rgba(0,0,0,0.6)"
      }
    }, labels.map((l, i) => {
      const col = i % 6,
        row = Math.floor(i / 6);
      return /*#__PURE__*/React.createElement("text", {
        key: l,
        x: 34 + col * 66,
        y: 70 + row * 92,
        textAnchor: "middle"
      }, l);
    })));
  }

  /* ---------- Occurrence pin (crosshair + count) ---------- */
  function OccurrencePin({
    x,
    y,
    n,
    tone = "var(--amber)"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%,-50%)",
        zIndex: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 999,
        background: "rgba(20,40,18,0.78)",
        border: "2px solid " + tone,
        display: "grid",
        placeItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 12,
        height: 12,
        borderRadius: 999,
        border: "2px solid " + tone
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: -6,
        right: -6,
        width: 18,
        height: 18,
        borderRadius: 999,
        background: "#1a2e16",
        color: "#fff",
        fontFamily: "var(--mono)",
        fontSize: 10,
        fontWeight: 800,
        display: "grid",
        placeItems: "center",
        border: "1.5px solid #fff"
      }
    }, n));
  }

  /* ---------- Severity legend (on monitoring map) ---------- */
  function SeverityLegend() {
    const rows = [["Severa", "var(--red)"], ["Moderada", "var(--amber)"], ["Leve", "var(--green)"], ["Saudável", "var(--green-dp)"]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 14,
        right: 14,
        zIndex: 7,
        background: "rgba(255,255,255,0.95)",
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: "12px 14px",
        boxShadow: "0 8px 22px rgba(0,0,0,0.18)",
        display: "grid",
        gap: 7
      }
    }, rows.map(([l, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        fontFamily: "var(--serif)",
        fontSize: 14,
        color: "var(--text-dk)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 11,
        height: 11,
        borderRadius: 999,
        background: c
      }
    }), l)));
  }

  /* ---------- Map tool dock (right edge) ---------- */
  function ToolDock({
    onMonitor
  }) {
    const btn = {
      width: 46,
      height: 46,
      borderRadius: 12,
      border: "1px solid var(--border)",
      background: "rgba(255,255,255,0.96)",
      color: "var(--green-dp)",
      display: "grid",
      placeItems: "center",
      boxShadow: "0 6px 16px rgba(0,0,0,0.16)"
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 90,
        right: 14,
        zIndex: 20,
        display: "grid",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: btn,
      "aria-label": "Camadas"
    }, /*#__PURE__*/React.createElement(Layers, null)), /*#__PURE__*/React.createElement("button", {
      style: btn,
      "aria-label": "Atualizar"
    }, /*#__PURE__*/React.createElement(Refresh, null)), /*#__PURE__*/React.createElement("button", {
      style: btn,
      "aria-label": "Localizar"
    }, /*#__PURE__*/React.createElement(Crosshair, null)), /*#__PURE__*/React.createElement("button", {
      style: {
        ...btn,
        background: "var(--green-dp)",
        color: "#fff",
        border: "none"
      },
      "aria-label": "Monitorar",
      onClick: onMonitor
    }, /*#__PURE__*/React.createElement(Bug, null)));
  }

  /* =====================================================================
     SCREEN 1 — Fazendas (home / property list)
     ===================================================================== */
  function FazendasScreen({
    onOpenFarm
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "tnx-screen",
      style: {
        background: "linear-gradient(180deg, #fbfdf6, #f3f7e8 60%, #fdf6e8)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: "14px 16px",
        borderBottom: "1px solid var(--border)",
        background: "rgba(247,250,242,0.7)"
      }
    }, /*#__PURE__*/React.createElement(Wordmark, {
      sub: OWNER.toUpperCase()
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, ["Perfil", "Sair"].map(l => /*#__PURE__*/React.createElement("button", {
      key: l,
      style: {
        border: "1px solid var(--border)",
        background: "var(--bg)",
        borderRadius: 10,
        padding: "9px 13px",
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 11,
        letterSpacing: "1px",
        color: "var(--text-dk)",
        textTransform: "uppercase"
      }
    }, l)))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "26px 20px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        letterSpacing: "2.4px"
      }
    }, "MINHAS PROPRIEDADES"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "6px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 34,
        color: "var(--text-dk)"
      }
    }, "Fazendas"), /*#__PURE__*/React.createElement("button", {
      onClick: onOpenFarm,
      style: {
        width: "100%",
        textAlign: "left",
        marginTop: 22,
        background: "var(--bg)",
        border: "1px solid var(--border)",
        borderRadius: 18,
        padding: "20px 22px",
        boxShadow: "0 10px 28px rgba(26,58,10,0.06)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 24,
        color: "var(--text-dk)"
      }
    }, FARM), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "5px 0 0",
        color: "var(--text-mid)",
        fontSize: 15
      }
    }, LOCATION), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border)",
        margin: "16px 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 40
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        letterSpacing: "1.6px"
      }
    }, "\xC1REA TOTAL"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 22,
        color: "var(--green-dp)"
      }
    }, "18.430 ha")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        letterSpacing: "1.6px"
      }
    }, "TALH\xD5ES"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "6px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 22,
        color: "var(--amber-dk)"
      }
    }, "58"))))));
  }

  /* =====================================================================
     SCREEN 2 — Mapa principal
     ===================================================================== */
  function MapaScreen({
    onMenu,
    onMonitor,
    onOS,
    onSolo,
    onChuva
  }) {
    const mods = [["Monitorar", onMonitor, true], ["Solo", onSolo, false], ["Chuva", onChuva, false], ["Ordens", onOS, false]];
    return /*#__PURE__*/React.createElement("div", {
      className: "tnx-screen tnx-map-aerial"
    }, /*#__PURE__*/React.createElement(FloatingFarmHeader, {
      onMenu: onMenu
    }), /*#__PURE__*/React.createElement(ToolDock, {
      onMonitor: onMonitor
    }), /*#__PURE__*/React.createElement(ParcelGrid, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 16,
        zIndex: 20,
        display: "flex",
        gap: 9,
        padding: "0 14px",
        overflowX: "auto"
      }
    }, mods.map(([l, fn, primary]) => /*#__PURE__*/React.createElement("button", {
      key: l,
      onClick: fn,
      style: dockBtn(primary)
    }, primary && /*#__PURE__*/React.createElement(Bug, {
      width: 17,
      height: 17
    }), " ", l))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        right: 8,
        bottom: 78,
        zIndex: 5,
        fontFamily: "var(--sans)",
        fontSize: 10,
        color: "rgba(255,255,255,0.85)",
        background: "rgba(0,0,0,0.35)",
        padding: "2px 6px",
        borderRadius: 4
      }
    }, "Leaflet | Tiles \xA9 Esri"));
  }
  function dockBtn(primary) {
    return {
      flex: "0 0 auto",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      minHeight: 48,
      padding: "0 20px",
      borderRadius: 14,
      border: primary ? "none" : "1px solid var(--border)",
      background: primary ? "var(--green-dp)" : "rgba(255,255,255,0.96)",
      color: primary ? "#fff" : "var(--text-dk)",
      fontFamily: "var(--serif)",
      fontWeight: 800,
      fontSize: 15,
      boxShadow: "0 10px 24px rgba(0,0,0,0.22)"
    };
  }

  /* =====================================================================
     SCREEN 3 — Monitoramento (técnico do dia)
     ===================================================================== */
  function MonitoramentoScreen({
    onBack
  }) {
    const [idx, setIdx] = React.useState(0);
    const t = TECHS[idx];
    const move = d => setIdx((idx + d + TECHS.length) % TECHS.length);
    const metric = (l, v, sub) => /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "center",
        padding: "4px 6px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow"
    }, l), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "5px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 22,
        color: "var(--text-dk)"
      }
    }, v, sub && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "var(--text-dim)"
      }
    }, " ", sub)));
    return /*#__PURE__*/React.createElement("div", {
      className: "tnx-screen",
      style: {
        background: "var(--bg)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "12px 16px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        border: "1px solid var(--border)",
        background: "var(--bg)",
        borderRadius: 12,
        padding: "9px 15px",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 16,
        color: "var(--text-dk)"
      }
    }, /*#__PURE__*/React.createElement(Back, null), " Voltar")), /*#__PURE__*/React.createElement("div", {
      className: "tnx-map-scouting",
      style: {
        position: "relative",
        height: 300,
        margin: "0 16px",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid var(--border)"
      }
    }, /*#__PURE__*/React.createElement(SeverityLegend, null), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: "12%",
        width: "62%",
        height: "76%",
        background: "rgba(86,140,58,0.55)",
        clipPath: "polygon(0 18%, 60% 0, 100% 70%, 36% 100%, 0 80%)"
      }
    }), /*#__PURE__*/React.createElement("svg", {
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M150 250 C140 200 120 150 165 95",
      stroke: "var(--amber)",
      strokeWidth: "3",
      fill: "none",
      strokeLinecap: "round",
      opacity: "0.92"
    })), /*#__PURE__*/React.createElement(OccurrencePin, {
      x: "165",
      y: "95",
      n: "2"
    }), /*#__PURE__*/React.createElement(OccurrencePin, {
      x: "150",
      y: "248",
      n: "2"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 14,
        bottom: 14,
        background: "rgba(255,255,255,0.95)",
        borderRadius: 12,
        padding: "8px 13px",
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 13,
        color: "var(--text-dk)"
      }
    }, "A13 \xB7 5 jun")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        margin: "16px 16px 0"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => move(-1),
      style: navBtn
    }, /*#__PURE__*/React.createElement(Back, {
      width: 16,
      height: 16
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 22,
        color: "var(--text-dk)"
      }
    }, t.name), /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        marginTop: 5
      }
    }, "HOJE \xB7 5 JUN 2026 \xB7 ", t.ocorr, " OCORR\xCANCIAS"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "5px 0 0",
        fontFamily: "var(--mono)",
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: "1px",
        color: "var(--green-dp)"
      }
    }, "T\xC9CNICO ", idx + 1, " DE ", TECHS.length)), /*#__PURE__*/React.createElement("button", {
      onClick: () => move(1),
      style: navBtn
    }, /*#__PURE__*/React.createElement(Fwd, {
      width: 16,
      height: 16
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "14px 16px 0",
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 13
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: t.initials,
      color: t.color
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 19,
        color: "var(--text-dk)"
      }
    }, t.name), /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        marginTop: 4
      }
    }, "5 JUN \xB7 ", t.visitas, " VISITA", t.visitas > 1 ? "S" : ""))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        marginTop: 16,
        borderTop: "1px solid var(--border-soft)",
        paddingTop: 14
      }
    }, metric("TRILHA", t.trilha, "m"), metric("TEMPO", "—"), metric("PONTOS", t.pontos), metric("OCORR.", t.ocorr))), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "20px 16px 28px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        letterSpacing: "2px"
      }
    }, t.grupo, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-grid",
        placeItems: "center",
        minWidth: 18,
        height: 18,
        borderRadius: 999,
        border: "1px solid var(--border)",
        fontSize: 10
      }
    }, t.grupoN)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: 12,
        display: "flex",
        gap: 13,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "tnx-map-scouting",
      style: {
        width: 62,
        height: 62,
        borderRadius: 12,
        flexShrink: 0,
        border: "1px solid var(--border)"
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 18,
        color: "var(--text-dk)"
      }
    }, t.planta), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "3px 0 0",
        fontStyle: "italic",
        color: "var(--text-mid)",
        fontSize: 14
      }
    }, t.sci)))));
  }
  const navBtn = {
    width: 40,
    height: 40,
    borderRadius: 12,
    border: "1px solid var(--border)",
    background: "var(--bg)",
    color: "var(--text-dk)",
    display: "grid",
    placeItems: "center",
    flexShrink: 0
  };
  window.TNXAppScreens = {
    Avatar,
    Wordmark,
    FazendasScreen,
    MapaScreen,
    MonitoramentoScreen
  };
  window.TNXAppShared = {
    Avatar,
    FloatingFarmHeader,
    ParcelGrid
  };
  window.TNX_TECHS = TECHS;
  window.TNX_META = {
    OWNER,
    FARM,
    LOCATION
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens2.jsx
try { (() => {
/* TerraNexa app UI kit — Ordens de Serviço (Central + Nova OS modal). */
(function () {
  const {
    Back,
    Plus,
    Search,
    Close,
    Check,
    Chevron
  } = window.TNXAppIcons;

  /* ---------- Central operacional (OS list) ---------- */
  function CentralOSScreen({
    onBack,
    onNova,
    onExecutar
  }) {
    const [filter, setFilter] = React.useState("Pendentes");
    const stats = [["PENDENTES", 1, "var(--amber-dk)"], ["VENCEM HOJE", 0, "var(--amber-dk)"], ["ATRASADAS", 0, "var(--red)"], ["CONCLUÍDAS", 4, "var(--green-dp)"]];
    return /*#__PURE__*/React.createElement("div", {
      className: "tnx-screen",
      style: {
        background: "var(--bg)",
        padding: "16px 16px 28px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 11,
        background: "var(--bg-soft)",
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: 8,
        boxShadow: "0 6px 18px rgba(0,0,0,0.05)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--green-dp)",
        color: "#fff",
        borderRadius: 9,
        width: 38,
        height: 38,
        display: "grid",
        placeItems: "center",
        fontWeight: 900
      }
    }, "\u2261"), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingRight: 8
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        letterSpacing: "2.4px"
      }
    }, "FAZENDA"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 20,
        color: "var(--text-dk)",
        lineHeight: 1
      }
    }, window.TNX_META.FARM))), /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        gap: 8,
        marginTop: 18,
        border: "1px solid var(--border)",
        background: "var(--green-light)",
        borderRadius: 12,
        padding: "12px 14px",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 16,
        color: "var(--text-dk)"
      }
    }, "\u2190 Gerenciamento"), /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        marginTop: 22,
        letterSpacing: "2.4px"
      }
    }, "ORDEM DE SERVI\xC7O"), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: "6px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 30,
        color: "var(--text-dk)"
      }
    }, "Central operacional"), /*#__PURE__*/React.createElement("button", {
      onClick: onNova,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        marginTop: 16,
        background: "var(--green-dp)",
        color: "#fff",
        border: "none",
        borderRadius: 12,
        padding: "12px 18px",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement(Plus, {
      width: 18,
      height: 18
    }), " Nova OS"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        marginTop: 18
      }
    }, stats.map(([l, n, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: "14px 16px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow"
    }, l), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "8px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 28,
        color: c
      }
    }, n)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        background: "var(--bg-soft)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: "10px 12px",
        color: "var(--text-dim)"
      }
    }, /*#__PURE__*/React.createElement(Search, {
      width: 17,
      height: 17
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--serif)",
        fontSize: 15
      }
    }, "Buscar por OS, opera\xE7\xE3o, equipe ou talh\xE3o\u2026")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginTop: 12,
        flexWrap: "wrap"
      }
    }, ["Pendentes", "Concluídas", "Canceladas", "Todas"].map(f => {
      const on = filter === f;
      return /*#__PURE__*/React.createElement("button", {
        key: f,
        onClick: () => setFilter(f),
        style: {
          border: "1px solid " + (on ? "var(--green-dp)" : "var(--border)"),
          background: on ? "var(--green-light)" : "var(--bg)",
          color: "var(--text-dk)",
          borderRadius: 10,
          padding: "8px 14px",
          fontFamily: "var(--serif)",
          fontWeight: 800,
          fontSize: 14
        }
      }, f);
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        border: "1px solid var(--green-dp)",
        background: "var(--green-light)",
        borderRadius: 16,
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 15,
        color: "var(--text-dk)"
      }
    }, "OS-0011"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...pill,
        background: "var(--amber-light)",
        color: "var(--amber-dk)"
      }
    }, "PENDENTE"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...pill,
        background: "var(--bg)",
        color: "var(--text-mid)",
        border: "1px solid var(--border)"
      }
    }, "EQ-01"), /*#__PURE__*/React.createElement("button", {
      onClick: onExecutar,
      style: {
        marginLeft: "auto",
        background: "var(--green-dp)",
        color: "#fff",
        border: "none",
        borderRadius: 10,
        padding: "9px 16px",
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 12,
        letterSpacing: "0.5px"
      }
    }, "EXECUTAR")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "12px 0 0",
        color: "var(--text-mid)",
        fontStyle: "italic",
        fontSize: 14
      }
    }, "Aplica\xE7\xE3o Tratorizada Terrestre"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "3px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 19,
        color: "var(--text-dk)"
      }
    }, "Desseca\xE7\xE3o Pr\xE9-Plantio"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: "var(--bg)",
        border: "1px solid var(--border)",
        borderRadius: 8,
        padding: "5px 10px",
        fontFamily: "var(--mono)",
        fontSize: 12,
        fontWeight: 700
      }
    }, "A01 \xB7 405 ha"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--mono)",
        fontSize: 12,
        color: "var(--text-mid)"
      }
    }, "Prazo: 2026-06-11")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "10px 0 0",
        color: "var(--text-mid)",
        fontSize: 13
      }
    }, "2 insumos recomendados")));
  }
  const pill = {
    borderRadius: 999,
    padding: "4px 10px",
    fontFamily: "var(--mono)",
    fontWeight: 800,
    fontSize: 11,
    letterSpacing: "0.5px"
  };

  /* ---------- Nova Ordem de Serviço (modal) ---------- */
  function NovaOSModal({
    onClose
  }) {
    const [servico, setServico] = React.useState(0);
    const [nat, setNat] = React.useState(0);
    const servicos = [["Aplicação Tratorizada Terrestre", 9], ["Aplicação Aérea", 5], ["Adubação Autopropelido", 2], ["Adubação Aérea", 2], ["Plantio", 3], ["Colheita", 2], ["Outras Atividades", 2]];
    const naturezas = ["Dessecação Pré-Plantio", "Dessecação Pré-Colheita", "Pré-Emergente", "Pós-Emergente", "Fungicida", "Inseticida", "Micronutriente", "Biológico"];
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "absolute",
        inset: 0,
        zIndex: 60,
        background: "rgba(40,50,30,0.55)",
        display: "flex",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        background: "var(--bg)",
        width: "100%",
        maxHeight: "94%",
        borderRadius: "22px 22px 0 0",
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 0,
        background: "var(--bg)",
        padding: "20px 20px 14px",
        borderBottom: "1px solid var(--border)",
        zIndex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        letterSpacing: "2.4px"
      }
    }, "ABRIR ORDEM DE SERVI\xC7O"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "6px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 26,
        color: "var(--text-dk)"
      }
    }, "Nova Ordem de Servi\xE7o"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 14,
        color: "var(--green-dp)"
      }
    }, "OS-0011")), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Fechar",
      style: {
        width: 40,
        height: 40,
        borderRadius: 12,
        border: "1px solid var(--border)",
        background: "var(--bg-soft)",
        color: "var(--text-dk)",
        display: "grid",
        placeItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Close, null)))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "18px 20px 24px"
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      n: "1",
      text: "SERVI\xC7O"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 9,
        marginTop: 12
      }
    }, servicos.map(([l, n], i) => {
      const on = servico === i;
      return /*#__PURE__*/React.createElement("button", {
        key: l,
        onClick: () => setServico(i),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 13,
          textAlign: "left",
          border: "1px solid " + (on ? "var(--green-dp)" : "var(--border)"),
          background: on ? "var(--green-light)" : "var(--bg)",
          borderRadius: 12,
          padding: "13px 15px"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 30,
          height: 30,
          borderRadius: 8,
          display: "grid",
          placeItems: "center",
          flexShrink: 0,
          background: on ? "var(--green-dp)" : "transparent",
          color: on ? "#fff" : "var(--text-dim)",
          border: on ? "none" : "1px solid var(--border)",
          fontFamily: "var(--mono)",
          fontWeight: 800,
          fontSize: 13
        }
      }, i + 1), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          fontFamily: "var(--serif)",
          fontWeight: 800,
          fontSize: 17,
          color: "var(--text-dk)"
        }
      }, l), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--mono)",
          fontSize: 13,
          color: "var(--text-dim)"
        }
      }, n));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(SectionLabel, {
      n: "2",
      text: "NATUREZA AGR\xCDCOLA"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 9,
        marginTop: 12
      }
    }, naturezas.map((l, i) => {
      const on = nat === i;
      return /*#__PURE__*/React.createElement("button", {
        key: l,
        onClick: () => setNat(i),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 13,
          textAlign: "left",
          border: "1px solid " + (on ? "var(--green-dp)" : "var(--border)"),
          background: on ? "var(--green-light)" : "var(--bg)",
          borderRadius: 12,
          padding: "13px 15px"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 20,
          height: 20,
          borderRadius: 6,
          flexShrink: 0,
          display: "grid",
          placeItems: "center",
          background: on ? "var(--green-dp)" : "var(--bg-soft)",
          border: on ? "none" : "1px solid var(--border)",
          color: "#fff"
        }
      }, on && /*#__PURE__*/React.createElement(Check, {
        width: 14,
        height: 14
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          fontFamily: "var(--serif)",
          fontWeight: 800,
          fontSize: 17,
          color: "var(--text-dk)"
        }
      }, l));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        flex: 1,
        border: "1px solid var(--border)",
        background: "var(--bg)",
        borderRadius: 12,
        padding: "14px",
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 13,
        letterSpacing: "1px",
        color: "var(--text-dk)"
      }
    }, "CANCELAR"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        flex: 2,
        border: "none",
        background: "var(--green-dp)",
        color: "#fff",
        borderRadius: 12,
        padding: "14px",
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 13,
        letterSpacing: "1px"
      }
    }, "CRIAR ORDEM DE SERVI\xC7O")))));
  }
  function SectionLabel({
    n,
    text
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 13,
        letterSpacing: "2px",
        color: "var(--green-dp)"
      }
    }, n, ". ", text), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border)"
      }
    }));
  }
  Object.assign(window.TNXAppScreens, {
    CentralOSScreen,
    NovaOSModal
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/screens3.jsx
try { (() => {
/* TerraNexa app UI kit — Solo, Chuva e Executar OS (receituário/custo real). */
(function () {
  const {
    Back,
    Plus,
    Close,
    Check,
    Menu,
    Refresh,
    Crosshair,
    Layers,
    Chevron
  } = window.TNXAppIcons;
  const {
    FloatingFarmHeader,
    ParcelGrid
  } = window.TNXAppShared;
  const FARM = window.TNX_META.FARM;

  /* ---------- shared: dark stat tiles over a map ---------- */
  function DarkTiles({
    items
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 12,
        right: 12,
        bottom: 14,
        zIndex: 8,
        display: "flex",
        gap: 9
      }
    }, items.map(([l, v, sub]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        flex: 1,
        background: "rgba(20,40,18,0.86)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 12,
        padding: "11px 13px",
        backdropFilter: "blur(4px)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--mono)",
        fontSize: 8.5,
        letterSpacing: "1px",
        fontWeight: 800,
        color: "rgba(255,255,255,0.7)",
        textTransform: "uppercase"
      }
    }, l), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "5px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 21,
        color: "#fff",
        lineHeight: 1
      }
    }, v), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "3px 0 0",
        fontFamily: "var(--sans)",
        fontSize: 9.5,
        color: "rgba(255,255,255,0.65)"
      }
    }, sub))));
  }

  /* ---------- shared: map legend card ---------- */
  function MapLegend({
    title,
    sub,
    rows,
    mono
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 14,
        bottom: 92,
        zIndex: 8,
        background: "rgba(255,255,255,0.96)",
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: "12px 14px",
        boxShadow: "0 10px 26px rgba(0,0,0,0.2)",
        maxHeight: 300,
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--mono)",
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: "0.5px",
        color: "var(--text-mid)"
      }
    }, title), sub && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 8px",
        fontFamily: "var(--mono)",
        fontSize: 10,
        color: "var(--text-dim)"
      }
    }, sub), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 5,
        marginTop: sub ? 0 : 8
      }
    }, rows.map(([l, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        fontFamily: mono ? "var(--mono)" : "var(--sans)",
        fontSize: mono ? 11 : 13,
        color: "var(--text-dk)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 14,
        height: 14,
        borderRadius: 4,
        background: c,
        flexShrink: 0
      }
    }), l))));
  }

  /* ---------- Pluviômetro pin (green U marker) ---------- */
  function PluvioPin({
    x,
    y,
    code,
    mm
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: x,
        top: y,
        transform: "translate(-50%,-50%)",
        zIndex: 6,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 999,
        background: "rgba(255,255,255,0.95)",
        border: "2px solid var(--green-dp)",
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 12,
        color: "var(--green-dp)",
        boxShadow: "0 3px 8px rgba(0,0,0,0.35)"
      }
    }, "U"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontFamily: "var(--mono)",
        fontSize: 9,
        fontWeight: 800,
        color: "#fff",
        textShadow: "0 1px 3px rgba(0,0,0,0.8)"
      }
    }, code, " \xB7 ", mm));
  }

  /* =====================================================================
     A — Solo: Mapa de fósforo + Recomendação por talhão
     ===================================================================== */
  function SoloScreen({
    onBack
  }) {
    const [tab, setTab] = React.useState("mapa");
    return /*#__PURE__*/React.createElement("div", {
      className: "tnx-screen",
      style: {
        background: tab === "mapa" ? "#0e1d14" : "var(--bg)"
      }
    }, /*#__PURE__*/React.createElement(FloatingFarmHeader, {
      onMenu: onBack
    }), /*#__PURE__*/React.createElement(SubTabs, {
      tab: tab,
      setTab: setTab,
      tabs: [["mapa", "Mapa"], ["rec", "Recomendação"]]
    }), tab === "mapa" ? /*#__PURE__*/React.createElement("div", {
      className: "tnx-map-aerial",
      style: {
        position: "relative",
        height: 844,
        filter: "saturate(1.15)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "tnx-soil-overlay"
    }), /*#__PURE__*/React.createElement(ParcelGrid, null), /*#__PURE__*/React.createElement(MapLegend, {
      mono: true,
      title: "F\xF3sforo (resina) (mg/dm\xB3)",
      sub: "0\u201320 cm",
      rows: [["Alto (> 20)", "#1f7a34"], ["Adequado (15–20)", "#8fcf64"], ["Médio (9–15)", "#f1d97a"], ["Baixo (5–9)", "#ef9a4d"], ["Muito baixo (≤ 5)", "#e2503a"]]
    }), /*#__PURE__*/React.createElement(DarkTiles, {
      items: [["AMOSTRAS", "1000"], ["ZONAS", "52"], ["CAMADA ATIVA", "0-20 cm"]]
    })) : /*#__PURE__*/React.createElement(RecomendacaoList, null));
  }
  function RecomendacaoList() {
    const talhoes = [{
      cod: "A01",
      area: 405,
      amostras: 27,
      gesso: "0.44"
    }, {
      cod: "A02",
      area: 389,
      amostras: 26,
      gesso: "0.56"
    }];
    const linhas = g => [["Calcário", "PRNT 80%", "1.61 t/ha"], ["Gesso", "opcional", g + " t/ha"], ["Nitrogênio", "fixação biológica", "0 kg/ha"], ["P₂O₅", "SSP 189 kg/ha", "36 kg/ha"], ["K₂O", "KCl 78 kg/ha", "47 kg/ha"], ["S / Ca", "via SSP", "21 / 32 kg/ha"]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "82px 16px 28px",
        display: "grid",
        gap: 16
      }
    }, talhoes.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.cod,
      style: {
        border: "1px solid var(--border)",
        borderRadius: 16,
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 21,
        color: "var(--text-dk)"
      }
    }, "Talh\xE3o ", t.cod), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--mono)",
        fontSize: 12,
        color: "var(--text-mid)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 999,
        background: "var(--green-dp)"
      }
    }), "Soja \xB7 60 sc/ha")), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "4px 0 0",
        fontFamily: "var(--mono)",
        fontSize: 12,
        color: "var(--text-dim)"
      }
    }, t.area, " ha \xB7 ", t.amostras, " amostra(s) \xB7 P Alto \xB7 K Alto"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        display: "grid",
        gap: 0
      }
    }, linhas(t.gesso).map(([n, s, v], i) => /*#__PURE__*/React.createElement("div", {
      key: n,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        padding: "12px 0",
        borderTop: i ? "1px solid var(--border-soft)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 16,
        color: "var(--text-dk)"
      }
    }, n), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontFamily: "var(--mono)",
        fontSize: 11,
        color: "var(--text-dim)"
      }
    }, s)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 17,
        color: "var(--green-dp)"
      }
    }, v)))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "14px 0 8px",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 15,
        color: "var(--text-dk)"
      }
    }, "Micronutrientes a lan\xE7o"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }
    }, [["Boro", "ok", false], ["Cobre", "ok", false], ["Manganês", "ok", false], ["Zinco", "26 kg/ha", true]].map(([n, v, hi]) => /*#__PURE__*/React.createElement("span", {
      key: n,
      style: {
        borderRadius: 999,
        padding: "8px 13px",
        fontFamily: "var(--serif)",
        fontWeight: 700,
        fontSize: 13,
        background: hi ? "var(--green-light)" : "var(--bg-soft)",
        border: "1px solid " + (hi ? "var(--green-dp)" : "var(--border)"),
        color: hi ? "var(--green-dp)" : "var(--text-mid)"
      }
    }, n, ": ", v))))));
  }

  /* =====================================================================
     B — Chuva acumulada (pluviômetros + heatmap)
     ===================================================================== */
  function ChuvaScreen({
    onBack
  }) {
    const pins = [["A04", "0", "16%", "30%"], ["A07", "18", "42%", "33%"], ["A09", "56", "60%", "29%"], ["A11", "56", "74%", "26%"], ["A05", "46", "34%", "44%"], ["B05", "33", "44%", "52%"], ["B07", "21", "56%", "44%"], ["B09", "16", "66%", "40%"], ["A03", "12", "24%", "48%"], ["A01", "13", "14%", "46%"], ["B03", "34", "32%", "58%"], ["B01", "21", "20%", "62%"]];
    return /*#__PURE__*/React.createElement("div", {
      className: "tnx-screen tnx-map-rain"
    }, /*#__PURE__*/React.createElement(FloatingFarmHeader, {
      onMenu: onBack
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0
      }
    }, pins.map(p => /*#__PURE__*/React.createElement(PluvioPin, {
      key: p[0],
      code: p[0],
      mm: p[1] + " mm",
      x: p[2],
      y: p[3]
    }))), /*#__PURE__*/React.createElement(MapLegend, {
      mono: true,
      title: "Chuva acumulada (mm)",
      sub: "2026-05-19 a 2026-06-05",
      rows: [["≤ 5", "#dff0a8"], ["5–15", "#7ad07a"], ["15–25", "#3ab0c9"], ["25–35", "#3a7ad0"], ["35–45", "#e89a3a"], ["45–60", "#c4451c"], ["> 60", "#7a1f8a"]]
    }), /*#__PURE__*/React.createElement(DarkTiles, {
      items: [["Chuva acum. (média)", "5,7 mm"], ["Maior acumulado", "56,0 mm", "Pluviômetro 11"], ["Menor acumulado", "0,0 mm", "Pluviômetro 13"]]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        right: 8,
        bottom: 96,
        zIndex: 5,
        fontFamily: "var(--sans)",
        fontSize: 10,
        color: "rgba(255,255,255,0.85)",
        background: "rgba(0,0,0,0.35)",
        padding: "2px 6px",
        borderRadius: 4
      }
    }, "Leaflet | Tiles \xA9 Esri"));
  }

  /* ---------- shared: sub-tabs under the floating header ---------- */
  function SubTabs({
    tab,
    setTab,
    tabs
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 16,
        right: 14,
        zIndex: 20,
        display: "flex",
        gap: 6,
        background: "rgba(255,255,255,0.94)",
        border: "1px solid var(--border)",
        borderRadius: 12,
        padding: 4,
        boxShadow: "0 8px 20px rgba(0,0,0,0.16)"
      }
    }, tabs.map(([k, l]) => {
      const on = tab === k;
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        onClick: () => setTab(k),
        style: {
          border: "none",
          borderRadius: 9,
          padding: "8px 13px",
          background: on ? "var(--green-dp)" : "transparent",
          color: on ? "#fff" : "var(--text-mid)",
          fontFamily: "var(--serif)",
          fontWeight: 800,
          fontSize: 13
        }
      }, l);
    }));
  }

  /* =====================================================================
     C — Executar OS: receituário + confirmar insumos reais + custo real
     ===================================================================== */
  function ExecutarOSModal({
    onClose
  }) {
    const insumos = [{
      nome: "Dual Gold",
      rec: "1.5 L/ha",
      dose: "1,5",
      un: "L/ha",
      custo: "33410.03",
      qtd: "607.46 L",
      carencia: "90 dias"
    }, {
      nome: "Roundup WG 720",
      rec: "2 kg/ha",
      dose: "2",
      un: "kg/ha",
      custo: "11339.16",
      qtd: "809.94 kg"
    }];
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClose,
      style: {
        position: "absolute",
        inset: 0,
        zIndex: 60,
        background: "rgba(40,50,30,0.55)",
        display: "flex",
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: e => e.stopPropagation(),
      style: {
        background: "var(--bg)",
        width: "100%",
        maxHeight: "96%",
        borderRadius: "22px 22px 0 0",
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "sticky",
        top: 0,
        background: "var(--bg)",
        padding: "16px 20px 12px",
        borderBottom: "1px solid var(--border)",
        zIndex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "tnx-eyebrow",
      style: {
        letterSpacing: "2px"
      }
    }, "EXECUTAR \xB7 OS-0011"), /*#__PURE__*/React.createElement("h2", {
      style: {
        margin: "4px 0 0",
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 22,
        color: "var(--text-dk)"
      }
    }, "Fechar ordem de servi\xE7o")), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Fechar",
      style: {
        width: 40,
        height: 40,
        borderRadius: 12,
        border: "1px solid var(--border)",
        background: "var(--bg-soft)",
        color: "var(--text-dk)",
        display: "grid",
        placeItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Close, null))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 20px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--amber-light)",
        border: "1px solid #e8a84c55",
        borderRadius: 14,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--mono)",
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "1px",
        color: "var(--amber-dk)"
      }
    }, "RECEITU\xC1RIO"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 0.7fr",
        gap: 10,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "AGR\xD4NOMO"
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "Eng. Agr\xF4nomo\u2026",
      style: inp
    })), /*#__PURE__*/React.createElement(Field, {
      label: "CREA"
    }, /*#__PURE__*/React.createElement("input", {
      placeholder: "CREA-BA 0987\u2026",
      style: inp
    })))), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "20px 0 4px",
        fontFamily: "var(--mono)",
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: "1px",
        color: "var(--text-dim)"
      }
    }, "CONFIRMAR INSUMOS REAIS"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--text-mid)",
        fontSize: 14
      }
    }, "Ajuste se diferente do recomendado:"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gap: 12,
        marginTop: 12
      }
    }, insumos.map(i => /*#__PURE__*/React.createElement("div", {
      key: i.nome,
      style: {
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 18,
        color: "var(--text-dk)"
      }
    }, i.nome), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--mono)",
        fontSize: 11,
        color: "var(--text-dim)"
      }
    }, "Rec: ", i.rec)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 64px 1.3fr",
        gap: 10,
        marginTop: 12,
        alignItems: "end"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      style: lbl
    }, "DOSE REAL"), /*#__PURE__*/React.createElement("input", {
      defaultValue: i.dose,
      style: inp
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        ...inp,
        display: "grid",
        placeItems: "center",
        color: "var(--text-mid)",
        fontFamily: "var(--mono)",
        fontSize: 12
      }
    }, i.un), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--bg-soft)",
        border: "1px solid var(--border)",
        borderRadius: 10,
        padding: "8px 11px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: lbl
    }, "CUSTO CALCULADO"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "3px 0 0",
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 15,
        color: "var(--green-dp)"
      }
    }, "R$ ", i.custo), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "1px 0 0",
        fontFamily: "var(--mono)",
        fontSize: 10,
        color: "var(--text-dim)"
      }
    }, i.qtd))), i.carencia && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "9px 0 0",
        fontFamily: "var(--mono)",
        fontSize: 11,
        fontWeight: 700,
        color: "var(--amber-dk)"
      }
    }, "Car\xEAncia: ", i.carencia)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: lbl
    }, "OBSERVA\xC7\xD5ES DA EXECU\xC7\xC3O"), /*#__PURE__*/React.createElement("div", {
      style: {
        ...inp,
        minHeight: 64,
        color: "var(--text-dk)",
        fontFamily: "var(--serif)",
        fontSize: 15
      }
    }, "Executado como pedido!")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        border: "1px solid var(--border)",
        borderRadius: 14,
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--mono)",
        fontSize: 11,
        fontWeight: 800,
        letterSpacing: "1px",
        color: "var(--text-dim)"
      }
    }, "RESUMO DO CUSTO REAL"), [["Insumos", "R$ 44749.19"], ["Aplicação", "R$ 0.00"]].map(([l, v]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 11,
        fontFamily: "var(--serif)",
        fontSize: 16,
        color: "var(--text-dk)"
      }
    }, /*#__PURE__*/React.createElement("span", null, l), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--mono)",
        fontWeight: 700
      }
    }, v))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 1,
        background: "var(--border)",
        margin: "12px 0"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--serif)",
        fontWeight: 800,
        fontSize: 19,
        color: "var(--text-dk)"
      }
    }, "Total Real"), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "right"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 22,
        color: "var(--green-dp)"
      }
    }, "R$ 44749.19"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 0",
        fontFamily: "var(--mono)",
        fontSize: 11,
        color: "var(--text-dim)"
      }
    }, "R$ 110.50/ha \xB7 405.0 ha")))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        flex: 1,
        border: "1px solid var(--border)",
        background: "var(--bg)",
        borderRadius: 12,
        padding: "14px",
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 13,
        letterSpacing: "1px",
        color: "var(--text-dk)"
      }
    }, "CANCELAR"), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        flex: 2,
        border: "none",
        background: "var(--green-dp)",
        color: "#fff",
        borderRadius: 12,
        padding: "14px",
        fontFamily: "var(--mono)",
        fontWeight: 800,
        fontSize: 13,
        letterSpacing: "1px"
      }
    }, "FECHAR ORDEM + REGISTRAR")))));
  }
  const inp = {
    width: "100%",
    boxSizing: "border-box",
    background: "var(--bg-soft)",
    border: "1px solid var(--border)",
    borderRadius: 10,
    padding: "10px 12px",
    fontFamily: "var(--serif)",
    fontSize: 14,
    color: "var(--text-dk)",
    outline: "none"
  };
  const lbl = {
    margin: 0,
    fontFamily: "var(--mono)",
    fontSize: 9,
    letterSpacing: "1.4px",
    fontWeight: 800,
    color: "var(--text-dim)"
  };
  function Field({
    label,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        ...lbl,
        marginBottom: 5
      }
    }, label), children);
  }
  Object.assign(window.TNXAppScreens, {
    SoloScreen,
    ChuvaScreen,
    ExecutarOSModal
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/screens3.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/app.jsx
try { (() => {
/* TerraNexa homepage — interactive app shell. */
(function () {
  const {
    Header,
    Hero,
    ProofStrip,
    Platform,
    Modules,
    Product,
    Results,
    DemoCTA,
    Footer
  } = window.TNXSections;
  const {
    Check
  } = window.TNXIcons;
  function DemoDialog({
    open,
    onClose
  }) {
    const ref = React.useRef(null);
    const [status, setStatus] = React.useState("");
    React.useEffect(() => {
      const d = ref.current;
      if (!d) return;
      if (open && !d.open) {
        d.showModal();
        setStatus("");
      }
      if (!open && d.open) d.close();
    }, [open]);
    const submit = e => {
      e.preventDefault();
      const f = new FormData(e.currentTarget);
      const nome = (f.get("nome") || "").toString().trim();
      const email = (f.get("email") || "").toString().trim();
      const tel = (f.get("telefone") || "").toString().trim();
      const interesse = (f.get("origem") || "").toString();
      const msg = (f.get("mensagem") || "").toString().trim();
      const subject = `Solicitação de demonstração — ${nome}`;
      const body = `Nome: ${nome}\n` + `Email: ${email}\n` + `Telefone: ${tel}\n` + `Onde nos encontrou: ${interesse}\n\n` + `Mensagem:\n${msg || "—"}\n`;
      const href = `mailto:contato@terranexa.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      setStatus("Abrindo seu e-mail para enviar a contato@terranexa.com.br…");
      setTimeout(onClose, 2400);
    };
    const benefits = ["Demonstração guiada pela realidade da sua fazenda", "Gestão de talhões, operações agrícolas, monitoramento e solo em uma única plataforma", "Registre e edite informações no campo offline, com sincronização quando houver conexão"];
    return /*#__PURE__*/React.createElement("dialog", {
      className: "demo-dialog",
      ref: ref,
      onClose: onClose,
      onCancel: onClose,
      "aria-labelledby": "demo-title"
    }, /*#__PURE__*/React.createElement("div", {
      className: "demo-shell"
    }, /*#__PURE__*/React.createElement("aside", {
      className: "demo-aside"
    }, /*#__PURE__*/React.createElement("img", {
      className: "demo-aside-bg",
      src: "../../assets/demo-aside.png",
      alt: "",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "demo-aside-shade"
    }), /*#__PURE__*/React.createElement("div", {
      className: "demo-aside-head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "brand-wordmark"
    }, /*#__PURE__*/React.createElement("span", null, "Terra"), /*#__PURE__*/React.createElement("span", null, "Nexa")), /*#__PURE__*/React.createElement("h2", null, "Veja a plataforma ", /*#__PURE__*/React.createElement("em", null, "aplicada \xE0 sua opera\xE7\xE3o."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
      className: "demo-benefits"
    }, benefits.map(b => /*#__PURE__*/React.createElement("li", {
      className: "demo-benefit",
      key: b
    }, /*#__PURE__*/React.createElement(Check, null), /*#__PURE__*/React.createElement("span", null, b)))), /*#__PURE__*/React.createElement("div", {
      className: "demo-contact"
    }, /*#__PURE__*/React.createElement("span", null, "Prefere falar direto?"), /*#__PURE__*/React.createElement("a", {
      href: "mailto:contato@terranexa.com.br"
    }, "contato@terranexa.com.br")))), /*#__PURE__*/React.createElement("div", {
      className: "demo-main"
    }, /*#__PURE__*/React.createElement("button", {
      className: "dialog-close",
      type: "button",
      "aria-label": "Fechar",
      onClick: onClose
    }, "\xD7"), /*#__PURE__*/React.createElement("p", {
      className: "demo-eyebrow"
    }, "Solicite uma demonstra\xE7\xE3o"), /*#__PURE__*/React.createElement("h3", {
      id: "demo-title"
    }, "Prepare uma conversa direcionada"), /*#__PURE__*/React.createElement("p", {
      className: "demo-sub"
    }, "Preencha os dados e nossa equipe agron\xF4mica retorna em at\xE9 1 dia \xFAtil."), /*#__PURE__*/React.createElement("form", {
      className: "demo-form",
      onSubmit: submit
    }, /*#__PURE__*/React.createElement("label", null, "Nome", /*#__PURE__*/React.createElement("input", {
      name: "nome",
      type: "text",
      autoComplete: "name",
      placeholder: "Seu nome completo",
      required: true
    })), /*#__PURE__*/React.createElement("label", null, "Email", /*#__PURE__*/React.createElement("input", {
      name: "email",
      type: "email",
      autoComplete: "email",
      placeholder: "voce@fazenda.com.br",
      required: true
    })), /*#__PURE__*/React.createElement("label", null, "Telefone / WhatsApp", /*#__PURE__*/React.createElement("input", {
      name: "telefone",
      type: "tel",
      autoComplete: "tel",
      placeholder: "(00) 00000-0000",
      required: true
    })), /*#__PURE__*/React.createElement("label", null, "Onde voc\xEA nos encontrou", /*#__PURE__*/React.createElement("select", {
      name: "origem",
      defaultValue: "",
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      value: "",
      disabled: true
    }, "Selecione"), /*#__PURE__*/React.createElement("option", null, "Busca no Google"), /*#__PURE__*/React.createElement("option", null, "Indica\xE7\xE3o de um produtor"), /*#__PURE__*/React.createElement("option", null, "Instagram"), /*#__PURE__*/React.createElement("option", null, "LinkedIn"), /*#__PURE__*/React.createElement("option", null, "Evento ou feira agro"), /*#__PURE__*/React.createElement("option", null, "Outro"))), /*#__PURE__*/React.createElement("label", {
      className: "full"
    }, "Conte sobre sua opera\xE7\xE3o ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#6f8073",
        fontWeight: 500
      }
    }, "(opcional)"), /*#__PURE__*/React.createElement("textarea", {
      name: "mensagem",
      placeholder: "\xC1rea cultivada, culturas, principais desafios\u2026"
    })), /*#__PURE__*/React.createElement("button", {
      className: "button button-gold",
      type: "submit"
    }, "Enviar solicita\xE7\xE3o"), /*#__PURE__*/React.createElement("p", {
      className: "demo-privacy"
    }, "Ao enviar, voc\xEA concorda em ser contatado pela equipe TerraNexa. Seus dados n\xE3o s\xE3o compartilhados."), /*#__PURE__*/React.createElement("p", {
      className: "form-status",
      role: "status"
    }, status)))));
  }
  function App() {
    const [scrolled, setScrolled] = React.useState(false);
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [openGroup, setOpenGroup] = React.useState(null);
    const [demoOpen, setDemoOpen] = React.useState(false);
    React.useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 12);
      window.addEventListener("scroll", onScroll, {
        passive: true
      });
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scroll-reveal
    React.useEffect(() => {
      const els = document.querySelectorAll(".section-copy, .field-visual, .section-heading, .module-card, .result-grid, .demo-panel");
      const io = new IntersectionObserver(entries => {
        entries.forEach(en => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        });
      }, {
        threshold: 0.12
      });
      els.forEach(el => {
        el.classList.add("reveal");
        io.observe(el);
      });
      return () => io.disconnect();
    }, []);
    const openDemo = () => {
      setMenuOpen(false);
      setDemoOpen(true);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
      className: "skip-link",
      href: "#conteudo",
      style: {
        position: "fixed",
        top: 10,
        left: 10,
        zIndex: 999,
        transform: "translateY(-140%)"
      }
    }, "Pular para o conte\xFAdo"), /*#__PURE__*/React.createElement(Header, {
      scrolled: scrolled,
      menuOpen: menuOpen,
      setMenuOpen: setMenuOpen,
      openGroup: openGroup,
      setOpenGroup: setOpenGroup,
      onDemo: openDemo
    }), /*#__PURE__*/React.createElement("main", {
      id: "conteudo"
    }, /*#__PURE__*/React.createElement(Hero, {
      onDemo: openDemo
    }), /*#__PURE__*/React.createElement(ProofStrip, null), /*#__PURE__*/React.createElement(Platform, null), /*#__PURE__*/React.createElement(Modules, null), /*#__PURE__*/React.createElement(Product, null), /*#__PURE__*/React.createElement(Results, null), /*#__PURE__*/React.createElement(DemoCTA, {
      onDemo: openDemo
    })), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(DemoDialog, {
      open: demoOpen,
      onClose: () => setDemoOpen(false)
    }));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/icons.jsx
try { (() => {
/* TerraNexa homepage icons — stroked line set matching the production SVGs. */
(function () {
  const S = p => ({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...p
  });
  const Chevron = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "m5 7.5 5 5 5-5"
  }));
  const ChevronLeft = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }));
  const ChevronRight = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }));
  const ChevronDown = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "m7 10 5 5 5-5"
  }));
  const Play = p => /*#__PURE__*/React.createElement("svg", S({
    strokeWidth: 1.5,
    ...p
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10 8 6 4-6 4z"
  }));
  const Check = p => /*#__PURE__*/React.createElement("svg", S({
    strokeWidth: 2,
    ...p
  }), /*#__PURE__*/React.createElement("path", {
    d: "m5 13 4 4L19 7"
  }));
  const Integration = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16M12 4v16M6.5 6.5l11 11M17.5 6.5l-11 11"
  }));
  const Trend = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "m4 16 5-5 4 3 7-9"
  }));
  const Leaf = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "M5 17c8 2 13-3 14-12-8-1-14 4-14 12Zm2-1L17 7"
  }));
  const Farm = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "m3 11 9-8 9 8v10H3zM8 21v-8h8v8"
  }));
  const Order = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 3v4m8-4v4M3 10h18"
  }));
  const Soil = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "M5 18c9 1 14-4 14-14C9 3 4 9 5 18Zm2-1L17 7"
  }));
  const Layers = p => /*#__PURE__*/React.createElement("svg", S(p), /*#__PURE__*/React.createElement("path", {
    d: "M4 7 12 3l8 4-8 4-8-4Zm0 5 8 4 8-4M4 17l8 4 8-4"
  }));
  Object.assign(window, {
    TNXIcons: {
      Chevron,
      ChevronLeft,
      ChevronRight,
      ChevronDown,
      Play,
      Check,
      Integration,
      Trend,
      Leaf,
      Farm,
      Order,
      Soil,
      Layers
    }
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/homepage/sections.jsx
try { (() => {
/* TerraNexa homepage — section components. Faithful recreation of the
   production marketing page, factored into composable sections. */
(function () {
  const {
    Chevron,
    ChevronLeft,
    ChevronRight,
    ChevronDown,
    Play,
    Check,
    Integration,
    Trend,
    Leaf,
    Farm,
    Order,
    Soil,
    Layers
  } = window.TNXIcons;
  const LOGO = "../../assets/logo-terranexa.png";

  /* ---------------- Header ---------------- */
  function Header({
    scrolled,
    menuOpen,
    setMenuOpen,
    openGroup,
    setOpenGroup,
    onDemo
  }) {
    const Group = ({
      id,
      label,
      links
    }) => /*#__PURE__*/React.createElement("div", {
      className: "nav-group" + (openGroup === id ? " is-open" : "")
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpenGroup(openGroup === id ? null : id)
    }, label, " ", /*#__PURE__*/React.createElement(Chevron, null)), /*#__PURE__*/React.createElement("div", {
      className: "nav-dropdown"
    }, links.map(l => /*#__PURE__*/React.createElement("a", {
      key: l,
      href: "#",
      onClick: e => e.preventDefault()
    }, l))));
    return /*#__PURE__*/React.createElement("header", {
      className: "site-header" + (scrolled ? " is-scrolled" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "container header-inner"
    }, /*#__PURE__*/React.createElement("a", {
      className: "brand",
      href: "#inicio",
      "aria-label": "TerraNexa"
    }, /*#__PURE__*/React.createElement("span", {
      className: "brand-wordmark"
    }, /*#__PURE__*/React.createElement("span", null, "Terra"), /*#__PURE__*/React.createElement("span", null, "Nexa"))), /*#__PURE__*/React.createElement("button", {
      className: "menu-toggle" + (menuOpen ? " is-open" : ""),
      type: "button",
      "aria-label": "Abrir menu",
      onClick: () => setMenuOpen(!menuOpen)
    }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("nav", {
      className: "main-navigation" + (menuOpen ? " is-open" : ""),
      "aria-label": "Navega\xE7\xE3o principal"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#inicio"
    }, "In\xEDcio"), /*#__PURE__*/React.createElement(Group, {
      id: "sol",
      label: "Solu\xE7\xF5es",
      links: ["Visão integrada", "Módulos da plataforma", "Produto em ação"]
    }), /*#__PURE__*/React.createElement(Group, {
      id: "rec",
      label: "Recursos",
      links: ["Tecnologia no campo", "Resultados operacionais", "Falar com a TerraNexa"]
    }), /*#__PURE__*/React.createElement("a", {
      href: "#produto"
    }, "Plataforma"), /*#__PURE__*/React.createElement("a", {
      href: "#contato"
    }, "Contato")), /*#__PURE__*/React.createElement("div", {
      className: "header-actions"
    }, /*#__PURE__*/React.createElement("a", {
      className: "button button-ghost button-small",
      href: "#",
      onClick: e => e.preventDefault()
    }, "Entrar"), /*#__PURE__*/React.createElement("button", {
      className: "button button-gold button-small",
      onClick: onDemo
    }, "Solicitar demonstra\xE7\xE3o"))));
  }

  /* ---------------- Hero ---------------- */
  function Hero({
    onDemo
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "hero",
      id: "inicio"
    }, /*#__PURE__*/React.createElement("img", {
      className: "hero-background",
      src: "../../assets/hero-algodao.png",
      alt: "Produtora no campo de algod\xE3o usando a plataforma TerraNexa"
    }), /*#__PURE__*/React.createElement("div", {
      className: "hero-shade"
    }), /*#__PURE__*/React.createElement("div", {
      className: "container hero-layout hero-layout-solo"
    }, /*#__PURE__*/React.createElement("div", {
      className: "hero-copy"
    }, /*#__PURE__*/React.createElement("h1", null, "Gest\xE3o agr\xEDcola ", /*#__PURE__*/React.createElement("em", null, "inteligente"), " para decis\xF5es mais precisas no campo."), /*#__PURE__*/React.createElement("p", {
      className: "hero-description"
    }, "Gest\xE3o de talh\xF5es, opera\xE7\xF5es agr\xEDcolas, monitoramento e solo em uma \xFAnica plataforma. Registre e edite informa\xE7\xF5es no campo offline, com sincroniza\xE7\xE3o quando houver conex\xE3o."), /*#__PURE__*/React.createElement("div", {
      className: "hero-actions"
    }, /*#__PURE__*/React.createElement("button", {
      className: "button button-primary",
      onClick: onDemo
    }, "Come\xE7ar agora"), /*#__PURE__*/React.createElement("a", {
      className: "button button-glass",
      href: "#produto"
    }, /*#__PURE__*/React.createElement(Play, null), " Ver a plataforma")))), /*#__PURE__*/React.createElement("a", {
      className: "scroll-indicator",
      href: "#plataforma",
      "aria-label": "Pr\xF3xima se\xE7\xE3o"
    }, /*#__PURE__*/React.createElement(ChevronDown, null)));
  }

  /* ---------------- Proof strip ---------------- */
  function ProofStrip() {
    const items = [["Mapas", "Leitura territorial por talhão"], ["Operações", "Planejamento e custo real"], ["Monitoramento", "Ocorrências com evidências"], ["Solo", "Análise e recomendação técnica"]];
    return /*#__PURE__*/React.createElement("section", {
      className: "proof-strip",
      "aria-label": "Principais recursos"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container proof-grid"
    }, items.map(([t, s]) => /*#__PURE__*/React.createElement("div", {
      key: t
    }, /*#__PURE__*/React.createElement("strong", null, t), /*#__PURE__*/React.createElement("span", null, s)))));
  }

  /* ---------------- Platform ---------------- */
  function Platform() {
    const benefits = [[/*#__PURE__*/React.createElement(Integration, null), "Operação integrada", "Ordens, insumos, custos e equipes no mesmo fluxo."], [/*#__PURE__*/React.createElement(Trend, null), "Decisões no campo OFFLINE", "Indicadores confiáveis para priorizar o que importa."], [/*#__PURE__*/React.createElement(Leaf, null), "Campo mais produtivo", "Tecnologia simples para executar melhor e reduzir perdas."]];
    return /*#__PURE__*/React.createElement("section", {
      className: "platform section",
      id: "plataforma"
    }, /*#__PURE__*/React.createElement("div", {
      className: "platform-glow",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "container platform-layout"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-copy"
    }, /*#__PURE__*/React.createElement("p", {
      className: "section-label"
    }, "Do campo ao controle"), /*#__PURE__*/React.createElement("h2", null, "Uma vis\xE3o \xFAnica para toda a sua opera\xE7\xE3o."), /*#__PURE__*/React.createElement("p", null, "A TerraNexa conecta dados de campo, equipe, custos e recomenda\xE7\xF5es agron\xF4micas. Menos planilhas dispersas. Mais decis\xE3o com contexto."), /*#__PURE__*/React.createElement("ul", {
      className: "benefit-list"
    }, benefits.map(([icon, t, s]) => /*#__PURE__*/React.createElement("li", {
      key: t
    }, /*#__PURE__*/React.createElement("span", {
      className: "benefit-icon"
    }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, t), /*#__PURE__*/React.createElement("span", null, s)))))), /*#__PURE__*/React.createElement("div", {
      className: "field-visual",
      id: "campo"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/produto-colheita.png",
      alt: "Produtor ajoelhado no campo de soja conferindo gr\xE3os pelo celular durante a colheita"
    }), /*#__PURE__*/React.createElement("div", {
      className: "field-visual-shade"
    }), /*#__PURE__*/React.createElement("div", {
      className: "field-data-card"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Monitoramento de campo"), /*#__PURE__*/React.createElement("strong", null, "6 ocorr\xEAncias"), /*#__PURE__*/React.createElement("small", null, "2 cr\xEDticas \xB7 equipe notificada")), /*#__PURE__*/React.createElement("div", {
      className: "trail-data"
    }, /*#__PURE__*/React.createElement("span", null, "Trilha"), /*#__PURE__*/React.createElement("strong", null, "569 m"))))));
  }

  /* ---------------- Modules ---------------- */
  function Modules() {
    const mods = [[/*#__PURE__*/React.createElement(Farm, null), "Fazendas e talhões", "Mapa, áreas, culturas, safras e histórico por propriedade."], [/*#__PURE__*/React.createElement(Order, null), "Ordens de serviço", "Planejamento, execução, prazo, equipe, insumos e custo real."], [/*#__PURE__*/React.createElement(Soil, null), "Solo e fertilidade", "Análises, mapas de fertilidade e recomendações técnicas."], [/*#__PURE__*/React.createElement(Layers, null), "Monitoramento", "Ocorrências, trilhas, técnicos, vistorias e evidências."]];
    return /*#__PURE__*/React.createElement("section", {
      className: "modules section",
      id: "modulos"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-heading"
    }, /*#__PURE__*/React.createElement("p", {
      className: "section-label"
    }, "Plataforma completa"), /*#__PURE__*/React.createElement("h2", null, "Tudo o que a fazenda precisa para avan\xE7ar."), /*#__PURE__*/React.createElement("p", null, "M\xF3dulos conectados, dados consistentes e uma experi\xEAncia feita para a rotina do campo.")), /*#__PURE__*/React.createElement("div", {
      className: "module-grid"
    }, mods.map(([icon, t, s]) => /*#__PURE__*/React.createElement("article", {
      className: "module-card",
      key: t
    }, /*#__PURE__*/React.createElement("span", {
      className: "module-icon"
    }, icon), /*#__PURE__*/React.createElement("h3", null, t), /*#__PURE__*/React.createElement("p", null, s), /*#__PURE__*/React.createElement("a", {
      href: "#produto"
    }, "Explorar m\xF3dulo ", /*#__PURE__*/React.createElement("span", null, "\u2192")))))));
  }

  /* ---------------- Product gallery ---------------- */
  function Product() {
    const trackRef = React.useRef(null);
    const cards = [["produto-mapas.png", "Visão territorial", "Mapas inteligentes por talhão"], ["produto-os.png", "Controle operacional", "Ordens de serviço com custo real"], ["produto-monitoramento.png", "Campo conectado", "Monitoramento com evidências"], ["produto-solo.png", "Inteligência agronômica", "Solo e fertilidade com precisão"], ["produto-custos.png", "Gestão financeira", "Custos organizados por operação"], ["produto-equipe.png", "Gestão de pessoas", "Equipe e execução no mesmo fluxo"]];
    const scroll = dir => {
      const el = trackRef.current;
      if (el) el.scrollBy({
        left: dir * (el.clientWidth / 3 + 24),
        behavior: "smooth"
      });
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "product section",
      id: "produto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "product-heading"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
      className: "section-label"
    }, "Produto em a\xE7\xE3o"), /*#__PURE__*/React.createElement("h2", null, "Da vis\xE3o territorial \xE0 execu\xE7\xE3o no campo.")), /*#__PURE__*/React.createElement("div", {
      className: "product-controls",
      "aria-label": "Controles da galeria"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Anterior",
      onClick: () => scroll(-1)
    }, /*#__PURE__*/React.createElement(ChevronLeft, null)), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Pr\xF3xima",
      onClick: () => scroll(1)
    }, /*#__PURE__*/React.createElement(ChevronRight, null)))), /*#__PURE__*/React.createElement("div", {
      className: "product-track",
      ref: trackRef
    }, cards.map(([img, tag, title]) => /*#__PURE__*/React.createElement("article", {
      className: "product-card",
      key: img
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/" + img,
      alt: title
    }), /*#__PURE__*/React.createElement("div", {
      className: "product-card-caption"
    }, /*#__PURE__*/React.createElement("span", null, tag), /*#__PURE__*/React.createElement("h3", null, title))))), /*#__PURE__*/React.createElement("p", {
      className: "product-note"
    }, "Interface pensada para desktop e mobile, com continuidade entre escrit\xF3rio e campo.")));
  }

  /* ---------------- Results ---------------- */
  function Results() {
    const stats = [["1 visão", "para toda a operação"], ["4 pilares", "campo, equipe, custos e solo"], ["Rastreável", "do planejamento à execução"], ["Responsiva", "no escritório e no campo"]];
    return /*#__PURE__*/React.createElement("section", {
      className: "results section",
      id: "resultados"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "section-heading"
    }, /*#__PURE__*/React.createElement("p", {
      className: "section-label section-label-gold"
    }, "Gest\xE3o que gera resultado"), /*#__PURE__*/React.createElement("h2", null, "Mais clareza para decidir. Mais controle para produzir.")), /*#__PURE__*/React.createElement("div", {
      className: "result-grid"
    }, stats.map(([t, s]) => /*#__PURE__*/React.createElement("div", {
      key: t
    }, /*#__PURE__*/React.createElement("strong", null, t), /*#__PURE__*/React.createElement("span", null, s))))));
  }

  /* ---------------- Demo CTA ---------------- */
  function DemoCTA({
    onDemo
  }) {
    return /*#__PURE__*/React.createElement("section", {
      className: "demo section",
      id: "demonstracao"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "demo-panel"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/cta-casal-campo.png",
      alt: "",
      "aria-hidden": "true"
    }), /*#__PURE__*/React.createElement("div", {
      className: "demo-shade"
    }), /*#__PURE__*/React.createElement("div", {
      className: "demo-copy"
    }, /*#__PURE__*/React.createElement("p", {
      className: "section-label section-label-gold"
    }, "Pronto para transformar sua gest\xE3o?"), /*#__PURE__*/React.createElement("h2", null, "Leve intelig\xEAncia do escrit\xF3rio para cada decis\xE3o no campo."), /*#__PURE__*/React.createElement("p", null, "Conhe\xE7a a plataforma em uma demonstra\xE7\xE3o orientada \xE0 sua opera\xE7\xE3o."), /*#__PURE__*/React.createElement("button", {
      className: "button button-gold demo-cta-button",
      type: "button",
      onClick: onDemo
    }, "Solicitar demonstra\xE7\xE3o")))));
  }

  /* ---------------- Footer ---------------- */
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", {
      className: "site-footer",
      id: "contato"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container footer-grid"
    }, /*#__PURE__*/React.createElement("div", {
      className: "footer-brand"
    }, /*#__PURE__*/React.createElement("img", {
      src: LOGO,
      alt: "TerraNexa"
    }), /*#__PURE__*/React.createElement("p", null, "Informa\xE7\xE3o confi\xE1vel. Gest\xE3o inteligente. Campo mais produtivo.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Plataforma"), /*#__PURE__*/React.createElement("a", {
      href: "#plataforma"
    }, "Vis\xE3o integrada"), /*#__PURE__*/React.createElement("a", {
      href: "#modulos"
    }, "M\xF3dulos"), /*#__PURE__*/React.createElement("a", {
      href: "#produto"
    }, "Produto em a\xE7\xE3o")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Contato"), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "contato@terranexa.com.br"), /*#__PURE__*/React.createElement("a", {
      href: "#demonstracao"
    }, "Solicitar demonstra\xE7\xE3o"), /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "Acessar plataforma"))), /*#__PURE__*/React.createElement("div", {
      className: "container footer-bottom"
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 TerraNexa. Todos os direitos reservados."), /*#__PURE__*/React.createElement("a", {
      href: "#inicio"
    }, "Voltar ao topo \u2191")));
  }
  Object.assign(window, {
    TNXSections: {
      Header,
      Hero,
      ProofStrip,
      Platform,
      Modules,
      Product,
      Results,
      DemoCTA,
      Footer
    }
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/homepage/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ModuleCard = __ds_scope.ModuleCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
