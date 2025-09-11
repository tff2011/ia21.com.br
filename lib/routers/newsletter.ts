import { z } from 'zod'
import { router, publicProcedure } from '../trpc'
import { TRPCError } from '@trpc/server'

export const newsletterRouter = router({
  subscribe: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
        email: z.string().email('Email inválido'),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx

      try {
        await prisma.newsletter.create({
          data: {
            name: input.name,
            email: input.email.toLowerCase(),
          },
        })

        return {
          success: true,
          message: 'Inscrição realizada com sucesso! Você receberá nossas novidades em breve.',
        }
      } catch (error) {
        if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
          throw new TRPCError({
            code: 'CONFLICT',
            message: 'Este email já está inscrito na nossa newsletter.',
          })
        }
        
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Erro interno do servidor. Tente novamente.',
        })
      }
    }),

  unsubscribe: publicProcedure
    .input(
      z.object({
        email: z.string().email('Email inválido'),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { prisma } = ctx

      try {
        await prisma.newsletter.delete({
          where: {
            email: input.email.toLowerCase(),
          },
        })

        return {
          success: true,
          message: 'Email removido da newsletter com sucesso.',
        }
      } catch (error) {
        if (error && typeof error === 'object' && 'code' in error && error.code === 'P2025') {
          throw new TRPCError({
            code: 'NOT_FOUND',
            message: 'Email não encontrado na nossa lista.',
          })
        }
        
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Erro interno do servidor. Tente novamente.',
        })
      }
    }),
})