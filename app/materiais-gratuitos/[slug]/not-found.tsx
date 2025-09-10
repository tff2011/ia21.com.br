"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileX, ArrowLeft } from "lucide-react"

export default function MaterialNotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileX className="w-8 h-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl">Material não encontrado</CardTitle>
            <CardDescription>
              O material que você está procurando não existe ou não está mais disponível.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Não se preocupe! Temos muitos outros materiais incríveis esperando por você.
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/materiais-gratuitos">
                <Button className="w-full">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Ver Materiais Disponíveis
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="w-full">
                  Voltar ao Início
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
