'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function PricingSection() {
  return (
    <section className="bg-stone py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-3xl italic text-ink lg:text-4xl">
            Tarifs
          </h2>
          <p className="mt-6 text-base text-muted lg:text-lg">
            Mes prestations sont proposées{' '}
            <span className="font-medium text-ink">sur devis personnalisé</span>
            , après un premier échange pour comprendre vos besoins.
          </p>
          <p className="mt-4 text-base text-muted">
            Pas de surprise, pas de mauvaise surprise. On discute, on construit
            ensemble un accompagnement qui vous correspond.
          </p>
          <div className="mt-6 rounded-2xl border border-terracotta/30 bg-white p-6">
            <p className="font-serif text-lg italic text-ink">
              Service express disponible
            </p>
            <p className="mt-2 text-sm text-muted">
              Besoin d&apos;une intervention ponctuelle ? Devis, facture, mise en
              ordre urgente ? Je propose des interventions à la demande.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="primary">Demander un devis</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
