"use client"

import { api } from "@/lib/trpc-client"
import Image from "next/image"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DownloadForm } from "@/components/materials/download-form"
import { FileText, Download } from "lucide-react"
import { notFound } from "next/navigation"

export default function MaterialDownloadPage() {
  const params = useParams()
  const slug = params.slug as string

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)

  const { data: material, isLoading, error } = api.material.getBySlug.useQuery(
    { slug },
    {
      enabled: !!slug,
    }
  )

  const handleDownloadSuccess = (url: string) => {
    setDownloadUrl(url)
    // Auto-download after a short delay
    setTimeout(() => {
      window.open(url, '_blank')
    }, 2000)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-4"></div>
            <div className="h-12 bg-gray-300 rounded w-1/2 mb-8"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-300 rounded"></div>
              <div className="h-96 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !material) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Material Info */}
            <div>
              <div className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  {material.category || "Geral"}
                </Badge>
                <h1 className="text-4xl font-bold mb-4">{material.title}</h1>
                {material.excerpt && (
                  <p className="text-xl text-muted-foreground mb-6">
                    {material.excerpt}
                  </p>
                )}
              </div>

              {/* Material Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Download className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Downloads</p>
                    <p className="font-semibold">{material.downloadCount}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <FileText className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tipo</p>
                    <p className="font-semibold">PDF</p>
                  </div>
                </div>
              </div>

              {/* Material Description */}
              {material.description && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Sobre este material</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {material.description}
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>O que você vai aprender</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span>Conceitos fundamentais de IA aplicados ao seu negócio</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span>Casos práticos de implementação</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span>Estratégias para transformação digital</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span>ROI e métricas de sucesso</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Download Form */}
            <div className="lg:sticky lg:top-8">
              {!downloadUrl ? (
                <DownloadForm
                  materialId={material.id}
                  materialTitle={material.title}
                  onSuccess={handleDownloadSuccess}
                />
              ) : (
                <Card className="w-full max-w-md mx-auto">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Download className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Download Iniciado!</h3>
                      <p className="text-muted-foreground mb-4">
                        Seu arquivo está sendo baixado. Se o download não iniciar automaticamente,
                        <a href={downloadUrl} className="text-blue-600 hover:underline ml-1">
                          clique aqui
                        </a>.
                      </p>
                      <div className="space-y-2">
                        <Button
                          onClick={() => window.open(downloadUrl, '_blank')}
                          className="w-full"
                        >
                          Baixar Novamente
                        </Button>
                        <Link href="/materiais-gratuitos">
                          <Button variant="outline" className="w-full">
                            Ver Mais Materiais
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Materials CTA */}
      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/cta-explore-conteudos.webp"
            alt="Elementos de transformação digital: laptop, dados e gráficos de IA, livros digitais flutuando com ícones de tecnologia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Explore mais <span className="text-white/90">conteúdos gratuitos</span>
          </h2>

          {/* Elegant Divider */}
          <div className="w-20 h-0.5 bg-gradient-to-r from-white/60 via-white to-white/60 rounded-full mx-auto mt-4 mb-6"></div>

          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Temos diversos materiais preparados especialmente para
            <span className="font-bold text-white"> acelerar sua transformação digital</span>.
          </p>
          <Link href="/materiais-gratuitos">
            <Button size="lg" className="bg-white text-[#0F1C3F] hover:bg-white/90 font-semibold px-8 py-6 text-base">
              Ver Todos os Materiais
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
