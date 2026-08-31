# Roberto Marfè — personal academic website

Personal academic website of Roberto Marfè, published at `https://robertomarfe.github.io/` with GitHub Pages.

The production site is a faithful static migration of the former `robertomarfe.altervista.org` website. During migration, the original HTML pages and referenced assets were recovered directly from the legacy server and copied into this repository. The original visual design and native interactions are preserved; obsolete internal HTTP Altervista URLs were replaced by local GitHub Pages paths where the corresponding files were recovered.

## Main routes

- `/` — home and contact details
- `/research01.html` — publications
- `/research02.html` — working papers
- `/teaching.html` — current teaching
- `/master.html` — MAFIRM
- `/events.html` — events
- `/professional.html` — professional engagement
- `/Mafirm/slideshow.html` — MAFIRM presentation
- `/teaching/teaching.html` — historical teaching and academic-service archive
- `/APConference/apconference.htm` — Asset Pricing Conference archive
- `/cv/ROBERTO_MARFE_CV.pdf` — curriculum vitae

## Assets recovered from the legacy site

The repository includes the original homepage portrait, CV PDF, MAFIRM slideshow and its 13 slides, MAFIRM audio, and the internally hosted research PDFs referenced by the original pages.

## Deployment and quality control

The site is served statically by GitHub Pages over HTTPS from the `main` branch.

Two permanent GitHub Actions checks are maintained:

- `Full site code audit` checks internal targets, insecure HTTP references, empty or placeholder links, image alternative text, duplicate IDs, viewport metadata, favicon metadata, and safe `_blank` links.
- `Site smoke test` verifies the primary public routes over HTTPS after a Pages deployment.

## Favicon

`/favicon.svg` is a lightweight RM monogram using the website's original `#003366` blue.

## Local preview

From the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`. Production is served over HTTPS.
