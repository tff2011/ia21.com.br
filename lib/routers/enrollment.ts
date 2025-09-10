import { router, protectedProcedure, staffProcedure } from '../trpc'
import { z } from 'zod'

export const enrollmentRouter = router({
  create: protectedProcedure
    .input(z.object({ programId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { prisma, session } = ctx

      return await prisma.enrollment.create({
        data: {
          userId: session!.user!.id,
          programId: input.programId,
        },
      })
    }),

  list: protectedProcedure
    .query(async ({ ctx }) => {
      const { prisma, session } = ctx

      return await prisma.enrollment.findMany({
        where: { userId: session!.user!.id },
        include: {
          program: true,
        },
        orderBy: { createdAt: 'desc' },
      })
    }),

  updateStatus: staffProcedure
    .input(
      z.object({
        id: z.string(),
        status: z.enum(['pending', 'approved', 'rejected', 'cancelled']),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx
      const { id, ...data } = input

      return await prisma.enrollment.update({
        where: { id },
        data,
      })
    }),

  getAll: staffProcedure
    .query(async ({ ctx }) => {
      const { prisma } = ctx

      return await prisma.enrollment.findMany({
        include: {
          user: true,
          program: true,
        },
        orderBy: { createdAt: 'desc' },
      })
    }),
})
