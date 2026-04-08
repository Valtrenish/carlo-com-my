import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/carlomalaysia/";

const posts = [
  { caption: "Mercedes Benz A180 – Delivery of the Day", price: "" },
  { caption: "Selamat Hari Raya Aidilfitri", price: "" },
  { caption: "Raya DGN Mercedes – A250 & B180", price: "" },
  { caption: "Hari Raya Sale – Diskaun 20K", price: "" },
  { caption: "2021 Toyota Harrier Z Leather Package", price: "" },
  { caption: "Porsche Cayenne", price: "" },
  { caption: "Mercedes CLA 45s", price: "RM118K" },
  { caption: "2020 BMW 118i M Sport", price: "RM118K" },
  { caption: "Toyota Harrier & Honda Stepwagon", price: "Diskaun RM10K" },
];

const InstagramGallery = () => {
  return (
    <section className="py-12 md:py-20 bg-[hsl(220,40%,13%)]">
      <div className="container-carlo max-w-5xl">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-10 px-2">
          <div className="w-20 h-20 rounded-full border-2 border-accent bg-background flex items-center justify-center shrink-0">
            <Instagram className="text-primary" size={36} />
          </div>
          <div className="text-center sm:text-left">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl font-bold hover:underline"
            >
              @carlomalaysia
            </a>
            <p className="text-white/60 text-sm mt-1">
              Carlo Malaysia | Premium Car Importer
            </p>
            <div className="flex gap-4 mt-2 text-sm text-white/80 justify-center sm:justify-start">
              <span><strong className="text-white">631</strong> posts</span>
              <span><strong className="text-white">5,674</strong> followers</span>
              <span><strong className="text-white">616</strong> following</span>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {posts.map((post, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-square bg-muted flex items-center justify-center">
                <span className="text-4xl opacity-30">📷</span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>

              {/* Corner icon */}
              <div className="absolute top-2 right-2 bg-black/40 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Instagram className="text-white" size={14} />
              </div>

              {/* Caption */}
              <div className="p-3 bg-card">
                <p className="text-foreground text-xs md:text-sm font-semibold leading-tight line-clamp-2">
                  {post.caption}
                </p>
                {post.price && (
                  <span className="inline-block mt-1 text-xs font-bold text-accent bg-accent/10 rounded px-2 py-0.5">
                    {post.price}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base rounded-full px-10 shadow-lg"
          >
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2" size={20} />
              Follow on Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
