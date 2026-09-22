import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SegmentExplorer from "@/components/SegmentExplorer";
import TwoLines from "@/components/TwoLines";
import Services from "@/components/Services";
import Process from "@/components/Process";
import LaserSoon from "@/components/LaserSoon";
import About from "@/components/About";
import Faq from "@/components/Faq";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { faq } from "@/lib/faq";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <SegmentExplorer />
        <TwoLines />
        <Services />
        <Process />
        <LaserSoon />
        <About />
        <Faq />
        <QuoteSection />
      </main>
      <Footer />
      <JsonLd data={faqSchema} />
    </>
  );
}
