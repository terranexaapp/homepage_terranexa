# TerraNexa Design System

**TerraNexa** ("Terra" + "Nexa" — *land* + *nexus*) is a Brazilian **agtech platform for intelligent farm management** — *"Gestão agrícola inteligente"*. It unifies maps & fields (talhões), service orders (ordens de serviço), field monitoring, soil & fertility, costs, and team management into a single app that works from the office to the field, online and offline.

This design system captures the brand across its two surfaces:

1. **Marketing / institutional site** (the primary surface here) — a **dark, forest-green** editorial landing page with golden-hour farm photography. Source: `terranexaapp/homepage_terranexa`.
2. **The product app** — a **light**, dense, green-ink management interface (dashboards, maps, monitoring). Source: `terranexaapp/terranexa`. Its palette is captured in the light-theme tokens; full app UI kits are out of scope for this first pass (see Caveats).

### Sources (store for reference — reader may not have access)
- **GitHub · marketing site:** https://github.com/terranexaapp/homepage_terranexa — plain HTML/CSS/JS institutional page. The DS tokens, components and the Homepage UI kit are lifted directly from here.
- **GitHub · product app:** https://github.com/terranexaapp/terranexa — React/Vite/Capacitor app. `src/styles/theme.js` holds the app's light design tokens.
- Other org repos: `terranexaapp/terranexaandroid` (private), `terranexaapp/cotacoes`.

> Explore the repositories above for deeper fidelity when building new TerraNexa designs — the marketing repo in particular is small, self-contained, and is the canonical reference for this brand's visual language.

> Note: the uploaded `stitch (1).zip` did not arrive in the project filesystem. The marketing repo is the same institutional page, so it was used as the editable source of truth. If the zip held something different, re-attach it via the Import menu.

---

## CONTENT FUNDAMENTALS

**Language.** Brazilian Portuguese (pt-BR), throughout. Keep new copy in pt-BR unless asked otherwise.

**Voice.** Confident, calm, operational. It speaks to a working producer/manager, not a consumer. Sentences are short and declarative, often clipped into punchy fragments for rhythm:
- *"Menos planilhas dispersas. Mais decisão com contexto."*
- *"Mais clareza para decidir. Mais controle para produzir."*
- *"Do campo ao controle."*

**Person.** Addresses the customer as **"sua operação", "sua gestão", "a fazenda"** — possessive, second-person-ish but rarely a literal "você." Talks about the product as **"a TerraNexa"** (feminine article). Avoids "we/our" chest-beating; the subject is usually the farm or the work.

**Tone words / themes.** *inteligente, integrada, em tempo real, precisão, confiável, rastreável, no campo, no escritório.* Pairs technology with the land constantly.

**Casing.** Headlines are sentence case in serif. Eyebrows/labels are **UPPERCASE with wide tracking** (0.15em). Buttons are sentence case, bold.

**Numbers.** Brazilian formatting — decimal comma (`94,2%`), units spelled in pt (`569 m`, `12 atividades`). Stats are concrete and operational, never vanity metrics.

**Emoji.** None. Never. The brand uses line icons, not emoji.

**Example CTA ladder.** Primary: *"Começar agora" / "Solicitar demonstração"*. Secondary: *"Ver a plataforma" / "Explorar módulo →"*. Utility: *"Entrar"*.

---

## VISUAL FOUNDATIONS

**Overall vibe.** Premium agtech. Deep forest-night backgrounds, a vivid leaf-green primary, a harvest-gold secondary, and warm documentary photography of real farmers. Editorial serif headlines over clean sans body. Glassy floating data cards suggest "live software over the real field."

**Color.** Built on near-black forest greens (`#07130b` page, `#0a1810` alt sections, `#0e2116` surfaces). Primary is leaf-green `#74CA45`, deepening to `#3D8A22` / `#1F5F26` in gradients. Secondary accent is harvest gold `#E8A84C`. Earthy soil browns support. The **app** inverts to white backgrounds with deep-green ink `#1A3A0A`. Status: danger `#E85A3A`, info `#4A8AB8` — used sparingly. See `tokens/colors.css`.

