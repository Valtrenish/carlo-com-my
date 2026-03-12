

## Plan: Remove Desktop WhatsApp Button from Header

Remove only the desktop WhatsApp CTA button (top-right of header nav bar) while keeping the mobile menu WhatsApp button intact.

### Change in `src/components/Header.tsx`
- **Remove lines 67–77**: The `<div className="hidden md:flex ...">` block containing the desktop WhatsApp button.
- **Keep lines 106–113**: The mobile menu WhatsApp button remains unchanged.

Single file change, minimal edit.

