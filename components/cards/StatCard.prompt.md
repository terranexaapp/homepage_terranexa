Glassy insight/stat card floated over imagery (the hero "Saúde da safra" cards).

```jsx
<StatCard label="Saúde da safra" value="94,2%" progress={94} note="2,4% acima do ciclo anterior" icon={<CheckIcon />} />
<StatCard label="Operação hoje" value="12" unit="atividades" note="3 ordens exigem atenção" noteTone="gold" />
```

Use over photos with `backdrop-filter`. `progress` is 0–100; omit it for plain stat cards. `noteTone="gold"` flags attention items.
