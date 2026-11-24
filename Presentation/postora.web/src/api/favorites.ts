import { seedData } from '../data/seed'

const { favorites } = seedData

export function getFavoriteIds(userId: number): Promise<number[]> {
  const ids = favorites
    .filter((item) => item.userId === userId)
    .map((item) => item.listingId)

  return Promise.resolve(ids)
}

export function addFavorite(userId: number, listingId: number): Promise<void> {
  favorites.push({ userId, listingId })
  return Promise.resolve()
}

export function removeFavorite(userId: number, listingId: number): Promise<void> {
  const index = favorites.findIndex(
    (item) => item.userId === userId && item.listingId === listingId,
  )

  if (index !== -1) {
    favorites.splice(index, 1)
  }

  return Promise.resolve()
}
