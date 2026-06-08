Branded button — the primary action control on dark TerraNexa surfaces; use `primary` for the main CTA, `gold` for high-emphasis conversion moments, `ghost`/`glass` for secondary actions.

```jsx
<Button variant="primary" href="#demo">Começar agora</Button>
<Button variant="glass" icon={<PlayIcon />}>Ver a plataforma</Button>
<Button variant="gold" size="sm">Solicitar demonstração</Button>
```

Variants: `primary` (green gradient + green glow), `gold` (harvest gradient, dark ink), `ghost`/`glass` (translucent white, hairline border), `link` (bare green text). Sizes: `sm` (44px) / `md` (56px). Pass `icon` / `iconRight` for inline SVGs. Set `href` to render an `<a>`.
