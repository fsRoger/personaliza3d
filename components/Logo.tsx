export function LogoMark({ className = "" }: { className?: string }) {
  // Três camadas deslocadas: a peça sendo impressa
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="4" y="21" width="24" height="7" rx="2" fill="#2f4bff" />
      <rect x="7" y="13" width="20" height="7" rx="2" fill="#e8407a" />
      <rect x="10" y="5" width="16" height="7" rx="2" fill="#e0901a" />
    </svg>
  );
}

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <LogoMark className="h-7 w-7" />
      <span
        className={`display text-lg font-bold tracking-tight ${dark ? "text-white" : "text-ink"}`}
        style={{ fontStretch: "115%" }}
      >
        personaliza3d
      </span>
    </span>
  );
}
