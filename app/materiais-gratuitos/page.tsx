"use client"
import Image from 'next/image'
import { useState } from "react"
import Link from "next/link"
import { api } from "@/lib/trpc-client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, Users, TrendingUp } from "lucide-react"

// Page-level metadata moved to route layout to support Client Component

export default function MateriaisGratuitosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const { data: materials, isLoading } = api.material.list.useQuery()

  const filteredMaterials = selectedCategory
    ? materials?.filter(material => material.category === selectedCategory)
    : materials

  const categories = Array.from(
    new Set(materials?.map(material => material.category).filter(Boolean))
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3 mx-auto mb-8"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="h-64 bg-gray-300 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-materiais-gratuitos.webp"
            alt="Modern digital workspace with floating geometric shapes representing downloadable content"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2 text-white border-white/20 bg-white/10 backdrop-blur-sm">
              📋 Materiais Gratuitos IA21
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Conteúdo <span className="text-primary">Exclusivo</span> Gratuito
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              E-books, guias práticos, templates e materiais exclusivos sobre inteligência artificial.
              Baixe gratuitamente e acelere sua transformação digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Downloads Ilimitados</div>
                  <div className="text-sm text-white/70">Acesso vitalício</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Conteúdo Premium</div>
                  <div className="text-sm text-white/70">Materiais exclusivos</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-semibold">Comunidade IA21</div>
                  <div className="text-sm text-white/70">+5k profissionais</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Materials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Materiais Disponíveis</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore nossa coleção completa de materiais gratuitos sobre inteligência artificial,
              machine learning e transformação digital.
            </p>
          </div>

          {/* Category Filters */}
          {categories.length > 0 && (
            <div className="mb-12">
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className="mb-2"
                >
                  Todos
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className="mb-2"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Materials Grid */}
          {filteredMaterials && filteredMaterials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMaterials.map((material) => (
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
          ) : (
            <div className="text-center py-16">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Nenhum material encontrado</h3>
              <p className="text-muted-foreground">
                {selectedCategory
                  ? `Não há materiais disponíveis na categoria "${selectedCategory}".`
                  : "Nenhum material gratuito disponível no momento."
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para acelerar sua carreira?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se à nossa comunidade de profissionais que estão transformando suas carreiras com IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programas">
              <Button size="lg" variant="secondary">
                Ver Programas
              </Button>
            </Link>
            <Link href="/contato">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Falar com Especialista
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
