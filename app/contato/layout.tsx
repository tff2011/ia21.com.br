import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato - IA21 Educação',
  description: 'Entre em contato conosco. Estamos aqui para ajudar você a transformar sua carreira em tecnologia.',
  keywords: ['contato', 'suporte', 'IA21', 'educação', 'tecnologia'],
  openGraph: {
    title: 'Contato - IA21 Educação',
    description: 'Entre em contato conosco. Estamos aqui para ajudar você a transformar sua carreira em tecnologia.',
    url: 'https://ia21.com.br/contato',
    siteName: 'IA21 Educação',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contato - IA21 Educação',
    description: 'Entre em contato conosco. Estamos aqui para ajudar você a transformar sua carreira em tecnologia.',
  },
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
