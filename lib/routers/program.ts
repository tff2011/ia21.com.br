import { router, publicProcedure, staffProcedure } from '../trpc'
import { z } from 'zod'

export const programRouter = router({
  list: publicProcedure
    .input(
      z.object({
        filter: z.enum(['all', 'gold', 'blue', 'published', 'draft']).optional(),
        limit: z.number().optional(),
      }).optional()
    )
    .query(async ({ ctx, input }) => {
      const { prisma } = ctx
      const { filter = 'published', limit = 20 } = input || {}

      let where = {}

      switch (filter) {
        case 'gold':
          where = { theme: 'gold', published: true }
          break
        case 'blue':
          where = { theme: 'blue', published: true }
          break
        case 'published':
          where = { published: true }
          break
        case 'draft':
          where = { published: false }
          break
        default:
          // all - no filter
          break
      }

      return await prisma.program.findMany({
        where,
        take: limit,
        orderBy: { createdAt: 'desc' },
      })
    }),

  get: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const { prisma } = ctx

      const program = await prisma.program.findUnique({
        where: { slug: input.slug },
      })

      if (!program) {
        throw new Error('Program not found')
      }

      return program
    }),

  create: staffProcedure
    .input(
      z.object({
        slug: z.string(),
        title: z.string(),
        summary: z.string(),
        format: z.string(),
        level: z.string(),
        duration: z.string(),
        price: z.number().optional(),
        theme: z.enum(['gold', 'blue']),
        published: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx

      return await prisma.program.create({
        data: input,
      })
    }),

  update: staffProcedure
    .input(
      z.object({
        id: z.string(),
        slug: z.string().optional(),
        title: z.string().optional(),
        summary: z.string().optional(),
        format: z.string().optional(),
        level: z.string().optional(),
        duration: z.string().optional(),
        price: z.number().optional(),
        theme: z.enum(['gold', 'blue']).optional(),
        published: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx
      const { id, ...data } = input

      return await prisma.program.update({
        where: { id },
        data,
      })
    }),

  delete: staffProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx

      return await prisma.program.delete({
        where: { id: input.id },
      })
    }),
})
