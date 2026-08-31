# Security

This repository hosts a static GitHub Pages website.

## Current security properties

- Production is served over HTTPS by GitHub Pages.
- The website contains no server-side application code, database, authentication system, or user-submitted forms.
- Internal files formerly referenced through the insecure Altervista HTTP origin were recovered where available and are now served locally over HTTPS.
- Links opened with `target="_blank"` include `rel="noopener noreferrer"`.
- A permanent code-audit workflow flags insecure `http://` references, broken local targets, empty/placeholder links, unsafe `_blank` links, missing image alternative text, duplicate IDs, and missing basic metadata.
- A post-deployment smoke test verifies the primary live routes over HTTPS.

## Third-party scripts

The current main pages retain the Google Analytics tag that was present in the recovered original site (`G-JD45S6XTX1`). Obsolete Universal Analytics snippets found in legacy archive pages were removed during the code audit.

## Static-hosting limitation

GitHub Pages does not expose repository-level configuration of arbitrary HTTP response headers such as a custom Content-Security-Policy, Permissions-Policy, or HSTS policy. Adding a reverse proxy/CDN would make stricter custom response headers possible, but it would also add infrastructure and complexity.

## Legacy fidelity

The main objective of the migration is to preserve the original website's HTML structure, inline styling, navigation, native `<details>` interactions, image assets, documents, and MAFIRM slideshow while removing obsolete or insecure runtime dependencies on the old Altervista origin.
