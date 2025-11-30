import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import RootLayout from '@/routes/RootLayout'
import IndexPage from '@/routes/IndexPage'
import ProptrackAvmPage from '@/routes/ProptrackAvmPage'
import CorelogicAvmPage from '@/routes/CorelogicAvmPage'
import CorelogicHedonicIndexPage from '@/routes/CorelogicHedonicIndexPage'

const rootRoute = createRootRoute({ component: RootLayout })
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
})
const proptrackAvmRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects/proptrack-avm',
  component: ProptrackAvmPage,
})

const corelogicAvmRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects/corelogic-avm',
  component: CorelogicAvmPage,
})

const corelogicHedonicIndexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects/corelogic-hedonic-index',
  component: CorelogicHedonicIndexPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  proptrackAvmRoute,
  corelogicAvmRoute,
  corelogicHedonicIndexRoute,
])

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  context: {},
  defaultErrorComponent: ({ error }) => (
    <div className="p-4 text-destructive">
      <h2 className="font-semibold">Error</h2>
      <pre className="text-xs whitespace-pre-wrap">{error.message}</pre>
    </div>
  ),
  defaultPendingComponent: () => (
    <div className="p-4 text-muted-foreground">Loading...</div>
  ),
})

// Attach devtools in development (lazy so it tree-shakes in prod)
// Devtools mounted in main.tsx in development.

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
