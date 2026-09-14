import { ImageResponse } from 'next/og'

export const alt = 'Sued Confecções — Bermudas Masculinas no Atacado'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 84, fontWeight: 900, letterSpacing: 6, color: '#d1ac6e' }}>
          SUED
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 10,
            marginTop: 4,
            textTransform: 'uppercase',
            color: '#ffffff',
          }}
        >
          Confecções
        </div>
        <div style={{ display: 'flex', fontSize: 34, marginTop: 48, color: '#a3a3a3' }}>
          Bermudas no Atacado · Direto da Fábrica
        </div>
        <div style={{ display: 'flex', fontSize: 26, marginTop: 12, color: '#d1ac6e' }}>Caruaru - PE</div>
      </div>
    ),
    { ...size },
  )
}
