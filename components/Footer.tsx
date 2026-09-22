import Link from "next/link";
import Logo from "./Logo";
import { segments } from "@/lib/segments";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Logo dark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
            Impressão 3D, modelagem e peças personalizadas em {site.city} e Alphaville. Atendemos{" "}
            {site.areaServed.join(", ")} e enviamos para todo o Brasil.
          </p>
        </div>
        <nav aria-label="Segmentos">
          <h2 className="text-sm font-semibold text-white/80">Impressão 3D para</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {segments.map((s) => (
              <li key={s.slug}>
                <Link href={`/segmentos/${s.slug}`} className="text-white/60 transition-colors hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="text-sm font-semibold text-white/80">Contato</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>
              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-white/40">
          © {new Date().getFullYear()} {site.name}. {site.city}, {site.state}.
        </p>
      </div>
    </footer>
  );
}
