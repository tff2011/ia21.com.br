"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { IMaskInput } from "react-imask"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, CheckCircle, AlertCircle } from "lucide-react"
import { api } from "@/lib/trpc-client"

const downloadFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  profession: z.enum([
    "professional_liberal",
    "entrepreneur",
    "employee",
    "executive_manager",
    "consultant",
    "freelancer",
    "student",
    "other"
  ]).refine((val) => val, { message: "Selecione sua profissão" }),
})

type DownloadFormData = z.infer<typeof downloadFormSchema>

interface DownloadFormProps {
  materialId: string
  materialTitle: string
  onSuccess: (downloadUrl: string) => void
}

const professionLabels = {
  professional_liberal: "Profissional Liberal/Autônomo",
  entrepreneur: "Empresário",
  employee: "Empregado CLT",
  executive_manager: "Executivo/Gestor",
  consultant: "Consultor",
  freelancer: "Freelancer",
  student: "Estudante",
  other: "Outro",
}

export function DownloadForm({ materialId, materialTitle, onSuccess }: DownloadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const form = useForm<DownloadFormData>({
    resolver: zodResolver(downloadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      profession: undefined,
    },
  })

  const createLeadMutation = api.lead.create.useMutation()

  const onSubmit = async (data: DownloadFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Clean phone number (remove non-digits)
      const cleanPhone = data.phone.replace(/\D/g, "")

      await createLeadMutation.mutateAsync({
        ...data,
        phone: cleanPhone,
        materialId,
      })

      setSubmitStatus('success')

      // Simulate getting the download URL (in real implementation, this would come from the material)
      // For now, we'll use a placeholder
      const downloadUrl = `/api/download/${materialId}`

      onSuccess(downloadUrl)
    } catch (error) {
      console.error('Error creating lead:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Obrigado!</h3>
            <p className="text-muted-foreground mb-4">
              Seu download será iniciado automaticamente em instantes.
            </p>
            <p className="text-sm text-muted-foreground">
              Verifique sua caixa de entrada - enviamos uma confirmação também por e-mail.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Baixar Material Gratuito</CardTitle>
        <CardDescription className="text-center">
          Preencha os dados abaixo para baixar &quot;{materialTitle}&quot;
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Seu nome completo"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone *</FormLabel>
                  <FormControl>
                    <IMaskInput
                      mask="(00) 00000-0000"
                      value={field.value}
                      onAccept={(value) => field.onChange(value)}
                      disabled={isSubmitting}
                      placeholder="(11) 99999-9999"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="profession"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Profissão *</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isSubmitting}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione sua profissão" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {Object.entries(professionLabels).map(([value, label]) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {submitStatus === 'error' && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <p className="text-sm text-red-600">
                  Ocorreu um erro. Tente novamente.
                </p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Processando...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Gratuitamente
                </>
              )}
            </Button>
          </form>
        </Form>

        <div className="mt-4 text-xs text-muted-foreground text-center">
          <p>
            Ao baixar, você concorda em receber comunicações da IA21 Educação sobre
            nossos programas e conteúdos relacionados à inteligência artificial.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
