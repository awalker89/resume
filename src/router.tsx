import { createRouter, createRootRoute, createRoute } from '@tanstack/react-router'
import RootLayout from '@/routes/RootLayout'
import IndexPage from '@/routes/IndexPage'
import ResumeChatBotPage from '@/components/projects/ResumeChatBotPage'
import RealEstimatePage from '@/components/projects/RealEstimatePage'

const rootRoute = createRootRoute({ component: RootLayout })
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: IndexPage,
})

const resumeChatBotRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects/resume-chat-bot',
  component: ResumeChatBotPage,
})


const realEstimateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects/real-estimate',
  component: RealEstimatePage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  realEstimateRoute,
  resumeChatBotRoute
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
