import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`border border-navy/10 bg-white p-6 lg:p-8 ${className}`}>
      {children}
    </div>
  )
}
