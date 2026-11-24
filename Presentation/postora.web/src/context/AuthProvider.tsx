import { useState } from 'react'
import type { ReactNode } from 'react'
import { AuthContext } from './AuthContext'
import type { StoredUser, User } from '../types/user'
import { readStorage, writeStorage, removeStorage } from '../lib/storage'
import { STORAGE_KEYS } from '../constants/storageKeys'
import { useAppData } from '../hooks/useAppData'
import { toPublicUser } from '../store/selectors'
import { nextId } from '../utils/nextId'

type AuthProviderProps = {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const { data, dispatch } = useAppData()
  const [user, setUser] = useState<User | null>(() => readStorage<User | null>(STORAGE_KEYS.user, null))

  function saveUser(newUser: User) {
    setUser(newUser)
    writeStorage(STORAGE_KEYS.user, newUser)
  }

  async function login(email: string, password: string) {
    const found = data.users.find((item) => item.email === email && item.password === password)

    if (!found) {
      return false
    }

    saveUser(toPublicUser(found))
    return true
  }

  async function register(fullName: string, email: string, password: string) {
    const exists = data.users.some((item) => item.email === email)

    if (exists) {
      return false
    }

    const newUser: StoredUser = {
      id: nextId(data.users),
      fullName,
      email,
      phone: '',
      cityId: 0,
      role: 'user',
      isActive: true,
      createdDate: new Date().toISOString(),
      password,
    }

    dispatch({ type: 'user/registered', user: newUser })
    saveUser(toPublicUser(newUser))
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