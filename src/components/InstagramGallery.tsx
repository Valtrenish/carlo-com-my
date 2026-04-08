import { Button } from "@/components/ui/button";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/carlomalaysia/";

const posts = [
  {
    link: "https://www.instagram.com/p/DWTDg7JiaXh/",
    emoji: "🚗",
    caption: "Terima kasih Puan Haiza... membeli Mercedes-Benz A180",
    details: "Customer testimonial",
    date: "Mar 25, 2026",
  },
  {
    link: "https://www.instagram.com/p/DWG9U_RCeK6/",
    emoji: "🌙",
    caption: "Selamat Hari Raya Aidilfitri 🌙 Maaf Zahir & Batin",
    details: "Hari Raya greeting",
    date: "Mar 20, 2026",
  },
  {
    link: "https://www.instagram.com/p/DVqaqZXjbsB/",
    emoji: "🏎️",
    caption: "Kereta Baru Untuk Raya? Mercedes B180 RM125k / A250 RM165k",
    details: "Raya car promo",
    date: "Early Mar 2026",
  },
  {
    link: "https://www.instagram.com/p/DVfWWs9CfRO/",
    emoji: "🔥",
    caption: "Hari Raya Car Sale 🚗 Diskaun sehingga RM20,000* | Harga dari RM118k",
    details: "Raya sale",
    date: "Mar 5, 2026",
  },
  {
    link: "https://www.instagram.com/p/DVfVvRtkgUp/",
    emoji: "⚡",
    caption: "Toyota Harrier 2021 🚗 RM165,000* | Promosi Hari Raya",
    details: "Harrier promo",
    date: "Mar 5, 2026",
  },
  {
    link: "https://www.instagram.com/p/DVP14U8kmPA/",
    emoji: "💎",
    caption: "Porsche Cayenne 3.0L | 2020 | Silver | 34k km | Full specs",
    details: "Cayenne listing",
    date: "Late Feb 2026",
  },
];

const InstagramGallery = () => {
  return (
    <section className="py-12 md:py-20 bg-[hsl(220,40%,13%)]">
      <div className="container-carlo max-w-5xl">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-5 mb-10 px-2">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px] shrink-0">
            <div className="w-full h-full rounded-full bg-[hsl(220,40%,13%)] flex items-center justify-center">
              <Instagram className="text-white" size={32} />
            </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {posts.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-muted to-muted-foreground/10 flex items-center justify-center relative">
                <span className="text-5xl opacity-40">{post.emoji}</span>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-1.5 text-white font-semibold">
                    <Heart size={20} fill="white" />
                  </div>
                  <div className="flex items-center gap-1.5 text-white font-semibold">
                    <MessageCircle size={20} fill="white" />
                  </div>
                </div>

                {/* Corner Instagram icon */}
                <div className="absolute top-2.5 right-2.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-lg p-1.5 shadow-lg">
                  <Instagram className="text-white" size={14} />
                </div>
              </div>

              {/* Caption */}
              <div className="p-3">
                <p className="text-foreground text-xs md:text-sm font-semibold leading-tight line-clamp-2">
                  {post.caption}
                </p>
                <p className="text-muted-foreground text-[11px] mt-1.5">{post.date}</p>
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
