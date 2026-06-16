'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie-consent')
      if (!consent) setVisible(true)
    } catch {
      // localStorage not available
    }
  }, [])

  const accept = () => {
    try { localStorage.setItem('cookie-consent', 'accepted') } catch {}
    setVisible(false)
  }

  const decline = () => {
    try { localStorage.setItem('cookie-consent', 'declined') } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-navy/96 backdrop-blur-sm border-t border-white/10 px-4 py-4 sm:px-6"
    >
      <div className="mx-auto max-w-6xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/70">
          Ce site utilise des cookies pour améliorer votre expérience de navigation.{' '}
          <Link href="/politique-confidentialite" className="text-rose hover:text-rose/80 transition-colors underline underline-offset-2">
            Politique de confidentialité
          </Link>
        </p>
        <div className="flex gap-4 flex-shrink-0 items-center">
          <button
            onClick={decline}
            className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="bg-rose text-white text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-rose/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
