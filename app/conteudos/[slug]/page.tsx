import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug } from '@/lib/content'
// Using a custom renderer for precompiled MDX from Velite
import { renderPrecompiledMDX } from '@/lib/mdx-renderer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import { MDXComponents } from '@/components/MDXComponents'
import { ShareButton } from '@/components/ui/share-button'


async function getPost(slug: string) {
  try {
    const post = getPostBySlug(slug)
    if (!post || !post.published) {
      return null
    }
    return post
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post não encontrado - IA21 Educação',
      description: 'O post que você está procurando não foi encontrado.',
    }
  }

  const publishedTime = new Date(post.date).toISOString()
  const modifiedTime = publishedTime

  return {
    title: post.title,
    description: post.excerpt || `Aprenda sobre ${post.tags?.slice(0, 3).join(', ')} com este artigo detalhado da IA21 Educação.`,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [post.author.name],
      tags: post.tags,
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `/conteudos/${post.slug}`,
    },
  }
}


export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const estimatedReadTime = Math.ceil(post.body.length / 1000) + 2

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
    "timeRequired": `PT${estimatedReadTime}M`,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": post.author.social?.linkedin || post.author.social?.twitter,
      "image": post.author.avatar,
    },
    "publisher": {
      "@type": "Organization",
      "name": "IA21 Educação",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ia21.com.br/logo-flat-gold-nobg.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ia21.com.br/conteudos/${post.slug}`
    },
    "keywords": post.tags,
    "articleSection": post.categories[0],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Breadcrumbs structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Início",
                "item": "https://ia21.com.br/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Conteúdos",
                "item": "https://ia21.com.br/conteudos"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://ia21.com.br/conteudos/${post.slug}`
              }
            ]
          })
        }}
      />
      
      <article className="min-h-screen">
        {/* Header */}
        <div className="border-b">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="space-y-6">
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('pt-BR')}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{estimatedReadTime} min de leitura</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <ShareButton 
                  title={post.title}
                  url={`https://ia21.com.br/conteudos/${post.slug}`}
                  description={post.excerpt || `Confira este artigo sobre ${post.title} no blog da IA21 Educação`}
                  size="sm"
                  variant="outline"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        {post.image && (
          <div className="relative h-[50vh] bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none">
            {renderPrecompiledMDX(post.body, MDXComponents)}
          </div>
        </div>

        {/* Navigation and Tags */}
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <div className="space-y-6">
            {/* Back Button */}
            <div className="flex justify-center">
              <Button asChild variant="outline" size="default">
                <Link href="/conteudos">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar aos artigos
                </Link>
              </Button>
            </div>

            {/* Tags */}
            <div className="text-center">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Tags relacionadas</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Author Bio */}
        <Separator className="max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-muted/30 rounded-lg p-8">
            <div className="flex items-start gap-8">
              {post.author.avatar && (
                <div className="flex-shrink-0">
                  <Image
                    src={post.author.avatar}
                    alt={`Foto de ${post.author.name}`}
                    width={120}
                    height={120}
                    className="rounded-full object-cover shadow-lg border-4 border-white"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold mb-3 text-primary">Sobre o autor</h3>
                <h4 className="text-xl font-semibold mb-3 text-foreground">{post.author.name}</h4>
                {post.author.bio && (
                  <p className="text-muted-foreground mb-6 leading-relaxed text-base">
                    {post.author.bio}
                  </p>
                )}
                <div className="flex gap-4">
                  {post.author.social?.linkedin && (
                    <Button asChild variant="outline" size="sm" className="hover:bg-primary hover:text-white transition-colors">
                      <a href={post.author.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
