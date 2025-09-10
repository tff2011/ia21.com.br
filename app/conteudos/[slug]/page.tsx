import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug } from '@/lib/content'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import { MDXComponents } from '@/components/MDXComponents'


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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.date,
    "dateModified": post.date,
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
        "url": "https://ia21.com.br/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://ia21.com.br/conteudos/${post.slug}`
    },
    "keywords": post.tags,
    "articleSection": post.categories[0],
  }

  const estimatedReadTime = Math.ceil(post.body.length / 1000) + 2

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
                  <Badge key={category} variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                ))}
                <Badge variant="default" className="text-xs bg-primary/10 text-primary border-primary/20">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Conteúdo MDX
                </Badge>
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
            <MDXRemote
              source={post.body}
              components={MDXComponents}
            />
          </div>
        </div>

        {/* Author Bio */}
        <Separator className="max-w-4xl mx-auto" />
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-muted/30 rounded-lg p-8">
            <div className="flex items-start gap-6">
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
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
