'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface TestimonialsSectionProps {
  theme?: 'gold' | 'blue'
}

export function TestimonialsSection({ theme = 'gold' }: TestimonialsSectionProps) {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Silva',
      role: 'Desenvolvedor Full Stack',
      company: 'TechCorp',
      content: 'O programa de desenvolvimento web da IA21 transformou completamente minha carreira. Hoje trabalho com tecnologias modernas e recebo propostas incríveis.',
      rating: 5,
      theme: 'gold' as const,
      image: '/carlos-silva.webp',
    },
    {
      id: 2,
      name: 'Mariana Costa',
      role: 'CTO',
      company: 'StartupTech',
      content: 'Investimos na capacitação da equipe com a IA21 e os resultados foram impressionantes. Nossos produtos evoluíram significativamente.',
      rating: 5,
      theme: 'blue' as const,
      image: '/mariana-costa.webp',
    },
    {
      id: 3,
      name: 'Roberto Santos',
      role: 'Desenvolvedor Frontend',
      company: 'WebSolutions',
      content: 'Os instrutores são excepcionais e o conteúdo é muito prático. Aprendi mais em 8 semanas do que em cursos de 6 meses.',
      rating: 5,
      theme: 'gold' as const,
      image: '/roberto-santos.webp',
    },
    {
      id: 4,
      name: 'Ana Paula',
      role: 'Data Scientist',
      company: 'DataTech Solutions',
      content: 'A IA21 me deu as ferramentas necessárias para liderar projetos de machine learning em uma empresa multinacional. O conhecimento prático faz toda diferença.',
      rating: 5,
      theme: 'gold' as const,
      image: '/ana-paula.webp',
    },
    {
      id: 5,
      name: 'João Pedro',
      role: 'Product Manager',
      company: 'FinTech Innovations',
      content: 'Como gestor de produto, precisei entender tecnologia profundamente. A IA21 me proporcionou essa visão estratégica que estava faltando.',
      rating: 5,
      theme: 'blue' as const,
      image: '/joao-pedro.webp',
    },
    {
      id: 6,
      name: 'Sofia Mendes',
      role: 'UX Designer',
      company: 'Digital Agency',
      content: 'O programa de UX da IA21 revolucionou minha abordagem de design. Hoje crio experiências que realmente impactam os usuários e os negócios.',
      rating: 5,
      theme: 'gold' as const,
      image: '/sofia-mendes.webp',
    },
  ]

  const themeClasses = {
    gold: {
      accent: 'text-primary',
      star: 'fill-primary text-primary',
      primaryBadge: 'bg-primary/10 text-primary border-primary/20',
      secondaryBadge: 'bg-accent/10 text-accent border-accent/20'
    },
    blue: {
      accent: 'text-primary',
      star: 'fill-primary text-primary',
      primaryBadge: 'bg-primary/10 text-primary border-primary/20',
      secondaryBadge: 'bg-accent/10 text-accent border-accent/20'
    }
  }

  const currentTheme = themeClasses[theme]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            O que nossos <span className={currentTheme.accent}>alunos dizem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de transformação através da educação tecnológica
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative overflow-hidden">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${currentTheme.star}`} />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={`Foto de perfil de ${testimonial.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.company}
                    </div>
                  </div>
                </div>

                <Badge
                  variant="secondary"
                  className={`absolute top-4 right-4 ${
                    testimonial.theme === theme
                      ? currentTheme.primaryBadge
                      : currentTheme.secondaryBadge
                  }`}
                >
                  {testimonial.theme === 'gold' ? 'Para Você' : 'Para Empresas'}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tablet & Mobile Carousel */}
        <div className="lg:hidden relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              }
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-expect-error - Swiper types compatibility
              swiper.params.navigation.prevEl = prevRef.current
              // @ts-expect-error - Swiper types compatibility
              swiper.params.navigation.nextEl = nextRef.current
              swiper.navigation.init()
              swiper.navigation.update()
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <Card className="relative overflow-hidden h-full">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${currentTheme.star}`} />
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={`Foto de perfil de ${testimonial.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} • {testimonial.company}
                        </div>
                      </div>
                    </div>

                    <Badge
                      variant="secondary"
                      className={`absolute top-4 right-4 ${
                        testimonial.theme === theme
                          ? currentTheme.primaryBadge
                          : currentTheme.secondaryBadge
                      }`}
                    >
                      {testimonial.theme === 'gold' ? 'Para Você' : 'Para Empresas'}
                    </Badge>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5 text-gray-700" />
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  )
}
