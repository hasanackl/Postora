import type { ReactNode } from 'react'
import { labelClass } from '../../constants/formClasses'
import FieldError from './FieldError'

type FormFieldProps = {
  id: string
  label: string
  error?: string
  hint?: string
  children: ReactNode
}

function FormField({ id, label, error, hint, children }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error ? (
        <FieldError id={`${id}-error`} messageKey={error} />
      ) : (
        hint && <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted">{hint}</p>
      )}
    </div>
  )
}

export default FormField
