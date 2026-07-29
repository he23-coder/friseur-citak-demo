# Reinstalación de skills de diseño

Las skills usadas durante la fase de diseño no forman parte de la aplicación y por eso
no se versionan en `.agents/skills/`. Las decisiones resultantes sí permanecen
documentadas en `DESIGN.md`, `PRODUCT.md` y `DESIGN-SYSTEM-RESEARCH.md`.

Skills históricas:

- Impeccable
- Taste Skill / design-taste-frontend
- Redesign Existing Projects
- High-End Visual Design
- UI UX Pro Max

## Procedimiento

1. Abrir el gestor o marketplace de skills del entorno de agente utilizado.
2. Buscar cada skill por su nombre exacto y comprobar autor, versión y licencia.
3. Instalarla en el directorio global/personal de skills del agente, fuera de este
   repositorio.
4. Reiniciar la sesión del agente y verificar que la skill figura como disponible.
5. No copiar paquetes completos, scripts, cachés ni dependencias Python a
   `.agents/skills/` dentro del proyecto.

Las rutas y comandos concretos dependen del host del agente; se debe usar su instalador
oficial en lugar de reconstruir manualmente los paquetes. Si se vuelve a realizar una
auditoría, debe conservarse la dirección “Salon Editorial” descrita en `DESIGN.md`.
