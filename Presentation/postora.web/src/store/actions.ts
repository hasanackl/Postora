import type { StoredUser } from '../types/user'

export type AppAction =
  | { type: 'user/registered'; user: StoredUser }
  | { type: 'favorite/added'; userId: number; listingId: number }
  | { type: 'favorite/removed'; userId: number; listingId: number }
