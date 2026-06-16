'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { BOOKING_URL } from '@/lib/constants'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center bg-navy pt-24 overflow-hidden">
      {/* Animated background glows */}
      <motion.div
        className="pointer-events-none absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-rose/10 blur-3xl"
        animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-navy-light blur-3xl opacity-60"
        aria-hidden="true"
      />

      {/* Floating petals */}
      {[
        { left: '6%',  top: '55%', delay: 0,   dur: 9,  w: 10, h: 22 },
        { left: '14%', top: '30%', delay: 2.5, dur: 11, w: 14, h: 30 },
        { left: '22%', top: '70%', delay: 1,   dur: 8,  w: 8,  h: 18 },
        { left: '35%', top: '20%', delay: 3.5, dur: 10, w: 12, h: 26 },
        { left: '48%', top: '60%', delay: 1.5, dur: 9,  w: 10, h: 22 },
        { left: '57%', top: '15%', delay: 0.8, dur: 12, w: 14, h: 30 },
        { left: '66%', top: '75%', delay: 3,   dur: 8,  w: 8,  h: 18 },
        { left: '75%', top: '40%', delay: 2,   dur: 10, w: 12, h: 26 },
        { left: '85%', top: '65%', delay: 4,   dur: 9,  w: 10, h: 22 },
        { left: '93%', top: '25%', delay: 1.2, dur: 11, w: 14, h: 30 },
        { left: '28%', top: '85%', delay: 0.4, dur: 8,  w: 8,  h: 18 },
        { left: '72%', top: '10%', delay: 2.8, dur: 10, w: 12, h: 26 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full bg-rose"
          style={{ left: p.left, top: p.top, width: p.w, height: p.h, rotate: 25 + i * 15 }}
          animate={{
            y: [0, -80, -180],
            rotate: [25 + i * 15, 80 + i * 10, 140 + i * 8],
            opacity: [0, 0.55, 0],
            x: [0, i % 2 === 0 ? 20 : -20, i % 2 === 0 ? -10 : 10],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col gap-8"
          >
            <span className="text-xs uppercase tracking-widest font-medium text-rose">
              pour entrepreneurs exigeants
            </span>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-extrabold text-white leading-none text-4xl md:text-5xl xl:text-6xl"
              >
                Conseil en{' '}
                <span className="text-rose">gestion</span>
                {' '}d&apos;entreprise et organisation administrative à Troyes
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              className="text-lg leading-relaxed text-white/60 max-w-lg"
            >
              Vous êtes dirigeant indépendant, TPE ou profession libérale ?
              Je structure votre gestion administrative et financière pour
              que vous retrouviez du temps, de la clarté et de la sérénité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.55 }}
              className="flex flex-col gap-3 sm:flex-row mt-2"
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Me rencontrer</Button>
              </a>
              <Link href="/offre">
                <Button variant="ghost">Voir mes services</Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { duration: 0.7, ease: 'easeOut', delay: 0.3 },
              y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }
            }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative aspect-[4/5] w-full max-w-sm bg-navy-light flex items-center justify-center overflow-hidden">
              <span
                className="absolute font-display font-extrabold text-[14rem] text-white/5 select-none leading-none"
                aria-hidden="true"
              >
                HF
              </span>
              <span
                className="relative font-display text-8xl font-extrabold text-white/20 select-none"
                aria-label="Initiales HF"
              >
                HF
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
