import type { StoredUser } from './user'
import type { Category } from './category'
import type { City } from './city'
import type { Listing } from './listing'
import type { Favorite } from './favorite'
import type { Order } from './order'
import type { AppNotification } from './notification'
import type { AuditLog } from './auditLog'

export type AppData = {
  users: StoredUser[]
  categories: Category[]
  cities: City[]
  listings: Listing[]
  favorites: Favorite[]
  orders: Order[]
  notifications: AppNotification[]
  auditLogs: AuditLog[]
}
