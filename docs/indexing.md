# Control de indexación

La URL de venta está bloqueada deliberadamente:

- cada documento HTML contiene
  `<meta name="robots" content="noindex, nofollow, noarchive">`;
- el Worker añade `X-Robots-Tag: noindex, nofollow, noarchive` a los assets servidos;
- `public/robots.txt` contiene únicamente:

```text
User-agent: *
Disallow: /
```

El sitemap puede seguir generándose como artefacto técnico para la futura migración,
pero no se anuncia en `robots.txt` ni debe enviarse a ningún buscador mientras la demo
permanezca en el subdominio del Worker.

## Activar indexación al migrar al dominio definitivo

1. Confirmar dominio canónico, propiedad del negocio y datos legales.
2. Sustituir el meta global en `src/layouts/Base.astro` por
   `index, follow` o retirarlo.
3. Retirar el `X-Robots-Tag` de `src/worker.ts`.
4. Cambiar `public/robots.txt` a `Allow: /` y añadir la URL absoluta del sitemap.
5. Actualizar `site` en `astro.config.mjs` y las variables de hostname.
6. Regenerar, desplegar y comprobar canonical, schema, `robots.txt` y sitemap.
7. Solo entonces enviar el sitemap mediante la propiedad verificada de Search Console.
