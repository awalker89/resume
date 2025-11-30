import type { PropsWithChildren } from 'react'
import { ThemeToggle } from '@/components/theme-toggle'
import { Link } from '@tanstack/react-router'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-[30] backdrop-blur border-b bg-background/75">
        <div className="mx-auto w-full max-w-[72rem] flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-6">
            <Link to="/" className="font-semibold tracking-tight">
              AI/ML Architect Resume
            </Link>
            <nav className="hidden md:flex items-center gap-4 text-sm">
              <Link
                to="/experience"
                className="text-muted-foreground hover:text-foreground"
              >
                Experience
              </Link>
              <Link to="/skills" className="text-muted-foreground hover:text-foreground">
                Skills
              </Link>
              <Link
                to="/projects"
                className="text-muted-foreground hover:text-foreground"
              >
                Projects
              </Link>
              <Link
                to="/publications"
                className="text-muted-foreground hover:text-foreground"
              >
                Publications
              </Link>
              <Link to="/chat" className="text-primary hover:text-primary/80">
                Chat
              </Link>
            </nav>
          </div>
          <ThemeToggle />
        </div>
      </header>
      <main className="flex-1" role="main">
        {children}
      </main>
      <footer className="border-t mt-8 py-6 text-sm text-muted-foreground">
        <div className="mx-auto max-w-[72rem] px-4 flex justify-between">
          <p>&copy; {new Date().getFullYear()} Principal AI/ML Engineer</p>
          <p className="opacity-70">Built with React • RAG • LangChain</p>
        </div>
      </footer>
    </div>
  )
}
