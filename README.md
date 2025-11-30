# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## Routing (TanStack React Router)

Code-based routing is implemented in `src/router.tsx` with page components under `src/routes/`:

| File                        | Purpose                                          |
| --------------------------- | ------------------------------------------------ |
| `src/routes/RootLayout.tsx` | Shared layout, navigation, theme toggle, footer  |
| `src/routes/IndexPage.tsx`  | Home page with counter (migrated from `App.tsx`) |
| `src/routes/AboutPage.tsx`  | Example secondary route                          |

The router is mounted in `src/main.tsx` via `<RouterProvider router={router} />`. Devtools appear in development (bottom-right).

### Adding a new route

```tsx
// src/routes/ContactPage.tsx
export default function ContactPage() {
  return <div className="space-y-2">Contact page</div>
}

// Amend src/router.tsx
import ContactPage from '@/routes/ContactPage'
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: 'contact',
  component: ContactPage,
})
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, contactRoute])
```

Then link to it:

```tsx
<Link to="/contact" className="text-primary underline-offset-4 hover:underline">
  Contact
</Link>
```

### Error & pending boundaries

`router.tsx` provides default error and loading components. Customize by passing `defaultErrorComponent` and `defaultPendingComponent` when creating the router.
