import { router, publicProcedure, staffProcedure } from '../trpc'
import { z } from 'zod'

export const materialRouter = router({
  // Get all published materials for the main page
  list: publicProcedure
    .query(async ({ ctx }) => {
      const { prisma } = ctx

      return await prisma.material.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' },
      })
    }),

  // Get material by slug
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const { prisma } = ctx

      return await prisma.material.findUnique({
        where: { slug: input.slug, published: true },
      })
    }),

  // Get material by ID (for internal use)
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const { prisma } = ctx

      return await prisma.material.findUnique({
        where: { id: input.id, published: true },
      })
    }),

  // Create new material (staff only)
  create: staffProcedure
    .input(
      z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string().optional(),
        excerpt: z.string().optional(),
        fileUrl: z.string(),
        fileName: z.string().optional(),
        fileSize: z.string().optional(),
        category: z.string().optional(),
        published: z.boolean().default(false),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx

      return await prisma.material.create({
        data: input,
      })
    }),

  // Update material (staff only)
  update: staffProcedure
    .input(
      z.object({
        id: z.string(),
        slug: z.string().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
        excerpt: z.string().optional(),
        fileUrl: z.string().optional(),
        fileName: z.string().optional(),
        fileSize: z.string().optional(),
        category: z.string().optional(),
        published: z.boolean().optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx
      const { id, ...data } = input

      return await prisma.material.update({
        where: { id },
        data,
      })
    }),

  // Delete material (staff only)
  delete: staffProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx

      return await prisma.material.delete({
        where: { id: input.id },
      })
    }),

  // Get analytics (download counts)
  getAnalytics: staffProcedure
    .query(async ({ ctx }) => {
      const { prisma } = ctx

      return await prisma.material.findMany({
        select: {
          id: true,
          title: true,
          downloadCount: true,
          _count: {
            select: { leads: true },
          },
        },
        orderBy: { downloadCount: 'desc' },
      })
    }),
})
