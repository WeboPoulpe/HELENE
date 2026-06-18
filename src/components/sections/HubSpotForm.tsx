'use client'

import { useEffect } from 'react'

const SCRIPT_SRC = 'https://js-eu1.hsforms.net/forms/embed/146566660.js'

export function HubSpotForm() {
  useEffect(() => {
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <div
      className="hs-form-frame"
      data-region="eu1"
      data-form-id="66bb9fdf-a2aa-4e03-96bd-6c700d861fac"
      data-portal-id="146566660"
    />
  )
}
