import { Metadata } from 'next'
import Link from 'next/link'
import { getPublishedPosts } from '@/lib/content'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Calendar, Clock, User, ArrowRight, Search, BookOpen } from 'lucide-react'
import Image from 'next/image'


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Conteúdos',
    description: 'Artigos, tutoriais e insights sobre Inteligência Artificial, machine learning e tecnologias emergentes.',
    keywords: ['IA', 'Inteligência Artificial', 'Machine Learning', 'Educação', 'Tecnologia'],
    alternates: {
      canonical: '/conteudos',
    },
    openGraph: {
      title: 'Conteúdos',
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

      const matchesCategory = !category || category === 'todas' ||
        post.categories.some(cat => cat.toLowerCase() === category.toLowerCase())

      const matchesTag = !tag || tag === 'todas' ||
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

  const abbreviateName = (fullName: string) => {
    const parts = fullName.trim().split(' ')
    if (parts.length <= 2) return fullName
    
    const firstName = parts[0]
    const lastName = parts[parts.length - 1]
    
    // Se o nome tem mais de 2 partes, abrevia as do meio
    if (parts.length > 2) {
      const middleInitials = parts.slice(1, -1)
        .map(name => name.charAt(0).toUpperCase())
        .join('. ')
      return `${firstName} ${middleInitials}. ${lastName}`
    }
    
    return fullName
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-conteudos-clean.webp"
            alt="Conteúdos sobre IA - Visual representation of artificial intelligence, neural networks, and technological innovation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2 text-white border-white/20 bg-white/10 backdrop-blur-sm" role="banner">
              📚 Conteúdos IA21
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Conteúdos sobre <span className="text-primary">IA</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Artigos, tutoriais e insights sobre Inteligência Artificial, machine learning
              e tecnologias emergentes para transformar seu negócio e carreira.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Artigos Especializados</div>
                  <div className="text-sm text-white/70">Conteúdo de qualidade</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Especialistas</div>
                  <div className="text-sm text-white/70">Autores qualificados</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Busca Avançada</div>
                  <div className="text-sm text-white/70">Encontre facilmente</div>
                </div>
              </div>
            </div>
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
                <SelectItem value="todas">Todas as categorias</SelectItem>
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
                <SelectItem value="todas">Todas as tags</SelectItem>
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
                <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-48 bg-muted overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                        <BookOpen className="h-12 w-12 text-primary/50" />
                      </div>
                    )}
                    
                    {/* Badges Overlay */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      {post.categories.slice(0, 2).map((category) => (
                        <Badge key={category} variant="secondary" className="text-xs bg-white/90 backdrop-blur-sm">
                          {category}
                        </Badge>
                      ))}
                      {post.featured && (
                        <Badge variant="default" className="text-xs bg-primary text-white">
                          <BookOpen className="h-3 w-3 mr-1" />
                          Destaque
                        </Badge>
                      )}
                      {/* Show additional tags if there are no categories or few categories */}
                      {post.categories.length < 2 && post.tags.slice(0, 2 - post.categories.length).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs bg-white/90 backdrop-blur-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="space-y-3">
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/conteudos/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>

                    {/* Date right below title */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <time>{formatDate(post.date)}</time>
                    </div>

                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{abbreviateName(post.author.name)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{estimateReadTime(post.body)} min</span>
                      </div>
                    </div>

                    <Button asChild variant="ghost" className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link href={`/conteudos/${post.slug}`}>
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
