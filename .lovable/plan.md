

## Plan: Add 3 New Sections to Landing Page

### Section Order (top to bottom)
Japan Import Hero → Loan Calculator → How It Works → Testimonials → Instagram Gallery → FAQ

### 1. Create `src/components/JapanImportHero.tsx`

**Hero block** — Gradient background (matching existing `gradient-hero` style), headline "Import Your Dream Car From Japan", subheading about Carlo's Japan import service. Two CTA buttons:
- "Calculate Loan" → internal link to `/carloancalculator#calculator` (scrolls to calculator)
- "WhatsApp Advisor" → `https://wa.me/601126817101` (new tab, green branded)

**"Why Choose Carlo" row** — 4-column grid with icons (from lucide-react): `Gavel` (Direct Auction Access), `BadgeDollarSign` (Transparent Pricing), `Zap` (Fast Loan Approval), `ShieldCheck` (Trusted Import Specialist). Blue/orange themed icon circles.

**"Browse Thousands of Cars From Japan" cards** — 3 cards linking (new tab) to:
- Carsensor.net
- Goo-Net Exchange
- JPAUC One Price

Each card: site name, brief description, external link icon.

**Loan Summary box** — Below cards: "From RM 1,250/month" highlight, summary table (Loan: RM90,000, Interest: RM8,500, Total: RM98,500), "Apply via WhatsApp" button → `https://wa.me/601126817101`.

**Testimonial** — Single quote card: "Very smooth import process..." — Ahmad, Kuala Lumpur.

### 2. Create `src/components/InstagramGallery.tsx`

Section title "Carlo Commercial" with subtitle "Follow Us on Instagram". 3×2 grid of placeholder thumbnails (car/import themed, using gradient placeholders with play/camera overlay icons). Each thumbnail clickable → opens `https://www.instagram.com/carlomalaysia/` in new tab. "Follow Us on Instagram" button below the grid.

### 3. Update `src/pages/Index.tsx`

Add imports for `JapanImportHero` and `InstagramGallery`. Insert them in order:
```
<JapanImportHero />
<LoanCalculator />
<HowItWorks />
<Testimonials />
<InstagramGallery />
<FAQ />
```

### Design
- Consistent with existing brand: blue (`carlo-blue`), orange (`carlo-orange`), white
- All external links: `target="_blank" rel="noopener noreferrer"`
- Fully responsive using existing `container-carlo` and Tailwind grid breakpoints
- Existing header/footer unchanged

### Files Changed
- **New:** `src/components/JapanImportHero.tsx`
- **New:** `src/components/InstagramGallery.tsx`
- **Modified:** `src/pages/Index.tsx` (add 2 imports + 2 components)

