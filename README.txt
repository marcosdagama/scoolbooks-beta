ScoolBooks — Static site bundle
================================

This folder contains a single self-contained file:

  index.html

It is fully standalone — all CSS, JavaScript, fonts and image references
are inlined or use absolute URLs. No build step, no dependencies.

To publish:
  • Upload index.html to any web host (Netlify drop, Vercel, S3,
    GitHub Pages, cPanel, IONOS, your existing WordPress host's
    /public_html, etc.) and point your domain at it.
  • Or open it directly in a browser to preview locally.

Bilingual EN / ES — the toggle in the top-right and footer switches
all copy; the choice is remembered in the visitor's browser.

The quote form currently submits to a mock success state. To wire it
to a real inbox, replace the setTimeout in the submit() handler with
a POST to your form endpoint (Formspree, Netlify Forms, a custom
serverless function, or your WordPress contact backend).

Contact details, services, pricing and FYI checklist all live near
the top of the inlined script and can be edited directly in the
HTML file with any text editor.
