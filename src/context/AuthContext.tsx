import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { onAuthStateChanged, onIdTokenChanged, type User } from 'firebase/auth'
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { auth, db, ensureAnonymousAuth } from '@/lib/firebase/client'

interface AuthContextType {
  user: User | null
  loading: boolean
  token: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  async function ensureUserProfile(user: User) {
    try {
      const ref = doc(db, 'users', user.uid)
      const snap = await getDoc(ref)
      if (!snap.exists()) {
        await setDoc(ref, {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName ?? null,
          photoURL: user.photoURL ?? null,
          createdAt: serverTimestamp(),
        })
      }
    } catch (e) {
      console.error('Failed to ensure user profile', e)
    }
  }

  useEffect(() => {
    // perform anonymous sign-in, then subscribe to auth changes
    ensureAnonymousAuth()

    const unsubAuth = onAuthStateChanged(auth, async (firebaseUser: User | null) => {
      setUser(firebaseUser)
      setLoading(false)
      if (firebaseUser) {
        await ensureUserProfile(firebaseUser)
        const t = await firebaseUser.getIdToken()
        setToken(t)
      } else {
        setToken(null)
      }
    })

    const unsubToken = onIdTokenChanged(auth, async (firebaseUser: User | null) => {
      if (firebaseUser) {
        const t = await firebaseUser.getIdToken()
        setToken(t)
      } else {
        setToken(null)
      }
    })

    return () => {
      unsubAuth()
      unsubToken()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, token }}>
      {children}
    </AuthContext.Provider>
  )
}
