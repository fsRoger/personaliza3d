import Link from "next/link";

const colors = ["#2f4bff", "#e8407a", "#e0901a", "#0e9e9a", "#7c5cff"];

export default function TwoLines() {
  return (
    <section className="py-24" aria-labelledby="linhas-titulo">
      <div className="mx-auto max-w-6xl px-5">
        <h2 id="linhas-titulo" className="display max-w-3xl text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.02]">
          Uma peça com a sua identidade ou cem iguais para o time todo
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Personalizado */}
          <article className="relative overflow-hidden rounded-[28px] bg-ink p-8 text-white md:p-10">
            <div className="flex h-36 items-end gap-3" aria-hidden="true">
              {colors.map((c, i) => (
                <span
                  key={c}
                  className="block w-full rounded-t-xl"
                  style={{ background: c, height: `${48 + ((i * 37) % 60)}%`, borderRadius: i % 2 ? "14px 14px 4px 4px" : "40px 40px 4px 4px" }}
                />
              ))}
            </div>
            <h3 className="display mt-8 text-2xl font-bold" style={{ fontStretch: "112%" }}>
              Personalizados com a cara do seu negócio
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-white/70">
              Acessórios que resolvem um problema da sua bancada, balcão ou recepção, com logo, nome e cores da marca.
              Cada peça é desenhada para o seu equipamento.
            </p>
            <p className="mt-6 text-sm text-white/55">Ideal para estúdios, salões, clínicas e escritórios.</p>
          </article>

          {/* Quantidade */}
          <article className="relative overflow-hidden rounded-[28px] border border-ink/10 bg-white p-8 md:p-10">
            <div className="grid h-36 grid-cols-10 content-end gap-1.5" aria-hidden="true">
              {Array.from({ length: 40 }).map((_, i) => (
                <span key={i} className="block aspect-square rounded-[5px] bg-cobalt" style={{ opacity: 0.35 + ((i % 10) / 10) * 0.65 }} />
              ))}
            </div>
            <h3 className="display mt-8 text-2xl font-bold" style={{ fontStretch: "112%" }}>
              Produção em quantidade
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-ink-2">
              Brindes corporativos, organizadores para todas as mesas, gabaritos e componentes em lote. Aprovamos uma
              amostra e repetimos o mesmo padrão em todas as unidades.
            </p>
            <p className="mt-6 text-sm text-ink-2">Ideal para empresas, engenharia e automação.</p>
          </article>
        </div>

        <p className="mt-8 text-ink-2">
          Não sabe qual dos dois é o seu caso?{" "}
          <Link href="/#orcamento" className="font-semibold text-ink underline decoration-cobalt decoration-2 underline-offset-4">
            Conte o problema e a gente indica
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
