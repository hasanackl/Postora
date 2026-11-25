import { useId } from 'react'
import type { ComponentProps } from 'react'
import { controlClass, controlErrorClass, controlNormalClass } from '../../constants/formClasses'
import FormField from './FormField'

type TextInputProps = ComponentProps<'input'> & {
  label: string
  error?: string
  hint?: string
}

function TextInput({ label, error, hint, id, className = '', ...rest }: TextInputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  let describedBy: string | undefined
  if (error) describedBy = `${inputId}-error`
  else if (hint) describedBy = `${inputId}-hint`

  return (
    <FormField id={inputId} label={label} error={error} hint={hint}>
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        className={`h-11 ${controlClass} ${error ? controlErrorClass : controlNormalClass} ${className}`}
        {...rest}
      />
    </FormField>
  )
}

export default TextInput