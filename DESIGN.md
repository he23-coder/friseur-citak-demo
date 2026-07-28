# DESIGN.md — Hair Lounge by Citak · „Salon Editorial"

Dirección visual durable del rediseño (v2). Sustituye al mundo visual anterior por completo;
el contenido, las URLs y las funciones se conservan. Dirección fijada por el brief del cliente
(brief-pinned: lujo editorial contemporáneo). Documenta también decisiones de las skills
aplicadas (Impeccable, Taste, UI UX Pro Max).

---

## 1. Concepto visual

**„Salon Editorial"** — la presencia digital de una casa de peluquería premium leída como
revista de moda: fotografía real del salón a gran escala, tipografía editorial de gran formato,
composición asimétrica controlada, mucho aire, un solo acento dorado (el de la marca) y un
modo oscuro cálido diseñado a medida. La interfaz no grita: respira, recorta y compone.

**Modo del visitante:** Persuade (reservar, llamar, planear ruta). La conversión vive dentro
del vocabulario editorial, nunca como banner pegado.

**Tesis del hero:** una doble página de revista. Titular de gran formato sobre marfil,
fotografía dominante recortada con intención, indicador real de dos ubicaciones. Sin overlay
genérico de foto+fondo oscuro+texto centrado.

## 2. Principios

1. **La fotografía manda.** Imágenes reales a gran escala, recortes controlados (3/4, 4/5,
   16/10), sangrados a borde en momentos editoriales. Nada de stock ni marcos genéricos.
2. **La tipografía compone.** Display serif grande, medidas cortas, énfasis en itálica dorada
   de la misma familia. La jerarquía se construye con tamaño, peso y espacio, no con color.
3. **Un acento.** Dorado champagne de la marca. Todo lo demás: tinta, marfil, tonos cálidos.
4. **Aire con ritmo.** Espaciado generoso con contraste deliberado (apretado/generoso);
   más espacio encima de un titular que debajo.
5. **Cada página, una composición.** Mínimo 4 familias de layout por página; zigzag máx. 2.
6. **Movimiento con significado.** Un momento propio por página (revelado de titular + recorte
   de imagen). Sin fade-up global repetido.
7. **El contenido real es el lujo.** Reseñas reales, precios reales, historia real. La forma
   editorial existe para servirlos.

## 3. Paleta

Tokens semánticos (CSS custom properties). Dos temas, mismo sistema.

### Claro (Hell)
| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#F5F0E6` | Fondo marfil cálido |
| `--bg-raise` | `#FBF8F0` | Superficie elevada |
| `--bg-sunk` | `#EDE6D6` | Sección hundida |
| `--ink` | `#1A1510` | Tinta cálida (no negro puro) |
| `--text` | `#241D14` | Texto principal |
| `--muted` | `#6F6250` | Texto secundario |
| `--line` | `rgba(26,21,16,.14)` | Hairlines |
| `--line-strong` | `rgba(26,21,16,.30)` | Hairlines fuertes |
| `--accent` | `#A3844A` | Dorado champagne (AA sobre marfil) |
| `--accent-deep` | `#83673A` | Dorado hover/énfasis |
| `--accent-soft` | `#E4D5B4` | Dorado fondo suave |
| `--on-accent` | `#1A1510` | Texto sobre dorado |
| `--danger` | `#9C3A2C` | Errores |

### Oscuro (Dunkel) — carbón cálido, nunca #000
| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#16120D` | Fondo carbón cálido |
| `--bg-raise` | `#1E1811` | Superficie elevada |
| `--bg-sunk` | `#100D09` | Sección hundida |
| `--ink` | `#F2E9D8` | Marfil cálido (no blanco puro) |
| `--text` | `#EAE0CC` | Texto principal |
| `--muted` | `#A99B82` | Texto secundario |
| `--line` | `rgba(242,233,216,.15)` | Hairlines |
| `--line-strong` | `rgba(242,233,216,.32)` | Hairlines fuertes |
| `--accent` | `#C8A86B` | Dorado claro para contraste |
| `--accent-deep` | `#DFC28A` | Dorado hover |
| `--accent-soft` | `#3A2F1D` | Dorado fondo suave |
| `--on-accent` | `#16120D` | Texto sobre dorado |
| `--danger` | `#D08068` | Errores |

