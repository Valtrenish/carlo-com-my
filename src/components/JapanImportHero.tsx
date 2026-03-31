import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gavel, BadgeDollarSign, Zap, ShieldCheck, ExternalLink, MessageCircle, Quote, Car, Search, CircleDollarSign, Star } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";

const whyChooseItems = [
  { icon: Gavel, title: "Direct Auction Access", description: "Access Japan's top car auctions directly" },
  { icon: BadgeDollarSign, title: "Transparent Pricing", description: "No hidden fees, clear cost breakdown" },
  { icon: Zap, title: "Fast Loan Approval", description: "Get approved within 2 working days" },
  { icon: ShieldCheck, title: "Trusted Import Specialist", description: "Years of Japan import experience" },
];

const browseCards = [
  {
    name: "Carsensor.net",
    description: "Japan's largest used car platform with over 500,000+ listings. Search by make, model, or budget with detailed vehicle history.",
    url: "https://www.carsensor.net/",
    favicon: "https://www.google.com/s2/favicons?domain=carsensor.net&sz=64",
    icon: Car,
    badge: "Popular",
  },
  {
    name: "Goo-Net Exchange",
    description: "Quality Japanese used cars with comprehensive inspection reports. Trusted exporter platform with transparent pricing.",
    url: "https://www.goo-net-exchange.com/usedcars/",
    favicon: "https://www.google.com/s2/favicons?domain=goo-net-exchange.com&sz=64",
    icon: Search,
    badge: "Trusted",
  },
  {
    name: "JPAUC One Price",
    description: "Fixed-price Japanese cars ready for immediate purchase and export. Simple location-based search with no bidding.",
    url: "https://jpauc.com/oneprice/location",
    favicon: "https://www.google.com/s2/favicons?domain=jpauc.com&sz=64",
    icon: CircleDollarSign,
    badge: null,
  },
];

const JapanImportHero = () => {
  return (
    <section>
      {/* Hero */}
      <div className="gradient-hero py-12 md:py-20">
        <div className="container-carlo">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left text-primary-foreground">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Import Your Dream Car From Japan
              </h2>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto lg:mx-0">
                Carlo connects you directly to Japan's finest car auctions. Get transparent pricing, fast loan approval, and a seamless import experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base">
                  <Link to="/carloancalculator">Calculate Loan</Link>
                </Button>
                <Button asChild size="lg" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-bold text-base">
                  <a href="https://wa.me/601126817101" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" size={20} />
                    WhatsApp Advisor
                  </a>
                </Button>
              </div>
            </div>
            {/* Carousel */}
            <div className="flex-1 w-full max-w-xl lg:max-w-none">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Carlo */}
      <div className="py-12 md:py-16 bg-muted">
        <div className="container-carlo">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-10">
            Why Choose Carlo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChooseItems.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                  <item.icon className="text-secondary" size={28} />
                </div>
                <h4 className="font-bold text-foreground text-base md:text-lg mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Browse Cars From Japan - Redesigned */}
      <div className="py-14 md:py-20 bg-muted">
        <div className="container-carlo">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center text-foreground mb-3">
            Browse Thousands of Cars From Japan
          </h3>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-base md:text-lg">
            Explore Japan's top car platforms and find your perfect vehicle
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {browseCards.map((card) => (
              <div
                key={card.name}
                className="relative bg-card rounded-2xl border border-border shadow-md hover:shadow-2xl hover:scale-[1.03] hover:border-accent transition-all duration-300 group overflow-hidden flex flex-col"
              >
                {/* Badge */}
                {card.badge && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-accent text-accent-foreground text-sm font-bold px-3 py-1 rounded-full">
                    <Star size={12} />
                    {card.badge}
                  </div>
                )}

                {/* Top gradient accent bar */}
                <div className="h-1.5 w-full bg-gradient-to-r from-secondary to-accent" />

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  {/* Logo */}
                  <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center mb-5 border border-border">
                    <img
                      src={card.favicon}
                      alt={`${card.name} logo`}
                      className="w-14 h-14 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Name */}
                  <h4 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">{card.name}</h4>

                  {/* Description with icon */}
                  <div className="flex items-start gap-2 mb-6 flex-1">
                    <card.icon className="text-secondary mt-0.5 shrink-0" size={18} />
                    <p className="text-muted-foreground text-base leading-relaxed">{card.description}</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
                  >
                    <a href={card.url} target="_blank" rel="noopener noreferrer">
                      Visit Site
                      <ExternalLink className="ml-2" size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="py-12 md:py-16 bg-muted">
        <div className="container-carlo max-w-2xl mx-auto text-center">
          <Quote className="text-primary mx-auto mb-4" size={36} />
          <p className="text-foreground text-xl md:text-2xl italic mb-4">
            "Very smooth import process. Carlo handled everything from auction to delivery. Highly recommended for anyone looking to import from Japan!"
          </p>
          <p className="font-bold text-primary text-lg">Ahmad</p>
          <p className="text-muted-foreground text-base">Kuala Lumpur</p>
        </div>
      </div>
    </section>
  );
};

export default JapanImportHero;
