export type Product = {
  slug: string
  nome: string
  descricao: string
  composicao: string
  preco: number
  precoAntigo?: number
  tamanhos: string[]
  cores: string[]
  imagens: string[]
}

export const products: Product[] = [
  {
    slug: 'bermuda-jeans',
    nome: 'Bermuda Jeans Tradicional',
    descricao: 'Bermuda jeans masculina, lavagem clara, corte reto.',
    composicao: '100% algodão',
    preco: 35,
    tamanhos: ['38', '40', '42', '44', '46'],
    cores: ['Jeans claro'],
    imagens: Array.from({ length: 9 }, (_, i) => `/produtos/bermuda-jeans/${i + 1}.png`),
  },
  {
    slug: 'bermuda-jeans-elastano',
    nome: 'Bermuda Jeans com Elastano',
    descricao: 'Bermuda jeans masculina, lavagem escura, com elastano pra maior conforto e caimento.',
    composicao: '98% algodão, 2% elastano',
    preco: 35,
    tamanhos: ['38', '40', '42', '44', '46'],
    cores: ['Jeans escuro'],
    imagens: Array.from({ length: 7 }, (_, i) => `/produtos/bermuda-jeans-elastano/${i + 1}.png`),
  },
  {
    slug: 'bermuda-sarja',
    nome: 'Bermuda Sarja Tradicional',
    descricao: 'Bermuda de sarja masculina, corte clássico, ótimo giro em loja.',
    composicao: '100% algodão',
    preco: 27,
    precoAntigo: 30,
    tamanhos: ['38', '40', '42', '44', '46'],
    cores: ['Caqui', 'Bege', 'Preto', 'Verde militar', 'Azul marinho', 'Vinho'],
    imagens: Array.from({ length: 10 }, (_, i) => `/produtos/bermuda-sarja/${i + 1}.jpg`),
  },
  {
    slug: 'bermuda-sarja-elastano',
    nome: 'Bermuda Sarja com Elastano',
    descricao: 'Bermuda de sarja masculina com elastano, mais elasticidade e conforto no uso diário.',
    composicao: 'Sarja com elastano',
    preco: 35,
    tamanhos: ['38', '40', '42', '44', '46'],
    cores: ['Preto', 'Verde', 'Azul marinho', 'Bege', 'Caqui', 'Vinho'],
    imagens: [
      ...Array.from({ length: 4 }, (_, i) => `/produtos/bermuda-sarja-elastano/${i + 1}.png`),
      ...Array.from({ length: 5 }, (_, i) => `/produtos/bermuda-sarja-elastano/${i + 5}.jpg`),
    ],
  },
  {
    slug: 'bermuda-cargo',
    nome: 'Bermuda Cargo',
    descricao: 'Bermuda cargo masculina com bolsos utilitários, estilo tático.',
    composicao: '100% algodão',
    preco: 35,
    precoAntigo: 37,
    tamanhos: ['38', '40', '42', '44', '46'],
    cores: ['Preto', 'Bege', 'Caqui', 'Verde militar', 'Azul marinho', 'Vinho'],
    imagens: Array.from({ length: 10 }, (_, i) => `/produtos/bermuda-cargo/${i + 1}.png`),
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}
