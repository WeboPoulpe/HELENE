'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { MobileNav } from './MobileNav'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/offre', label: 'Mon Offre' },
  { href: '/qui-suis-je', label: 'Qui suis-je' },
  { href: '/boite-a-outils', label: 'Boîte à outils' },
  { href: '/articles', label: 'Articles' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-stone bg-cream/90 backdrop-blur-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 rounded-sm"
          >
            <span className="font-serif text-xl italic text-ink">
              Hélène Fouré
            </span>
            <span className="text-xs font-sans text-muted">
              Consultante en gestion
            </span>
          </Link>

          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-ink transition-colors hover:text-terracotta after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact">
              <Button variant="primary">Réserver un appel</Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="flex items-center justify-center rounded-lg p-2 text-ink transition-colors hover:bg-stone lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
