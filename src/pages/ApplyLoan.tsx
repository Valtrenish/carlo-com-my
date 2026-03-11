import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Shield, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const TOTAL_STEPS = 8;

const STEP_TITLES = [
  "Read This, It's Important",
  "What Is Your Application For?",
  "First Things First",
  "Choose & Customize Your Car",
  "Tell Us About Yourself",
  "Send Us Your Location",
  "What You Do For Work",
  "Declaration Of Disclosure",
];

const MandatoryNotice = () => (
  <div className="flex items-center gap-2 text-destructive mb-6" role="alert">
    <AlertCircle className="h-4 w-4" aria-hidden="true" />
    <span className="text-sm font-medium">You must fill mandatory fields</span>
  </div>
);

const StepButtons = ({
  onBack,
  onNext,
  showBack = true,
  showSaveDraft = true,
  nextLabel = "Next",
  stepProgress = 0,
}: {
  onBack?: () => void;
  onNext: () => void;
  showBack?: boolean;
  showSaveDraft?: boolean;
  nextLabel?: string;
  stepProgress?: number;
}) => (
  <nav className="flex flex-col sm:flex-row gap-3 mt-8" aria-label="Form navigation">
    {showBack && (
      <Button
        id={`btn-loan-back-${stepProgress}pct`}
        variant="outline"
        className="flex-1 border-border text-foreground hover:bg-muted"
        onClick={onBack}
      >
        Back
      </Button>
    )}
    {showSaveDraft && (
      <Button
        id={`btn-loan-save-draft-${stepProgress}pct`}
        variant="outline"
        className="flex-1 border-border text-foreground hover:bg-muted"
      >
        Save Draft
      </Button>
    )}
    <Button
      id={`btn-loan-next-${stepProgress}pct`}
      className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      onClick={onNext}
    >
      {nextLabel}
    </Button>
  </nav>
);

const DocumentUploadStep = ({
  title,
  description,
  icon: Icon,
  onBack,
  onNext,
  stepProgress = 0,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  onBack: () => void;
  onNext: () => void;
  stepProgress?: number;
}) => (
  <fieldset>
    <legend className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">{title}</legend>
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
        <Icon className="h-10 w-10 text-carlo-orange" aria-hidden="true" />
      </div>
      <p className="text-muted-foreground text-sm text-center mb-6">{description}</p>
    </div>
    <MandatoryNotice />
    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-secondary transition-colors" role="button" tabIndex={0} aria-label={`Upload ${title} document`}>
      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" aria-hidden="true" />
      <p className="text-sm text-muted-foreground">Click or drag file to upload</p>
      <p className="text-xs text-muted-foreground mt-1">JPG, PNG or PDF (max 5MB)</p>
    </div>
    <StepButtons onBack={onBack} onNext={onNext} stepProgress={stepProgress} />
  </fieldset>
);

