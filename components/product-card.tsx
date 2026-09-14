'use client'

import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import type { Product } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import { ProductGallery } from '@/components/product-gallery'
import { cn } from '@/lib/utils'

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [cor, setCor] = useState(product.cores[0])
  const [tamanho, setTamanho] = useState(product.tamanhos[2] ?? product.tamanhos[0])
  const [quantidade, setQuantidade] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem({
      slug: product.slug,
      nome: product.nome,
      cor,
      tamanho,
      preco: product.preco,
      quantidade,
      imagem: product.imagens[0],
    })
    setAdded(true)
    setQuantidade(1)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-4 flex flex-col gap-4">
      <ProductGallery imagens={product.imagens} alt={product.nome} />

      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-lg text-balance">{product.nome}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{product.descricao}</p>
        <p className="text-xs text-muted-foreground">{product.composicao} · Tam. {product.tamanhos[0]} ao {product.tamanhos[product.tamanhos.length - 1]}</p>
      </div>

      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-black text-gold">
          R$ {product.preco.toFixed(2).replace('.', ',')}
        </span>
        {product.precoAntigo && (
          <span className="text-sm text-muted-foreground line-through">
            R$ {product.precoAntigo.toFixed(2).replace('.', ',')}
          </span>
        )}
        <span className="text-xs text-muted-foreground">/ peça</span>
      </div>

      {product.cores.length > 1 && (
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Cor</label>
          <div className="flex flex-wrap gap-1.5">
            {product.cores.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCor(c)}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs border transition-colors cursor-pointer',
                  cor === c
                    ? 'bg-gold text-gold-foreground border-gold font-semibold'
                    : 'bg-secondary border-border text-muted-foreground hover:border-gold/50',
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Tamanho</label>
        <div className="flex flex-wrap gap-1.5">
          {product.tamanhos.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTamanho(t)}
              className={cn(
                'w-10 h-9 rounded-lg text-sm border transition-colors cursor-pointer',
                tamanho === t
                  ? 'bg-gold text-gold-foreground border-gold font-semibold'
                  : 'bg-secondary border-border text-muted-foreground hover:border-gold/50',
              )}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center border border-border rounded-lg">
          <button
            type="button"
            onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
            className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
            aria-label="Diminuir quantidade"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-10 text-center text-sm font-semibold tabular-nums">{quantidade}</span>
          <button
            type="button"
            onClick={() => setQuantidade((q) => q + 1)}
            className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
            aria-label="Aumentar quantidade"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className={cn(
            'flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors cursor-pointer',
            added
              ? 'bg-gold-light text-gold-foreground'
              : 'bg-gold text-gold-foreground hover:bg-gold-light',
          )}
        >
          <ShoppingCart className="w-4 h-4" />
          {added ? 'Adicionado!' : 'Adicionar'}
        </button>
      </div>
    </div>
  )
}
