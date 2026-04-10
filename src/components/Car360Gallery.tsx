import { useState, useRef, useCallback } from "react";
import { RotateCcw, X, Eye, Move } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import carCivic from "@/assets/car-civic.jpg";
import carCivicBlue from "@/assets/car-civic-blue.jpg";
import carMercedes from "@/assets/car-mercedes.jpg";
import carBmw from "@/assets/car-bmw.jpg";

const cars = [
  { name: "Honda Civic", spec: "1.5L Turbocharged · CVT", image: carCivic },
  { name: "Honda Civic Biru", spec: "1.5L VTEC Turbo · Sport Edition", image: carCivicBlue },
  { name: "Mercedes Benz C-Class", spec: "2.0L Turbo · AMG Line", image: carMercedes },
  { name: "BMW 3 Series", spec: "2.0L TwinPower Turbo · M Sport", image: carBmw },
];

const useDrag3D = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    if ("touches" in e) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    return { x: e.clientX, y: e.clientY };
  };

  const onStart = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    lastPos.current = getPos(e);
  }, []);

  const onMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current) return;
    const pos = getPos(e);
    const dx = pos.x - lastPos.current.x;
    const dy = pos.y - lastPos.current.y;
    lastPos.current = pos;
    setRotation((prev) => ({
      x: Math.max(-25, Math.min(25, prev.x - dy * 0.4)),
      y: Math.max(-40, Math.min(40, prev.y + dx * 0.4)),
    }));
  }, []);

  const onEnd = useCallback(() => {
    isDragging.current = false;
  }, []);

  const reset = useCallback(() => setRotation({ x: 0, y: 0 }), []);

  return { rotation, onStart, onMove, onEnd, reset, isDragging };
};

const CarCard = ({ car, onClick }: { car: typeof cars[0]; onClick: () => void }) => {
  const { rotation, onStart, onMove, onEnd, reset } = useDrag3D();
  const hasRotated = rotation.x !== 0 || rotation.y !== 0;

  return (
    <div className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-border">
      <div
        className="aspect-square relative overflow-hidden cursor-grab active:cursor-grabbing"
        style={{ perspective: "800px" }}
        onMouseDown={onStart}
        onMouseMove={onMove}
        onMouseUp={onEnd}
        onMouseLeave={onEnd}
        onTouchStart={onStart}
        onTouchMove={onMove}
        onTouchEnd={onEnd}
      >
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          width={800}
          height={800}
          draggable={false}
          className="w-full h-full object-cover select-none"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${1 + Math.abs(rotation.y) * 0.003})`,
            transition: hasRotated ? "none" : "transform 0.5s cubic-bezier(0.2,0.8,0.2,1)",
          }}
        />

        {/* 360° Badge */}
        <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg pointer-events-none">
          <RotateCcw size={14} />
          360° View
        </div>

        {/* Drag hint */}
        {!hasRotated && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-foreground/60 text-background rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold shadow-xl">
              <Move size={16} />
              Drag to Rotate
            </div>
          </div>
        )}

        {/* Reset button */}
        {hasRotated && (
          <button
            onClick={(e) => { e.stopPropagation(); reset(); }}
            className="absolute top-3 right-3 bg-card text-foreground rounded-full p-2 shadow-md hover:bg-muted transition-colors z-10"
          >
            <RotateCcw size={16} />
          </button>
        )}
      </div>

      {/* Info */}
      <button onClick={onClick} className="w-full p-4 text-left hover:bg-muted/50 transition-colors flex items-center justify-between">
        <div>
          <h3 className="text-foreground font-bold text-lg">{car.name}</h3>
          <p className="text-muted-foreground text-sm mt-0.5">{car.spec}</p>
        </div>
        <Eye size={20} className="text-muted-foreground" />
      </button>
    </div>
  );
};

const Car360Gallery = () => {
  const [modalCar, setModalCar] = useState<typeof cars[0] | null>(null);
  const { rotation, onStart, onMove, onEnd, reset } = useDrag3D();
  const hasRotated = rotation.x !== 0 || rotation.y !== 0;

  return (
    <>
      <section className="py-16 md:py-24 bg-background">
        <div className="container-carlo max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <RotateCcw className="text-accent" size={28} />
              <Badge variant="secondary" className="text-sm font-semibold px-3 py-1">Interactive</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Explore Cars in 360°</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Drag on any car image to rotate and explore from different angles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cars.map((car, i) => (
              <CarCard key={i} car={car} onClick={() => { setModalCar(car); reset(); }} />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalCar && (
        <div className="fixed inset-0 z-50 bg-foreground/70 flex items-center justify-center p-4" onClick={() => setModalCar(null)}>
          <div className="bg-card rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalCar(null)} className="absolute top-3 right-3 z-10 bg-card text-foreground rounded-full p-2 shadow-md hover:bg-muted transition-colors">
              <X size={20} />
            </button>

            <div
              className="aspect-square relative bg-muted cursor-grab active:cursor-grabbing overflow-hidden"
              style={{ perspective: "1000px" }}
              onMouseDown={onStart}
              onMouseMove={onMove}
              onMouseUp={onEnd}
              onMouseLeave={onEnd}
              onTouchStart={onStart}
              onTouchMove={onMove}
              onTouchEnd={onEnd}
            >
              <img
                src={modalCar.image}
                alt={modalCar.name}
                width={800}
                height={800}
                draggable={false}
                className="w-full h-full object-cover select-none"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${1 + Math.abs(rotation.y) * 0.004})`,
                  transition: hasRotated ? "none" : "transform 0.5s cubic-bezier(0.2,0.8,0.2,1)",
                }}
              />
              {!hasRotated && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-foreground/60 text-background rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-semibold shadow-xl">
                    <Move size={18} />
                    Drag to Rotate
                  </div>
                </div>
              )}
              {hasRotated && (
                <button onClick={(e) => { e.stopPropagation(); reset(); }} className="absolute top-3 left-3 bg-card text-foreground rounded-full p-2 shadow-md hover:bg-muted transition-colors z-10">
                  <RotateCcw size={16} />
                </button>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-foreground font-bold text-2xl">{modalCar.name}</h3>
              <p className="text-muted-foreground mt-1">{modalCar.spec}</p>
              <Button asChild className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90 font-bold rounded-full">
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">Enquire Now</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Car360Gallery;
