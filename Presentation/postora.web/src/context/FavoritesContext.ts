import { createContext } from 'react'

export type FavoritesContextValue = {
  favoriteIds: number[]
  isFavorite: (listingId: number) => boolean
  toggleFavorite: (listingId: number) => Promise<void>
}

export const FavoritesContext = createContext<FavoritesContextValue | null>(null)
