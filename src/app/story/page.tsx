"use client";

import { useRef } from "react";
import { timelineMilestones } from "@/lib/constants";
import TimelineItem from "@/components/TimelineItem";
import NavBar from "@/components/NavBar";

export default function StoryPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex h-full flex-col bg-primary">
      {/* Header */}
      <div className="texture-overlay px-8 pt-8 pb-6 text-center">
        <p className="font-body text-sm font-semibold uppercase tracking-widest text-accent">
          Since 1952
        </p>
        <h1 className="font-display mt-2 text-5xl font-bold text-white">
          Our Story
        </h1>
        <p className="font-body mt-3 text-lg text-white/70">
          Over 70 years of produce packaging expertise
        </p>
      </div>

      {/* Swipe hint */}
      <div className="flex items-center justify-center gap-2 py-3 text-white/40">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        <span className="font-body text-sm">Swipe to explore</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-1 items-center pb-24">
        {/* Horizontal connecting line */}
        <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-white/10" />

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
            <div
              key={milestone.year}
              className="flex-shrink-0 scroll-snap-align-center"
              style={{ scrollSnapAlign: "center" }}
            >
              <TimelineItem
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                isLast={index === timelineMilestones.length - 1}
              />
            </div>
          ))}

          {/* End spacer */}
          <div className="w-12 flex-shrink-0" />
        </div>
      </div>

      <NavBar />
    </div>
  );
}
