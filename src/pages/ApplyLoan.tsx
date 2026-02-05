import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ApplyLoan = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>("vehicle");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
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
                <span className="text-sm text-muted-foreground">1%</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[1%] bg-primary rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Main card */}
            <div className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-8">
              {/* Header */}
              <h1 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
                Read This, It's Important
              </h1>
              <p className="text-center text-muted-foreground mb-8">
                To seamlessly complete your application, we need your time to collect all the required details! Thank you for helping us get your application ready.
              </p>

              {/* Info section */}
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

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button
                  variant="outline"
                  className="flex-1 border-border text-foreground hover:bg-muted"
                >
                  Save Draft
                </Button>
                <Button className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Next
                </Button>
              </div>

              {/* Collapsible sections */}
              <div className="border-t border-border pt-6">
                <button
                  onClick={() => toggleSection("vehicle")}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="font-semibold text-foreground">Vehicle Information</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      expandedSection === "vehicle" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSection === "vehicle" && (
                  <div className="pb-4 text-muted-foreground text-sm">
                    <p>Vehicle information form fields will be displayed here.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ApplyLoan;