export type UserRole = 'user' | 'admin'

export type User = {
  id: number
  fullName: string
  email: string
  phone: string
  cityId: number
  role: UserRole
  isActive: boolean
  createdDate: string
}
