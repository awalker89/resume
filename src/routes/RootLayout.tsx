import { AuthProvider, useAuth } from '@/context/AuthContext'
import { AssistantRuntimeProvider } from '@assistant-ui/react'
import { useDataStreamRuntime } from '@assistant-ui/react-data-stream'
import { AssistantModal } from '@/components/assistant-ui/assistant-modal'
import { env } from '@/lib/env'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Outlet, useRouterState } from '@tanstack/react-router'
import { ArchitectureBackground } from '@/components/architecture-background'
import { SessionProvider } from '@/context/SessionContext'

// <CHANGE> Using Geist Mono for technical/architectural aesthetic
export default function RootLayout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AuthProvider>
        <BotLayout />
      </AuthProvider>
    </ThemeProvider>
  )
}

function BotLayout() {
  const { token } = useAuth()
  const { location } = useRouterState()
  const isHome = location.pathname === '/'
  const sessionId =
    typeof window !== 'undefined' ? (window.crypto?.randomUUID?.() ?? '') : ''
  const runtime = useDataStreamRuntime({
    api: env.VITE_API_BASE_URL + '/chat',
    headers: async () => ({
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      'x-session-id': sessionId,
    }),
    body: (body: Record<string, unknown>) => ({ ...body, session_id: sessionId }),
  })
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <SessionProvider sessionId={sessionId}>
  <div className="relative min-h-screen bg-background font-mono antialiased">
        {isHome && (
          <div
            className="absolute top-0 left-0 w-full pointer-events-none"
            style={{ height: 'calc(8rem + 5rem + 2rem + 20rem)', zIndex: 0 }}
            aria-hidden
          >
            <ArchitectureBackground />
          </div>
        )}
        <Navigation />
        {/* Background removed; now handled in HomePage */}

        <main className="mx-auto max-w-7xl px-6 py-12">
          <Outlet />
        </main>
        <AssistantModal />
        </div>
      </SessionProvider>
    </AssistantRuntimeProvider>
  )
}
