import type { ReactNode } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

type EmptyStateProps = {
  icon: IconDefinition
  title: string
  text?: string
  action?: ReactNode
}

function EmptyState({ icon, title, text, action }: EmptyStateProps) {
  return (
    <div className="py-16 px-6 flex flex-col items-center text-center gap-2 rounded-[18px] border border-dashed border-line bg-white">
      <FontAwesomeIcon icon={icon} className="text-4xl text-primary mb-2" />
      <p className="font-heading text-xl font-bold">{title}</p>
      {text && <p className="max-w-md text-sm text-muted">{text}</p>}
      {action && <div className="mt-3">{action}</div>}
    </div>
  )
}

export default EmptyState
