import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Gavel, BadgeDollarSign, Zap, ShieldCheck, ExternalLink, MessageCircle, Quote } from "lucide-react";

const whyChooseItems = [
  { icon: Gavel, title: "Direct Auction Access", description: "Access Japan's top car auctions directly" },
  { icon: BadgeDollarSign, title: "Transparent Pricing", description: "No hidden fees, clear cost breakdown" },
  { icon: Zap, title: "Fast Loan Approval", description: "Get approved within 2 working days" },
  { icon: ShieldCheck, title: "Trusted Import Specialist", description: "Years of Japan import experience" },
];

const browseCards = [
  {
    name: "Carsensor.net",
    description: "One of Japan's largest used car listing platforms with thousands of vehicles.",
    url: "https://www.carsensor.net/",
  },
  {
    name: "Goo-Net Exchange",
    description: "Browse quality Japanese used cars with detailed inspection reports.",
    url: "https://www.goo-net-exchange.com/usedcars/",
  },
  {
    name: "JPAUC One Price",
    description: "Fixed-price Japanese cars ready for immediate purchase and export.",
    url: "https://jpauc.com/oneprice/location",
  },
];

const JapanImportHero = () => {
  return (
    <section>
      {/* Hero */}
      <div className="gradient-hero py-16 md:py-24">
        <div className="container-carlo text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Import Your Dream Car From Japan
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Carlo connects you directly to Japan's finest car auctions. Get transparent pricing, fast loan approval, and a seamless import experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </div>

      {/* Why Choose Carlo */}
      <div className="py-12 md:py-16 bg-muted">
        <div className="container-carlo">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Why Choose Carlo
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChooseItems.map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                  <item.icon className="text-secondary" size={28} />
                </div>
                <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Browse Cars From Japan */}
      <div className="py-12 md:py-16 bg-background">
        <div className="container-carlo">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
            Browse Thousands of Cars From Japan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {browseCards.map((card) => (
              <a
                key={card.name}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-secondary transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-foreground text-lg">{card.name}</h4>
                  <ExternalLink className="text-muted-foreground group-hover:text-secondary transition-colors" size={18} />
                </div>
                <p className="text-muted-foreground text-sm">{card.description}</p>
              </a>
            ))}
          </div>

          {/* Loan Summary */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border max-w-lg mx-auto text-center">
            <p className="text-sm font-semibold text-muted-foreground mb-1">From</p>
            <p className="text-3xl md:text-4xl font-bold text-primary mb-4">RM 1,250/month</p>
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex justify-between text-foreground">
                <span>Loan Amount</span>
                <span className="font-semibold">RM 90,000</span>
              </div>
              <div className="flex justify-between text-foreground">
                <span>Interest</span>
                <span className="font-semibold">RM 8,500</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between text-foreground font-bold">
                <span>Total</span>
                <span>RM 98,500</span>
              </div>
            </div>
            <Button asChild size="lg" className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-bold">
              <a href="https://wa.me/601126817101" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" size={20} />
                Apply via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="py-12 md:py-16 bg-muted">
        <div className="container-carlo max-w-2xl mx-auto text-center">
          <Quote className="text-primary mx-auto mb-4" size={36} />
          <p className="text-foreground text-lg md:text-xl italic mb-4">
            "Very smooth import process. Carlo handled everything from auction to delivery. Highly recommended for anyone looking to import from Japan!"
          </p>
          <p className="font-semibold text-primary">Ahmad</p>
          <p className="text-muted-foreground text-sm">Kuala Lumpur</p>
        </div>
      </div>
    </section>
  );
};

export default JapanImportHero;
