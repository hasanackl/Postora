export type OrderStatus = 'pending' | 'approved' | 'cancelled'

export type Order = {
  id: number
  listingId: number
  buyerId: number
  sellerId: number
  price: number
  status: OrderStatus
  createdDate: string
  updatedDate: string
}