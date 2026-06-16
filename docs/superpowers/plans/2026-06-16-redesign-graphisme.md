# Redesign Graphisme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remplacer la palette cream+terracotta générique par marine+rose, adopter Bricolage Grotesque comme police display, et refondre les layouts de sections pour un rendu éditorial moderne.

**Architecture:** Remplacement pur des fichiers existants — aucune nouvelle route, aucune nouvelle dépendance npm. La foundation (palette + fonts) doit être posée en Task 1 car tous les autres composants en dépendent. Les sections peuvent ensuite être refaites indépendamment.

**Tech Stack:** Next.js 15, Tailwind CSS, Framer Motion, next/font (Google Fonts — Bricolage Grotesque est disponible)

---

## Task 1 — Design system foundation

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `src/lib/fonts.ts`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`

- [ ] **Step 1: Mettre à jour `tailwind.config.ts`**

Remplacer entièrement le contenu :

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:         '#12163A',
        'navy-light': '#1E2448',
        rose:         '#E8447A',
        'rose-pale':  '#FDE8EF',
        'off-white':  '#F8F7F4',
        white:        '#FFFFFF',
        slate:        '#64748B',
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'system-ui', 'sans-serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif:   ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Mettre à jour `src/lib/fonts.ts`**

```ts
import { Bricolage_Grotesque, DM_Sans, Fraunces } from 'next/font/google'

export const bricolageGrotesk = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
})

