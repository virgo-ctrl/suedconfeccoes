import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, MessageCircle } from 'lucide-react'

export default function Obrigado() {
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

          {/* Ícone de confirmação */}
          <div className="w-20 h-20 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-gold" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-1.5">
            <span className="text-gold text-xs font-semibold uppercase tracking-widest">Cadastro confirmado!</span>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black text-balance">
              Obrigado pelo seu interesse na{' '}
              <span className="text-gold">Sued Confecções!</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Recebemos seus dados com sucesso. Nossa equipe vai entrar em contato pelo WhatsApp em breve com o catálogo completo e as melhores condições de atacado.
            </p>
          </div>

          {/* O que acontece agora */}
          <div className="bg-card border border-border rounded-2xl p-6 w-full text-left flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">O que acontece agora?</p>
            {[
              'Nossa equipe recebeu seu cadastro e já está te aguardando.',
              'Em breve você receberá uma mensagem no WhatsApp com o catálogo completo.',
              'Você terá acesso a preços exclusivos de atacado direto da fábrica.',
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-gold text-xs font-bold">{i + 1}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          {/* CTA WhatsApp */}
          <a
            href="https://wa.me/5581973175562?text=Ol%C3%A1!%20Me%20cadastrei%20no%20site%20da%20Sued%20Confec%C3%A7%C3%B5es%20e%20quero%20ver%20o%20cat%C3%A1logo!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            Falar agora no WhatsApp
          </a>

          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Voltar para o início
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
