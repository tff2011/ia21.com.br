'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContatoPage() {
  // Garantir que a página sempre abra no topo
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-contato-clean.webp"
            alt="Equipe profissional colaborando em ambiente de tecnologia moderna"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="secondary" className="px-4 py-2 text-white border-white/20 bg-white/10 backdrop-blur-sm">
              📞 Fale Conosco
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para ajudar você a dominar a inteligência artificial e transformar sua carreira.
              Tire suas dúvidas e receba orientação especializada em IA aplicada.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form - Prioridade */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato em breve
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Mensagem Enviada!</h3>
                    <p className="text-muted-foreground">
                      Obrigado pelo contato. Responderemos em até 24 horas.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nome">Nome Completo *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          type="text"
                          required
                          value={formData.nome}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefone">Telefone</Label>
                        <Input
                          id="telefone"
                          name="telefone"
                          type="tel"
                          value={formData.telefone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="assunto">Assunto *</Label>
                        <Input
                          id="assunto"
                          name="assunto"
                          type="text"
                          required
                          value={formData.assunto}
                          onChange={handleInputChange}
                          placeholder="Como podemos ajudar?"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        value={formData.mensagem}
                        onChange={handleInputChange}
                        placeholder="Conte-nos mais sobre sua dúvida ou necessidade..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Cards - Após o formulário */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Outras formas de contato</h2>
              <p className="text-muted-foreground">
                Além do formulário, você também pode nos contatar diretamente
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-sm text-muted-foreground">contato@ia21.com.br</p>
                  <p className="text-xs text-muted-foreground mt-1">Resposta em até 24h</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Telefone</h3>
                  <p className="text-sm text-muted-foreground">(11) 9999-9999</p>
                  <p className="text-xs text-muted-foreground mt-1">Seg-Sex, 9h às 18h</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Localização</h3>
                  <p className="text-sm text-muted-foreground">Brasília, DF - Brasil</p>
                  <p className="text-xs text-muted-foreground mt-1">Atendimento remoto</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Horário</h3>
                  <p className="text-sm text-muted-foreground">Seg-Sex: 9h-18h</p>
                  <p className="text-xs text-muted-foreground mt-1">Sáb: 9h-12h</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Como funciona a matrícula?</h3>
                <p className="text-sm text-muted-foreground">
                  Após o contato, enviamos todas as informações sobre o programa escolhido e guiamos você durante todo o processo de matrícula.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Oferecem bolsas de estudo?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim, oferecemos diferentes opções de financiamento e bolsas de estudo. Entre em contato para conhecer as possibilidades.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Como funciona o suporte?</h3>
                <p className="text-sm text-muted-foreground">
                  Oferecemos suporte completo durante toda a jornada de aprendizado, incluindo mentoria técnica e orientação profissional.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Posso cancelar a matrícula?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim, oferecemos garantia de satisfação. Se não estiver satisfeito, pode cancelar dentro do prazo estabelecido.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
