'use client'

import Image from 'next/image'

const technologies = [
  { name: 'Claude AI', logo: '/empresas-ia/claude.png' },
  { name: 'Cursor', logo: '/empresas-ia/cursor.png' },
  { name: 'DeepSeek', logo: '/empresas-ia/deepseek.png' },
  { name: 'Google Gemini', logo: '/empresas-ia/gemini.png' },
  { name: 'Google Veo 3', logo: '/empresas-ia/google-veo3.png' },
  { name: 'n8n', logo: '/empresas-ia/n8n.png' },
  { name: 'Nano Banana', logo: '/empresas-ia/nano-banana-logo.png' },
  { name: 'OpenAI', logo: '/empresas-ia/openai.png' },
]

export function TechCarousel() {
  return (
    <div className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Algumas das Ferramentas de <span className="text-primary">IA</span> que Ensinamos
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Domine algumas das principais plataformas de Inteligência Artificial do mercado
          </p>
        </div>
        
        <div className="relative overflow-hidden mask-gradient pb-16">
          <div className="flex gap-16 tech-scroll">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 group cursor-pointer"
              >
                <div className="relative">
                  <div className="w-24 h-24 flex items-center justify-center bg-background/50 backdrop-blur-sm rounded-2xl border border-border/40 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-background group-hover:border-primary/20 p-3">
                    <div className="relative w-full h-full">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain transition-all duration-500 
                                 filter grayscale brightness-75 contrast-125
                                 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100
                                 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="text-xs font-medium text-muted-foreground/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-border/40 shadow-sm">
                      {tech.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .tech-scroll {
          animation: tech-scroll 50s linear infinite;
          width: calc(200% + 64px);
        }
        
        .tech-scroll:hover {
          animation-play-state: paused;
        }
        
        .mask-gradient {
          mask: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
        
        @keyframes tech-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (max-width: 768px) {
          .tech-scroll {
            animation: tech-scroll 35s linear infinite;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .tech-scroll {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}