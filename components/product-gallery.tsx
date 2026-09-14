'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function ProductGallery({ imagens, alt }: { imagens: string[]; alt: string }) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-secondary border border-border">
        <Image
          src={imagens[active]}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      {imagens.length > 1 && (
        <div className="thumb-scroll flex gap-2 overflow-x-auto pb-2">
          {imagens.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                'relative w-12 h-16 flex-shrink-0 rounded-md overflow-hidden border transition-colors cursor-pointer',
                i === active ? 'border-gold' : 'border-border opacity-70 hover:opacity-100',
              )}
            >
              <Image src={img} alt={`${alt} - foto ${i + 1}`} fill className="object-cover object-top" sizes="48px" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
