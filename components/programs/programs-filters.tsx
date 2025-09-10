'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Search, Filter, X } from 'lucide-react'
import { useState } from 'react'

export function ProgramsFilters() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [selectedTheme, setSelectedTheme] = useState<string>('all')
  const [selectedFormat, setSelectedFormat] = useState<string>('all')

  const activeFilters = [
    selectedLevel !== 'all' && { key: 'level', value: selectedLevel, label: `Nível: ${selectedLevel}` },
    selectedTheme !== 'all' && { key: 'theme', value: selectedTheme, label: `Tema: ${selectedTheme === 'gold' ? 'Para Você' : 'Para Empresas'}` },
    selectedFormat !== 'all' && { key: 'format', value: selectedFormat, label: `Formato: ${selectedFormat}` },
  ].filter(Boolean)

  const clearFilters = () => {
    setSelectedLevel('all')
    setSelectedTheme('all')
    setSelectedFormat('all')
    setSearchTerm('')
  }

  const removeFilter = (key: string) => {
    switch (key) {
      case 'level':
        setSelectedLevel('all')
        break
      case 'theme':
        setSelectedTheme('all')
        break
      case 'format':
        setSelectedFormat('all')
        break
    }
  }

  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar programas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filtros:</span>
        </div>

        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Nível" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os níveis</SelectItem>
            <SelectItem value="Iniciante">Iniciante</SelectItem>
            <SelectItem value="Intermediário">Intermediário</SelectItem>
            <SelectItem value="Avançado">Avançado</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedTheme} onValueChange={setSelectedTheme}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Tema" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os temas</SelectItem>
            <SelectItem value="gold">Para Você</SelectItem>
            <SelectItem value="blue">Para Empresas</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedFormat} onValueChange={setSelectedFormat}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Formato" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os formatos</SelectItem>
            <SelectItem value="Online">Online</SelectItem>
            <SelectItem value="Presencial">Presencial</SelectItem>
            <SelectItem value="Híbrido">Híbrido</SelectItem>
            <SelectItem value="Online ao vivo">Online ao vivo</SelectItem>
          </SelectContent>
        </Select>

        {(activeFilters.length > 0 || searchTerm) && (
          <Button variant="outline" size="sm" onClick={clearFilters}>
            <X className="h-4 w-4 mr-1" />
            Limpar
          </Button>
        )}
      </div>

      {/* Active filters */}
      {activeFilters.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {activeFilters
            .filter((filter): filter is { key: string; value: string; label: string } => filter !== false)
            .map((filter) => (
              <Badge key={filter.key} variant="secondary" className="px-3 py-1">
                {filter.label}
                <button
                  onClick={() => removeFilter(filter.key)}
                  className="ml-2 hover:bg-muted-foreground/20 rounded-full p-0.5"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
        </div>
      )}
    </div>
  )
}
