import { useEffect, useState } from 'react'
import { doc, onSnapshot, type DocumentData } from 'firebase/firestore'
import { db } from '@/lib/firebase/client'

export type GraphSessionState = {
  loading: boolean
  error: Error | null
  data: DocumentData | null
  text: string | null
}

/**
 * Subscribe to a Firestore document at /graph_sessions/{sessionId} and expose
 * the latest single-line text along with the raw document data.
 *
 * Text extraction tries common field names: text | status | message | update.
 */
export function useGraphSession(sessionId: string | null | undefined): GraphSessionState {
  const [state, setState] = useState<GraphSessionState>({
    loading: !!sessionId,
    error: null,
    data: null,
    text: null,
  })

  useEffect(() => {
    if (!sessionId) return

    const ref = doc(db, 'graph_sessions', sessionId)
    const unsub = onSnapshot(
      ref,
      (snap) => {
        const data = snap.data() ?? null
        const text = extractText(data)
        setState({ loading: false, error: null, data, text })
      },
      (err) => {
        setState({ loading: false, error: err as Error, data: null, text: null })
      }
    )
    return () => unsub()
  }, [sessionId])

  return state
}

function extractText(data: DocumentData | null): string | null {
  if (!data) return null
  // Prefer a 'text' field; fallback to common alternates
  const candidate =
    (typeof data.text === 'string' && data.text) ||
    (typeof data.status === 'string' && data.status) ||
    (typeof data.message === 'string' && data.message) ||
    (typeof data.update === 'string' && data.update) ||
    null
  // Ensure it's a single line
  if (!candidate) return null
  const firstLine = String(candidate).split(/\r?\n/)[0] ?? ''
  return firstLine || null
}
