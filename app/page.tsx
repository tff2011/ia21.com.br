import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero-section'
import { CompaniesCarousel } from '@/components/sections/companies-carousel'
import { ProgramsSection } from '@/components/sections/programs-section'
import { PhilosophyQuote } from '@/components/sections/philosophy-quote'
import { BlogSection } from '@/components/sections/blog-section'
import { FAQSection } from '@/components/sections/faq-section'
import { CTASection } from '@/components/sections/cta-section'

export const metadata: Metadata = {
  title: 'IA21 Educação - Cursos de Desenvolvimento Web, React, Next.js | Tecnologia para o Futuro',
  description: 'Cursos especializados em desenvolvimento web, React, Next.js, JavaScript e tecnologias modernas. Mentorias personalizadas, projetos reais e certificações reconhecidas pelo mercado.',
  keywords: [
    'cursos desenvolvimento web',
    'curso react',
    'curso nextjs',
    'curso javascript',
    'mentoria tecnologia',
    'programação online',
    'bootcamp desenvolvimento',
    'certificação programação',
    'aprender programar',
    'curso full stack'
  ],
  openGraph: {
    title: 'IA21 Educação - Cursos de Desenvolvimento Web e Tecnologia',
    description: 'Transforme sua carreira com nossos cursos de desenvolvimento web, React, Next.js e tecnologias modernas. Mentorias personalizadas e projetos reais.',
    url: 'https://ia21.com.br',
    siteName: 'IA21 Educação',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IA21 Educação - Cursos de Tecnologia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA21 Educação - Cursos de Desenvolvimento Web',
    description: 'Transforme sua carreira com cursos especializados em tecnologias modernas.',
    creator: '@ia21educacao',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://ia21.com.br',
  },
}

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "IA21 Educação",
    "description": "Plataforma educacional especializada em cursos de desenvolvimento web, React, Next.js e tecnologias modernas",
    "url": "https://ia21.com.br",
    "logo": "https://ia21.com.br/logo-flat-gold-nobg.png",
    "sameAs": [
      "https://twitter.com/ia21educacao",
      "https://linkedin.com/company/ia21educacao"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressLocality": "Brasil"
    },
    "offers": [
      {
        "@type": "Course",
        "name": "Fundamentos de Desenvolvimento Web",
        "description": "Aprenda HTML, CSS e JavaScript do zero",
        "provider": {
          "@type": "Organization",
          "name": "IA21 Educação"
        }
      },
      {
        "@type": "Course", 
        "name": "React e Next.js Avançado",
        "description": "Domine React, Next.js e técnicas modernas de desenvolvimento frontend",
        "provider": {
          "@type": "Organization",
          "name": "IA21 Educação"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "156"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen">
        <HeroSection />
        <CompaniesCarousel theme="gold" />
        <PhilosophyQuote />
        <ProgramsSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
    </>
  )
}
