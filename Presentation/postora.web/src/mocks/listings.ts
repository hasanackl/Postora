import type { Listing } from '../types/listing'

const DAY = 24 * 60 * 60 * 1000

function daysAgo(days: number): string {
  return new Date(Date.now() - days * DAY).toISOString()
}

const DESCRIPTION =
  'Temiz kullanıldı, bakımları düzenli yapıldı. Takas düşünmüyorum. Detaylı bilgi için mesaj atabilirsiniz.'

export type MockListing = Listing & {
  description: string
}

export const listings: MockListing[] = [
  { id: 1, title: 'Renault Clio 1.0 TCe Joy, hatasız boyasız', price: 685000, categoryId: 1, categoryNameTr: 'Vasıta', categoryNameEn: 'Vehicles', cityId: 3, city: 'İzmir', photoCount: 12, imageUrl: null, createdDate: daysAgo(0), ownerId: 3, status: 'approved', description: DESCRIPTION },
  { id: 2, title: 'Kadıköy merkezde kiralık 2+1 daire', price: 17500, categoryId: 2, categoryNameTr: 'Emlak', categoryNameEn: 'Real estate', cityId: 1, city: 'İstanbul', photoCount: 9, imageUrl: null, createdDate: daysAgo(0), ownerId: 1, status: 'approved', description: DESCRIPTION },
  { id: 3, title: 'MacBook Air M2, 256 GB, kutulu', price: 32000, categoryId: 3, categoryNameTr: 'Elektronik', categoryNameEn: 'Electronics', cityId: 2, city: 'Ankara', photoCount: 6, imageUrl: null, createdDate: daysAgo(1), ownerId: 3, status: 'approved', description: DESCRIPTION },
  { id: 4, title: 'L koltuk takımı, 1 yıllık', price: 14750, categoryId: 4, categoryNameTr: 'Ev ve yaşam', categoryNameEn: 'Home & living', cityId: 4, city: 'Bursa', photoCount: 5, imageUrl: null, createdDate: daysAgo(2), ownerId: 1, status: 'approved', description: DESCRIPTION },
  { id: 5, title: 'Trek Marlin 5 dağ bisikleti', price: 18900, categoryId: 6, categoryNameTr: 'Spor ve hobi', categoryNameEn: 'Sports & hobbies', cityId: 5, city: 'Antalya', photoCount: 7, imageUrl: null, createdDate: daysAgo(3), ownerId: 3, status: 'approved', description: DESCRIPTION },
  { id: 6, title: 'iPhone 15, 128 GB, garantili', price: 41500, categoryId: 3, categoryNameTr: 'Elektronik', categoryNameEn: 'Electronics', cityId: 1, city: 'İstanbul', photoCount: 8, imageUrl: null, createdDate: daysAgo(3), ownerId: 1, status: 'approved', description: DESCRIPTION },
  { id: 7, title: 'Sahibinden satılık 3+1 daire', price: 3450000, categoryId: 2, categoryNameTr: 'Emlak', categoryNameEn: 'Real estate', cityId: 7, city: 'Eskişehir', photoCount: 15, imageUrl: null, createdDate: daysAgo(4), ownerId: 3, status: 'approved', description: DESCRIPTION },
  { id: 8, title: 'Kışlık kaban, M beden, az giyildi', price: 1200, categoryId: 5, categoryNameTr: 'Giyim', categoryNameEn: 'Clothing', cityId: 6, city: 'Konya', photoCount: 3, imageUrl: null, createdDate: daysAgo(5), ownerId: 1, status: 'approved', description: DESCRIPTION },
  { id: 9, title: 'Samsung Galaxy Tab S9, kalemli', price: 14500, categoryId: 3, categoryNameTr: 'Elektronik', categoryNameEn: 'Electronics', cityId: 3, city: 'İzmir', photoCount: 4, imageUrl: null, createdDate: daysAgo(0), ownerId: 1, status: 'pending', description: DESCRIPTION },
  { id: 10, title: 'Replika kol saati', price: 2500, categoryId: 5, categoryNameTr: 'Giyim', categoryNameEn: 'Clothing', cityId: 4, city: 'Bursa', photoCount: 2, imageUrl: null, createdDate: daysAgo(2), ownerId: 3, status: 'rejected', rejectReason: 'Taklit ürün satışı kurallara aykırıdır.', description: DESCRIPTION },
]