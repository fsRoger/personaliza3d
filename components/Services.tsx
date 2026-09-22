const services = [
  {
    have: "Um arquivo STL, STEP ou OBJ",
    get: "Imprimimos com o material e o acabamento certos para o uso da peça.",
    title: "Impressão 3D sob encomenda",
  },
  {
    have: "Uma ideia, um desenho ou uma foto",
    get: "Nossa designer modela a peça em 3D e você aprova antes da produção.",
    title: "Modelagem 3D",
  },
  {
    have: "Uma peça quebrada que ninguém vende",
    get: "Medimos, redesenhamos e imprimimos uma nova, testando o encaixe.",
    title: "Engenharia reversa",
  },
  {
    have: "Um produto para testar",
    get: "Protótipos funcionais para validar forma e encaixe antes do molde.",
    title: "Prototipagem rápida",
  },
  {
    have: "Uma peça aprovada que precisa de volume",
    get: "Produzimos pequenos lotes com o mesmo padrão, sem custo de molde.",
    title: "Produção em pequenos lotes",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.02]">
            Serviços de impressão 3D e modelagem
          </h2>
          <p className="mt-4 text-lg text-ink-2">Você chega com o que tem. A gente cuida do resto.</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[28px] border border-ink/10">
          <div className="hidden grid-cols-[1fr_1.4fr_1fr] gap-6 bg-plate px-8 py-4 text-sm font-semibold text-ink-2 md:grid">
            <span>Você tem</span>
            <span>O que fazemos</span>
            <span>Serviço</span>
          </div>
          <ul>
            {services.map((s) => (
              <li
                key={s.title}
                className="grid gap-2 border-t border-ink/10 px-6 py-6 transition-colors first:border-t-0 hover:bg-plate/60 md:grid-cols-[1fr_1.4fr_1fr] md:items-center md:gap-6 md:px-8 md:first:border-t"
              >
                <p className="display text-lg font-bold" style={{ fontStretch: "108%" }}>
                  {s.have}
                </p>
                <p className="leading-relaxed text-ink-2">{s.get}</p>
                <h3 className="text-sm font-semibold text-cobalt md:text-base">{s.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
