import { defineConfig, defineCollection, s } from 'velite'
import readingTime from 'reading-time'

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('post'),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      featured: s.boolean().default(false),
      tags: s.array(s.string()).default([]),
      categories: s.array(s.string()).default([]),
      author: s.object({
        name: s.string(),
        avatar: s.string().optional(),
        bio: s.string().optional(),
        social: s.object({
          twitter: s.string().optional(),
          linkedin: s.string().optional(),
          github: s.string().optional(),
        }).optional(),
      }),
      image: s.string().optional(),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split('/').slice(1).join('/'),
      readingTime: readingTime(data.body),
      excerpt: data.description || data.body.slice(0, 200) + '...',
    })),
})

const authors = defineCollection({
  name: 'Author',
  pattern: 'authors/**/*.mdx',
  schema: s
    .object({
      name: s.string(),
      slug: s.slug('author'),
      avatar: s.string().optional(),
      bio: s.string().optional(),
      social: s.object({
        twitter: s.string().optional(),
        linkedin: s.string().optional(),
        github: s.string().optional(),
        website: s.string().optional(),
      }).optional(),
      body: s.mdx(),
    }),
})

const pages = defineCollection({
  name: 'Page',
  pattern: 'pages/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('page'),
      description: s.string().max(999).optional(),
      date: s.isodate().optional(),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      slugAsParams: data.slug.split('/').slice(1).join('/'),
    })),
})

export default defineConfig({
  root: './content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts, authors, pages },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
})