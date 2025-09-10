import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glossário IA21 - Dicionário Completo de Inteligência Artificial',
  description:
    'Glossário completo de termos técnicos em IA, machine learning, deep learning e transformação digital. +100 termos explicados com exemplos práticos.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

