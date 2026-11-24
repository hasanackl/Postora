import { useEffect, useReducer } from 'react'
import type { ReactNode } from 'react'
import { AppDataContext } from './AppDataContext'
import { appReducer } from './reducer'
import { seedData } from '../data/seed'
import type { AppData } from '../types/appData'
import { readStorage, writeStorage } from '../lib/storage'
import { STORAGE_KEYS } from '../constants/storageKeys'

type AppDataProviderProps = {
  children: ReactNode
}

function loadInitialData(): AppData {
  const saved = readStorage<AppData | null>(STORAGE_KEYS.data, null)

  if (saved && Array.isArray(saved.listings) && Array.isArray(saved.users)) {
    return saved
  }

  return structuredClone(seedData)
}

function AppDataProvider({ children }: AppDataProviderProps) {
  const [data, dispatch] = useReducer(appReducer, undefined, loadInitialData)

  useEffect(() => {
    writeStorage(STORAGE_KEYS.data, data)
  }, [data])

  return (
    <AppDataContext value={{ data, dispatch }}>
      {children}
    </AppDataContext>
  )
}

export default AppDataProvider