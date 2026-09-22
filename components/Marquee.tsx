import { segments } from "@/lib/segments";

export default function Marquee() {
  const items = [...segments, ...segments];
  return (
    <div className="marquee-wrap overflow-hidden border-b border-ink/10 bg-white py-5" aria-hidden="true">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {items.map((s, i) => (
          <span key={i} className="display flex items-center gap-3 text-xl font-bold text-ink/80" style={{ fontStretch: "110%" }}>
            <span className="inline-block h-3 w-6 rounded-sm" style={{ background: s.color }} />
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}
