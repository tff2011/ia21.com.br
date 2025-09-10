"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Lightbulb, Code, Brain, Database } from "lucide-react"

export default function GlossarioPage() {
  // Garantir que a página sempre abra no topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Mock data - em produção isso viria do banco de dados ou CMS
  const glossarioTerms = [
    {
      id: "1",
      term: "Machine Learning",
      category: "Conceitos Básicos",
      definition: "Subcampo da inteligência artificial que permite aos sistemas aprenderem e melhorarem automaticamente a partir de dados, sem serem explicitamente programados para cada tarefa específica.",
      example: "Um sistema de recomendação do Netflix que aprende com suas preferências de visualização.",
      icon: Brain
    },
    {
      id: "2",
      term: "Deep Learning",
      category: "Conceitos Avançados",
      definition: "Subconjunto do machine learning que usa redes neurais artificiais com múltiplas camadas para processar dados e fazer previsões complexas.",
      example: "Redes neurais convolucionais usadas em reconhecimento de imagem.",
      icon: Database
    },
    {
      id: "3",
      term: "Algoritmo",
      category: "Conceitos Básicos",
      definition: "Conjunto finito de instruções bem definidas e não ambíguas, executadas mecanicamente em sequência para resolver um problema ou executar uma tarefa.",
      example: "Um algoritmo de classificação que organiza emails em spam ou não-spam.",
      icon: Code
    },
    {
      id: "4",
      term: "Big Data",
      category: "Dados",
      definition: "Conjunto de dados de grande volume, velocidade e variedade que desafiam as capacidades tradicionais de processamento e armazenamento.",
      example: "Dados de sensores IoT coletados de milhões de dispositivos conectados.",
      icon: Database
    },
    {
      id: "5",
      term: "Neural Network",
      category: "Conceitos Avançados",
      definition: "Modelo computacional inspirado no sistema nervoso humano, composto por unidades de processamento interconectadas chamadas neurônios artificiais.",
      example: "Redes usadas para reconhecimento facial em smartphones.",
      icon: Brain
    },
    {
      id: "6",
      term: "Natural Language Processing",
      category: "Aplicações",
      definition: "Campo da IA que se concentra em fazer com que computadores entendam, interpretem e gerem linguagem humana de forma natural.",
      example: "Assistentes virtuais como Siri ou Alexa que entendem comandos de voz.",
      icon: Lightbulb
    },
    {
      id: "7",
      term: "Supervised Learning",
      category: "Machine Learning",
      definition: "Tipo de machine learning onde o algoritmo aprende com dados rotulados, ou seja, dados que já possuem a resposta correta conhecida.",
      example: "Classificação de imagens onde cada imagem já está identificada (gato, cachorro, etc.).",
      icon: BookOpen
    },
    {
      id: "8",
      term: "Unsupervised Learning",
      category: "Machine Learning",
      definition: "Tipo de machine learning onde o algoritmo encontra padrões em dados não rotulados, sem orientação prévia sobre o que procurar.",
      example: "Agrupamento de clientes com comportamentos similares para segmentação de mercado.",
      icon: BookOpen
    },
    {
      id: "9",
      term: "Computer Vision",
      category: "Aplicações",
      definition: "Campo da IA que treina computadores para interpretar e entender o conteúdo visual do mundo, como imagens e vídeos.",
      example: "Sistemas de reconhecimento facial ou leitura automática de placas de carro.",
      icon: Lightbulb
    },
    {
      id: "10",
      term: "Data Mining",
      category: "Dados",
      definition: "Processo de descoberta de padrões interessantes e anteriormente desconhecidos em grandes conjuntos de dados.",
      example: "Análise de padrões de compra para identificar produtos frequentemente comprados juntos.",
      icon: Database
    }
  ]

  const filteredTerms = glossarioTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || term.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(glossarioTerms.map(term => term.category)))

  const categoryIcons = {
    "Conceitos Básicos": BookOpen,
    "Conceitos Avançados": Brain,
    "Machine Learning": Code,
    "Dados": Database,
    "Aplicações": Lightbulb
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-glossario.webp"
            alt="Elegant library with floating books and golden light rays"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2 text-white border-white/20 bg-white/10 backdrop-blur-sm">
              📚 Glossário IA21
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Domine a <span className="text-primary">Linguagem</span> da IA
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Seu dicionário completo de termos e conceitos em inteligência artificial.
              Aprenda a linguagem da revolução tecnológica com explicações claras e exemplos práticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">+100 termos</div>
                  <div className="text-sm text-white/70">Explicados em detalhes</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Exemplos práticos</div>
                  <div className="text-sm text-white/70">Aplicações reais</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Atualizado</div>
                  <div className="text-sm text-white/70">Constantemente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Termos e Conceitos</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore nossa coleção completa de termos técnicos em inteligência artificial,
              organizados por categoria para facilitar seu aprendizado.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar termos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  size="sm"
                >
                  Todos
                </Button>
                {categories.map((category) => {
                  const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || BookOpen
                  return (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category)}
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <IconComponent className="w-4 h-4" />
                      {category}
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Terms Grid */}
          {filteredTerms.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTerms.map((term) => {
                const IconComponent = term.icon
                return (
                  <Card key={term.id} className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {term.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{term.term}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm mb-4">
                        {term.definition}
                      </CardDescription>
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <p className="text-xs font-medium text-muted-foreground mb-1">Exemplo prático:</p>
                        <p className="text-sm">{term.example}</p>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">Nenhum termo encontrado</h3>
              <p className="text-muted-foreground">
                {searchTerm || selectedCategory
                  ? 'Tente ajustar os filtros de busca ou procurar por outro termo.'
                  : 'O glossário será atualizado em breve com novos termos.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore por Categoria</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navegue pelos diferentes aspectos da inteligência artificial organizados por categoria.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Conceitos Básicos</h3>
                <p className="text-sm text-muted-foreground">Fundamentos essenciais da IA</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Conceitos Avançados</h3>
                <p className="text-sm text-muted-foreground">Tópicos complexos e profundos</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Machine Learning</h3>
                <p className="text-sm text-muted-foreground">Algoritmos de aprendizado</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Dados</h3>
                <p className="text-sm text-muted-foreground">Big Data e processamento</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Aplicações</h3>
                <p className="text-sm text-muted-foreground">Casos de uso práticos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Como contribuir com o glossário?</h3>
                <p className="text-sm text-muted-foreground">
                  Envie sugestões de novos termos ou correções através do nosso formulário de contato.
                  Sua contribuição é muito bem-vinda!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Os termos são atualizados?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim, mantemos o glossário constantemente atualizado com os últimos avanços
                  e termos emergentes no campo da IA.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Posso usar offline?</h3>
                <p className="text-sm text-muted-foreground">
                  Estamos desenvolvendo uma versão offline do glossário para download.
                  Em breve estará disponível para nossos alunos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Há termos em outros idiomas?</h3>
                <p className="text-sm text-muted-foreground">
                  Atualmente focamos em português, mas pretendemos expandir para
                  inglês e espanhol no futuro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