**Type.** A deliberate **serif + sans pairing**. Display & headings: **Georgia** serif, weight 800, very tight tracking (−0.045em hero, −0.035em h2), line-height ≈ 1.0 — confident and editorial. Body & UI: **Inter** sans, generous line-height (1.6–1.75). Eyebrows: Inter 900, uppercase, 0.15em tracking, green or gold. One key motif: an `<em>` inside a serif headline turns **green, non-italic** for emphasis (*"Gestão agrícola <em>inteligente</em>"*). See `tokens/typography.css`.

**Backgrounds & imagery.** Full-bleed golden-hour photography behind the hero and CTA, always darkened with **layered gradient shades** (a horizontal 90° fade plus a vertical fade to the page color) so white text stays legible. Imagery is **warm, naturalistic, sunlit** — real people, crops, soil, barns. No illustration, no stock-blue tech imagery. Ambient **radial green glows** (`radial-gradient`) sit behind sections for depth.

**Spacing & layout.** 1280px max container with 24px gutters. Sections breathe at **120px** vertical padding (88 / 72 on smaller screens). 4px-based spacing scale. Generous whitespace; content is never cramped on marketing surfaces (the app, by contrast, is intentionally dense).

**Corner radii.** Soft and consistently large: buttons 14px, cards 20–24px, panels/dialogs 28–34px, hero/field visuals 32px, pills/eyebrows fully round. Nothing is sharp-cornered.

**Cards.** Two families: (1) **solid module cards** — `linear-gradient(145deg, #102419, #0b1b11)`, hairline border, a green radial glow bleeding from the bottom-right corner; (2) **glass data cards** — translucent dark fill `rgba(6,20,11,0.85)` with `backdrop-filter: blur(18px)`, floated over photos. Both use the signature deep float shadow `0 28px 80px rgba(0,0,0,0.38)`.

**Borders & hairlines.** Thin `rgba(255,255,255,0.11)` hairlines separate sections and outline cards on dark. On hover, borders warm to green `rgba(116,202,69,0.38)`.

**Shadows.** Three roles: the deep ambient float (cards/panels), a **green glow** under primary buttons (`0 14px 34px rgba(61,138,34,0.25)`), and a **gold glow** under gold buttons. Shadows intensify on hover.

**Transparency & blur.** Glassmorphism is a signature: the fixed header (`blur(14px)`), insight/data cards (`blur(16–18px)`), and the dialog backdrop (`blur(8px)`). Always dark-tinted glass, never frosted white.

**Gradients.** Used purposefully, never decoratively rainbow: vertical green button gradient (180°), diagonal gold button gradient (135°), photo-shade gradients, and radial ambient glows. **No blue-purple gradients** — that would be off-brand.

**Animation.** Restrained and functional. Scroll-reveal (`opacity 0→1` + `translateY(26px→0)`, 0.7s ease). Buttons lift `translateY(-2px)` on hover; cards lift `-7px` with a stronger shadow. A gentle floating scroll-indicator (2.2s ease-in-out loop) is the only looping animation. All motion respects `prefers-reduced-motion`.

**Hover states.** Links and nav items shift to green. Translucent buttons brighten fill + border. Cards lift and warm their border + reveal glow. Gallery arrows fill green-tinted. Module link arrows nudge right `translateX(4px)`.

**Press / focus.** Focus ring is a 3px green outline at 60% opacity with 4px offset (the app uses a 2px solid `#3d8a22`). Inputs on focus get a green border + a soft `0 0 0 3px rgba(116,202,69,0.11)` ring.

---

## ICONOGRAPHY

