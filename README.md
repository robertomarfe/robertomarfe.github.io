# Roberto Marfè — personal academic website

Static, security-hardened reconstruction of the former `robertomarfe.altervista.org` academic website, designed for deployment at `https://robertomarfe.github.io/`.

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

The former site was served from an HTTP origin. This version is intentionally a static GitHub Pages site and removes the main source of browser “Not secure” warnings: the primary origin is HTTPS. It contains no PHP, backend, database, forms, tracking scripts or third-party JavaScript. See `SECURITY.md`.

## Deployment

Create the public GitHub repository **`robertomarfe.github.io`** under the `robertomarfe` account and upload the contents of this directory to its `main` branch. GitHub Pages will serve the special user-site repository at `https://robertomarfe.github.io/`.

If the account uses restricted GitHub App repository access, authorize the repository for the ChatGPT GitHub connection after creating it.

## Local preview

From this directory:

```bash
python -m http.server 8000
```

then visit `http://localhost:8000/` locally. (Localhost HTTP is only for local preview; production is HTTPS.)

## Reconstruction provenance

The legacy Altervista origin is currently intermittent. Textual pages were reconstructed from search-indexed copies of the live site and checked against current Collegio Carlo Alberto pages. Stable HTTPS institutional or publisher links replace insecure or obsolete external links whenever available.

## Remaining binary-asset migration

Two original binary groups could not be retrieved from the intermittently unavailable Altervista host during reconstruction:

1. `cv/ROBERTO_MARFE_CV.pdf` — linked explicitly over HTTPS from the CV mirror.
2. The 13 MAFIRM carousel bitmap files — the 13-slide interaction is preserved using accessible HTML slides and the live official MAFIRM pages.

When those binaries become reachable, copy them into the repository and switch the links to local paths; no architecture change is required.
