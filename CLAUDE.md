# CLAUDE.md

Las instrucciones de este repositorio están en [`AGENTS.md`](AGENTS.md), compartidas con
los demás agentes (Codex / GPT, Kimi, Cursor, Gemini CLI) para que no se dupliquen ni se
contradigan.

@AGENTS.md

**Resumen para no leerlo entero:** para desplegar, mergea a `main` y el workflow
`.github/workflows/deploy.yml` publica en el Worker `friseur-citak-demo`. Las
credenciales de Cloudflare están en los secrets de GitHub Actions, nunca en el repo.
