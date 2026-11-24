import { useAppData } from './useAppData'
import { useAuth } from './useAuth'

export function useFavorites() {
  const { data, dispatch } = useAppData()
  const { user } = useAuth()

  const favoriteIds = user
    ? data.favorites.filter((item) => item.userId === user.id).map((item) => item.listingId)
    : []

  function isFavorite(listingId: number) {
    return favoriteIds.includes(listingId)
  }

  function toggleFavorite(listingId: number) {
    if (!user) return

    dispatch({
      type: isFavorite(listingId) ? 'favorite/removed' : 'favorite/added',
      userId: user.id,
      listingId,
    })
  }

  return { favoriteIds, isFavorite, toggleFavorite }
}