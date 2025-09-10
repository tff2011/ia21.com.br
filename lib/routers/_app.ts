import { router } from '../trpc'
import { programRouter } from './program'
import { enrollmentRouter } from './enrollment'
import { userRouter } from './user'

export const appRouter = router({
  program: programRouter,
  enrollment: enrollmentRouter,
  user: userRouter,
})

export type AppRouter = typeof appRouter
