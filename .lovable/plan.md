

## Plan: Replace text logo with Carlo image in header and footer

Replace the text-based "Carlo" logo (`<span>Car</span><span>lo</span>`) with the uploaded Carlo logo image in both the Header and Footer components.

### Changes

1. **Copy uploaded image** to `src/assets/carlo-logo.png`

2. **`src/components/Header.tsx`** — Replace the text logo `<span>` elements with an `<img>` tag importing the logo from `@/assets/carlo-logo.png`. Height ~32px.

3. **`src/components/Footer.tsx`** — Same replacement in the footer brand section.

