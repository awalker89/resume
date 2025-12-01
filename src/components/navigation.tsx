'use client'

import { Link, useRouter } from '@tanstack/react-router'

export function Navigation() {
  const router = useRouter()
  const pathname = router.state.location.pathname
  const isHome = pathname === '/'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Name */}
          <Link
            to="/"
            className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            <div className="flex h-8 w-8 items-center justify-center border border-foreground bg-foreground">
              <span className="text-background font-mono text-xs">AW</span>
            </div>
            <span className="hidden sm:inline">ALEX WALKER</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {isHome ? (
              <>
                <a
                  href="#about"
                  className="font-mono text-xs uppercase tracking-wider hover:text-muted-foreground transition-colors"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="font-mono text-xs uppercase tracking-wider hover:text-muted-foreground transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="font-mono text-xs uppercase tracking-wider hover:text-muted-foreground transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  className="font-mono text-xs uppercase tracking-wider hover:text-muted-foreground transition-colors"
                >
                  Education
                </a>
              </>
            ) : (
              <Link
                to="/"
                className="font-mono text-xs uppercase tracking-wider hover:text-muted-foreground transition-colors"
              >
                 Back to Home
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
