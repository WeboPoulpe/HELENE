import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md lg:p-8 ${className}`}
    >
      {children}
    </div>
  )
}
