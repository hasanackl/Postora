import { useTranslation } from 'react-i18next'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faBoxArchive,
  faCircleCheck,
  faCircleXmark,
  faClock,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'
import type { ListingStatus } from '../../types/listing'
import Badge from './Badge'
import type { BadgeTone } from './Badge'

const STATUS_STYLES: Record<ListingStatus, { tone: BadgeTone; icon: IconDefinition }> = {
  draft: { tone: 'muted', icon: faPenToSquare },
  pending: { tone: 'sand', icon: faClock },
  approved: { tone: 'mint', icon: faCircleCheck },
  rejected: { tone: 'accent', icon: faCircleXmark },
  archived: { tone: 'muted', icon: faBoxArchive },
}

type StatusBadgeProps = {
  status: ListingStatus
}

function StatusBadge({ status }: StatusBadgeProps) {
  const { t } = useTranslation()
  const style = STATUS_STYLES[status]

  return (
    <Badge tone={style.tone} icon={style.icon}>
      {t(`status.${status}`)}
    </Badge>
  )
}

export default StatusBadge
