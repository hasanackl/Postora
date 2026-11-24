export type AuditAction =
  | 'listingCreated'
  | 'listingSubmitted'
  | 'listingUpdated'
  | 'listingApproved'
  | 'listingRejected'
  | 'listingArchived'
  | 'listingDeleted'
  | 'userRegistered'
  | 'userActivated'
  | 'userDeactivated'
  | 'orderCreated'
  | 'orderApproved'
  | 'orderCancelled'

export type AuditTarget = 'listing' | 'user' | 'order'

export type AuditLog = {
  id: number
  actorId: number
  action: AuditAction
  targetType: AuditTarget
  targetId: number
  note?: string
  createdDate: string
}
