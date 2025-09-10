'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Eye, Lock, Database, Users, Mail, Phone } from 'lucide-react'

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <Badge variant="secondary" className="px-3 py-1">
              <Shield className="w-4 h-4 mr-2" />
              Política de Privacidade
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Sua Privacidade é Nossa <span className="text-primary">Prioridade</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Na IA21 Educação, estamos comprometidos em proteger seus dados pessoais
              e garantir uma experiência segura e transparente.
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
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Introdução
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade descreve como a IA21 Educação (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo; ou &ldquo;IA21&rdquo;)
                coleta, usa, armazena e protege suas informações pessoais quando você utiliza nossos
                serviços educacionais, website e plataformas digitais.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Estamos em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
                e outras leis aplicáveis de proteção de dados.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Informações que Coletamos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Dados Fornecidos por Você</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Nome completo e informações de contato (email, telefone)</li>
                    <li>• Dados de acesso (login, senha criptografada)</li>
                    <li>• Informações acadêmicas e profissionais</li>
                    <li>• Preferências de aprendizado e configurações</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Dados Coletados Automaticamente</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Endereço IP e informações do dispositivo</li>
                    <li>• Dados de navegação e uso da plataforma</li>
                    <li>• Cookies e tecnologias similares</li>
                    <li>• Logs de acesso e atividade</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Como Utilizamos Seus Dados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Utilizamos suas informações pessoais para:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Fornecer nossos serviços educacionais</strong> e manter sua conta ativa</li>
                  <li>• <strong>Personalizar sua experiência</strong> de aprendizado</li>
                  <li>• <strong>Processar pagamentos</strong> e emitir certificados</li>
                  <li>• <strong>Enviar comunicações importantes</strong> sobre seus cursos</li>
                  <li>• <strong>Melhorar nossos serviços</strong> através de análises</li>
                  <li>• <strong>Garantir segurança</strong> da plataforma e prevenir fraudes</li>
                  <li>• <strong>Cumprir obrigações legais</strong> e regulatórias</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Compartilhamento de Dados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  <strong>Não vendemos</strong> seus dados pessoais para terceiros. Podemos compartilhar
                  suas informações apenas nas seguintes situações:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Com seu consentimento explícito</strong></li>
                  <li>• <strong>Com prestadores de serviços</strong> que nos ajudam a operar (processamento de pagamentos, hospedagem)</li>
                  <li>• <strong>Para cumprir obrigações legais</strong> ou ordens judiciais</li>
                  <li>• <strong>Para proteger direitos e segurança</strong> de usuários e terceiros</li>
                  <li>• <strong>Em caso de fusão ou aquisição</strong> da empresa</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Segurança dos Dados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Criptografia</strong> de dados em trânsito e repouso</li>
                  <li>• <strong>Controles de acesso</strong> restritivos</li>
                  <li>• <strong>Monitoramento contínuo</strong> de segurança</li>
                  <li>• <strong>Backup regular</strong> com redundância</li>
                  <li>• <strong>Auditorias de segurança</strong> periódicas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Seus Direitos (LGPD)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Você tem os seguintes direitos sobre seus dados pessoais:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Confirmação da existência</strong> de tratamento</li>
                    <li>• <strong>Acesso aos dados</strong> pessoais</li>
                    <li>• <strong>Correção de dados</strong> incompletos ou inexatos</li>
                    <li>• <strong>Anonimização, bloqueio ou eliminação</strong> de dados</li>
                  </ul>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Portabilidade</strong> dos dados</li>
                    <li>• <strong>Eliminação dos dados</strong> tratados com consentimento</li>
                    <li>• <strong>Informação sobre compartilhamento</strong> de dados</li>
                    <li>• <strong>Revogação do consentimento</strong></li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contato e Exercício de Direitos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Para exercer seus direitos ou esclarecer dúvidas sobre privacidade, entre em contato:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground">privacidade@ia21.com.br</div>
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
                <p className="text-sm text-muted-foreground">
                  <strong>Encarregado de Dados (DPO):</strong> Dr. Maria Silva<br/>
                  <strong>Registro LGPD:</strong> Em processo de obtenção
                </p>
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
                  Podemos atualizar esta Política de Privacidade periodicamente. Quando isso ocorrer,
                  notificaremos você por email ou através de aviso em nossa plataforma.
                </p>
                <p className="text-muted-foreground">
                  Recomendamos que você revise esta política regularmente para se manter informado
                  sobre como protegemos suas informações.
                </p>
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
