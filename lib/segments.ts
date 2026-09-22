export type Mode = "personalidade" | "quantidade" | "ambos";

export type Segment = {
  slug: string;
  name: string;
  audience: string;
  color: string;
  mode: Mode;
  headline: string;
  problem: string;
  products: { name: string; desc: string }[];
  keywords: string[];
  metaDescription: string;
  /** Ex.: "/images/segmentos/tatuadores.jpg" — veja IMAGENS.md */
  image?: string;
};

export const modeLabel: Record<Mode, string> = {
  personalidade: "Com a cara do seu negócio",
  quantidade: "Produção em quantidade",
  ambos: "Personalizado ou em quantidade",
};

export const segments: Segment[] = [
  {
    slug: "tatuadores",
    name: "Estúdios de tatuagem",
    audience: "tatuadores",
    color: "#7c5cff",
    mode: "ambos",
    headline: "Bancada organizada, com a identidade do seu estúdio",
    problem:
      "Rotativa apoiada no papel-toalha, cartuchos misturados, celular de referência escorregando. Desenhamos suportes para a sua bancada, no tamanho do seu equipamento e com o nome do estúdio.",
    products: [
      { name: "Suporte para máquina rotativa", desc: "Apoio estável para uma ou duas máquinas, com o logo do estúdio." },
      { name: "Organizador de cartuchos", desc: "Divisões por tamanho de agulha, fácil de higienizar." },
      { name: "Base para batoques", desc: "Segura os copinhos de tinta sem tombar durante a sessão." },
      { name: "Suporte de celular para referência", desc: "Ângulo certo para ver o desenho enquanto tatua." },
      { name: "Display de flash e cartões", desc: "Expositor para o balcão com a arte do estúdio." },
    ],
    keywords: [
      "impressão 3D para tatuadores",
      "suporte para máquina de tatuagem",
      "organizador de cartuchos tattoo",
      "acessórios personalizados para estúdio de tatuagem",
    ],
    metaDescription:
      "Suportes para rotativa, organizadores de cartuchos e displays personalizados com o logo do seu estúdio de tatuagem. Impressão 3D em Barueri e Alphaville.",
  },
  {
    slug: "unhas-e-cilios",
    name: "Estúdios de unha e cílios",
    audience: "nail designers e lash designers",
    color: "#e8407a",
    mode: "ambos",
    headline: "Cada pinça e cada esmalte no lugar, com a sua marca",
    problem:
      "Pinças soltas, esmaltes empilhados, fitas de cílios sem apoio. Criamos organizadores no tamanho dos seus produtos, nas cores do seu estúdio.",
    products: [
      { name: "Suporte de pinças", desc: "Pontas protegidas e cada pinça no seu encaixe." },
      { name: "Organizador de esmaltes de parede", desc: "Cores à vista para a cliente escolher." },
      { name: "Apoio para fitas de cílios", desc: "Base inclinada para trabalhar com as fitas na mão." },
      { name: "Porta-cola anti-tombo", desc: "Base pesada que segura o frasco durante o atendimento." },
      { name: "Mostruário de nail art", desc: "Display de tips para apresentar os modelos." },
      { name: "Placa com QR de agendamento", desc: "A cliente aponta a câmera e marca o próximo horário." },
    ],
    keywords: [
      "organizador de esmaltes personalizado",
      "suporte para pinças de cílios",
      "acessórios para lash designer",
      "impressão 3D para estúdio de unhas",
    ],
    metaDescription:
      "Organizadores de esmaltes, suportes de pinças e acessórios para lash e nail designers, personalizados com a sua marca. Impressão 3D em Barueri e Alphaville.",
  },
  {
    slug: "saloes-e-barbearias",
    name: "Salões e barbearias",
    audience: "cabeleireiros e barbeiros",
    color: "#e0901a",
    mode: "ambos",
    headline: "Secador, chapinha e máquina com lugar certo na parede",
    problem:
      "Fio enroscado, secador no chão, bancada sem espaço. Fazemos suportes de parede e organizadores sob medida para o seu equipamento, com a identidade do salão.",
    products: [
      { name: "Suporte de parede para secador", desc: "Encaixe no diâmetro exato do seu secador." },
      { name: "Suporte para chapinha e babyliss", desc: "Apoio resistente ao calor, em PETG." },
      { name: "Porta-pentes e escovas", desc: "Organização por tipo para agilizar o atendimento." },
      { name: "Display de produtos para recepção", desc: "Expõe o que você vende, com o seu logo." },
      { name: "Placa e letreiro do salão", desc: "Identidade na porta, no espelho ou na bancada." },
    ],
    keywords: [
      "suporte de secador de parede",
      "organizador para salão de beleza",
      "acessórios para barbearia personalizados",
      "impressão 3D para salão",
    ],
    metaDescription:
      "Suportes de parede para secador e chapinha, porta-pentes e displays personalizados para salões e barbearias. Impressão 3D em Barueri e Alphaville.",
  },
  {
    slug: "advocacia",
    name: "Escritórios de advocacia",
    audience: "advogados",
    color: "#2f4bff",
    mode: "ambos",
    headline: "Detalhes na mesa que apresentam o escritório antes de você",
    problem:
      "A mesa de reunião é o primeiro contato do cliente com o escritório. Placas, porta-cartões e organizadores com a sua identidade visual deixam o ambiente organizado e profissional.",
    products: [
      { name: "Placa de mesa com nome", desc: "Nome do advogado e logo do escritório em relevo." },
      { name: "Porta-cartões com logo", desc: "Para a recepção e para a mesa de cada sócio." },
      { name: "Suporte de celular e tablet", desc: "Para chamadas e audiências por vídeo." },
      { name: "Organizador de mesa", desc: "Canetas, carimbos e clipes com lugar definido." },
      { name: "Brindes para clientes", desc: "Peças úteis com a marca, produzidas em lote." },
    ],
    keywords: [
      "placa de mesa personalizada advogado",
      "brindes para escritório de advocacia",
      "porta-cartões personalizado",
      "impressão 3D Alphaville",
    ],
    metaDescription:
      "Placas de mesa, porta-cartões e brindes personalizados para escritórios de advocacia. Impressão 3D com a identidade do seu escritório em Alphaville e Barueri.",
  },
  {
    slug: "escritorios-e-empresas",
    name: "Escritórios e empresas",
    audience: "empresas",
    color: "#2f9a52",
    mode: "quantidade",
    headline: "Organização e brindes para o time inteiro, no mesmo padrão",
    problem:
      "Cabo embaixo da mesa, headset pendurado no monitor, sala sem identificação. Produzimos o mesmo item para todas as estações de trabalho, com a marca da empresa.",
    products: [
      { name: "Organizador de cabos", desc: "Para mesa, parede ou embaixo do tampo." },
      { name: "Suporte de notebook e headset", desc: "Ergonomia e mesa livre, no mesmo padrão para todos." },
      { name: "Identificação de salas e mesas", desc: "Placas com nome, número ou QR para reserva." },
      { name: "Brindes corporativos", desc: "Itens úteis para eventos, onboarding e clientes." },
      { name: "Peças de reposição", desc: "Tampas, pés, travas e encaixes que ninguém vende mais." },
    ],
    keywords: [
      "brindes corporativos personalizados Alphaville",
      "organizador de cabos personalizado",
      "suporte para headset",
      "impressão 3D para empresas Barueri",
    ],
    metaDescription:
      "Organizadores de cabos, suportes, identificação de salas e brindes corporativos produzidos em quantidade. Impressão 3D para empresas em Alphaville e Barueri.",
  },
  {
    slug: "engenharia",
    name: "Engenharia e indústria",
    audience: "engenheiros",
    color: "#149ad0",
    mode: "quantidade",
    headline: "A peça que você precisa amanhã, sem esperar ferramental",
    problem:
      "Gabarito para a linha, suporte para um teste, peça fora de linha. Modelamos a partir do seu desenho, da sua medida ou da peça quebrada, e produzimos de uma unidade a pequenos lotes.",
    products: [
      { name: "Gabaritos e dispositivos de montagem", desc: "Posicionamento e conferência na linha de produção." },
      { name: "Suportes e fixações", desc: "Para sensores, ferramentas e equipamentos." },
      { name: "Peças de reposição", desc: "Engenharia reversa de peças sem fornecedor." },
      { name: "Protótipos funcionais", desc: "Teste de encaixe e forma antes de investir em molde." },
      { name: "Pequenos lotes", desc: "Séries curtas sem custo de molde." },
    ],
    keywords: [
      "prototipagem rápida Barueri",
      "gabaritos em impressão 3D",
      "peças de reposição impressão 3D",
      "engenharia reversa de peças",
    ],
    metaDescription:
      "Prototipagem rápida, gabaritos, fixações e peças de reposição por engenharia reversa. Impressão 3D para engenharia e indústria em Barueri e Alphaville.",
  },
  {
    slug: "automacao-e-eletronica",
    name: "Automação e eletrônica",
    audience: "automatizadores",
    color: "#0e9e9a",
    mode: "quantidade",
    headline: "Caixas e suportes no tamanho exato da sua placa",
    problem:
      "Caixa genérica que não fecha, furo feito na furadeira, sensor preso com fita. Desenhamos o gabinete e os suportes a partir da sua placa e dos seus conectores.",
    products: [
      { name: "Caixas para ESP32 e Arduino", desc: "Recortes para portas, LEDs e ventilação." },
      { name: "Suportes para sensores e câmeras", desc: "Ângulo e altura definidos no projeto." },
      { name: "Tampas e painéis com recortes", desc: "Displays, botões e prensa-cabos no lugar certo." },
      { name: "Adaptadores para trilho DIN", desc: "Para fixar módulos e fontes no quadro." },
      { name: "Protótipos de produto", desc: "Da primeira versão ao lote piloto." },
    ],
    keywords: [
      "case para ESP32",
      "caixa para Arduino personalizada",
      "suporte para sensor impressão 3D",
      "gabinete para eletrônica sob medida",
    ],
    metaDescription:
      "Caixas para ESP32 e Arduino, suportes para sensores e câmeras, painéis e adaptadores DIN sob medida. Impressão 3D para automação em Barueri e Alphaville.",
  },
  {
    slug: "arquitetura",
    name: "Arquitetura e interiores",
    audience: "arquitetos",
    color: "#a8804a",
    mode: "personalidade",
    headline: "Maquetes e estudos que o cliente consegue segurar na mão",
    problem:
      "O render convence, mas o volume físico fecha o projeto. Imprimimos maquetes, estudos volumétricos e detalhes a partir do seu modelo.",
    products: [
      { name: "Maquetes de apresentação", desc: "A partir do seu arquivo do SketchUp, Revit ou Rhino." },
      { name: "Estudos volumétricos", desc: "Versões rápidas para comparar alternativas." },
      { name: "Detalhes em escala", desc: "Mobiliário, fachada e elementos construtivos." },
      { name: "Protótipos de peças decorativas", desc: "Puxadores, luminárias e acabamentos sob medida." },
      { name: "Placas e letreiros", desc: "Identidade para o escritório e para as obras." },
    ],
    keywords: [
      "maquete impressão 3D",
      "maquete arquitetônica Barueri",
      "estudo volumétrico impressão 3D",
      "impressão 3D para arquitetos",
    ],
    metaDescription:
      "Maquetes arquitetônicas, estudos volumétricos e protótipos de peças decorativas em impressão 3D para arquitetos em Barueri, Alphaville e São Paulo.",
  },
];

export function getSegment(slug: string) {
  return segments.find((s) => s.slug === slug);
}
