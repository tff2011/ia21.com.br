import { Metadata } from 'next'
import Link from 'next/link'
import { getPublishedPosts, getRecentPosts } from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Clock, User, ArrowRight, BookOpen, TrendingUp } from 'lucide-react'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Conteúdos MDX | IA21 Educação',
    description: 'Artigos exclusivos criados com tecnologia de ponta, focados em conteúdo de alta qualidade sobre IA e inovação.',
    keywords: ['IA', 'Conteúdo Exclusivo', 'MDX', 'Tecnologia', 'Inovação'],
    openGraph: {
      title: 'Conteúdos MDX | IA21 Educação',
      description: 'Artigos exclusivos criados com tecnologia de ponta sobre IA e inovação.',
      type: 'website',
    },
  }
}

export default async function VelitePostsPage() {
  const posts = getPublishedPosts()
  const recentPosts = getRecentPosts(6)
  const featuredPosts = posts.filter(post => post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const estimateReadTime = (content: string) => {
    return Math.ceil(content.length / 1000) + 2
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen className="h-4 w-4" />
              Conteúdo Exclusivo MDX
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Artigos Premium
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conteúdos criados com tecnologia de ponta, focados em insights profundos sobre
              IA, inovação e transformação digital para líderes e profissionais.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="recent" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="featured" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Destaques
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Recentes
            </TabsTrigger>
            <TabsTrigger value="all" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Todos
            </TabsTrigger>
          </TabsList>

          {/* Featured Posts */}
          <TabsContent value="featured" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Conteúdos em Destaque</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nossos artigos mais importantes e impactantes sobre tecnologia e inovação
              </p>
            </div>

            {featuredPosts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-4">Nenhum destaque no momento</h3>
                <p className="text-muted-foreground">
                  Em breve teremos novos conteúdos exclusivos em destaque.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Card key={post.slug} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                    <CardHeader className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {post.categories.map((category) => (
                          <Badge key={category} variant="default" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                        <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                          Destaque
                        </Badge>
                      </div>

                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-xl">
                        <Link href={`/conteudos/${post.slugAsParams}`}>
                          {post.title}
                        </Link>
                      </CardTitle>

                      <CardDescription className="line-clamp-3 text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <time>{formatDate(post.date)}</time>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{estimateReadTime(post.body)} min</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button asChild className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Link href={`/conteudos/${post.slugAsParams}`}>
                          Ler artigo completo
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Recent Posts */}
          <TabsContent value="recent" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Conteúdos Mais Recentes</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Fique por dentro das últimas publicações e tendências em IA e tecnologia
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category) => (
                        <Badge key={category} variant="secondary" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                      {post.featured && (
                        <Badge variant="default" className="text-xs">
                          Destaque
                        </Badge>
                      )}
                    </div>

                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/conteudos/${post.slugAsParams}`}>
                        {post.title}
                      </Link>
                    </CardTitle>

                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time>{formatDate(post.date)}</time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{estimateReadTime(post.body)} min</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link href={`/conteudos/${post.slugAsParams}`}>
                        Ler artigo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* All Posts */}
          <TabsContent value="all" className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Todos os Artigos MDX</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore nossa coleção completa de conteúdos sobre IA e inovação
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.categories.map((category) => (
                        <Badge key={category} variant="secondary" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                      {post.featured && (
                        <Badge variant="default" className="text-xs">
                          Destaque
                        </Badge>
                      )}
                    </div>

                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/conteudos/${post.slugAsParams}`}>
                        {post.title}
                      </Link>
                    </CardTitle>

                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time>{formatDate(post.date)}</time>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{estimateReadTime(post.body)} min</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link href={`/conteudos/${post.slugAsParams}`}>
                        Ler artigo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
