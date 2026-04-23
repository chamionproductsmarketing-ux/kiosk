"use client";

interface ProductCardProps {
  name: string;
  icon: React.ReactNode;
  onTap: () => void;
}

export default function ProductCard({ name, icon, onTap }: ProductCardProps) {
  return (
    <button
      onClick={onTap}
      className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white p-6 shadow-md transition-transform active:scale-[0.96]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <span className="font-display text-center text-base font-semibold text-dark leading-tight">
        {name}
      </span>
    </button>
  );
}
