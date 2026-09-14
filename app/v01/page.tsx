import type { Metadata } from 'next'
import Image from 'next/image'
import { LeadForm } from '@/components/lead-form'
import { ScrollToTopBtn } from '@/components/scroll-to-top-btn'
import { CheckCircle2, Package, Truck, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Receba o Catálogo no WhatsApp (versão anterior)',
  robots: {
    index: false,
    follow: false,
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">

      {/* ── HEADER ── */}
      <header className="py-5 px-6 flex justify-center border-b border-border">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sued%20-%20Logo%20Dourada-Bpqaa0NwlaxoSfXEerwKowCUAC8fim.png"
          alt="Sued Confecções"
          width={200}
          height={55}
          priority
          className="h-10 w-auto"
        />
      </header>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        {/* Grid layout hero */}
        <div className="grid lg:grid-cols-2 min-h-[88vh]">

          {/* LEFT: copy + form */}
          <div className="flex flex-col justify-center px-6 py-14 md:px-12 lg:px-16 xl:px-20 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-secondary border border-gold/30 rounded-full px-4 py-1.5 mb-6 self-start">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-semibold uppercase tracking-widest">Direto da Fábrica · Caruaru - PE</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-balance mb-4">
              Bermudas que{' '}
              <span className="text-gold">vendem rápido</span>{' '}
              e dão lucro de verdade
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              Confecção em Caruaru especializada em bermudas masculinas premium para revenda no atacado.
              Modelos exclusivos, preço de fábrica e entrega para todo o Brasil.
            </p>

            {/* Prova social rápida */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                'Mais de 50 modelos exclusivos',
                'Pedido mínimo acessível',
                'Entrega para todo o Brasil',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Formulário */}
            <div className="bg-card border border-border rounded-2xl p-6 md:p-8 w-full max-w-md">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-1">Acesso gratuito</p>
              <h2 className="text-xl font-bold mb-5 text-balance">
                Receba o catálogo completo no WhatsApp agora
              </h2>
              <LeadForm />
            </div>
          </div>

          {/* RIGHT: model photos */}
          <div className="relative order-1 lg:order-2 min-h-[50vw] lg:min-h-0">
            <div className="grid grid-cols-2 h-full gap-0">
              <div className="relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ad%20%281%29-pHf7hoDxYRkBkchthh89BJl1cZ4QLM.jpg"
                  alt="Bermuda jeans masculina Sued Confecções"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ad%20%282%29-MyNZXi50aIZh485WYirG26RLSOSNDp.jpg"
                  alt="Bermuda cargo preta masculina Sued Confecções"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay escuro no canto para contraste */}
                <div className="absolute inset-0 bg-background/20" />
              </div>
            </div>
            {/* Overlay gradiente no lado esquerdo da foto para fundir com a seção de texto */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none hidden lg:block" />
          </div>
        </div>
      </section>

      {/* ── BENEFÍCIOS ── */}
      <section className="bg-secondary py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gold text-xs font-bold uppercase tracking-widest mb-3">Por que escolher a Sued?</p>
          <h2 className="text-3xl md:text-4xl font-black text-center text-balance mb-12">
            Tudo o que um dono de loja precisa
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Package className="w-6 h-6 text-gold" />,
                title: 'Modelos Exclusivos',
                desc: 'Designs originais desenvolvidos pela nossa equipe, com tendências da moda masculina.',
              },
              {
                icon: <Star className="w-6 h-6 text-gold" />,
                title: 'Qualidade Premium',
                desc: 'Tecidos selecionados, costura reforçada e acabamento impecável em cada peça.',
              },
              {
                icon: <Truck className="w-6 h-6 text-gold" />,
                title: 'Envio para o Brasil',
                desc: 'Despachamos para qualquer estado. Seu estoque chegando rápido e com segurança.',
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-gold" />,
                title: 'Preço de Fábrica',
                desc: 'Compra direto da confecção, sem intermediários. Margem de lucro alta para você.',
              },
            ].map((b) => (
              <div key={b.title} className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-3">
                <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center">
                  {b.icon}
                </div>
                <h3 className="font-bold text-base">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERIA DE PRODUTOS ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gold text-xs font-bold uppercase tracking-widest mb-3">Coleção</p>
          <h2 className="text-3xl md:text-4xl font-black text-center text-balance mb-10">
            Modelos que as lojas adoram vender
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ad%20%284%29-uF4oQHRnAjh6mHaPLkY1d4wR9jPkpc.jpg"
                alt="Bermuda jeans rasgada masculina atacado"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-sm font-semibold">Jeans Premium</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ad%20%282%29-MyNZXi50aIZh485WYirG26RLSOSNDp.jpg"
                alt="Bermuda cargo preta masculina atacado"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-sm font-semibold">Cargo Tática</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ad%20%283%29-n2uC0DGpKjwpzB8h3mtkQqwf7xX1zN.jpg"
                alt="Bermuda cargo khaki masculina atacado"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background/90 to-transparent">
                <span className="text-sm font-semibold">Cargo Utilitário</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="bg-gold py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-background text-balance mb-4">
            Pronto para abastecer sua loja com o melhor do atacado?
          </h2>
          <p className="text-background/70 text-lg mb-8">
            Cadastre-se gratuitamente e receba nosso catálogo completo com preços e condições exclusivas.
          </p>
          <ScrollToTopBtn />
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
    </main>
  )
}
