'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Cookie, Settings, Shield, Eye, Database, BarChart3, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-3 py-1">
              <Cookie className="w-4 h-4 mr-2" />
              Política de Cookies
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Como Utilizamos <span className="text-primary">Cookies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Utilizamos cookies para melhorar sua experiência em nossa plataforma.
              Saiba exatamente como e por quê.
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

          {/* What are Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cookie className="w-5 h-5" />
                O que são Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você
                  visita um website. Eles nos ajudam a:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Lembrar suas preferências</strong> e configurações</li>
                  <li>• <strong>Melhorar a performance</strong> do site</li>
                  <li>• <strong>Analisar como o site é usado</strong></li>
                  <li>• <strong>Fornecer conteúdo personalizado</strong></li>
                  <li>• <strong>Garantir segurança</strong> da plataforma</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  Os cookies não contêm informações pessoais identificáveis, mas podem ser
                  associados aos seus dados quando você está logado em nossa plataforma.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Types */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Tipos de Cookies que Utilizamos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-green-700 mb-2">Cookies Essenciais</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Necessários para o funcionamento básico do site.
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Autenticação e segurança da conta</li>
                    <li>• Manutenção da sessão de usuário</li>
                    <li>• Lembrar suas preferências de privacidade</li>
                    <li>• Proteção contra fraudes</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong>Consentimento:</strong> Não requer consentimento prévio
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-blue-700 mb-2">Cookies de Performance</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Nos ajudam a entender como você interage com nossa plataforma.
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Páginas mais visitadas</li>
                    <li>• Tempo gasto em cada página</li>
                    <li>• Taxas de erro e problemas técnicos</li>
                    <li>• Velocidade de carregamento</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong>Consentimento:</strong> Opcional, mas recomendado
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-purple-700 mb-2">Cookies Funcionais</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Melhoram sua experiência personalizando o conteúdo.
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Lembrar suas configurações (idioma, tema)</li>
                    <li>• Salvar progresso em cursos</li>
                    <li>• Preferências de notificações</li>
                    <li>• Conteúdo personalizado</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong>Consentimento:</strong> Opcional
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-orange-700 mb-2">Cookies de Marketing</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Usados para mostrar anúncios relevantes e medir eficácia de campanhas.
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Anúncios personalizados</li>
                    <li>• Rastreamento de conversões</li>
                    <li>• Remarketing em outras plataformas</li>
                    <li>• Análise de campanhas publicitárias</li>
                  </ul>
                  <p className="text-xs text-muted-foreground mt-2">
                    <strong>Consentimento:</strong> Requerido para uso
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specific Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Cookies Específicos Utilizados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Nome do Cookie</th>
                      <th className="text-left py-2">Finalidade</th>
                      <th className="text-left py-2">Duração</th>
                      <th className="text-left py-2">Tipo</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b">
                      <td className="py-2 font-mono">ia21_session</td>
                      <td>Manter sessão do usuário</td>
                      <td>24 horas</td>
                      <td>Essencial</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono">ia21_auth</td>
                      <td>Autenticação do usuário</td>
                      <td>30 dias</td>
                      <td>Essencial</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono">ia21_theme</td>
                      <td>Preferência de tema visual</td>
                      <td>1 ano</td>
                      <td>Funcional</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono">_ga</td>
                      <td>Google Analytics - Análise de uso</td>
                      <td>2 anos</td>
                      <td>Performance</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-mono">_fbp</td>
                      <td>Facebook Pixel - Remarketing</td>
                      <td>3 meses</td>
                      <td>Marketing</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-mono">ia21_progress</td>
                      <td>Salvar progresso do curso</td>
                      <td>Sessão</td>
                      <td>Funcional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Third Party Cookies */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Cookies de Terceiros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Podemos utilizar cookies de terceiros para funcionalidades específicas:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Google Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      Para analisar o tráfego e comportamento dos usuários em nossa plataforma.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Política de privacidade: <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy</a>
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Facebook Pixel</h3>
                    <p className="text-sm text-muted-foreground">
                      Para remarketing e análise de conversões em campanhas publicitárias.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Política de privacidade: <a href="https://www.facebook.com/privacy/policy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Facebook Privacy</a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookie Management */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Gerenciamento de Cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-3">Como Controlar Cookies</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Navegador:</strong> A maioria dos navegadores permite bloquear ou excluir cookies</li>
                    <li>• <strong>Configurações do Site:</strong> Use nosso painel de preferências de cookies</li>
                    <li>• <strong>Dispositivos Móveis:</strong> Gerencie cookies nas configurações do sistema</li>
                    <li>• <strong>Ferramentas de Terceiros:</strong> Extensões como uBlock Origin ou Privacy Badger</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Banner de Cookies</h3>
                  <p className="text-muted-foreground">
                    Quando você visita nosso site pela primeira vez, mostramos um banner explicando
                    o uso de cookies e solicitando seu consentimento para cookies não essenciais.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Suas Opções</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">Aceitar Todos</Button>
                    <Button variant="outline" size="sm">Recusar Não Essenciais</Button>
                    <Button variant="outline" size="sm">Personalizar</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Proteção de Dados e Cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Nossa política de cookies está alinhada com nossa <a href="/privacidade" className="text-primary hover:underline">Política de Privacidade</a>
                  e a Lei Geral de Proteção de Dados (LGPD):
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Transparência:</strong> Explicamos claramente como usamos cookies</li>
                  <li>• <strong>Consentimento:</strong> Solicitamos permissão para cookies não essenciais</li>
                  <li>• <strong>Minimização:</strong> Coletamos apenas dados necessários</li>
                  <li>• <strong>Segurança:</strong> Protegemos dados de cookies adequadamente</li>
                  <li>• <strong>Seus Direitos:</strong> Você pode alterar preferências a qualquer momento</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Dúvidas sobre Cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Para dúvidas sobre nossa política de cookies ou exercer seus direitos:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">cookies@ia21.com.br</div>
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
              <CardTitle>Atualizações desta Política</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Podemos atualizar esta Política de Cookies para refletir mudanças em nossas
                  práticas ou legislação aplicável. Quando isso ocorrer:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Notificaremos você através do banner de cookies</li>
                  <li>• Atualizaremos a data da última modificação</li>
                  <li>• Manteremos versões anteriores disponíveis</li>
                  <li>• Solicitaremos novo consentimento se necessário</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-6">
                  Esta política foi atualizada pela última vez em {new Date().toLocaleDateString('pt-BR')}.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
