'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { Menu, User, LogOut, ChevronDown } from 'lucide-react'
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

const navigation = [
  { name: 'Conteúdos', href: '/conteudos' },
  { name: 'Sobre', href: '/sobre' },
]

const programsMenu = [
  { name: 'Todos os Programas', href: '/programas' },
  { name: 'Para Você', href: '/para-voce' },
  { name: 'Para Empresas', href: '/para-empresas' },
]

export function Header({ theme = 'gold' }: { theme?: 'gold' | 'blue' }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  const pathname = usePathname()

  const isBusinessSection = pathname?.startsWith('/para-empresas')
  const isPersonalSection = pathname?.startsWith('/para-voce')

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

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${theme === 'blue' ? 'theme-blue' : ''}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className={`text-2xl font-bold ${theme === 'blue' ? 'text-brand-tech-blue' : 'text-brand-metallic-gold'}`}>IA21</span>
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
            <DropdownMenuContent align="start" className="w-48">
              {programsMenu.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href} className="w-full">
                    {item.name}
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
              <Button variant="ghost" asChild>
                <Link href="/login">Entrar</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Cadastrar</Link>
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
                className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 transition-colors ${
                  theme === 'blue' 
                    ? 'text-brand-deep-navy-blue hover:text-brand-tech-blue hover:bg-brand-tech-blue/10' 
                    : 'text-brand-dark-gray hover:text-brand-metallic-gold hover:bg-brand-metallic-gold/10'
                }`}
              >
                <span className="sr-only">Abrir menu principal</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className={`w-full max-w-sm border-0 ${
                theme === 'blue'
                  ? 'bg-brand-tech-blue'
                  : 'bg-brand-metallic-gold'
              }`}
            >
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              
              {/* Header do Menu */}
              <div className="flex items-center justify-between pb-6 border-b border-white/20">
                <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-2xl font-bold text-white">IA21</span>
                  {logoText && (
                    <div className="flex items-center">
                      <div className="w-px h-6 bg-white/30 mx-2"></div>
                      <span className="text-sm font-medium tracking-wide text-white">
                        {logoText.text}
                      </span>
                    </div>
                  )}
                </Link>
              </div>

              {/* Conteúdo do Menu */}
              <div className="flex flex-col h-full pt-6">
                <div className="flex-1 space-y-6">
                  {/* Programs Section */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">
                      Programas
                    </h3>
                    <div className="space-y-1">
                      {programsMenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Other Navigation Items */}
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider">
                      Navegação
                    </h3>
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Mobile Auth */}
                <div className="border-t border-white/20 pt-6">
                  {status === 'loading' ? (
                    <div className="h-12 bg-white/10 animate-pulse rounded-lg" />
                  ) : session ? (
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 px-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''} />
                          <AvatarFallback className="bg-white/20 text-white">
                            {session.user?.name ? getUserInitials(session.user.name) : 'U'}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-semibold text-white truncate">{session.user?.name}</p>
                          <p className="text-sm text-white/70 truncate">{session.user?.email}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-1">
                        <Link
                          href="/dashboard"
                          className="flex items-center rounded-lg px-4 py-3 text-base font-medium text-white hover:bg-white/10 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <User className="mr-3 h-5 w-5" />
                          Dashboard
                        </Link>
                        <button
                          onClick={() => {
                            handleSignOut()
                            setMobileMenuOpen(false)
                          }}
                          className="flex w-full items-center rounded-lg px-4 py-3 text-base font-medium text-white/90 hover:bg-white/10 transition-colors"
                        >
                          <LogOut className="mr-3 h-5 w-5" />
                          Sair
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Link
                        href="/login"
                        className="block rounded-lg px-4 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Entrar
                      </Link>
                      <Link
                        href="/signup"
                        className="block rounded-lg px-4 py-3 text-base font-semibold bg-white/20 hover:bg-white/30 border border-white/30 text-white transition-colors text-center"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Cadastrar
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}