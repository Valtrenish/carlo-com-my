import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const placeholders = [
  { label: "JDM Sports Car", emoji: "🏎️" },
  { label: "Toyota Supra", emoji: "🔥" },
  { label: "Nissan GT-R", emoji: "⚡" },
  { label: "Honda NSX", emoji: "🏁" },
  { label: "Mazda RX-7", emoji: "💨" },
  { label: "Subaru WRX STI", emoji: "🚗" },
];

const INSTAGRAM_URL = "https://www.instagram.com/carlomalaysia/";

const InstagramGallery = () => {
  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container-carlo max-w-5xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Instagram size={16} />
            @carlomalaysia
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Follow Us on Instagram
          </h2>
          <p className="text-muted-foreground mt-2 text-base md:text-lg max-w-md mx-auto">
            Stay updated with our latest arrivals and behind-the-scenes content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {placeholders.map((item, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 flex items-center justify-center">
                <span className="text-5xl opacity-40 group-hover:opacity-20 transition-opacity">{item.emoji}</span>
              </div>

              {/* Instagram gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#833ab4]/70 via-[#fd1d1d]/50 to-[#fcb045]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <Instagram className="text-white mb-2" size={36} strokeWidth={1.5} />
                <span className="text-white text-sm font-bold tracking-wide">{item.label}</span>
              </div>

              {/* Corner icon */}
              <div className="absolute bottom-3 right-3 bg-black/30 backdrop-blur-sm rounded-full p-1.5 opacity-70 group-hover:opacity-0 transition-opacity z-10">
                <Instagram className="text-white" size={16} />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base rounded-full px-8 shadow-md">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2" size={20} />
              Follow Us on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
