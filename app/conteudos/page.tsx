import { Metadata } from 'next'
import { BlogGrid } from '@/components/blog/blog-grid'
import { BlogFilters } from '@/components/blog/blog-filters'

export const metadata: Metadata = {
  title: 'Conteúdos - IA21 Educação',
  description: 'Artigos, tutoriais e insights sobre desenvolvimento de software. Fique por dentro das últimas tendências e tecnologias.',
}

export default function ConteudosPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Conteúdos sobre <span className="text-primary">Tecnologia</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Artigos, tutoriais e insights sobre desenvolvimento de software para mantê-lo atualizado
          </p>
        </div>

        <BlogFilters />
        <BlogGrid />
      </div>
    </main>
  )
}
