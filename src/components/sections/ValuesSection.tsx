'use client'

import { motion } from 'framer-motion'
import { values } from '@/content/values'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cellVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

const headingVariants = {
  hidden: { opacity: 0, filter: 'blur(8px)', y: 12 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

export function ValuesSection() {
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
            Mes valeurs
          </span>
          <motion.h2
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="mt-4 font-display font-extrabold text-navy text-4xl lg:text-5xl leading-tight"
          >
            Ce que je défends. Ce que je cultive.
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid gap-0 divide-y sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3 divide-navy/10 sm:divide-x"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {values.map((value) => (
            <motion.div
              key={value.name}
              variants={cellVariants}
              className="p-8"
            >
              <span className="block font-display font-extrabold text-5xl leading-none text-rose-pale">
                {value.initial}
              </span>
              <h3 className="mt-3 font-display font-bold text-lg text-navy">
                {value.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
