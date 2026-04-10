import { useEffect, useRef, useState } from "react";

// Pannellum CSS & JS loaded via CDN
const PANNELLUM_CSS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
const PANNELLUM_JS = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";

// Default to a placeholder — replace with your actual equirectangular image
import placeholderImage from "@/assets/car-1.jpg";

interface ThreeSixtyViewerProps {
  image?: string;
  title?: string;
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function loadCSS(href: string) {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

const ThreeSixtyViewer = ({ image, title = "360° Experience" }: ThreeSixtyViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadCSS(PANNELLUM_CSS);
    loadScript(PANNELLUM_JS)
      .then(() => setLoaded(true))
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    if (!loaded || !containerRef.current) return;
    const win = window as any;
    if (!win.pannellum) return;

    // Destroy previous instance
    if (viewerRef.current) {
      try { viewerRef.current.destroy(); } catch {}
    }

    viewerRef.current = win.pannellum.viewer(containerRef.current, {
      type: "equirectangular",
      panorama: image || placeholderImage,
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
  }, [loaded, image]);

  return (
    <section className="py-16 md:py-24" style={{ background: "hsl(220, 30%, 12%)" }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
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
            {title}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Drag to look around · Scroll to zoom · Pinch on mobile
          </p>
        </div>

        {/* Viewer Container */}
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
              <div className="w-10 h-10 border-4 border-white/20 border-t-[hsl(var(--carlo-orange))] rounded-full animate-spin" />
            </div>
          )}
          <div
            ref={containerRef}
            className="w-full h-full"
            style={{ minHeight: 300 }}
          />
        </div>

        {/* Hint below viewer */}
        <p className="text-center text-white/40 text-xs mt-4">
          Use your mouse or finger to explore the full 360° panorama
        </p>
      </div>
    </section>
  );
};

export default ThreeSixtyViewer;
