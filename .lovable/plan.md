

## Plan: Replace GA4 with GTM (GTM-WTHK4JS)

Remove the existing Google Analytics (GA4) script from `index.html` and replace it with the standard Google Tag Manager snippet using container ID **GTM-WTHK4JS**.

### Changes

**`index.html`**
- Remove the GA4 `gtag.js` script and config block (lines 6-13)
- Add GTM `<script>` snippet in `<head>`
- Add GTM `<noscript>` iframe immediately after `<body>`

This covers both pages (`/carloancalculator` and `/loan-check`) since they share the same `index.html` shell. All existing GTM-compatible button IDs remain intact for tag configuration in the GTM dashboard.

