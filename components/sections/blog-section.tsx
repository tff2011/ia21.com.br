'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, User } from 'lucide-react'

// Mock data - será substituído por dados do Sanity
const posts = [
  {
    id: 1,
    title: 'O Futuro do Desenvolvimento Web: Tendências e Tecnologias',
    excerpt: 'Explore como as tecnologias web estão evoluindo e quais são as principais tendências para os próximos anos.',
    slug: 'futuro-desenvolvimento-web',
    publishedAt: '2025-01-15',
    author: {
      name: 'Dr. Maria Silva',
      slug: 'maria-silva',
    },
    coverImage: '/placeholder-blog.jpg',
    tags: ['Desenvolvimento Web', 'Tendências', 'Tecnologias'],
    readTime: '5 min',
  },
  {
    id: 2,
    title: 'JavaScript Moderno: Um Guia Completo',
    excerpt: 'Aprenda os conceitos fundamentais do JavaScript moderno e as melhores práticas para desenvolvimento.',
    slug: 'javascript-moderno-guia',
    publishedAt: '2025-01-10',
    author: {
      name: 'João Santos',
      slug: 'joao-santos',
    },
    coverImage: '/placeholder-blog.jpg',
    tags: ['JavaScript', 'Tutorial', 'Frontend'],
    readTime: '8 min',
  },
  {
    id: 3,
    title: 'UX/UI Design: Princípios e Boas Práticas',
    excerpt: 'Discussão sobre os princípios fundamentais do design de interfaces e como criar experiências incríveis.',
    slug: 'ux-ui-design-principios',
    publishedAt: '2025-01-05',
    author: {
      name: 'Ana Costa',
      slug: 'ana-costa',
    },
    coverImage: '/placeholder-blog.jpg',
    tags: ['UX/UI', 'Design', 'Experiência'],
    readTime: '6 min',
  },
]

export function BlogSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Conteúdos sobre <span className="text-primary">Tecnologia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fique por dentro das últimas novidades, tutoriais e insights sobre desenvolvimento de software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-48 bg-muted">
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">📚</div>
                </div>
              </div>

              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>

                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author.name}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(post.publishedAt))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime} de leitura</span>
                  <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Ler mais
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="px-8">
            Ver Todos os Artigos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
