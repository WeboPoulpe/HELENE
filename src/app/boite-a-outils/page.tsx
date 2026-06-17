import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { MarqueeBanner } from '@/components/ui/MarqueeBanner'

const outilsKeywords = [
  'Modèles', 'Checklists', 'Guides pratiques', 'Gain de temps',
  'Outils concrets', 'Ressources gratuites', 'Entrepreneurs', 'Artisans',
]

export const metadata: Metadata = {
  title: "Outils De Gestion D'entreprise – Boîte à Outils Pour Entrepreneurs | Hélène Fouré",
  description:
    "Outils de gestion d'entreprise, conseils concrets et applicables pour entrepreneurs, artisans et indépendants.",
  alternates: { canonical: '/boite-a-outils' },
}

const objectives = [
  'Gagner du temps',
  'Éviter les erreurs courantes',
  'Obtenir plus de clarté',
  'Se concentrer sur le cœur de métier',
]

export default function BoiteAOutilsPage() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="pointer-events-none absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-rose/10 blur-3xl animate-pulse" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: existing content */}
            <div>
              <Badge className="mb-6">Ressources</Badge>
              <h1 className="font-display font-extrabold text-4xl leading-none text-white md:text-5xl xl:text-6xl max-w-3xl">
                Boîte à outils
              </h1>
              <p className="mt-6 max-w-2xl text-base text-white/60 lg:text-lg">
                Un espace dédié aux outils de gestion d&apos;entreprise, pensé
                pour accompagner les entrepreneurs qui veulent avancer vite
                et bien — sans se noyer dans la complexité.
              </p>
            </div>
            {/* Right: photo */}
            <div className="hidden lg:flex justify-end">
              <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden">
                <img
                  src="/boite-outils-hero.png"
                  alt="Outils de gestion : cahier, graphiques et carte de visite"
                  className="h-[115%] w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeBanner items={outilsKeywords} variant="dark" />

      <section className="bg-rose-pale py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-navy mb-8">
            Ce que vous trouverez ici
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((obj) => (
              <div key={obj} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
                <span className="text-rose font-bold">✓</span>
                <span className="text-sm font-medium text-navy">{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-navy mb-8">
            À la une
          </h2>
          <Card className="max-w-2xl">
            <Badge className="mb-4">Article</Badge>
            <h3 className="font-display text-xl text-navy">
              Les 7 Pièges à Éviter pour Réussir Votre Aventure Artisanale
            </h3>
            <p className="mt-3 text-sm text-slate leading-relaxed">
              Vous vous lancez ou vous êtes déjà en activité ? Découvrez les
              erreurs les plus fréquentes chez les artisans et comment les
              contourner pour construire une activité solide et sereine.
            </p>
            <div className="mt-6">
              <Link href="/articles">
                <Button variant="ghost">Lire les articles →</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-rose py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-serif text-2xl italic text-white">
            D&apos;autres ressources arrivent bientôt…
          </p>
          <p className="mt-2 text-white/80 text-sm">
            Modèles, checklists, guides pratiques — restez connecté.
          </p>
        </div>
      </section>
    </>
  )
}
