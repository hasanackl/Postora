import type { AppData } from '../types/appData'
import type { Listing, ListingDetail, ListingView } from '../types/listing'
import type { StoredUser, User } from '../types/user'

export function toPublicUser(user: StoredUser): User {
  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    cityId: user.cityId,
    role: user.role,
    isActive: user.isActive,
    createdDate: user.createdDate,
  }
}

function isApproved(listing: Listing) {
  return listing.status === 'approved'
}

function byNewest(a: Listing, b: Listing) {
  return b.createdDate.localeCompare(a.createdDate)
}

export function toListingView(data: AppData, listing: Listing): ListingView {
  const category = data.categories.find((item) => item.id === listing.categoryId)
  const city = data.cities.find((item) => item.id === listing.cityId)

  return {
    ...listing,
    categoryNameTr: category?.nameTr ?? '',
    categoryNameEn: category?.nameEn ?? '',
    cityName: city?.name ?? '',
  }
}

export function selectApprovedListings(data: AppData): ListingView[] {
  return data.listings
    .filter(isApproved)
    .sort(byNewest)
    .map((listing) => toListingView(data, listing))
}

export function selectListingsByIds(data: AppData, ids: number[]): ListingView[] {
  return data.listings
    .filter((listing) => ids.includes(listing.id) && isApproved(listing))
    .map((listing) => toListingView(data, listing))
}

export function selectListingDetail(data: AppData, id: number): ListingDetail | null {
  const listing = data.listings.find((item) => item.id === id && isApproved(item))
  if (!listing) return null

  const owner = data.users.find((user) => user.id === listing.ownerId)
  const ownerListingCount = data.listings.filter(
    (item) => item.ownerId === listing.ownerId && isApproved(item),
  ).length

  return {
    ...toListingView(data, listing),
    sellerName: owner?.fullName ?? '',
    sellerMemberSince: owner ? new Date(owner.createdDate).getFullYear() : 0,
    sellerListingCount: ownerListingCount,
  }
}