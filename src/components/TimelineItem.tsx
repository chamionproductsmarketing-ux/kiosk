interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export default function TimelineItem({
  year,
  title,
  description,
}: TimelineItemProps) {
  return (
    <div
      className="flex flex-shrink-0 flex-col items-center"
      style={{ width: 300 }}
    >
      {/* Year badge — larger */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-base font-bold text-white shadow-lg shadow-accent/30">
        {year.slice(0, 4)}
      </div>

      {/* Content card — taller with more padding */}
      <div className="mt-5 w-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
        <h3 className="font-display text-xl font-bold text-white">{title}</h3>
        <p className="font-body mt-3 text-base leading-relaxed text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
}
