import type { Category } from '../types/category'
import { seedData } from '../data/seed'

export function getCategories(): Promise<Category[]> {
  return Promise.resolve(seedData.categories)
}
