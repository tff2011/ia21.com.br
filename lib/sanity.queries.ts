import { groq } from 'next-sanity'

// Posts queries
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage {
      ...,
      asset->
    },
    tags,
    categories[]-> {
      _id,
      title,
      "slug": slug.current,
      color
    },
    author-> {
      _id,
      name,
      "slug": slug.current,
      image {
        ...,
        asset->
      }
    }
  }
`

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    body,
    coverImage {
      ...,
      asset->
    },
    tags,
    categories[]-> {
      _id,
      title,
      "slug": slug.current,
      color
    },
    author-> {
      _id,
      name,
      "slug": slug.current,
      bio,
      image {
        ...,
        asset->
      },
      email,
      website,
      social
    }
  }
`

export const postsByCategoryQuery = groq`
  *[_type == "post" && $categoryId in categories[]._ref] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage {
      ...,
      asset->
    },
    tags,
    author-> {
      name,
      "slug": slug.current
    }
  }
`

export const postsByTagQuery = groq`
  *[_type == "post" && $tag in tags] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage {
      ...,
      asset->
    },
    tags,
    author-> {
      name,
      "slug": slug.current
    }
  }
`

// Categories query
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    color
  }
`

// Authors query
export const authorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    bio,
    image {
      ...,
      asset->
    },
    email,
    website,
    social
  }
`
