import { Metadata } from 'next'
import { HeroSectionB2C } from '@/components/sections/hero-section-b2c'
import { CompaniesCarousel } from '@/components/sections/companies-carousel'
import { ProgramsSection } from '@/components/sections/programs-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'Para Você - IA21 Educação',
  description: 'Programas personalizados de desenvolvimento de software para indivíduos que querem acelerar sua carreira em tecnologia.',
}

export default function ParaVocePage() {
  return (
    <main className="min-h-screen theme-gold">
      <HeroSectionB2C />
      <CompaniesCarousel theme="gold" />
      <ProgramsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
