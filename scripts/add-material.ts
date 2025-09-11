import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function addMaterial() {
  try {
    const material = await prisma.material.create({
      data: {
        slug: 'guia-iniciante-profissionais-liberais',
        title: 'Por onde começar com IA? Guia do iniciante para Profissionais Liberais',
        description: 'Um guia completo e prático para profissionais liberais que querem começar a usar Inteligência Artificial em seus negócios. Aprenda conceitos básicos, ferramentas essenciais e casos de uso específicos para sua área.',
        excerpt: 'Descubra como a IA pode transformar seu negócio como profissional liberal, desde automatização de tarefas até atendimento ao cliente.',
        fileUrl: '/downloads/guia-iniciante-profissionais-liberais.pdf', // Você precisa fazer upload do arquivo
        fileName: 'guia-iniciante-profissionais-liberais.pdf',
        fileSize: '2.5 MB',
        category: 'Guias para Iniciantes',
        published: true,
        downloadCount: 0
      }
    })

    console.log('Material criado com sucesso:', material)

    // Adicionar outros materiais futuros
    const materials = [
      {
        slug: 'guia-iniciante-empreendedores',
        title: 'Por onde começar com IA? Guia do iniciante para Empreendedores',
        description: 'Manual estratégico para empreendedores implementarem IA em seus negócios de forma escalável e lucrativa.',
        excerpt: 'Transforme sua empresa com IA: automatize processos, melhore decisões e acelere o crescimento.',
        fileUrl: '/downloads/guia-iniciante-empreendedores.pdf',
        fileName: 'guia-iniciante-empreendedores.pdf',
        fileSize: '3.1 MB',
        category: 'Guias para Iniciantes',
        published: false // Ainda não publicado
      },
      {
        slug: 'guia-iniciante-executivos',
        title: 'Por onde começar com IA? Guia do iniciante para Executivos',
        description: 'Estratégias de liderança e implementação de IA para executivos e gestores de grandes organizações.',
        excerpt: 'Lidere a transformação digital da sua organização com estratégias comprovadas de IA.',
        fileUrl: '/downloads/guia-iniciante-executivos.pdf',
        fileName: 'guia-iniciante-executivos.pdf',
        fileSize: '2.8 MB',
        category: 'Guias para Iniciantes',
        published: false
      },
      {
        slug: 'guia-iniciante-profissionais-clt',
        title: 'Por onde começar com IA? Guia do iniciante para Profissionais CLT',
        description: 'Como profissionais CLT podem usar IA para se destacar na carreira e aumentar sua produtividade no trabalho.',
        excerpt: 'Destaque-se no mercado usando IA para otimizar seu trabalho e acelerar sua carreira.',
        fileUrl: '/downloads/guia-iniciante-profissionais-clt.pdf',
        fileName: 'guia-iniciante-profissionais-clt.pdf',
        fileSize: '2.3 MB',
        category: 'Guias para Iniciantes',
        published: false
      }
    ]

    console.log('Preparando outros materiais para o futuro...')
    for (const materialData of materials) {
      console.log(`- ${materialData.title}`)
    }

  } catch (error) {
    console.error('Erro ao criar material:', error)
  } finally {
    await prisma.$disconnect()
  }
}

addMaterial()