interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({
  year,
  title,
  description,
  isLast,
}: TimelineItemProps) {
  return (
    <div className="flex flex-shrink-0 flex-col items-center" style={{ width: 280 }}>
      {/* Year badge */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-lg">
        {year.slice(0, 4)}
      </div>

      {/* Connector line */}
      {!isLast && (
        <div className="h-0.5 w-full bg-white/20 absolute top-7 left-[50%] translate-x-[50%]" />
      )}

      {/* Content card */}
      <div className="mt-4 w-full rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
        <h3 className="font-display text-lg font-bold text-white">{title}</h3>
        <p className="font-body mt-2 text-sm leading-relaxed text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
}
