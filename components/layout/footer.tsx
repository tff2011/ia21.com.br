'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'
import { FaTiktok, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const navigation = {
  solutions: [
    { name: 'Todos os Programas', href: '/programas' },
    { name: 'Para Você', href: '/para-voce' },
    { name: 'Para Empresas', href: '/para-empresas' },
  ],
  support: [
    { name: 'Central de Ajuda', href: '/ajuda' },
    { name: 'Contato', href: '/contato' },
  ],
  company: [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Blog', href: '/conteudos' },
    { name: 'Carreiras', href: '/carreiras' },
  ],
}

const socialLinks = [
  {
    name: 'X (Twitter)',
    href: 'https://x.com/ia21educacao',
    icon: FaXTwitter,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ia21educacao',
    icon: Instagram,
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@ia21educacao',
    icon: FaTiktok,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ia21educacao/',
    icon: Linkedin,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@ia21educacao',
    icon: FaYoutube,
  },
]

interface FooterProps {
  theme?: 'gold' | 'blue'
}

export function Footer({ theme = 'gold' }: FooterProps) {
  const router = useRouter()

  const handleNavigation = (href: string) => {
    // Scroll to top before navigation
    window.scrollTo({ top: 0, behavior: 'instant' })
    // Navigate to the page
    router.push(href)
  }

  const themeClasses = {
    gold: {
      bg: 'bg-brand-rich-black',
      accent: 'text-brand-metallic-gold',
      accentHover: 'hover:text-brand-metallic-gold',
      button: 'bg-brand-metallic-gold hover:bg-brand-metallic-gold/80 focus-visible:outline-brand-metallic-gold',
      input: 'focus:ring-brand-metallic-gold'
    },
    blue: {
      bg: 'bg-brand-deep-navy-blue',
      accent: 'text-brand-tech-blue',
      accentHover: 'hover:text-brand-tech-blue',
      button: 'bg-brand-tech-blue hover:bg-brand-tech-blue/80 focus-visible:outline-brand-tech-blue',
      input: 'focus:ring-brand-tech-blue'
    }
  }

  const currentTheme = themeClasses[theme]

  return (
    <footer className={`${currentTheme.bg}`} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand and Description */}
          <div className="space-y-8">
            <div>
              <Link href="/" className="text-3xl font-bold text-white">
                IA21
              </Link>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Transformando o futuro através da educação tecnológica. 
                Desenvolvemos profissionais preparados para os desafios da era digital.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className={`h-5 w-5 ${currentTheme.accent}`} />
                <span className="text-sm">contato@ia21.com.br</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className={`h-5 w-5 ${currentTheme.accent}`} />
                <span className="text-sm">+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className={`h-5 w-5 ${currentTheme.accent}`} />
                <span className="text-sm">Brasília, DF - Brasil</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${currentTheme.accentHover} transition-colors`}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Programas</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Suporte</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Empresa</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors text-left"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Receba nossas novidades
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">
                Fique por dentro das últimas tendências em tecnologia e educação.
              </p>
            </div>
            <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
              <label htmlFor="email-address" className="sr-only">
                Endereço de email
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className={`w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset ${currentTheme.input} sm:w-64 sm:text-sm sm:leading-6`}
                placeholder="Seu email"
              />
              <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className={`flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors ${currentTheme.button}`}
                >
                  Inscrever-se
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:order-2">
            <p className="text-xs leading-5 text-gray-400">
              <button
                onClick={() => handleNavigation('/privacidade')}
                className="hover:text-gray-300 transition-colors"
              >
                Política de Privacidade
              </button>
            </p>
            <p className="text-xs leading-5 text-gray-400">
              <button
                onClick={() => handleNavigation('/termos')}
                className="hover:text-gray-300 transition-colors"
              >
                Termos de Uso
              </button>
            </p>
            <p className="text-xs leading-5 text-gray-400">
              <button
                onClick={() => handleNavigation('/cookies')}
                className="hover:text-gray-300 transition-colors"
              >
                Política de Cookies
              </button>
            </p>
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} IA21 Educação. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}