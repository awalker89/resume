import { EnvSchema, type Env } from '@/lib/env.schema'

let cached: Env | null = null

export function getEnv(): Env {
  if (cached) return cached
  const parsed = EnvSchema.safeParse(
    import.meta.env as unknown as Record<string, unknown>
  )
  if (!parsed.success) {
    console.error('❌ Invalid environment variables', parsed.error.flatten().fieldErrors)
    throw new Error('Missing or invalid VITE_* environment variables.')
  }
  cached = parsed.data
  return cached
}

export const env = getEnv()
