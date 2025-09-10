import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { sanityClient } from '@/lib/sanity.client'
import { postQuery } from '@/lib/sanity.queries'
import { PortableText } from '@portabletext/react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react'

interface Post {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  body: unknown
  coverImage?: {
    asset: {
      url: string
    }
    alt?: string
  }
  tags: string[]
  categories: Array<{
    _id: string
    title: string
    slug: string
    color?: string
  }>
  author: {
    _id: string
    name: string
    slug: string
    bio?: string
    image?: {
      asset: {
        url: string
      }
    }
    email?: string
    website?: string
    social?: {
      twitter?: string
      linkedin?: string
    }
  }
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const post = await sanityClient.fetch(postQuery, { slug })
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

  const publishedTime = new Date(post.publishedAt).toISOString()
  const modifiedTime = publishedTime // Use publishedAt as fallback
  
  return {
    title: `${post.title} | IA21 Educação`,
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
      images: post.coverImage ? [
        {
          url: post.coverImage.asset.url,
          width: 1200,
          height: 630,
          alt: post.coverImage.alt || post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage.asset.url] : [],
    },
    alternates: {
      canonical: `/conteudos/${post.slug}`,
    },
  }
}

import type { ReactNode } from 'react'

const portableTextComponents = {
  block: {
    h1: ({ children }: { children: ReactNode }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }: { children: ReactNode }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
    h3: ({ children }: { children: ReactNode }) => <h3 className="text-xl font-bold mt-5 mb-2">{children}</h3>,
    normal: ({ children }: { children: ReactNode }) => <p className="mb-4 leading-7">{children}</p>,
    blockquote: ({ children }: { children: ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children: ReactNode }) => <ul className="list-disc list-inside mb-4 space-y-1">{children}</ul>,
    number: ({ children }: { children: ReactNode }) => <ol className="list-decimal list-inside mb-4 space-y-1">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children: ReactNode }) => <li className="mb-1">{children}</li>,
    number: ({ children }: { children: ReactNode }) => <li className="mb-1">{children}</li>,
  },
  marks: {
    strong: ({ children }: { children: ReactNode }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: { children: ReactNode }) => <em className="italic">{children}</em>,
    code: ({ children }: { children: ReactNode }) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    link: (props: { children: ReactNode; value?: { href?: string } }) => (
      <a href={props.value?.href} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    ),
  },
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.coverImage ? post.coverImage.asset.url : undefined,
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": post.author.website,
      "image": post.author.image?.asset.url,
    },
    "publisher": {
      "@type": "Organization",
      "name": "IA21 Educação",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ia21.com.br/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ia21.com.br/conteudos/${post.slug}`
    },
    "keywords": post.tags,
    "articleSection": post.categories[0]?.title,
  }

  const bodyLength = Array.isArray(post.body) ? post.body.length : 0
  const estimatedReadTime = Math.ceil(bodyLength * 0.5) // Rough estimate

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <article className="min-h-screen">
        {/* Header */}
        <div className="border-b">
          <div className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <Link href="/conteudos" className="hover:text-primary transition-colors">
                Conteúdos
              </Link>
              <span>/</span>
              <span>{post.title}</span>
            </div>

            <div className="space-y-6">
              {/* Categories and Tags */}
              <div className="flex flex-wrap items-center gap-2">
                {post.categories.map((category) => (
                  <Badge key={category._id} variant="secondary" className="text-xs">
                    {category.title}
                  </Badge>
                ))}
                {post.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

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
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{estimatedReadTime} min de leitura</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/conteudos">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar aos artigos
                  </Link>
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartilhar
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative h-[50vh] bg-muted">
            <img
              src={post.coverImage.asset.url}
              alt={post.coverImage.alt || post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="prose prose-lg max-w-none">
            {post.body ? (
              <PortableText value={post.body as unknown as never} components={portableTextComponents as unknown as never} />
            ) : null}
          </div>
        </div>

        {/* Author Bio */}
        <Separator className="max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-muted/30 rounded-lg p-8">
            <div className="flex items-start gap-6">
              {post.author.image && (
                <img
                  src={post.author.image.asset.url}
                  alt={post.author.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Sobre o autor</h3>
                <p className="text-lg font-medium mb-2">{post.author.name}</p>
                {post.author.bio && (
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.author.bio}
                  </p>
                )}
                <div className="flex gap-4">
                  {post.author.website && (
                    <Button asChild variant="outline" size="sm">
                      <a href={post.author.website} target="_blank" rel="noopener noreferrer">
                        Website
                      </a>
                    </Button>
                  )}
                  {post.author.social?.twitter && (
                    <Button asChild variant="outline" size="sm">
                      <a href={post.author.social.twitter} target="_blank" rel="noopener noreferrer">
                        Twitter
                      </a>
                    </Button>
                  )}
                  {post.author.social?.linkedin && (
                    <Button asChild variant="outline" size="sm">
                      <a href={post.author.social.linkedin} target="_blank" rel="noopener noreferrer">
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
