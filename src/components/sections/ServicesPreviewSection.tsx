'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

const services = [
  {
    number: '01',
    title: 'Gestion administrative',
    description:
      'Organisation, classement, suivi des échéances — votre administratif sans charge mentale.',
  },
  {
    number: '02',
    title: 'Pré-comptabilité',
    description:
      'Pièces comptables triées, rapprochements bancaires, remise comptable sans stress.',
  },
  {
    number: '03',
    title: 'Contrôle de gestion',
    description:
      'Tableaux de bord, suivi de rentabilité, reporting mensuel — pilotez avec des chiffres clairs.',
  },
  {
    number: '04',
    title: 'Accompagnement stratégique',
    description:
      'Une partenaire de confiance pour anticiper, décider et avancer avec sérénité.',
  },
]

export function ServicesPreviewSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-rose">
            Services
          </span>
          <h2 className="mt-4 font-display font-extrabold text-navy text-4xl lg:text-5xl leading-tight max-w-2xl">
            Le conseil en gestion d&apos;entreprise à Troyes, un levier pour
            votre activité.
          </h2>
        </motion.div>

        <motion.div
          className="divide-y divide-navy/10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={rowVariants}
              className="group grid items-start gap-4 py-8 lg:grid-cols-[120px_1fr_1fr] lg:gap-8 lg:py-10 cursor-default"
              whileHover={{ x: 6 }}
              transition={{ duration: 0.2 }}
            >
              <span
                className="font-display font-extrabold text-6xl leading-none text-rose-pale select-none"
                aria-hidden="true"
              >
                {service.number}
              </span>
              <h3 className="font-display font-bold text-xl text-navy transition-colors group-hover:text-rose lg:text-2xl">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate lg:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-12"
        >
          <Link
            href="/offre"
            className="inline-flex items-center gap-2 text-sm font-medium text-rose transition-colors hover:text-rose/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
          >
            Voir tous mes services <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
