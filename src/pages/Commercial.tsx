import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import InstagramGallery from "@/components/InstagramGallery";
import Car360Gallery from "@/components/Car360Gallery";

const Commercial = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Carlo Commercial - Follow Us on Instagram"
        description="Watch Carlo's latest commercials and follow us on Instagram for car import updates, promotions, and customer stories."
        canonical="/commercial"
      />
      <Header />
      <main className="flex-1">
        <InstagramGallery />
      </main>
      <Footer />
    </div>
  );
};

export default Commercial;
