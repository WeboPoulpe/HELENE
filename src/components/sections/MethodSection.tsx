'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { pillars } from '@/content/pillars'
import { Highlight } from '@/components/ui/Highlight'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const pillarVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

const headingVariants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

export function MethodSection() {
  return (
    <section className="bg-navy py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-rose">
            Ma méthode
          </span>
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-4 font-display font-extrabold text-white text-4xl lg:text-5xl leading-tight max-w-2xl"
          >
            Une <Highlight>consultante</Highlight>, pas une exécutante.
          </motion.h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl">
            Une experte de la gestion… qui parle votre langage.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={pillarVariants}
              className="py-8 lg:py-0 lg:px-10 first:lg:pl-0 last:lg:pr-0"
            >
              <span className="block font-display font-extrabold text-6xl leading-none text-white/10 select-none">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display font-bold text-xl text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mt-16 border-t border-white/10 pt-12"
        >
          <blockquote className="font-serif text-xl italic text-rose max-w-2xl">
            &ldquo;Avec moi, vous déléguez en toute sérénité, tout en gardant
            le contrôle.&rdquo;
          </blockquote>
          <div className="mt-6">
            <Link
              href="/qui-suis-je"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
            >
              En savoir plus sur mon parcours <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
