import type { Category } from '../types/category'
import { categories } from '../mocks/categories'

export function getCategories(): Promise<Category[]> {
  return Promise.resolve(categories)
}