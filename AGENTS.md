# AGENTS.md

Instrucciones para agentes de IA que trabajen en este repositorio: Claude Code,
Codex / GPT, Kimi, Cursor, Gemini CLI y cualquier otro que lea este fichero.

Si buscas **cómo desplegar o administrar Cloudflare**, está todo aquí. No hace falta
preguntar al propietario ni buscar en otro sitio.

---

## 1. Cómo se despliega

El destino **siempre** es el Worker que ya existe. Nunca crees un Worker nuevo ni
cambies el `name` de `wrangler.toml`.

| Proyecto | Worker | URL de producción |
| --- | --- | --- |
| friseur-citak-demo | `friseur-citak-demo` | https://friseur-citak-demo.geraldhe21.workers.dev |

Hay dos formas, y **la primera es la preferida**:

### a) Automático: push a `main`

`.github/workflows/deploy.yml` se dispara en cada push a `main` y ejecuta
`npm run deploy` (que es `astro build && wrangler deploy`). No hay que hacer nada más:
mergear a `main` publica.

También se puede lanzar a mano sin tocar código, desde la pestaña **Actions** del repo
→ *Deploy Worker* → **Run workflow** (`workflow_dispatch`).

### b) Manual desde una sesión con credenciales

Solo si el workflow no sirve para el caso (depurar, probar un deploy suelto):

```bash
npm ci
npm run deploy
```

Requiere `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` en el entorno. Si
`npx wrangler whoami` dice *"You are not authenticated"*, no están: no intentes
`wrangler login` (necesita navegador y no funciona en un contenedor headless).
Ve a la sección 2.

---

## 2. Dónde están las credenciales

**Nunca hay credenciales en este repositorio.** No las busques en el código, no las
generes, no las inventes. Viven en tres sitios según para qué:

| Para qué | Dónde vive | Nombres |
| --- | --- | --- |
| Deploy automático en CI | GitHub → Settings → Secrets and variables → **Actions** | `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` |
| Sesiones interactivas de agentes | Variables del *cloud environment* del agente | los mismos dos nombres |
| Secretos del Worker en runtime | El propio Worker, vía `wrangler secret put` | ver sección 4 |

Los secrets de GitHub Actions no son legibles por un agente — eso es intencionado. Si
necesitas desplegar y no tienes credenciales en el entorno, **usa el workflow** (vía a),
no pidas el token.

### Permisos que lleva el API token

Token custom de Cloudflare, con ámbito *All accounts* (cubre todos los Workers de la
cuenta, presentes y futuros) y *All zones*:

| Tipo | Permiso | Nivel |
| --- | --- | --- |
| Account | Workers Scripts | Edit |
| Account | Workers KV Storage | Edit |
| Account | Workers R2 Storage | Edit |
| Account | D1 | Edit |
| Account | Workers Tail | Read |
| Account | Account Settings | Read |
| Account | Email Routing Addresses | Read |
| Zone | Workers Routes | Edit |

No se usa la **Global API Key**: no se puede acotar, da control total de la cuenta
incluida facturación, y filtrarla obligaría a rotar la credencial de toda la cuenta.
Si hace falta más alcance, se amplía el token custom.

---

## 3. Reglas al manejar credenciales

- **No commitees secretos.** `.env`, `.env.*` y `.dev.vars*` están en `.gitignore`.
  Mantenlos ahí.
- **No pegues un token** en código, comentarios, mensajes de commit, issues, PRs ni
  ficheros de documentación — este incluido.
- **No pidas al propietario que pegue un token en un chat** si el workflow puede hacer
  el trabajo. Un token en un transcript hay que rotarlo después.
- **No desactives la verificación TLS** ni toques `HTTPS_PROXY` para sortear un fallo de
  red. Si el proxy bloquea algo, dilo y para.

---

## 4. Secretos del Worker en runtime

Independientes del deploy y persistentes en el Worker entre despliegues. Si faltan, el
sitio se publica bien pero el formulario de contacto no envía:

```bash
npx wrangler secret put TURNSTILE_SITE_KEY
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put CONTACT_TO_EMAIL
npx wrangler secret put CONTACT_FROM_EMAIL
```

El binding `send_email` de `wrangler.toml` exige además que la dirección de destino esté
verificada en Cloudflare Email Routing. Detalle en
[`docs/contact-form-setup.md`](docs/contact-form-setup.md).

---

## 5. Verificar que un deploy salió bien

El workflow ya comprueba que la home responde 200. Para verificar de verdad:

```bash
npm run test:production
```

Truco rápido para saber si lo que está online es el commit actual: compara el hash del
CSS servido con el del build local. Si difieren, lo publicado es más antiguo.

```bash
curl -s https://friseur-citak-demo.geraldhe21.workers.dev/ | grep -oE '/_astro/[a-zA-Z0-9._-]+\.css'
ls dist/_astro/*.css
```

---

## 6. Notas de este proyecto

- Astro 5 estático + Cloudflare Worker con Static Assets. `src/worker.ts` corre primero
  (`run_worker_first`) y sirve la API del formulario.
- La demo está deliberadamente **fuera de los índices**: meta robots, `X-Robots-Tag` y
  `robots.txt`. No lo "arregles".
- Pfungstadt no es un salón activo. No lo añadas. Ver
  [`docs/pfungstadt-verification.md`](docs/pfungstadt-verification.md).
- No inventes precios ni disponibilidad sin fuente verificable.
- Contexto de diseño en [`DESIGN.md`](DESIGN.md), producto en [`PRODUCT.md`](PRODUCT.md).
