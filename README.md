# TomaForma3D

Site institucional em Next.js 15 (App Router) + Tailwind v4 + Motion. Sem shadcn.

## Rodar

```bash
npm install
npm run dev
```

## Onde editar

- `lib/site.ts`: WhatsApp, e-mail, Instagram, cidades atendidas, link do portfólio, nome da designer.
- `lib/segments.ts`: segmentos, produtos, palavras-chave de SEO e imagem de cada um.
- `lib/faq.ts`: perguntas frequentes (viram schema FAQPage para o Google).
- `IMAGENS.md`: onde colocar as imagens e prompts sugeridos.

Para adicionar um segmento, inclua um objeto em `lib/segments.ts`. A página `/segmentos/<slug>`, o explorador da home, o formulário, o rodapé e o sitemap são gerados a partir dele.

## SEO incluído

- Title, description, keywords, canonical e Open Graph por página.
- Uma página estática por segmento com H1 no formato de busca ("Impressão 3D para tatuadores").
- JSON-LD: LocalBusiness, FAQPage, Service com catálogo e BreadcrumbList.
- `sitemap.xml` e `robots.txt` automáticos.
- Links internos entre segmentos no rodapé e em cada página.

Depois do deploy: cadastre o domínio no Google Search Console, envie o sitemap e crie o Perfil da Empresa no Google. É o que mais pesa em buscas como "impressão 3D Barueri" e "impressão 3D perto de mim".

## Deploy na Vercel

1. Suba para um repositório e importe na Vercel.
2. Defina `NEXT_PUBLIC_SITE_URL` com o domínio final (ex.: `https://personaliza3d.com.br`).
