export const site = {
  name: "Personaliza3D",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://personaliza3d.vercel.app",
  // Troque pelos dados reais
  whatsapp: "5511999999999",
  email: "contato@personaliza3d.com.br",
  instagram: "https://instagram.com/personaliza3d",
  city: "Barueri",
  state: "SP",
  areaServed: ["Barueri", "Alphaville", "Santana de Parnaíba", "Carapicuíba", "Osasco", "São Paulo"],
  founder: {
    name: "Roger",
    role: "Desenvolvedor full-stack e fundador",
    // Use a URL de produção do portfólio (o link de preview da Vercel pede login)
    portfolio: "https://portifoliorfs-nz0s33343-keykronos-projects.vercel.app/",
  },
  designer: {
    name: "Nossa designer 3D",
    role: "Modelagem e design de produto",
  },
  description:
    "Impressão 3D sob medida em Barueri e Alphaville: suportes, organizadores, placas com logo, protótipos e peças técnicas para empresas, estúdios, salões e engenharia. De 1 peça a centenas.",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