export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
})
```

- [ ] **Step 3: Mettre à jour `src/app/layout.tsx`**

```tsx
import type { Metadata } from 'next'
import { bricolageGrotesk, dmSans, fraunces } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.helene-foure.fr'),
  title: {
    default: "Conseil En Gestion D'entreprise | Hélène Fouré",
    template: "%s | Hélène Fouré",
  },
  description:
    "Avec mes services de conseil en gestion d'entreprise, votre administratif et votre gestion enfin optimisés. Retrouvez du temps pour ce qui compte vraiment.",
  openGraph: {
    locale: 'fr_FR',
    type: 'website',
    siteName: 'Hélène Fouré',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Person'],
  name: 'Hélène Fouré',
  jobTitle: "Consultante en gestion d'entreprise",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Troyes',
    addressRegion: 'Grand Est',
    addressCountry: 'FR',
  },
  url: 'https://www.helene-foure.fr',
  email: 'contact@helene-foure.fr',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${bricolageGrotesk.variable} ${dmSans.variable} ${fraunces.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 4: Mettre à jour `src/app/globals.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    @apply scroll-smooth;
  }

  body {
    @apply bg-white text-navy font-sans antialiased;
  }

  h1, h2, h3 {
    @apply font-display;
  }

  *:focus-visible {
    @apply ring-2 ring-rose ring-offset-2 outline-none;
  }
}
```

- [ ] **Step 5: Vérifier la compilation**

```bash
npm run build
```

Attendu : `✓ Compiled successfully` (des erreurs de type sur les anciens tokens Tailwind sont possibles — elles seront corrigées dans les tâches suivantes)

- [ ] **Step 6: Commit**

```bash
git add tailwind.config.ts src/lib/fonts.ts src/app/layout.tsx src/app/globals.css
git commit -m "feat: redesign — design system foundation (navy+rose, Bricolage Grotesque)"
```

---

## Task 2 — UI primitives (Button, Badge, Card)

**Files:**
- Modify: `src/components/ui/Button.tsx`
- Modify: `src/components/ui/Badge.tsx`
- Modify: `src/components/ui/Card.tsx`

- [ ] **Step 1: Réécrire `src/components/ui/Button.tsx`**

Coins droits (`rounded-none`), texte uppercase, 4 variantes (primary sur marine, ghost outline blanc sur marine, outline navy sur fond clair, dark).

```tsx
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline' | 'dark'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-medium uppercase tracking-widest transition-all duration-200 focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none'

  const variants: Record<string, string> = {
    primary: 'bg-rose text-white hover:bg-rose/90',
    ghost:   'border border-white text-white hover:bg-white/10',
    outline: 'border border-navy text-navy hover:bg-navy hover:text-white',
    dark:    'bg-navy text-white hover:bg-navy-light',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
```

- [ ] **Step 2: Réécrire `src/components/ui/Badge.tsx`**

Plus de fond coloré, juste du texte label uppercase.

```tsx
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`text-xs uppercase tracking-widest font-medium text-rose ${className}`}>
      {children}
    </span>
  )
}
```

- [ ] **Step 3: Réécrire `src/components/ui/Card.tsx`**

Coins droits, bordure fine, pas de shadow.

```tsx
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`border border-navy/10 bg-white p-6 lg:p-8 ${className}`}>
      {children}
    </div>
  )
}
```

- [ ] **Step 4: Vérifier**

```bash
npm run build
```

Attendu : compilation sans erreur sur ces 3 fichiers.

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/
git commit -m "feat: redesign — UI primitives (Button rounded-none, Badge label, Card flat)"
```

---

## Task 3 — Layout components (Header, MobileNav, Footer)

**Files:**
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/MobileNav.tsx`
- Modify: `src/components/layout/Footer.tsx`

- [ ] **Step 1: Réécrire `src/components/layout/MobileNav.tsx`**

Drawer fond `navy`, texte blanc, liens uppercase.

```tsx
'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/offre', label: 'Mon Offre' },
  { href: '/qui-suis-je', label: 'Qui suis-je' },
  { href: '/boite-a-outils', label: 'Boîte à outils' },
  { href: '/articles', label: 'Articles' },
]

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy/60"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={`fixed right-0 top-0 z-50 h-full w-80 max-w-full bg-navy shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-bold text-white">
              Hélène Fouré
            </span>
            <button
              onClick={onClose}
              aria-label="Fermer le menu"
              className="p-2 text-white/60 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="mt-12 flex flex-col gap-1" aria-label="Navigation mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="px-2 py-3 text-xs uppercase tracking-widest font-medium text-white/70 hover:text-white transition-colors border-b border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto">
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                onClose()
                window.location.href = '/contact'
              }}
            >
              Réserver un appel
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
```

- [ ] **Step 2: Réécrire `src/components/layout/Header.tsx`**

Transparent au top, `bg-navy/95 backdrop-blur-sm` au scroll. Logo Bricolage Grotesque blanc. Nav uppercase tracking-widest.

```tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { MobileNav } from './MobileNav'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/offre', label: 'Mon Offre' },
  { href: '/qui-suis-je', label: 'Qui suis-je' },
  { href: '/boite-a-outils', label: 'Boîte à outils' },
  { href: '/articles', label: 'Articles' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy/95 backdrop-blur-sm border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose focus-visible:ring-offset-2"
          >
            <span className="font-display text-xl font-bold text-white">
              Hélène Fouré
            </span>
            <span className="text-[10px] uppercase tracking-widest text-white/40">
              Consultante en gestion
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact">
              <Button variant="primary">Réserver un appel</Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            className="flex items-center justify-center p-2 text-white lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
```

- [ ] **Step 3: Réécrire `src/components/layout/Footer.tsx`**

Tagline "Je structure, tu respires." en Fraunces. Rose sur les liens hover. Supprimer les anciens tokens (cream, terracotta).

```tsx
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/offre', label: 'Mon Offre' },
  { href: '/qui-suis-je', label: 'Qui suis-je' },
  { href: '/boite-a-outils', label: 'Boîte à outils' },
  { href: '/articles', label: 'Articles' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col gap-4 lg:border-r lg:border-white/10 lg:pr-8">
            <div>
              <p className="font-display text-xl font-bold text-white">Hélène Fouré</p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-white/40">
                Consultante en gestion d&apos;entreprise
              </p>
            </div>
            <p className="font-serif italic text-white/60 text-sm leading-relaxed">
              &ldquo;Je structure, tu respires.&rdquo;
            </p>
            <a
              href="mailto:contact@helene-foure.fr"
              className="text-sm text-rose hover:text-rose/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
            >
              contact@helene-foure.fr
            </a>
          </div>

          <div className="lg:border-r lg:border-white/10 lg:pr-8">
            <p className="mb-4 text-[10px] uppercase tracking-widest text-white/40">
              Navigation
            </p>
            <nav aria-label="Navigation footer">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-rose transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-[10px] uppercase tracking-widest text-white/40">
              Localisation
            </p>
            <p className="text-sm text-white/60">Troyes · Grand Est</p>
            <p className="mt-1 text-sm text-white/60">Interventions locales et à distance</p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-rose hover:text-rose/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
            >
              Voir sur Google Maps →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            © {year} Hélène Fouré — Tous droits réservés
          </p>
          <div className="flex gap-4">
            <Link
              href="/mentions-legales"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Vérifier**

```bash
npm run build
```

Attendu : compilation sans erreur TypeScript.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/
git commit -m "feat: redesign — layout components (navy header/drawer/footer, uppercase nav)"
```

---

## Task 4 — HeroSection

**Files:**
- Modify: `src/components/sections/HeroSection.tsx`

- [ ] **Step 1: Réécrire `src/components/sections/HeroSection.tsx`**

Fond `navy`. Titre en Bricolage Grotesque clampé, mot "gestion" en rose. Reveal via `y: '100%' → 0`. Placeholder HF sans arrondi.

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center bg-navy pt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
                className="font-display font-extrabold text-white leading-none"
                style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)' }}
              >
                Conseil en{' '}
                <span className="text-rose">gestion</span>
                {' '}d&apos;entreprise et organisation administrative à Troyes
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
              className="text-lg leading-relaxed text-white/60 max-w-lg"
            >
              Vous êtes dirigeant indépendant, TPE ou profession libérale ?
              Je structure votre gestion administrative et financière pour
              que vous retrouviez du temps, de la clarté et de la sérénité.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.55 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Link href="/contact">
                <Button variant="primary">Me rencontrer</Button>
              </Link>
              <Link href="/offre">
                <Button variant="ghost">Voir mes services</Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
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
```

- [ ] **Step 2: Vérifier**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/HeroSection.tsx
git commit -m "feat: redesign — HeroSection (navy, reveal animation, Bricolage Grotesque)"
```

---

## Task 5 — ProblemSection + CtaSection

**Files:**
- Modify: `src/components/sections/ProblemSection.tsx`
- Modify: `src/components/sections/CtaSection.tsx`

- [ ] **Step 1: Réécrire `src/components/sections/ProblemSection.tsx`**

Fond `off-white`, ligne rose animée, Fraunces uniquement pour la citation.

```tsx
'use client'

import { motion } from 'framer-motion'

export function ProblemSection() {
  return (
    <section className="bg-off-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="text-xs uppercase tracking-widest font-medium text-rose">
              Le constat
            </span>

            <h2 className="mt-4 font-display font-extrabold text-navy text-4xl lg:text-5xl leading-tight">
              Dirigeant indépendant, TPE : vous n&apos;avez plus le temps de
              tout gérer.
            </h2>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-slate lg:text-lg">
              <p>
                Les devis s&apos;accumulent, les factures tardent, les
                déclarations approchent. Vous avez l&apos;impression de courir
                sans jamais avancer sur ce qui compte vraiment.
              </p>
              <p>
                L&apos;administratif devient un poids qui freine votre activité,
                au lieu d&apos;être un outil qui la soutient.
              </p>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="my-8 h-px bg-rose"
              style={{ transformOrigin: 'left' }}
            />

            <p className="font-serif text-xl italic text-rose">
              &ldquo;Mon objectif : faire de votre back-office un véritable
              atout stratégique.&rdquo;
            </p>

            <p className="mt-4 text-base text-slate lg:text-lg">
              Je structure votre activité pour plus de clarté, de temps et de
              rentabilité.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Réécrire `src/components/sections/CtaSection.tsx`**

Fond `rose`, texte `navy`, bouton `outline`.

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function CtaSection() {
  return (
    <section className="bg-rose py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display font-extrabold text-navy text-3xl lg:text-5xl leading-tight">
            Prêt à professionnaliser votre gestion sans perdre votre liberté ?
          </h2>
          <p className="mt-6 text-base text-navy/70 lg:text-lg">
            Un premier appel de 30 minutes pour comprendre votre situation,
            vos besoins et voir si on est faits pour travailler ensemble.
            Sans engagement.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="outline">Réservez votre appel découverte</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Vérifier**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/ProblemSection.tsx src/components/sections/CtaSection.tsx
git commit -m "feat: redesign — ProblemSection (off-white, ligne rose) + CtaSection (fond rose)"
```

---

## Task 6 — ServicesPreviewSection

**Files:**
- Modify: `src/components/sections/ServicesPreviewSection.tsx`

- [ ] **Step 1: Réécrire `src/components/sections/ServicesPreviewSection.tsx`**

Remplacer les 4 cards par une liste numérotée (01–04) avec numéros décoratifs en `rose-pale`, séparateurs `border-navy/10`, lien texte à la fin.

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
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

        <div className="divide-y divide-navy/10">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.07 }}
              className="group grid items-start gap-4 py-8 lg:grid-cols-[120px_1fr_1fr] lg:gap-8 lg:py-10"
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
        </div>

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
```

- [ ] **Step 2: Vérifier**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/ServicesPreviewSection.tsx
git commit -m "feat: redesign — ServicesPreviewSection (liste numérotée, sans cards)"
```

---

## Task 7 — MethodSection

**Files:**
- Modify: `src/components/sections/MethodSection.tsx`

- [ ] **Step 1: Réécrire `src/components/sections/MethodSection.tsx`**

Fond `navy`. Piliers en colonnes avec `divide-x`, grands numéros blancs/10%. Pas de cards. Citation Fraunces rose.

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { pillars } from '@/content/pillars'

export function MethodSection() {
  return (
    <section className="bg-navy py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-rose">
            Ma méthode
          </span>
          <h2 className="mt-4 font-display font-extrabold text-white text-4xl lg:text-5xl leading-tight max-w-2xl">
            Une consultante, pas une exécutante.
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl">
            Une experte de la gestion… qui parle votre langage.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              className="py-8 lg:py-0 lg:px-10 first:lg:pl-0 last:lg:pr-0"
            >
              <span className="block font-display font-extrabold text-6xl leading-none text-white/10 select-none">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display font-bold text-xl text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mt-16 border-t border-white/10 pt-12"
        >
          <blockquote className="font-serif text-xl italic text-rose max-w-2xl">
            &ldquo;Avec moi, vous déléguez en toute sérénité, tout en gardant
            le contrôle.&rdquo;
          </blockquote>
          <div className="mt-6">
            <Link
              href="/qui-suis-je"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose"
            >
              En savoir plus sur mon parcours <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Vérifier**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/sections/MethodSection.tsx
git commit -m "feat: redesign — MethodSection (navy, piliers sans cards, numéros déco)"
```

---

## Task 8 — ValuesSection + DiffSection

**Files:**
- Modify: `src/components/sections/ValuesSection.tsx`
- Modify: `src/components/sections/DiffSection.tsx`

- [ ] **Step 1: Réécrire `src/components/sections/ValuesSection.tsx`**

Grille sans cards, séparateurs fins, grande initiale `rose-pale`.

```tsx
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
```

- [ ] **Step 2: Réécrire `src/components/sections/DiffSection.tsx`**

Fond `navy`, texte blanc/60%, label rose.

```tsx
'use client'

import { motion } from 'framer-motion'

export function DiffSection() {
  return (
    <section className="bg-navy py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-3xl"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-rose">
            Ce qui me différencie
          </span>
          <h2 className="mt-4 font-display font-extrabold text-white text-4xl lg:text-5xl leading-tight">
            Ni secrétaire. Ni comptable.
          </h2>
          <div className="mt-8 space-y-4 text-base text-white/60 lg:text-lg">
            <p>
              Je ne suis pas une secrétaire externalisée. Je ne suis pas non
              plus un cabinet comptable. Je suis à mi-chemin : une
              professionnelle de la gestion qui comprend la réalité du terrain
              des entrepreneurs.
            </p>
            <p>
              Avec 10 ans d&apos;expérience en entreprise, j&apos;ai vu de
              l&apos;intérieur comment les directions financières et
              administratives fonctionnent. J&apos;apporte cette rigueur et
              cette méthode à votre échelle.
            </p>
            <p>
              Et parce que je suis moi-même indépendante, je comprends vos
              contraintes : la solitude, l&apos;urgence, le besoin de
              flexibilité, l&apos;importance de chaque euro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Vérifier**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/ValuesSection.tsx src/components/sections/DiffSection.tsx
git commit -m "feat: redesign — ValuesSection (grille sans cards) + DiffSection (navy)"
```

---

## Task 9 — Sections page Offre (ServicesList, HowIWorkSection, PricingSection)

**Files:**
- Modify: `src/components/sections/ServicesList.tsx`
- Modify: `src/components/sections/HowIWorkSection.tsx`
- Modify: `src/components/sections/PricingSection.tsx`

- [ ] **Step 1: Réécrire `src/components/sections/ServicesList.tsx`**

Alternance `white`/`off-white`. Layout 2 colonnes avec bordure fine (pas de shadow). Puces carrées rose.

```tsx
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
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
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
```

- [ ] **Step 2: Réécrire `src/components/sections/HowIWorkSection.tsx`**

Fond `white`. 3 colonnes avec `divide-x`, numéros déco `rose-pale`.

```tsx
'use client'

import { motion } from 'framer-motion'

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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-rose">
            Mon approche
          </span>
          <h2 className="mt-4 font-display font-extrabold text-navy text-4xl lg:text-5xl leading-tight">
            Comment je travaille
          </h2>
        </motion.div>

        <div className="grid gap-0 divide-y lg:grid-cols-3 lg:divide-y-0 lg:divide-x divide-navy/10">
          {points.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
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
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Réécrire `src/components/sections/PricingSection.tsx`**

Fond `off-white`. Encart tarif avec bordure fine. Bouton `outline`.

```tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function PricingSection() {
  return (
    <section className="bg-off-white py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-2xl"
        >
          <span className="text-xs uppercase tracking-widest font-medium text-rose">
            Tarifs
          </span>
          <h2 className="mt-4 font-display font-extrabold text-navy text-4xl lg:text-5xl leading-tight">
            Tarifs
          </h2>
          <p className="mt-6 text-base text-slate lg:text-lg">
            Mes prestations sont proposées{' '}
            <span className="font-medium text-navy">sur devis personnalisé</span>
            , après un premier échange pour comprendre vos besoins.
          </p>
          <p className="mt-4 text-base text-slate">
            Pas de surprise, pas de mauvaise surprise. On discute, on construit
            ensemble un accompagnement qui vous correspond.
          </p>
          <div className="mt-8 border border-navy/10 bg-white p-6 lg:p-8">
            <p className="font-display font-bold text-lg text-navy">
              Service express disponible
            </p>
            <p className="mt-2 text-sm text-slate">
              Besoin d&apos;une intervention ponctuelle ? Devis, facture, mise
              en ordre urgente ? Je propose des interventions à la demande.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="outline">Demander un devis</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Vérifier**

```bash
npm run build
```

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/ServicesList.tsx src/components/sections/HowIWorkSection.tsx src/components/sections/PricingSection.tsx
git commit -m "feat: redesign — sections Offre (ServicesList, HowIWork, Pricing)"
```

---

## Task 10 — AboutHeroSection

**Files:**
- Modify: `src/components/sections/AboutHeroSection.tsx`

- [ ] **Step 1: Réécrire `src/components/sections/AboutHeroSection.tsx`**

Fond `navy`. Label rose. H1 blanc. Citation Fraunces rose.

```tsx
'use client'

import { motion } from 'framer-motion'

export function AboutHeroSection() {
  return (
    <section className="bg-navy py-20 pt-32 lg:py-32 lg:pt-44">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="text-xs uppercase tracking-widest font-medium text-rose">
              Consultante indépendante
            </span>
            <h1 className="mt-4 font-display font-extrabold text-4xl text-white leading-tight lg:text-5xl">
              Qui suis-je ? Hélène, consultante en gestion d&apos;entreprise
            </h1>
            <div className="mt-6 space-y-3 text-base text-white/60 lg:text-lg">
              <p>
                J&apos;accompagne les dirigeants indépendants, TPE et
                professions libérales qui veulent reprendre le contrôle de
                leur gestion — sans y passer leurs nuits.
              </p>
              <p>
                Mon credo : une gestion rigoureuse n&apos;a pas besoin
                d&apos;être complexe. Avec la bonne méthode et les bons
                outils, elle devient un atout.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative aspect-square w-full max-w-xs bg-navy-light flex items-center justify-center">
              <span
                className="font-display text-8xl font-extrabold text-white/10 select-none"
                aria-label="Initiales HF"
              >
                HF
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
          className="mt-16 border-t border-white/10 pt-12"
        >
          <p className="mx-auto max-w-2xl font-serif text-xl italic text-rose">
            &ldquo;Ce qui m&apos;anime ? Transformer la complexité
            administrative en quelque chose de simple, clair et actionnable.
            Pour que vous puissiez, enfin, respirer.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Vérifier le build final**

```bash
npm run build
```

Attendu : `✓ Generating static pages (19/19)` sans erreur TypeScript.

- [ ] **Step 3: Vérifier visuellement**

```bash
npm run dev
```

Ouvrir http://localhost:3000 et vérifier :
- Hero : fond marine, titre blanc, mot "gestion" en rose, boutons carrés
- ProblemSection : fond off-white, ligne rose animée
- ServicesPreview : liste numérotée 01–04, pas de cards
- MethodSection : fond marine, 3 colonnes, numéros déco
- CtaSection : fond rose, texte navy
- Footer : fond marine, tagline Fraunces

- [ ] **Step 4: Commit**

```bash
git add src/components/sections/AboutHeroSection.tsx
git commit -m "feat: redesign — AboutHeroSection (navy, label rose)"
```

---

## Task 11 — Mettre à jour les pages avec anciens tokens

**Context:** La suppression des tokens `cream`, `ink`, `terracotta`, `stone`, `muted` de `tailwind.config.ts` (Task 1) casse silencieusement toutes les classes Tailwind qui les référencent. Les pages suivantes ont été identifiées comme utilisant ces anciens tokens inline et doivent être mises à jour.

**Files:**
- Modify: `src/app/articles/[slug]/page.tsx`

- [ ] **Step 1: Réécrire le header de l'article page**

Dans `src/app/articles/[slug]/page.tsx`, localiser le `<header>` et son contenu. Remplacer :
- `bg-cream` → `bg-off-white`
- `text-muted` → `text-slate`
- `hover:text-terracotta` → `hover:text-rose`
- `text-ink` → `text-navy`

Nouveau code pour le `<header>` :

```tsx
<header className="bg-off-white pt-32 pb-12 lg:pt-44 lg:pb-16">
  <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
    <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-slate">
      <Link href="/" className="hover:text-rose transition-colors">Accueil</Link>
      <span className="mx-2">·</span>
      <Link href="/articles" className="hover:text-rose transition-colors">Articles</Link>
      <span className="mx-2">·</span>
      <span className="text-navy">{article.title}</span>
    </nav>
    <p className="text-sm text-slate mb-3">{formatDate(article.date)}</p>
    <h1 className="font-serif text-3xl italic leading-tight text-navy lg:text-4xl">
      {article.title}
    </h1>
  </div>
</header>
```

- [ ] **Step 2: Réécrire le contenu de l'article page**

Localiser la div `.prose` et le bloc CTA en dessous. Remplacer :
- `prose-headings:font-serif prose-headings:italic prose-a:text-terracotta prose-strong:text-ink` → `prose-headings:font-display prose-a:text-rose prose-strong:text-navy`
- `bg-stone` → `bg-rose-pale`
- `rounded-2xl` → supprimer (coins droits)
- `text-ink` → `text-navy`
- `text-muted` → `text-slate`

Nouveau code pour le bloc contenu :

```tsx
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
  <div
    className="prose prose-lg max-w-none prose-headings:font-display prose-a:text-rose prose-strong:text-navy"
    dangerouslySetInnerHTML={{ __html: htmlContent }}
  />

  <div className="mt-16 bg-rose-pale p-8 text-center">
    <p className="font-serif text-xl italic text-navy">
      Besoin d&apos;aide pour votre gestion ?
    </p>
    <p className="mt-2 text-sm text-slate">
      Contactez-moi pour un premier échange sans engagement.
    </p>
    <div className="mt-6">
      <Link href="/contact">
        <Button variant="primary">Me contacter</Button>
      </Link>
    </div>
  </div>

  <div className="mt-8 text-center">
    <Link
      href="/articles"
      className="text-sm text-slate hover:text-rose transition-colors"
    >
      ← Retour aux articles
    </Link>
  </div>
</div>
```

- [ ] **Step 3: Vérifier qu'aucune autre page n'utilise les anciens tokens**

Lancer une recherche dans tous les fichiers `src/app/**/*.tsx` pour les classes des anciens tokens :

```bash
grep -r "bg-cream\|text-ink\|text-muted\|bg-stone\|terracotta\|cream\|stone" src/app/ --include="*.tsx"
```

Si d'autres fichiers apparaissent, appliquer les mêmes substitutions (voir tableau ci-dessous). Si aucun résultat, continuer.

**Table de conversion :**
| Ancien token | Nouveau token |
|---|---|
| `bg-cream` | `bg-off-white` |
| `text-ink` | `text-navy` |
| `text-muted` | `text-slate` |
| `bg-stone` | `bg-rose-pale` |
| `*-terracotta*` | `*-rose*` |
| `hover:text-terracotta` | `hover:text-rose` |

- [ ] **Step 4: Build final et vérification**

```bash
npm run build
```

Attendu : `✓ Generating static pages (19/19)` sans erreur TypeScript ni warning de classe manquante.

- [ ] **Step 5: Commit final + push**

```bash
git add src/app/
git commit -m "feat: redesign — update pages with new tokens (article page)"
git push origin feat/implementation
```
