'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Play, Users, Award, BookOpen } from 'lucide-react'

export function HeroSection() {
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

          {/* Visual */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-0">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-32 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Desenvolvimento Web</h3>
                      <p className="text-sm text-muted-foreground">
                        Fundamentos e aplicações práticas
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-32 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Mentoria Técnica</h3>
                      <p className="text-sm text-muted-foreground">
                        Acompanhamento personalizado
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-32 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Award className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Certificação</h3>
                      <p className="text-sm text-muted-foreground">
                        Reconhecida pelo mercado
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-32 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Play className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Projetos Reais</h3>
                      <p className="text-sm text-muted-foreground">
                        Experiência prática garantida
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
