import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Shield, Upload, Camera, FileText, CreditCard, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TOTAL_STEPS = 14;

const STEP_TITLES = [
  "Read This, It's Important",
  "What Is Your Application For?",
  "First Things First",
  "Choose & Customize Your Car",
  "Tell Us About Yourself",
  "Send Us Your Location",
  "What You Do For Work",
  "Time For A Selfie",
  "Useful References",
  "NRIC",
  "Driving License",
  "Latest Payslip",
  "Latest Bank Statement",
  "Declaration Of Disclosure",
];

const MandatoryNotice = () => (
  <div className="flex items-center gap-2 text-destructive mb-6">
    <AlertCircle className="h-4 w-4" />
    <span className="text-sm font-medium">You must fill mandatory fields</span>
  </div>
);

const StepButtons = ({
  onBack,
  onNext,
  showBack = true,
  showSaveDraft = true,
  nextLabel = "Next",
}: {
  onBack?: () => void;
  onNext: () => void;
  showBack?: boolean;
  showSaveDraft?: boolean;
  nextLabel?: string;
}) => (
  <div className="flex flex-col sm:flex-row gap-3 mt-8">
    {showBack && (
      <Button
        variant="outline"
        className="flex-1 border-border text-foreground hover:bg-muted"
        onClick={onBack}
      >
        Back
      </Button>
    )}
    {showSaveDraft && (
      <Button
        variant="outline"
        className="flex-1 border-border text-foreground hover:bg-muted"
      >
        Save Draft
      </Button>
    )}
    <Button
      className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
      onClick={onNext}
    >
      {nextLabel}
    </Button>
  </div>
);