Contraste verificado ≥ 4.5:1 (texto/fondo) y ≥ 3:1 (display) en ambos temas.
Fotos en oscuro: `filter: brightness(.92)` para integrar, sin duotones.

## 4. Tipografía

| Rol | Fuente | Pesos | Notas |
|---|---|---|---|
| Display | **Playfair Display** (variable, @fontsource) | 400–700 + itálica | Serif editorial justificada por el brief (lujo/editorial). Sustituye a Fraunces (vetada como default por taste-skill e impeccable). Itálica dorada solo para 1 palabra de énfasis por titular. |
| Texto/UI | **Manrope** (@fontsource) | 400, 500, 600, 700, 800 | Sans limpia y cálida; evita Inter (vetada). |
| Datos | Manrope con `font-variant-numeric: tabular-nums` | 600–800 | Precios, horarios, ratings. |

**Escala fluida** (clamp, rem):
- `display-xl`: clamp(2.9rem, 7.2vw, 6.8rem) / leading 1.02 / tracking -0.02em — solo home + heroes editoriales
- `display-lg`: clamp(2.3rem, 5vw, 4.2rem) / 1.05
- `h1`: clamp(2.1rem, 4.4vw, 3.6rem) / 1.08
- `h2`: clamp(1.7rem, 3.2vw, 2.5rem) / 1.12
- `h3`: clamp(1.2rem, 2vw, 1.45rem) / 1.2
- `lead`: clamp(1.05rem, 1.5vw, 1.2rem) / 1.6
- body: 1rem / 1.65, medida 62–68ch
- `small/meta`: .8rem / tracking +0.02em
- `eyebrow`: .72rem / 800 / tracking +0.22em / uppercase — **máx. 1 por cada 3 secciones** (regla dura)

Itálicas con descendentes (y, g, j, p, q): leading ≥ 1.1 y padding-bottom de reserva.

## 5. Espaciado y grid

- Base 4px: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Sección: padding-block clamp(4rem, 9vw, 8rem); ritmo alternado tight/open.
- Container: `min(100% - 2.5rem, 1240px)`. Lectura: 680px.
- Grid editorial 12 columnas desktop (gutter 24px), offsets reales (col-start 2/7, spans 5/7).
  Mobile: 1 columna estricta (w-full, px-5), sin excepciones.
- Más espacio sobre un titular que debajo de él.

## 6. Forma, bordes, sombras

- **Radios (Shape Lock):** sistema afilado editorial: 0–2px en imágenes, tarjetas, inputs,
  botones. Full-pill SOLO en micro-controles (dots del carrusel, selector de tema).
- **Bordes:** hairlines 1px `--line`; sin bordes en cada fila de listas largas (separación
  por espacio + hairline por grupo).
- **Sombras:** mínimas y cálidas; solo elementos flotantes (header, sticky bar, lightbox):
  `0 18px 50px -22px rgba(26,21,16,.35)` (claro) / `0 18px 50px -22px rgba(0,0,0,.6)` (oscuro).
- **Textura:** grano de película sutil (ruido tileado ~3% opacidad, capa fija
  `pointer-events:none`, nunca sobre contenedores con scroll). Firma material de la casa.

## 7. Componentes

### Botones (una etiqueta por intención)
- Primario dorado sólido, texto `--on-accent`, radio 0, uppercase tracking .08em, icono opcional.
- Secundario: hairline + texto; hover: fondo tintado.
- Estados: hover translateY(-1px) + fondo deep; active scale(.98); focus-visible anillo dorado 2px.
- Intenciones únicas: reserva = „Termin vereinbaren“; llamada = „Anrufen“; ruta = „Route planen“;
  descubrir = „Leistungen entdecken“. Nunca sinónimos nuevos.
- Etiqueta en una línea en desktop (sin wrap).

### Header
Fijo, transparente sobre hero; al scroll: `--bg-raise` + blur (solo fijo, permitido) + hairline.
Una línea, ≤ 76px. Derecha: selector de tema + CTA „Termin vereinbaren“ + burger (móvil).
Burger: morph a X con transición; menú móvil a pantalla completa con stagger editorial.

