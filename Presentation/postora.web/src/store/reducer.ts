import type { AppData } from '../types/appData'
import type { AppAction } from './actions'

export function appReducer(state: AppData, action: AppAction): AppData {
  switch (action.type) {
    case 'user/registered':
      return { ...state, users: [...state.users, action.user] }

    case 'favorite/added': {
      const exists = state.favorites.some(
        (item) => item.userId === action.userId && item.listingId === action.listingId,
      )
      if (exists) return state

      return {
        ...state,
        favorites: [...state.favorites, { userId: action.userId, listingId: action.listingId }],
      }
    }

    case 'favorite/removed':
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => !(item.userId === action.userId && item.listingId === action.listingId),
        ),
      }

    default:
      return state
  }
}