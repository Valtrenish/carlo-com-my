import { Button } from "@/components/ui/button";
import { Play, Camera, Instagram } from "lucide-react";

const thumbnails = [
  { icon: Play, gradient: "from-secondary to-secondary/70" },
  { icon: Camera, gradient: "from-primary to-primary/70" },
  { icon: Play, gradient: "from-carlo-dark to-carlo-dark/70" },
  { icon: Camera, gradient: "from-secondary to-primary" },
  { icon: Play, gradient: "from-primary to-carlo-dark" },
  { icon: Camera, gradient: "from-carlo-dark to-secondary" },
];

const InstagramGallery = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container-carlo">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          Carlo Commercial
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Follow Us on Instagram
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {thumbnails.map((thumb, index) => (
            <a
              key={index}
              href="https://www.instagram.com/carlomalaysia/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${thumb.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-background/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <thumb.icon className="text-primary-foreground" size={24} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">
            <a href="https://www.instagram.com/carlomalaysia/" target="_blank" rel="noopener noreferrer">
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
