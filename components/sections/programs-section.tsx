'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function ProgramsSection() {
  const pathname = usePathname()
  const isBusinessTheme = pathname?.startsWith('/para-empresas')
  const accentBadgeClasses = isBusinessTheme
    ? 'border-brand-tech-blue/40 text-brand-tech-blue'
    : 'border-brand-metallic-gold/40 text-brand-metallic-gold'
  const accentIconClass = isBusinessTheme ? 'text-brand-tech-blue' : 'text-brand-metallic-gold'

  const pillars = [
    {
      id: 'pillar-1',
      badge: 'Pilar 1',
      title: 'Conversar',
      subtitle: 'Faça a IA trabalhar para você',
      description:
        'Use palavras simples para explicar o que você precisa. A IA passa de assistente confuso a parceiro inteligente.',
      highlights: [
        'Economize até 10 horas por semana com respostas certeiras',
        'Resumos claros de reuniões e textos complexos',
        'Pedidos que geram respostas certas de primeira',
      ],
    },
    {
      id: 'pillar-2',
      badge: 'Pilar 2',
      title: 'Criar',
      subtitle: 'Vire sua própria agência',
      description:
        'Transforme ideias em imagens, vídeos e textos profissionais mesmo sem saber design ou edição.',
      highlights: [
        'Produza 30 conteúdos premium por mês sem equipe',
        'Vídeos com apresentador virtual sem aparecer na câmera',
        'Campanhas completas sem depender de freelas',
      ],
    },
    {
      id: 'pillar-3',
      badge: 'Pilar 3',
      title: 'Automatizar',
      subtitle: 'Monte seu exército de robôs 24/7',
      description:
        'Deixe tarefas repetitivas rodando sozinhas enquanto você cuida do que traz resultado.',
      highlights: [
        'Coloque processos no piloto automático 24/7',
        'Arquivos, e-mails e relatórios organizados sozinhos',
        'Agenda e lembretes que se ajustam sem você pedir',
      ],
    },
    {
      id: 'pillar-4',
      badge: 'Pilar 4',
      title: 'Analisar',
      subtitle: 'Decida com base em fatos, não em achismos',
      description:
        'Enxergue oportunidades escondidas nos seus números e tome decisões seguras.',
      highlights: [
        'Tome decisões 3x mais certeiras com dados reais',
        'Antecipe tendências e movimentos do mercado',
        'Crie painéis simples que mostram o que importa',
      ],
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            CCAA: o método de 4 passos para fazer IA trabalhar por você
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conversar, Criar, Automatizar e Analisar — a fórmula que já transformou mais de 500 profissionais comuns em protagonistas digitais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pillars.map((pillar) => (
            <Card key={pillar.id} className="h-full border-border/60 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-4 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={`${accentBadgeClasses} uppercase tracking-wide`}>
                    {pillar.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{pillar.title}</CardTitle>
                <p className="text-sm font-medium text-muted-foreground">{pillar.subtitle}</p>
                <CardDescription className="text-sm">{pillar.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                <ul className="space-y-2 text-sm text-foreground">
                  {pillar.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <CheckCircle2 className={`h-4 w-4 ${accentIconClass} mt-0.5`} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
