import { Metadata } from 'next'
import { HeroSectionB2B } from '@/components/sections/hero-section-b2b'
import { CompaniesCarousel } from '@/components/sections/companies-carousel'
import { ProgramsSection } from '@/components/sections/programs-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Para Empresas - IA21 Educação',
  description: 'Soluções corporativas em desenvolvimento de software para capacitar equipes e transformar processos empresariais.',
}

export default function ParaEmpresasPage() {
  return (
    <main className="min-h-screen theme-blue">
      <HeroSectionB2B />
      <CompaniesCarousel theme="blue" />
      <ProgramsSection />
      <TestimonialsSection theme="blue" />
      <CTASection />
    </main>
  )
}
