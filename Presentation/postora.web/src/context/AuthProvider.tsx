import { useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext } from './AuthContext'
import { loginUser, registerUser } from '../api/auth'
import type { User } from '../types/user'
import { readStorage, writeStorage, removeStorage } from '../lib/storage'
import { STORAGE_KEYS } from '../constants/storageKeys'

type AuthProviderProps = {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => readStorage<User | null>(STORAGE_KEYS.user, null))

  function saveUser(newUser: User) {
    setUser(newUser)
    writeStorage(STORAGE_KEYS.user, newUser)
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
    removeStorage(STORAGE_KEYS.user)
  }

  return (
    <AuthContext value={{ user, login, register, logout }}>
      {children}
    </AuthContext>
  )
}

export default AuthProvider