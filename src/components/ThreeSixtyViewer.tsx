import { useEffect, useRef, useState } from "react";

const PANNELLUM_CSS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
const PANNELLUM_JS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";

const CARS = [
  { id: "bmw", label: "BMW 3 Series", image: "/360/bmw.jpg" },
  { id: "civic1", label: "Honda Civic (Blue)", image: "/360/honda-civic-1.jpg" },
  { id: "civic2", label: "Honda Civic (Red)", image: "/360/honda-civic-2.jpg" },
  { id: "mercedes", label: "Mercedes Benz C-Class", image: "/360/mercedes-benz.jpg" },
];

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function loadCSS(href: string) {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = href;
    document.head.appendChild(l);
  }
}

const ThreeSixtyViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [activeCar, setActiveCar] = useState(CARS[0]);

  useEffect(() => {
    loadCSS(PANNELLUM_CSS);
    loadScript(PANNELLUM_JS).then(() => setLoaded(true)).catch(() => setError(true));
  }, []);

  useEffect(() => {
    if (!loaded || !containerRef.current) return;
    const win = window as any;
    if (!win.pannellum) return;

    if (viewerRef.current) {
      try { viewerRef.current.destroy(); } catch {}
    }

    viewerRef.current = win.pannellum.viewer(containerRef.current, {
      type: "equirectangular",
      panorama: activeCar.image,
      autoLoad: true,
      autoRotate: -2,
      compass: false,
      showControls: true,
      showFullscreenCtrl: true,
      showZoomCtrl: true,
      hfov: 110,
      pitch: 10,
      yaw: 180,
      minHfov: 30,
      maxHfov: 170,
      mouseZoom: true,
    });

    return () => {
      if (viewerRef.current) {
        try { viewerRef.current.destroy(); } catch {}
        viewerRef.current = null;
      }
    };
  }, [loaded, activeCar]);

  return (
    <section className="py-16 md:py-24" style={{ background: "hsl(220, 30%, 12%)" }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 tracking-wide"
            style={{
              background: "hsl(var(--carlo-orange) / 0.15)",
              color: "hsl(var(--carlo-orange))",
              border: "1px solid hsl(var(--carlo-orange) / 0.3)",
            }}
          >
            IMMERSIVE VIEW
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-[Poppins]">
            360° Experience
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Drag to look around · Scroll to zoom · Pinch on mobile
          </p>
        </div>

        {/* Car Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {CARS.map((car) => (
            <button
              key={car.id}
              onClick={() => setActiveCar(car)}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                activeCar.id === car.id
                  ? {
                      background: "hsl(var(--carlo-orange))",
                      color: "#fff",
                      boxShadow: "0 4px 20px hsl(var(--carlo-orange) / 0.4)",
                    }
                  : {
                      background: "hsl(220, 20%, 18%)",
                      color: "hsl(220, 10%, 70%)",
                      border: "1px solid hsl(220, 14%, 25%)",
                    }
              }
            >
              {car.label}
            </button>
          ))}
        </div>

        {/* Viewer */}
        <div
          className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border"
          style={{
            borderColor: "hsl(var(--carlo-orange) / 0.2)",
            aspectRatio: "16 / 9",
          }}
        >
          {error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-white z-10">
              Failed to load 360° viewer. Please refresh.
            </div>
          )}
          {!loaded && !error && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-10">
              <div className="w-10 h-10 border-4 border-white/20 border-t-[hsl(28,100%,55%)] rounded-full animate-spin" />
            </div>
          )}
          <div ref={containerRef} className="w-full h-full" style={{ minHeight: 300 }} />
        </div>

        <p className="text-center text-white/40 text-xs mt-4">
          Use your mouse or finger to explore the full 360° panorama
        </p>
      </div>
    </section>
  );
};

export default ThreeSixtyViewer;
