import type { Metadata } from 'next'
import Link from 'next/link'
import { BOOKING_URL } from '@/lib/constants'
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
      <section className="bg-navy relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="pointer-events-none absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-rose/10 blur-3xl animate-pulse" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: existing content */}
            <div>
              <Badge className="mb-6">Services</Badge>
              <h1 className="font-display font-extrabold text-4xl leading-none text-white md:text-5xl xl:text-6xl max-w-3xl">
                Ce que je fais pour vous (et surtout ce que ça change pour vous)
              </h1>
              <p className="mt-6 max-w-2xl text-base text-white/60 lg:text-lg">
                Chaque service est conçu pour vous libérer du temps, vous donner
                de la visibilité et vous permettre de piloter votre activité avec
                sérénité.
              </p>
              <div className="mt-8">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">Planifiez un appel découverte</Button>
                </a>
              </div>
            </div>
            {/* Right: placeholder */}
            <div className="hidden lg:flex justify-end">
              <div className="relative aspect-[3/4] w-full max-w-xs bg-navy-light/60 border border-white/10 flex flex-col items-center justify-center gap-3 overflow-hidden">
                <span className="font-display text-7xl font-extrabold text-white/8 select-none" aria-hidden="true">HF</span>
                <span className="text-[10px] uppercase tracking-widest text-white/25">Photo à venir</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesList />
      <HowIWorkSection />
      <PricingSection />

      <section className="bg-off-white py-20 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-navy lg:text-4xl">
            Prêt à déléguer votre gestion ?
          </h2>
          <p className="mt-4 text-base text-slate max-w-xl mx-auto">
            Prenons 30 minutes ensemble pour voir comment je peux vous aider
            concrètement.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Réservez votre appel</Button>
            </a>
            <Link href="/qui-suis-je">
              <Button variant="ghost">En savoir plus sur moi</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
