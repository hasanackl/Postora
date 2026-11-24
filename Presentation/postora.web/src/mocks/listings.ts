import type { Listing } from '../types/listing'

const DAY = 24 * 60 * 60 * 1000

function daysAgo(days: number): string {
  return new Date(Date.now() - days * DAY).toISOString()
}

const DESCRIPTION =
  'Temiz kullanıldı, bakımları düzenli yapıldı. Takas düşünmüyorum. Detaylı bilgi için mesaj atabilirsiniz.'

export const listings: Listing[] = [
  { id: 1, title: 'Renault Clio 1.0 TCe Joy, hatasız boyasız', description: DESCRIPTION, price: 685000, categoryId: 1, cityId: 3, ownerId: 3, photos: [], status: 'approved', createdDate: daysAgo(0), updatedDate: daysAgo(0) },
  { id: 2, title: 'Kadıköy merkezde kiralık 2+1 daire', description: DESCRIPTION, price: 17500, categoryId: 2, cityId: 1, ownerId: 1, photos: [], status: 'approved', createdDate: daysAgo(0), updatedDate: daysAgo(0) },
  { id: 3, title: 'MacBook Air M2, 256 GB, kutulu', description: DESCRIPTION, price: 32000, categoryId: 3, cityId: 2, ownerId: 3, photos: [], status: 'approved', createdDate: daysAgo(1), updatedDate: daysAgo(1) },
  { id: 4, title: 'L koltuk takımı, 1 yıllık', description: DESCRIPTION, price: 14750, categoryId: 4, cityId: 4, ownerId: 1, photos: [], status: 'approved', createdDate: daysAgo(2), updatedDate: daysAgo(2) },
  { id: 5, title: 'Trek Marlin 5 dağ bisikleti', description: DESCRIPTION, price: 18900, categoryId: 6, cityId: 5, ownerId: 3, photos: [], status: 'approved', createdDate: daysAgo(3), updatedDate: daysAgo(3) },
  { id: 6, title: 'iPhone 15, 128 GB, garantili', description: DESCRIPTION, price: 41500, categoryId: 3, cityId: 1, ownerId: 1, photos: [], status: 'approved', createdDate: daysAgo(3), updatedDate: daysAgo(3) },
  { id: 7, title: 'Sahibinden satılık 3+1 daire', description: DESCRIPTION, price: 3450000, categoryId: 2, cityId: 7, ownerId: 3, photos: [], status: 'approved', createdDate: daysAgo(4), updatedDate: daysAgo(4) },
  { id: 8, title: 'Kışlık kaban, M beden, az giyildi', description: DESCRIPTION, price: 1200, categoryId: 5, cityId: 6, ownerId: 1, photos: [], status: 'approved', createdDate: daysAgo(5), updatedDate: daysAgo(5) },
  { id: 9, title: 'Samsung Galaxy Tab S9, kalemli', description: DESCRIPTION, price: 14500, categoryId: 3, cityId: 3, ownerId: 1, photos: [], status: 'pending', createdDate: daysAgo(0), updatedDate: daysAgo(0) },
  { id: 10, title: 'Replika kol saati', description: DESCRIPTION, price: 2500, categoryId: 5, cityId: 4, ownerId: 3, photos: [], status: 'rejected', rejectReason: 'Taklit ürün satışı kurallara aykırıdır.', createdDate: daysAgo(2), updatedDate: daysAgo(1) },
  { id: 11, title: 'Ahşap çalışma masası', description: DESCRIPTION, price: 3200, categoryId: 4, cityId: 2, ownerId: 1, photos: [], status: 'draft', createdDate: daysAgo(1), updatedDate: daysAgo(1) },
  { id: 12, title: 'Canon EOS 250D fotoğraf makinesi', description: DESCRIPTION, price: 19500, categoryId: 3, cityId: 1, ownerId: 3, photos: [], status: 'archived', createdDate: daysAgo(20), updatedDate: daysAgo(6) },
]