import { whatsappLink } from "@/lib/site";

const materials = [
  { name: "Madeira", color: "#b08850" },
  { name: "Acrílico", color: "#9fd8ff" },
  { name: "Metal", color: "#b9bfcc" },
];

export default function LaserSoon() {
  return (
    <section className="on-dark bg-ink py-20 text-white" aria-labelledby="laser-titulo">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">Em breve</span>
          <h2 id="laser-titulo" className="display mt-4 text-[clamp(1.8rem,3.4vw,2.8rem)] font-extrabold leading-[1.05]">
            Corte e gravação a laser em madeira, acrílico e metal
          </h2>
          <p className="mt-4 max-w-xl text-lg text-white/70">
            Placas, crachás, brindes gravados e peças cortadas sob medida, para empresas e para presentes pessoais.
          </p>
          <a
            href={whatsappLink("Olá! Quero ser avisado quando o corte e gravação a laser estiver disponível.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Quero ser avisado
          </a>
        </div>
        <ul className="grid grid-cols-3 gap-3" aria-label="Materiais">
          {materials.map((m) => (
            <li key={m.name} className="rounded-2xl border border-white/10 p-4">
              <span
                className="block aspect-square rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${m.color}, ${m.color}88)`,
                  boxShadow: "inset 0 0 0 1px rgba(255,255,255,.15)",
                }}
              />
              <span className="mt-3 block text-sm text-white/75">{m.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
