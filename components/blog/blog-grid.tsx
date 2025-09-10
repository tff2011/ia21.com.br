'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, User, Clock } from 'lucide-react'
import Link from 'next/link'

export function BlogGrid() {
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
      tags: ['Desenvolvimento Web', 'Tendências', 'Tecnologias'],
      readTime: '5 min',
      featured: true,
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
      tags: ['JavaScript', 'Tutorial', 'Frontend'],
      readTime: '8 min',
      featured: false,
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
      tags: ['UX/UI', 'Design', 'Experiência'],
      readTime: '6 min',
      featured: false,
    },
    {
      id: 4,
      title: 'React Avançado: Hooks e Performance',
      excerpt: 'Aprenda a usar hooks personalizados e otimizar aplicações React para melhor performance.',
      slug: 'react-hooks-performance',
      publishedAt: '2025-01-01',
      author: {
        name: 'Dr. Maria Silva',
        slug: 'maria-silva',
      },
      tags: ['React', 'Hooks', 'Performance'],
      readTime: '10 min',
      featured: false,
    },
    {
      id: 5,
      title: 'Next.js: Server-Side Rendering e SEO',
      excerpt: 'Aprenda a otimizar aplicações Next.js com SSR e melhorar o SEO dos seus projetos.',
      slug: 'nextjs-ssr-seo',
      publishedAt: '2024-12-28',
      author: {
        name: 'João Santos',
        slug: 'joao-santos',
      },
      tags: ['Next.js', 'SSR', 'SEO'],
      readTime: '7 min',
      featured: false,
    },
    {
      id: 6,
      title: 'Carreira em Tecnologia: Oportunidades e Desafios',
      excerpt: 'Análise sobre como o mercado de tecnologia está evoluindo e quais habilidades serão mais valorizadas.',
      slug: 'carreira-tecnologia-oportunidades',
      publishedAt: '2024-12-20',
      author: {
        name: 'Ana Costa',
        slug: 'ana-costa',
      },
      tags: ['Carreira', 'Tecnologia', 'Mercado'],
      readTime: '9 min',
      featured: false,
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="relative h-48 bg-muted">
            {/* Placeholder for image */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
              <div className="text-6xl opacity-50">📚</div>
            </div>
            {post.featured && (
              <Badge className="absolute top-4 left-4 bg-primary">
                Destaque
              </Badge>
            )}
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
                {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <Link href={`/conteudos/${post.slug}`}>
              <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                Ler artigo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
