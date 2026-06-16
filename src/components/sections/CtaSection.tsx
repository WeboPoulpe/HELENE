'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { BOOKING_URL } from '@/lib/constants'
import { Highlight } from '@/components/ui/Highlight'

export function CtaSection() {
  return (
    <section className="bg-navy py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle rose glow */}
      <motion.div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-64 rounded-full bg-rose/15 blur-3xl"
        animate={{ opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-8 h-px w-12 bg-rose" aria-hidden="true" />
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(8px)', y: 12 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-white text-3xl lg:text-5xl leading-tight"
          >
            Prêt à professionnaliser votre <Highlight>gestion</Highlight> sans perdre votre liberté ?
          </motion.h2>
          <p className="mt-6 text-base text-white/60 lg:text-lg">
            Un premier appel de 30 minutes pour comprendre votre situation,
            vos besoins et voir si on est faits pour travailler ensemble.
            Sans engagement.
          </p>
          <div className="mt-8">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Réservez votre appel découverte</Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
