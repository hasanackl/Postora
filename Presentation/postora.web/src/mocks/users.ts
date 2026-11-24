import type { User } from '../types/user'

type MockUser = User & {
  password: string
}

export const users: MockUser[] = [
  { id: 1, fullName: 'Ahmet Yılmaz', email: 'ahmet@postora.com', phone: '05321234567', cityId: 1, role: 'user', isActive: true, createdDate: '2024-03-12T10:00:00.000Z', password: '123456' },
  { id: 2, fullName: 'Elif Kaya', email: 'admin@postora.com', phone: '05331112233', cityId: 2, role: 'admin', isActive: true, createdDate: '2022-09-01T10:00:00.000Z', password: '123456' },
  { id: 3, fullName: 'Mehmet Demir', email: 'mehmet@postora.com', phone: '05447654321', cityId: 3, role: 'user', isActive: true, createdDate: '2023-06-20T10:00:00.000Z', password: '123456' },
  { id: 4, fullName: 'Zeynep Arslan', email: 'zeynep@postora.com', phone: '05059876543', cityId: 4, role: 'user', isActive: false, createdDate: '2025-01-15T10:00:00.000Z', password: '123456' },
]
