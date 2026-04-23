"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { habitatFeatures } from "@/lib/constants";
import NavBar from "@/components/NavBar";

const hotspotPositions = [
  { top: "12%", left: "65%" },
  { top: "35%", left: "20%" },
  { top: "70%", left: "50%" },
  { top: "30%", left: "78%" },
  { top: "62%", left: "25%" },
  { top: "48%", left: "58%" },
];

export default function HabitatPage() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col bg-primary"
    >
      {/* Hero Header */}
      <div className="texture-overlay relative overflow-hidden px-8 pt-6 pb-3 text-center">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10" />
        <p className="font-body relative z-10 text-sm font-semibold uppercase tracking-widest text-accent">
          Flagship Innovation
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display relative z-10 mt-1 text-5xl font-bold text-white"
        >
          Habitat™ Trays
        </motion.h1>
        <p className="font-body relative z-10 mt-2 text-lg text-white/60">
          Protect quality. Extend shelf life. Showcase beauty.
        </p>
      </div>

      {/* Stat callout */}
      <div className="flex justify-center px-8 py-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="rounded-full border border-accent/30 bg-accent/10 px-8 py-2"
        >
          <span className="font-display text-2xl font-bold text-accent">
            85%
          </span>
          <span className="font-body ml-2 text-base text-white/70">
            stronger seal than traditional vented flanges
          </span>
        </motion.div>
      </div>

      {/* Interactive Tray Visualization — centered in upper area */}
      <div className="relative flex flex-1 items-start justify-center px-8 pt-2 pb-24">
        {/* Background glow */}
        <div className="absolute left-1/2 top-[30%] h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-3xl" />

        {/* Tray illustration container — larger */}
        <div
          className="relative h-[55vh] w-[800px] max-w-full"
          onClick={() => setActiveFeature(null)}
        >
          {/* Stylized tray SVG */}
          <svg
            viewBox="0 0 700 420"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            <rect x="80" y="100" width="540" height="250" rx="20" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
            <rect x="60" y="90" width="580" height="25" rx="6" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
            <rect x="100" y="320" width="500" height="15" rx="7" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <line x1="180" y1="180" x2="180" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="260" y1="180" x2="260" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="340" y1="180" x2="340" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="420" y1="180" x2="420" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="500" y1="180" x2="500" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
            <rect x="75" y="120" width="8" height="220" rx="4" fill="rgba(255,255,255,0.08)" />
            <rect x="617" y="120" width="8" height="220" rx="4" fill="rgba(255,255,255,0.08)" />
            <path d="M150 290 Q200 310 250 290" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
            <path d="M300 290 Q350 310 400 290" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
            <path d="M450 290 Q500 310 550 290" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
          </svg>

          {/* Hotspots */}
          {habitatFeatures.map((feature, index) => (
            <HotspotButton
              key={feature.id}
              feature={feature}
              position={hotspotPositions[index]}
              isActive={activeFeature === feature.id}
              onTap={() =>
                setActiveFeature(
                  activeFeature === feature.id ? null : feature.id
                )
              }
            />
          ))}
        </div>

        {/* Feature list sidebar — bigger buttons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="ml-6 flex flex-col gap-3 pt-4"
        >
          {habitatFeatures.map((feature) => (
            <button
              key={feature.id}
              onClick={() =>
                setActiveFeature(
                  activeFeature === feature.id ? null : feature.id
                )
              }
              className={`min-h-[56px] rounded-xl px-6 py-3 text-left transition-all ${
                activeFeature === feature.id
                  ? "bg-accent text-white shadow-lg shadow-accent/30"
                  : "bg-white/10 text-white/70 active:bg-white/20"
              }`}
            >
              <span className="font-body text-base font-semibold">
                {feature.title}
              </span>
            </button>
          ))}
        </motion.div>
      </div>

      <NavBar />
    </motion.div>
  );
}

function HotspotButton({
  feature,
  position,
  isActive,
  onTap,
}: {
  feature: { id: string; title: string; description: string };
  position: { top: string; left: string };
  isActive: boolean;
  onTap: () => void;
}) {
  return (
    <div
      className="absolute"
      style={{ top: position.top, left: position.left }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onTap();
        }}
        className="relative flex h-14 w-14 items-center justify-center"
      >
        <span className="absolute h-14 w-14 animate-ping rounded-full bg-accent/30" />
        <span className="relative h-7 w-7 rounded-full border-2 border-white bg-accent shadow-lg shadow-accent/40" />
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            className="absolute left-16 top-1/2 z-10 w-80 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <h3 className="font-display text-xl font-bold text-dark">
              {feature.title}
            </h3>
            <p className="font-body mt-2 text-base leading-relaxed text-muted">
              {feature.description}
            </p>
            <button
              onClick={onTap}
              className="mt-4 text-sm font-semibold text-accent"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
