import type { Metadata } from 'next'
import Link from 'next/link'
import { AboutHeroSection } from '@/components/sections/AboutHeroSection'
import { ValuesSection } from '@/components/sections/ValuesSection'
import { DiffSection } from '@/components/sections/DiffSection'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: "Qui Suis-je ? Consultante En Gestion D'entreprise | Hélène Fouré",
  description:
    "Spécialisée en conseil en gestion d'entreprise, j'accompagne artisans et entrepreneurs vers plus de clarté, d'organisation et de sérénité.",
  alternates: { canonical: '/qui-suis-je' },
}

export default function QuiSuisJePage() {
  return (
    <>
      <AboutHeroSection />

      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl text-navy lg:text-4xl">
                Mon parcours
              </h2>
              <div className="mt-6 space-y-4 text-base text-slate lg:text-lg">
                <p>
                  Après 10 ans passés au sein de directions administratives et
                  financières d&apos;entreprises, j&apos;ai décidé de mettre
                  mon expertise au service des entrepreneurs qui en ont vraiment
                  besoin.
                </p>
                <p>
                  J&apos;ai vu de l&apos;intérieur comment les TPE et les
                  indépendants galèrent avec l&apos;administratif et la
                  gestion. J&apos;ai décidé d&apos;apporter des solutions
                  concrètes, accessibles et humaines.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose text-white text-sm font-bold font-display">
                  1
                </div>
                <div>
                  <p className="font-display text-navy text-lg">10 ans en entreprise</p>
                  <p className="text-sm text-slate mt-1">Directions administratives et financières, gestion d&apos;équipes et de projets complexes.</p>
                </div>
              </div>
              <div className="h-8 w-px bg-rose/30 ml-5" />
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-rose text-white text-sm font-bold font-display">
                  2
                </div>
                <div>
                  <p className="font-display text-navy text-lg">Consultante indépendante</p>
                  <p className="text-sm text-slate mt-1">Accompagnement sur-mesure des indépendants, TPE et professions libérales à Troyes et à distance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />
      <DiffSection />

      <section className="bg-off-white py-20 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl text-navy lg:text-4xl">
            Prêt à travailler ensemble ?
          </h2>
          <p className="mt-4 text-base text-slate max-w-xl mx-auto">
            Un premier appel pour se rencontrer, comprendre votre situation
            et voir ce qu&apos;on peut construire ensemble.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="primary">Prenons contact</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
