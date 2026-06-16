'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function CtaSection() {
  return (
    <section className="bg-ink py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-3xl italic text-cream lg:text-4xl">
            Prêt à professionnaliser votre gestion sans perdre votre
            liberté ?
          </h2>
          <p className="mt-6 text-base text-cream/70 lg:text-lg">
            Un premier appel de 30 minutes pour comprendre votre situation,
            vos besoins et voir si on est faits pour travailler ensemble.
            Sans engagement.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="ghost" className="border-terracotta text-cream hover:bg-terracotta hover:text-white hover:border-terracotta">
                Réservez votre appel découverte
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
