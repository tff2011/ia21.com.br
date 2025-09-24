'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, ShieldCheck } from 'lucide-react'

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
                CCAA ENTERPRISE
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight break-words max-w-[24ch] sm:max-w-[30ch]">
                <span className="text-[#0B0B0B] font-black">Reduza </span>
                <span className="bg-gradient-to-r from-[#1C3B6F] to-[#0F1C3F] bg-clip-text text-transparent font-black">40% dos custos</span>
                <span className="text-[#0B0B0B] font-black"> operacionais em 90 dias</span>
              </h1>

              {/* Elegant Divider below H1 */}
              <div className="w-20 h-0.5 bg-gradient-to-r from-[#1C3B6F] via-[#1C3B6F]/60 to-transparent rounded-full mt-4 mb-4"></div>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-prose">
                Transforme cada funcionário em operador de IA altamente produtivo — sem trocar sistemas, sem contratar programadores,
                sem complicação. Método comprovado que já economizou R$ 127 milhões para empresas brasileiras.
              </p>
            </div>

            {/* Stats B2B */}
            <div className="py-6 sm:py-8 hidden lg:block">
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">40%</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Redução média de custos</div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">R$ 127M</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Economizados no Brasil</div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Equipes treinadas</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contato">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto justify-center">
                  Agendar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                ✓ Sem compromisso · ✓ Análise personalizada · ✓ Cálculo de ROI na hora
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <p className="text-sm text-muted-foreground">
                Implementação guiada com indicadores auditáveis e acompanhamento executivo semanal.
              </p>
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
                  <div className="text-xs text-muted-foreground">Redução média de custos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">R$ 127M</div>
                  <div className="text-xs text-muted-foreground">Economizados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Equipes treinadas</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contato">
                <Button size="lg" className="text-base px-6 py-5 w-full justify-center">
                  Agendar Diagnóstico Gratuito
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground">
              ✓ Sem compromisso · ✓ Análise personalizada · ✓ Cálculo de ROI na hora
            </p>

            <div className="flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 px-4 py-3">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <p className="text-sm text-muted-foreground">
                Implementação guiada com indicadores auditáveis e acompanhamento executivo semanal.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
