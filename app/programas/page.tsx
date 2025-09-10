import { Metadata } from 'next'
import { ProgramsGrid } from '@/components/programs/programs-grid'
import { ProgramsFilters } from '@/components/programs/programs-filters'

export const metadata: Metadata = {
  title: 'Programas - IA21 Educação',
  description: 'Explore nosso catálogo completo de programas em desenvolvimento de software para todos os níveis.',
}

export default function ProgramasPage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Nossos <span className="text-primary">Programas</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o programa ideal para seu perfil e acelere sua jornada em desenvolvimento de software
          </p>
        </div>

        <ProgramsFilters />
        <ProgramsGrid />
      </div>
    </main>
  )
}
