import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'dark'
  children: ReactNode
  asChild?: boolean
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium font-sans transition-all duration-200 focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none'

  const variants = {
    primary: 'bg-terracotta text-white hover:bg-terracotta/90 hover:scale-105',
    ghost: 'border border-terracotta text-terracotta hover:bg-terracotta-light',
    dark: 'bg-ink text-cream hover:bg-ink/80',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
