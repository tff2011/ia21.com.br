import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { ProgramsSection } from '@/components/sections/programs-section'
import { BlogSection } from '@/components/sections/blog-section'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'IA21 Educação - Desenvolvimento Tecnológico para o Futuro',
  description: 'Cursos e treinamentos especializados em tecnologias emergentes. Desenvolva habilidades do futuro com a IA21 Educação.',
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProgramsSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}