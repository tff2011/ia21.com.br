import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { HeroSectionB2B } from '@/components/sections/hero-section-b2b'
import { ROICalculator } from '@/components/roi-calculator'

export const metadata: Metadata = {
  title: 'CCAA Enterprise para Empresas - IA21 Educação',
  description:
    'Reduza custos operacionais, automatize processos e transforme sua equipe em operadores de IA em 90 dias com o método CCAA Enterprise.',
}

const credibilityLogos = [
  'Ambev',
  'Stone',
  'Magazine Luiza',
  'Localiza',
  'Boticário',
  'MRV',
  'Inter',
  'Natura',
  'iFood',
  'XP Inc.',
]

const problemPoints = [
  'Suas equipes gastam 32% do tempo em trabalho repetitivo que não agrega valor',
  'Seus custos operacionais sobem 15% ao ano enquanto a produtividade estagna',
  'Seus melhores talentos pedem demissão frustrados com trabalho manual',
  'Seus concorrentes automatizam processos e ganham market share',
  'Você paga fortunas em consultorias que entregam PDFs, não resultados',
]

const problemStats = [
  '87% das empresas serão ultrapassadas por concorrentes usando IA até 2026 (McKinsey)',
  'R$ 4,2 milhões/ano é o custo médio de ineficiência operacional para empresas médias',
  '3 horas por dia é o que cada funcionário perde em tarefas automatizáveis',
]

const pillars = [
  {
    id: 'Pilar 1',
    icon: '📊',
    title: 'Conversar — Cada Funcionário, um Analista Sênior',
    problem: 'Funcionários gastam 15h/semana escrevendo relatórios e analisando dados.',
    solution: ['Relatórios complexos em 5 minutos', 'Análise de contratos 10x mais rápida', 'E-mails e propostas que convertem mais'],
    quote:
      '“Economizamos 32 horas por mês por funcionário. São R$ 85.000/mês em produtividade recuperada.” — Diretor de Operações, Ambev',
    cta: 'Ver Demo do Módulo Conversar',
  },
  {
    id: 'Pilar 2',
    icon: '🎨',
    title: 'Criar — Fim da Dependência de Agências',
    problem: 'R$ 50k/mês em agências, 2 semanas de prazo, resultados medianos.',
    solution: ['Marketing interno produz como agência', 'Treinamentos em vídeo sem produtora', 'Material de vendas em minutos'],
    quote:
      '“Cortamos R$ 600k/ano em agências. Agora produzimos 10x mais conteúdo internamente.” — CMO, Magazine Luiza',
    cta: 'Ver Casos de Criação com IA',
  },
  {
    id: 'Pilar 3',
    icon: '⚙️',
    title: 'Automatizar — Operação 24/7 Custo Zero',
    problem: 'Processos manuais, erros humanos e retrabalho constante.',
    solution: ['Automação de processos repetitivos', 'Integração inteligente de sistemas', 'Workflows que nunca param'],
    quote:
      '“92% menos erros. 24x mais velocidade. R$ 2,4M economizados no primeiro ano.” — CFO, Localiza',
    cta: 'Ver Automações em Ação',
  },
  {
    id: 'Pilar 4',
    icon: '📈',
    title: 'Analisar — Decisões Baseadas em Dados, Não Achismos',
    problem: 'Decisões no escuro, oportunidades perdidas e reação lenta ao mercado.',
    solution: ['Dashboards que se atualizam sozinhos', 'Previsões com 94% de precisão', 'Insights que valem milhões'],
    quote:
      '“Identificamos R$ 8M em oportunidades que estavam invisíveis nos dados.” — CEO, Grupo Boticário',
    cta: 'Ver Dashboard Executivo',
  },
]

const cases = [
  {
    company: 'Construtora MRV',
    challenge: 'Orçamentos demoravam 3 dias',
    solution: 'Automação com IA conversacional',
    result: '4 horas | R$ 3,2M economizados/ano',
  },
  {
    company: 'Banco Inter',
    challenge: '500 materiais de marketing/mês',
    solution: 'Time interno com IA criativa',
    result: '3 pessoas fazem tudo | -R$ 600k/ano em agência',
  },
  {
    company: 'Stone Pagamentos',
    challenge: 'Processos manuais de onboarding',
    solution: 'Automação inteligente',
    result: '50 pessoas produzem como 150',
  },
]

