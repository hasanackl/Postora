import type { User } from '../types/user'

type MockUser = User & {
  password: string
  memberSince: number
}

export const users: MockUser[] = [
  { id: 1, fullName: 'Ahmet Yılmaz', email: 'user@postora.com', password: '123456', role: 'user', memberSince: 2024 },
  { id: 2, fullName: 'Elif Kaya', email: 'admin@postora.com', password: '123456', role: 'admin', memberSince: 2022 },
  { id: 3, fullName: 'Mehmet Demir', email: 'mehmet@postora.com', password: '123456', role: 'user', memberSince: 2023 },
]
