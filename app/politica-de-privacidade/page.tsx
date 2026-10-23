import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const WHATSAPP_URL = 'https://wa.me/5581973175562'
const ATUALIZADO_EM = '23 de outubro de 2026'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Saiba quais dados a Sued Confecções coleta no site, para que usa e como você pode pedir acesso, correção ou exclusão, conforme a LGPD.',
  alternates: {
    canonical: '/politica-de-privacidade',
  },
}

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: '1. Quem somos',
    body: (
      <p>
        A Sued Confecções é uma fábrica de bermudas masculinas de Caruaru, em Pernambuco, e vende
        no atacado para lojistas de todo o Brasil. Esta política vale para este site e é a Sued
        quem decide como os dados coletados aqui são usados (a chamada controladora, na LGPD).
      </p>
    ),
  },
  {
    title: '2. Quais dados coletamos',
    body: (
      <>
        <p>Coletamos só o que o site precisa para funcionar e para a gente atender você:</p>
        <ul>
          <li>
            <strong>Dados que você informa no formulário de cadastro:</strong> nome, número de
            WhatsApp e cidade.
          </li>
          <li>
            <strong>Dados do carrinho:</strong> os produtos, cores, tamanhos e quantidades que você
            escolhe ficam salvos no seu próprio navegador (localStorage) para o carrinho não se
            perder. Eles não vão para nenhum servidor nosso. O pedido só chega até nós quando você
            toca em &quot;Fazer pedido&quot; e envia a mensagem pelo WhatsApp.
          </li>
          <li>
            <strong>Dados de navegação:</strong> páginas visitadas, tipo de aparelho e navegador,
            endereço IP e identificadores de cookies, coletados por ferramentas de medição
            (Meta Pixel e Vercel Analytics).
          </li>
          <li>
            <strong>Conversa no WhatsApp:</strong> se você nos chamar, guardamos o histórico da
            conversa para dar continuidade ao atendimento.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: '3. Para que usamos seus dados',
    body: (
      <ul>
        <li>Entrar em contato pelo WhatsApp e enviar o catálogo e as condições de atacado.</li>
        <li>Receber, confirmar e acompanhar pedidos.</li>
        <li>Medir o desempenho do site e dos nossos anúncios, e melhorar a experiência de uso.</li>
        <li>
          Mostrar anúncios da Sued para pessoas com perfil parecido com o dos nossos clientes, e
          evitar repetir anúncio para quem já se cadastrou.
        </li>
        <li>Cumprir obrigações legais e proteger a empresa em caso de disputa.</li>
      </ul>
    ),
  },
  {
    title: '4. Base legal',
    body: (
      <p>
        Tratamos seus dados com base na LGPD (Lei nº 13.709/2018): o seu consentimento, quando você
        preenche o formulário ou aceita as ferramentas de medição; a execução de procedimentos
        preliminares de um contrato, quando você pede catálogo ou faz um pedido; o legítimo
        interesse da Sued em divulgar seus produtos e melhorar o site; e o cumprimento de
        obrigações legais.
      </p>
    ),
  },
  {
    title: '5. Cookies e ferramentas de terceiros',
    body: (
      <>
        <p>O site usa estas ferramentas, que podem gravar cookies no seu navegador:</p>
        <ul>
          <li>
            <strong>Meta Pixel e API de Conversões (Meta Platforms):</strong> registram visitas e
            ações no site (como cadastro e pedido) para medir e otimizar anúncios no Facebook e no
            Instagram. Quando você se cadastra, enviamos à Meta o seu telefone e o primeiro nome em
            formato criptografado (hash), junto com a cidade e dados técnicos do aparelho, para
            associar o cadastro ao anúncio.
          </li>
          <li>
            <strong>Vercel Analytics:</strong> estatísticas de acesso ao site.
          </li>
        </ul>
        <p>
          Você pode bloquear ou apagar cookies nas configurações do navegador e ajustar suas
          preferências de anúncios na sua conta do Facebook ou do Instagram. Bloquear cookies pode
          afetar o funcionamento de algumas partes do site.
        </p>
      </>
    ),
  },
  {
    title: '6. Com quem compartilhamos',
    body: (
      <>
        <p>Não vendemos seus dados. Eles podem ser compartilhados apenas com:</p>
        <ul>
          <li>
            a <strong>Virgo Marketing</strong>, agência que cuida do marketing digital da Sued e
            recebe os cadastros do formulário para organizar o atendimento;
          </li>
          <li>
            a <strong>Meta Platforms</strong>, nos termos da seção anterior;
          </li>
          <li>
            a <strong>Vercel</strong>, que hospeda o site e mede o acesso;
          </li>
          <li>autoridades públicas, quando a lei exigir.</li>
        </ul>
        <p>
          Algumas dessas empresas processam dados fora do Brasil. Nesses casos, o tratamento segue
          as regras de transferência internacional da LGPD.
        </p>
      </>
    ),
  },
  {
    title: '7. Por quanto tempo guardamos',
    body: (
      <p>
        Mantemos seus dados pelo tempo necessário para atender você e para cumprir obrigações
        legais. Se você pedir a exclusão, apagamos os dados que não precisarmos manter por
        exigência da lei.
      </p>
    ),
  },
  {
    title: '8. Seus direitos',
    body: (
      <>
        <p>Pela LGPD, você pode pedir à Sued a qualquer momento:</p>
        <ul>
          <li>confirmação de que tratamos seus dados e acesso a eles;</li>
          <li>correção de dados incompletos ou desatualizados;</li>
          <li>anonimização, bloqueio ou exclusão de dados desnecessários ou tratados fora da lei;</li>
          <li>portabilidade dos dados;</li>
          <li>informação sobre com quem compartilhamos;</li>
          <li>revogação do consentimento, inclusive para receber nossas mensagens.</li>
        </ul>
        <p>
          Para fazer qualquer pedido, fale com a gente pelo canal da seção 10. Se achar que seus
          dados foram tratados de forma indevida, você também pode reclamar à Autoridade Nacional de
          Proteção de Dados (ANPD).
        </p>
      </>
    ),
  },
  {
    title: '9. Segurança',
    body: (
      <p>
        Usamos conexão segura (HTTPS) e limitamos o acesso aos dados a quem precisa deles para
        atender você. Nenhum sistema é totalmente imune a falhas, mas, se houver um incidente que
        possa causar risco a você, vamos avisar você e a ANPD, como a lei determina.
      </p>
    ),
  },
  {
    title: '10. Fale com a gente',
    body: (
      <p>
        Dúvidas sobre esta política ou pedidos sobre seus dados: chame a Sued no{' '}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          WhatsApp (81) 97317-5562
        </a>
        .
      </p>
    ),
  },
  {
    title: '11. Mudanças nesta política',
    body: (
      <p>
        Podemos atualizar este texto quando o site ou a lei mudarem. A data da última atualização
        fica sempre no topo da página.
      </p>
    ),
  },
]

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      {/* HEADER */}
      <header className="py-5 px-6 flex justify-center border-b border-border">
        <Link href="/">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sued%20-%20Logo%20Dourada-Bpqaa0NwlaxoSfXEerwKowCUAC8fim.png"
            alt="Sued Confecções"
            width={200}
            height={55}
            priority
            className="h-10 w-auto"
          />
        </Link>
      </header>

      {/* CONTEÚDO */}
      <article className="flex-1 px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">Privacidade</p>
            <h1 className="text-4xl md:text-5xl font-black text-balance">
              Política de <span className="text-gold">Privacidade</span>
            </h1>
            <p className="text-muted-foreground text-sm">Atualizada em {ATUALIZADO_EM}</p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Aqui você vê, sem rodeio, quais dados a Sued Confecções coleta neste site, para que
              usa e o que você pode fazer a respeito.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {sections.map((section) => (
              <section
                key={section.title}
                className="flex flex-col gap-3 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:text-muted-foreground [&_ul]:leading-relaxed [&_strong]:text-foreground [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-4"
              >
                <h2 className="text-xl font-bold">{section.title}</h2>
                {section.body}
              </section>
            ))}
          </div>

          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4 self-start"
          >
            Voltar pro catálogo
          </Link>
        </div>
      </article>

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
