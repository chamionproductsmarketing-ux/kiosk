"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useKioskStore } from "@/stores/useKioskStore";
import { slideshowSlides, SLIDESHOW_INTERVAL_MS } from "@/lib/constants";

export default function AttractMode() {
  const mode = useKioskStore((s) => s.mode);
  const resetTimer = useKioskStore((s) => s.resetTimer);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (mode !== "attract") return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowSlides.length);
    }, SLIDESHOW_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [mode]);

  const handleExit = useCallback(() => {
    setCurrentSlide(0);
    resetTimer();
  }, [resetTimer]);

  return (
    <AnimatePresence>
      {mode === "attract" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 overflow-hidden"
          onClick={handleExit}
          onTouchStart={handleExit}
        >
          {/* Slides */}
          {slideshowSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${slide.gradient}`}
              style={{
                opacity: index === currentSlide ? 1 : 0,
                transition: "opacity 1.2s ease-in-out",
              }}
            >
              <div className="texture-overlay absolute inset-0" />

              <div className="relative z-10 px-16 text-center">
                <motion.h1
                  key={`h-${slide.id}-${index === currentSlide}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    y: index === currentSlide ? 0 : 20,
                  }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="font-display text-7xl font-bold text-white drop-shadow-lg"
                >
                  {slide.headline}
                </motion.h1>
                <motion.p
                  key={`p-${slide.id}-${index === currentSlide}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: index === currentSlide ? 0.8 : 0,
                    y: index === currentSlide ? 0 : 10,
                  }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="font-body mt-6 text-2xl text-white"
                >
                  {slide.subline}
                </motion.p>
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
          <motion.div
            className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2"
            animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="font-body text-lg tracking-widest text-white uppercase">
              Touch to Explore
            </p>
          </motion.div>

          {/* Slide indicators */}
          <div className="absolute bottom-28 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slideshowSlides.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === currentSlide ? "w-8 bg-white" : "w-1.5 bg-white/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
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
