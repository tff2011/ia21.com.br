'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Users, Target, Heart, Trophy, Clock, DollarSign, Briefcase, Mail, Phone } from 'lucide-react'

export default function CarreirasPage() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const benefits = [
    {
      icon: Heart,
      title: 'Saúde e Bem-estar',
      description: 'Plano de saúde completo, odontológico e seguro de vida'
    },
    {
      icon: Clock,
      title: 'Flexibilidade',
      description: 'Horário flexível e trabalho remoto híbrido'
    },
    {
      icon: Trophy,
      title: 'Desenvolvimento',
      description: 'Cursos, treinamentos e participação em conferências'
    },
    {
      icon: DollarSign,
      title: 'Remuneração',
      description: 'Salário competitivo + benefícios + participação nos lucros'
    },
    {
      icon: Users,
      title: 'Ambiente',
      description: 'Equipe colaborativa e cultura de inovação'
    },
    {
      icon: Target,
      title: 'Impacto',
      description: 'Trabalhe em projetos que fazem a diferença'
    }
  ]

  // As vagas serão exibidas aqui quando houver posições abertas

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-carreiras.webp"
            alt="Equipe colaborativa trabalhando em ambiente de inovação tecnológica"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-6">
            <Badge variant="secondary" className="px-4 py-2 text-white border-white/20 bg-white/10 backdrop-blur-sm">
              <Users className="w-5 h-5 mr-2" />
              Carreiras
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Faça Parte do <span className="text-primary">Futuro</span> da Educação
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Junte-se à nossa equipe e ajude a transformar vidas através da educação tecnológica.
              Buscamos pessoas apaixonadas por inovação e impacto social.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="btn-hero-primary px-8 py-4"
                onClick={() => handleScrollToSection('sobre-nos')}
              >
                Conheça Nossa Empresa
              </Button>
              <Button size="lg" className="btn-hero-secondary px-8 py-4">
                Deixar Currículo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="sobre-nos" className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Por que trabalhar na IA21?</h2>
            <p className="text-lg text-muted-foreground">
              Somos uma empresa jovem e dinâmica, focada em transformar a educação através da
              tecnologia. Nossa missão é democratizar o acesso ao conhecimento de qualidade,
              e para isso, precisamos de pessoas talentosas e comprometidas.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Profissionais</div>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Nossa Missão
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Democratizar o acesso à educação de qualidade, capacitando profissionais
                  para os desafios da era digital através de tecnologia e inovação.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Nossos Valores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Inovação:</strong> Buscamos constantemente novas soluções</li>
                  <li>• <strong>Impacto:</strong> Medimos nosso sucesso pelo impacto que geramos</li>
                  <li>• <strong>Colaboração:</strong> Crescemos juntos como equipe</li>
                  <li>• <strong>Transparência:</strong> Mantemos comunicação aberta e honesta</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que nos escolher?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos um ambiente de trabalho que valoriza o crescimento pessoal e profissional,
              com benefícios competitivos e oportunidades de desenvolvimento.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vagas Abertas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No momento, não temos vagas abertas, mas estamos sempre em busca de talento excepcional.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto text-center py-12">
            <CardContent className="space-y-6">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Briefcase className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Sem vagas abertas no momento</h3>
                <p className="text-muted-foreground">
                  Mas isso não significa que não estamos interessados em conhecer você!
                  Deixe seu currículo conosco e entraremos em contato quando surgirem
                  oportunidades que combinem com seu perfil.
                </p>
              </div>
              <Button size="lg" className="mt-6">
                <Mail className="w-4 h-4 mr-2" />
                Deixar Currículo
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Não encontrou a vaga ideal?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Mesmo que não tenhamos uma vaga aberta que combine com seu perfil,
              adoraríamos conhecer você. Envie seu currículo e vamos conversar sobre
              oportunidades futuras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Briefcase className="w-4 h-4 mr-2" />
                Enviar Currículo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Falar com RH
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-muted-foreground mb-6">
            Dúvidas sobre nossas vagas ou processo seletivo?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Mail className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-medium">Email</div>
                <div className="text-sm text-muted-foreground">carreiras@ia21.com.br</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
              <Phone className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-medium">Telefone</div>
                <div className="text-sm text-muted-foreground">(11) 9999-9999</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
