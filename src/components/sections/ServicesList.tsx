'use client'

import { motion } from 'framer-motion'
import { services } from '@/content/services'

export function ServicesList() {
  return (
    <div>
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-16 lg:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-stone'}`}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="mb-8">
                <span className="text-xs font-medium uppercase tracking-wider text-terracotta">
                  Service 0{i + 1}
                </span>
                <h2 className="mt-1 font-serif text-2xl italic text-ink lg:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-1 text-base text-muted">{service.subtitle}</p>
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl bg-white/80 p-6 shadow-sm lg:p-8">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
                    Ce que je fais
                  </h3>
                  <ul className="space-y-3">
                    {service.whatIDo.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                        <span className="text-sm text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-terracotta-light/40 p-6 shadow-sm lg:p-8">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink">
                    Ce que ça change pour vous
                  </h3>
                  <ul className="space-y-3">
                    {service.whatChanges.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 text-terracotta font-bold">✓</span>
                        <span className="text-sm text-ink">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  )
}
