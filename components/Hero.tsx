import Link from "next/link";
import PrintAnimation from "./PrintAnimation";

export default function Hero() {
  return (
    <section className="on-dark relative overflow-hidden bg-ink text-white">
      <div className="plate-grid-dark absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-20 pt-14 md:grid-cols-[1.1fr_1fr] md:pb-28 md:pt-20">
        <div>
          <h1 className="display rise text-[clamp(2.4rem,5.4vw,4.2rem)] font-extrabold leading-[0.97]">
            Impressão 3D sob medida com a cara do seu negócio
          </h1>
          <p className="rise rise-2 mt-7 max-w-xl text-lg leading-relaxed text-white/75">
            Suportes, organizadores, placas com logo e peças técnicas que resolvem um problema real da sua rotina.
            Modelamos, imprimimos e entregamos em Barueri, Alphaville e região, de uma peça a centenas.
          </p>
          <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
            <Link
              href="/#orcamento"
              className="rounded-full bg-white px-7 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              Pedir orçamento
            </Link>
            <Link
              href="/#segmentos"
              className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition-colors hover:border-white/60"
            >
              Ver soluções por segmento
            </Link>
          </div>
          <ul className="rise rise-3 mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6 text-sm text-white/65">
            <li>A partir de 1 unidade</li>
            <li>Modelagem 3D própria</li>
            <li>Entrega na região</li>
          </ul>
        </div>
        <PrintAnimation />
      </div>
    </section>
  );
}
