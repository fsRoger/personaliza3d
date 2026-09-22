"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const steps = [
  { title: "Você envia o que tem", text: "Arquivo, foto, medida, desenho ou a peça quebrada. Pelo WhatsApp mesmo." },
  { title: "A gente modela", text: "Desenhamos a peça em 3D, aplicamos sua marca e mostramos antes de imprimir." },
  { title: "Orçamento e amostra", text: "Você aprova preço e prazo. Em lotes, imprimimos uma amostra para conferir." },
  { title: "Produção", text: "Imprimimos no material certo e fazemos o acabamento de cada peça." },
  { title: "Entrega", text: "Levamos em Barueri, Alphaville e região, ou enviamos para todo o Brasil." },
];

export default function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="processo" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.3fr]">
        <div className="md:sticky md:top-28 md:self-start">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.02]">
            Do problema à peça pronta em cinco passos
          </h2>
          <p className="mt-4 text-lg text-ink-2">
            Você não precisa saber nada de 3D. Precisa só explicar o que está atrapalhando.
          </p>
        </div>

        <ol ref={ref} className="relative space-y-10 pl-14">
          <span className="absolute bottom-2 left-[19px] top-2 w-0.5 rounded bg-ink/10" aria-hidden="true" />
          <motion.span
            className="absolute bottom-2 left-[19px] top-2 w-0.5 origin-top rounded bg-cobalt"
            style={{ scaleY }}
            aria-hidden="true"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="display absolute -left-14 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-cobalt bg-plate text-sm font-bold text-cobalt">
                {i + 1}
              </span>
              <h3 className="display text-xl font-bold" style={{ fontStretch: "110%" }}>
                {s.title}
              </h3>
              <p className="mt-2 max-w-md leading-relaxed text-ink-2">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
