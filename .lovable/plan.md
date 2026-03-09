

## Plan: Redirect "Find Cars Within Budget" to WhatsApp

A single change in `src/components/LoanCalculator.tsx`: update the "Find Cars Within Budget" button's `Link` to an `<a>` tag pointing to `https://wa.me/601126817101`.

### Change
- **File:** `src/components/LoanCalculator.tsx` (lines ~101-105)
- Replace the `<Link to="/loan-check">` with `<a href="https://wa.me/601126817101" target="_blank" rel="noopener noreferrer">`
- Keep the same styling and button ID

