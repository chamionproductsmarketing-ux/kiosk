"use client";

import Link from "next/link";
import SoloraLogo from "@/components/SoloraLogo";
import NavBar from "@/components/NavBar";

const cards = [
  {
    href: "/products",
    title: "Our Products",
    subtitle: "12 packaging categories",
    gradient: "from-secondary to-primary",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    href: "/habitat",
    title: "Habitat™ Trays",
    subtitle: "Our flagship innovation",
    gradient: "from-accent to-light-accent",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    href: "/story",
    title: "Our Story",
    subtitle: "Since 1952",
    gradient: "from-primary to-secondary",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    href: "/why-solora",
    title: "Why Solora Fresh",
    subtitle: "Our difference",
    gradient: "from-secondary to-accent",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    href: "/contact",
    title: "Get in Touch",
    subtitle: "Let's connect",
    gradient: "from-accent to-primary",
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22 6 12 13 2 6" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      {/* Hero */}
      <div className="texture-overlay relative flex flex-col items-center justify-center bg-primary px-8 pt-12 pb-10">
        <SoloraLogo />
        <p className="font-body mt-4 text-lg tracking-wide text-white/70">
          Fresh Produce Packaging Solutions
        </p>
        <h2 className="font-display mt-3 text-center text-3xl font-semibold text-white">
          From Greenhouse to Grocery with Confidence
        </h2>
      </div>

      {/* Navigation Cards */}
      <div className="flex flex-1 items-center justify-center bg-cream px-8 pb-24">
        <div className="grid w-full max-w-6xl grid-cols-5 gap-5">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group flex flex-col items-center justify-center gap-4 rounded-2xl bg-white p-8 shadow-md transition-transform active:scale-[0.97]"
            >
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white`}
              >
                {card.icon}
              </div>
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-dark">
                  {card.title}
                </h3>
                <p className="font-body mt-1 text-sm text-muted">
                  {card.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <NavBar />
    </div>
  );
}
