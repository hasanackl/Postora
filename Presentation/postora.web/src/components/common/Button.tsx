import type { ComponentProps } from 'react'
import { getButtonClass } from '../../constants/buttonStyles'
import type { ButtonSize, ButtonVariant } from '../../constants/buttonStyles'

type ButtonProps = ComponentProps<'button'> & {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
}

function Button({ variant, size, fullWidth, type = 'button', className = '', ...rest }: ButtonProps) {
  return (
    <button
      type={type}
      className={`${getButtonClass(variant, size, fullWidth)} ${className}`}
      {...rest}
    />
  )
}

export default Button