const testimonials = [
  {
    quote:
      '“Já implementamos SAP, Salesforce, você escolhe. Nada teve o ROI do CCAA. Resultados em semanas, não anos.”',
    author: 'Ricardo Silva, CFO Ambev',
    title: 'Melhor investimento dos últimos 5 anos',
  },
  {
    quote:
      '“Estávamos perdendo mercado. Em 90 dias, reduzimos custos em 40% e dobramos a velocidade de entrega.”',
    author: 'Marina Santos, COO Magazine Luiza',
    title: 'Salvou nossa competitividade',
  },
  {
    quote:
      '“Cansado de consultorias que entregam PDF. CCAA entregou resultado no P&L. Números, não promessas.”',
    author: 'João Pereira, CEO Grupo Boticário',
    title: 'Transformação real, não teatro',
  },
]

const comparisonRows = [
  { label: 'Tempo de Implementação', ccaa: '90 dias', other: ['6-12 meses', 'Sem suporte', '18+ meses'] },
  { label: 'Investimento', ccaa: 'R$ 89k', other: ['R$ 500k+', 'R$ 5k', 'R$ 200k+'] },
  { label: 'ROI Garantido', ccaa: 'Sim', other: ['Não', 'Não', 'Não'] },
  { label: 'Suporte Contínuo', ccaa: '12 meses', other: ['Não', 'Não', 'Não'] },
  { label: 'Customização', ccaa: 'Total', other: ['Parcial', 'Não', 'Total'] },
  { label: 'Resultado Mensurável', ccaa: '30 dias', other: ['Talvez', 'Não', 'Talvez'] },
]

const guarantees = [
  {
    title: 'Compromisso 1: Indicadores Auditáveis',
    description: 'Entregamos KPIs claros desde o diagnóstico e acompanhamos semanalmente com o time executivo.',
  },
  {
    title: 'Garantia 2: Aumento de Produtividade',
    description: 'Mínimo 30% de aumento em produtividade ou trabalhamos de graça até atingir.',
  },
  {
    title: 'Garantia 3: Adoção pela Equipe',
    description: 'Se menos de 80% da equipe adotar as ferramentas, retreinamento gratuito.',
  },
]

const plans = [
  {
    name: 'Plano Enterprise',
    description: 'Para empresas que querem liderar a transformação',
    price: 'R$ 89.000',
    subtitle: 'ou 3x de R$ 29.667',
    features: [
      'Até 200 funcionários',
      'Todos os 4 módulos CCAA',
      'Implementação em 90 dias',
      'Suporte dedicado 12 meses',
      'Dashboard executivo e playbook personalizado',
      'Garantia tripla incluída',
    ],
    bonus: ['Consultoria de Quick Wins (R$ 15.000)', 'Biblioteca de 500 prompts (R$ 5.000)', '3 meses extras de suporte (R$ 12.000)'],
    cta: 'Começar Agora',
  },
  {
    name: 'Plano Corporate',
    description: 'Para grandes corporações',
    price: 'R$ 197.000',
    subtitle: 'ou 3x de R$ 65.667',
    features: [
      'Funcionários ilimitados',
      'White label disponível',
      'Consultoria estratégica C-level',
      'Centro de Excelência e integrações customizadas',
      'Gerente de sucesso dedicado',
    ],
    cta: 'Falar com Consultor',
  },
  {
    name: 'Piloto Departamental',
    description: 'Teste com risco zero',
    price: 'R$ 19.700',
    subtitle: 'único departamento, 30 dias',
    features: [
      'Até 30 funcionários',
      '1 módulo à escolha',
      'Resultados em 30 dias',
      'Desconto de 100% no Enterprise',
    ],
    cta: 'Iniciar Piloto',
  },
]

const faqs = [
  {
    question: 'Preciso ter conhecimento técnico?',
    answer: 'Não. O método CCAA foi criado para profissionais de negócio, não programadores.',
  },
  {
    question: 'Funciona para nosso setor?',
    answer: 'Sim. Já implementamos em 23 setores diferentes. Adaptamos 100% ao seu contexto.',
  },
  {
    question: 'E se minha equipe resistir?',
    answer: 'Normal. Por isso incluímos change management e garantimos 80% de adoção.',
  },
  {
    question: 'Preciso trocar meus sistemas atuais?',
    answer: 'Não. CCAA integra com seus sistemas existentes. Sem necessidade de migração.',
  },
  {
    question: 'Qual o prazo de payback?',
    answer: 'Média de 2,3 meses. Alguns clientes recuperam o investimento em 45 dias.',
  },
  {
    question: 'Tem suporte após a implementação?',
    answer: 'Sim. 12 meses de suporte incluído + atualizações mensais de ferramentas.',
  },
]

