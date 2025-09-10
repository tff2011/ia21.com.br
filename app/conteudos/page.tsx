import { Metadata } from 'next'
import Link from 'next/link'
import { getPublishedPosts } from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, Clock, User, ArrowRight, Search, BookOpen } from 'lucide-react'


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Conteúdos | IA21 Educação',
    description: 'Artigos, tutoriais e insights sobre Inteligência Artificial, machine learning e tecnologias emergentes.',
    keywords: ['IA', 'Inteligência Artificial', 'Machine Learning', 'Educação', 'Tecnologia'],
    openGraph: {
      title: 'Conteúdos | IA21 Educação',
      description: 'Artigos, tutoriais e insights sobre Inteligência Artificial, machine learning e tecnologias emergentes.',
      type: 'website',
    },
  }
}

export default async function ConteudosPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const params = await searchParams
  const search = typeof params.search === 'string' ? params.search : ''
  const category = typeof params.category === 'string' ? params.category : ''
  const tag = typeof params.tag === 'string' ? params.tag : ''

  // Get posts from Velite
  const posts = getPublishedPosts()

  // Filter and sort posts by date (newest first)
  const filteredPosts = posts
    .filter(post => {
      const matchesSearch = !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))

      const matchesCategory = !category ||
        post.categories.some(cat => cat.toLowerCase() === category.toLowerCase())

      const matchesTag = !tag ||
        post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())

      return matchesSearch && matchesCategory && matchesTag
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // Get unique categories and tags for filters
  const allCategories = Array.from(
    new Set(
      posts.flatMap(post =>
        post.categories.map(cat => JSON.stringify({ title: cat, slug: cat.toLowerCase() }))
      )
    )
  ).map(str => JSON.parse(str))

  const allTags = Array.from(
    new Set(posts.flatMap(post => post.tags))
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const estimateReadTime = (content: string) => {
    return Math.ceil(content.length / 1000) + 2 // Base time for MDX posts
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Conteúdos sobre IA
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Artigos, tutoriais e insights sobre Inteligência Artificial, machine learning
              e tecnologias emergentes para transformar seu negócio e carreira.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar artigos..."
                className="pl-10"
                defaultValue={search}
              />
            </div>

            <Select defaultValue={category}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas as categorias</SelectItem>
                {allCategories.map((cat) => (
                  <SelectItem key={cat.slug} value={cat.slug}>
                    {cat.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select defaultValue={tag}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas as tags</SelectItem>
                {allTags.map((tagName) => (
                  <SelectItem key={tagName} value={tagName.toLowerCase()}>
                    {tagName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-4">Nenhum artigo encontrado</h3>
            <p className="text-muted-foreground mb-8">
              Tente ajustar seus filtros de busca ou explore outras categorias.
            </p>
            <Button asChild>
              <Link href="/conteudos">Ver todos os artigos</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">
                {filteredPosts.length} artigo{filteredPosts.length !== 1 ? 's' : ''} encontrado{filteredPosts.length !== 1 ? 's' : ''}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-shadow">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.categories.slice(0, 2).map((category) => (
                        <Badge key={category} variant="secondary" className="text-xs">
                          {category}
                        </Badge>
                      ))}
                      {post.featured && (
                        <Badge variant="default" className="text-xs bg-primary/10 text-primary border-primary/20">
                          <BookOpen className="h-3 w-3 mr-1" />
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

                    <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link href={`/conteudos/${post.slugAsParams}`}>
                        Ler artigo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}