interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl ${className}`}>
      {children}
    </div>
  )
}
