import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`text-xs uppercase tracking-widest font-medium text-rose ${className}`}>
      {children}
    </span>
  )
}
