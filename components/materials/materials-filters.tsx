"use client"

import { Button } from "@/components/ui/button"

interface MaterialsFiltersProps {
  categories: string[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export function MaterialsFilters({
  categories,
  selectedCategory,
  onCategoryChange
}: MaterialsFiltersProps) {
  if (categories.length === 0) {
    return null
  }

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-2 justify-center">
        <Button
          variant={selectedCategory === null ? "default" : "outline"}
          onClick={() => onCategoryChange(null)}
          className="mb-2"
        >
          Todos
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => onCategoryChange(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  )
}
