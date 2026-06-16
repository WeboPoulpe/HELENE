'use client'

import { motion } from 'framer-motion'

export function ProblemSection() {
  return (
    <section className="bg-off-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="text-xs uppercase tracking-widest font-medium text-rose">
              Le constat
            </span>

            <h2 className="mt-4 font-display font-extrabold text-navy text-4xl lg:text-5xl leading-tight">
              Dirigeant indépendant, TPE : vous n&apos;avez plus le temps de
              tout gérer.
            </h2>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-slate lg:text-lg">
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

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="my-8 h-px bg-rose"
              style={{ transformOrigin: 'left' }}
            />

            <p className="font-serif text-xl italic text-rose">
              &ldquo;Mon objectif : faire de votre back-office un véritable
              atout stratégique.&rdquo;
            </p>

            <p className="mt-4 text-base text-slate lg:text-lg">
              Je structure votre activité pour plus de clarté, de temps et de
              rentabilité.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
