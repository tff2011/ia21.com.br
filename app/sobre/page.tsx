import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sobre - IA21 Educação',
  description: 'Conheça a IA21 Educação, nossa missão e o time de especialistas em desenvolvimento de software.',
}

export default function SobrePage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="relative mb-16 overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="absolute inset-0">
            <Image
              src="/hero-sobre-nos.webp"
              alt="Profissionais inovando com IA e educação digital"
              fill
              className="object-cover opacity-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent" />
          </div>
          <div className="relative z-10 py-20 px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Somos a <span className="text-primary">evolução</span> da educação em Inteligência Artificial aplicada
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
              Transformamos conhecimento em ação e resultado, capacitando profissionais e empresas brasileiras
              para liderar a revolução da IA no século 21.
            </p>
          </div>
        </div>

        <div className="space-y-20">
          {/* Onde tudo começou */}
          <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Onde tudo começou</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p>
                A <strong>IA21 Educação</strong> nasceu de uma visão audaciosa de impactar o cenário brasileiro de inovação
                através da formação prática em IA. Nossos fundadores, com experiência comprovada em tecnologia e negócios,
                perceberam que o potencial brasileiro em IA poderia transformar não apenas empresas, mas toda a economia nacional.
              </p>
              <p>
                Após uma pesquisa profunda sobre as necessidades do mercado brasileiro, identificamos uma lacuna crítica:
                profissionais e empresas com apetite por inovação, mas sem caminhos claros para aplicar IA de forma prática e mensurável.
                Assim surge a IA21, com programas que combinam ciência de dados, IA generativa e estratégia para criar soluções que escalam.
              </p>
              <p>
                Unindo experiências de sucesso em empresas de tecnologia líderes, desenvolvemos uma metodologia focada na aplicação real
                de IA para crescimento exponencial. Com ela, qualquer profissional ou empresa pode dominar as competências práticas de IA
                e se posicionar como líder inovador no século 21.
              </p>
            </div>
          </section>

          {/* Nossos fundadores */}
          <section className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12">Nossos Fundadores</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-20 h-20 mx-auto mb-4">
                  <Image
                    src="/images/authors/foto-perfil.jpeg"
                    alt="Thiago Felizola Freires - Fundador da IA21 Educação"
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Thiago Felizola Freires</h3>
                <p className="text-muted-foreground text-sm">
                  Especialista em Inteligência Artificial com foco em aplicações práticas para negócios e educação. Fundador da IA21 Educação.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👩‍💼</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Nome do Fundador 2</h3>
                <p className="text-muted-foreground text-sm">
                  Pioneira em machine learning e transformação digital no mercado brasileiro.
                </p>
              </div>
            </div>
          </section>

          {/* Propósito */}
          <section className="bg-primary/5 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Nosso Propósito</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Capacitar profissionais e empresas brasileiras para liderar a revolução da IA, transformando conhecimento em resultados reais
              e impulsionando a inovação nacional. Fazemos isso através de formação prática, servindo como ponte entre a teoria da IA
              e sua aplicação real nos negócios brasileiros, preparando gestores e líderes para o futuro da economia digital.
            </p>
            <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Qual é a principal meta da IA21 Educação?</h3>
              <p className="text-lg text-primary font-semibold">
                Capacitar 100 mil profissionais brasileiros em IA aplicada até 2030, gerando impacto mensurável na transformação digital do país.
              </p>
            </div>
          </section>

          {/* Estatísticas */}
          <section className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Nossos Números</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">25.847</div>
                <div className="text-muted-foreground">Profissionais Capacitados</div>
                <div className="text-sm text-primary font-medium mt-1">#geraçãoIA21</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Programas Disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Taxa de Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">2025</div>
                <div className="text-muted-foreground">Ano de Fundação</div>
              </div>
            </div>
          </section>

          {/* Grandes nomes */}
          <section className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Grandes Nomes da Tecnologia Brasileira</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Contamos com mentores e especialistas reconhecidos no mercado de IA, trazendo experiência prática
              e cases reais de aplicação bem-sucedida.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Especialista {i}</h3>
                  <p className="text-muted-foreground text-sm">
                    Líder em IA aplicada em empresas de destaque no Brasil.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-primary text-white rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Pronto para fazer parte da revolução?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Domine as competências práticas de IA e posicione-se como referência no século 21.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Conheça Nossos Programas
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Fale Conosco
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
