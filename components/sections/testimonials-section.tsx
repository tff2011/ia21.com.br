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

export function TestimonialsSection() {
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
    },
    {
      id: 2,
      name: 'Mariana Costa',
      role: 'CTO',
      company: 'StartupTech',
      content: 'Investimos na capacitação da equipe com a IA21 e os resultados foram impressionantes. Nossos produtos evoluíram significativamente.',
      rating: 5,
      theme: 'blue' as const,
    },
    {
      id: 3,
      name: 'Roberto Santos',
      role: 'Desenvolvedor Frontend',
      company: 'WebSolutions',
      content: 'Os instrutores são excepcionais e o conteúdo é muito prático. Aprendi mais em 8 semanas do que em cursos de 6 meses.',
      rating: 5,
      theme: 'gold' as const,
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            O que nossos <span className="text-primary">alunos dizem</span>
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
                    <Star key={i} className="h-4 w-4 fill-brand-metallic-gold text-brand-metallic-gold" />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
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
                    testimonial.theme === 'gold'
                      ? 'bg-[#C8A64B]/10 text-[#C8A64B] border-[#C8A64B]/20'
                      : 'bg-[#1C3B6F]/10 text-[#1C3B6F] border-[#1C3B6F]/20'
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
                        <Star key={i} className="h-4 w-4 fill-brand-metallic-gold text-brand-metallic-gold" />
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
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
                        testimonial.theme === 'gold'
                          ? 'bg-[#C8A64B]/10 text-[#C8A64B] border-[#C8A64B]/20'
                          : 'bg-[#1C3B6F]/10 text-[#1C3B6F] border-[#1C3B6F]/20'
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
