'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'

export function ProgramsSection() {
  const programs = [
    {
      id: 1,
      title: 'Fundamentos de Desenvolvimento Web',
      description: 'Aprenda os conceitos essenciais de HTML, CSS e JavaScript para criar aplicações web.',
      duration: '8 semanas',
      level: 'Iniciante',
      students: 156,
      rating: 4.8,
      theme: 'gold' as const,
      price: 'R$ 299',
    },
    {
      id: 2,
      title: 'React e Next.js Avançado',
      description: 'Domine React, Next.js e técnicas modernas de desenvolvimento frontend.',
      duration: '12 semanas',
      level: 'Avançado',
      students: 89,
      rating: 4.9,
      theme: 'gold' as const,
      price: 'R$ 599',
    },
    {
      id: 3,
      title: 'Desenvolvimento Full-Stack',
      description: 'Implemente aplicações completas com frontend e backend integrados.',
      duration: '6 semanas',
      level: 'Intermediário',
      students: 67,
      rating: 4.7,
      theme: 'blue' as const,
      price: 'R$ 799',
    },
    {
      id: 4,
      title: 'UX/UI Design e Prototipagem',
      description: 'Crie interfaces incríveis e experiências de usuário memoráveis.',
      duration: '10 semanas',
      level: 'Intermediário',
      students: 134,
      rating: 4.8,
      theme: 'blue' as const,
      price: 'R$ 499',
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Programas de <span className="text-primary">Excelência</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o programa ideal para seu perfil e acelere sua carreira em tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((program) => (
            <Card key={program.id} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant={program.theme === 'gold' ? 'default' : 'secondary'}
                    className={program.theme === 'gold' ? 'bg-[#C8A64B] hover:bg-[#A6863B]' : ''}
                  >
                    {program.level}
                  </Badge>
                  <div className="text-right">
                    <div className="font-bold text-lg">{program.price}</div>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {program.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {program.students} alunos
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-brand-metallic-gold text-brand-metallic-gold" />
                    {program.rating} ({Math.floor(program.students * 0.3)}+ avaliações)
                  </div>
                </div>

                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Saiba Mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            Ver Todos os Programas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
