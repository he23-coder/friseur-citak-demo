# Auditoría de diseño — DESPUÉS (v2 „Salon Editorial")

Fecha: 29.07.2026 · Commit en `main` · Comparar con `audits/design-before.md`
Capturas: `audits/visual-before/` ↔ `audits/visual-after/`

## Qué se corrigió (problema → solución)

| # | Problema (v1) | Solución aplicada (v2) |
|---|---|---|
| 1 | Eyebrow en todas las secciones | Máx. 1 por 3 secciones (verificación mecánica: 3/11 home, 0–2 en el resto). Etiquetas funcionales convertidas a `.meta-label` (sin raya dorada). |
| 2 | Un solo patrón de sección | 6 familias de layout: hero split editorial, trustbar, índice sticky+lista, proof con cifra XL, bloques de salón alternos, galería de proporciones mixtas. |
| 3 | Un fade-up global | Sistema `.rv` con 3 variantes (up, left, clip) + momento propio del hero (mask-reveal por líneas + clip en imagen). |
| 4 | Sin firma visual | Grano de película (3–4 %, capa fija), hairlines, tipografía XL, solapado editorial del titular. |
| 5 | Sin modo oscuro | Tema completo Hell/Dunkel/System: tokens, anti-flash en `<head>`, persistencia, `theme-color` dinámico, selector en header (móvil+desktop) y menú. |
| 6 | Fondos planos | 3 niveles de superficie por tema (bg/raise/sunk) + grano + bloques ink deliberados. |
| 7 | CTAs duplicados | Una etiqueta por intención: „Termin vereinbaren“, „Anrufen“, „Route planen“, „Leistungen entdecken“. |
| 8 | Píldoras sobre fotos | Eliminadas; categorías viven en texto. |
| 9 | Hero genérico overlay | Composición editorial 55/45 con placa de titular solapada, máx. 4 elementos, badges fuera del hero (trustbar). |
| 10 | Fraunces (default vetado) | **Playfair Display Variable** (justificación documentada) + Manrope. |
| 11 | Rejillas de tarjetas iguales | Servicios como índice editorial con preview al hover; relacionados como lista. |
| 12 | Iconos en círculos/tarjetas | Eliminados; proof con hairlines y cifra 4,9★ a gran formato. |
| 13 | Reseñas tipo widget | Tarjetas editoriales hairline, serif, comilla dorada, „mehr lesen“, Google como fuente sutil. |
| 14 | Avatar circular placeholder | Loseta tipográfica (inicial itálica + raya dorada sobre `--bg-sunk`). |
| 15 | Salones gemelos | Imagen y composición propias por ubicación (B/N serie Mannheim / color cálido Weinheim). |
| 16 | Páginas de servicio idénticas | Dos composiciones alternadas por categoría (split con foto lateral / foto panorámica). |
| 17 | Tabla de precios genérica | Lista editorial: título serif + hairline, filas sin bordes, precios tabulares. |
| 18 | Footer convencional | Cierre editorial con wordmark XL + marfil/dark cálido. |
| 19 | Hero móvil reducido | Composición propia: foto 16/10 arriba, bloque tipográfico debajo. |
| 20 | aggregateRating propio | Eliminado del schema (Google es la fuente verificable). |

## Qué aportó cada skill

### Impeccable (flujo completo)
- **init/document**: `PRODUCT.md` y `DESIGN.md` como artefactos duraderos del proyecto.
- **new-work**: confirmó modo „Redesign“ (reemplazar mundo visual, conservar verdad de producto); la dirección vino fijada por el brief (brief-pinned).
- **craft-floor**: contraste ≥ 4.5:1, medida 62–68 ch, tracking máx. −0.02em, un momento de movimiento propio, estados completos.
- **critique**: auditoría v1 (27 hallazgos en `design-before.md`).
- **bolder**: el proof „4,9★“ y el wordmark del footer amplifican con el vocabulario del sistema (serif XL), sin añadir efectos.
- **typeset**: Playfair Display + Manrope, escala fluida, itálica solo para énfasis, tabular-nums en precios.
- **layout**: squint test aplicado; lectura primaria clara en cada página; minmax(0,1fr) en todas las rejillas (bug real de overflow en 360 px encontrado y corregido).
- **animate**: un momento propio (hero), soporte medido (≤600 ms, ease-out), reduced-motion total.
- **adapt**: 6 viewports verificados con tests automatizados.
- **optimize**: LCP 0,5–1,9 s, CLS ≈ 0, sin librerías de animación (CSS + vanilla JS).
- **audit/polish/harden**: contraste dorado en etiquetas (4,33→5,8:1 con `--accent-text`), pointer-capture del carrusel que bloqueaba clics (bug real), z-index del menú, 404 y estados.

