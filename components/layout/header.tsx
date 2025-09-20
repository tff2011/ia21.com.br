
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { Menu, User, LogOut, ChevronDown, UserCircle, GraduationCap, LayoutGrid, Building2, Podcast, BookOpen, FileText, Download, Info, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import Image from 'next/image'

const navigation = [
  { name: 'Sobre Nós', href: '/sobre' },
]

const programsMenu = [
  { name: 'Todos os Programas', href: '/programas' },
  { name: 'Para Você', href: '/para-voce' },
  { name: 'Para Empresas', href: '/para-empresas' },
]

const conteudosMenu = [
  { name: 'Podcasts', href: '/podcasts', icon: '🎙️' },
  { name: 'Blog', href: '/conteudos', icon: '📝' },
  { name: 'Glossário', href: '/glossario', icon: '📚' },
  { name: 'Materiais Gratuitos', href: '/materiais-gratuitos', icon: '📋' },
]

export function Header({ theme = 'gold' }: { theme?: 'gold' | 'blue' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  const pathname = usePathname()

  const isBusinessSection = pathname?.startsWith('/para-empresas')
  const isPersonalSection = pathname?.startsWith('/para-voce')
  const isHomePage = pathname === '/'

  const getLogoText = () => {
    if (isBusinessSection) {
      return {
        text: 'para empresas',
        colorClass: 'text-white'
      }
    } else if (isPersonalSection) {
      return {
        text: 'para você',
        colorClass: 'text-white'
      }
    }
    return null
  }

  const logoText = getLogoText()

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  const getUserInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  const logoSrc = (() => {
    if (isHomePage) return '/logo-flat-black-nobg.svg'
    if (isBusinessSection) return '/logo-flat-navy-blue-nobg.svg'
    if (isPersonalSection) return '/logo-flat-gold-nobg.svg'
    return '/logo-flat-black-nobg.svg'
  })()

  const iconForHref: Record<string, LucideIcon> = {
    '/programas': LayoutGrid,
    '/para-voce': User,
    '/para-empresas': Building2,
    '/podcasts': Podcast,
    '/conteudos': FileText,
    '/glossario': BookOpen,
    '/materiais-gratuitos': Download,
    '/sobre': Info,
  }

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${theme === 'blue' ? 'theme-blue' : ''}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <Image
              src={logoSrc}
              alt="IA21 Educação"
              width={168}
              height={42}
              className="h-[42px] w-auto"
              priority
              quality={95}
              sizes="(min-width: 1024px) 168px, 140px"
            />
            {logoText && (
              <div className="flex items-center">
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                <span className={`text-sm font-medium tracking-wide ${theme === 'blue' ? 'text-brand-tech-blue' : 'text-brand-metallic-gold'}`}>
                  {isBusinessSection ? 'para empresas' : 'para você'}
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {/* Programs Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center text-sm font-semibold leading-6 transition-colors ${
              theme === 'blue'
                ? 'text-brand-deep-navy-blue hover:text-brand-tech-blue'
                : 'text-brand-dark-gray hover:text-brand-metallic-gold'
            }`}>
              Programas
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {programsMenu.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href} className="w-full inline-flex items-center gap-2">
                    {(() => { const Icon = iconForHref[item.href]; return Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null })()}
                    <span>{item.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Conteúdos Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className={`flex items-center text-sm font-semibold leading-6 transition-colors ${
              theme === 'blue'
                ? 'text-brand-deep-navy-blue hover:text-brand-tech-blue'
                : 'text-brand-dark-gray hover:text-brand-metallic-gold'
            }`}>
              Conteúdos
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {conteudosMenu.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href} className="w-full inline-flex items-center gap-2">
                    {(() => { const Icon = iconForHref[item.href]; return Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null })()}
                    <span>{item.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Other Navigation Items */}
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors ${
                theme === 'blue'
                  ? 'text-brand-deep-navy-blue hover:text-brand-tech-blue'
                  : 'text-brand-dark-gray hover:text-brand-metallic-gold'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          {status === 'loading' ? (
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse" />
          ) : session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''} />
                    <AvatarFallback>
                      {session.user?.name ? getUserInitials(session.user.name) : 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <div className="flex flex-col space-y-1 p-2">
                  <p className="text-sm font-medium leading-none">{session.user?.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {session.user?.email}
                  </p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-brand-dark-gray focus:text-brand-dark-gray"
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button asChild>
                <Link href="/signup" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Aplique-se
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/login" className="flex items-center gap-2">
                  <UserCircle className="h-4 w-4" />
                  Entrar
                </Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Abrir menu principal"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
                aria-haspopup="dialog"
                className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  theme === 'blue'
                    ? 'text-brand-deep-navy-blue hover:text-white hover:bg-brand-tech-blue focus-visible:ring-brand-tech-blue border border-brand-deep-navy-blue/20 hover:border-brand-tech-blue'
                    : 'text-brand-dark-gray hover:text-white hover:bg-brand-metallic-gold focus-visible:ring-brand-metallic-gold border border-brand-dark-gray/20 hover:border-brand-metallic-gold'
                }`}
              >
                <span className="sr-only">Abrir menu principal</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              id="mobile-menu"
              aria-label="Menu de navegação mobile"
              side="right"
              className={`w-full max-w-sm border-0 px-0 ${
                theme === 'blue' ? 'bg-brand-tech-blue' : 'bg-brand-metallic-gold'
              }`}
            >
              <SheetTitle id="mobile-menu-title" className="sr-only">Menu de Navegação</SheetTitle>

              {/* Header do Menu */}
              <div className="flex items-center justify-between px-4 pb-4 pt-3 border-b border-white/15">
                <Link
                  href="/"
                  className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 rounded-md"
                  aria-label="Ir para a página inicial"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-2xl font-bold text-white">IA21</span>
                  {logoText && (
                    <div className="flex items-center text-white/90">
                      <div className="w-px h-5 bg-white/30 mx-2" aria-hidden="true"></div>
                      <span className="text-sm font-medium tracking-wide">{logoText.text}</span>
                    </div>
                  )}
                </Link>
              </div>

              {/* Conteúdo do Menu */}
              <nav className="flex flex-col h-full" role="navigation" aria-labelledby="mobile-menu-title">
                <div className="flex-1 space-y-8 px-2 py-6">
                  {/* Programs Section */}
                  <section aria-labelledby="menu-programas-heading" className="space-y-3">
                    <h3 id="menu-programas-heading" className="px-2 text-xs font-semibold text-white/80 uppercase tracking-widest">
                      Programas
                    </h3>
                    <ul className="space-y-1" role="list">
                      {programsMenu.map((item) => {
                        const isCurrent = pathname === item.href
                        return (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              aria-current={isCurrent ? 'page' : undefined}
                              className={`flex items-center gap-2 rounded-md px-3 py-2 text-[15px] font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-colors ${
                                isCurrent ? 'bg-white/15' : 'hover:bg-white/10'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {(() => { const Icon = iconForHref[item.href]; return Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null })()}
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </section>

                  {/* Conteúdos Section */}
                  <section aria-labelledby="menu-conteudos-heading" className="space-y-3">
                    <h3 id="menu-conteudos-heading" className="px-2 text-xs font-semibold text-white/80 uppercase tracking-widest">
                      Conteúdos
                    </h3>
                    <ul className="space-y-1" role="list">
                      {conteudosMenu.map((item) => {
                        const isCurrent = pathname === item.href
                        return (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              aria-current={isCurrent ? 'page' : undefined}
                              className={`flex items-center gap-2 rounded-md px-3 py-2 text-[15px] font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-colors ${
                                isCurrent ? 'bg-white/15' : 'hover:bg-white/10'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {(() => { const Icon = iconForHref[item.href]; return Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null })()}
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </section>

                  {/* Other Navigation Items */}
                  <section aria-labelledby="menu-nav-heading" className="space-y-3">
                    <h3 id="menu-nav-heading" className="px-2 text-xs font-semibold text-white/80 uppercase tracking-widest">
                      Navegação
                    </h3>
                    <ul className="space-y-1" role="list">
                      {navigation.map((item) => {
                        const isCurrent = pathname === item.href
                        return (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              aria-current={isCurrent ? 'page' : undefined}
                              className={`flex items-center gap-2 rounded-md px-3 py-2 text-[15px] font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-colors ${
                                isCurrent ? 'bg-white/15' : 'hover:bg-white/10'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {(() => { const Icon = iconForHref[item.href]; return Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null })()}
                              <span>{item.name}</span>
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  </section>
                </div>

                {/* Mobile Auth */}
                <div className="border-t border-white/15 px-4 py-5" role="group" aria-label="Acesso e sessão">
                  {status === 'loading' ? (
                    <div className="h-11 bg-white/10 animate-pulse rounded-md" />
                  ) : session ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''} />
                          <AvatarFallback className="bg-white/20 text-white">
                            {session.user?.name ? getUserInitials(session.user.name) : 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{session.user?.name}</p>
                          <p className="text-xs text-white/80 truncate">{session.user?.email}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href="/dashboard"
                          className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <User className="h-4 w-4" />
                          Dashboard
                        </Link>
                        <button
                          onClick={() => {
                            handleSignOut()
                            setMobileMenuOpen(false)
                          }}
                          className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 transition-colors"
                        >
                          <LogOut className="h-4 w-4" />
                          Sair
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-3">
                      <Link
                        href="/signup"
                        aria-label="Aplicar-se para programas"
                        className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-base font-semibold bg-white/20 hover:bg-white/30 border border-white/25 text-white transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <GraduationCap className="h-5 w-5" />
                        Aplique-se
                      </Link>
                      <Link
                        href="/login"
                        aria-label="Entrar na sua conta"
                        className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-base font-semibold text-white hover:bg-white/10 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <UserCircle className="h-5 w-5" />
                        Entrar
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
