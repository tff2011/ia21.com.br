import { initTRPC, TRPCError } from '@trpc/server'
import { getServerSession } from 'next-auth'
import { authOptions } from './auth'
import { prisma } from './prisma'
import superjson from 'superjson'

export const createTRPCContext = async () => {
  const session = await getServerSession(authOptions)

  return {
    prisma,
    session,
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause && typeof error.cause === 'object' && 'flatten' in error.cause && typeof error.cause.flatten === 'function'
            ? (error.cause as { flatten: () => unknown }).flatten()
            : null,
      },
    }
  },
})

export const router = t.router
export const publicProcedure = t.procedure

export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      ...ctx,
      session: { ...ctx.session, user: ctx.session.user },
    },
  })
})

export const staffProcedure = t.procedure.use(({ ctx, next }) => {
  if (!ctx.session?.user?.role || ctx.session.user.role !== 'staff') {
    throw new TRPCError({ code: 'FORBIDDEN' })
  }
  return next({
    ctx: {
      ...ctx,
      session: { ...ctx.session, user: ctx.session.user },
    },
  })
})
