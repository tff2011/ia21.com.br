'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HelpCircle, Users, BookOpen, CreditCard, Shield, Headphones } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      id: "item-1",
      question: "Como funciona a plataforma de aprendizado da IA21?",
      answer: "Nossa plataforma oferece cursos completos em desenvolvimento web, mobile e tecnologias emergentes. Você tem acesso a videoaulas, projetos práticos, exercícios interativos e certificação ao concluir cada módulo. O aprendizado é 100% online e você pode estudar no seu ritmo.",
      category: "Plataforma"
    },
    {
      id: "item-2",
      question: "Quanto tempo leva para completar um curso?",
      answer: "O tempo varia de acordo com o curso e seu ritmo de estudo. Nossos cursos têm duração média de 8 a 12 semanas, mas você pode concluir mais rápido se dedicar mais tempo. Todos os cursos incluem acesso vitalício ao conteúdo após a conclusão.",
      category: "Cursos"
    },
    {
      id: "item-3",
      question: "Existe suporte durante os estudos?",
      answer: "Sim! Oferecemos suporte completo através de mentores especializados, fóruns de discussão, grupos no WhatsApp e atendimento via chat. Nossa equipe está disponível de segunda a sexta-feira, das 9h às 18h, para tirar suas dúvidas.",
      category: "Suporte"
    },
    {
      id: "item-4",
      question: "Como funciona o sistema de certificação?",
      answer: "Ao concluir um curso, você recebe um certificado digital reconhecido pelo mercado. Para obter a certificação, é necessário completar todos os módulos, projetos práticos e avaliação final. Os certificados podem ser compartilhados no LinkedIn e adicionados ao seu currículo.",
      category: "Certificação"
    },
    {
      id: "item-5",
      question: "Quais são as formas de pagamento aceitas?",
      answer: "Aceitamos cartão de crédito, boleto bancário, PIX e transferência bancária. Oferecemos parcelamento em até 12x sem juros no cartão de crédito. Para empresas, também aceitamos nota fiscal e outros métodos corporativos.",
      category: "Pagamento"
    },
    {
      id: "item-6",
      question: "Posso cancelar minha matrícula e receber reembolso?",
      answer: "Sim, oferecemos garantia de satisfação. Você pode solicitar reembolso total dentro dos primeiros 7 dias após a compra. Após esse período, oferecemos reembolso parcial dependendo do progresso do curso. Entre em contato com nosso suporte para solicitar cancelamento.",
      category: "Cancelamento"
    },
    {
      id: "item-7",
      question: "Os cursos são reconhecidos pelo MEC?",
      answer: "Nossos cursos são programas de capacitação profissional e não substituem formação acadêmica regulamentada pelo MEC. No entanto, as certificações são reconhecidas pelo mercado de trabalho e podem ser utilizadas para validação de competências técnicas.",
      category: "Certificação"
    },
    {
      id: "item-8",
      question: "Como posso acompanhar meu progresso?",
      answer: "Na sua dashboard pessoal, você pode acompanhar o progresso de cada curso, ver estatísticas de estudo, acessar certificados conquistados e visualizar seu histórico de aprendizado. Também oferecemos relatórios detalhados de desempenho.",
      category: "Plataforma"
    }
  ]

  const categories = [
    { name: "Plataforma", icon: BookOpen, count: faqs.filter(f => f.category === "Plataforma").length },
    { name: "Cursos", icon: Users, count: faqs.filter(f => f.category === "Cursos").length },
    { name: "Suporte", icon: Headphones, count: faqs.filter(f => f.category === "Suporte").length },
    { name: "Certificação", icon: Shield, count: faqs.filter(f => f.category === "Certificação").length },
    { name: "Pagamento", icon: CreditCard, count: faqs.filter(f => f.category === "Pagamento").length },
    { name: "Cancelamento", icon: HelpCircle, count: faqs.filter(f => f.category === "Cancelamento").length }
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="px-3 py-1 mb-4">
            <HelpCircle className="w-4 h-4 mr-2" />
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Tire suas <span className="text-primary">Dúvidas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre nossa plataforma,
            cursos e serviços. Não encontrou o que procura? Entre em contato conosco!
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm font-medium">{category.name}</div>
                <div className="text-xs text-muted-foreground">{category.count} perguntas</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                Perguntas e Respostas
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="border-b border-border/50 last:border-b-0"
                  >
                    <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                      <div className="flex items-start gap-3">
                        <Badge
                          variant="outline"
                          className="text-xs px-2 py-0.5 mt-0.5 shrink-0"
                        >
                          {faq.category}
                        </Badge>
                        <span className="font-medium leading-relaxed">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-11">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-2">Não encontrou sua resposta?</h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar. Entre em contato e responderemos
                sua pergunta o mais breve possível.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:suporte@ia21.com.br"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Falar com Suporte
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


