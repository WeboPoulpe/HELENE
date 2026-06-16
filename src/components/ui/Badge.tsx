import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full bg-terracotta-light px-4 py-1 text-sm font-medium text-terracotta ${className}`}
    >
      {children}
    </span>
  )
}
