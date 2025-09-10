import { Metadata } from 'next'
import { BlogGrid } from '@/components/blog/blog-grid'
import { BlogFilters } from '@/components/blog/blog-filters'

export const metadata: Metadata = {
  title: 'Conteúdos IA - IA21 Educação',
  description: 'Artigos, tutoriais e insights sobre Inteligência Artificial aplicada. Aprenda machine learning, deep learning, automação e transformação digital.',
}

export default function ConteudosPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-blog.webp"
            alt="Profissionais aprendendo inteligência artificial e machine learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Conteúdos sobre <span className="text-primary">Inteligência Artificial</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Artigos, tutoriais e insights sobre IA aplicada, machine learning, deep learning
              e transformação digital para mantê-lo na vanguarda da revolução tecnológica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="btn-hero-primary px-8 py-4">
                Explorar Artigos sobre IA
              </button>
              <button className="btn-hero-secondary px-8 py-4">
                Newsletter IA
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <BlogFilters />
        <BlogGrid />
      </div>
    </main>
  )
}
