import type { StoredUser, User } from '../types/user'
import { seedData } from '../data/seed'

const { users } = seedData

function toUser(item: StoredUser): User {
  return {
    id: item.id,
    fullName: item.fullName,
    email: item.email,
    phone: item.phone,
    cityId: item.cityId,
    role: item.role,
    isActive: item.isActive,
    createdDate: item.createdDate,
  }
}

export function loginUser(email: string, password: string): Promise<User | null> {
  const found = users.find((item) => item.email === email && item.password === password)
  return Promise.resolve(found ? toUser(found) : null)
}

export function registerUser(fullName: string, email: string, password: string): Promise<User | null> {
  const exists = users.some((item) => item.email === email)

  if (exists) {
    return Promise.resolve(null)
  }

  const newUser: StoredUser = {
    id: users.length + 1,
    fullName,
    email,
    phone: '',
    cityId: 0,
    role: 'user',
    isActive: true,
    createdDate: new Date().toISOString(),
    password,
  }

  users.push(newUser)
  return Promise.resolve(toUser(newUser))
}