import { createContext } from 'react'
import type { Dispatch } from 'react'
import type { AppData } from '../types/appData'
import type { AppAction } from './actions'

export type AppDataContextValue = {
  data: AppData
  dispatch: Dispatch<AppAction>
}

export const AppDataContext = createContext<AppDataContextValue | null>(null)
