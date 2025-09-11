'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, Rocket } from 'lucide-react'

export function HeroSectionB2B() {
  const handleVideoPlay = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget
    const videoContainer = button.parentElement?.parentElement
    const video = videoContainer?.querySelector('video')

    if (video) {
      button.style.display = 'none'
      button.parentElement!.style.display = 'none'

      video.controls = true
      video.play()
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-background via-background to-muted/20 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-3 py-1">
                <Rocket className="w-4 h-4 mr-2" />
                GRUPO IA21
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight break-words max-w-[22ch] sm:max-w-[28ch]">
                <span className="text-[#0B0B0B] font-black">Transforme sua</span>
                <span className="bg-gradient-to-r from-[#1C3B6F] to-[#0F1C3F] bg-clip-text text-transparent font-black"> Empresa</span>
                <br className="hidden sm:block" />
                <span className="text-[#0B0B0B] font-black"> em Líder de</span>
                <span className="bg-gradient-to-r from-[#1C3B6F] to-[#0F1C3F] bg-clip-text text-transparent font-black"> Mercado</span>
                <br className="block" />
                <span className="text-[#0B0B0B] font-black">com</span>
                <span className="bg-gradient-to-r from-[#1C3B6F] to-[#0F1C3F] bg-clip-text text-transparent font-black"> IA</span>
                <span className="text-[#0B0B0B] font-black"> Aplicada</span>
              </h1>

              {/* Elegant Divider below H1 */}
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#1C3B6F] via-[#1C3B6F]/60 to-transparent rounded-full mt-4 mb-4"></div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-prose">
                Programa corporativo completo: capacite toda sua equipe, reduza custos em até 40% e multiplique resultados
                <span className="font-bold text-foreground"> com metodologia comprovada em 200+ empresas brasileiras</span>
              </p>
            </div>

            {/* Stats B2B */}
            <div className="py-6 sm:py-8 hidden lg:block">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">40%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Redução de Custos</div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">200+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Empresas</div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">5x</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">ROI Médio</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex sm:flex-row gap-3 sm:gap-4">
              <Link href="/para-empresas">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto justify-center">
                  Agendar Demonstração Executiva
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

          </div>

          {/* Video */}
          <div className="relative">
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
                IA21 Corporativo
              </div>
            </div>
          </div>

          {/* Mobile-only: Stats and CTAs (placed after video) */}
          <div className="space-y-6 block lg:hidden">
            {/* Stats B2B Mobile */}
            <div className="py-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">40%</div>
                  <div className="text-xs text-muted-foreground">Redução de Custos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">200+</div>
                  <div className="text-xs text-muted-foreground">Empresas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5x</div>
                  <div className="text-xs text-muted-foreground">ROI Médio</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/para-empresas">
                <Button size="lg" className="text-base px-6 py-5 w-full justify-center">
                  Agendar Demonstração Executiva
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
