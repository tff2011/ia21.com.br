import { router, publicProcedure } from '../trpc'
import { z } from 'zod'

export const leadRouter = router({
  // Create a new lead (public - for material downloads)
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
        email: z.string().email('E-mail inválido'),
        phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
        profession: z.enum([
          'professional_liberal',
          'entrepreneur',
          'employee',
          'executive_manager',
          'consultant',
          'freelancer',
          'student',
          'other'
        ]),
        materialId: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx

      // Verify material exists and is published
      const material = await prisma.material.findUnique({
        where: { id: input.materialId },
      })

      if (!material || !material.published) {
        throw new Error('Material não encontrado ou não disponível')
      }

      // Create the lead
      const lead = await prisma.lead.create({
        data: input,
        include: {
          material: true,
        },
      })

      // Increment download count
      await prisma.material.update({
        where: { id: input.materialId },
        data: { downloadCount: { increment: 1 } },
      })

      return lead
    }),

  // List leads (staff only for analytics)
  list: publicProcedure
    .query(async ({ ctx }) => {
      const { prisma } = ctx

      return await prisma.lead.findMany({
        include: {
          material: true,
        },
        orderBy: { createdAt: 'desc' },
      })
    }),
})
