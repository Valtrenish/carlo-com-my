
CREATE TABLE public.loan_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT,
  nric_number TEXT,
  mobile_number TEXT,
  email_address TEXT,
  city TEXT,
  state TEXT,
  purpose TEXT,
  refinance TEXT,
  downpayment TEXT,
  loan_period TEXT,
  occupation TEXT,
  service_length TEXT,
  employer TEXT,
  declaration_agreed BOOLEAN DEFAULT false,
  summary TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT ALL ON public.loan_applications TO service_role;
ALTER TABLE public.loan_applications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Service role only" ON public.loan_applications FOR ALL USING (false) WITH CHECK (false);