### Taste Skill (design-taste-frontend + redesign-existing-projects + high-end-visual-design)
- Configuración aplicada: `DESIGN_VARIANCE 7` (asimetría controlada, solapado de titular, offsets), `MOTION_INTENSITY 5` (reveal coreografiado + microinteracciones), `VISUAL_DENSITY 4` (aire generoso sin vacío).
- **design-taste-frontend**: disciplina de hero (≤4 elementos), eyebrow máx. 1/3, veto de 3-tarjetas iguales, zigzag ≤ 2, shape lock (afilado + pill solo en micro-controles), color lock (un acento), no pills sobre fotos, copy audit alemán.
- **redesign-existing-projects**: priorización font→color→estados→layout; preservación de IA/URLs/funciones; 100dvh; estados hover/active/focus.
- **high-end-visual-design**: arquetipo „Editorial Luxury“ (cremas cálidas, espresso, serif variable, grano), „Editorial Split“ como layout archetype, bezier personalizado `cubic-bezier(0.16,1,0.3,1)`, blur solo en elementos fijos, grano fijo.

### UI UX Pro Max
- `DESIGN-SYSTEM-RESEARCH.md` generado con el script oficial.
- Aplicado: dirección tipográfica „Classic Elegant“, CTA above the fold, checklist pre-delivery (contraste, focus, reduced-motion, breakpoints), anti-patrón „cheap visuals + fast animations“.
- Rechazado (documentado): estilo „Liquid Glass“, paleta azul, OLED-negro, Google Fonts CDN.

## Cómo se evitó la estética genérica
- Ninguna rejilla de tarjetas idénticas en toda la web.
- El hero no existe en ninguna plantilla: placa tipográfica que solapa la foto.
- Cada tipo de página tiene composición propia (home, índice de servicios, servicio, salón, historia, contacto, legal).
- Tipografía de gran formato con itálica dorada como firma, no como decoración repetida.

## Modo oscuro: cómo se construyó
- Tokens semánticos únicos; `[data-theme='dark']` redefine 14 variables, nunca duplica CSS.
- Inline script pre-paint (lee localStorage/`?theme=`/sistema) → cero flash y cero FOUC.
- Selector segmentado Hell/System/Dunkel (iconos + etiquetas en móvil), `aria-pressed`, teclado.
- `theme-color` sincronizado; transición 250 ms (off con reduced-motion); `color-scheme` ajustado.
- Carbón cálido `#16120D`, nunca negro puro; marfil `#F2E9D8`, nunca blanco puro; dorado aclarado `#C8A86B` para contraste; fotos con `brightness(.94)` excepto heroes (LCP).

## Qué cambió en móvil
- Hero propio (foto 16/10 + bloque), header con toggle + burger morfológico, menú editorial a pantalla completa con selector de tema etiquetado, sticky bar con safe-area, targets ≥ 44–48 px, listas con thumbnails ocultos, precios a una columna legible, `100dvh`, 6 viewports testados.

## Decisiones rechazadas (con motivo)
- **Em-dash ban** de taste-skill: en alemán el guion/en-dash es puntuación correcta („Mo. – Fr.“). Se mantiene lo gramatical, se evita lo decorativo.
- **Lightbox de galería**: no aporta valor real en la demo; añade JS y peso.
- **Marquee de servicios**: máx. uno permitido; el índice editorial ya resuelve el descubrimiento.
- **Rotated text / bento grids / glassmorphism / scroll-jacking**: vetados por el brief y las skills.
- **Liquid Glass + paleta azul (UI UX Pro Max)**: fuera de marca y del brief.

## Resultados medidos
- Playwright: **178/178 tests** (7 specs, desktop+mobile, ambos temas).
- Lighthouse: 4 informes en `audits/lighthouse/` — Desktop 100/100/100/100 (ambos temas), Mobile 95–100/100/100/100.
- LCP 0,5–1,9 s · CLS ≈ 0 · 0 errores de consola en 23 rutas × 2 temas.
