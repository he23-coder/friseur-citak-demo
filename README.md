# Hair Lounge by Citak — „Salon Editorial" (v2)

Rediseño visual completo de la demo de **friseur-citak.de**: lujo editorial contemporáneo
con modo oscuro diseñado a medida. Astro 5 + TypeScript, build estático en Cloudflare Workers.

**Live-Demo:** https://friseur-citak-demo.geraldhe21.workers.dev

> v1 (estructura + contenido) → v2 (rediseño visual profundo con 3 skills de diseño).
> Dirección visual duradera: [`DESIGN.md`](DESIGN.md) · Contexto de producto: [`PRODUCT.md`](PRODUCT.md)
> Auditorías: [`audits/design-before.md`](audits/design-before.md) · [`audits/design-after.md`](audits/design-after.md)

---

## Highlights v2

- **Nuevo mundo visual „Salon Editorial"**: placa tipográfica que solapa la fotografía real,
  Playfair Display Variable + Manrope, grano de película, hairlines, un acento dorado.
- **Modo oscuro completo**: Hell / Dunkel / System, sin flash (inline script pre-paint),
  persistencia en localStorage, `theme-color` dinámico, selector accesible en header y menú.
- **Servicios como índice editorial** (sticky + lista + preview al hover) en lugar de
  rejillas de tarjetas iguales.
- **Cada ubicación con carácter propio** (serie B/N Mannheim · color cálido Weinheim).
- **Reseñas reales de Google** en carrusel editorial (serif, „mehr lesen", swipe, teclado,
  pausa al interactuar). Sin schema de reseñas autopromocionales.
- **178 tests Playwright** (7 specs) + **Lighthouse 95–100** en las 4 combinaciones.

## Tecnología

| Bereich | Wahl |
| --- | --- |
| Framework | [Astro 5](https://astro.build) (statischer Output) |
| Sprache | TypeScript |
| Styling | Design-System propio con CSS-Tokens (Hell/Dunkel) |
| Fonts | Playfair Display Variable + Manrope (selbst gehostet via `@fontsource`) |
| Hosting | Cloudflare Workers (Static Assets) via Wrangler |
| Tests | Playwright Test (7 Spec-Dateien, 178 Tests) |

## Skills de diseño instaladas y aplicadas

| Skill | Instalada | Ruta | Invocada | Aplicación concreta |
| --- | :-: | --- | :-: | --- |
| Impeccable | Sí | `.agents/skills/impeccable/` | Sí (init, document, shape, critique, bolder, typeset, layout, animate, adapt, optimize, audit, polish, harden) | `PRODUCT.md`+`DESIGN.md`, auditoría v1 (27 hallazgos), craft-floor (contraste/medida/movimiento), bug de pointer-capture del carrusel, disciplina tipográfica, hardening de estados |
| Taste – design-taste-frontend | Sí | `.agents/skills/design-taste-frontend/` | Sí (audit-first + pre-flight mecánico) | Hero ≤ 4 elementos, eyebrows ≤ 1/3, veto de rejillas iguales, shape/color lock, cambio de serif (Fraunces→Playfair), copy audit |
| Taste – redesign-existing-projects | Sí | `.agents/skills/redesign-existing-projects/` | Sí (scan→diagnose→fix) | Preservación de IA/URLs/funciones, prioridad font→color→estados→layout, 100dvh, estados hover/active/focus |
| Taste – high-end-visual-design | Sí | `.agents/skills/high-end-visual-design/` | Sí (arquetipos + checklist) | Arquetipo „Editorial Luxury" + „Editorial Split", grano fijo, bezier propio, blur solo en fijos |
| UI UX Pro Max | Sí | `.agents/skills/ui-ux-pro-max/` | Sí (script oficial de búsqueda) | [`DESIGN-SYSTEM-RESEARCH.md`](DESIGN-SYSTEM-RESEARCH.md): dirección tipográfica confirmada, checklist pre-delivery; rechazados Liquid Glass y paleta azul (documentado) |

Notas de verificación: cada skill contiene su `SKILL.md` legible (no vacío); Impeccable incluye
además `scripts/`, `reference/` y `agents/`; UI UX Pro Max incluye `scripts/search.py`
(ejecutado con éxito). Las skills viven dentro de este repositorio en `.agents/skills/`.
Configuración aplicada: `DESIGN_VARIANCE 7/10`, `MOTION_INTENSITY 5/10`, `VISUAL_DENSITY 4/10`.

## Instalación & desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build & tests

```bash
npm run build                # build estático a dist/
npm run preview              # preview local del build
npx playwright test          # tests contra producción
BASE_URL=http://localhost:4321 npx playwright test   # tests contra build local
```

Specs: `tests/theme-toggle.spec.ts`, `dark-mode-visual.spec.ts`, `responsive-layout.spec.ts`,
`navigation.spec.ts`, `carousel.spec.ts`, `forms.spec.ts`, `production-smoke.spec.ts`.

## Deployment (Cloudflare Workers)

```bash
npm run build && npx wrangler deploy
```

## Auditorías y pruebas visuales

- `audits/visual-before/` — capturas de la v1 (producción, 28.07.2026)
- `audits/visual-after/` — capturas de la v2 (ambos temas, desktop + móvil)
- `audits/lighthouse/` — 4 informes: mobile-light, mobile-dark, desktop-light, desktop-dark

## Seitenstruktur

```
/                        Startseite (Hero editorial, Trustbar, Leistungs-Index, Proof, Salons, Team, Rezensionen, Galerie, CTA)
/leistungen/             Índice por categorías (lista editorial + imagen por categoría)
/leistungen/<slug>/      14 páginas de servicio (2 composiciones alternadas por categoría)
/salons/mannheim/        Equipo, precios, reseñas, mapa (serie B/N)
/salons/weinheim/        Equipo, precios, reseñas, mapa (color cálido)
/ueber-uns/              Historia, timeline Cagri Citak, filosofía
/termin/                 Hub de reserva (links al sistema original)
/kontakt/                Formulario validado (mailto), datos, mapas
/impressum/  /datenschutz/  /404/
```

## Herkunft der Inhalte

Sin cambios respecto a la v1: todos los datos (servicios, precios, equipos, horarios,
reseñas, historia) provienen de fuentes públicas verificables (web original + perfiles
oficiales de Google, extraídos el 28.07.2026). Detalle completo en la sección
„Herkunft der Inhalte" del historial de commits y en `src/data/`.

## Nicht verifizierbare Daten / offene Platzhalter

- **USt-IdNr.** del sitio original (formato inusual) — omitida; pendiente de confirmación del propietario.
- **Fotos de equipo**: solo 5 de 12 miembros tienen retrato real; el resto usa loseta
  tipográfica (sin avatares genéricos ni rostros inventados).
- **Formulario**: funciona vía `mailto:` (como el original, con validación); preparado
  para conectar un backend si se desea.

## Rechtliches

Demo-Projekt zu Vertriebszwecken. Inhalte und Bildmaterial stammen von der öffentlichen
Website von Hair Lounge by Citak und dienen ausschließlich der Präsentation eines
Redesigns gegenüber dem Inhaber.
