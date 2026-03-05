import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoanCalculator from "@/components/LoanCalculator";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";

const loanCalculatorJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Carlo Car Loan Calculator",
  url: "https://carlo-com-my.lovable.app/loan-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: "Calculate your car loan monthly payments using Malaysia's flat rate formula. Get transparent pricing and quick approval.",
  offers: {
    "@type": "Offer",
    category: "Car Loan",
    areaServed: {
      "@type": "Country",
      name: "Malaysia",
    },
  },
  provider: {
    "@type": "Organization",
    name: "Carlo",
    url: "https://carlo-com-my.lovable.app",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+60122480581",
      contactType: "customer service",
      availableLanguage: ["English", "Malay"],
    },
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What documents do I need to purchase a car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Malaysian applicants need NRIC (front & back), Driving License, Latest Payslip & Bank Statement. Non-Malaysian applicants should contact us directly.",
      },
    },
    {
      "@type": "Question",
      name: "How will I know if I qualify for a loan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once you submit your application, our team will review your documents and get back to you within 2 working days with a pre-approval status.",
      },
    },
    {
      "@type": "Question",
      name: "Why buy from Carlo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Carlo offers transparent, hassle-free car buying with competitive pricing, flexible financing, and a fully online process.",
      },
    },
    {
      "@type": "Question",
      name: "What banks do you partner with for loan application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We partner with Maybank, CIMB, Public Bank, Hong Leong Bank, RHB, and many others for competitive rates and flexible terms.",
      },
    },
  ],
};

const combinedJsonLd = [loanCalculatorJsonLd, faqJsonLd];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Carlo - Easy Car Loan Calculator Malaysia"
        description="Get your dream car with Carlo's easy car loan calculator. Apply for car loans in Malaysia with transparent pricing and quick approval."
        canonical="/loan-calculator"
        jsonLd={combinedJsonLd as unknown as Record<string, unknown>}
      />
      <Header />
      <main className="flex-1">
        <LoanCalculator />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
