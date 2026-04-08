import { useState } from "react";
import { RotateCcw, X, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import carCivic from "@/assets/car-civic.jpg";
import carCivicBlue from "@/assets/car-civic-blue.jpg";
import carMercedes from "@/assets/car-mercedes.jpg";
import carBmw from "@/assets/car-bmw.jpg";

const cars = [
  {
    name: "Honda Civic",
    spec: "1.5L Turbocharged · CVT",
    image: carCivic,
  },
  {
    name: "Honda Civic Biru",
    spec: "1.5L VTEC Turbo · Sport Edition",
    image: carCivicBlue,
  },
  {
    name: "Mercedes Benz C-Class",
    spec: "2.0L Turbo · AMG Line",
    image: carMercedes,
  },
  {
    name: "BMW 3 Series",
    spec: "2.0L TwinPower Turbo · M Sport",
    image: carBmw,
  },
];

const Car360Gallery = () => {
  const [modalCar, setModalCar] = useState<(typeof cars)[0] | null>(null);

  return (
    <>
      <section className="py-16 md:py-24 bg-background">
        <div className="container-carlo max-w-5xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <RotateCcw className="text-accent" size={28} />
              <Badge variant="secondary" className="text-sm font-semibold px-3 py-1">
                Interactive
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Explore Cars in 360°
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Get up close with our premium imported cars. Click any car to explore.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cars.map((car, i) => (
              <button
                key={i}
                onClick={() => setModalCar(car)}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-left border border-border"
              >
                {/* Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* 360° Badge */}
                  <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <RotateCcw size={14} />
                    360° View
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-accent text-accent-foreground rounded-full p-4 shadow-xl">
                      <Eye size={28} />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="text-foreground font-bold text-lg">{car.name}</h3>
                  <p className="text-muted-foreground text-sm mt-0.5">{car.spec}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalCar && (
        <div
          className="fixed inset-0 z-50 bg-foreground/70 flex items-center justify-center p-4"
          onClick={() => setModalCar(null)}
        >
          <div
            className="bg-card rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalCar(null)}
              className="absolute top-3 right-3 z-10 bg-card text-foreground rounded-full p-2 shadow-md hover:bg-muted transition-colors"
            >
              <X size={20} />
            </button>

            <div className="aspect-square relative bg-muted">
              <img
                src={modalCar.image}
                alt={modalCar.name}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <RotateCcw size={16} />
                Drag to Rotate (Coming Soon)
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-foreground font-bold text-2xl">{modalCar.name}</h3>
              <p className="text-muted-foreground mt-1">{modalCar.spec}</p>
              <Button
                asChild
                className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full"
              >
                <a
                  href="https://wa.me/60123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Car360Gallery;
