/* TerraNexa app — line icons (stroke 1.8, currentColor). */
(function () {
const S = (p) => ({ width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", ...p });

const Menu = (p) => (<svg {...S(p)}><path d="M4 7h16M4 12h16M4 17h16" /></svg>);
const Refresh = (p) => (<svg {...S(p)}><path d="M21 12a9 9 0 1 1-2.64-6.36M21 4v5h-5" /></svg>);
const Locate = (p) => (<svg {...S(p)}><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>);
const Bug = (p) => (<svg {...S(p)}><path d="M8 9a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0zM8 9 5.5 6.5M16 9l2.5-2.5M8 13H4m16 0h-4M8 16l-2.5 2.5M16 16l2.5 2.5M12 5V3" /></svg>);
const Back = (p) => (<svg {...S(p)}><path d="m15 18-6-6 6-6" /></svg>);
const Fwd = (p) => (<svg {...S(p)}><path d="m9 18 6-6-6-6" /></svg>);
const Plus = (p) => (<svg {...S(p)}><path d="M12 5v14M5 12h14" /></svg>);
const Search = (p) => (<svg {...S(p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>);
const Close = (p) => (<svg {...S(p)}><path d="M6 6l12 12M18 6 6 18" /></svg>);
const Check = (p) => (<svg {...S({ strokeWidth: 2.2, ...p })}><path d="m5 13 4 4L19 7" /></svg>);
const Pin = (p) => (<svg {...S(p)}><path d="M12 21s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>);
const Crosshair = (p) => (<svg {...S(p)}><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2.4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>);
const Layers = (p) => (<svg {...S(p)}><path d="M12 3 3 8l9 5 9-5-9-5ZM3 13l9 5 9-5M3 18l9 5 9-5" /></svg>);
const Chevron = (p) => (<svg {...S(p)}><path d="m6 9 6 6 6-6" /></svg>);

Object.assign(window, { TNXAppIcons: { Menu, Refresh, Locate, Bug, Back, Fwd, Plus, Search, Close, Check, Pin, Crosshair, Layers, Chevron } });
})();
