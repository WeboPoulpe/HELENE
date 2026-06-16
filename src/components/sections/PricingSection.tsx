'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function PricingSection() {
  return (
    <section className="bg-off-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-2xl"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-rose">
            Tarifs
          </span>
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(8px)', y: 12 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display font-extrabold text-navy text-4xl lg:text-5xl leading-tight"
          >
            Tarifs
          </motion.h2>
          <p className="mt-6 text-base text-slate lg:text-lg">
            Mes prestations sont proposées{' '}
            <span className="font-medium text-navy">sur devis personnalisé</span>
            , après un premier échange pour comprendre vos besoins.
          </p>
          <p className="mt-4 text-base text-slate">
            Pas de surprise, pas de mauvaise surprise. On discute, on construit
            ensemble un accompagnement qui vous correspond.
          </p>
          <div className="mt-8 border border-navy/10 bg-white p-6 lg:p-8">
            <p className="font-display font-bold text-lg text-navy">
              Service express disponible
            </p>
            <p className="mt-2 text-sm text-slate">
              Besoin d&apos;une intervention ponctuelle ? Devis, facture, mise
              en ordre urgente ? Je propose des interventions à la demande.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="outline">Demander un devis</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
