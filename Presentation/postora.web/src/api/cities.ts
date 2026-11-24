import type { City } from '../types/city'
import { seedData } from '../data/seed'

export function getCities(): Promise<City[]> {
  return Promise.resolve(seedData.cities)
}