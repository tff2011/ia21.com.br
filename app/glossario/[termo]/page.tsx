import Image from 'next/image'
import Link from "next/link"
import { notFound } from 'next/navigation'
// Removido useEffect pois é server component
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Share2, BookOpen, Lightbulb } from "lucide-react"
import { glossarioTerms, findTermBySlug } from "@/lib/glossary-data"

// Dados dos termos vêm do arquivo separado

interface TermPageProps {
  params: Promise<{
    termo: string
  }>
}

export default async function TermPage({ params }: TermPageProps) {
  const resolvedParams = await params
  const term = findTermBySlug(resolvedParams.termo)

  if (!term) {
    notFound()
  }

  const IconComponent = term.icon

  return (
    <>
      {/* Structured Data for Individual Term */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTerm",
            "name": term.term,
            "description": term.definition,
            "url": `https://ia21.com.br/glossario/${term.slug}`,
            "inDefinedTermSet": {
              "@type": "DefinedTermSet",
              "name": "Glossário IA21",
              "url": "https://ia21.com.br/glossario"
            },
            "termCode": term.id,
            "exampleOfWork": {
              "@type": "Text",
              "text": term.example
            },
            "educationalUse": "Glossário de termos técnicos em inteligência artificial",
            "learningResourceType": "Definitional term",
            "publisher": {
              "@type": "Organization",
              "name": "IA21 Educação",
              "url": "https://ia21.com.br"
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString().split('T')[0],
            "author": {
              "@type": "Organization",
              "name": "IA21 Educação"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Início",
                  "item": "https://ia21.com.br"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Glossário",
                  "item": "https://ia21.com.br/glossario"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": term.term,
                  "item": `https://ia21.com.br/glossario/${term.slug}`
                }
              ]
            }
          })
        }}
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
      <div className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-glossario.webp"
            alt="Elegant library with floating books and golden light rays"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <Link href="/glossario" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Glossário
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl">
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
              <Badge variant="secondary" className="px-4 py-2 text-white border-white/20 bg-white/10 backdrop-blur-sm">
                {term.category}
              </Badge>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-4">
              {term.term}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
              {term.definition}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Definition Card */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Definição Completa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {term.detailedExplanation}
                </p>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Exemplo prático:</p>
                  <p className="text-sm">{term.example}</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Informações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Categoria</p>
                  <p className="text-sm">{term.category}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">ID</p>
                  <p className="text-sm font-mono">{term.id}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={`https://wa.me/?text=${encodeURIComponent(`${term.term}: ${term.definition} - https://ia21.com.br/glossario/${term.slug}`)}`} target="_blank" rel="noopener noreferrer">
                    <Share2 className="w-4 h-4 mr-2" />
                    Compartilhar
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Applications */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Aplicações Práticas
              </CardTitle>
              <CardDescription>
                Principais áreas onde este conceito é aplicado no mundo real
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-3">
                {term.applications.map((application, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{application}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Related Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Termos Relacionados</CardTitle>
              <CardDescription>
                Explore outros conceitos relacionados para aprofundar seu conhecimento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {term.relatedTerms.map((relatedTerm, index) => (
                  <Link key={index} href={`/glossario/${relatedTerm.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                      {relatedTerm}
                    </Badge>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Link href="/glossario">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Glossário
              </Button>
            </Link>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={`https://wa.me/?text=${encodeURIComponent(`${term.term}: ${term.definition} - https://ia21.com.br/glossario/${term.slug}`)}`} target="_blank" rel="noopener noreferrer">
                  <Share2 className="w-4 h-4 mr-2" />
                  Compartilhar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: TermPageProps) {
  const resolvedParams = await params
  const term = findTermBySlug(resolvedParams.termo)

  if (!term) {
    return {
      title: 'Termo não encontrado - Glossário IA21'
    }
  }

  return {
    title: `${term.term} - Definição e Conceitos | Glossário IA21`,
    description: `${term.definition} Aprenda sobre ${term.term} com exemplos práticos e aplicações reais. Parte do glossário completo de inteligência artificial da IA21.`,
    keywords: [
      term.term,
      'inteligência artificial',
      'IA',
      'machine learning',
      'glossário',
      'tecnologia',
      'inovação',
      term.category.toLowerCase(),
      ...term.relatedTerms
    ].join(', '),
    openGraph: {
      title: `${term.term} - Glossário IA21`,
      description: term.definition,
      type: 'article',
      url: `https://ia21.com.br/glossario/${term.slug}`,
      siteName: 'IA21 Educação',
      images: [
        {
          url: '/hero-glossario.webp',
          width: 1200,
          height: 630,
          alt: `Definição de ${term.term} - Glossário IA21`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${term.term} - Glossário IA21`,
      description: term.definition,
      images: ['/hero-glossario.webp']
    },
    alternates: {
      canonical: `https://ia21.com.br/glossario/${term.slug}`
    }
  }
}

// Generate static params for all terms
export async function generateStaticParams() {
  return glossarioTerms.map((term) => ({
    termo: term.slug,
  }))
}
