import type { User } from '../types/user'
import { users } from '../mocks/users'

export function loginUser(email: string, password: string): Promise<User | null> {
  const found = users.find((item) => item.email === email && item.password === password)

  if (!found) {
    return Promise.resolve(null)
  }

  return Promise.resolve({
    id: found.id,
    fullName: found.fullName,
    email: found.email,
    role: found.role,
  })
}

export function registerUser(fullName: string, email: string, password: string): Promise<User | null> {
  const exists = users.some((item) => item.email === email)

  if (exists) {
    return Promise.resolve(null)
  }

  const newUser = {
    id: users.length + 1,
    fullName,
    email,
    password,
    role: 'user' as const,
    memberSince: new Date().getFullYear(),
  }

  users.push(newUser)

  return Promise.resolve({
    id: newUser.id,
    fullName: newUser.fullName,
    email: newUser.email,
    role: newUser.role,
  })
}