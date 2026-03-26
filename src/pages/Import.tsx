import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JapanImportHero from "@/components/JapanImportHero";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";

const Import = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Carlo - Import Your Dream Car From Japan"
        description="Import your dream car directly from Japan with Carlo. Access top Japanese car auctions, transparent pricing, and fast loan approval in Malaysia."
        canonical="/"
      />
      <Header />
      <main className="flex-1">
        <JapanImportHero />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Import;
