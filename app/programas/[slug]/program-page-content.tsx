'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  Clock,
  Users,
  Star,
  CheckCircle,
  Play,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

export function ProgramPageContent({ slug }: { slug: string }) {
  const { data: session } = useSession()
  const router = useRouter()
  const [isEnrolling, setIsEnrolling] = useState(false)
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false)
  const [error, setError] = useState('')

  // Mock data - será substituído por dados reais do tRPC
  const program = {
    id: '1',
    slug: slug,
    title: 'Fundamentos de Desenvolvimento Web',
    description: 'Aprenda os conceitos essenciais de desenvolvimento web moderno. Este curso abrangente cobre desde HTML/CSS até frameworks avançados como React e Next.js.',
    summary: 'Curso completo sobre desenvolvimento web com foco em aplicações práticas.',
    format: 'Online ao vivo',
    level: 'Iniciante',
    duration: '8 semanas',
    price: 299,
    theme: 'gold' as const,
    published: true,
    instructor: {
      name: 'Dr. Maria Silva',
      bio: 'Especialista em desenvolvimento web com 10+ anos de experiência em projetos full-stack.',
      avatar: '/placeholder-avatar.jpg',
    },
    rating: 4.8,
    studentsCount: 156,
    reviewsCount: 42,
    curriculum: [
      {
        week: 1,
        title: 'Introdução ao Desenvolvimento Web',
        lessons: [
          'O que é desenvolvimento web',
          'HTML e CSS básicos',
          'Estrutura de uma página web',
        ],
      },
      {
        week: 2,
        title: 'CSS Avançado e Layout',
        lessons: [
          'Flexbox e Grid',
          'Design responsivo',
          'Animações e transições',
        ],
      },
      {
        week: 3,
        title: 'JavaScript Fundamental',
        lessons: [
          'Sintaxe básica',
          'DOM manipulation',
          'Eventos e interações',
        ],
      },
      {
        week: 4,
        title: 'React Básico',
        lessons: [
          'Componentes e JSX',
          'Estado e props',
          'Lifecycle methods',
        ],
      },
      {
        week: 5,
        title: 'React Avançado',
        lessons: [
          'Hooks personalizados',
          'Context API',
          'Performance optimization',
        ],
      },
      {
        week: 6,
        title: 'Next.js e SSR',
        lessons: [
          'Server-side rendering',
          'API routes',
          'Static generation',
        ],
      },
      {
        week: 7,
        title: 'Backend e Banco de Dados',
        lessons: [
          'APIs REST',
          'Banco de dados',
          'Autenticação',
        ],
      },
      {
        week: 8,
        title: 'Projeto Final e Deploy',
        lessons: [
          'Aplicação completa',
          'Deploy na nuvem',
          'Certificação',
        ],
      },
    ],
    whatYouWillLearn: [
      'Entender os fundamentos do desenvolvimento web',
      'Criar aplicações interativas com JavaScript',
      'Desenvolver interfaces modernas com React',
      'Construir aplicações full-stack',
      'Aplicar melhores práticas de desenvolvimento',
    ],
    requirements: [
      'Conhecimento básico de programação',
      'Computador com acesso à internet',
      'Disposição para aprender e praticar',
    ],
    targetAudience: 'Desenvolvedores iniciantes, profissionais de TI e empreendedores digitais',
  }

  const handleEnroll = async () => {
    if (!session) {
      router.push('/login')
      return
    }

    setIsEnrolling(true)
    setError('')

    try {
      // Aqui será implementado com tRPC
      // await trpc.enrollment.create.mutate({ programId: program.id })

      // Simulação de sucesso
      setTimeout(() => {
        setEnrollmentSuccess(true)
        setIsEnrolling(false)
      }, 2000)
    } catch {
      setError('Erro ao se matricular. Tente novamente.')
      setIsEnrolling(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/programas" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para programas
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Program Info */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <Badge
                  variant={program.theme === 'gold' ? 'default' : 'secondary'}
                  className={program.theme === 'gold' ? 'bg-brand-metallic-gold text-brand-rich-black hover:bg-brand-metallic-gold/90' : ''}
                >
                  {program.level}
                </Badge>
                <Badge variant="outline">{program.format}</Badge>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold">{program.title}</h1>
              <p className="text-lg text-muted-foreground">{program.summary}</p>

              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-brand-metallic-gold text-brand-metallic-gold" />
                  <span className="font-medium">{program.rating}</span>
                  <span className="text-muted-foreground">({program.reviewsCount} avaliações)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{program.studentsCount} alunos</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{program.duration}</span>
                </div>
              </div>
            </div>

            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-6">
                <CardContent className="p-6">
                  {enrollmentSuccess ? (
                    <div className="text-center space-y-4">
                      <CheckCircle className="w-16 h-16 text-brand-metallic-gold mx-auto" />
                      <div>
                        <h3 className="font-semibold text-lg">Matrícula realizada!</h3>
                        <p className="text-sm text-muted-foreground">
                          Você foi matriculado com sucesso neste programa.
                        </p>
                      </div>
                      <Button onClick={() => router.push('/dashboard')} className="w-full">
                        Ir para Dashboard
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary">R$ {program.price}</div>
                        <div className="text-sm text-muted-foreground">Valor único</div>
                      </div>

                      {error && (
                        <Alert variant="destructive">
                          <AlertDescription>{error}</AlertDescription>
                        </Alert>
                      )}

                      <Button
                        onClick={handleEnroll}
                        disabled={isEnrolling}
                        className="w-full"
                        size="lg"
                      >
                        {isEnrolling ? 'Matriculando...' : 'Matricular-se Agora'}
                      </Button>

                      <div className="text-xs text-muted-foreground text-center">
                        ✓ Acesso vitalício ao conteúdo
                        <br />
                        ✓ Certificado ao concluir
                        <br />
                        ✓ Suporte da comunidade
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Sobre o Programa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>

            {/* What You'll Learn */}
            <Card>
              <CardHeader>
                <CardTitle>O que você aprenderá</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {program.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-metallic-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Curriculum */}
            <Card>
              <CardHeader>
                <CardTitle>Conteúdo do Programa</CardTitle>
                <CardDescription>
                  {program.curriculum.length} semanas de aprendizado estruturado
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {program.curriculum.map((week) => (
                  <div key={week.week} className="border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">
                      Semana {week.week}: {week.title}
                    </h4>
                    <ul className="space-y-1">
                      {week.lessons.map((lesson, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Play className="w-3 h-3" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>Requisitos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {program.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-tech-blue mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Target Audience */}
            <Card>
              <CardHeader>
                <CardTitle>Público-alvo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{program.targetAudience}</p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructor */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Instrutor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">
                      {program.instructor.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{program.instructor.name}</h4>
                    <p className="text-sm text-muted-foreground">{program.instructor.bio}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Program Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Detalhes do Programa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Duração</span>
                  <span className="text-sm font-medium">{program.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Formato</span>
                  <span className="text-sm font-medium">{program.format}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Nível</span>
                  <span className="text-sm font-medium">{program.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Alunos</span>
                  <span className="text-sm font-medium">{program.studentsCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Avaliação</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-brand-metallic-gold text-brand-metallic-gold" />
                    <span className="text-sm font-medium">{program.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Pronto para começar?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Junte-se a {program.studentsCount} alunos já matriculados
                </p>
                <Button onClick={handleEnroll} className="w-full">
                  Matricular-se
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}