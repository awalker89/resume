import { z } from 'zod'

// Single source of truth for VITE_* env variables used at build and runtime
export const EnvSchema = z.object({
  VITE_FIREBASE_API_KEY: z.string().min(5),
  VITE_FIREBASE_AUTH_DOMAIN: z.string().min(5),
  VITE_FIREBASE_PROJECT_ID: z.string().min(5),
  VITE_FIREBASE_STORAGE_BUCKET: z.string().min(5),
  VITE_FIREBASE_APP_ID: z.string().min(5),
  VITE_API_BASE_URL: z.string().url(),
})

export type Env = z.infer<typeof EnvSchema>
