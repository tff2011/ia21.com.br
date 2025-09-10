import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useAuth(redirectTo: string = '/login') {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(redirectTo)
    }
  }, [status, router, redirectTo])

  return {
    user: session?.user,
    session,
    isLoading: status === 'loading',
    isAuthenticated: !!session,
  }
}

export function useRequireAuth(redirectTo: string = '/login') {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`${redirectTo}?callbackUrl=${encodeURIComponent(window.location.pathname)}`)
    }
  }, [status, router, redirectTo])

  return {
    user: session?.user,
    session,
    isLoading: status === 'loading',
    isAuthenticated: !!session,
  }
}
