'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export function LeadForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ nome: '', whatsapp: '', cidade: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    if (name === 'whatsapp') {
      const digits = value.replace(/\D/g, '').slice(0, 11)
      let masked = digits
      if (digits.length > 10) {
        masked = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
      } else if (digits.length > 6) {
        masked = `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
      } else if (digits.length > 2) {
        masked = `(${digits.slice(0, 2)}) ${digits.slice(2)}`
      } else if (digits.length > 0) {
        masked = `(${digits}`
      }
      setForm((prev) => ({ ...prev, whatsapp: masked }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // Coleta cookies do Meta Pixel para melhorar o match na CAPI
    const getCookie = (name: string) => {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
      return match ? match[2] : null
    }

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: form.nome,
          whatsapp: form.whatsapp,
          cidade: form.cidade,
          fbp: getCookie('_fbp'),
          fbc: getCookie('_fbc'),
        }),
      })

      // Dispara evento Lead no Meta Pixel (browser-side)
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'Cadastro Sued Confecções',
          content_category: 'Atacado Bermudas',
        })
      }

      router.push('/obrigado')
    } catch {
      router.push('/obrigado')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-1">
        <label htmlFor="nome" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Seu nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          placeholder="Ex: João Silva"
          value={form.nome}
          onChange={handleChange}
          className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="whatsapp" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          WhatsApp
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          placeholder="(81) 99999-9999"
          value={form.whatsapp}
          onChange={handleChange}
          className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cidade" className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Cidade / Estado
        </label>
        <input
          id="cidade"
          name="cidade"
          type="text"
          required
          placeholder="Ex: Recife - PE"
          value={form.cidade}
          onChange={handleChange}
          className="bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 bg-gold text-background font-bold uppercase tracking-widest py-4 rounded-lg text-sm hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Enviando...' : 'Quero Receber o Catálogo'}
      </button>

      <p className="text-center text-xs text-muted-foreground leading-relaxed">
        Seus dados estão seguros. Sem spam, prometemos.
      </p>
    </form>
  )
}
