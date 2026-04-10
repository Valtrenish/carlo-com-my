import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import carBmwBlue from "@/assets/car-bmw-blue.jpg";
import carBmwRed from "@/assets/car-bmw-red.jpg";
import carCivicFk7 from "@/assets/car-civic-fk7.jpg";
import carCivicFl1Blue from "@/assets/car-civic-fl1-blue.jpg";
import carCivicFl1Red from "@/assets/car-civic-fl1-red.jpg";
import carMercB180 from "@/assets/car-merc-b180.jpg";
import carMercA250 from "@/assets/car-merc-a250.jpg";
import carHarrier from "@/assets/car-harrier.jpg";

const slides = [
  { src: carBmwBlue, caption: "2020 BMW 118i M-Sport — Available Now" },
  { src: carBmwRed, caption: "2020 BMW 118i M-Sport — Available Now" },
  { src: carCivicFk7, caption: "2020 Honda Civic FK7 — Available Now" },
  { src: carCivicFl1Blue, caption: "2021 Honda Civic FL1 — Available Now" },
  { src: carCivicFl1Red, caption: "2021 Honda Civic FL1 — Available Now" },
  { src: carMercB180, caption: "2020 Mercedes Benz B180 — Available Now" },
  { src: carMercA250, caption: "2021 Mercedes Benz A250 — Available Now" },
  { src: carHarrier, caption: "2021 Toyota Harrier — Available Now" },
];

const HeroCarousel = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full relative">
              <img
                src={slide.src}
                alt={slide.caption}
                className="w-full aspect-[16/10] object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                width={1024}
                height={640}
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-1.5">
                <p className="text-white text-xs md:text-sm font-medium">{slide.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === selectedIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
