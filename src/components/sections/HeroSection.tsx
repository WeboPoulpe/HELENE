'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center bg-navy pt-24 overflow-hidden">
      {/* Animated background glows */}
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-rose/10 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-navy-light blur-3xl opacity-60"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            <span className="text-xs uppercase tracking-widest font-medium text-rose">
              pour entrepreneurs exigeants
            </span>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-white leading-none text-4xl md:text-5xl xl:text-6xl"
              >
                Conseil en{' '}
                <span className="text-rose">gestion</span>
                {' '}d&apos;entreprise et organisation administrative à Troyes
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              className="text-lg leading-relaxed text-white/60 max-w-lg"
            >
              Vous êtes dirigeant indépendant, TPE ou profession libérale ?
              Je structure votre gestion administrative et financière pour
              que vous retrouviez du temps, de la clarté et de la sérénité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.55 }}
              className="flex flex-col gap-3 sm:flex-row mt-2"
            >
              <Link href="/contact">
                <Button variant="primary">Me rencontrer</Button>
              </Link>
              <Link href="/offre">
                <Button variant="ghost">Voir mes services</Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative aspect-[4/5] w-full max-w-sm bg-navy-light flex items-center justify-center overflow-hidden">
              <span
                className="absolute font-display font-extrabold text-[14rem] text-white/5 select-none leading-none"
                aria-hidden="true"
              >
                HF
              </span>
              <span
                className="relative font-display text-8xl font-extrabold text-white/20 select-none"
                aria-label="Initiales HF"
              >
                HF
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
