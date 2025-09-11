export function StructuredData() {
  const baseUrl = "https://ia21.com.br"

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IA21 Educação",
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo-flat-black-nobg.png`,
    },
    sameAs: [
      "https://x.com/ia21educacao",
      "https://www.instagram.com/ia21educacao",
      "https://www.tiktok.com/@ia21educacao",
      "https://www.linkedin.com/company/ia21educacao/",
      "https://www.youtube.com/@ia21educacao",
    ],
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IA21 Educação",
    url: baseUrl,
    inLanguage: "pt-BR",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/conteudos?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "IA21 Educação",
      url: baseUrl,
    },
  }

  const siteNavigation = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [
      "Programas",
      "Para Você",
      "Para Empresas",
      "Conteúdos",
      "Glossário",
      "Materiais Gratuitos",
      "Podcasts",
      "Sobre",
      "Carreiras",
      "Contato",
    ],
    url: [
      `${baseUrl}/programas`,
      `${baseUrl}/para-voce`,
      `${baseUrl}/para-empresas`,
      `${baseUrl}/conteudos`,
      `${baseUrl}/glossario`,
      `${baseUrl}/materiais-gratuitos`,
      `${baseUrl}/podcasts`,
      `${baseUrl}/sobre`,
      `${baseUrl}/carreiras`,
      `${baseUrl}/contato`,
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigation) }}
      />
    </>
  )
}

