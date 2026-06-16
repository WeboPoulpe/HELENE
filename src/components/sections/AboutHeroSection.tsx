'use client'

import { motion } from 'framer-motion'

export function AboutHeroSection() {
  return (
    <section className="bg-navy py-20 pt-32 lg:py-32 lg:pt-44">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="text-xs uppercase tracking-widest font-medium text-rose">
              Consultante indépendante
            </span>
            <h1 className="mt-4 font-display font-extrabold text-4xl text-white leading-tight lg:text-5xl">
              Qui suis-je ? Hélène, consultante en gestion d&apos;entreprise
            </h1>
            <div className="mt-6 space-y-3 text-base text-white/60 lg:text-lg">
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative aspect-square w-full max-w-xs bg-navy-light flex items-center justify-center">
              <span
                className="font-display text-8xl font-extrabold text-white/10 select-none"
                aria-label="Initiales HF"
              >
                HF
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mt-16 border-t border-white/10 pt-12"
        >
          <p className="mx-auto max-w-2xl font-serif text-xl italic text-rose">
            &ldquo;Ce qui m&apos;anime ? Transformer la complexité
            administrative en quelque chose de simple, clair et actionnable.
            Pour que vous puissiez, enfin, respirer.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