### Selector de tema (Hell / Dunkel / System)
Segmented pill en header (desktop) y dentro del menú (móvil). Iconos SVG sol/sistema/luna.
Inline script pre-paint: lee `localStorage['hlc-theme']`, aplica `data-theme` en `<html>`,
escucha `prefers-color-scheme` cuando = System. Actualiza `meta[name=theme-color]`.
Sin flash, sin FOUC, transición de 250ms en colores de fondo/texto (off con reduced-motion).

### Hero (home)
Grid editorial 100dvh (usa `min-height: 100dvh`): columna texto (span 6) sobre marfil +
columna foto (span 6, full-bleed, crop 4/5) con leve solapado del titular sobre la foto en
desktop (mixto legible: titular sobre placa marfil, no sobre la imagen).
Máx. 4 elementos: eyebrow (ubicaciones reales), titular display-xl con énfasis itálico,
sub ≤ 20 palabras, CTAs. Entrada: líneas del titular con mask-reveal + imagen con
clip-reveal (800ms, ease-out). Los indicadores de confianza van EN LA SECCIÓN SIGUIENTE
(trust bar), nunca dentro del hero.
Móvil: foto 16/10 arriba, bloque de texto debajo, CTAs apilados a ancho completo.

### Trust bar (bajo el hero)
Una sola fila de hechos reales separados por hairlines: 4,9★ (300+ reseñas) · 2 Salons ·
Familienunternehmen seit 1975 · Great-Lengths-Salon. En móvil, 2×2 o scroll horizontal.

### Leistungen (home)
Índice editorial, no tarjetas: columna izquierda sticky con titular + CTA; columna derecha
con lista de servicios (nombre serif grande, tagline small, flecha que se desliza al hover,
imagen preview que aparece a la derecha en desktop al hover/focus). Máx. 7 entradas +
enlace „Alle Leistungen“. Móvil: lista con thumbnails 4/5 a la izquierda.

### Leistungen (/leistungen/)
Por categoría: cabecera de categoría en display-lg + 1 imagen destacada + lista editorial
de servicios. Sin píldoras sobre fotos. Categorías separadas por aire, no por cajas.

### Página de servicio
Dos composiciones alternadas por categoría (A: foto full-height derecha; B: foto izquierda
con panel de texto solapado). Cuerpo: intro editorial, beneficios como lista con hairlines,
precio/CTA en panel lateral solo si aporta. FAQ en acordeón hairline. Relacionados: lista
editorial, no tarjetas repetidas.

### Salones
Cada ubicación con carácter propio (fotografía y composición distintas; Mannheim: serie B/N
de interiores; Weinheim: foto cálida en color). Bloque de datos (dirección/horario/tel) en
panel editorial con hairlines. Precios: lista editorial agrupada (título de grupo serif +
hairline, filas sin bordes con precio tabular a la derecha; „bis Kinn / ab Kinn“ como dos
columnas de precio). Mapa con fachada click-to-load (DSGVO + LCP).

### Equipo
Retratos 3/4 en B/N con nombre; miembros sin foto: **loseta tipográfica** (nombre en serif
sobre `--bg-sunk` con hairline dorado, sin avatar circular ni degradados).

### Reseñas (carrusel)
Editorial, no widget: comillas grande serif, texto 1.15rem, estrellas doradas, autor +
fecha + „Salon Mannheim/Weinheim“ + marca Google sutil (icono G + „Google Rezension“).
Texto clampado a ~4 líneas con „mehr lesen“. Flechas hairline circulares; dots pill.
Swipe, teclado, autoplay con pausa. Funciona en ambos temas (sin schema de reseñas
autopromocionales: se elimina aggregateRating del schema propio — Google es la fuente).

### Galería
Ritmo editorial con CSS grid de proporciones mixtas (16/10, 3/4, 1/1, 4/5), algunas a
ancho doble; hover zoom sutil; captions funcionales solo donde aportan („Balayage,
Salon Mannheim“). Sin lightbox (no aporta sobre la demo; documentado).

