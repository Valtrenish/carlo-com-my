import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Gavel, BadgeDollarSign, Zap, ShieldCheck, ExternalLink,
  MessageCircle, Car, Search, CircleDollarSign, Star, Play, X,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

const whyChooseItems = [
  { icon: Gavel, title: "Direct Auction Access", description: "Access Japan's top car auctions directly" },
  { icon: BadgeDollarSign, title: "Transparent Pricing", description: "No hidden fees, clear cost breakdown" },
  { icon: Zap, title: "Fast Loan Approval", description: "Approved within 2 working days" },
  { icon: ShieldCheck, title: "Trusted Specialist", description: "Years of Japan import experience" },
];

const browseCards = [
  {
    name: "Carsensor.net",
    description: "Japan's largest used car platform. Search by make, model, or budget with detailed vehicle history.",
    url: "https://www.carsensor.net/",
    favicon: "https://www.google.com/s2/favicons?domain=carsensor.net&sz=64",
    icon: Car,
    badge: "Popular",
    stat: "500k+ listings",
  },
  {
    name: "Goo-Net Exchange",
    description: "Quality Japanese used cars with comprehensive inspection reports and transparent pricing.",
    url: "https://www.goo-net-exchange.com/usedcars/",
    favicon: "https://www.google.com/s2/favicons?domain=goo-net-exchange.com&sz=64",
    icon: Search,
    badge: "Trusted",
    stat: "Certified exports",
  },
  {
    name: "JPAUC One Price",
    description: "Fixed-price Japanese cars ready for immediate purchase and export. No bidding required.",
    url: "https://jpauc.com/oneprice/location",
    favicon: "https://www.google.com/s2/favicons?domain=jpauc.com&sz=64",
    icon: CircleDollarSign,
    badge: "Fixed Price",
    stat: "Buy-now pricing",
  },
];

const JapanImportHero = () => {
  const [isVertical, setIsVertical] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (!isVertical) {
      setIsVertical(true);
      setTimeout(() => {
        videoRef.current?.play();
      }, 500);
    }
  };

  return (
    <section>
      {/* Hero — compact */}
      <div className="gradient-hero py-10 md:py-14">
        <div className="container-carlo">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="flex-1 text-center lg:text-left text-primary-foreground">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight tracking-tight">
                Import Your Dream Car From Japan
              </h1>
              <p className="text-base md:text-lg mb-6 opacity-90 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Carlo connects you directly to Japan's finest car auctions. Transparent pricing, fast loan approval, and a seamless import experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm shadow-lg">
                  <Link to="/carloancalculator">Calculate Loan</Link>
                </Button>
                <Button asChild size="lg" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-bold text-sm">
                  <a href="https://wa.me/601126817101" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={18} />
                    WhatsApp Advisor
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg lg:max-w-none">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Carlo — cards with borders */}
      <div className="py-10 md:py-12 bg-muted">
        <div className="container-carlo">
          <h2 className="text-xl md:text-2xl font-extrabold text-center text-foreground mb-2">
            Why Choose Carlo
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto rounded-full mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {whyChooseItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center bg-card rounded-xl border border-border p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                  <item.icon className="text-secondary" size={22} />
                </div>
                <h3 className="font-bold text-foreground text-sm md:text-base mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Import — video section with expand interaction */}
      <div className="py-10 md:py-12 bg-muted">
        <div className="container-carlo">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div
              className="transition-all duration-500 ease-in-out"
              style={{
                width: isVertical ? "min(280px, 100%)" : "100%",
                maxWidth: isVertical ? "280px" : "500px",
                margin: isVertical ? "0 auto" : undefined,
              }}
            >
              <div
                className="relative rounded-xl overflow-hidden shadow-md border border-border bg-card cursor-pointer group"
                onClick={handleVideoClick}
              >
                <div
                  className="relative w-full transition-all duration-500 ease-in-out"
                  style={{ paddingBottom: isVertical ? "177.78%" : "56.25%" }}
                >
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    playsInline
                    preload="metadata"
                    controls={isVertical}
                  >
                    <source src="/videos/carlo-japan-import.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {!isVertical && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="text-accent-foreground ml-0.5" size={24} fill="currentColor" />
                      </div>
                    </div>
                  )}
                </div>

                {isVertical && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsVertical(false);
                      if (videoRef.current) {
                        videoRef.current.pause();
                      }
                    }}
                    className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-foreground/70 text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-xl md:text-2xl font-extrabold text-foreground mb-2">
                How to Import from Japan
              </h2>
              <div className="w-12 h-1 bg-accent rounded-full mb-4 mx-auto lg:mx-0" />
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">
                Watch how Carlo makes importing your dream car from Japan simple and hassle-free. From browsing auctions to doorstep delivery — we handle it all.
              </p>
              <Button asChild size="default" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-bold text-sm">
                <a href="https://wa.me/601126817101" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={18} />
                  Talk to an Advisor
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Browse Cars — refined cards with stats & badges */}
      <div className="py-10 md:py-12 bg-muted">
        <div className="container-carlo">
          <h2 className="text-xl md:text-2xl font-extrabold text-center text-foreground mb-2">
            Browse Thousands of Cars From Japan
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto rounded-full mb-2" />
          <p className="text-center text-muted-foreground mb-8 max-w-lg mx-auto text-sm md:text-base">
            Explore Japan's top car platforms and find your perfect vehicle
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {browseCards.map((card) => (
              <div
                key={card.name}
                className="relative bg-card rounded-xl border border-border shadow-sm hover:shadow-xl hover:scale-[1.02] hover:border-accent transition-all duration-300 group overflow-hidden flex flex-col"
              >
                {/* Badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-accent text-accent-foreground text-xs font-bold px-2.5 py-0.5 rounded-full">
                  <Star size={10} />
                  {card.badge}
                </div>

                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-secondary to-accent" />

                <div className="p-5 md:p-6 flex flex-col flex-1">
                  {/* Logo */}
                  <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center mb-4 border border-border">
                    <img
                      src={card.favicon}
                      alt={`${card.name} logo`}
                      className="w-9 h-9 object-contain"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{card.name}</h3>

                  {/* Stat line */}
                  <p className="text-xs font-semibold text-secondary mb-3">{card.stat}</p>

                  {/* Description */}
                  <div className="flex items-start gap-2 mb-5 flex-1">
                    <card.icon className="text-secondary mt-0.5 shrink-0" size={15} />
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
                  </div>

                  {/* CTA */}
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-sm"
                  >
                    <a href={card.url} target="_blank" rel="noopener noreferrer">
                      Visit Site
                      <ExternalLink className="ml-2" size={14} />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default JapanImportHero;
