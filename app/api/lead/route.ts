import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const PIXEL_ID = '2110317689827912'
const META_CAPI_URL = `https://graph.facebook.com/v19.0/${PIXEL_ID}/events`
const WEBHOOK_URL =
  'https://webhook.virgomarketingeia.com.br/webhook/bb511267-6f70-4d67-bc61-75c7bff19535'

function sha256(value: string) {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { nome, whatsapp, cidade } = body

  const token = process.env.META_CAPI_TOKEN
  const now = Math.floor(Date.now() / 1000)

  // Prepara número de telefone: remove tudo que não é dígito e adiciona código do país
  const phoneDigits = whatsapp.replace(/\D/g, '')
  const phoneFormatted = phoneDigits.startsWith('55') ? phoneDigits : `55${phoneDigits}`

  // Captura dados do request para melhorar o match
  const userAgent = req.headers.get('user-agent') ?? ''
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? ''
  const fbp = body.fbp ?? null
  const fbc = body.fbc ?? null

  const userData: Record<string, string> = {
    ph: sha256(phoneFormatted),
    fn: sha256(nome.split(' ')[0] ?? nome),
  }
  if (ip) userData['client_ip_address'] = ip
  if (userAgent) userData['client_user_agent'] = userAgent
  if (fbp) userData['fbp'] = fbp
  if (fbc) userData['fbc'] = fbc

  const capiPayload = {
    data: [
      {
        event_name: 'Lead',
        event_time: now,
        action_source: 'website',
        event_source_url: 'https://suedconfeccoes.com.br',
        user_data: userData,
        custom_data: {
          content_name: 'Cadastro Sued Confecções',
          content_category: 'Atacado Bermudas',
          cidade,
        },
      },
    ],
  }

  // Dispara Meta CAPI e Webhook em paralelo
  const [capiRes] = await Promise.allSettled([
    token
      ? fetch(`${META_CAPI_URL}?access_token=${token}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(capiPayload),
        })
      : Promise.resolve(null),
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome,
        whatsapp,
        cidade,
        origem: 'landing-page-sued',
        data: new Date().toISOString(),
      }),
    }),
  ])

  if (capiRes.status === 'rejected') {
    console.error('[v0] Meta CAPI error:', capiRes.reason)
  }

  return NextResponse.json({ ok: true })
}
