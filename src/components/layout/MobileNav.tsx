'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/offre', label: 'Mon Offre' },
  { href: '/qui-suis-je', label: 'Qui suis-je' },
  { href: '/boite-a-outils', label: 'Boîte à outils' },
  { href: '/articles', label: 'Articles' },
]

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed right-0 top-0 z-50 h-full w-80 max-w-full bg-cream shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <span className="font-serif text-lg italic text-ink">
              Hélène Fouré
            </span>
            <button
              onClick={onClose}
              aria-label="Fermer le menu"
              className="rounded-lg p-2 text-muted transition-colors hover:bg-stone hover:text-ink focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:outline-none"
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="mt-10 flex flex-col gap-2" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="rounded-lg px-4 py-3 text-lg font-medium text-ink transition-colors hover:bg-stone hover:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:outline-none"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                onClose()
                window.location.href = '/contact'
              }}
            >
              Réserver un appel
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
