import { useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext } from './AuthContext'
import { loginUser, registerUser } from '../api/auth'
import type { User } from '../types/user'

const STORAGE_KEY = 'user'

type AuthProviderProps = {
  children: ReactNode
}

function getSavedUser(): User | null {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? (JSON.parse(saved) as User) : null
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(getSavedUser)

  function saveUser(newUser: User) {
    setUser(newUser)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser))
  }

  async function login(email: string, password: string) {
    const loggedInUser = await loginUser(email, password)

    if (!loggedInUser) {
      return false
    }

    saveUser(loggedInUser)
    return true
  }

  async function register(fullName: string, email: string, password: string) {
    const registeredUser = await registerUser(fullName, email, password)

    if (!registeredUser) {
      return false
    }

    saveUser(registeredUser)
    return true
  }

  function logout() {
    setUser(null)
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <AuthContext value={{ user, login, register, logout }}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider