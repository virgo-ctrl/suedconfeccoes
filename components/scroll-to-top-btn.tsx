'use client'

export function ScrollToTopBtn() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="inline-block bg-background text-gold font-black uppercase tracking-widest text-sm px-10 py-4 rounded-xl hover:bg-card transition-colors cursor-pointer"
    >
      Quero o Catálogo Grátis
    </button>
  )
}
