import { useId } from 'react'
import type { ComponentProps } from 'react'
import { controlClass, controlErrorClass, controlNormalClass } from '../../constants/formClasses'
import FormField from './FormField'

type TextAreaProps = ComponentProps<'textarea'> & {
  label: string
  error?: string
  hint?: string
}

function TextArea({ label, error, hint, id, rows = 5, className = '', ...rest }: TextAreaProps) {
  const generatedId = useId()
  const textAreaId = id ?? generatedId

  let describedBy: string | undefined
  if (error) describedBy = `${textAreaId}-error`
  else if (hint) describedBy = `${textAreaId}-hint`

  return (
    <FormField id={textAreaId} label={label} error={error} hint={hint}>
      <textarea
        id={textAreaId}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`py-2.5 resize-y ${controlClass} ${error ? controlErrorClass : controlNormalClass} ${className}`}
        {...rest}
      />
    </FormField>
  )
}

export default TextArea