### Formularios
Inputs con hairline inferior únicamente (editorial), fondo transparente, label encima,
foco = hairline dorada + fondo tintado suave; errores en `--danger` bajo el input;
éxito como panel hairline, no toast. Placeholder nunca como label.

### Footer
Cierre editorial: marca grande (logo o wordmark serif), columnas sobrias, hairline superior,
datos legales. Fondo `--bg-sunk` del tema activo (ya no „caja negra“ pegada al final).
El bloque oscuro de cierre CTA se integra como inversión deliberada única por página.

### Sticky bar móvil
3 acciones (Anrufen / Termin / Route), fondo `--bg-raise` + blur, hairline superior,
targets ≥ 48px, safe-area inset. Visible tras 320px de scroll.

## 8. Movimiento (motion thesis)

**Momento propio:** entrada del hero (titular por líneas con mask-reveal, imagen con
clip-path reveal, 700–800ms, `cubic-bezier(0.16,1,0.3,1)`).
**Soporte:** reveals de scroll variados por tipo de sección (up para texto, clip para imágenes,
slide-lateral para listas) con stagger ≤ 3 y tope 600ms; hovers 150–250ms; tema 250ms;
carrusel 500ms. Nada de bounce, parallax agresivo, scroll-jacking ni marquees.
`prefers-reduced-motion`: todo estático e instantáneo, contenido siempre visible.

## 9. Responsive

Breakpoints: 360 / 390 / 640 / 900 / 1240+. Pruebas: 360×800, 375×812, 390×844, 412×915,
768×1024, 1440×900. Mobile-first; composiciones asimétricas colapsan a 1 columna < 900px;
`100dvh`; safe-area; targets ≥ 44px; sin scroll horizontal.

## 10. Prohibido (elementos vetados)

- Overlay genérico foto+degradado+texto centrado como hero.
- Tarjetas iguales en rejillas repetitivas; tarjetas dentro de tarjetas; iconos en cuadrados.
- Píldoras/etiquetas sobre fotografías; pills como sistema.
- Eyebrow en cada sección (máx. 1/3); números de sección; texto rotado vertical.
- Glassmorphism como solución; gradientes decorativos; texto con gradiente; neones; #000/#FFF puros.
- Animaciones idénticas en todas las secciones; bounce/elástico; scroll cues.
- Inter/Arial como lenguaje visual; Fraunces (default vetado).
- Avatares genéricos circulares; fotos falsas de equipo; iconos de stock.
- Em-dash decorativo en titulares/CTAs (el alemán mantiene su puntuación correcta con
  guion/en-dash gramatical: „Mo. – Fr.“, no como recurso estilístico).
- Bento grids sin motivo; secciones centradas por defecto; sombras duras.
- Lightbox sin valor; marquees; sliders infinitos.

## 11. Ejemplos de aplicación

**Home:** Hero editorial → trust bar → índice Leistungen (sticky+lista) → promo 15% (banda
tinta/dorada) → „Warum wir“ como editorial con cifra grande (4,9) → Salones (dos bloques
asimétricos alternos) → Equipo → Reseñas → Galería → Partner (logos, solo logos) → CTA final.
≥ 5 familias de layout distintas.

**Servicio (Balayage):** hero composición B con foto dominante; intro; beneficios con
hairlines; panel precio+CTA; FAQ; relacionados; CTA final.

## 12. Decisiones registradas

- **Dorado/marfil/tinta** se mantiene pese al veto „beige+brass“ de taste-skill: la identidad
  REAL de marca es dorada (logo + interior). Override explícito permitido por la propia skill
  („brand brief explicitly names those colors“). Se enriquece con champán/cobre y se disciplina
  a un solo acento.
- **Playfair Display** elegida: serif editorial justificada por el brief; distinta de Fraunces
  (vetada); confirmada por UI UX Pro Max („Classic Elegant“); soporta caracteres alemanes;
  variable para rendimiento.
- **Grano de película**: permitido por high-end-visual-design (Editorial Luxury) pese a la
  cautela de craft-floor; se aplica al 3% en capa fija, no en contenedores.
- **aggregateRating propio eliminado** del schema: las reseñas viven en Google (fuente
  verificable), no como marcado autopromocional.
