import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre - IA21 Educação',
  description: 'Conheça a IA21 Educação, nossa missão e o time de especialistas em desenvolvimento de software.',
}

export default function SobrePage() {
  return (
    <main className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Sobre a <span className="text-primary">IA21 Educação</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Somos especialistas em desenvolvimento de software, dedicados a transformar carreiras
            e organizações através da educação de ponta.
          </p>
        </div>

        <div className="space-y-16">
          {/* Missão */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Democratizar o acesso ao conhecimento em tecnologias emergentes, capacitando
              profissionais e empresas a liderarem a transformação digital do futuro.
            </p>
          </section>

          {/* Valores */}
          <section>
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Excelência</h3>
                <p className="text-muted-foreground">
                  Comprometimento com a qualidade e inovação em tudo que fazemos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Colaboração</h3>
                <p className="text-muted-foreground">
                  Construímos parcerias duradouras com nossos alunos e empresas.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Inovação</h3>
                <p className="text-muted-foreground">
                  Sempre na vanguarda das tecnologias e metodologias modernas.
                </p>
              </div>
            </div>
          </section>

          {/* Estatísticas */}
          <section className="bg-muted/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-12">Nossos Números</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Alunos Formados</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Cursos Disponíveis</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">Anos de Experiência</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
