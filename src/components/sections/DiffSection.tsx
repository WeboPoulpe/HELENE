'use client'

import { motion } from 'framer-motion'
import { Highlight } from '@/components/ui/Highlight'

export function DiffSection() {
  return (
    <section className="bg-navy py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-3xl"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-rose">
            Ce qui me différencie
          </span>
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(8px)', y: 12 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display font-extrabold text-white text-4xl lg:text-5xl leading-tight"
          >
            Ni <Highlight>secrétaire</Highlight>. Ni comptable.
          </motion.h2>
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
