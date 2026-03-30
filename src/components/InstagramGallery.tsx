import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const instagramPosts = [
  "https://www.instagram.com/p/DVfWWs9CfRO/",
  "https://www.instagram.com/p/DVqaqZXjbsB/",
  "https://www.instagram.com/carlomalaysia/reel/DVfVvRtkgUp/",
  "https://www.instagram.com/carlomalaysia/reel/DVGNrIrkofh/",
  "https://www.instagram.com/p/DWTDg7JiaXh/",
];

const InstagramGallery = () => {
  useEffect(() => {
    // Load Instagram embed script
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="py-10 md:py-16 bg-muted">
      <div className="container-carlo max-w-6xl">
        <h2 className="text-xl md:text-2xl font-bold text-center text-foreground mb-1">
          Carlo Commercial
        </h2>
        <p className="text-center text-muted-foreground mb-6 text-sm">
          Follow Us on Instagram
        </p>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-3 mb-6">
          {instagramPosts.map((url, index) => (
            <div key={index} className="w-full sm:w-[48%] md:w-[31%] lg:w-[18%] flex-shrink-0 overflow-hidden">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "hsl(var(--card))",
                  border: 0,
                  borderRadius: "8px",
                  margin: 0,
                  padding: 0,
                  maxWidth: "100%",
                  minWidth: "0",
                  width: "100%",
                }}
              />
            </div>
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
