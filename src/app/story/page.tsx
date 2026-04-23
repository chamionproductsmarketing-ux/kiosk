"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { timelineMilestones } from "@/lib/constants";
import TimelineItem from "@/components/TimelineItem";
import NavBar from "@/components/NavBar";

export default function StoryPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex h-full flex-col bg-primary"
    >
      {/* Header */}
      <div className="texture-overlay relative overflow-hidden px-8 pt-8 pb-4 text-center">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/8" />
        <p className="font-body relative z-10 text-sm font-semibold uppercase tracking-widest text-accent">
          Since 1952
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-display relative z-10 mt-2 text-5xl font-bold text-white"
        >
          Our Story
        </motion.h1>
        <p className="font-body relative z-10 mt-2 text-lg text-white/60">
          Over 70 years of produce packaging expertise
        </p>
      </div>

      {/* Swipe hint */}
      <div className="flex items-center justify-center gap-3 py-3 text-white/40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span className="font-body text-base">Swipe to explore our journey</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>

      {/* Timeline — vertically centered */}
      <div className="relative flex flex-1 items-center pb-24">
        {/* Horizontal connecting line */}
        <div className="absolute left-12 right-12 top-[calc(50%-40px)] h-[3px] rounded-full bg-white/10">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-accent/40 to-transparent" />
        </div>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="flex h-full w-full items-center gap-8 overflow-x-auto px-12 scrollbar-hide"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {timelineMilestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
              className="flex-shrink-0"
              style={{ scrollSnapAlign: "center" }}
            >
              <TimelineItem
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
              />
            </motion.div>
          ))}

          {/* End spacer */}
          <div className="w-12 flex-shrink-0" />
        </div>
      </div>

      <NavBar />
    </motion.div>
  );
}
