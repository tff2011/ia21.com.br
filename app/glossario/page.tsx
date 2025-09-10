"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, Lightbulb, Code, Brain, Database } from "lucide-react"
import { glossarioTerms } from "@/lib/glossary-data"

export default function GlossarioPage() {
  // Garantir que a página sempre abra no topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Dados dos termos vêm do arquivo separado

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
    <>
      {/* Structured Data for Glossary Terms */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            "name": "Glossário IA21 - Termos de Inteligência Artificial",
            "description": "Coleção completa de termos técnicos em inteligência artificial, machine learning e transformação digital",
            "publisher": {
              "@type": "Organization",
              "name": "IA21 Educação",
              "url": "https://ia21.com.br"
            },
            "hasDefinedTerm": glossarioTerms.map(term => ({
              "@type": "DefinedTerm",
              "name": term.term,
              "description": term.definition,
              "url": `https://ia21.com.br/glossario/${term.slug}`,
              "inDefinedTermSet": {
                "@type": "DefinedTermSet",
                "name": "Glossário IA21"
              },
              "termCode": term.id,
              "exampleOfWork": {
                "@type": "Text",
                "text": term.example
              }
            }))
          })
        }}
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section with Background Image */}
        <header className="relative min-h-[70vh] flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/hero-glossario.webp"
              alt="Biblioteca elegante com livros flutuantes e raios de luz dourada representando conhecimento em IA"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="secondary" className="px-4 py-2 text-white border-white/20 bg-white/10 backdrop-blur-sm" role="banner">
                📚 Glossário IA21
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Domine a <span className="text-primary">Linguagem</span> da IA
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Seu dicionário completo de termos e conceitos em inteligência artificial.
                Aprenda a linguagem da revolução tecnológica com explicações claras e exemplos práticos.
              </p>
              <ul className="flex flex-col sm:flex-row gap-6 justify-center mt-8" role="list">
                <li className="flex items-center gap-3 text-white/90" role="listitem">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center" aria-hidden="true">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">+100 termos</div>
                    <div className="text-sm text-white/70">Explicados em detalhes</div>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-white/90" role="listitem">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center" aria-hidden="true">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Exemplos práticos</div>
                    <div className="text-sm text-white/70">Aplicações reais</div>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-white/90" role="listitem">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center" aria-hidden="true">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Atualizado</div>
                    <div className="text-sm text-white/70">Constantemente</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Terms Section */}
        <section className="py-16 px-4" aria-labelledby="terms-heading">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <header className="text-center mb-12">
              <h2 id="terms-heading" className="text-3xl font-bold mb-4">Termos e Conceitos</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore nossa coleção completa de termos técnicos em inteligência artificial,
                organizados por categoria para facilitar seu aprendizado.
              </p>
            </header>

            {/* Search and Filters */}
            <div className="mb-12" role="search">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex flex-col lg:flex-row gap-6 items-center">
                  {/* Campo de Busca */}
                  <div className="flex-1 w-full lg:max-w-md">
                    <label htmlFor="search-terms" className="block text-sm font-medium text-foreground mb-2">
                      🔍 Buscar termos
                    </label>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" aria-hidden="true" />
                      <Input
                        id="search-terms"
                        placeholder="Digite o termo que procura..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-12 pr-4 py-3 text-base bg-white/10 border-white/20 placeholder:text-muted-foreground/70 focus:bg-white/15 focus:border-primary/50 transition-all"
                        aria-describedby="search-help"
                      />
                      <span id="search-help" className="sr-only">Digite para filtrar termos por nome ou definição</span>
                    </div>
                  </div>

                  {/* Separador visual */}
                  <div className="hidden lg:block w-px h-12 bg-white/20" aria-hidden="true" />

                  {/* Filtros por Categoria */}
                  <div className="w-full lg:flex-1">
                    <label className="block text-sm font-medium text-foreground mb-2">
                      📂 Filtrar por categoria
                    </label>
                    <nav aria-label="Filtrar por categoria" className="flex flex-wrap gap-2">
                      <Button
                        variant={selectedCategory === null ? "default" : "outline"}
                        onClick={() => setSelectedCategory(null)}
                        size="sm"
                        className="transition-all hover:scale-105"
                        aria-pressed={selectedCategory === null}
                      >
                        <span className="mr-2">🔄</span>
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
                            className="flex items-center gap-2 transition-all hover:scale-105"
                            aria-pressed={selectedCategory === category}
                            aria-label={`Filtrar por categoria ${category}`}
                          >
                            <IconComponent className="w-4 h-4" aria-hidden="true" />
                            {category}
                          </Button>
                        )
                      })}
                    </nav>
                  </div>
                </div>

                {/* Informações adicionais */}
                {(searchTerm || selectedCategory) && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>
                        {filteredTerms.length} termo{filteredTerms.length !== 1 ? 's' : ''} encontrado{filteredTerms.length !== 1 ? 's' : ''}
                      </span>
                      {(searchTerm || selectedCategory) && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSearchTerm("")
                            setSelectedCategory(null)
                          }}
                          className="text-xs h-6 px-2"
                        >
                          ✕ Limpar filtros
                        </Button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Terms Grid */}
            {filteredTerms.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list" aria-label="Lista de termos do glossário">
                {filteredTerms.map((term) => {
                  const IconComponent = term.icon
                  return (
                    <article key={term.id} className="h-full" role="listitem">
                      <Link href={`/glossario/${term.slug}`}>
                        <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group p-6">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0" aria-hidden="true">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <Badge variant="secondary" className="text-xs mb-2 block" aria-label={`Categoria: ${term.category}`}>
                                {term.category}
                              </Badge>
                              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors truncate" itemProp="name">
                                {term.term}
                              </h3>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </article>
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
        <section className="py-16 px-4 bg-muted/30" aria-labelledby="categories-heading">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12">
              <h2 id="categories-heading" className="text-3xl font-bold mb-4">Explore por Categoria</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Navegue pelos diferentes aspectos da inteligência artificial organizados por categoria.
              </p>
            </header>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6" role="list" aria-label="Categorias do glossário">
              <article className="text-center hover:shadow-lg transition-shadow" role="listitem">
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Conceitos Básicos</h3>
                    <p className="text-sm text-muted-foreground">Fundamentos essenciais da IA</p>
                  </CardContent>
                </Card>
              </article>

              <article className="text-center hover:shadow-lg transition-shadow" role="listitem">
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Conceitos Avançados</h3>
                    <p className="text-sm text-muted-foreground">Tópicos complexos e profundos</p>
                  </CardContent>
                </Card>
              </article>

              <article className="text-center hover:shadow-lg transition-shadow" role="listitem">
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Machine Learning</h3>
                    <p className="text-sm text-muted-foreground">Algoritmos de aprendizado</p>
                  </CardContent>
                </Card>
              </article>

              <article className="text-center hover:shadow-lg transition-shadow" role="listitem">
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                      <Database className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Dados</h3>
                    <p className="text-sm text-muted-foreground">Big Data e processamento</p>
                  </CardContent>
                </Card>
              </article>

              <article className="text-center hover:shadow-lg transition-shadow" role="listitem">
                <Card>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Aplicações</h3>
                    <p className="text-sm text-muted-foreground">Casos de uso práticos</p>
                  </CardContent>
                </Card>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="faq-heading" className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
            <dl className="grid md:grid-cols-2 gap-6" role="list">
              <div role="listitem">
                <Card>
                  <CardContent className="p-6">
                    <dt className="font-semibold mb-2">Como contribuir com o glossário?</dt>
                    <dd className="text-sm text-muted-foreground">
                      Envie sugestões de novos termos ou correções através do nosso formulário de contato.
                      Sua contribuição é muito bem-vinda!
                    </dd>
                  </CardContent>
                </Card>
              </div>

              <div role="listitem">
                <Card>
                  <CardContent className="p-6">
                    <dt className="font-semibold mb-2">Os termos são atualizados?</dt>
                    <dd className="text-sm text-muted-foreground">
                      Sim, mantemos o glossário constantemente atualizado com os últimos avanços
                      e termos emergentes no campo da IA.
                    </dd>
                  </CardContent>
                </Card>
              </div>

              <div role="listitem">
                <Card>
                  <CardContent className="p-6">
                    <dt className="font-semibold mb-2">Posso usar offline?</dt>
                    <dd className="text-sm text-muted-foreground">
                      Estamos desenvolvendo uma versão offline do glossário para download.
                      Em breve estará disponível para nossos alunos.
                    </dd>
                  </CardContent>
                </Card>
              </div>

              <div role="listitem">
                <Card>
                  <CardContent className="p-6">
                    <dt className="font-semibold mb-2">Há termos em outros idiomas?</dt>
                    <dd className="text-sm text-muted-foreground">
                      Atualmente focamos em português, mas pretendemos expandir para
                      inglês e espanhol no futuro.
                    </dd>
                  </CardContent>
                </Card>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </>
  )
}
