'use client'

import { useAuth } from '@/lib/hooks/use-auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  BookOpen,
  Trophy,
  Clock,
  TrendingUp,
  Award,
  Calendar,
  PlayCircle,
  CheckCircle,
  Star
} from 'lucide-react'

export default function DashboardPage() {
  const { user, isLoading, isAuthenticated } = useAuth()

  // Mock data - será substituído por dados reais do tRPC
  const userStats = {
    enrolledPrograms: 3,
    completedPrograms: 1,
    totalHours: 24,
    averageScore: 8.5,
    streakDays: 7,
    certificatesEarned: 2,
  }

  const enrolledPrograms = [
    {
      id: 1,
      title: 'Fundamentos de Desenvolvimento Web',
      progress: 75,
      nextLesson: 'React Hooks - Parte 2',
      dueDate: '2025-01-20',
      status: 'in_progress',
    },
    {
      id: 2,
      title: 'JavaScript Avançado',
      progress: 30,
      nextLesson: 'Programação Assíncrona',
      dueDate: '2025-01-25',
      status: 'in_progress',
    },
    {
      id: 3,
      title: 'Desenvolvimento Full-Stack',
      progress: 100,
      nextLesson: 'Concluído',
      dueDate: '2025-01-15',
      status: 'completed',
    },
  ]

  const recentAchievements = [
    {
      id: 1,
      title: 'Primeiro Programa Concluído',
      description: 'Completou seu primeiro programa de desenvolvimento',
      date: '2025-01-15',
      icon: Trophy,
    },
    {
      id: 2,
      title: 'Sequência de 7 Dias',
      description: '7 dias consecutivos de estudos',
      date: '2025-01-18',
      icon: Calendar,
    },
    {
      id: 3,
      title: 'Nota Máxima',
      description: 'Tirou 10 em Desenvolvimento Web Básico',
      date: '2025-01-12',
      icon: Star,
    },
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">
                Olá, {user?.name?.split(' ')[0]}! 👋
              </h1>
              <p className="text-muted-foreground mt-1">
                Continue sua jornada de aprendizado
              </p>
            </div>
            <Badge variant="secondary" className="px-3 py-1">
              {user?.role === 'aluno' ? 'Aluno' :
               user?.role === 'mentor' ? 'Mentor' :
               user?.role === 'staff' ? 'Staff' : 'Usuário'}
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Programas Ativos</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.enrolledPrograms}</div>
              <p className="text-xs text-muted-foreground">
                +2 este mês
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Horas de Estudo</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.totalHours}h</div>
              <p className="text-xs text-muted-foreground">
                +12h esta semana
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sequência</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.streakDays} dias</div>
              <p className="text-xs text-muted-foreground">
                Melhor: 14 dias
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Certificados</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userStats.certificatesEarned}</div>
              <p className="text-xs text-muted-foreground">
                +1 este mês
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="programs" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="programs">Meus Programas</TabsTrigger>
            <TabsTrigger value="achievements">Conquistas</TabsTrigger>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
          </TabsList>

          <TabsContent value="programs" className="space-y-6">
            <div className="grid gap-6">
              {enrolledPrograms.map((program) => (
                <Card key={program.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{program.title}</CardTitle>
                        <CardDescription>
                          Próxima aula: {program.nextLesson}
                        </CardDescription>
                      </div>
                      <Badge
                        variant={program.status === 'completed' ? 'default' : 'secondary'}
                        className={program.status === 'completed' ? 'bg-brand-metallic-gold text-brand-rich-black' : ''}
                      >
                        {program.status === 'completed' ? (
                          <>
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Concluído
                          </>
                        ) : (
                          'Em andamento'
                        )}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progresso</span>
                        <span>{program.progress}%</span>
                      </div>
                      <Progress value={program.progress} className="h-2" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          Prazo: {new Date(program.dueDate).toLocaleDateString('pt-BR')}
                        </div>
                        <Button size="sm">
                          <PlayCircle className="w-4 h-4 mr-1" />
                          Continuar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid gap-4">
              {recentAchievements.map((achievement) => {
                const IconComponent = achievement.icon
                return (
                  <Card key={achievement.id}>
                    <CardContent className="flex items-center space-x-4 p-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(achievement.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      <Badge variant="secondary">Novo</Badge>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informações do Perfil</CardTitle>
                <CardDescription>
                  Gerencie suas informações pessoais e preferências
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Nome</label>
                    <p className="text-sm text-muted-foreground">{user?.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tipo de Conta</label>
                    <p className="text-sm text-muted-foreground">
                      {user?.role === 'aluno' ? 'Aluno' :
                       user?.role === 'mentor' ? 'Mentor' :
                       user?.role === 'staff' ? 'Staff' : 'Usuário'}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Membro desde</label>
                    <p className="text-sm text-muted-foreground">Janeiro 2025</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button variant="outline">Editar Perfil</Button>
                  <Button variant="outline">Configurações</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