- **Style:** thin **line icons**, stroke-width ~1.8 (2 for emphasis), rounded caps & joins, `fill: none`, `stroke: currentColor`. 24×24 viewBox; rendered 16–25px. Always monochrome, inheriting the green tint of their container.
- **Source:** the production site **hand-rolls inline SVG paths** (no icon-font, no icon library). This DS reproduces that exact set in `ui_kits/homepage/icons.jsx` (chevrons, play, check, integration cross, trend line, leaf/sprout, farm/house, order/calendar, soil, layers). Reuse these rather than importing a third-party set, to stay on-brand.
- **If you need icons beyond this set:** match the look with **Lucide** (https://lucide.dev) — same 24px grid, ~1.8 stroke, rounded joins — it is the closest CDN match. Flag any such substitution to the user.
- **Icon containers:** circular green-tint discs (`rgba(116,202,69,0.12)`, 50–52px) hold module/benefit icons. Gallery controls are 50px circular hairline buttons.
- **Logo & brand marks** live in `assets/` (see below). **Emoji are never used. Unicode arrows (`→`, `↑`, `×`) are used as lightweight UI glyphs.**

---

## Brand assets (`assets/`)

| File | What it is |
|---|---|
| `logo-terranexa.png` | Full lockup — seedling-T icon + "TerraNexa" wordmark + "GESTÃO DO CAMPO" tagline. Header/footer logo. |
| `terranexa-logo-wordmark.svg` | Wordmark only — "Terra" (green gradient) · "Nexa" (gold gradient), Georgia 800. |
| `terranexa-icon.svg` | App/favicon mark — forest-green disc, leaf-green seedling shaped as a "T", three gold seeds, dashed soil line. |
| `hero-fazendeiro.png` | Hero photo — farmer in a cornfield at sunrise holding a tablet running the app. |
| `tecnologia-campo.png` | Field-technology photo for the platform section. |
| `algodao-cta.png` | Cotton-field photo behind the closing CTA. |
| `produto-*.png` (×6) | Product screenshots: mapas, os, monitoramento, solo, custos, equipe. |

---

## Index / Manifest

**Foundations & tokens**
- `styles.css` — root entry point; `@import`s the token files (consumers link this).
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css`
- `guidelines/*.card.html` — Design System tab specimen cards (Colors, Type, Spacing, Brand).

**Components** (`window.TerraNexaDesignSystem_b23ba6.*`)
- `components/core/` — **Button** (primary/gold/ghost/glass/link), **Eyebrow** (pill/plain), **Badge** (5 tones).
- `components/forms/` — **Input**, **Select** (dark-surface fields, green focus).
- `components/cards/` — **ModuleCard** (feature tile), **StatCard** (glass insight card).

**UI kits**
- `ui_kits/homepage/` — full interactive recreation of the marketing site (`index.html` + `site.css` + `icons.jsx` + `sections.jsx` + `app.jsx`). This is the editable version of the institutional page.
- `ui_kits/app/` — the **product app** (light theme), an interactive mobile flow: **Fazendas** (property list) → **Mapa principal** (satellite + talhões + tool dock) → **Monitoramento** (técnico do dia: trilha, ocorrências, daninhas) and **Central operacional / Nova Ordem de Serviço**. Built from the app's real source (`theme.js` + `styles.js`); all names, photos and farm data are anonymized.

**Other**
- `SKILL.md` — Agent-Skill manifest for use in Claude Code.
- `assets/` — logos, icon, photography.

---

## Caveats / Substitutions
- **Inter** is loaded from Google Fonts (the production site references it without bundling a file). **Georgia** is a system serif — no file shipped. If you have licensed brand font files, drop them in and add `@font-face` rules.
- The **product app** is large and complex (maps, monitoring, dashboards, solo, chuva, custos). The `ui_kits/app/` kit covers the core flow (Fazendas, Mapa, Monitoramento, Ordens de Serviço); the soil/rain heatmaps, dashboards and management screens are captured in tone but not yet built screen-by-screen — a natural next step.
- App maps are stylized CSS backdrops (the real app uses Esri satellite tiles via Leaflet, which are third-party, not brand design). All names, user photos and farm identifiers in the app kit are anonymized demo data.
