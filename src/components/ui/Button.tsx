import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'dark'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-medium uppercase tracking-widest transition-all duration-200 focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none'

  const variants: Record<string, string> = {
    primary: 'bg-rose text-white hover:bg-rose/90',
    ghost:   'border border-white text-white hover:bg-white/10',
    outline: 'border border-navy text-navy hover:bg-navy hover:text-white',
    dark:    'bg-navy text-white hover:bg-navy-light',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
