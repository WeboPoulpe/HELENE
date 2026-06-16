'use client'

import { useEffect, useState } from 'react'

export function ContactIframe() {
  const [formUrl, setFormUrl] = useState<string | null>(null)

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_CONTACT_FORM_URL
    if (url) setFormUrl(url)
  }, [])

  if (!formUrl) {
    return (
      <div className="rounded-2xl bg-stone p-10 text-center">
        <p className="font-serif text-xl italic text-ink">
          Envoyez-moi un message
        </p>
        <p className="mt-4 text-base text-muted">
          Pour me contacter, écrivez-moi directement à :
        </p>
        <a
          href="mailto:contact@helene-foure.fr"
          className="mt-3 inline-block text-lg font-medium text-terracotta hover:text-terracotta/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 rounded-sm"
        >
          contact@helene-foure.fr
        </a>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl">
      <iframe
        src={formUrl}
        width="100%"
        height="700"
        frameBorder="0"
        title="Formulaire de contact"
        className="border-0"
      />
    </div>
  )
}
