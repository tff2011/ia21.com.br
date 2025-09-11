import { router } from '../trpc'
import { programRouter } from './program'
import { enrollmentRouter } from './enrollment'
import { userRouter } from './user'
import { leadRouter } from './lead'
import { materialRouter } from './material'
import { newsletterRouter } from './newsletter'

export const appRouter = router({
  program: programRouter,
  enrollment: enrollmentRouter,
  user: userRouter,
  lead: leadRouter,
  material: materialRouter,
  newsletter: newsletterRouter,
})

export type AppRouter = typeof appRouter
