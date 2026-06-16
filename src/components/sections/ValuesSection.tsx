'use client'

import { motion } from 'framer-motion'
import { values } from '@/content/values'

export function ValuesSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-rose">
            Mes valeurs
          </span>
          <h2 className="mt-4 font-display font-extrabold text-navy text-4xl lg:text-5xl leading-tight">
            Ce que je défends. Ce que je cultive.
          </h2>
        </motion.div>

        <div className="grid gap-0 divide-y sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3 divide-navy/10 sm:divide-x">
          {values.map((value, i) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
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
        </div>
      </div>
    </section>
  )
}
