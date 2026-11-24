export type ListingStatus = 'draft' | 'pending' | 'approved' | 'rejected' | 'archived'

export type Listing = {
  id: number
  title: string
  description: string
  price: number
  categoryId: number
  cityId: number
  ownerId: number
  photos: string[]
  status: ListingStatus
  rejectReason?: string
  createdDate: string
  updatedDate: string
}

export type ListingView = Listing & {
  categoryNameTr: string
  categoryNameEn: string
  cityName: string
}

export type ListingDetail = ListingView & {
  sellerName: string
  sellerMemberSince: number
  sellerListingCount: number
}
