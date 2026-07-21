import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import InstagramGallery from "@/components/InstagramGallery";

import ThreeSixtyViewer from "@/components/ThreeSixtyViewer";

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
        <section className="bg-[#0A2540] py-10 md:py-14">
          <div className="container-carlo text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Carlo Commercials & 360° Car Gallery
            </h1>
            <div className="mt-4 mx-auto w-24 h-1.5 bg-carlo-orange rounded-full"></div>
          </div>
        </section>
        <InstagramGallery />
        <ThreeSixtyViewer />
      </main>
      <Footer />
    </div>
  );
};

export default Commercial;
