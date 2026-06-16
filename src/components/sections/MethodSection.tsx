'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { pillars } from '@/content/pillars'

export function MethodSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-4"
        >
          <h2 className="font-serif text-3xl italic text-ink lg:text-4xl">
            Une consultante, pas une exécutante.
          </h2>
          <p className="mt-2 text-lg font-medium text-terracotta">
            Une experte de la gestion… qui parle votre langage.
          </p>
          <p className="mt-4 max-w-2xl text-base text-muted lg:text-lg">
            Je ne me contente pas de traiter des fichiers. Je comprends votre
            activité, j&apos;anticipe vos besoins et je vous propose des
            solutions concrètes et adaptées à votre réalité.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
            >
              <Card className="h-full">
                <span className="text-3xl">{pillar.icon}</span>
                <h3 className="mt-3 font-serif text-xl italic text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="mt-12"
        >
          <blockquote className="border-l-4 border-terracotta pl-6">
            <p className="font-serif text-xl italic text-ink">
              &ldquo;Avec moi, vous déléguez en toute sérénité, tout en
              gardant le contrôle.&rdquo;
            </p>
          </blockquote>

          <div className="mt-8">
            <Link href="/qui-suis-je">
              <Button variant="ghost">En savoir plus sur mon parcours</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
