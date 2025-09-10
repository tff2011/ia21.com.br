"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Play, Search, Clock, Calendar, Users, Headphones, Mic } from "lucide-react"

// Page-level metadata moved to route layout to support Client Component

export default function PodcastsPage() {
  // Garantir que a página sempre abra no topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Mock data - em produção isso viria do banco de dados ou CMS
  const podcasts = [
    {
      id: "1",
      title: "Inteligência Artificial no Mundo Corporativo",
      description: "Exploramos como a IA está revolucionando os processos empresariais e o que gestores precisam saber para se preparar.",
      excerpt: "Uma conversa profunda sobre transformação digital e estratégias de implementação de IA nas empresas.",
      category: "Empresarial",
      duration: "45 min",
      publishedAt: "2024-01-15",
      host: "Dr. João Silva",
      episode: "Episódio 12",
      image: "/podcast-1.jpg",
      audioUrl: "#",
      downloads: 1250
    },
    {
      id: "2",
      title: "Futuro do Trabalho com IA",
      description: "Discussão sobre como a inteligência artificial está mudando o mercado de trabalho e as competências do futuro.",
      excerpt: "Análise das tendências do mercado de trabalho e quais habilidades serão essenciais na era da IA.",
      category: "Carreira",
      duration: "38 min",
      publishedAt: "2024-01-08",
      host: "Ana Costa",
      episode: "Episódio 11",
      image: "/podcast-2.jpg",
      audioUrl: "#",
      downloads: 980
    },
    {
      id: "3",
      title: "Machine Learning para Iniciantes",
      description: "Guia completo para quem está começando no mundo do machine learning e quer entender os fundamentos.",
      excerpt: "Explicação clara dos conceitos básicos de machine learning com exemplos práticos.",
      category: "Educação",
      duration: "52 min",
      publishedAt: "2024-01-01",
      host: "Prof. Maria Santos",
      episode: "Episódio 10",
      image: "/podcast-3.jpg",
      audioUrl: "#",
      downloads: 1540
    },
    {
      id: "4",
      title: "Ética em IA: Desafios e Soluções",
      description: "Debate sobre os dilemas éticos da inteligência artificial e como podemos desenvolver soluções responsáveis.",
      excerpt: "Discussão sobre viés algorítmico, privacidade de dados e responsabilidade ética no desenvolvimento de IA.",
      category: "Ética",
      duration: "41 min",
      publishedAt: "2023-12-25",
      host: "Dr. Pedro Oliveira",
      episode: "Episódio 9",
      image: "/podcast-4.jpg",
      audioUrl: "#",
      downloads: 890
    }
  ]

  const filteredPodcasts = podcasts.filter(podcast => {
    const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         podcast.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || podcast.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(podcasts.map(podcast => podcast.category)))

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-podcasts.webp"
            alt="Modern workspace with headphones and sound waves visualization"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2 text-white border-white/20 bg-white/10 backdrop-blur-sm">
              🎙️ Podcasts IA21
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Conhecimento que <span className="text-primary">Acompanha</span> Você
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Aprenda inteligência artificial enquanto dirige, caminha ou relaxa. Conteúdo exclusivo da IA21
              em formato de áudio para o seu dia a dia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Headphones className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Episódios Semanais</div>
                  <div className="text-sm text-white/70">Todo sábado às 9h</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">30-60 minutos</div>
                  <div className="text-sm text-white/70">Conteúdo completo</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Comunidade IA21</div>
                  <div className="text-sm text-white/70">+10k ouvintes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Episódios Recentes</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mergulhe em discussões profundas sobre inteligência artificial, machine learning,
              ética digital e o futuro da tecnologia.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Buscar episódios..."
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
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Episodes Grid */}
          {filteredPodcasts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPodcasts.map((podcast) => (
                <Card key={podcast.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="mb-2">
                        {podcast.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {podcast.downloads}
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{podcast.title}</CardTitle>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {podcast.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(podcast.publishedAt).toLocaleDateString('pt-BR')}
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {podcast.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <span>{podcast.episode}</span>
                      <span>•</span>
                      <span>por {podcast.host}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      <Play className="w-4 h-4 mr-2" />
                      Ouvir Episódio
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold mb-2">Nenhum episódio encontrado</h3>
              <p className="text-muted-foreground">
                {searchTerm || selectedCategory
                  ? 'Tente ajustar os filtros de busca.'
                  : 'Novos episódios serão lançados em breve.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Onde nos Ouvir</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Acesse nossos episódios em todas as plataformas de podcast do mundo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Spotify</h3>
                <p className="text-sm text-muted-foreground">Disponível globalmente</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Apple Podcasts</h3>
                <p className="text-sm text-muted-foreground">Para dispositivos iOS</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">YouTube</h3>
                <p className="text-sm text-muted-foreground">Vídeos dos episódios</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">RSS Feed</h3>
                <p className="text-sm text-muted-foreground">Para outros players</p>
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
                <h3 className="font-semibold mb-2">Como faço para acompanhar novos episódios?</h3>
                <p className="text-sm text-muted-foreground">
                  Inscreva-se no seu player de podcast favorito usando &quot;IA21&quot; na busca.
                  Novos episódios são lançados todo sábado.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Posso baixar os episódios?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim! Todos os episódios ficam disponíveis para download em todas as plataformas
                  suportadas pelo seu player.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Como entro em contato com os hosts?</h3>
                <p className="text-sm text-muted-foreground">
                  Use nossas redes sociais ou o formulário de contato do site.
                  Adoramos receber feedback e sugestões!
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Os episódios são gratuitos?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim, todos os episódios são completamente gratuitos e estarão sempre disponíveis
                  para nossa comunidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
