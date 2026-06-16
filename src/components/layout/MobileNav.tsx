'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { BOOKING_URL } from '@/lib/constants'

const navLinks = [
  { href: '/', label: 'Accueil', number: '01' },
  { href: '/offre', label: 'Mon Offre', number: '02' },
  { href: '/qui-suis-je', label: 'Qui suis-je', number: '03' },
  { href: '/boite-a-outils', label: 'Boîte à outils', number: '04' },
  { href: '/articles', label: 'Articles', number: '05' },
]

const panelVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'spring' as const, stiffness: 320, damping: 32 },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.28, ease: [0.32, 0, 0.67, 0] as [number, number, number, number] },
  },
}

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.18 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
}

const footerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.5 },
  },
}

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-navy/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
            className="fixed right-0 top-0 z-50 h-full w-[320px] max-w-full bg-navy overflow-hidden"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Rose glow decoration */}
            <div
              className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-rose/15 blur-3xl"
              aria-hidden="true"
            />

            {/* Top rose accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/60 to-transparent" />

            <div className="relative flex h-full flex-col px-8 py-7">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.svg"
                    alt="Hélène Fouré"
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                  <div>
                    <span className="font-display text-base font-bold tracking-tight text-white">
                      Hélène Fouré
                    </span>
                    <p className="mt-0.5 text-[10px] uppercase tracking-widest text-rose/80">
                      Consultante en gestion
                    </p>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  aria-label="Fermer le menu"
                  className="group flex h-9 w-9 items-center justify-center border border-white/10 text-white/50 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="4" x2="4" y2="12" />
                    <line x1="4" y1="4" x2="12" y2="12" />
                  </svg>
                </motion.button>
              </div>

              {/* Divider */}
              <div className="mt-8 h-px bg-white/8" />

              {/* Nav links */}
              <motion.nav
                className="mt-8 flex flex-col"
                aria-label="Navigation mobile"
                variants={listVariants}
                initial="hidden"
                animate="visible"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-center gap-5 border-b border-white/6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                    >
                      <span className="w-6 text-[11px] font-medium tabular-nums text-rose/50 transition-colors group-hover:text-rose">
                        {link.number}
                      </span>
                      <span className="font-display text-lg font-semibold text-white/70 transition-colors group-hover:text-white">
                        {link.label}
                      </span>
                      <span className="ml-auto text-white/20 transition-all group-hover:translate-x-1 group-hover:text-rose/60">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Footer */}
              <motion.div
                className="mt-auto pt-8"
                variants={footerVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="mb-5 font-serif text-sm italic text-white/35">
                  &ldquo;Je structure, tu respires.&rdquo;
                </p>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={onClose}>
                  <Button variant="primary" className="w-full">
                    Réserver un appel
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
