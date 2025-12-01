import { createContext } from 'react'

export type SessionContextType = {
  sessionId: string
}

export const SessionContext = createContext<SessionContextType | undefined>(undefined)
