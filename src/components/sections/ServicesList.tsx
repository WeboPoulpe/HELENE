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
          className={`py-16 lg:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-off-white'}`}
        >
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div className="mb-8">
                <span className="text-xs font-medium uppercase tracking-widest text-rose">
                  Service 0{i + 1}
                </span>
                <h2 className="mt-2 font-display font-extrabold text-2xl text-navy lg:text-3xl">
                  {service.title}
                </h2>
                <p className="mt-1 text-base text-slate">{service.subtitle}</p>
              </div>

              <div className="grid border border-navy/10 lg:grid-cols-2">
                <div className="p-6 lg:p-8 lg:border-r border-navy/10">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-navy">
                    Ce que je fais
                  </h3>
                  <ul className="space-y-3">
                    {service.whatIDo.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-rose" />
                        <span className="text-sm text-slate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-navy/10 lg:border-t-0 p-6 lg:p-8 bg-rose-pale/30">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-navy">
                    Ce que ça change pour vous
                  </h3>
                  <ul className="space-y-3">
                    {service.whatChanges.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 text-xs font-bold text-rose">✓</span>
                        <span className="text-sm text-navy">{item}</span>
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
