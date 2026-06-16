import type { Metadata } from 'next'
import Link from 'next/link'
import { ServicesList } from '@/components/sections/ServicesList'
import { HowIWorkSection } from '@/components/sections/HowIWorkSection'
import { PricingSection } from '@/components/sections/PricingSection'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: "Mon Offre - Organisation Administrative Et Conseil En Gestion | Hélène Fouré",
  description:
    "Découvrez mes services de gestion administrative, pré-comptabilité, contrôle de gestion et accompagnement stratégique pour indépendants et TPE.",
  alternates: { canonical: '/offre' },
}

export default function OffrePage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6">Services</Badge>
          <h1 className="font-serif text-4xl italic leading-tight text-ink lg:text-5xl max-w-3xl">
            Ce que je fais pour vous (et surtout ce que ça change pour vous)
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted lg:text-lg">
            Chaque service est conçu pour vous libérer du temps, vous donner
            de la visibilité et vous permettre de piloter votre activité avec
            sérénité.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="primary">Planifiez un appel découverte</Button>
            </Link>
          </div>
        </div>
      </section>

      <ServicesList />
      <HowIWorkSection />
      <PricingSection />

      <section className="bg-cream py-20 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl italic text-ink lg:text-4xl">
            Prêt à déléguer votre gestion ?
          </h2>
          <p className="mt-4 text-base text-muted max-w-xl mx-auto">
            Prenons 30 minutes ensemble pour voir comment je peux vous aider
            concrètement.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button variant="primary">Réservez votre appel</Button>
            </Link>
            <Link href="/qui-suis-je">
              <Button variant="ghost">En savoir plus sur moi</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
