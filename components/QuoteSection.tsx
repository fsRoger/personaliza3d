import QuoteForm from "./QuoteForm";
import { site } from "@/lib/site";

export default function QuoteSection({ defaultSegment, title }: { defaultSegment?: string; title?: string }) {
  return (
    <section id="orcamento" className="plate-grid py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="rounded-[32px] bg-white p-7 shadow-[0_30px_60px_-40px_rgba(23,28,51,0.45)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <h2 className="display text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.02]">
                {title ?? "Peça seu orçamento de impressão 3D"}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-2">
                Preencha e a mensagem abre pronta no WhatsApp. Respondemos com preço, prazo e, se precisar, uma proposta
                de modelagem.
              </p>
              <p className="mt-8 text-sm text-ink-2">
                Prefere e-mail?{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-ink underline decoration-cobalt decoration-2 underline-offset-4">
                  {site.email}
                </a>
              </p>
            </div>
            <QuoteForm defaultSegment={defaultSegment} />
          </div>
        </div>
      </div>
    </section>
  );
}
