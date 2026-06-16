'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Gestion administrative',
    description: 'Organisation, classement, suivi des échéances — votre administratif sans charge mentale.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Pré-comptabilité',
    description: 'Pièces comptables triées, rapprochements bancaires, remise comptable sans stress.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Contrôle de gestion',
    description: 'Tableaux de bord, suivi de rentabilité, reporting mensuel — pilotez avec des chiffres clairs.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: 'Accompagnement stratégique',
    description: 'Une partenaire de confiance pour anticiper, décider et avancer avec sérénité.',
  },
]

const benefits = [
  'Gain de temps',
  'Visibilité sur vos finances',
  'Décisions facilitées',
  'Moins de stress, plus d\'impact',
]

export function ServicesPreviewSection() {
  return (
    <section className="bg-cream py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-3xl italic text-ink lg:text-4xl">
            Le conseil en gestion d&apos;entreprise à Troyes, un levier pour
            votre activité.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted lg:text-lg">
            Des services conçus pour les dirigeants qui veulent avancer vite,
            décider juste et déléguer sans perdre le contrôle.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            >
              <Card className="h-full">
                <div className="mb-4 text-terracotta">{service.icon}</div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="text-sm text-muted">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 rounded-2xl bg-terracotta px-8 py-6"
        >
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {benefits.map((b, i) => (
              <span key={b} className="text-white font-medium text-sm lg:text-base">
                {i > 0 && <span className="mr-8 hidden sm:inline text-white/60">·</span>}
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link href="/offre">
            <Button variant="ghost">Voir mes services</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
