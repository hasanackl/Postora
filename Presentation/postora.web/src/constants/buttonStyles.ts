export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'danger' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

const baseClass =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-page hover:bg-primary-dark',
  secondary: 'border border-primary bg-white text-primary hover:bg-mint',
  accent: 'bg-accent text-white hover:bg-[#a8380a]',
  danger: 'bg-danger text-white hover:bg-danger-dark',
  ghost: 'text-primary hover:bg-page',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-3.5 text-sm',
  md: 'h-11 px-5',
  lg: 'h-12 px-6',
}

export function getButtonClass(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', fullWidth = false) {
  return [baseClass, variantClasses[variant], sizeClasses[size], fullWidth ? 'w-full' : ''].join(' ')
}
