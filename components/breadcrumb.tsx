'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ChevronRight, Home } from 'lucide-react'

// Mapeamento de rotas para nomes legíveis e SEO
const routeLabels: Record<string, string> = {
  '': 'Home',
  'programas': 'Programas',
  'para-voce': 'Para Você',
  'para-empresas': 'Para Empresas',
  'sobre': 'Sobre Nós',
  'conteudos': 'Conteúdos',
  'blog': 'Blog',
  'login': 'Login',
  'signup': 'Cadastrar',
  'dashboard': 'Dashboard',
  'privacidade': 'Política de Privacidade',
  'termos': 'Termos de Uso',
  'cookies': 'Política de Cookies',
  'carreiras': 'Carreiras',
  'ajuda': 'Central de Ajuda',
  'contato': 'Contato',
  'suporte': 'Suporte Técnico',
  'glossario': 'Glossário',
  'materiais-gratuitos': 'Materiais Gratuitos',
  'podcast': 'Podcasts',
  'podcasts': 'Podcasts',
  'materiais': 'Materiais',
  'studio': 'Studio',
}

// Meta descriptions para SEO
const routeDescriptions: Record<string, string> = {
  'programas': 'Explore nossa gama completa de cursos e programas educacionais',
  'para-voce': 'Cursos personalizados para desenvolvimento pessoal e profissional',
  'para-empresas': 'Soluções educacionais corporativas para capacitação de equipes',
  'sobre': 'Conheça nossa missão, visão e valores na IA21 Educação',
  'conteudos': 'Artigos, tutoriais e conteúdos educacionais gratuitos',
  'privacidade': 'Como protegemos seus dados pessoais e garantimos sua privacidade',
  'termos': 'Termos e condições de uso da plataforma IA21 Educação',
  'cookies': 'Política de cookies e tecnologias de rastreamento',
  'carreiras': 'Oportunidades de trabalho e carreira na IA21 Educação',
}

// Mapeamento para structured data (JSON-LD)
const getStructuredData = (breadcrumbs: Array<{ name: string; href: string; isLast: boolean }>) => {
  const itemListElement = breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: `https://ia21.com.br${crumb.href}`,
  }))

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  }
}

// Função para formatar nomes de rotas dinâmicas
const formatDynamicRoute = (segment: string, index: number, allSegments: string[]): string => {
  // Para rotas dinâmicas como [slug], tenta encontrar um padrão
  if (segment.match(/^[a-f0-9]{8,}$/) || segment.match(/^[a-z0-9]+$/)) {
    // Verifica o contexto para determinar o tipo de conteúdo
    if (index > 0) {
      const parentSegment = allSegments[index - 1]
      switch (parentSegment) {
        case 'programas':
          return 'Programa'
        case 'conteudos':
        case 'blog':
          return 'Artigo'
        case 'dashboard':
          return 'Seção'
        case 'glossario':
          return 'Glossário'
        case 'materiais-gratuitos':
          return 'Materiais Gratuitos'
        default:
          return 'Página'
      }
    }
    return 'Página'
  }

  // Para slugs com hífens (SEO-friendly URLs)
  if (segment.includes('-')) {
    return segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  // Fallback: primeira letra maiúscula
  return segment.charAt(0).toUpperCase() + segment.slice(1)
}

export default function BreadcrumbComponent() {
  const pathname = usePathname()
  const isBusinessTheme = pathname?.startsWith('/para-empresas')

  // Remove query parameters e hash
  const cleanPathname = pathname.split('?')[0].split('#')[0]

  // Divide o caminho em segmentos
  const pathSegments = cleanPathname.split('/').filter(segment => segment)

  // Cria os breadcrumbs
  const breadcrumbs = React.useMemo(() => {
    const crumbs: Array<{ name: string; href: string; isLast: boolean }> = []

    // Sempre começa com Home
    crumbs.push({
      name: routeLabels[''] || 'Home',
      href: '/',
      isLast: pathSegments.length === 0,
    })

    // Adiciona cada segmento
    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const isLast = index === pathSegments.length - 1

      // Tenta usar o mapeamento de labels, senão formata dinamicamente
      const name = routeLabels[segment] || formatDynamicRoute(segment, index, pathSegments)

      crumbs.push({
        name,
        href,
        isLast,
      })
    })

    return crumbs
  }, [pathSegments])

  // Não mostra breadcrumb em páginas especiais
  const hideBreadcrumbPages = ['/login', '/signup', '/dashboard']
  if (hideBreadcrumbPages.includes(pathname)) {
    return null
  }

  // Structured Data para SEO
  const structuredData = getStructuredData(breadcrumbs)

  // Meta description baseada na rota atual
  const currentSegment = pathSegments[pathSegments.length - 1]
  const metaDescription = routeDescriptions[currentSegment]

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Dynamic Meta Tags */}
      {metaDescription && (
        <meta name="description" content={metaDescription} />
      )}

      {/* Breadcrumb Visual */}
      <nav
        aria-label="Navegação estrutural do site"
        className={`py-4 px-4 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm border-b ${
          isBusinessTheme
            ? 'bg-sky-blue/95 border-brand-tech-blue/20'
            : 'bg-white/95 border-gray-200'
        }`}
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <div className="max-w-7xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList className="flex-wrap sm:flex-nowrap">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={crumb.href}>
                  {index > 0 && (
                    <BreadcrumbSeparator>
                      <ChevronRight className="h-4 w-4" />
                    </BreadcrumbSeparator>
                  )}
                  <BreadcrumbItem
                    itemProp="itemListElement"
                    itemScope
                    itemType="https://schema.org/ListItem"
                  >
                    {crumb.isLast ? (
                      <>
                        <BreadcrumbPage
                          className="font-medium text-foreground whitespace-nowrap"
                          itemProp="name"
                        >
                          {crumb.name}
                        </BreadcrumbPage>
                        <meta itemProp="position" content={(index + 1).toString()} />
                      </>
                    ) : (
                      <>
                        <BreadcrumbLink asChild>
                          <Link
                            href={crumb.href}
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                            itemProp="item"
                          >
                            <span itemProp="name" className="flex items-center gap-2">
                              {index === 0 && <Home className="h-4 w-4" />}
                              {crumb.name}
                            </span>
                          </Link>
                        </BreadcrumbLink>
                        <meta itemProp="position" content={(index + 1).toString()} />
                      </>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
    </>
  )
}
