import { initializeApp, getApps } from 'firebase/app'
import { getAuth, signInAnonymously, onIdTokenChanged, type User } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Config is provided via Vite env vars
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

if (!firebaseConfig.projectId) {
  // Provide a clearer error for missing config
  console.warn('Missing Firebase config env vars (VITE_FIREBASE_*)')
}

const app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

// Utility: ensure anonymous sign-in and token refresh callback
export async function ensureAnonymousAuth(onUser?: (user: User | null) => void) {
  try {
    if (!auth.currentUser) {
      await signInAnonymously(auth)
    }
  } catch (e) {
    console.error('Anonymous sign-in failed', e)
  }
  // keep token fresh and notify
  onIdTokenChanged(auth, (user: User | null) => {
    onUser?.(user)
  })
}