const DocumentUploadStep = ({
  title,
  description,
  icon: Icon,
  onBack,
  onNext,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  onBack: () => void;
  onNext: () => void;
}) => (
  <>
    <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">{title}</h1>
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
        <Icon className="h-10 w-10 text-carlo-orange" />
      </div>
      <p className="text-muted-foreground text-sm text-center mb-6">{description}</p>
    </div>
    <MandatoryNotice />
    <div className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-secondary transition-colors">
      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" />
      <p className="text-sm text-muted-foreground">Click or drag file to upload</p>
      <p className="text-xs text-muted-foreground mt-1">JPG, PNG or PDF (max 5MB)</p>
    </div>
    <StepButtons onBack={onBack} onNext={onNext} />
  </>
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
      // Step 0: Intro
      case 0:
        return (
          <>
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
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">Your data is kept secure and confidential</span>
              </div>
            </div>
            <StepButtons onNext={goNext} showBack={false} />
          </>
        );

      // Step 1: What Is Your Application For?
      case 1:
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              What Is Your Application For?
            </h1>
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
                <Label className="text-sm font-medium text-foreground">Purpose of Application *</Label>
                <select className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select purpose</option>
                  <option value="personal">Personal Use</option>
                  <option value="business">Business Use</option>
                  <option value="commercial">Commercial Use</option>
                </select>
              </div>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} showSaveDraft={false} />
          </>
        );

      // Step 2: First Things First
      case 2:
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              First Things First
            </h1>
            <MandatoryNotice />
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-foreground">Full Name (as per IC) *</Label>
                <Input className="mt-1" placeholder="Enter your full name" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">IC Number *</Label>
                <Input className="mt-1" placeholder="e.g. 900101-10-1234" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Phone Number *</Label>
                <Input className="mt-1" placeholder="e.g. 012-345 6789" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Email Address *</Label>
                <Input className="mt-1" type="email" placeholder="e.g. name@email.com" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Date of Birth *</Label>
                <Input className="mt-1" type="date" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Gender *</Label>
                <RadioGroup className="mt-2 flex gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="male" id="gender-male" />
                    <Label htmlFor="gender-male" className="text-sm">Male</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="female" id="gender-female" />
                    <Label htmlFor="gender-female" className="text-sm">Female</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Marital Status *</Label>
                <select className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                </select>
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Race *</Label>
                <select className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option value="malay">Malay</option>
                  <option value="chinese">Chinese</option>
                  <option value="indian">Indian</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} />
          </>
        );

      // Step 3: Choose & Customize Your Car
      case 3:
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Choose & Customize Your Car
            </h1>
            <MandatoryNotice />
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-foreground">Car Condition *</Label>
                <RadioGroup className="mt-2 flex gap-4">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="new" id="car-new" />
                    <Label htmlFor="car-new" className="text-sm">New</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="used" id="car-used" />
                    <Label htmlFor="car-used" className="text-sm">Recond / Used</Label>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Car Brand *</Label>
                <select className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select brand</option>
                  <option value="perodua">Perodua</option>
                  <option value="proton">Proton</option>
                  <option value="toyota">Toyota</option>
                  <option value="honda">Honda</option>
                  <option value="nissan">Nissan</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="bmw">BMW</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Car Model *</Label>
                <Input className="mt-1" placeholder="e.g. Myvi, City, Vios" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Variant</Label>
                <Input className="mt-1" placeholder="e.g. 1.5L AV" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Year of Manufacture *</Label>
                <Input className="mt-1" type="number" placeholder="e.g. 2024" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Estimated Car Price (RM) *</Label>
                <Input className="mt-1" type="number" placeholder="e.g. 75000" />
              </div>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} />
          </>
        );

      // Step 4: Tell Us About Yourself
      case 4:
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Tell Us About Yourself
            </h1>
            <p className="text-center text-muted-foreground mb-6">
              We need this information to easily reach you and process your application
            </p>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-foreground">Full Name as per NRIC *</Label>
                <Input className="mt-1" placeholder="Enter Full Name" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">NRIC Number *</Label>
                <Input className="mt-1" placeholder="Enter NRIC Number" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Mobile Number *</Label>
                <Input className="mt-1" placeholder="Enter Mobile Number" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Email Address *</Label>
                <Input className="mt-1" type="email" placeholder="Enter Email Address" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-whatsapp mt-6">
              <Shield className="h-5 w-5" />
              <span className="text-sm font-medium italic">Your data is kept secure and confidential</span>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} />
          </>
        );

      // Step 5: Send Us Your Location
      case 5:
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Send Us Your Location
            </h1>
            <MandatoryNotice />
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-foreground">Address Line 1 *</Label>
                <Input className="mt-1" placeholder="Street address" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Address Line 2</Label>
                <Input className="mt-1" placeholder="Apartment, unit, etc." />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Postcode *</Label>
                <Input className="mt-1" placeholder="e.g. 55000" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">City *</Label>
                <Input className="mt-1" placeholder="e.g. Kuala Lumpur" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">State *</Label>
                <select className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
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
            <StepButtons onBack={goBack} onNext={goNext} />
          </>
        );

      // Step 6: What You Do For Work
      case 6:
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              What You Do For Work
            </h1>
            <p className="text-center text-muted-foreground mb-6">Quick Rules</p>
            <MandatoryNotice />
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-foreground">Occupation *</Label>
                <Input className="mt-1" placeholder="e.g. Software Engineer" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Industry / Sector *</Label>
                <select className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select</option>
                  <option value="it">IT / Technology</option>
                  <option value="finance">Finance / Banking</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="government">Government</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Years of Employment *</Label>
                <Input className="mt-1" type="number" placeholder="e.g. 3" />
              </div>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} />
          </>
        );

      // Step 7: Time For A Selfie
      case 7:
        return (
          <DocumentUploadStep
            title="Time For A Selfie"
            description="Take a clear selfie of yourself. Make sure your face is clearly visible and well-lit."
            icon={Camera}
            onBack={goBack}
            onNext={goNext}
          />
        );

      // Step 8: Useful References
      case 8:
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Useful References
            </h1>
            <MandatoryNotice />
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-foreground">Reference Name 1 *</Label>
                <Input className="mt-1" placeholder="Full name" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Relationship *</Label>
                <Input className="mt-1" placeholder="e.g. Spouse, Sibling, Friend" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Contact Number *</Label>
                <Input className="mt-1" placeholder="e.g. 012-345 6789" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Reference Name 2</Label>
                <Input className="mt-1" placeholder="Full name" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Relationship</Label>
                <Input className="mt-1" placeholder="e.g. Colleague, Friend" />
              </div>
              <div>
                <Label className="text-sm font-medium text-foreground">Contact Number</Label>
                <Input className="mt-1" placeholder="e.g. 012-345 6789" />
              </div>
            </div>
            <StepButtons onBack={goBack} onNext={goNext} />
          </>
        );

      // Step 9: NRIC
      case 9:
        return (
          <DocumentUploadStep
            title="NRIC"
            description="Upload a clear photo of the front and back of your NRIC (MyKad)."
            icon={CreditCard}
            onBack={goBack}
            onNext={goNext}
          />
        );

      // Step 10: Driving License
      case 10:
        return (
          <DocumentUploadStep
            title="Driving License"
            description="Upload a clear photo of your valid driving license (front and back)."
            icon={CreditCard}
            onBack={goBack}
            onNext={goNext}
          />
        );

      // Step 11: Latest Payslip
      case 11:
        return (
          <DocumentUploadStep
            title="Latest Payslip"
            description="Upload your latest payslip (not older than 3 months)."
            icon={FileText}
            onBack={goBack}
            onNext={goNext}
          />
        );

      // Step 12: Latest Bank Statement
      case 12:
        return (
          <DocumentUploadStep
            title="Latest Bank Statement"
            description="Upload your latest 3 months bank statement."
            icon={FileText}
            onBack={goBack}
            onNext={goNext}
          />
        );

      // Step 13: Declaration Of Disclosure
      case 13:
        return (
          <>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Declaration Of Disclosure
            </h1>
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
            <StepButtons onBack={goBack} onNext={goNext} nextLabel="Submit Application" />
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-8 md:py-12">
        <div className="container-carlo">
          <div className="max-w-2xl mx-auto">
            {/* Progress indicator */}
            <div className="mb-8">
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
            <div className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8">
              {renderStep()}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplyLoan;
