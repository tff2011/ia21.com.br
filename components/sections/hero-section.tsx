'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play } from 'lucide-react'

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
    <section className="relative bg-gradient-to-br from-background via-background to-muted/20 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-3 py-1">
                🚀 IA21 Educação
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Desenvolvimento
                <span className="text-primary"> para o Futuro</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Desenvolva habilidades essenciais em tecnologia com cursos especializados,
                mentorias personalizadas e projetos práticos. Seu futuro começa aqui.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Começar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Alunos Formados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Cursos Disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="relative">
            <div className="relative aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20 overflow-hidden shadow-2xl">
              {/* Video Container */}
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                {/* Play Button Overlay */}
                <button 
                  className="group relative z-10 w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  aria-label="Reproduzir vídeo"
                  onClick={handleVideoPlay}
                >
                  <Play className="h-8 w-8 text-primary ml-1 group-hover:scale-110 transition-transform duration-300" fill="currentColor" />
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
                poster="/video-thumbnail.jpg"
                preload="metadata"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                <source src="/hero-video.webm" type="video/webm" />
                Seu navegador não suporta reprodução de vídeo.
              </video>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                IA21 em Ação
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
