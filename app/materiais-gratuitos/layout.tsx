import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Materiais Gratuitos IA21 - Downloads Exclusivos sobre Inteligência Artificial',
  description:
    'Baixe gratuitamente e-books, guias, templates e materiais exclusivos sobre IA, machine learning e transformação digital da IA21 Educação.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

