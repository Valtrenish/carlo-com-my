

## Implementation Plan

### 1. Step 4 — Loan Period Dropdown (0–9 years)
Replace the text `<Input>` for Loan Period with a `<select>` dropdown with options 0 through 9.

**File:** `src/pages/ApplyLoan.tsx` (lines 350–361)

### 2. Step 8 — WhatsApp Button + Help Message + Save Draft Email

**Add `MessageCircle` icon import** (line 6)

**Replace the step 8 (case 7) section** (lines 557–594):
- Keep the declaration text and checkbox as-is
- **Above the buttons**, add the WhatsApp help message:
  > "Need help with your documents? Chat Directly with Carlo Loan Agent on WhatsApp for a seamless submission process and real-time updates on your loan status."
  with a WhatsApp link to `https://wa.me/601126817101`
- **Replace "Submit Application" button** with a WhatsApp button that links to `https://wa.me/601126817101` (green branded, opens in new tab). Remove the old `onNext={goNext}` submit behavior — the WhatsApp link IS the submission action.
- Keep Back and Save Draft buttons

### 3. Save Draft on Step 8 — Send Email

**Update `saveDraft` function** (lines 190–193):
- When `currentStep === 7` (step 8), in addition to saving to localStorage, construct a `mailto:sales@carlo.com.my` link with subject "Loan Application Draft" and body containing all form data fields, then open it via `window.open()`.
- On other steps, save draft works as before (localStorage only).

### Summary of changes
- **Single file:** `src/pages/ApplyLoan.tsx`
- Add `MessageCircle` import from lucide-react
- Swap Loan Period input → select dropdown (0–9)
- Step 8: add WhatsApp help message above buttons, replace Submit Application with WhatsApp button
- `saveDraft`: when on step 8, also open mailto to `sales@carlo.com.my` with form data

