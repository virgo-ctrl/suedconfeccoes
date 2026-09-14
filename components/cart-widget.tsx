'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { fireFbq } from '@/lib/pixel'
import { cn } from '@/lib/utils'

const WHATSAPP_NUMERO = '5581973175562'

export function CartButton() {
  const { openCart, totalItens } = useCart()

  return (
    <button
      type="button"
      onClick={openCart}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-secondary border border-border hover:border-gold/50 transition-colors cursor-pointer"
      aria-label="Abrir carrinho"
    >
      <ShoppingCart className="w-5 h-5 text-foreground" />
      {totalItens > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-gold text-gold-foreground text-[11px] font-bold rounded-full min-w-[18px] h-[18px] px-1 flex items-center justify-center">
          {totalItens}
        </span>
      )}
    </button>
  )
}

export function CartDrawer() {
  const router = useRouter()
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalItens,
    totalValor,
    pedidoMinimoValor,
  } = useCart()

  const faltam = Math.max(0, pedidoMinimoValor - totalValor)
  const podeFinalizar = totalValor >= pedidoMinimoValor

  function handleFinalizarPedido() {
    if (!podeFinalizar) return

    const linhas = items.map(
      (i) => `• ${i.quantidade}x ${i.nome} (${i.cor}, tam. ${i.tamanho}) — R$ ${(i.preco * i.quantidade).toFixed(2).replace('.', ',')}`,
    )
    const mensagem = [
      'Olá! Quero fazer um pedido no catálogo da Sued Confecções:',
      '',
      ...linhas,
      '',
      `Total: ${totalItens} peças — R$ ${totalValor.toFixed(2).replace('.', ',')}`,
    ].join('\n')

    // Evento personalizado — não é "Purchase" porque nenhum pagamento acontece aqui,
    // o pedido só é confirmado depois manualmente pelo WhatsApp.
    fireFbq('trackCustom', 'PedidoCarrinho', {
      value: totalValor,
      currency: 'BRL',
      num_items: totalItens,
      contents: items.map((i) => ({
        id: i.slug,
        quantity: i.quantidade,
        item_price: i.preco,
      })),
    })

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`
    window.open(url, '_blank', 'noopener,noreferrer')

    clearCart()
    closeCart()
    router.push('/pedido-enviado')
  }

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 bg-black/60 z-40 transition-opacity',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
        )}
        onClick={closeCart}
      />

      <aside
        className={cn(
          'fixed top-0 right-0 h-full w-full max-w-sm bg-card border-l border-border z-50 flex flex-col transition-transform duration-300',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h2 className="font-bold text-lg">Seu carrinho</h2>
          <button
            type="button"
            onClick={closeCart}
            className="w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
          {items.length === 0 && (
            <p className="text-muted-foreground text-sm text-center py-10">
              Seu carrinho está vazio. Adicione peças do catálogo pra montar seu pedido.
            </p>
          )}

          {items.map((item) => (
            <div key={item.id} className="flex gap-3 border-b border-border pb-4">
              <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                <Image src={item.imagem} alt={item.nome} fill className="object-cover object-top" sizes="64px" />
              </div>
              <div className="flex-1 flex flex-col gap-1 min-w-0">
                <p className="font-semibold text-sm leading-tight">{item.nome}</p>
                <p className="text-xs text-muted-foreground">{item.cor} · Tam. {item.tamanho}</p>
                <p className="text-xs text-gold font-semibold">
                  R$ {item.preco.toFixed(2).replace('.', ',')} / peça
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantidade - 1)}
                      className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
                      aria-label="Diminuir quantidade"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center text-xs font-semibold tabular-nums">{item.quantidade}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantidade + 1)}
                      className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
                      aria-label="Aumentar quantidade"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors cursor-pointer"
                    aria-label="Remover item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-border flex flex-col gap-3">
            {!podeFinalizar && (
              <p className="text-xs text-center text-muted-foreground bg-secondary rounded-lg px-3 py-2">
                Pedido mínimo de R$ {pedidoMinimoValor.toFixed(2).replace('.', ',')} · faltam R$ {faltam.toFixed(2).replace('.', ',')}
              </p>
            )}

            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{totalItens} peças</span>
              <span className="font-bold text-lg">
                R$ {totalValor.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <button
              type="button"
              onClick={handleFinalizarPedido}
              disabled={!podeFinalizar}
              className="bg-gold text-gold-foreground font-bold uppercase tracking-widest py-3.5 rounded-lg text-sm hover:bg-gold-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
            >
              Fazer pedido no WhatsApp
            </button>
            <p className="text-[11px] text-center text-muted-foreground leading-relaxed">
              Isso não é uma compra automática — seu pedido é enviado pro nosso WhatsApp e a equipe confirma pagamento e entrega com você.
            </p>
          </div>
        )}
      </aside>
    </>
  )
}