const ApplyLoan = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const progressPercent = Math.round(((currentStep + 1) / TOTAL_STEPS) * 100);

  const goNext = () => {
    if (currentStep < TOTAL_STEPS - 1) setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <article>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Read This, It's Important
            </h1>
            <p className="text-center text-muted-foreground mb-8">
              To seamlessly complete your application, we need your time to collect all the required details! Thank you for helping us get your application ready.
            </p>
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-carlo-orange font-semibold mb-2">Quick And Easy</h3>
                <p className="text-muted-foreground text-sm">
                  Be ready with ALL required documents/details
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground text-sm">Sharing your info takes</p>
                  <p className="font-bold text-foreground">~5Mins</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">We process it like this:</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground text-sm">Loan Pre-Approval:</p>
                  <p className="font-bold text-foreground">2 working days</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Loan Processing Period:</p>
                  <p className="font-bold text-foreground">3 working days</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-whatsapp">
                <Shield className="h-5 w-5" aria-hidden="true" />
                <span className="text-sm font-medium">Your data is kept secure and confidential</span>
              </div>
            </div>
            <StepButtons onNext={goNext} showBack={false} stepProgress={progressPercent} />
          </article>
        );

      case 1:
        return (
          <fieldset>
            <legend className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              What Is Your Application For?
            </legend>
            <MandatoryNotice />
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-foreground">Refinance</Label>
                <RadioGroup className="mt-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="refinance-yes" />
                    <Label htmlFor="refinance-yes" className="text-sm">Yes</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="refinance-no" />
                    <Label htmlFor="refinance-no" className="text-sm">No</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label htmlFor="purpose" className="text-sm font-medium text-foreground">Purpose of Application *</Label>
                <select id="purpose" className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select purpose</option>
                  <option value="personal">Personal Use</option>
                  <option value="business">Business Use</option>
                  <option value="commercial">Commercial Use</option>
                </select>
              </div>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} showSaveDraft={false} stepProgress={progressPercent} />
          </fieldset>
        );

      case 2:
        return (
          <article>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              First Things First
            </h1>
            <h3 className="text-carlo-orange font-semibold mb-4">What We Need</h3>
            <div className="space-y-5">
              <div>
                <p className="font-bold text-foreground">
                  NRIC <span className="font-normal text-muted-foreground">(Clear Front & Back Copy)</span>
                </p>
                <p className="text-sm text-muted-foreground mt-1 border-b border-border pb-2">
                  Non-Malaysians will need to contact us directly
                </p>
              </div>
              <div>
                <p className="font-bold text-foreground">Driving License</p>
                <p className="text-sm text-muted-foreground mt-1 border-b border-border pb-2">
                  Non-Malaysians will need to contact us directly
                </p>
              </div>
              <div>
                <p className="font-bold text-foreground">Latest Payslip & Bank Statement</p>
                <p className="font-bold text-foreground text-sm mt-1">
                  3 Months <span className="font-normal text-muted-foreground">(Salaried Employee)</span>
                </p>
                <p className="font-bold text-foreground text-sm mt-1">
                  6 Months <span className="font-normal text-muted-foreground">(Self-employed, Commission Earners)</span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground border-b border-border pb-2">
                For 'Others', please contact our team for a personalized consultation.
              </p>
            </div>
            <div className="flex items-center gap-2 text-whatsapp mt-6">
              <Shield className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium italic">Your data is kept secure and confidential</span>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} stepProgress={progressPercent} />
          </article>
        );

      case 3:
        return (
          <fieldset>
            <legend className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Choose & Customize Your Car
            </legend>
            <p className="text-center text-muted-foreground mb-6">
              Tell us about your choice and if you want to make it unique
            </p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="downpayment" className="text-sm font-medium text-foreground">Downpayment (RM) *</Label>
                <Input id="downpayment" className="mt-1" placeholder="Enter Amount" type="number" />
              </div>
              <div>
                <Label htmlFor="loan-period" className="text-sm font-medium text-foreground">Loan Period (Years) *</Label>
                <Input id="loan-period" className="mt-1" placeholder="Enter Amount" type="number" />
              </div>
              <Button id={`btn-loan-update-amount-${progressPercent}pct`} className="bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-2">
                Update Amount
              </Button>
            </div>
            <div className="flex items-center gap-2 text-whatsapp mt-6">
              <Shield className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium italic">Your data is kept secure and confidential</span>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} stepProgress={progressPercent} />
          </fieldset>
        );

      case 4:
        return (
          <fieldset>
            <legend className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Tell Us About Yourself
            </legend>
            <p className="text-center text-muted-foreground mb-6">
              We need this information to easily reach you and process your application
            </p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name as per NRIC *</Label>
                <Input id="fullName" className="mt-1" placeholder="Enter Full Name" autoComplete="name" />
              </div>
              <div>
                <Label htmlFor="nricNumber" className="text-sm font-medium text-foreground">NRIC Number *</Label>
                <Input id="nricNumber" className="mt-1" placeholder="Enter NRIC Number" />
              </div>
              <div>
                <Label htmlFor="mobileNumber" className="text-sm font-medium text-foreground">Mobile Number *</Label>
                <Input id="mobileNumber" className="mt-1" placeholder="Enter Mobile Number" type="tel" autoComplete="tel" />
              </div>
              <div>
                <Label htmlFor="emailAddress" className="text-sm font-medium text-foreground">Email Address *</Label>
                <Input id="emailAddress" className="mt-1" type="email" placeholder="Enter Email Address" autoComplete="email" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-whatsapp mt-6">
              <Shield className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium italic">Your data is kept secure and confidential</span>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} stepProgress={progressPercent} />
          </fieldset>
        );

      case 5:
        return (
          <fieldset>
            <legend className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Send Us Your Location
            </legend>
            <MandatoryNotice />
            <div className="space-y-4">
              <div>
                <Label htmlFor="city" className="text-sm font-medium text-foreground">City *</Label>
                <Input id="city" className="mt-1" placeholder="e.g. Kuala Lumpur" autoComplete="address-level2" />
              </div>
              <div>
                <Label htmlFor="state" className="text-sm font-medium text-foreground">State *</Label>
                <select id="state" className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select state</option>
                  <option value="johor">Johor</option>
                  <option value="kedah">Kedah</option>
                  <option value="kelantan">Kelantan</option>
                  <option value="melaka">Melaka</option>
                  <option value="negeri-sembilan">Negeri Sembilan</option>
                  <option value="pahang">Pahang</option>
                  <option value="perak">Perak</option>
                  <option value="perlis">Perlis</option>
                  <option value="penang">Pulau Pinang</option>
                  <option value="sabah">Sabah</option>
                  <option value="sarawak">Sarawak</option>
                  <option value="selangor">Selangor</option>
                  <option value="terengganu">Terengganu</option>
                  <option value="kl">W.P. Kuala Lumpur</option>
                  <option value="putrajaya">W.P. Putrajaya</option>
                  <option value="labuan">W.P. Labuan</option>
                </select>
              </div>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} stepProgress={progressPercent} />
          </fieldset>
        );

      case 6:
        return (
          <fieldset>
            <legend className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              What You Do For Work
            </legend>
            <p className="text-center text-muted-foreground mb-6">
              The clearer it is, the higher the chances of your loan being approved
            </p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="occupation" className="text-sm font-bold text-foreground">Occupation <span className="text-destructive">*</span></Label>
                <select id="occupation" className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="private">Private</option>
                  <option value="government">Government</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div>
                <Label htmlFor="service-length" className="text-sm font-bold text-foreground">Length Of Service <span className="text-destructive">*</span></Label>
                <select id="service-length" className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="less-1">Less than 1 year</option>
                  <option value="1-3">1 - 3 years</option>
                  <option value="3-5">3 - 5 years</option>
                  <option value="5+">More than 5 years</option>
                </select>
                <p className="text-sm text-muted-foreground mt-1 italic">How long have you been working with your current employer.</p>
              </div>
              <div>
                <Label htmlFor="employer" className="text-sm font-bold text-foreground">Employer Name <span className="text-destructive">*</span></Label>
                <Input id="employer" className="mt-1" placeholder="Enter Employer Name" autoComplete="organization" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-whatsapp mt-6">
              <Shield className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium italic">Your data is kept secure and confidential</span>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} stepProgress={progressPercent} />
          </fieldset>
        );

      case 7:
        return (
          <fieldset>
            <legend className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">Time For A Selfie</legend>
            <div className="flex flex-col items-center justify-center py-4">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
                <Camera className="h-10 w-10 text-carlo-orange" aria-hidden="true" />
              </div>
            </div>

            <div className="bg-accent/30 border border-accent rounded-xl p-5 mb-6">
              <h3 className="text-base font-bold text-foreground mb-3">Quick Guide</h3>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Take your photo in a well-lit room</li>
                <li>Choose the best photo quality that your device camera has</li>
                <li>Hold up the identification document (ID) next to your face like in the sample photo below</li>
                <li>Please ensure that your face and ID details can be clearly seen in your photo</li>
              </ul>
            </div>

            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-secondary transition-colors" role="button" tabIndex={0} aria-label="Upload selfie photo">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" aria-hidden="true" />
              <p className="text-sm text-muted-foreground">Click or drag file to upload</p>
              <p className="text-xs text-muted-foreground mt-1">JPG, PNG or PDF (max 5MB)</p>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} stepProgress={progressPercent} />
          </fieldset>
        );

      case 8:
        return (
          <fieldset>
            <legend className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Selfie Verification
            </legend>
            <div className="flex flex-col items-center justify-center py-6">
              <div className="w-40 h-40 rounded-2xl bg-muted/50 border border-border flex items-center justify-center mb-6 relative">
                <Camera className="h-16 w-16 text-carlo-orange" aria-hidden="true" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-whatsapp flex items-center justify-center">
                  <svg className="w-5 h-5 text-whatsapp-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-secondary transition-colors mb-6" role="button" tabIndex={0} aria-label="Upload selfie verification photo">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" aria-hidden="true" />
              <p className="text-sm text-muted-foreground">
                Drag and Drop <span className="text-muted-foreground">(or)</span>{" "}
                <span className="text-secondary font-medium underline cursor-pointer">Choose Files</span>
              </p>
              <p className="text-xs text-muted-foreground mt-2">Supported Files: PNG & JPG. File Size: &lt;1 MB</p>
            </div>

            <div className="flex items-center gap-2 text-whatsapp mb-2">
              <Shield className="h-5 w-5" aria-hidden="true" />
              <span className="text-sm font-medium italic">Your data is kept secure and confidential</span>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} stepProgress={progressPercent} />
          </fieldset>
        );

      case 9:
        return (
          <DocumentUploadStep
            title="NRIC"
            description="Upload a clear photo of the front and back of your NRIC (MyKad)."
            icon={CreditCard}
            onBack={goBack}
            onNext={goNext}
            stepProgress={progressPercent}
          />
        );

      case 10:
        return (
          <DocumentUploadStep
            title="Driving License"
            description="Upload a clear photo of your valid driving license (front and back)."
            icon={CreditCard}
            onBack={goBack}
            onNext={goNext}
            stepProgress={progressPercent}
          />
        );

      case 11:
        return (
          <DocumentUploadStep
            title="Latest Payslip"
            description="Upload your latest payslip (not older than 3 months)."
            icon={FileText}
            onBack={goBack}
            onNext={goNext}
            stepProgress={progressPercent}
          />
        );

      case 12:
        return (
          <DocumentUploadStep
            title="Latest Bank Statement"
            description="Upload your latest 3 months bank statement."
            icon={FileText}
            onBack={goBack}
            onNext={goNext}
            stepProgress={progressPercent}
          />
        );

      case 13:
        return (
          <fieldset>
            <legend className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Declaration Of Disclosure
            </legend>
            <MandatoryNotice />
            <div className="space-y-4">
              <div className="bg-muted rounded-xl p-4 text-sm text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  I hereby declare that all information provided in this application is true, complete, and accurate to the best of my knowledge.
                </p>
                <p className="mb-3">
                  I authorize Carlo to verify any information provided and to obtain additional information as necessary for the purpose of processing this loan application.
                </p>
                <p>
                  I understand that any false or misleading information may result in the rejection of my application or cancellation of any approved loan.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agree"
                  className="mt-1 h-4 w-4 rounded border-input accent-secondary"
                />
                <Label htmlFor="agree" className="text-sm text-foreground">
                  I agree to the above declaration and the Terms & Conditions *
                </Label>
              </div>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} nextLabel="Submit Application" stepProgress={progressPercent} />
          </fieldset>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Apply for Car Loan - Carlo Malaysia"
        description="Apply for a car loan in Malaysia with Carlo. Simple 5-minute online application with quick approval and competitive rates from major banks."
        canonical="/loan-check"
      />
      <Header />

      <main className="flex-1 py-8 md:py-12">
        <div className="container-carlo">
          <div className="max-w-2xl mx-auto">
            {/* Progress indicator */}
            <div className="mb-8" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100} aria-label={`Application progress: ${progressPercent}%`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">{progressPercent}%</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Step {currentStep + 1} of {TOTAL_STEPS}: {STEP_TITLES[currentStep]}
              </p>
            </div>

            {/* Main card */}
            <section className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8" aria-label={STEP_TITLES[currentStep]}>
              {renderStep()}
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplyLoan;
