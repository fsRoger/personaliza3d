"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { segments, modeLabel } from "@/lib/segments";
import ImageSlot from "./ImageSlot";

export default function SegmentExplorer() {
  const [active, setActive] = useState(segments[0].slug);
  const seg = segments.find((s) => s.slug === active)!;

  return (
    <section id="segmentos" className="plate-grid py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.02]">
            Soluções em impressão 3D para o seu segmento
          </h2>
          <p className="mt-4 text-lg text-ink-2">
            Escolha o seu tipo de negócio e veja o que já fazemos. Se não estiver aqui, a gente desenha.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-[260px_1fr]">
          <div
            role="tablist"
            aria-label="Segmentos"
            aria-orientation="vertical"
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-col md:overflow-visible md:px-0"
          >
            {segments.map((s) => {
              const selected = s.slug === active;
              return (
                <button
                  key={s.slug}
                  role="tab"
                  id={`tab-${s.slug}`}
                  aria-selected={selected}
                  aria-controls="painel-segmento"
                  onClick={() => setActive(s.slug)}
                  className={`relative flex shrink-0 items-center gap-3 rounded-full px-4 py-2.5 text-left text-sm font-semibold transition-colors md:rounded-xl md:py-3 ${
                    selected ? "text-white" : "bg-white/70 text-ink-2 hover:bg-white hover:text-ink"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="seg-pill"
                      className="absolute inset-0 rounded-full md:rounded-xl"
                      style={{ background: s.color }}
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  )}
                  <span className="relative inline-block h-2.5 w-2.5 rounded-full" style={{ background: selected ? "#fff" : s.color }} />
                  <span className="relative">{s.name}</span>
                </button>
              );
            })}
          </div>

          <div id="painel-segmento" role="tabpanel" aria-labelledby={`tab-${seg.slug}`} className="min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.article
                key={seg.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="overflow-hidden rounded-[28px] bg-white shadow-[0_30px_60px_-40px_rgba(23,28,51,0.45)]"
              >
                <div className="grid lg:grid-cols-[1.1fr_1fr]">
                  <div className="p-7 md:p-10">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ background: `${seg.color}1a`, color: seg.color }}
                    >
                      {modeLabel[seg.mode]}
                    </span>
                    <h3 className="display mt-4 text-2xl font-bold leading-tight md:text-3xl" style={{ fontStretch: "112%" }}>
                      {seg.headline}
                    </h3>
                    <p className="mt-4 leading-relaxed text-ink-2">{seg.problem}</p>
                    <ul className="mt-6 space-y-3">
                      {seg.products.slice(0, 4).map((p) => (
                        <li key={p.name} className="flex gap-3">
                          <span className="mt-2 inline-block h-1.5 w-4 shrink-0 rounded-full" style={{ background: seg.color }} />
                          <span>
                            <span className="font-semibold">{p.name}.</span>{" "}
                            <span className="text-ink-2">{p.desc}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/segmentos/${seg.slug}`}
                      className="mt-8 inline-block rounded-full px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                      style={{ background: seg.color }}
                    >
                      Ver tudo para {seg.audience}
                    </Link>
                  </div>
                  <ImageSlot
                    src={seg.image}
                    alt={`Peças em impressão 3D para ${seg.audience}`}
                    label={seg.name}
                    color={seg.color}
                    className="min-h-64 lg:min-h-full"
                  />
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
