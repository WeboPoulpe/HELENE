'use client'

import { motion } from 'framer-motion'

export function DiffSection() {
  return (
    <section className="bg-navy py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-3xl"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-rose">
            Ce qui me différencie
          </span>
          <h2 className="mt-4 font-display font-extrabold text-white text-4xl lg:text-5xl leading-tight">
            Ni secrétaire. Ni comptable.
          </h2>
          <div className="mt-8 space-y-4 text-base text-white/60 lg:text-lg">
            <p>
              Je ne suis pas une secrétaire externalisée. Je ne suis pas non
              plus un cabinet comptable. Je suis à mi-chemin : une
              professionnelle de la gestion qui comprend la réalité du terrain
              des entrepreneurs.
            </p>
            <p>
              Avec 10 ans d&apos;expérience en entreprise, j&apos;ai vu de
              l&apos;intérieur comment les directions financières et
              administratives fonctionnent. J&apos;apporte cette rigueur et
              cette méthode à votre échelle.
            </p>
            <p>
              Et parce que je suis moi-même indépendante, je comprends vos
              contraintes : la solitude, l&apos;urgence, le besoin de
              flexibilité, l&apos;importance de chaque euro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
