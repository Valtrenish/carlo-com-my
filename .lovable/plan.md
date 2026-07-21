## SEO Compliance Audit

### Meta descriptions — all pages ✅
Every route has a unique meta description via the `SEO` component (react-helmet-async):

| Route | Title | Description |
|---|---|---|
| `/` (Import) | Carlo - Import Your Dream Car From Japan | ✅ Set |
| `/carloancalculator` | Carlo - Easy Car Loan Calculator Malaysia | ✅ Set |
| `/commercial` | Carlo Commercial - Follow Us on Instagram | ✅ Set |
| `/loan-check` (ApplyLoan) | (set) | ✅ Set |
| `*` (NotFound) | Page Not Found - Carlo | ✅ Set + `noindex` |

Static fallback in `index.html` is also present for social-preview crawlers.

### Issues found

1. **Canonical domain mismatch.** `SEO.tsx` and `sitemap.xml` and `robots.txt` all use `https://carlo-com-my.lovable.app`, but the real custom domain is **https://carlo.com.my**. Crawlers will attribute pages to the wrong host and split ranking signals.
2. **Sitemap is incomplete.** It only lists `/carloancalculator` and `/loan-check`. Missing `/` (Import — homepage) and `/commercial`. Homepage should be priority 1.0.
3. **Sitemap missing `<lastmod>`** on all entries.
4. **`robots.txt` verbose but redundant.** Individual `User-agent` blocks for Googlebot/Bingbot/Twitterbot/facebookexternalhit each just say `Allow: /` — same as the wildcard. Can be simplified.
5. **404 page canonical.** NotFound sends a canonical of the bad path — with `noindex` this is harmless but cleaner to omit.

### Changes to make

**`src/components/SEO.tsx`**
- `SITE_URL` → `https://carlo.com.my`

**`public/sitemap.xml`** — replace with all 4 indexable routes:
```xml
<url><loc>https://carlo.com.my/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
<url><loc>https://carlo.com.my/carloancalculator</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
<url><loc>https://carlo.com.my/commercial</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
<url><loc>https://carlo.com.my/loan-check</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
```
Add today's `<lastmod>` to each.

**`public/robots.txt`** — simplify:
```
User-agent: *
Allow: /

Sitemap: https://carlo.com.my/sitemap.xml
```

**`index.html`** — update the static `og:url` reference to point at `https://carlo.com.my/` (currently absent — add `<meta property="og:url">` and `<link rel="canonical" href="https://carlo.com.my/">` for the crawler that only sees static HTML).

### Not changing
- Per-page titles/descriptions (all good).
- The `SEO` component structure (already correct pattern).
- GTM setup.

### After merge
Trigger a fresh SEO scan from the SEO & AI search tab to re-verify.
