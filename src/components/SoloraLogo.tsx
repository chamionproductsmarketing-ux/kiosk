export default function SoloraLogo({ size = "lg" }: { size?: "sm" | "lg" }) {
  const iconSize = size === "lg" ? 48 : 32;
  const textClass =
    size === "lg"
      ? "text-4xl"
      : "text-xl";

  return (
    <div className="flex items-center gap-3">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="24" r="10" fill="#f5a623" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="24"
            y1="24"
            x2={24 + 18 * Math.cos((angle * Math.PI) / 180)}
            y2={24 + 18 * Math.sin((angle * Math.PI) / 180)}
            stroke="#f5a623"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        ))}
      </svg>
      <span className={`font-display ${textClass} font-bold tracking-wide text-white`}>
        SOLORA{" "}
        <span className="font-body font-normal italic">fresh</span>
      </span>
    </div>
  );
}