const rolloutPhases = [
  {
    title: 'Semana 1-2 · Diagnóstico & Quick Wins',
    items: ['Mapeamento de processos críticos', 'Identificação de oportunidades imediatas', 'Primeiras automações entregando ROI imediato'],
  },
  {
    title: 'Semana 3-6 · Capacitação Intensiva',
    items: ['Treinamento mão na massa por departamento', 'Implementação das ferramentas certas', 'Resultados mensuráveis já no final do ciclo'],
  },
  {
    title: 'Semana 7-10 · Escala e Integração',
    items: ['Expansão da automação para toda a empresa', 'Integração entre áreas e sistemas', 'Otimização contínua com dashboards de controle'],
  },
  {
    title: 'Semana 11-12 · Consolidação',
    items: ['Centro de Excelência em IA funcionando', 'Playbook personalizado para sua empresa', 'Plano de evolução de 12 meses para seguir crescendo'],
  },
]

export default function ParaEmpresasPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="bg-brand-deep-navy-blue text-white py-6">
        <div className="max-w-6xl mx-auto px-4 text-center font-semibold">
          🔴 ATENÇÃO LÍDERES E GESTORES: Enquanto você lê isso, seus concorrentes estão automatizando processos com IA
        </div>
      </section>

      <HeroSectionB2B />

      <section className="py-10 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground text-center mb-6">
            Empresas que já transformaram seus resultados com CCAA Enterprise
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center text-sm font-medium">
            {credibilityLogos.map((logo) => (
              <div key={logo} className="rounded-lg border border-border/40 bg-white py-3 px-2 shadow-sm">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">A Verdade Inconveniente que seu CFO já sabe (mas ninguém fala)</h2>
            <p className="text-lg text-muted-foreground">
              Sua empresa está desperdiçando R$ 35.000 por funcionário/ano em tarefas que IA poderia fazer em segundos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Enquanto isso, todos os dias:</h3>
              <ul className="space-y-3 text-muted-foreground">
                {problemPoints.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-brand-metallic-gold" />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Os números não mentem:</h3>
              <ul className="space-y-3 text-muted-foreground">
                {problemStats.map((stat) => (
                  <li key={stat} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-brand-metallic-gold" />
                    <span className="text-base">{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-lg font-semibold">
            A questão não é se você vai implementar IA. É se vai fazer isso antes ou depois da concorrência.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">Apresentamos o CCAA Enterprise</h2>
            <p className="text-lg text-muted-foreground">
              O único framework que transforma funcionários comuns em operadores de IA de alta performance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-border/40 bg-background p-6 space-y-3">
              <h3 className="text-xl font-semibold">Esqueça tudo que você sabe sobre “transformação digital”</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>❌ Consultorias intermináveis de 6 meses</li>
                <li>❌ Sistemas complexos que ninguém usa</li>
                <li>❌ Teorias e PowerPoints bonitos</li>
                <li>❌ Promessas vagas de “inovação”</li>
              </ul>
            </div>
            <div className="rounded-xl border border-brand-metallic-gold/40 bg-brand-metallic-gold/5 p-6 space-y-3">
              <h3 className="text-xl font-semibold">Entregamos</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✅ Resultados mensuráveis em 30 dias</li>
                <li>✅ ROI documentado e auditável</li>
                <li>✅ Funcionários produzindo 3x mais</li>
                <li>✅ Processos 85% mais rápidos</li>
                <li>✅ Economia real no P&L</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">O método CCAA: 4 pilares para dominar IA em 90 dias</h2>
            <p className="text-lg text-muted-foreground">Simples. Prático. Mensurável.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div key={pillar.id} className="rounded-2xl border border-border/40 bg-background p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden>{pillar.icon}</span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{pillar.id}</p>
                    <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{pillar.problem}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {pillar.solution.map((item) => (
                    <li key={item} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-metallic-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="italic text-sm text-muted-foreground">{pillar.quote}</p>
                <Link href="/contato" className="inline-flex">
                  <Button variant="outline" className="mt-2">
                    {pillar.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">De zero a IA em 12 semanas</h2>
            <p className="text-lg text-muted-foreground">Implementação rápida, resultados imediatos.</p>
          </div>
          <div className="rounded-2xl border border-border/40 bg-background p-6 sm:p-8 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {rolloutPhases.map((phase) => (
                <div key={phase.title} className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">{phase.title}</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-metallic-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/contato" className="inline-flex">
                <Button variant="outline" className="px-6">
                  Baixar Cronograma Detalhado
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Calcule o impacto da IA no seu retorno em 30 segundos</h2>
            <p className="text-lg text-muted-foreground">Simule, em tempo real, o que a inteligência artificial já gerou para empresas que aplicam o método CCAA.</p>
          </div>
          <ROICalculator />
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Resultados reais de empresas reais</h2>
            <p className="text-lg text-muted-foreground">Casos recentes com números auditáveis.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((item) => (
              <div key={item.company} className="rounded-xl border border-border/40 bg-background p-6 space-y-3">
                <h3 className="text-lg font-semibold">{item.company}</h3>
                <p className="text-sm text-muted-foreground"><strong>Desafio:</strong> {item.challenge}</p>
                <p className="text-sm text-muted-foreground"><strong>Solução:</strong> {item.solution}</p>
                <p className="text-sm font-semibold text-brand-metallic-gold"><strong>Resultado:</strong> {item.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contato" className="inline-flex">
              <Button variant="outline" className="px-6">
                Ver todos os cases
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">O que líderes como você estão dizendo</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div key={item.author} className="rounded-xl border border-border/40 bg-background p-6 space-y-3">
                <h3 className="text-lg font-semibold text-brand-metallic-gold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.quote}</p>
                <p className="text-sm font-medium">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">CCAA Enterprise vs. alternativas</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] text-sm text-muted-foreground">
              <thead>
                <tr className="text-left">
                  <th className="py-3 text-foreground font-semibold">&nbsp;</th>
                  <th className="py-3 text-foreground font-semibold">CCAA Enterprise</th>
                  <th className="py-3">Consultoria Big 4</th>
                  <th className="py-3">Curso Online</th>
                  <th className="py-3">Fazer Interno</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td className="py-3 font-medium text-foreground">{row.label}</td>
                    <td className="py-3 text-brand-metallic-gold font-semibold">{row.ccaa}</td>
                    {row.other.map((value, index) => (
                      <td key={index} className="py-3">{value}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Garantia tripla CCAA — risco zero para sua empresa</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {guarantees.map((item) => (
              <div key={item.title} className="rounded-xl border border-brand-metallic-gold/40 bg-brand-metallic-gold/5 p-6 space-y-3">
                <h3 className="text-lg font-semibold text-brand-metallic-gold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Escolha o plano ideal para sua empresa</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-2xl border border-border/40 bg-background p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                  <p className="text-2xl font-bold text-brand-metallic-gold">{plan.price}</p>
                  {plan.subtitle && <p className="text-sm text-muted-foreground">{plan.subtitle}</p>}
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-brand-metallic-gold" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.bonus && (
                  <div className="rounded-lg border border-brand-metallic-gold/40 bg-brand-metallic-gold/10 p-3 text-sm">
                    <p className="font-semibold text-brand-metallic-gold mb-2">Bônus deste mês</p>
                    <ul className="space-y-1 text-muted-foreground">
                      {plan.bonus.map((bonus) => (
                        <li key={bonus}>🎁 {bonus}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <Link href="/contato" className="inline-flex w-full">
                  <Button className="w-full justify-center">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Oferta limitada — por que agir agora?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
            <div className="rounded-xl border border-border/40 bg-background p-6 space-y-2">
              <p>🔴 Apenas 5 vagas para novos clientes este mês</p>
              <p>🔴 Bônus de R$ 32.000 válido até sexta-feira</p>
              <p>🔴 Seus concorrentes já começaram (2 do seu setor este mês)</p>
            </div>
            <div className="rounded-xl border border-brand-metallic-gold/40 bg-brand-metallic-gold/5 p-6 space-y-2">
              <p>💸 Cada dia de atraso custa R$ 2.800 em produtividade perdida</p>
              <p>📉 0,5% de market share sai pela porta a cada mês</p>
              <p>😔 Talentos frustrados procuram outras empresas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/10">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">Reserve seu diagnóstico gratuito agora</h2>
          <p className="text-lg text-muted-foreground">30 minutos que podem economizar R$ 1 milhão.</p>
          <div className="space-y-2 text-muted-foreground">
            <p>No diagnóstico você recebe:</p>
            <p>✅ Análise de maturidade digital · ✅ Identificação de quick wins · ✅ Cálculo de ROI personalizado</p>
            <p>✅ Roadmap de implementação · ✅ Proposta comercial na hora</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Link href="/contato" className="inline-flex">
              <Button size="lg" className="px-8 text-lg">
                Agendar Diagnóstico Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Perguntas frequentes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-border/40 bg-background p-6 space-y-2">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/contato" className="inline-flex">
              <Button variant="outline" className="px-6">
                Ver todas as perguntas
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-brand-deep-navy-blue text-white">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <p className="text-sm text-white/80">
            © 2024 IA21 Educação. Todos os direitos reservados.
          </p>
          <Link href="/contato" className="inline-flex justify-center">
            <Button variant="secondary" className="bg-white text-brand-deep-navy-blue hover:bg-white/90">
              Falar com a IA21
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </footer>
    </main>
  )
}
