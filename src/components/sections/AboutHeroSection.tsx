'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'

export function AboutHeroSection() {
  return (
    <section className="bg-cream py-20 pt-32 lg:py-32 lg:pt-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Badge className="mb-6">Consultante indépendante</Badge>
            <h1 className="font-serif text-4xl italic leading-tight text-ink lg:text-5xl">
              Qui suis-je ? Hélène, consultante en gestion d&apos;entreprise
            </h1>
            <div className="mt-6 space-y-3 text-base text-muted lg:text-lg">
              <p>
                J&apos;accompagne les dirigeants indépendants, TPE et
                professions libérales qui veulent reprendre le contrôle de
                leur gestion — sans y passer leurs nuits.
              </p>
              <p>
                Mon credo : une gestion rigoureuse n&apos;a pas besoin
                d&apos;être complexe. Avec la bonne méthode et les bons
                outils, elle devient un atout.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-stone">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-8xl italic text-terracotta select-none">
                  HF
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="mt-16 bg-stone rounded-2xl py-10 px-8"
        >
          <p className="mx-auto max-w-2xl text-center font-serif text-xl italic text-ink">
            &ldquo;Ce qui m&apos;anime ? Transformer la complexité
            administrative en quelque chose de simple, clair et actionnable.
            Pour que vous puissiez, enfin, respirer.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
