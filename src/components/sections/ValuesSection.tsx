'use client'

import { motion } from 'framer-motion'
import { values } from '@/content/values'

export function ValuesSection() {
  return (
    <section className="bg-cream py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl italic text-ink lg:text-4xl">
            Ce que je défends. Ce que je cultive.
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm"
            >
              <span className="font-serif text-4xl italic text-terracotta leading-none">
                {value.initial}
              </span>
              <div>
                <h3 className="font-serif text-lg italic text-ink">
                  {value.name}
                </h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
