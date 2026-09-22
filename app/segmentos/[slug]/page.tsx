import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteSection from "@/components/QuoteSection";
import ImageSlot from "@/components/ImageSlot";
import JsonLd from "@/components/JsonLd";
import { getSegment, modeLabel, segments } from "@/lib/segments";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return segments.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const seg = getSegment(slug);
  if (!seg) return {};
  const title = `Impressão 3D para ${seg.audience} em Barueri e Alphaville`;
  return {
    title,
    description: seg.metaDescription,
    keywords: seg.keywords,
    alternates: { canonical: `/segmentos/${seg.slug}` },
    openGraph: { title, description: seg.metaDescription, url: `/segmentos/${seg.slug}` },
  };
}

export default async function SegmentPage({ params }: Props) {
  const { slug } = await params;
  const seg = getSegment(slug);
  if (!seg) notFound();

  const others = segments.filter((s) => s.slug !== seg.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Impressão 3D para ${seg.audience}`,
    description: seg.metaDescription,
    provider: { "@type": "LocalBusiness", name: site.name, url: site.url },
    areaServed: site.areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: seg.name,
      itemListElement: seg.products.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Product", name: p.name, description: p.desc },
      })),
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: site.url },
      { "@type": "ListItem", position: 2, name: seg.name, item: `${site.url}/segmentos/${seg.slug}` },
    ],
  };

  return (
    <>
      <Header />
      <main id="conteudo">
        <section className="on-dark relative overflow-hidden bg-ink text-white">
          <div className="plate-grid-dark absolute inset-0" aria-hidden="true" />
          <div
            className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
            style={{ background: seg.color }}
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 md:grid-cols-[1.2fr_1fr] md:pt-16">
            <div>
              <nav aria-label="Trilha" className="text-sm text-white/55">
                <Link href="/" className="hover:text-white">
                  Início
                </Link>
                <span className="mx-2">/</span>
                <Link href="/#segmentos" className="hover:text-white">
                  Soluções
                </Link>
              </nav>
              <h1 className="display rise mt-6 text-[clamp(2.3rem,5.2vw,4rem)] font-extrabold leading-[0.98]">
                Impressão 3D para {seg.audience}
              </h1>
              <p className="rise rise-2 mt-6 text-xl font-semibold" style={{ color: `color-mix(in srgb, ${seg.color} 65%, white)` }}>
                {seg.headline}
              </p>
              <p className="rise rise-2 mt-4 max-w-xl text-lg leading-relaxed text-white/75">{seg.problem}</p>
              <div className="rise rise-3 mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#orcamento"
                  className="rounded-full px-7 py-3.5 font-semibold text-white transition-transform hover:-translate-y-0.5"
                  style={{ background: seg.color }}
                >
                  Pedir orçamento
                </Link>
                <span className="text-sm text-white/60">{modeLabel[seg.mode]}</span>
              </div>
            </div>
            <ImageSlot
              src={seg.image}
              alt={`Peças em impressão 3D para ${seg.audience}`}
              label={seg.name}
              color={seg.color}
              className="aspect-[4/3] rounded-[28px] border border-white/10"
              priority
            />
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="display max-w-2xl text-[clamp(1.8rem,3.6vw,2.8rem)] font-extrabold leading-[1.05]">
              O que fazemos para {seg.audience}
            </h2>
            <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {seg.products.map((p) => (
                <li key={p.name}>
                  <span className="block h-1.5 w-10 rounded-full" style={{ background: seg.color }} aria-hidden="true" />
                  <h3 className="display mt-4 text-xl font-bold" style={{ fontStretch: "108%" }}>
                    {p.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-ink-2">{p.desc}</p>
                </li>
              ))}
            </ul>
            <p className="mt-14 max-w-2xl text-ink-2">
              Precisa de algo que não está na lista? Todas as peças são desenhadas sob medida: conte o problema e a
              gente cria a solução, com a sua marca, em uma unidade ou em lote.
            </p>
          </div>
        </section>

        <QuoteSection defaultSegment={seg.slug} title={`Orçamento de impressão 3D para ${seg.audience}`} />

        <section className="bg-white py-20" aria-labelledby="outros">
          <div className="mx-auto max-w-6xl px-5">
            <h2 id="outros" className="display text-2xl font-bold" style={{ fontStretch: "110%" }}>
              Também atendemos
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {others.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/segmentos/${s.slug}`}
                    className="flex items-center gap-2 rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink-2 transition-colors hover:border-ink/40 hover:text-ink"
                  >
                    <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumb} />
    </>
  );
}
