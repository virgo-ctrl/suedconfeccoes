import type { Metadata } from 'next'
import Image from 'next/image'
import { Factory, MapPinned, PackageCheck, Shirt } from 'lucide-react'
import { products } from '@/lib/products'
import { PEDIDO_MINIMO_VALOR, SITE_URL } from '@/lib/constants'
import { ProductCard } from '@/components/product-card'
import { CartButton, CartDrawer } from '@/components/cart-widget'

const TITLE = 'Catálogo de Bermudas no Atacado'
const DESCRIPTION =
  `Catálogo de bermudas masculinas direto da fábrica em Caruaru-PE. Fabricação própria, pedido mínimo de R$ ${PEDIDO_MINIMO_VALOR}, entrega pra todo o Brasil.`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
}

const productsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: products.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: product.nome,
      description: product.descricao,
      image: `${SITE_URL}${product.imagens[0]}`,
      brand: {
        '@type': 'Brand',
        name: 'Sued Confecções',
      },
      offers: {
        '@type': 'Offer',
        url: SITE_URL,
        priceCurrency: 'BRL',
        price: product.preco,
        availability: 'https://schema.org/InStock',
      },
    },
  })),
}

export default function Catalogo() {
  return (
    <main className="theme-cream min-h-screen bg-background text-foreground font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      {/* ── HEADER ── */}
      <header className="py-5 px-6 flex items-center justify-between border-b border-border sticky top-0 bg-background/95 backdrop-blur z-30">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sued%20-%20Logo%20Dourada-Bpqaa0NwlaxoSfXEerwKowCUAC8fim.png"
          alt="Sued Confecções"
          width={180}
          height={50}
          priority
          className="h-9 w-auto"
        />
        <CartButton />
      </header>

      {/* ── ESSENCIAL ── */}
      <section className="bg-secondary border-b border-border py-10 px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-3">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">Catálogo Atacado</span>
          <h1 className="text-3xl md:text-4xl font-black text-balance max-w-2xl">
            Bermudas de fabricação própria, direto de Caruaru pra todo o Brasil
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 w-full max-w-3xl">
            {[
              { icon: <PackageCheck className="w-5 h-5 text-gold" />, texto: `Pedido mínimo de R$ ${PEDIDO_MINIMO_VALOR}` },
              { icon: <Factory className="w-5 h-5 text-gold" />, texto: 'Fabricação própria' },
              { icon: <Shirt className="w-5 h-5 text-gold" />, texto: 'Só bermudas' },
              { icon: <MapPinned className="w-5 h-5 text-gold" />, texto: 'Caruaru-PE p/ todo o Brasil' },
            ].map((item) => (
              <div
                key={item.texto}
                className="bg-card border border-border rounded-xl px-3 py-4 flex flex-col items-center gap-2 text-center"
              >
                {item.icon}
                <span className="text-xs font-semibold text-muted-foreground leading-tight">{item.texto}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm max-w-lg mt-2">
            Monte seu pedido combinando modelos, cores e tamanhos — o mínimo de R$ {PEDIDO_MINIMO_VALOR} vale pro carrinho todo, não por modelo.
          </p>
        </div>
      </section>

      {/* ── CATÁLOGO ── */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 flex flex-col items-center gap-3 border-t border-border">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sued%20-%20Logo%20Dourada-Bpqaa0NwlaxoSfXEerwKowCUAC8fim.png"
          alt="Sued Confecções"
          width={130}
          height={36}
          className="h-7 w-auto opacity-70"
        />
        <p className="text-muted-foreground text-xs text-center">
          © {new Date().getFullYear()} Sued Confecções · Caruaru - PE · Todos os direitos reservados
        </p>
      </footer>

      <CartDrawer />
    </main>
  )
}
