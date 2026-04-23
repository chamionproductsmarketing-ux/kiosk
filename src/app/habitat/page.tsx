"use client";

import { useState } from "react";
import { habitatFeatures } from "@/lib/constants";
import HabitatFeature from "@/components/HabitatFeature";
import NavBar from "@/components/NavBar";

const hotspotPositions = [
  { top: "18%", left: "68%" },  // Full sealing flange — top edge
  { top: "40%", left: "25%" },  // HideAwayVents — inside left
  { top: "72%", left: "55%" },  // Smooth base edges — bottom
  { top: "35%", left: "75%" },  // Ribbed edge design — right side
  { top: "65%", left: "30%" },  // Juice traps — bottom left
  { top: "50%", left: "60%" },  // Precision curves — mid right
];

export default function HabitatPage() {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <div className="flex h-full flex-col bg-primary">
      {/* Hero Header */}
      <div className="texture-overlay px-8 pt-8 pb-4 text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent">
          Flagship Innovation
        </p>
        <h1 className="font-display mt-2 text-5xl font-bold text-white">
          Habitat™ Trays
        </h1>
        <p className="font-body mt-3 text-lg text-white/70">
          Protect quality. Extend shelf life. Showcase beauty.
        </p>
      </div>

      {/* Interactive Tray Visualization */}
      <div className="relative flex flex-1 items-center justify-center pb-24">
        {/* Background glow */}
        <div className="absolute h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />

        {/* Tray illustration container */}
        <div
          className="relative h-[420px] w-[700px]"
          onClick={() => setActiveFeature(null)}
        >
          {/* Stylized tray SVG */}
          <svg
            viewBox="0 0 700 420"
            className="absolute inset-0 h-full w-full"
            fill="none"
          >
            {/* Tray body */}
            <rect
              x="80"
              y="100"
              width="540"
              height="250"
              rx="20"
              fill="rgba(255,255,255,0.08)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
            />
            {/* Sealing flange - top rim */}
            <rect
              x="60"
              y="90"
              width="580"
              height="25"
              rx="6"
              fill="rgba(255,255,255,0.12)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1.5"
            />
            {/* Base with smooth edges */}
            <rect
              x="100"
              y="320"
              width="500"
              height="15"
              rx="7"
              fill="rgba(255,255,255,0.06)"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="1"
            />
            {/* Inner vent lines (HideAwayVents) */}
            <line x1="180" y1="180" x2="180" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="260" y1="180" x2="260" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="340" y1="180" x2="340" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="420" y1="180" x2="420" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="500" y1="180" x2="500" y2="300" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
            {/* Ribbed side edges */}
            <rect x="75" y="120" width="8" height="220" rx="4" fill="rgba(255,255,255,0.08)" />
            <rect x="617" y="120" width="8" height="220" rx="4" fill="rgba(255,255,255,0.08)" />
            {/* Juice trap channels */}
            <path d="M150 290 Q200 310 250 290" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
            <path d="M300 290 Q350 310 400 290" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
            <path d="M450 290 Q500 310 550 290" stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none" />
          </svg>

          {/* Hotspots */}
          {habitatFeatures.map((feature, index) => (
            <HabitatFeature
              key={feature.id}
              title={feature.title}
              description={feature.description}
              isActive={activeFeature === feature.id}
              onTap={() =>
                setActiveFeature(
                  activeFeature === feature.id ? null : feature.id
                )
              }
              position={hotspotPositions[index]}
            />
          ))}
        </div>

        {/* Feature list sidebar */}
        <div className="ml-8 flex flex-col gap-3">
          {habitatFeatures.map((feature) => (
            <button
              key={feature.id}
              onClick={() =>
                setActiveFeature(
                  activeFeature === feature.id ? null : feature.id
                )
              }
              className={`rounded-xl px-5 py-3 text-left transition-colors ${
                activeFeature === feature.id
                  ? "bg-accent text-white"
                  : "bg-white/10 text-white/70 active:bg-white/20"
              }`}
            >
              <span className="font-body text-sm font-semibold">
                {feature.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      <NavBar />
    </div>
  );
}
