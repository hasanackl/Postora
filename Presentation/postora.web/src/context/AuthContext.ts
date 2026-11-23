import { createContext } from 'react'
import type { User } from '../types/user'

export type AuthContextValue = {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (fullName: string, email: string, password: string) => Promise<boolean>
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

