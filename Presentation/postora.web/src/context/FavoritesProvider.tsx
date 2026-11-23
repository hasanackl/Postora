import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { FavoritesContext } from './FavoritesContext'
import { useAuth } from '../hooks/useAuth'
import { getFavoriteIds, addFavorite, removeFavorite } from '../api/favorites'

type FavoritesProviderProps = {
  children: ReactNode
}

function FavoritesProvider({ children }: FavoritesProviderProps) {
  const { user } = useAuth()
  const [favoriteIds, setFavoriteIds] = useState<number[]>([])

  useEffect(() => {
    if (!user) return
    getFavoriteIds(user.id).then(setFavoriteIds)
  }, [user])

  const visibleIds = user ? favoriteIds : []

  function isFavorite(listingId: number) {
    return visibleIds.includes(listingId)
  }

  async function toggleFavorite(listingId: number) {
    if (!user) return

    if (isFavorite(listingId)) {
      await removeFavorite(user.id, listingId)
      setFavoriteIds((current) => current.filter((id) => id !== listingId))
    } else {
      await addFavorite(user.id, listingId)
      setFavoriteIds((current) => [...current, listingId])
    }
  }

  return (
    <FavoritesContext value={{ favoriteIds: visibleIds, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext>
  )
}

export default FavoritesProvider
