/* TerraNexa homepage icons — stroked line set matching the production SVGs. */
const S = (p) => ({ viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", ...p });

const Chevron = (p) => (<svg {...S(p)}><path d="m5 7.5 5 5 5-5" /></svg>);
const ChevronLeft = (p) => (<svg {...S(p)}><path d="m15 18-6-6 6-6" /></svg>);
const ChevronRight = (p) => (<svg {...S(p)}><path d="m9 18 6-6-6-6" /></svg>);
const ChevronDown = (p) => (<svg {...S(p)}><path d="m7 10 5 5 5-5" /></svg>);
const Play = (p) => (<svg {...S({ strokeWidth: 1.5, ...p })}><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4z" /></svg>);
const Check = (p) => (<svg {...S({ strokeWidth: 2, ...p })}><path d="m5 13 4 4L19 7" /></svg>);
const Integration = (p) => (<svg {...S(p)}><path d="M4 12h16M12 4v16M6.5 6.5l11 11M17.5 6.5l-11 11" /></svg>);
const Trend = (p) => (<svg {...S(p)}><path d="m4 16 5-5 4 3 7-9" /></svg>);
const Leaf = (p) => (<svg {...S(p)}><path d="M5 17c8 2 13-3 14-12-8-1-14 4-14 12Zm2-1L17 7" /></svg>);
const Farm = (p) => (<svg {...S(p)}><path d="m3 11 9-8 9 8v10H3zM8 21v-8h8v8" /></svg>);
const Order = (p) => (<svg {...S(p)}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4m8-4v4M3 10h18" /></svg>);
const Soil = (p) => (<svg {...S(p)}><path d="M5 18c9 1 14-4 14-14C9 3 4 9 5 18Zm2-1L17 7" /></svg>);
const Layers = (p) => (<svg {...S(p)}><path d="M4 7 12 3l8 4-8 4-8-4Zm0 5 8 4 8-4M4 17l8 4 8-4" /></svg>);

export { Chevron, ChevronLeft, ChevronRight, ChevronDown, Play, Check, Integration, Trend, Leaf, Farm, Order, Soil, Layers };
