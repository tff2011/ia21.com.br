'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, Rocket } from 'lucide-react'

export function HeroSection() {
  const handleVideoPlay = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget
    const videoContainer = button.parentElement?.parentElement
    const video = videoContainer?.querySelector('video')
    
    if (video) {
      // Hide play button and overlay
      button.style.display = 'none'
      button.parentElement!.style.display = 'none'
      
      // Show video controls and play
      video.controls = true
      video.play()
    }
  }
  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted/20 py-10 sm:py-14 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-8 lg:gap-x-12 items-center">
          {/* Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <Badge variant="secondary" className="px-3 py-1">
                <Rocket className="w-4 h-4 mr-2" />
                GRUPO IA21
              </Badge>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight break-words max-w-[22ch] sm:max-w-[28ch]">
                <span className="text-[#0B0B0B] font-black">Domine</span>
                <span className="bg-gradient-to-r from-[#C8A253] to-[#B8860B] bg-clip-text text-transparent font-black"> IA</span>
                <span className="text-[#0B0B0B] font-bold">.</span>
                <br className="hidden sm:block" />
                <span className="text-[#0B0B0B] font-black"> Lidere o</span>
                <span className="bg-gradient-to-r from-[#C8A253] to-[#B8860B] bg-clip-text text-transparent font-black"> Mercado</span>
                <span className="text-[#0B0B0B] font-bold">.</span>
                <br className="block" />
                <span className="bg-gradient-to-r from-[#C8A253] to-[#B8860B] bg-clip-text text-transparent font-black">Resultados</span>
                <span className="text-[#0B0B0B] font-black"> Mensuráveis</span>
                <span className="text-[#0B0B0B] font-bold">.</span>
              </h1>

              {/* Elegant Divider below H1 */}
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#C8A253] via-[#C8A253]/60 to-transparent rounded-full mt-4 mb-4"></div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-prose">
                Ecossistema completo de formação em Inteligência Artificial -
                <span className="font-bold text-foreground"> junte-se a milhares de profissionais que já dominam IA</span>
              </p>
            </div>

            {/* Social Proof Section */}
            <div className="py-6 sm:py-8 hidden lg:block">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full whitespace-nowrap">
                <div className="flex -space-x-1">
                  <img
                    src="/professional-1.webp"
                    alt="Profissional 1"
                    className="w-5 h-5 rounded-full border border-white shadow-sm object-cover"
                  />
                  <img
                    src="/professional-2.webp"
                    alt="Profissional 2"
                    className="w-5 h-5 rounded-full border border-white shadow-sm object-cover"
                  />
                  <img
                    src="/professional-3.webp"
                    alt="Profissional 3"
                    className="w-5 h-5 rounded-full border border-white shadow-sm object-cover"
                  />
                  <img
                    src="/professional-4.webp"
                    alt="Profissional 4"
                    className="w-5 h-5 rounded-full border border-white shadow-sm object-cover"
                  />
                  <img
                    src="/professional-5.webp"
                    alt="Profissional 5"
                    className="w-5 h-5 rounded-full border border-white shadow-sm object-cover"
                  />
                </div>
                <p className="ml-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Confiado por milhares de profissionais em 5.277 cargos diferentes
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex sm:flex-row gap-3 sm:gap-4">
              <Link href="/signup">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto justify-center">
                  Começar Minha Jornada
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/para-empresas">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto justify-center bg-brand-deep-navy-blue text-white border-brand-deep-navy-blue hover:bg-brand-deep-navy-blue/90 hover:text-white"
                >
                  IA para Empresas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

          </div>

          {/* Video */}
          <div className="relative w-full">
            <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 overflow-hidden shadow-2xl">
              {/* Overlay above video for mobile correctness */}
              <div className="absolute inset-0 z-10 bg-black/10 flex items-center justify-center">
                {/* Play Button Overlay */}
                <button
                  className="group relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  aria-label="Reproduzir vídeo"
                  onClick={handleVideoPlay}
                >
                  <Play className="h-6 w-6 sm:h-8 sm:w-8 text-primary ml-1 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
                </button>
                
                {/* Video Thumbnail/Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                  {/* Optional: Add video thumbnail image here */}
                  {/* <img src="/video-thumbnail.jpg" alt="Vídeo de apresentação" className="w-full h-full object-cover" /> */}
                </div>
              </div>
              
              {/* Video Element (hidden initially, will be shown when play is clicked) */}
              <video
                className="w-full h-full object-cover"
                controls={false}
                poster="/hero-blog.webp"
                preload="none"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                <source src="/hero-video.webm" type="video/webm" />
                Seu navegador não suporta reprodução de vídeo.
              </video>
              
              {/* Decorative elements */}
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 px-2 py-1 sm:px-3 sm:py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-white">
                IA21 em Ação
              </div>
            </div>
          </div>

          {/* Mobile-only: Social proof, CTAs and companies (placed after video) */}
          <div className="space-y-6 block lg:hidden">
            {/* Social Proof Section */}
            <div className="py-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 w-full">
                <div className="flex -space-x-1 flex-shrink-0">
                  <img
                    src="/professional-1.webp"
                    alt="Profissional 1"
                    className="w-5 h-5 sm:w-5 sm:h-5 rounded-full border border-white shadow-sm object-cover"
                  />
                  <img
                    src="/professional-2.webp"
                    alt="Profissional 2"
                    className="w-5 h-5 sm:w-5 sm:h-5 rounded-full border border-white shadow-sm object-cover"
                  />
                  <img
                    src="/professional-3.webp"
                    alt="Profissional 3"
                    className="w-5 h-5 sm:w-5 sm:h-5 rounded-full border border-white shadow-sm object-cover"
                  />
                  <div className="w-5 h-5 sm:w-5 sm:h-5 rounded-full border border-white bg-muted text-[11px] sm:text-[11px] flex items-center justify-center font-medium text-foreground/70">
                    +2
                  </div>
                </div>
                <p className="text-center sm:text-left text-sm sm:text-sm text-muted-foreground leading-relaxed">
                  Confiado por milhares de profissionais em 5.277 cargos diferentes
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/signup">
                <Button size="lg" className="text-base px-6 py-5 w-full justify-center">
                  Começar Minha Jornada
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/para-empresas">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-6 py-5 w-full justify-center bg-brand-deep-navy-blue text-white border-brand-deep-navy-blue hover:bg-brand-deep-navy-blue/90 hover:text-white"
                >
                  IA para Empresas
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
