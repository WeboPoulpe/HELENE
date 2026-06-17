'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Highlight } from '@/components/ui/Highlight'

export function ProblemSection() {
  return (
    <section className="bg-off-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: existing text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="text-xs uppercase tracking-widest font-medium text-rose">
              Le constat
            </span>

            <motion.h2
              initial={{ opacity: 0, filter: 'blur(8px)', y: 12 }}
              whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 font-display font-extrabold text-navy text-4xl lg:text-5xl leading-tight"
            >
              Dirigeant indépendant, TPE : vous n&apos;avez plus le <Highlight>temps</Highlight> de
              tout gérer.
            </motion.h2>

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

          {/* Right: photo placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden">
              <Image
                src="/bureau-surcharge.jpg"
                alt="Bureau en désordre illustrant la surcharge administrative"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
