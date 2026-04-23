"use client";

interface HabitatFeatureProps {
  title: string;
  description: string;
  isActive: boolean;
  onTap: () => void;
  position: { top: string; left: string };
}

export default function HabitatFeature({
  title,
  description,
  isActive,
  onTap,
  position,
}: HabitatFeatureProps) {
  return (
    <div className="absolute" style={{ top: position.top, left: position.left }}>
      {/* Pulsing hotspot */}
      <button
        onClick={onTap}
        className="relative flex h-12 w-12 items-center justify-center"
      >
        <span className="absolute h-12 w-12 animate-ping rounded-full bg-accent/40" />
        <span className="relative h-6 w-6 rounded-full border-2 border-white bg-accent shadow-lg" />
      </button>

      {/* Feature detail panel */}
      {isActive && (
        <div
          className="absolute left-14 top-1/2 z-10 w-72 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="font-display text-xl font-bold text-dark">{title}</h3>
          <p className="font-body mt-2 text-sm leading-relaxed text-muted">
            {description}
          </p>
          <button
            onClick={onTap}
            className="mt-4 text-sm font-semibold text-accent"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
