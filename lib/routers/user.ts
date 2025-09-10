import { router, protectedProcedure, staffProcedure } from '../trpc'
import { z } from 'zod'

export const userRouter = router({
  me: protectedProcedure
    .query(async ({ ctx }) => {
      const { prisma, session } = ctx

      return await prisma.user.findUnique({
        where: { id: session!.user!.id },
        include: {
          company: true,
        },
      })
    }),

  update: protectedProcedure
    .input(
      z.object({
        name: z.string().optional(),
        companyId: z.string().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx

      return await prisma.user.update({
        where: { id: session!.user!.id },
        data: input,
      })
    }),

  list: staffProcedure
    .query(async ({ ctx }) => {
      const { prisma } = ctx

      return await prisma.user.findMany({
        include: {
          company: true,
          enrollments: {
            include: {
              program: true,
            },
          },
        },
        orderBy: { createdAt: 'desc' },
      })
    }),

  updateRole: staffProcedure
    .input(
      z.object({
        id: z.string(),
        role: z.enum(['visitor', 'aluno', 'mentor', 'empresa_admin', 'staff']),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx
      const { id, ...data } = input

      return await prisma.user.update({
        where: { id },
        data,
      })
    }),
})
