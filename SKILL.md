---
name: terranexa-design
description: Use this skill to generate well-branded interfaces and assets for TerraNexa (agtech farm-management platform — "Gestão agrícola inteligente"), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping in the TerraNexa brand.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

TerraNexa is a Brazilian agtech platform. Its brand has two surfaces: a **dark forest-green marketing site** (the primary visual language here) and a **light green-ink product app**. Copy is in **Brazilian Portuguese**, voice is calm/operational, no emoji, line icons only.

Key files:
- `readme.md` — full brand guide: content fundamentals, visual foundations, iconography, asset manifest.
- `styles.css` + `tokens/` — colors, typography, spacing/radius/shadow, fonts. Link `styles.css` to inherit all CSS custom properties (`--tnx-*`).
- `components/` — React primitives (Button, Eyebrow, Badge, Input, Select, ModuleCard, StatCard).
- `ui_kits/homepage/` — full editable recreation of the marketing site (faithful HTML/CSS/JSX, dark theme).
- `ui_kits/app/` — the product app, interactive mobile flow (light theme): Fazendas, Mapa, Monitoramento, Ordens de Serviço. Anonymized demo data.
- `assets/` — logos, icon, golden-hour farm photography.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and produce static HTML files for the user to view. If working on production code, copy assets and apply the rules here to design as a TerraNexa brand expert.

If the user invokes this skill without other guidance, ask what they want to build or design, ask a few clarifying questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need. Default to pt-BR copy and the dark marketing palette unless told otherwise.
