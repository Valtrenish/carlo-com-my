import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoanCalculator from "@/components/LoanCalculator";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import SEO from "@/components/SEO";

const Calculator = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Carlo - Easy Car Loan Calculator Malaysia"
        description="Calculate your car loan monthly payments using Malaysia's flat rate formula. Get transparent pricing and quick approval."
        canonical="/carloancalculator"
      />
      <Header />
      <main className="flex-1">
        <LoanCalculator />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
