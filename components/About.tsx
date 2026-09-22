import { site } from "@/lib/site";
import ImageSlot from "./ImageSlot";

export default function About() {
  return (
    <section id="sobre" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_1.2fr] md:items-center">
        <ImageSlot
          alt="Oficina da Personaliza3D com impressora 3D e peças prontas"
          label="Oficina e equipe"
          color="#2f4bff"
          className="aspect-[4/5] rounded-[28px]"
        />
        <div>
          <h2 className="display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.02]">
            Quem faz a Personaliza3D
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            A Personaliza3D nasceu em Barueri para ocupar o espaço entre o hobby e a indústria: negócios que precisam de
            uma peça certa, rápido, sem comprar máquina nem encomendar molde.
          </p>

          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-plate p-6">
              <dt className="display text-lg font-bold" style={{ fontStretch: "110%" }}>
                {site.founder.name}
              </dt>
              <dd className="mt-1 text-sm text-ink-2">{site.founder.role}</dd>
              <dd className="mt-3 text-sm leading-relaxed text-ink-2">
                Cuida da produção, dos processos e da tecnologia por trás de cada pedido.
              </dd>
              <dd className="mt-4">
                <a
                  href={site.founder.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-ink underline decoration-cobalt decoration-2 underline-offset-4"
                >
                  Conheça o portfólio de software
                </a>
              </dd>
            </div>
            <div className="rounded-2xl bg-plate p-6">
              <dt className="display text-lg font-bold" style={{ fontStretch: "110%" }}>
                {site.designer.name}
              </dt>
              <dd className="mt-1 text-sm text-ink-2">{site.designer.role}</dd>
              <dd className="mt-3 text-sm leading-relaxed text-ink-2">
                Transforma a foto, o rabisco ou a peça quebrada no modelo 3D que vai para a impressora.
              </dd>
            </div>
          </dl>

          <p className="mt-8 text-sm leading-relaxed text-ink-2">
            Sua peça precisa conversar com um sistema, como uma placa com QR que abre sua agenda ou um painel para
            sensores? Também resolvemos essa parte.
          </p>
        </div>
      </div>
    </section>
  );
}
