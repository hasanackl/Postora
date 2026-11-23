export type ListingStatus = 'pending' | 'approved' | 'rejected'

export type Listing = {
  id: number
  title: string
  price: number
  categoryId: number
  categoryNameTr: string
  categoryNameEn: string
  cityId: number
  city: string
  photoCount: number
  imageUrl: string | null
  createdDate: string
  ownerId: number
  status: ListingStatus
  rejectReason?: string
}

export type ListingDetail = Listing & {
  description: string
  sellerName: string
  sellerMemberSince: number
  sellerListingCount: number
}
