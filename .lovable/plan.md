

## Plan: Remove Steps 8–13 from Loan Application Form

**Understanding:** Steps 8–13 (1-indexed) are: "Time For A Selfie", "Selfie Verification", "NRIC", "Driving License", "Latest Payslip", and "Latest Bank Statement". These are all the selfie and document upload steps. The Declaration step (step 14) remains as the final step.

### Changes to `src/pages/ApplyLoan.tsx`

1. **Update `TOTAL_STEPS`** from 14 to 8
2. **Update `STEP_TITLES`** — Remove entries for the 6 deleted steps (indices 7–12)
3. **Remove switch cases 7–12** — Delete the selfie and document upload step renderers
4. **Renumber case 13 (Declaration) to case 7** — Make it the new final step with "Submit Application" button
5. **Remove unused imports** — `Upload`, `Camera`, `FileText`, `CreditCard` and the `DocumentUploadStep` component (no longer needed)

### Result
- 8-step form: Read This → Application For → First Things First → Customize Car → About Yourself → Location → Work → Declaration
- Progress bar and step counter will auto-adjust since they use `TOTAL_STEPS`

