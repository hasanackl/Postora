import type { Listing, ListingDetail } from '../types/listing'
import { listings } from '../mocks/listings'
import type { MockListing } from '../mocks/listings'
import { users } from '../mocks/users'

function isApproved(listing: Listing) {
  return listing.status === 'approved'
}

function toDetail(listing: MockListing): ListingDetail {
  const owner = users.find((user) => user.id === listing.ownerId)
  const ownerListings = listings.filter(
    (item) => item.ownerId === listing.ownerId && isApproved(item),
  )

  return {
    ...listing,
    sellerName: owner?.fullName ?? '',
    sellerMemberSince: owner?.memberSince ?? 0,
    sellerListingCount: ownerListings.length,
  }
}

export function getListings(): Promise<Listing[]> {
  return Promise.resolve(listings.filter(isApproved))
}

export function getListingById(id: number): Promise<ListingDetail | null> {
  const listing = listings.find((item) => item.id === id && isApproved(item))
  return Promise.resolve(listing ? toDetail(listing) : null)
}

export function getListingsByIds(ids: number[]): Promise<Listing[]> {
  const result = listings.filter((item) => ids.includes(item.id) && isApproved(item))
  return Promise.resolve(result)
}