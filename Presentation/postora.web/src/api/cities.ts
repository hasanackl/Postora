import type { City } from '../types/city'
import { cities } from '../mocks/cities'

export function getCities(): Promise<City[]> {
  return Promise.resolve(cities)
}