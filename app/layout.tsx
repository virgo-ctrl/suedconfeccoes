import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { CartProvider } from '@/lib/cart-context'
import { SITE_URL } from '@/lib/constants'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const TITLE = 'Sued Confecções | Bermudas Masculinas no Atacado'
const DESCRIPTION =
  'Confecção especializada em bermudas masculinas premium direto de Caruaru. Preço de fábrica, modelos exclusivos e entrega para todo o Brasil.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s | Sued Confecções',
  },
  description: DESCRIPTION,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Sued Confecções',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: 'Sued Confecções',
  description: DESCRIPTION,
  url: SITE_URL,
  logo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sued%20-%20Logo%20Dourada-Bpqaa0NwlaxoSfXEerwKowCUAC8fim.png',
  image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sued%20-%20Logo%20Dourada-Bpqaa0NwlaxoSfXEerwKowCUAC8fim.png',
  telephone: '+5581973175562',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Caruaru',
    addressRegion: 'PE',
    addressCountry: 'BR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2110317689827912');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2110317689827912&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={`${inter.className} antialiased`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
