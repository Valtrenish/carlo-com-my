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
    <section className="py-16 md:py-24 bg-muted">
      <div className="container-carlo">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
          Carlo Commercial
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Follow Us on Instagram
        </p>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 mb-8">
          {instagramPosts.map((url, index) => (
            <div key={index} className="w-full sm:w-[48%] md:w-[31%] lg:w-[19%] flex-shrink-0">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "hsl(var(--card))",
                  border: 0,
                  borderRadius: "12px",
                  margin: 0,
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
