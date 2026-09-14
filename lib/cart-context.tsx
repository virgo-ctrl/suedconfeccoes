'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { fireFbq } from '@/lib/pixel'
import { getProduct } from '@/lib/products'
import { PEDIDO_MINIMO } from '@/lib/constants'

export type CartItem = {
  id: string
  slug: string
  nome: string
  cor: string
  tamanho: string
  preco: number
  quantidade: number
  imagem: string
}

type CartContextValue = {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (item: Omit<CartItem, 'id'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantidade: number) => void
  clearCart: () => void
  totalItens: number
  totalValor: number
  pedidoMinimo: number
}

const CartContext = createContext<CartContextValue | null>(null)

const STORAGE_KEY = 'sued-cart'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {
      // localStorage indisponível (ex: modo privado) — carrinho começa vazio
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // ignora falha de storage
    }
  }, [items, hydrated])

  function addItem(item: Omit<CartItem, 'id'>) {
    const id = `${item.slug}__${item.cor}__${item.tamanho}`

    setItems((prev) => {
      const existing = prev.find((i) => i.id === id)
      if (existing) {
        return prev.map((i) =>
          i.id === id ? { ...i, quantidade: i.quantidade + item.quantidade } : i,
        )
      }
      return [...prev, { ...item, id }]
    })

    const product = getProduct(item.slug)
    fireFbq('track', 'AddToCart', {
      content_ids: [item.slug],
      content_name: item.nome,
      content_type: 'product',
      contents: [
        {
          id: item.slug,
          quantity: item.quantidade,
          item_price: item.preco,
        },
      ],
      value: item.preco * item.quantidade,
      currency: 'BRL',
      content_category: product?.composicao,
    })

    setIsOpen(true)
  }

  function removeItem(id: string) {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  function updateQuantity(id: string, quantidade: number) {
    if (quantidade <= 0) {
      removeItem(id)
      return
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantidade } : i)))
  }

  function clearCart() {
    setItems([])
  }

  const totalItens = useMemo(() => items.reduce((sum, i) => sum + i.quantidade, 0), [items])
  const totalValor = useMemo(
    () => items.reduce((sum, i) => sum + i.quantidade * i.preco, 0),
    [items],
  )

  const value: CartContextValue = {
    items,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItens,
    totalValor,
    pedidoMinimo: PEDIDO_MINIMO,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart precisa estar dentro de um CartProvider')
  return ctx
}
