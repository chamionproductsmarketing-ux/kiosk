"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { valuePropositions, services } from "@/lib/constants";
import NavBar from "@/components/NavBar";

const cardStyles = [
  { bg: "bg-primary", light: false },
  { bg: "bg-cream", light: true },
  { bg: "bg-secondary", light: false },
  { bg: "bg-cream", light: true },
  { bg: "bg-primary", light: false },
];

const stats = [
  { value: "70+", label: "Years" },
  { value: "12", label: "Product Lines" },
  { value: "1000s", label: "of SKUs" },
  { value: "Coast to Coast", label: "US Coverage" },
];

const serviceIcons = [
  <DesignIcon key="d" />,
  <GearIcon key="g" />,
  <InventoryIcon key="i" />,
  <TruckIcon key="t" />,
  <MapIcon key="m" />,
];

export default function WhySoloraPage() {
  const [currentCard, setCurrentCard] = useState(0);
  const vp = valuePropositions[currentCard];
  const style = cardStyles[currentCard];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col"
    >
      {/* Full-bleed value prop card */}
      <div
        className={`texture-overlay relative flex flex-1 flex-col transition-colors duration-500 ${style.bg}`}
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/5" />

        {/* Top label */}
        <div className="px-12 pt-8">
          <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent">
            Why Solora Fresh
          </p>
        </div>

        {/* Main content — fills space */}
        <div className="flex flex-1 flex-col items-center justify-center px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-4xl text-center"
            >
              <h1
                className={`font-display text-[48px] font-bold leading-tight ${
                  style.light ? "text-dark" : "text-white"
                }`}
              >
                {vp.headline}
              </h1>
              <p
                className={`font-body mt-6 text-[22px] leading-relaxed ${
                  style.light ? "text-muted" : "text-white/70"
                }`}
              >
                {vp.body}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Stats row */}
          <div className="mt-8 flex gap-10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span
                  className={`font-display text-3xl font-bold ${
                    style.light ? "text-accent" : "text-accent"
                  }`}
                >
                  {stat.value}
                </span>
                <p
                  className={`font-body mt-1 text-sm ${
                    style.light ? "text-muted" : "text-white/50"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-6 pb-6">
          <button
            onClick={() =>
              setCurrentCard(
                (currentCard - 1 + valuePropositions.length) %
                  valuePropositions.length
              )
            }
            className={`flex h-14 w-14 items-center justify-center rounded-full ${
              style.light
                ? "bg-dark/10 active:bg-dark/20"
                : "bg-white/10 active:bg-white/20"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="flex gap-3">
            {valuePropositions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentCard(i)}
                className={`h-3 rounded-full transition-all ${
                  i === currentCard
                    ? "w-8 bg-accent"
                    : `w-3 ${style.light ? "bg-dark/20" : "bg-white/30"}`
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentCard((currentCard + 1) % valuePropositions.length)
            }
            className={`flex h-14 w-14 items-center justify-center rounded-full ${
              style.light
                ? "bg-dark/10 active:bg-dark/20"
                : "bg-white/10 active:bg-white/20"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Services — proper cards with icons */}
      <div className="flex items-center justify-center gap-4 bg-[#122b1a] px-6 py-5 pb-24">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="flex flex-1 flex-col items-center gap-2 rounded-xl bg-white/8 px-4 py-4 text-center"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20 text-accent">
              {serviceIcons[i]}
            </div>
            <span className="font-body text-sm font-bold text-white">
              {service.title}
            </span>
            <span className="font-body text-xs leading-snug text-white/50">
              {service.description}
            </span>
          </div>
        ))}
      </div>

      <NavBar />
    </motion.div>
  );
}

function DesignIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function InventoryIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}
