import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glossário IA21 - Dicionário Completo de Inteligência Artificial | IA21',
  description:
    'Glossário completo de termos técnicos em IA, machine learning, deep learning e transformação digital. +100 termos explicados com exemplos práticos. Aprenda inteligência artificial de forma acessível.',
  keywords: [
    'glossário IA',
    'inteligência artificial',
    'machine learning',
    'deep learning',
    'termos técnicos',
    'dicionário IA',
    'IA explicada',
    'aprendizado de máquina',
    'big data',
    'neural networks',
    'algoritmos',
    'transformação digital',
    'tecnologia',
    'inovação',
    'educação IA'
  ].join(', '),
  authors: [{ name: 'IA21 Educação' }],
  creator: 'IA21 Educação',
  publisher: 'IA21 Educação',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ia21.com.br'),
  alternates: {
    canonical: '/glossario',
  },
  openGraph: {
    title: 'Glossário IA21 - Dicionário Completo de Inteligência Artificial',
    description: 'Glossário completo de termos técnicos em IA, machine learning e transformação digital. +100 termos explicados com exemplos práticos.',
    url: '/glossario',
    siteName: 'IA21 Educação',
    images: [
      {
        url: '/hero-glossario.webp',
        width: 1200,
        height: 630,
        alt: 'Glossário IA21 - Dicionário de Inteligência Artificial',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glossário IA21 - Dicionário Completo de IA',
    description: 'Glossário completo de termos técnicos em IA com exemplos práticos. Aprenda inteligência artificial de forma acessível.',
    images: ['/hero-glossario.webp'],
    creator: '@ia21educacao',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Schema.org structured data for glossary */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Glossário IA21 - Dicionário Completo de Inteligência Artificial",
            "description": "Glossário completo de termos técnicos em IA, machine learning, deep learning e transformação digital.",
            "url": "https://ia21.com.br/glossario",
            "publisher": {
              "@type": "Organization",
              "name": "IA21 Educação",
              "url": "https://ia21.com.br"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://ia21.com.br"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Glossário",
                  "item": "https://ia21.com.br/glossario"
                }
              ]
            }
          })
        }}
      />

      {/* Additional meta tags for better SEO */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="application-name" content="Glossário IA21" />

      {children}
    </>
  )
}

