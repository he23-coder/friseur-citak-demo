# Auditoría de diseño — ANTES (v1, producción 28.07.2026)

Auditoría cruzada: Impeccable (critique/layout/typeset) + Taste Skills
(design-taste-frontend, redesign-existing-projects, high-end-visual-design) + UI UX Pro Max
+ capturas Playwright (`audits/visual-before/`).

## Dial reading del estado actual
- DESIGN_VARIANCE ≈ 3/10 — simetría predecible, grillas iguales, splits zigzag repetidos.
- MOTION_INTENSITY ≈ 3/10 — un solo fade-up idéntico en todo (`reveal`), sin momento propio.
- VISUAL_DENSITY ≈ 5/10 — ritmo vertical correcto pero monótono.

## Problemas principales (por área)

### Global
1. **Eyebrow en TODAS las secciones** — viola la regla de restricción (máx. 1 por 3 secciones). Ritmo de plantilla.
2. **Un solo patrón de sección** — split 50/50 zigzag + grid de tarjetas iguales. Menos de 4 familias de layout por página.
3. **Una sola animación idéntica** (`fade-up`) aplicada a todo; sin momento editorial.
4. **Radios mínimos (2–6 px) + bordes finos** — correctos pero sin carácter; falta firma visual propia.
5. **Sin modo oscuro** — requisito central del brief.
6. **Sin textura/materialidad** — fondos planos; cero grano, cero profundidad editorial.
7. **Duplicación de intención CTA** — "Termin vereinbaren", "Termin buchen", "Termin sichern", "Jetzt Termin buchen" para la misma acción.
8. **Píldoras de categoría sobre fotos** (service cards) — patrón vetado (pills overlaid on images).

### Hero
9. **5+ elementos de texto** (eyebrow, H1, sub, 2 CTA, fila de badges) — viola la disciplina de máx. 4.
10. **Fotografía de fondo completa con degradado** — solución segura y predecible; el H1 flota sobre una imagen ocupada; sin composición editorial.
11. **Badges de confianza dentro del hero** — deben ir bajo el hero, no dentro.

### Tipografía
12. **Fraunces** — en la lista de vetadas por defecto de dos skills (taste + impeccable "training-data defaults"). Cambiar a una serif editorial distinta (Playfair Display, confirmada por UI UX Pro Max).
13. **Escala conservadora** — display máx. ~4rem; falta tipografía "memorable" de gran formato.
14. **Jerarquía débil en metadatos** — mismo peso/tamaño para casi todo.

### Secciones
15. **Leistungen**: 4 tarjetas iguales en home + 14 tarjetas iguales en /leistungen/ — "rejilla interminable" explícitamente vetada. Necesita mezcla editorial (lista + destacados + tipografía).
16. **"Vier gute Gründe"**: 4 tarjetas idénticas con icono en círculo — patrón genérico vetado.
17. **Reseñas**: tarjetas blancas iguales tipo widget; alturas desiguales; avatar de inicial circular genérico; debe sentirse editorial, no "plugin".
18. **Galería**: grid de 4 columnas predecible con 2 tall; falta ritmo editorial (proporciones variadas, captions funcionales).
19. **Equipo**: tarjetas iguales; placeholders de inicial en degradado dorado — "avatar" disfrazado; necesita solución editorial sobria.
20. **Salones**: tarjetas gemelas idénticas — cada ubicación debe sentirse propia.
21. **Páginas de servicio**: todas idénticas (hero + split + checklist + FAQ) — cambia solo el texto; vetado.
22. **Precios**: tabla estándar; puede ser mucho más editorial (grupos con respiración, precio alineado, sin bordes de tabla genéricos).
23. **Footer**: correcto pero convencional; puede cerrar con firma de marca.

### Móvil
24. Hero móvil = versión reducida del desktop (misma foto de fondo, mismo overlay).
25. Menú móvil correcto pero sin dirección de arte (lista plana).
26. Falta selector de tema.

### Modo oscuro
27. Inexistente. Debe diseñarse completo: tokens, selector Hell/Dunkel/System, sin flash, theme-color, persistencia.

## Lo que SÍ funciona (conservar)
- Sistema de contenido y datos reales (services.ts, prices.ts, reviews.ts, site.ts).
- SEO técnico completo; estructura de páginas y URLs.
- Carrusel funcional accesible (lógica) — solo rediseño visual.
- Formulario validado; mapa con fachada; sticky bar funcional.
- Paleta de marca (dorado + tinta + marfil) como BASE — el brief la fija explícitamente
  (override documentado frente al veto "beige+brass" de taste-skill: la marca ES dorada).

## Dirección de corrección
Sustituir el mundo visual (no pulir): editorial de lujo contemporáneo con tipografía de gran
formato, composición asimétrica controlada, textura de grano, modo oscuro cálido completo,
servicios como índice editorial, salones con carácter propio y movimiento con intención.
Detalles en `DESIGN.md`.
