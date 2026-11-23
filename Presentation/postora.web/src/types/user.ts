export type UserRole = 'user' | 'admin'

export type User = {
  id: number
  fullName: string
  email: string
  role: UserRole
}
