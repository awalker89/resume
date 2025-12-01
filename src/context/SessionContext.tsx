import React from 'react'
import { SessionContext } from './session-context'

interface SessionProviderProps {
  sessionId: string
  children: React.ReactNode
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ sessionId, children }) => {
  return (
    <SessionContext.Provider value={{ sessionId }}>{children}</SessionContext.Provider>
  )
}

