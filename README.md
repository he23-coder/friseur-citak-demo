# Hair Lounge by Citak — “Salon Editorial”

Demo comercial del rediseño de [friseur-citak.de](https://friseur-citak.de/), construida
con Astro 5, TypeScript, CSS propio y Cloudflare Workers con Static Assets.

**Demo:** https://friseur-citak-demo.geraldhe21.workers.dev

La dirección visual se conserva en [`DESIGN.md`](DESIGN.md), el contexto de producto en
[`PRODUCT.md`](PRODUCT.md) y la investigación del sistema visual en
[`DESIGN-SYSTEM-RESEARCH.md`](DESIGN-SYSTEM-RESEARCH.md).

## Estado actual

- navegación móvil siempre visible, sin burger: tabs horizontales y barra inferior de
  cinco acciones;
- header sólido y legible, con estado inicial y estado compacto al hacer scroll;
- CTAs en cápsula y radios jerárquicos para inputs, paneles y bloques visuales;
- 24 páginas de servicio y dos salones activos;
- modo claro, oscuro y sistema con persistencia;
- reseñas verificadas con fecha visible y carrusel accesible;
- formulario real sobre Cloudflare Worker, con validación doble, consentimiento,
  Turnstile, rate limiting y entrega mediante binding de correo;
- demo bloqueada mediante meta robots, `X-Robots-Tag` y `robots.txt`.

Pfungstadt no se presenta como salón activo de Hair Lounge: la dirección opera
actualmente bajo otra marca y titular. Ver
[`docs/pfungstadt-verification.md`](docs/pfungstadt-verification.md).

## Tecnología

| Área | Elección |
| --- | --- |
| Framework | Astro 5, output estático |
| Lenguaje | TypeScript |
| UI | CSS propio basado en design tokens |
| Fuentes | Playfair Display Variable + Manrope, autoalojadas |
| Runtime | Cloudflare Worker + Static Assets |
| Formulario | Worker API, Turnstile, Rate Limiting y Email Service |
| Pruebas | Playwright con reportes JSON y JUnit |

## Desarrollo

```bash
npm ci
npm run dev
```

Para probar el Worker completo localmente:

```bash
npm run dev:worker
```

## Build y pruebas

```bash
npm run build
npm run test:local
npm run test:production
```

Los reportes auditables se escriben en `audits/playwright/` e incluyen fecha, entorno,
base URL y estados de cada prueba. Las capturas finales se generan con:

```bash
TEST_ENV=production \
BASE_URL=https://friseur-citak-demo.geraldhe21.workers.dev \
npm run test:visual
```

## Despliegue

Cada push a `main` despliega solo mediante `.github/workflows/deploy.yml`. También se
puede lanzar a mano desde la pestaña **Actions** → *Deploy Worker* → **Run workflow**.

El destino debe seguir siendo el Worker existente. Para desplegar en local:

```bash
npm run deploy
```

Requiere `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` en el entorno. El detalle de
dónde viven las credenciales, qué permisos lleva el token y cómo administrar Cloudflare
está en [`AGENTS.md`](AGENTS.md), que es también el fichero de instrucciones para
agentes de IA.

El formulario no simula un envío cuando faltan credenciales. La configuración requerida
está en [`docs/contact-form-setup.md`](docs/contact-form-setup.md).

## Rutas

```text
/                         Inicio editorial
/leistungen/              Índice de 24 servicios
/leistungen/<slug>/       Páginas de servicio con tres composiciones
/salons/                   Selector de los dos salones activos
/salons/mannheim/          Mannheim
/salons/weinheim/          Weinheim
/ueber-uns/                Historia y equipo
/termin/                   Hub de reservas
/kontakt/                  Formulario, teléfonos, mapas y alternativas
/impressum/
/datenschutz/
/404/
```

## Documentación de verificación

- [`docs/service-audit.md`](docs/service-audit.md)
- [`docs/pfungstadt-verification.md`](docs/pfungstadt-verification.md)
- [`docs/contact-form-setup.md`](docs/contact-form-setup.md)
- [`docs/indexing.md`](docs/indexing.md)
- [`docs/design-skills.md`](docs/design-skills.md)

Los datos proceden de fuentes públicas del negocio y de perfiles públicos contrastados.
No se añaden precios ni disponibilidad sin una fuente verificable.

## Pendiente de confirmación del propietario

- dirección de recepción y remitente verificado del formulario;
- confirmación formal de la desvinculación de Pfungstadt;
- USt-IdNr. correcta;
- si Ombré, Painting Highlights o Granny Hair deben ofrecerse actualmente;
- retratos que faltan de algunos miembros del equipo.
