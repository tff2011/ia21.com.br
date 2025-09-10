import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
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
      <HeroSection />
      <ProgramsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
