'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { Menu, X, User, LogOut, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navigation = [
  { name: 'Conteúdos', href: '/conteudos' },
  { name: 'Sobre', href: '/sobre' },
]

const programsMenu = [
  { name: 'Todos os Programas', href: '/programas' },
  { name: 'Para Você', href: '/para-voce' },
  { name: 'Para Empresas', href: '/para-empresas' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  const pathname = usePathname()
  
  const isBusinessSection = pathname?.startsWith('/para-empresas')
  const isPersonalSection = pathname?.startsWith('/para-voce')
  
  const getLogoText = () => {
    if (isBusinessSection) {
      return {
        text: 'para empresas',
        colorClass: 'text-brand-tech-blue'
      }
    } else if (isPersonalSection) {
      return {
        text: 'para você',
        colorClass: 'text-brand-metallic-gold'
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
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className="text-2xl font-bold text-brand-metallic-gold">IA21</span>
            {logoText && (
              <div className="flex items-center">
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                <span className={`text-sm font-medium tracking-wide ${logoText.colorClass}`}>
                  {logoText.text}
                </span>
              </div>
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {/* Programs Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-semibold leading-6 text-brand-dark-gray hover:text-brand-metallic-gold transition-colors">
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
              className="text-sm font-semibold leading-6 text-brand-dark-gray hover:text-brand-metallic-gold transition-colors"
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
              <Button variant="ghost" size="sm" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Abrir menu principal</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-2xl font-bold text-brand-metallic-gold">IA21</span>
                  {logoText && (
                    <div className="flex items-center">
                      <div className="w-px h-6 bg-gray-300 mx-2"></div>
                      <span className={`text-sm font-medium tracking-wide ${logoText.colorClass}`}>
                        {logoText.text}
                      </span>
                    </div>
                  )}
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Fechar menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </Button>
              </div>

              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {/* Programs Section */}
                    <div className="space-y-1">
                      <p className="-mx-3 px-3 py-1 text-sm font-medium text-gray-500">Programas</p>
                      {programsMenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-6 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    
                    {/* Other Navigation Items */}
                    <div className="pt-4 space-y-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Mobile Auth */}
                  <div className="py-6">
                    {status === 'loading' ? (
                      <div className="h-10 bg-gray-200 animate-pulse rounded-lg" />
                    ) : session ? (
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 px-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={session.user?.image || ''} alt={session.user?.name || ''} />
                            <AvatarFallback>
                              {session.user?.name ? getUserInitials(session.user.name) : 'U'}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-base font-semibold text-gray-900">{session.user?.name}</p>
                            <p className="text-sm text-gray-500">{session.user?.email}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Link
                            href="/dashboard"
                            className="-mx-3 flex items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <User className="mr-3 h-5 w-5" />
                            Dashboard
                          </Link>
                          <button
                            onClick={handleSignOut}
                            className="-mx-3 flex w-full items-center rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-dark-gray hover:bg-brand-light-gray/50"
                          >
                            <LogOut className="mr-3 h-5 w-5" />
                            Sair
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <Link
                          href="/login"
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Entrar
                        </Link>
                        <Link
                          href="/signup"
                          className="-mx-3 block rounded-lg bg-brand-metallic-gold px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-brand-metallic-gold/90"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          Cadastrar
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}