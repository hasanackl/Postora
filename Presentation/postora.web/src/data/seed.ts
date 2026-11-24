import type { AppData } from '../types/appData'

const DAY = 24 * 60 * 60 * 1000

function daysAgo(days: number): string {
  return new Date(Date.now() - days * DAY).toISOString()
}

const DESCRIPTION =
  'Temiz kullanıldı, bakımları düzenli yapıldı. Takas düşünmüyorum. Detaylı bilgi için mesaj atabilirsiniz.'

const REJECT_REASON = 'Taklit ürün satışı kurallara aykırıdır.'

export const seedData: AppData = {
  users: [
    { id: 1, fullName: 'Ahmet Yılmaz', email: 'user@postora.com', phone: '05321234567', cityId: 1, role: 'user', isActive: true, createdDate: '2024-03-12T10:00:00.000Z', password: '123456' },
    { id: 2, fullName: 'Elif Kaya', email: 'admin@postora.com', phone: '05331112233', cityId: 2, role: 'admin', isActive: true, createdDate: '2022-09-01T10:00:00.000Z', password: '123456' },
    { id: 3, fullName: 'Mehmet Demir', email: 'mehmet@postora.com', phone: '05447654321', cityId: 3, role: 'user', isActive: true, createdDate: '2023-06-20T10:00:00.000Z', password: '123456' },
    { id: 4, fullName: 'Zeynep Arslan', email: 'zeynep@postora.com', phone: '05059876543', cityId: 4, role: 'user', isActive: false, createdDate: '2025-01-15T10:00:00.000Z', password: '123456' },
  ],

  categories: [
    { id: 1, nameTr: 'Vasıta', nameEn: 'Vehicles', slug: 'vasita', icon: 'car' },
    { id: 2, nameTr: 'Emlak', nameEn: 'Real estate', slug: 'emlak', icon: 'house' },
    { id: 3, nameTr: 'Elektronik', nameEn: 'Electronics', slug: 'elektronik', icon: 'laptop' },
    { id: 4, nameTr: 'Ev ve yaşam', nameEn: 'Home & living', slug: 'ev-ve-yasam', icon: 'couch' },
    { id: 5, nameTr: 'Giyim', nameEn: 'Clothing', slug: 'giyim', icon: 'shirt' },
    { id: 6, nameTr: 'Spor ve hobi', nameEn: 'Sports & hobbies', slug: 'spor-ve-hobi', icon: 'bicycle' },
  ],

  cities: [
    { id: 1, name: 'İstanbul' },
    { id: 2, name: 'Ankara' },
    { id: 3, name: 'İzmir' },
    { id: 4, name: 'Bursa' },
    { id: 5, name: 'Antalya' },
    { id: 6, name: 'Konya' },
    { id: 7, name: 'Eskişehir' },
  ],

  listings: [
    { id: 1, title: 'Renault Clio 1.0 TCe Joy, hatasız boyasız', description: DESCRIPTION, price: 685000, categoryId: 1, cityId: 3, ownerId: 3, photos: [], status: 'approved', createdDate: daysAgo(0), updatedDate: daysAgo(0) },
    { id: 2, title: 'Kadıköy merkezde kiralık 2+1 daire', description: DESCRIPTION, price: 17500, categoryId: 2, cityId: 1, ownerId: 1, photos: [], status: 'approved', createdDate: daysAgo(0), updatedDate: daysAgo(0) },
    { id: 3, title: 'MacBook Air M2, 256 GB, kutulu', description: DESCRIPTION, price: 32000, categoryId: 3, cityId: 2, ownerId: 3, photos: [], status: 'approved', createdDate: daysAgo(1), updatedDate: daysAgo(1) },
    { id: 4, title: 'L koltuk takımı, 1 yıllık', description: DESCRIPTION, price: 14750, categoryId: 4, cityId: 4, ownerId: 1, photos: [], status: 'approved', createdDate: daysAgo(2), updatedDate: daysAgo(2) },
    { id: 5, title: 'Trek Marlin 5 dağ bisikleti', description: DESCRIPTION, price: 18900, categoryId: 6, cityId: 5, ownerId: 3, photos: [], status: 'approved', createdDate: daysAgo(3), updatedDate: daysAgo(3) },
    { id: 6, title: 'iPhone 15, 128 GB, garantili', description: DESCRIPTION, price: 41500, categoryId: 3, cityId: 1, ownerId: 1, photos: [], status: 'approved', createdDate: daysAgo(3), updatedDate: daysAgo(3) },
    { id: 7, title: 'Sahibinden satılık 3+1 daire', description: DESCRIPTION, price: 3450000, categoryId: 2, cityId: 7, ownerId: 3, photos: [], status: 'approved', createdDate: daysAgo(4), updatedDate: daysAgo(4) },
    { id: 8, title: 'Kışlık kaban, M beden, az giyildi', description: DESCRIPTION, price: 1200, categoryId: 5, cityId: 6, ownerId: 1, photos: [], status: 'approved', createdDate: daysAgo(5), updatedDate: daysAgo(5) },
    { id: 9, title: 'Samsung Galaxy Tab S9, kalemli', description: DESCRIPTION, price: 14500, categoryId: 3, cityId: 3, ownerId: 1, photos: [], status: 'pending', createdDate: daysAgo(0), updatedDate: daysAgo(0) },
    { id: 10, title: 'Replika kol saati', description: DESCRIPTION, price: 2500, categoryId: 5, cityId: 4, ownerId: 3, photos: [], status: 'rejected', rejectReason: REJECT_REASON, createdDate: daysAgo(2), updatedDate: daysAgo(1) },
    { id: 11, title: 'Ahşap çalışma masası', description: DESCRIPTION, price: 3200, categoryId: 4, cityId: 2, ownerId: 1, photos: [], status: 'draft', createdDate: daysAgo(1), updatedDate: daysAgo(1) },
    { id: 12, title: 'Canon EOS 250D fotoğraf makinesi', description: DESCRIPTION, price: 19500, categoryId: 3, cityId: 1, ownerId: 3, photos: [], status: 'archived', createdDate: daysAgo(20), updatedDate: daysAgo(6) },
  ],

  favorites: [
    { userId: 1, listingId: 3 },
    { userId: 1, listingId: 5 },
  ],

  orders: [
    { id: 1, listingId: 3, buyerId: 1, sellerId: 3, price: 32000, status: 'pending', createdDate: daysAgo(0), updatedDate: daysAgo(0) },
    { id: 2, listingId: 6, buyerId: 3, sellerId: 1, price: 41500, status: 'approved', createdDate: daysAgo(2), updatedDate: daysAgo(1) },
    { id: 3, listingId: 4, buyerId: 3, sellerId: 1, price: 14750, status: 'cancelled', createdDate: daysAgo(2), updatedDate: daysAgo(2) },
  ],

  notifications: [
    { id: 1, userId: 3, type: 'listingRejected', listingId: 10, note: REJECT_REASON, isRead: false, createdDate: daysAgo(1) },
    { id: 2, userId: 1, type: 'listingApproved', listingId: 2, isRead: true, createdDate: daysAgo(0) },
    { id: 3, userId: 3, type: 'orderReceived', listingId: 3, orderId: 1, isRead: false, createdDate: daysAgo(0) },
    { id: 4, userId: 3, type: 'orderApproved', listingId: 6, orderId: 2, isRead: false, createdDate: daysAgo(1) },
    { id: 5, userId: 1, type: 'orderReceived', listingId: 6, orderId: 2, isRead: true, createdDate: daysAgo(2) },
  ],

  auditLogs: [
    { id: 1, actorId: 1, action: 'listingSubmitted', targetType: 'listing', targetId: 9, createdDate: daysAgo(0) },
    { id: 2, actorId: 2, action: 'listingApproved', targetType: 'listing', targetId: 2, createdDate: daysAgo(0) },
    { id: 3, actorId: 2, action: 'listingRejected', targetType: 'listing', targetId: 10, note: REJECT_REASON, createdDate: daysAgo(1) },
    { id: 4, actorId: 3, action: 'listingArchived', targetType: 'listing', targetId: 12, createdDate: daysAgo(6) },
    { id: 5, actorId: 1, action: 'orderCreated', targetType: 'order', targetId: 1, createdDate: daysAgo(0) },
    { id: 6, actorId: 2, action: 'orderApproved', targetType: 'order', targetId: 2, createdDate: daysAgo(1) },
    { id: 7, actorId: 2, action: 'userDeactivated', targetType: 'user', targetId: 4, createdDate: daysAgo(3) },
  ],
}
