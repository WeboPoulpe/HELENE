'use client'

import { motion } from 'framer-motion'

export function ProblemSection() {
  return (
    <section className="bg-stone py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="font-serif text-3xl italic text-ink lg:text-4xl">
              Dirigeant indépendant, TPE : vous n&apos;avez plus le temps de
              tout gérer.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted lg:text-lg">
              <p>
                Les devis s&apos;accumulent, les factures tardent, les
                déclarations approchent. Vous avez l&apos;impression de courir
                sans jamais avancer sur ce qui compte vraiment.
              </p>
              <p>
                L&apos;administratif devient un poids qui freine votre activité,
                au lieu d&apos;être un outil qui la soutient.
              </p>
            </div>

            <p className="mt-8 font-serif text-xl italic text-terracotta">
              &ldquo;Mon objectif : faire de votre back-office un véritable
              atout stratégique.&rdquo;
            </p>

            <p className="mt-4 text-base text-muted lg:text-lg">
              Je structure votre activité pour plus de clarté, de temps et de
              rentabilité.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
