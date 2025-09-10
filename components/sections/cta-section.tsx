'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section
      className="py-20 px-4 bg-primary text-primary-foreground relative"
      style={{
        backgroundImage: 'url(/cta-background.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="px-3 py-1 bg-primary-foreground/10 text-primary-foreground">
                🚀 Comece Hoje
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Pronto para transformar sua carreira em tecnologia?
              </h2>
              <p className="text-xl leading-relaxed opacity-90">
                Junte-se a centenas de profissionais que já estão dominando o desenvolvimento de software.
                Seu futuro começa com um clique.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Inscrever-se Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-primary backdrop-blur-sm"
              >
                <Phone className="mr-2 h-5 w-5 text-white" />
                Falar com Especialista
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-tech-blue rounded-full"></div>
                <span className="text-sm">Certificação reconhecida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-tech-blue rounded-full"></div>
                <span className="text-sm">Suporte 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-tech-blue rounded-full"></div>
                <span className="text-sm">Garantia de satisfação</span>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <Card className="bg-white/20 border-white/30 backdrop-blur-md">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-white">
                    Entre em Contato
                  </h3>
                  <p className="text-white/90">
                    Tire suas dúvidas e receba orientação personalizada
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/40 border border-white/20">
                    <Mail className="h-5 w-5 text-white" />
                    <div>
                      <div className="font-medium text-white">Email</div>
                      <div className="text-sm text-white/90">contato@ia21.com.br</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/40 border border-white/20">
                    <Phone className="h-5 w-5 text-white" />
                    <div>
                      <div className="font-medium text-white">Telefone</div>
                      <div className="text-sm text-white/90">(11) 9999-9999</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-lg bg-white/40 border border-white/20">
                    <MessageCircle className="h-5 w-5 text-white" />
                    <div>
                      <div className="font-medium text-white">WhatsApp</div>
                      <div className="text-sm text-white/90">(11) 9999-9999</div>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  size="lg"
                >
                  Iniciar Conversa
                  <MessageCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
