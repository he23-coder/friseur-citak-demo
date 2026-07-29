# Configuración del formulario Cloudflare

El formulario usa `POST /api/contact`; no utiliza `mailto:` en el submit. El Worker
valida y sanitiza los campos, exige consentimiento, verifica Turnstile en servidor,
limita a cinco intentos por minuto y confirma éxito únicamente después de que el
binding de correo acepte el mensaje.

Sin credenciales completas el endpoint devuelve `503 not_configured` y la interfaz
mantiene teléfono y reserva online como alternativas.

## Configuración necesaria

1. Crear un widget de Cloudflare Turnstile para
   `friseur-citak-demo.geraldhe21.workers.dev`.
2. Configurar un remitente verificado y un binding de Email Service en la cuenta que
   contiene el Worker.
3. Mantener el binding ya declarado en `wrangler.toml`:

```toml
[[send_email]]
name = "EMAIL"
```

4. Crear los secretos, sin guardarlos en Git:

```bash
npx wrangler secret put TURNSTILE_SITE_KEY
npx wrangler secret put TURNSTILE_SECRET
npx wrangler secret put CONTACT_TO_EMAIL
npx wrangler secret put CONTACT_FROM_EMAIL
npx wrangler secret put CONTACT_EXPECTED_HOSTNAME
```

Para el último valor se utiliza:

```text
friseur-citak-demo.geraldhe21.workers.dev
```

`CONTACT_TO_EMAIL` y `CONTACT_FROM_EMAIL` necesitan confirmación del propietario y de
la cuenta de Cloudflare. Tras configurarlos, volver a desplegar y ejecutar
`npm run test:production`.

Para desarrollo local se pueden colocar valores de prueba en `.dev.vars` (ignorado por
Git) y usar las claves de prueba oficiales de Turnstile. Nunca se deben reutilizar
claves de prueba en producción.
