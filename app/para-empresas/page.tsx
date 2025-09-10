import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { ProgramsSection } from '@/components/sections/programs-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Para Empresas - IA21 Educação',
  description: 'Soluções corporativas em desenvolvimento de software para capacitar equipes e transformar processos empresariais.',
}

export default function ParaEmpresasPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProgramsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
