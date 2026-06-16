'use client'

import { motion } from 'framer-motion'

export function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-rose"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
        aria-hidden="true"
      />
    </span>
  )
}
