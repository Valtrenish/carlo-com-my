import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Instagram, Play, Camera } from "lucide-react";

const commercialThumbnails = [
  { id: 1, icon: Play, label: "Hari Raya Special" },
  { id: 2, icon: Play, label: "Raya Dgn Mercedes" },
  { id: 3, icon: Camera, label: "Japan Auction Tour" },
  { id: 4, icon: Play, label: "Customer Delivery" },
  { id: 5, icon: Camera, label: "Carlo Showroom" },
  { id: 6, icon: Play, label: "Import Process" },
];

const INSTAGRAM_URL = "https://www.instagram.com/carlomalaysia/";

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
        <section className="py-16 md:py-24 bg-muted">
          <div className="container-carlo">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
              Carlo Commercial
            </h1>
            <p className="text-center text-muted-foreground mb-10">
              Follow Us on Instagram
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
              {commercialThumbnails.map((item) => (
                <a
                  key={item.id}
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all"
                >
                  <div className="absolute inset-0 bg-carlo-dark/40 group-hover:bg-carlo-dark/60 transition-colors flex flex-col items-center justify-center gap-3">
                    <div className="w-14 h-14 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="text-background" size={28} />
                    </div>
                    <span className="text-background text-sm font-medium px-3 text-center">
                      {item.label}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
              >
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2" size={20} />
                  Follow Us on Instagram
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Commercial;
