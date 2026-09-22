# Imagens do site

Enquanto não houver imagem, cada espaço mostra um placeholder com linhas de camada na cor do segmento.

## Como adicionar

1. Gere a imagem (prompts abaixo) e exporte em .jpg ou .webp, com 1600px no lado maior.
2. Salve em `public/images/...` com o nome indicado.
3. Ative no código:
   - Segmentos: em `lib/segments.ts`, adicione `image: "/images/segmentos/<slug>.jpg"` no segmento.
   - Sobre: em `components/About.tsx`, passe `src="/images/sobre.jpg"` no `<ImageSlot>`.

Para manter consistência, comece todo prompt com o mesmo estilo base.

**Estilo base:** fotografia de produto realista, luz de estúdio suave, fundo liso cinza-azulado claro, profundidade de campo rasa, peça impressa em 3D com linhas de camada levemente visíveis, sem texto, sem marcas reais, proporção 4:3.

| Arquivo | Prompt (depois do estilo base) |
|---|---|
| `segmentos/tatuadores.jpg` | Suporte roxo impresso em 3D segurando uma máquina de tatuagem rotativa sobre bancada de estúdio, organizador de cartuchos ao lado. |
| `segmentos/unhas-e-cilios.jpg` | Organizador de esmaltes rosa impresso em 3D na parede de um estúdio de unhas, suporte de pinças de cílios em primeiro plano. |
| `segmentos/saloes-e-barbearias.jpg` | Suporte de parede âmbar impresso em 3D segurando secador de cabelo e chapinha em salão moderno. |
| `segmentos/advocacia.jpg` | Placa de mesa azul-cobalto impressa em 3D com nome em relevo sobre mesa de madeira de escritório de advocacia, porta-cartões ao lado. |
| `segmentos/escritorios-e-empresas.jpg` | Fileira de suportes de headset verdes idênticos impressos em 3D em estações de trabalho de escritório. |
| `segmentos/engenharia.jpg` | Gabarito técnico azul impresso em 3D posicionando uma peça metálica em bancada industrial, paquímetro ao lado. |
| `segmentos/automacao-e-eletronica.jpg` | Caixa verde-azulada impressa em 3D aberta mostrando placa ESP32 e cabos, com recortes de ventilação. |
| `segmentos/arquitetura.jpg` | Maquete arquitetônica branca e bege impressa em 3D de casa moderna sobre mesa de arquiteto com plantas. |
| `sobre.jpg` | Oficina pequena e organizada com impressora 3D imprimindo, prateleira com rolos de filamento coloridos, peças prontas na bancada, formato retrato 4:5. |
| `og.jpg` (opcional, 1200x630) | Composição com várias peças coloridas impressas em 3D das categorias acima, espaço vazio à esquerda para texto. |

Para usar `og.jpg` como imagem de compartilhamento, salve como `app/opengraph-image.jpg` (o Next detecta sozinho).
