import { Outlet } from '@tanstack/react-router'
import { ThemeToggle } from '@/components/theme-toggle'
import { AuthProvider, useAuth } from '@/context/AuthContext'
import { ThemeProvider } from '@/components/theme-provider'
import { AssistantRuntimeProvider } from '@assistant-ui/react'
import { useDataStreamRuntime } from '@assistant-ui/react-data-stream'
import { AssistantModal } from '@/components/assistant-ui/assistant-modal'

import { env } from '@/lib/env'

// function LayoutInner() {
//   const { token } = useAuth()
//   const runtime = useDataStreamRuntime({
//     api: env.VITE_API_BASE_URL + "/api/chat",
//     headers: async () => ({
//       ...(token ? { Authorization: `Bearer ${token}` } : {}),
//     }),
//   })

//   return (
//     <AssistantRuntimeProvider runtime={runtime}>
//       <div className="min-h-screen flex flex-col">
//         <header className="w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//           <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
//             <a
//               href="#top"
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               Home
//             </a>
//             <a
//               href="#experience"
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               Experience
//             </a>
//             <a
//               href="#skills"
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               Skills
//             </a>
//             <a
//               href="#projects"
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               Projects
//             </a>
//             <a
//               href="/projects/proptrack-avm"
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               PropTrack AVM
//             </a>
//             <a
//               href="/projects/corelogic-avm"
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               CoreLogic AVM
//             </a>
//             <a
//               href="/projects/corelogic-hedonic-index"
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               Hedonic Index
//             </a>
//             <a
//               href="#publications"
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               Publications
//             </a>
//             <a
//               href="#chat"
//               className="text-sm font-medium hover:text-primary transition-colors"
//             >
//               Chat
//             </a>
//             <ThemeToggle />
//           </nav>
//         </header>
//         <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
//           <AssistantSidebar title="Ask me anything">
//             <Outlet />
//           </AssistantSidebar>
//         </div>
//         {/* <footer className="mx-auto max-w-4xl w-full px-4 py-8 text-xs text-muted-foreground">
//         Code-based routing via TanStack Router
//       </footer> */}
//       </div>
//     </AssistantRuntimeProvider>
//   )
// }

export function Home() {
  const { token } = useAuth()
  const runtime = useDataStreamRuntime({
    api: env.VITE_API_BASE_URL + '/api/chat',
    headers: async () => ({
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }),
  })

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="min-h-screen flex flex-col">
        <header className="w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
            <a
              href="#top"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a
              href="/projects/proptrack-avm"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              PropTrack AVM
            </a>
            <a
              href="/projects/corelogic-avm"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              CoreLogic AVM
            </a>
            <a
              href="/projects/corelogic-hedonic-index"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Hedonic Index
            </a>
            <a
              href="#publications"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Publications
            </a>
            <ThemeToggle />
          </nav>
        </header>
        <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
          <Outlet />
        </div>
        {/* Floating Assistant Modal trigger */}
        <AssistantModal />
      </div>
    </AssistantRuntimeProvider>
  )
}

export default function RootLayout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <AuthProvider>
        <Home />
      </AuthProvider>
    </ThemeProvider>
  )
}
