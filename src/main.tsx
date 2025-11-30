import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    {import.meta.env.DEV && (
      <TanStackRouterDevtools router={router} position="bottom-right" />
    )}
  </StrictMode>
)
