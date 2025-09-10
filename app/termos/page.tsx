'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FileText, Users, CreditCard, Shield, AlertTriangle, Mail, Phone } from 'lucide-react'

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-3 py-1">
              <FileText className="w-4 h-4 mr-2" />
              Termos de Uso
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Termos e Condições de <span className="text-primary">Uso</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ao utilizar nossos serviços, você concorda com estes termos.
              Leia atentamente para entender seus direitos e responsabilidades.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose-custom">
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">
              <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>1. Aceitação dos Termos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e utilizar os serviços da IA21 Educação (&ldquo;IA21&rdquo;, &ldquo;nós&rdquo; ou &ldquo;nosso&rdquo;),
                incluindo nosso website, plataforma de aprendizado e quaisquer aplicações móveis,
                você concorda em cumprir e estar vinculado a estes Termos de Uso.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Se você não concordar com estes termos, por favor, não utilize nossos serviços.
              </p>
            </CardContent>
          </Card>

          {/* Services Description */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>2. Descrição dos Serviços</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  A IA21 oferece os seguintes serviços:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Cursos e Programas Educacionais</strong> em tecnologia e desenvolvimento</li>
                  <li>• <strong>Plataforma de Aprendizado Online</strong> com conteúdo interativo</li>
                  <li>• <strong>Mentoria e Suporte Técnico</strong> personalizado</li>
                  <li>• <strong>Certificação Profissional</strong> reconhecida pelo mercado</li>
                  <li>• <strong>Comunidade de Aprendizado</strong> e networking</li>
                  <li>• <strong>Recursos Educacionais</strong> complementares</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Accounts */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                3. Contas de Usuário
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Criação de Conta</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Você deve ter pelo menos 18 anos para criar uma conta</li>
                    <li>• Menores de 18 anos precisam de autorização dos responsáveis</li>
                    <li>• Você deve fornecer informações verdadeiras e atualizadas</li>
                    <li>• Você é responsável por manter a confidencialidade da senha</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Responsabilidades do Usuário</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Utilizar apenas para fins educacionais legítimos</li>
                    <li>• Não compartilhar credenciais de acesso</li>
                    <li>• Notificar imediatamente qualquer uso não autorizado</li>
                    <li>• Manter informações de contato atualizadas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                4. Pagamentos e Reembolsos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Política de Pagamento</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Preços estão sujeitos a alterações com aviso prévio</li>
                    <li>• Pagamentos são processados por terceiros certificados</li>
                    <li>• Aceitamos diversos métodos de pagamento</li>
                    <li>• Você recebe confirmação imediata do pagamento</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Política de Reembolso</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Reembolso total dentro de 7 dias após a compra</li>
                    <li>• Reembolso parcial após 7 dias, dependendo do progresso</li>
                    <li>• Sem reembolso após conclusão de 50% do curso</li>
                    <li>• Solicitações de reembolso devem ser feitas por escrito</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                5. Propriedade Intelectual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Conteúdo da IA21</h3>
                  <p className="text-muted-foreground">
                    Todo o conteúdo disponível em nossa plataforma, incluindo cursos, materiais,
                    vídeos, textos, imagens, logotipos e software, é de propriedade exclusiva da
                    IA21 Educação ou de seus licenciadores.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Licença de Uso</h3>
                  <p className="text-muted-foreground">
                    Concedemos a você uma licença limitada, não exclusiva e não transferível
                    para acessar e utilizar nosso conteúdo exclusivamente para fins educacionais
                    pessoais. Esta licença não inclui o direito de:
                  </p>
                  <ul className="space-y-2 text-muted-foreground mt-2">
                    <li>• Copiar, distribuir ou reproduzir o conteúdo</li>
                    <li>• Modificar ou criar obras derivadas</li>
                    <li>• Utilizar para fins comerciais</li>
                    <li>• Compartilhar credenciais de acesso</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* User Conduct */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>6. Conduta do Usuário</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Ao utilizar nossos serviços, você concorda em:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-3 text-green-700">✅ Permitido</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Aprender e aplicar conhecimentos</li>
                      <li>• Participar da comunidade educacional</li>
                      <li>• Compartilhar experiências de aprendizado</li>
                      <li>• Fornecer feedback construtivo</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-red-700">❌ Proibido</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Violar direitos de propriedade intelectual</li>
                      <li>• Compartilhar conteúdo inadequado</li>
                      <li>• Praticar fraudes ou atividades ilícitas</li>
                      <li>• Interferir no funcionamento da plataforma</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                7. Suspensão e Encerramento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Reservamo-nos o direito de suspender ou encerrar sua conta a qualquer momento,
                  sem aviso prévio, se você:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Violar estes termos de uso</li>
                  <li>• Fornecer informações falsas ou enganosas</li>
                  <li>• Comprometer a segurança da plataforma</li>
                  <li>• Utilizar a plataforma para fins não autorizados</li>
                  <li>• Deixar de pagar taxas devidas</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Em caso de encerramento, você perderá acesso a todos os conteúdos e dados
                  associados à sua conta.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>8. Isenções de Responsabilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>Isenção Educacional:</strong> Embora nos esforcemos para fornecer conteúdo
                  de alta qualidade, não garantimos que o aprendizado resultará em emprego ou
                  sucesso profissional específico.
                </p>
                <p className="text-muted-foreground">
                  <strong>Disponibilidade:</strong> Podemos interromper temporariamente os serviços
                  para manutenção, atualizações ou por motivos fora de nosso controle.
                </p>
                <p className="text-muted-foreground">
                  <strong>Conteúdo de Terceiros:</strong> Não nos responsabilizamos pelo conteúdo
                  ou ações de outros usuários ou instrutores.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>9. Lei Aplicável e Jurisdição</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Estes termos são regidos pelas leis da República Federativa do Brasil.
                  Qualquer disputa será resolvida nos tribunais competentes de São Paulo, SP.
                </p>
                <p className="text-muted-foreground">
                  Tentaremos resolver qualquer disputa de forma amigável antes de recorrer
                  aos tribunais.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                10. Contato
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Para dúvidas sobre estes termos ou relatar violações:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">legal@ia21.com.br</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Telefone</div>
                      <div className="text-sm text-muted-foreground">+55 (11) 9999-9999</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Updates */}
          <Card>
            <CardHeader>
              <CardTitle>11. Atualizações dos Termos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Podemos atualizar estes termos periodicamente para refletir mudanças em
                  nossos serviços ou legislação aplicável. Quando isso ocorrer:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Notificaremos você por email ou na plataforma</li>
                  <li>• A versão atualizada entrará em vigor após 30 dias</li>
                  <li>• Continuar usando nossos serviços implica aceitação dos novos termos</li>
                  <li>• Manteremos um histórico das versões anteriores</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-6">
                  Estes termos foram atualizados pela última vez em {new Date().toLocaleDateString('pt-BR')}.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
