import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { ServicesPreviewSection } from '@/components/sections/ServicesPreviewSection'
import { MethodSection } from '@/components/sections/MethodSection'
import { CtaSection } from '@/components/sections/CtaSection'

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
      <ProblemSection />
      <ServicesPreviewSection />
      <MethodSection />
      <CtaSection />
    </>
  )
}
