'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const stepVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

const headingVariants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

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
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-rose">
            Mon approche
          </span>
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-4 font-display font-extrabold text-navy text-4xl lg:text-5xl leading-tight"
          >
            Comment je travaille
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid gap-0 divide-y lg:grid-cols-3 lg:divide-y-0 lg:divide-x divide-navy/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {points.map((point, i) => (
            <motion.div
              key={point.label}
              variants={stepVariants}
              className="py-8 lg:py-0 lg:px-10 first:lg:pl-0 last:lg:pr-0"
            >
              <span className="block font-display font-extrabold text-5xl leading-none text-rose-pale">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display font-bold text-lg text-navy">
                {point.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
