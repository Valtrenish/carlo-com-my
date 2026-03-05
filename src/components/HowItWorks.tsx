import { useState } from "react";
import { Monitor, Car, Landmark, KeyRound } from "lucide-react";

const HOW_TO_BUY = [
  {
    icon: Monitor,
    title: "Book Online",
    description: "Browse and compare from our wide selection of cars then book it when you're ready.",
  },
  {
    icon: Car,
    title: "Test Drive",
    description: "You can also set up a test drive session with us to get a feel of your new car.",
  },
  {
    icon: Landmark,
    title: "Apply for a Loan",
    description: "Just submit your loan application and related documents within 5 mins through our site.",
  },
  {
    icon: KeyRound,
    title: "Delivery/Pick up",
    description: "Once everything has been approved, you can pick your car up or have it delivered to a location near you.",
  },
];

const LOAN_APPLICATION = [
  {
    icon: Monitor,
    title: "Fill Application",
    description: "Complete our simple online loan application form with your personal and financial details.",
  },
  {
    icon: Landmark,
    title: "Submit Documents",
    description: "Upload your NRIC, payslip, and bank statements securely through our platform.",
  },
  {
    icon: Car,
    title: "Get Approved",
    description: "Our team will review your application and get back to you with an approval decision.",
  },
  {
    icon: KeyRound,
    title: "Drive Away",
    description: "Once approved, sign the agreement and collect your new car or have it delivered.",
  },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<"buy" | "loan">("buy");
  const steps = activeTab === "buy" ? HOW_TO_BUY : LOAN_APPLICATION;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container-carlo">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
          How It Works
        </h2>

        <div className="flex justify-center gap-2 mb-12">
          <button
            id="btn-how-tab-buy"
            onClick={() => setActiveTab("buy")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === "buy"
                ? "bg-secondary text-secondary-foreground"
                : "bg-card text-muted-foreground hover:bg-muted"
            }`}
          >
            How To Buy
          </button>
          <button
            id="btn-how-tab-loan"
            onClick={() => setActiveTab("loan")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeTab === "loan"
                ? "bg-secondary text-secondary-foreground"
                : "bg-card text-muted-foreground hover:bg-muted"
            }`}
          >
            Loan Application
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-20 h-20 rounded-full bg-carlo-orange/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="h-9 w-9 text-carlo-orange" />
              </div>
              <h3 className="font-bold text-foreground mb-2">
                <span className="text-carlo-orange">{String(index + 1).padStart(2, "0")}</span>
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
