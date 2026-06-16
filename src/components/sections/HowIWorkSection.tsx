'use client'

import { motion } from 'framer-motion'

const points = [
  {
    label: 'Un premier appel gratuit',
    description:
      '30 minutes pour comprendre votre situation, vos besoins, et voir si on est faits pour travailler ensemble.',
  },
  {
    label: 'Une proposition sur-mesure',
    description:
      "Pas de forfait figé. Je vous propose un accompagnement adapté à votre activité, votre taille et votre budget.",
  },
  {
    label: 'Un suivi régulier et réactif',
    description:
      "Je suis disponible, je réponds vite, et je m'adapte quand votre activité évolue.",
  },
]

export function HowIWorkSection() {
  return (
    <section className="bg-cream py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-10"
        >
          <h2 className="font-serif text-3xl italic text-ink lg:text-4xl">
            Comment je travaille
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {points.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="flex gap-4"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-terracotta text-white text-sm font-bold">
                ✔
              </span>
              <div>
                <h3 className="font-serif text-lg italic text-ink">
                  {point.label}
                </h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
