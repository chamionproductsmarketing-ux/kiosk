"use client";

import { useState } from "react";
import { valuePropositions, services } from "@/lib/constants";
import NavBar from "@/components/NavBar";

const cardStyles = [
  "bg-primary text-white",
  "bg-cream text-dark",
  "bg-secondary text-white",
  "bg-cream text-dark",
  "bg-primary text-white",
];

export default function WhySoloraPage() {
  const [currentCard, setCurrentCard] = useState(0);
  const vp = valuePropositions[currentCard];
  const style = cardStyles[currentCard];
  const isLight = style.includes("bg-cream");

  return (
    <div className="flex h-full flex-col bg-cream">
      {/* Full-bleed value prop card */}
      <div
        className={`texture-overlay flex flex-1 flex-col items-center justify-center px-12 transition-colors duration-500 ${style}`}
      >
        <p
          className={`font-body text-sm font-semibold uppercase tracking-widest ${
            isLight ? "text-accent" : "text-accent"
          }`}
        >
          Why Solora Fresh
        </p>
        <h1
          className={`font-display mt-4 max-w-3xl text-center text-5xl font-bold leading-tight ${
            isLight ? "text-dark" : "text-white"
          }`}
        >
          {vp.headline}
        </h1>
        <p
          className={`font-body mt-6 max-w-xl text-center text-xl leading-relaxed ${
            isLight ? "text-muted" : "text-white/70"
          }`}
        >
          {vp.body}
        </p>

        {/* Pagination dots */}
        <div className="mt-10 flex gap-3">
          {valuePropositions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentCard(i)}
              className={`h-3 rounded-full transition-all ${
                i === currentCard
                  ? "w-8 bg-accent"
                  : `w-3 ${isLight ? "bg-dark/20" : "bg-white/30"}`
              }`}
            />
          ))}
        </div>

        {/* Nav arrows */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() =>
              setCurrentCard(
                (currentCard - 1 + valuePropositions.length) %
                  valuePropositions.length
              )
            }
            className={`flex h-14 w-14 items-center justify-center rounded-full ${
              isLight ? "bg-dark/10 active:bg-dark/20" : "bg-white/10 active:bg-white/20"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() =>
              setCurrentCard((currentCard + 1) % valuePropositions.length)
            }
            className={`flex h-14 w-14 items-center justify-center rounded-full ${
              isLight ? "bg-dark/10 active:bg-dark/20" : "bg-white/10 active:bg-white/20"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Services strip */}
      <div className="flex h-32 items-center justify-center gap-6 bg-primary px-8 pb-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-1 flex-col items-center text-center"
          >
            <span className="font-body text-sm font-semibold text-accent">
              {service.title}
            </span>
            <span className="font-body mt-1 text-xs text-white/50">
              {service.description}
            </span>
          </div>
        ))}
      </div>

      <NavBar />
    </div>
  );
}
