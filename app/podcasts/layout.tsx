import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Podcasts IA21 - Conteúdo em Áudio sobre Inteligência Artificial',
  description:
    'Episódios semanais sobre inteligência artificial, machine learning, ética digital e transformação tecnológica. Conteúdo exclusivo da IA21 em formato de áudio.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

