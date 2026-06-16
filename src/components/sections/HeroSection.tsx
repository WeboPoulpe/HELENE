'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center bg-cream pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.15 } },
            }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Badge>pour entrepreneurs exigeants</Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl italic leading-tight text-ink lg:text-7xl"
            >
              Conseil en gestion d&apos;entreprise et organisation
              administrative à Troyes
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg leading-relaxed text-muted"
            >
              Vous êtes dirigeant indépendant, TPE ou profession libérale ?
              Je structure votre gestion administrative et financière pour
              que vous retrouviez du temps, de la clarté et de la sérénité.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-3 sm:flex-row"
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-stone">
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-serif text-8xl italic text-terracotta select-none"
                  aria-label="Initiales HF"
                >
                  HF
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
