"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SoloraLogo from "@/components/SoloraLogo";
import NavBar from "@/components/NavBar";

const cards = [
  {
    href: "/products",
    title: "Our Products",
    subtitle: "Clamshells, trays, films & more — everything to protect your produce",
    bg: "bg-primary",
    text: "text-white",
    subtitleText: "text-white/60",
    iconBg: "bg-white/15",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    href: "/habitat",
    title: "Habitat™ Trays",
    subtitle: "Our flagship innovation — 85% stronger seal for superior produce protection",
    bg: "bg-white",
    text: "text-dark",
    subtitleText: "text-muted",
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e8712b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    href: "/story",
    title: "Our Story",
    subtitle: "From 1952 in Vernon, CA to a nationwide packaging leader",
    bg: "bg-white",
    text: "text-dark",
    subtitleText: "text-muted",
    iconBg: "bg-primary/10",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a5b2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    href: "/why-solora",
    title: "Why Solora Fresh",
    subtitle: "Design, technology & sustainability — discover our difference",
    bg: "bg-secondary",
    text: "text-white",
    subtitleText: "text-white/60",
    iconBg: "bg-white/15",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    href: "/contact",
    title: "Get in Touch",
    subtitle: "Connect with our packaging experts at the show",
    bg: "bg-white",
    text: "text-dark",
    subtitleText: "text-muted",
    iconBg: "bg-accent/10",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#e8712b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22 6 12 13 2 6" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex h-full flex-col"
    >
      {/* Hero — 42vh with animated gradient */}
      <div className="texture-overlay relative flex min-h-[42vh] flex-col items-center justify-center bg-gradient-to-br from-[#0f3d1e] via-primary to-[#1a6b35] animated-gradient px-8">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/5" />
          <div className="absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-white/5" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <SoloraLogo showHeritage />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="font-body relative z-10 mt-5 text-xl tracking-wide text-white/60"
        >
          Fresh Produce Packaging Solutions
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="font-display relative z-10 mt-3 text-center text-4xl font-semibold leading-snug text-white"
        >
          From Greenhouse to Grocery
          <br />
          with Confidence
        </motion.h2>
      </div>

      {/* Navigation Cards — fill remaining space */}
      <div className="texture-overlay flex flex-1 items-start justify-center bg-cream px-8 pt-8 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid h-full w-full max-w-7xl grid-cols-3 grid-rows-2 gap-5"
        >
          {cards.map((card) => (
            <motion.div
              key={card.href}
              variants={cardVariants}
              className={card.href === "/contact" ? "col-span-1" : ""}
            >
              <Link
                href={card.href}
                className={`flex h-full flex-col justify-center gap-4 rounded-2xl ${card.bg} p-8 shadow-lg transition-transform active:scale-[0.97]`}
              >
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl ${card.iconBg} ${card.text}`}
                >
                  {card.icon}
                </div>
                <div>
                  <h3
                    className={`font-display text-2xl font-bold ${card.text}`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`font-body mt-2 text-base leading-relaxed ${card.subtitleText}`}
                  >
                    {card.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <NavBar />
    </motion.div>
  );
}
