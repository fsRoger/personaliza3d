import { faq } from "@/lib/faq";

export default function Faq() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.5fr]">
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.02]">
          Dúvidas sobre impressão 3D
        </h2>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-6 text-lg font-semibold">
                {f.q}
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 12 12" className="h-3 w-3">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
