'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search, X, Filter } from 'lucide-react'
import { useState } from 'react'

export function BlogFilters() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedTag, setSelectedTag] = useState<string>('all')

  const categories = [
    { value: 'all', label: 'Todas as categorias' },
    { value: 'desenvolvimento-web', label: 'Desenvolvimento Web' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'carreira', label: 'Carreira' },
    { value: 'tecnologias', label: 'Tecnologias' },
  ]

  const tags = [
    { value: 'all', label: 'Todas as tags' },
    { value: 'tutorial', label: 'Tutorial' },
    { value: 'tendencias', label: 'Tendências' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'carreira', label: 'Carreira' },
  ]

  const activeFilters = [
    selectedCategory !== 'all' && { key: 'category', value: selectedCategory, label: `Categoria: ${categories.find(c => c.value === selectedCategory)?.label}` },
    selectedTag !== 'all' && { key: 'tag', value: selectedTag, label: `Tag: ${tags.find(t => t.value === selectedTag)?.label}` },
  ].filter(Boolean)

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedTag('all')
    setSearchTerm('')
  }

  const removeFilter = (key: string) => {
    switch (key) {
      case 'category':
        setSelectedCategory('all')
        break
      case 'tag':
        setSelectedTag('all')
        break
    }
  }

  return (
    <div className="mb-8 space-y-4">
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar artigos..."
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

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>

        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="px-3 py-2 border border-input rounded-md bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {tags.map((tag) => (
            <option key={tag.value} value={tag.value}>
              {tag.label}
            </option>
          ))}
        </select>

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
