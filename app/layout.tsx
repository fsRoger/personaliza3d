import type { Metadata, Viewport } from "next";
import { Anybody, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

const anybody = Anybody({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-anybody",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Impressão 3D em Barueri e Alphaville | Personaliza3D",
    template: "%s | Personaliza3D",
  },
  description: site.description,
  keywords: [
    "impressão 3D Barueri",
    "impressão 3D Alphaville",
    "impressão 3D sob encomenda",
    "impressão 3D para empresas",
    "peças personalizadas impressão 3D",
    "prototipagem rápida",
    "modelagem 3D",
    "engenharia reversa de peças",
    "brindes corporativos personalizados",
    "acessórios personalizados com logo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: "Impressão 3D sob medida com a cara do seu negócio",
    description: site.description,
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#171c33",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: `+${site.whatsapp}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.state,
    addressCountry: "BR",
  },
  areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
  sameAs: [site.instagram],
  founder: { "@type": "Person", name: site.founder.name, url: site.founder.portfolio },
  knowsAbout: ["Impressão 3D", "Modelagem 3D", "Prototipagem rápida", "Engenharia reversa", "Brindes personalizados"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anybody.variable} ${instrument.variable}`}>
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          Pular para o conteúdo
        </a>
        {children}
        <JsonLd data={orgSchema} />
      </body>
    </html>
  );
}
