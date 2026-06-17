'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutHeroSection() {
  return (
    <section className="bg-navy relative overflow-hidden py-20 pt-32 lg:py-32 lg:pt-44">
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-rose/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="text-xs uppercase tracking-widest font-medium text-rose">
              Consultante indépendante
            </span>
            <div className="overflow-hidden mt-4">
              <motion.h1
                className="font-display font-extrabold text-4xl text-white leading-none md:text-5xl xl:text-6xl"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                Qui suis-je ? Hélène, consultante en gestion d&apos;entreprise
              </motion.h1>
            </div>
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
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.7, ease: 'easeOut', delay: 0.2 },
              y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative aspect-square w-full max-w-xs overflow-hidden">
              <Image
                src="/helene-about.jpg"
                alt="Hélène Fouré, consultante en gestion d'entreprise"
                fill
                className="object-cover object-center"
                priority
              />
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
