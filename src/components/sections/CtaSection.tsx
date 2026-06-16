'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function CtaSection() {
  return (
    <section className="bg-rose py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display font-extrabold text-navy text-3xl lg:text-5xl leading-tight">
            Prêt à professionnaliser votre gestion sans perdre votre liberté ?
          </h2>
          <p className="mt-6 text-base text-navy/70 lg:text-lg">
            Un premier appel de 30 minutes pour comprendre votre situation,
            vos besoins et voir si on est faits pour travailler ensemble.
            Sans engagement.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="outline">Réservez votre appel découverte</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
