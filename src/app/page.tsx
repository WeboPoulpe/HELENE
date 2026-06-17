import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ServicesPreviewSection } from '@/components/sections/ServicesPreviewSection'
import { MethodSection } from '@/components/sections/MethodSection'
import { CtaSection } from '@/components/sections/CtaSection'
import { MarqueeBanner } from '@/components/ui/MarqueeBanner'

const heroKeywords = [
  'Gestion administrative', 'Pré-comptabilité', 'Contrôle de gestion',
  'Organisation', 'Sérénité', 'Clarté financière', 'Pilotage d\'activité',
  'Indépendants', 'TPE', 'Professions libérales', 'Troyes · Grand Est',
]

const methodKeywords = [
  'Structure', 'Rigueur', 'Accompagnement sur-mesure', 'Gain de temps',
  'Visibilité', 'Rentabilité', 'Back-office maîtrisé', 'Premier appel offert',
]

export const metadata: Metadata = {
  title: "Conseil En Gestion D'entreprise | Hélène Fouré",
  description:
    "Avec mes services de conseil en gestion d'entreprise, votre administratif et votre gestion enfin optimisés. Retrouvez du temps pour ce qui compte vraiment.",
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeBanner items={heroKeywords} variant="dark" speed={30} />
      <ProblemSection />
      <ServicesPreviewSection />
      <MarqueeBanner items={methodKeywords} variant="light" speed={26} />
      <MethodSection />
      <CtaSection />
    </>
  )
}
