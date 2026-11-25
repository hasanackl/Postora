import type { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export type BadgeTone = 'mint' | 'sand' | 'accent' | 'muted' | 'primary'

type BadgeProps = {
  tone?: BadgeTone
  icon?: IconDefinition
  children: ReactNode
}

const toneClasses: Record<BadgeTone, string> = {
  mint: 'bg-mint text-primary-dark',
  sand: 'bg-sand text-[#8a2e08]',
  accent: 'bg-accent/10 text-accent',
  muted: 'border border-line bg-page text-muted',
  primary: 'bg-primary text-page',
}

function Badge({ tone = 'mint', icon, children }: BadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${toneClasses[tone]}`}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </span>
  )
}

export default Badge