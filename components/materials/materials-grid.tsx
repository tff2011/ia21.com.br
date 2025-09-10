"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, TrendingUp } from "lucide-react"

interface Material {
  id: string
  slug: string
  title: string
  description?: string | null
  excerpt?: string | null
  fileSize?: string | null
  category?: string | null
  downloadCount: number
}

interface MaterialsGridProps {
  materials: Material[]
  isLoading?: boolean
}

export function MaterialsGrid({ materials, isLoading }: MaterialsGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse">
            <Card className="h-full">
              <CardHeader>
                <div className="h-6 bg-gray-300 rounded w-20 mb-2"></div>
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              </CardHeader>
              <CardContent>
                <div className="h-16 bg-gray-300 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </CardContent>
              <CardFooter>
                <div className="h-10 bg-gray-300 rounded w-full"></div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    )
  }

  if (!materials || materials.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">📚</div>
        <h3 className="text-2xl font-semibold mb-2">Nenhum material encontrado</h3>
        <p className="text-muted-foreground">
          Novos materiais serão adicionados em breve. Fique ligado!
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {materials.map((material) => (
        <Card key={material.id} className="h-full flex flex-col hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <Badge variant="secondary" className="mb-2">
                {material.category || "Geral"}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <TrendingUp className="w-4 h-4 mr-1" />
                {material.downloadCount}
              </div>
            </div>
            <CardTitle className="text-xl mb-2">{material.title}</CardTitle>
            {material.excerpt && (
              <CardDescription className="text-base">
                {material.excerpt}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent className="flex-grow">
            {material.description && (
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {material.description}
              </p>
            )}
            {material.fileSize && (
              <div className="text-sm text-muted-foreground mb-2">
                Tamanho: {material.fileSize}
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Link href={`/materiais-gratuitos/${material.slug}`} className="w-full">
              <Button className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Baixar Gratuitamente
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
