import { useContext } from 'react'
import { SessionContext } from './session-context'

export function useSessionId(): string {
  const ctx = useContext(SessionContext)
  if (!ctx) throw new Error('useSessionId must be used within a SessionProvider')
  return ctx.sessionId
}
