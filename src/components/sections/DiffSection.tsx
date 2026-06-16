'use client'

import { motion } from 'framer-motion'

export function DiffSection() {
  return (
    <section className="bg-ink py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-3xl"
        >
          <h2 className="font-serif text-3xl italic text-cream lg:text-4xl">
            Ce qui me différencie
          </h2>
          <div className="mt-6 space-y-4 text-base text-cream/70 lg:text-lg">
            <p>
              Je ne suis pas une secrétaire externalisée. Je ne suis pas non
              plus un cabinet comptable. Je suis à mi-chemin : une
              professionnelle de la gestion qui comprend la réalité du terrain
              des entrepreneurs.
            </p>
            <p>
              Avec 10 ans d&apos;expérience en entreprise, j&apos;ai vu de l&apos;intérieur
              comment les directions financières et administratives
              fonctionnent. J&apos;apporte cette rigueur et cette méthode à votre
              échelle, celle d&apos;un indépendant ou d&apos;une TPE.
            </p>
            <p>
              Et parce que je suis moi-même indépendante, je comprends vos
              contraintes : la solitude, l&apos;urgence, le besoin de flexibilité,
              l&apos;importance de chaque euro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
