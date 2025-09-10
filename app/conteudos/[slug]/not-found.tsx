import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold">Artigo não encontrado</h2>
          <p className="text-xl text-muted-foreground">
            O artigo que você está procurando não existe ou foi removido.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/conteudos">
              <ArrowLeft className="mr-2 h-5 w-5" />
              Voltar aos artigos
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/conteudos">
              <Search className="mr-2 h-5 w-5" />
              Explorar conteúdo
            </Link>
          </Button>
        </div>

        <div className="pt-8 border-t">
          <p className="text-sm text-muted-foreground">
            Sugestão: Verifique a URL ou explore nossos artigos mais recentes sobre
            <strong className="text-primary"> inteligência artificial</strong> e
            <strong className="text-primary"> machine learning</strong>.
          </p>
        </div>
      </div>
    </main>
  )
}