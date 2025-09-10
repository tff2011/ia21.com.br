import { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/content'

// Glossary terms for sitemap
const glossaryTerms = [
  { slug: 'agi-artificial-general-intelligence', priority: 0.9 },
  { slug: 'api-application-programming-interface', priority: 0.8 },
  { slug: 'attention-mechanism', priority: 0.8 },
  { slug: 'autoencoder', priority: 0.8 },
  { slug: 'backpropagation', priority: 0.8 },
  { slug: 'batch-processing', priority: 0.8 },
  { slug: 'bias-variance-tradeoff', priority: 0.8 },
  { slug: 'chain-of-thought', priority: 0.8 },
  { slug: 'chatbot', priority: 0.8 },
  { slug: 'classification', priority: 0.8 },
  { slug: 'computer-vision', priority: 0.9 },
  { slug: 'convolutional-neural-network-cnn', priority: 0.9 },
  { slug: 'cross-validation', priority: 0.8 },
  { slug: 'data-augmentation', priority: 0.8 },
  { slug: 'deep-learning', priority: 0.9 },
  { slug: 'diffusion-models', priority: 0.8 },
  { slug: 'embedding', priority: 0.8 },
  { slug: 'epoch', priority: 0.8 },
  { slug: 'fine-tuning', priority: 0.9 },
  { slug: 'foundation-models', priority: 0.9 },
  { slug: 'gan-generative-adversarial-network', priority: 0.8 },
  { slug: 'gradient-descent', priority: 0.8 },
  { slug: 'hallucination', priority: 0.8 },
  { slug: 'hyperparameters', priority: 0.8 },
  { slug: 'in-context-learning', priority: 0.8 },
  { slug: 'large-language-models-llm', priority: 1.0 },
  { slug: 'loss-function', priority: 0.8 },
  { slug: 'machine-learning', priority: 0.9 },
  { slug: 'multimodal-models', priority: 0.8 },
  { slug: 'natural-language-processing-nlp', priority: 0.9 },
  { slug: 'neural-networks', priority: 0.9 },
  { slug: 'overfitting', priority: 0.8 },
  { slug: 'parameter-efficient-fine-tuning-peft', priority: 0.8 },
  { slug: 'prompt-engineering', priority: 0.9 },
  { slug: 'quantization', priority: 0.8 },
  { slug: 'recurrent-neural-networks-rnn', priority: 0.8 },
  { slug: 'reinforcement-learning', priority: 0.9 },
  { slug: 'retrieval-augmented-generation-rag', priority: 0.8 },
  { slug: 'self-supervised-learning', priority: 0.8 },
  { slug: 'supervised-learning', priority: 0.8 },
  { slug: 'tokenization', priority: 0.8 },
  { slug: 'transfer-learning', priority: 0.8 },
  { slug: 'transformer-architecture', priority: 0.9 },
  { slug: 'unsupervised-learning', priority: 0.8 },
  { slug: 'vector-embeddings', priority: 0.8 },
  { slug: 'zero-shot-learning', priority: 0.8 },
  { slug: 'ai-ethics-etica-em-ia', priority: 0.8 },
  { slug: 'ai-safety-seguranca-em-ia', priority: 0.8 },
  { slug: 'explainable-ai-xai', priority: 0.8 },
  { slug: 'ai-alignment-alinhamento-de-ia', priority: 0.9 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ia21.com.br'

  // Use local MDX (Velite) posts for sitemap
  const posts = getPublishedPosts()

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/para-voce`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/para-empresas`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/programas`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/conteudos`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/materiais-gratuitos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/podcasts`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glossario`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    // Auth pages are typically not indexed
  ]

  // Dynamic blog post pages
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/conteudos/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  } as const))

  // Glossary term pages
  const glossaryPages = glossaryTerms.map((term) => ({
    url: `${baseUrl}/glossario/${term.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: term.priority,
  } as const))

  return [...staticPages, ...blogPosts, ...glossaryPages]
}
