export type NotificationType =
  | 'listingApproved'
  | 'listingRejected'
  | 'orderReceived'
  | 'orderApproved'
  | 'orderCancelled'

export type AppNotification = {
  id: number
  userId: number
  type: NotificationType
  listingId: number
  orderId?: number
  note?: string
  isRead: boolean
  createdDate: string
}