import type { Listing, ListingDetail, ListingView } from '../types/listing'
import { listings } from '../mocks/listings'
import { users } from '../mocks/users'
import { categories } from '../mocks/categories'
import { cities } from '../mocks/cities'

function isApproved(listing: Listing) {
  return listing.status === 'approved'
}

function toView(listing: Listing): ListingView {
  const category = categories.find((item) => item.id === listing.categoryId)
  const city = cities.find((item) => item.id === listing.cityId)

  return {
    ...listing,
    categoryNameTr: category?.nameTr ?? '',
    categoryNameEn: category?.nameEn ?? '',
    cityName: city?.name ?? '',
  }
}

function toDetail(listing: Listing): ListingDetail {
  const owner = users.find((user) => user.id === listing.ownerId)
  const ownerListingCount = listings.filter(
    (item) => item.ownerId === listing.ownerId && isApproved(item),
  ).length

  return {
    ...toView(listing),
    sellerName: owner?.fullName ?? '',
    sellerMemberSince: owner ? new Date(owner.createdDate).getFullYear() : 0,
    sellerListingCount: ownerListingCount,
  }
}

export function getListings(): Promise<ListingView[]> {
  return Promise.resolve(listings.filter(isApproved).map(toView))
}

export function getListingById(id: number): Promise<ListingDetail | null> {
  const listing = listings.find((item) => item.id === id && isApproved(item))
  return Promise.resolve(listing ? toDetail(listing) : null)
}

export function getListingsByIds(ids: number[]): Promise<ListingView[]> {
  const result = listings.filter((item) => ids.includes(item.id) && isApproved(item))
  return Promise.resolve(result.map(toView))
}