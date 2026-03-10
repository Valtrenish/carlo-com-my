

## Plan: Change main page URL to `/carloancalculator`

Move the landing page from `/` to `/carloancalculator`. The root `/` will redirect to `/carloancalculator`.

### Changes

1. **`src/App.tsx`** — Update routing: add `/carloancalculator` route pointing to `Index`, add a redirect from `/` to `/carloancalculator` using `Navigate`

2. **`src/components/Header.tsx`** — Update Home nav link href from `/` to `/carloancalculator`, update logo link

3. **`src/components/Footer.tsx`** — Update Home link and logo link from `/` to `/carloancalculator`

4. **`src/pages/Index.tsx`** — Update canonical URL to `/carloancalculator`

5. **`src/pages/NotFound.tsx`** — Update "Return to Home" link to `/carloancalculator`

6. **`public/sitemap.xml`** — Update main page URL to `/carloancalculator`

