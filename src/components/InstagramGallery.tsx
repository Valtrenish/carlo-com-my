import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const placeholders = [
  { label: "JDM Sports Car", gradient: "from-blue-900 to-slate-800" },
  { label: "Toyota Supra", gradient: "from-slate-800 to-blue-800" },
  { label: "Nissan GT-R", gradient: "from-blue-800 to-indigo-900" },
  { label: "Honda NSX", gradient: "from-indigo-900 to-slate-700" },
  { label: "Mazda RX-7", gradient: "from-slate-700 to-blue-900" },
  { label: "Subaru WRX STI", gradient: "from-blue-900 to-slate-900" },
];

const INSTAGRAM_URL = "https://www.instagram.com/carlomalaysia/";

const InstagramGallery = () => {
  return (
    <section className="py-10 md:py-16 bg-muted">
      <div className="container-carlo max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-foreground mb-1">
          Carlo Commercial
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-base">
          Follow Us on Instagram
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
          {placeholders.map((item, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                <Instagram className="text-white mb-2" size={32} />
                <span className="text-white text-sm font-semibold">{item.label}</span>
              </div>
              <div className="absolute bottom-3 right-3 opacity-60 group-hover:opacity-0 transition-opacity">
                <Instagram className="text-white" size={20} />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-base">
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
