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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {instagramPosts.map((url, index) => (
            <div key={index} className="flex justify-center">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "hsl(var(--card))",
                  border: 0,
                  borderRadius: "12px",
                  margin: 0,
                  maxWidth: "540px",
                  minWidth: "280px",
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
