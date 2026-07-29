# Lighthouse production audit

The four final reports must be generated only after the current `main` commit has
been deployed to the existing Worker:

- `mobile-light.json`
- `mobile-dark.json`
- `desktop-light.json`
- `desktop-dark.json`

Required target:

`https://friseur-citak-demo.geraldhe21.workers.dev`

The previous files in this directory were removed on 29 July 2026 because their
`requestedUrl`, `mainDocumentUrl`, and `finalUrl` pointed to localhost. Localhost
reports must not be presented as production results.

After deployment, run the four production audits and verify all three URL fields
before committing the generated JSON files.
