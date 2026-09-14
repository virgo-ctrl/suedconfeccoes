import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pedido Enviado',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PedidoEnviado() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      {/* HEADER */}
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

      {/* CONTEÚDO CENTRAL */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-lg w-full text-center flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-gold" />
          </div>

          <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-1.5">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">Pedido enviado!</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black text-balance">
              Seu pedido foi enviado pro <span className="text-gold">WhatsApp da Sued!</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Abrimos o WhatsApp com o resumo do seu pedido. Nossa equipe confirma disponibilidade,
              forma de pagamento e prazo de entrega direto com você por lá.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 w-full text-left flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Importante</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Esse catálogo não processa pagamento nem finaliza a compra automaticamente — o pedido
              só é confirmado depois que a equipe da Sued fala com você pelo WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/5581973175562"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            Abrir conversa no WhatsApp
          </a>

          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Voltar pro catálogo
          </Link>
        </div>
      </div>

      {/* FOOTER */}
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
