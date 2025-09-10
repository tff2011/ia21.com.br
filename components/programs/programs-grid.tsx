'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'

import { usePathname } from 'next/navigation'

export function ProgramsGrid() {
  const pathname = usePathname()
  const isBusinessTheme = pathname?.startsWith('/para-empresas')

  const programs = [
    {
      id: 1,
      slug: 'fundamentos-desenvolvimento-web',
      title: 'Fundamentos de Desenvolvimento Web',
      description: 'Aprenda os conceitos essenciais de HTML, CSS e JavaScript para criar aplicações web.',
      duration: '8 semanas',
      level: 'Iniciante',
      students: 156,
      rating: 4.8,
      theme: 'gold' as const,
      price: 'R$ 299',
      format: 'Online ao vivo',
    },
    {
      id: 2,
      slug: 'react-nextjs-avancado',
      title: 'React e Next.js Avançado',
      description: 'Domine React, Next.js e técnicas modernas de desenvolvimento frontend.',
      duration: '12 semanas',
      level: 'Avançado',
      students: 89,
      rating: 4.9,
      theme: 'gold' as const,
      price: 'R$ 599',
      format: 'Híbrido',
    },
    {
      id: 3,
      slug: 'desenvolvimento-full-stack',
      title: 'Desenvolvimento Full-Stack',
      description: 'Implemente aplicações completas com frontend e backend integrados.',
      duration: '6 semanas',
      level: 'Intermediário',
      students: 67,
      rating: 4.7,
      theme: 'blue' as const,
      price: 'R$ 799',
      format: 'Presencial',
    },
    {
      id: 4,
      slug: 'ux-ui-design-prototipagem',
      title: 'UX/UI Design e Prototipagem',
      description: 'Crie interfaces incríveis e experiências de usuário memoráveis.',
      duration: '10 semanas',
      level: 'Intermediário',
      students: 134,
      rating: 4.8,
      theme: 'blue' as const,
      price: 'R$ 499',
      format: 'Online',
    },
    {
      id: 5,
      slug: 'javascript-moderno',
      title: 'JavaScript Moderno e ES6+',
      description: 'Aprenda as últimas funcionalidades do JavaScript e melhores práticas.',
      duration: '8 semanas',
      level: 'Intermediário',
      students: 92,
      rating: 4.6,
      theme: 'gold' as const,
      price: 'R$ 399',
      format: 'Online ao vivo',
    },
    {
      id: 6,
      slug: 'backend-nodejs',
      title: 'Backend com Node.js',
      description: 'Domine Node.js, APIs REST e bancos de dados para desenvolvimento backend.',
      duration: '10 semanas',
      level: 'Avançado',
      students: 78,
      rating: 4.9,
      theme: 'gold' as const,
      price: 'R$ 649',
      format: 'Híbrido',
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program) => (
        <Card key={program.id} className="group hover:shadow-lg transition-all duration-300">
          <CardHeader className="pb-4">
            <div className="flex justify-between items-start mb-2">
              <Badge
                variant="default"
                className={
                  isBusinessTheme
                    ? 'bg-brand-tech-blue hover:bg-brand-tech-blue/90 text-white'
                    : 'bg-brand-metallic-gold hover:bg-brand-metallic-gold/90 text-white'
                }
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
              <div className="text-sm text-muted-foreground">
                📍 {program.format}
              </div>
            </div>

            <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              Ver Detalhes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
