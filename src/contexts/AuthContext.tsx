import { Session, User } from '@supabase/supabase-js'
import { useEffect, createContext, useState } from 'react'
import supabase from '@/config/supabase'

export const AuthContext = createContext<{
  session: Session | null,
  user: User | null,
  signOut: () => void,
}>({
  session: null,
  user: null,
  signOut: () => {},
})

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    const setData = async () => {
      const { data : { session }, error } = await supabase.auth.getSession()
      if (error) throw error
      if (session) {
        setSession(session)
        setUser(session.user)
      }
    }

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })

    setData()
      .catch(err => console.error(err))

    return () => {
      listener?.subscription?.unsubscribe()
    }
  }, [])

  const value = {
    session,
    user,
    signOut: () => supabase.auth.signOut(),
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}