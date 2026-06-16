import type { Metadata } from 'next'
import { ContactIframe } from '@/components/sections/ContactIframe'

export const metadata: Metadata = {
  title: "Contact - Prenons Contact | Hélène Fouré",
  description:
    "Une question, une envie, un projet ? Contactez Hélène Fouré, consultante en gestion d'entreprise à Troyes.",
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-rose/10 blur-3xl opacity-60" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl leading-tight text-white lg:text-5xl">
            Prenons contact
          </h1>
          <p className="mt-4 text-xl font-medium text-rose">
            Votre organisation ne va pas s&apos;optimiser toute seule.
          </p>
          <p className="mt-4 max-w-2xl text-base text-white/60 lg:text-lg">
            Que vous ayez une question précise ou une envie de changement,
            je suis là pour vous écouter. Premier échange offert, sans
            engagement.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ContactIframe />
        </div>
      </section>

      <section className="bg-rose-pale py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate mb-2">Email</p>
              <a
                href="mailto:contact@helene-foure.fr"
                className="text-navy font-medium hover:text-rose transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose rounded-sm"
              >
                contact@helene-foure.fr
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate mb-2">Localisation</p>
              <p className="text-navy">Troyes · Grand Est</p>
              <p className="text-sm text-slate">Interventions à distance possibles</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate mb-2">Google</p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose hover:text-rose/80 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose rounded-sm"
              >
                Voir sur Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
