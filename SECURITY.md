# Security

This repository is a static GitHub Pages site.

## Hardening

- HTTPS-only deployment on GitHub Pages.
- No server-side code, database, forms, authentication, cookies, analytics, ad scripts, or third-party JavaScript.
- A restrictive Content Security Policy is embedded in every HTML document.
- External links use HTTPS and `rel="noopener noreferrer"` when opened in a new tab.
- CSP disables network connections from JavaScript (`connect-src 'none'`), objects, forms and frames.
- System fonts are used, avoiding remote font supply-chain dependencies.

## Platform note

GitHub Pages does not provide repository-level control over arbitrary response headers. The CSP is therefore embedded as an HTML meta policy. GitHub's platform provides HTTPS and standard static-hosting protections.

## Legacy assets

The original Altervista server intermittently returns 502 responses. The live HTML pages were reconstructed from indexed copies and official institutional sources. Where a binary file could not be copied yet (notably the original CV PDF and the legacy 13 MAFIRM slide bitmaps), the site either links the HTTPS legacy file explicitly or replaces the presentation layer with accessible static HTML and points to the current official source.
