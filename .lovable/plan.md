

## Plan: Save Draft + Mandatory Field Validation

### 1. Add centralized `formData` state
Add a single state object tracking all form field values across steps:
```
purpose, refinance, downpayment, loanPeriod, fullName, nricNumber, mobileNumber, emailAddress, city, state, occupation, serviceLength, employer, declarationAgreed
```
Wire each input's `value`/`onChange` to this state.

### 2. Save Draft via localStorage
- **Save**: On "Save Draft" click, serialize `formData` + `currentStep` to `localStorage` under key `carlo-loan-draft`
- **Load**: On component mount, check for saved draft and restore `formData` + `currentStep`
- **Clear**: On successful submission, remove the draft
- Show a toast notification on save ("Draft saved successfully")

### 3. Mandatory field validation per step
Define required fields per step. On "Next" click, validate before proceeding:

| Step | Required Fields |
|------|----------------|
| 0 | None (info page) |
| 1 | `purpose` |
| 2 | None (info page) |
| 3 | `downpayment`, `loanPeriod` |
| 4 | `fullName`, `nricNumber`, `mobileNumber`, `emailAddress` |
| 5 | `city`, `state` |
| 6 | `occupation`, `serviceLength`, `employer` |
| 7 | `declarationAgreed` (checkbox) |

- Show inline red border on empty required fields + error text below
- Track a `validationErrors` state object, cleared when user fills the field
- `goNext` checks validation before advancing

### 4. Files changed
- **`src/pages/ApplyLoan.tsx`** — All changes in this single file: add `formData` state, `validationErrors` state, localStorage save/load logic, wire inputs to state, validation logic in `goNext`, pass `onSaveDraft` to `StepButtons`

