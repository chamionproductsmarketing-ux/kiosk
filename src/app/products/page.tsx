"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productLines } from "@/lib/constants";
import NavBar from "@/components/NavBar";

const iconColors = [
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
  "bg-primary/10 text-primary",
  "bg-accent/10 text-accent",
];

const productIcons: Record<string, React.ReactNode> = {
  corrugated: <BoxIcon />,
  clamshells: <ClamshellIcon />,
  "top-seal-films": <FilmIcon />,
  "tray-liners": <LinerIcon />,
  labels: <TagIcon />,
  "pouches-bags": <BagIcon />,
  "corner-boards": <CornerIcon />,
  "pallet-wrap": <WrapIcon />,
  ppe: <ShieldIcon />,
  "shrink-films": <ShrinkIcon />,
  trays: <TrayIcon />,
  "overwrap-films": <OverwrapIcon />,
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" as const },
  },
};

export default function ProductsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedProduct = productLines.find((p) => p.id === selected);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col bg-cream"
    >
      {/* Header with gradient pattern */}
      <div className="texture-overlay relative overflow-hidden bg-gradient-to-br from-[#0f3d1e] via-primary to-secondary px-8 py-6 text-center">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10" />
        <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-white/5" />
        <h1 className="font-display relative z-10 text-4xl font-bold text-white">
          Our Products
        </h1>
        <p className="font-body relative z-10 mt-2 text-lg text-white/60">
          12 packaging categories for the fresh produce industry
        </p>
      </div>

      {/* Grid — fills viewport */}
      <div className="flex flex-1 px-6 pt-5 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid w-full grid-cols-4 grid-rows-3 gap-4"
        >
          {productLines.map((product, index) => (
            <motion.button
              key={product.id}
              variants={itemVariants}
              onClick={() => setSelected(product.id)}
              className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-5 shadow-md transition-transform active:scale-[0.96]"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-xl ${iconColors[index]}`}
              >
                {productIcons[product.id]}
              </div>
              <span className="font-display text-center text-lg font-bold leading-tight text-dark">
                {product.name}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Detail Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" as const }}
              className="mx-8 w-full max-w-xl rounded-3xl bg-white p-10 shadow-2xl"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                {productIcons[selectedProduct.id]}
              </div>
              <h2 className="font-display text-3xl font-bold text-dark">
                {selectedProduct.name}
              </h2>
              <p className="font-body mt-4 text-lg leading-relaxed text-muted">
                {selectedProduct.description}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="mt-8 h-14 w-full rounded-xl bg-primary font-body text-lg font-semibold text-white active:bg-secondary"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <NavBar />
    </motion.div>
  );
}

/* ── SVG Icons ────────────────────────────────────────── */

function BoxIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function ClamshellIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}

function FilmIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 8h20" />
    </svg>
  );
}

function LinerIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="16" height="12" rx="1" />
      <path d="M4 10h16" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function CornerIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 20 4 4 20 4" />
      <path d="M4 4l6 6" />
    </svg>
  );
}

function WrapIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="3" x2="12" y2="8" />
      <line x1="12" y1="16" x2="12" y2="21" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ShrinkIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 14 10 14 10 20" />
      <polyline points="20 10 14 10 14 4" />
      <line x1="14" y1="10" x2="21" y2="3" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  );
}

function TrayIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  );
}

function OverwrapIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="8" width="18" height="8" rx="1" />
      <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      <path d="M7 16v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2" />
    </svg>
  );
}
