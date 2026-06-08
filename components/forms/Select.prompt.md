Labeled dropdown for dark forms; matches Input with a green chevron.

```jsx
<Select
  label="Principal interesse"
  placeholder="Selecione"
  options={["Ordens de serviço e custos", "Monitoramento agronômico", "Solo e fertilidade"]}
/>
```

Options can be strings or `{ value, label }`. Forwards native select attributes (`required`, `value`/`onChange`).
