# Roberto Marfè — personal academic website

Static, security-hardened reconstruction of the former `robertomarfe.altervista.org` academic website, deployed with GitHub Pages at `https://robertomarfe.github.io/`.

## Preserved routes

- `/` — home and contact details
- `/research01.html` — publications
- `/research02.html` — working papers
- `/teaching.html` — teaching
- `/master.html` — MAFIRM
- `/teaching/teaching.html` — historical teaching and academic service archive
- `/APConference/apconference.htm` — 2018 Asset Pricing Conference archive
- `/cv/` — HTML CV mirror with secure link to the legacy PDF

## Security migration

The former site was served from an HTTP origin. This version is a static GitHub Pages site served over HTTPS and removes the main source of browser “Not secure” warnings. It contains no PHP, backend, database, forms, tracking scripts or third-party JavaScript. See `SECURITY.md`.

The production HTML also uses a restrictive Content Security Policy and avoids runtime HTTP dependencies or Altervista-hosted assets.

## Deployment

Production source is the public repository `robertomarfe/robertomarfe.github.io`, branch `main`, published by GitHub Pages.

A post-deployment GitHub Actions smoke test checks the primary public routes over HTTPS and fails if a route is unavailable or an `http://` resource/link appears in the rendered HTML.

## Local preview

From this directory:

```bash
python -m http.server 8000
```

then visit `http://localhost:8000/` locally. Localhost HTTP is only for local preview; production is HTTPS.

## Reconstruction provenance

The legacy Altervista origin was intermittent during migration. Textual pages were reconstructed from indexed copies of the old site and checked against current institutional sources. Stable HTTPS institutional or publisher links replace insecure or obsolete external links whenever available.

## Remaining binary-asset migration

Two original binary groups could not be retrieved from the intermittently unavailable Altervista host during reconstruction:

1. `cv/ROBERTO_MARFE_CV.pdf` — linked explicitly over HTTPS from the CV mirror.
2. The 13 MAFIRM carousel bitmap files — the 13-slide interaction is preserved using accessible HTML slides and current MAFIRM links.

If those legacy binaries are recovered, they can be copied into the repository and linked locally without changing the site architecture.
