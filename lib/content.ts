import { allPosts, allAuthors, allPages } from '../.velite'
import type { Post, Author, Page } from '../.velite'

// Re-export all content collections with proper typing
export const posts = allPosts as Post[]
export const authors = allAuthors as Author[]
export const pages = allPages as Page[]

// Helper functions for content queries
export const getPostBySlug = (slug: string) => {
  return posts.find((post) => post.slug === slug)
}

export const getPostsByTag = (tag: string) => {
  return posts.filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  )
}

export const getPostsByCategory = (category: string) => {
  return posts.filter((post) =>
    post.categories.some((postCategory) =>
      postCategory.toLowerCase() === category.toLowerCase()
    )
  )
}

export const getAuthorBySlug = (slug: string) => {
  return authors.find((author) => author.slug === slug)
}

export const getPageBySlug = (slug: string) => {
  return pages.find((page) => page.slug === slug)
}

export const getFeaturedPosts = () => {
  return posts.filter((post) => post.featured)
}

export const getPublishedPosts = () => {
  return posts.filter((post) => post.published)
}

export const getRecentPosts = (limit = 10) => {
  return getPublishedPosts()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit)
}

export const getPostsByAuthor = (authorSlug: string) => {
  return posts.filter((post) => post.author.slug === authorSlug)
}

// Search functionality
export const searchPosts = (query: string) => {
  const searchTerm = query.toLowerCase()
  return posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm) ||
    post.description?.toLowerCase().includes(searchTerm) ||
    post.tags.some((tag) => tag.toLowerCase().includes(searchTerm)) ||
    post.categories.some((category) => category.toLowerCase().includes(searchTerm))
  )
}

// Statistics
export const getContentStats = () => {
  return {
    totalPosts: posts.length,
    publishedPosts: getPublishedPosts().length,
    totalAuthors: authors.length,
    totalPages: pages.length,
    featuredPosts: getFeaturedPosts().length,
  }
}
