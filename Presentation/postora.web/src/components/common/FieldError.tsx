import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

type FieldErrorProps = {
  id?: string
  messageKey?: string
}

function FieldError({ id, messageKey }: FieldErrorProps) {
  const { t } = useTranslation()

  if (!messageKey) {
    return null
  }

  return (
    <p id={id} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-accent">
      <FontAwesomeIcon icon={faCircleExclamation} />
      {t(messageKey)}
    </p>
  )
}

export default FieldError
