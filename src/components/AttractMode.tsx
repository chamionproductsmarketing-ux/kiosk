"use client";

import { useState, useEffect, useCallback } from "react";
import { useKioskStore } from "@/stores/useKioskStore";
import { slideshowSlides, SLIDESHOW_INTERVAL_MS } from "@/lib/constants";

export default function AttractMode() {
  const mode = useKioskStore((s) => s.mode);
  const resetTimer = useKioskStore((s) => s.resetTimer);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    if (mode !== "attract") return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowSlides.length);
    }, SLIDESHOW_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [mode]);

  // Exit attract mode on any touch/click
  const handleExit = useCallback(() => {
    setCurrentSlide(0);
    resetTimer();
  }, [resetTimer]);

  if (mode !== "attract") return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      onClick={handleExit}
      onTouchStart={handleExit}
    >
      {/* Slides */}
      {slideshowSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${slide.gradient} transition-opacity duration-1000 ease-in-out`}
          style={{ opacity: index === currentSlide ? 1 : 0 }}
        >
          {/* Texture overlay */}
          <div className="texture-overlay absolute inset-0" />

          {/* Content */}
          <div className="relative z-10 px-16 text-center">
            <h1 className="font-display text-7xl font-bold text-white drop-shadow-lg">
              {slide.headline}
            </h1>
            <p className="font-body mt-6 text-2xl text-white/80">
              {slide.subline}
            </p>
          </div>
        </div>
      ))}

      {/* Logo watermark */}
      <div className="absolute left-8 top-8 z-20 flex items-center gap-3 opacity-60">
        <SunIcon />
        <span className="font-display text-2xl font-bold tracking-wide text-white">
          SOLORA <span className="font-body font-normal">fresh</span>
        </span>
      </div>

      {/* Touch to Explore */}
      <div className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2">
        <p className="font-body animate-pulse text-lg tracking-widest text-white/70 uppercase">
          Touch to Explore
        </p>
      </div>
    </div>
  );
}

function SunIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="18" cy="18" r="8" fill="#f5a623" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="18"
          y1="18"
          x2={18 + 14 * Math.cos((angle * Math.PI) / 180)}
          y2={18 + 14 * Math.sin((angle * Math.PI) / 180)}
          stroke="#f5a623"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
