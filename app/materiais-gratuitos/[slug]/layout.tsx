import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Material Gratuito - IA21 Educação',
  description: 'Baixe materiais exclusivos sobre inteligência artificial da IA21 Educação.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

