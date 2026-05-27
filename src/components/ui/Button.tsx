interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  disabled?: boolean
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'rounded-lg font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90',
    secondary: 'bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700',
    ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-white/10',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
