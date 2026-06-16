import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mentions Légales | Hélène Fouré",
  description: "Mentions légales du site helene-foure.fr",
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsLegalesPage() {
  return (
    <div className="bg-white pt-32 pb-20 lg:pt-44">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-3xl italic text-ink lg:text-4xl">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-8 text-base text-muted leading-relaxed">
          <section>
            <h2 className="font-serif text-xl italic text-ink mb-3">
              Éditeur du site
            </h2>
            <p>
              <strong className="text-ink">Hélène Fouré</strong>
              <br />
              Consultante en gestion d&apos;entreprise
              <br />
              Statut, SIRET, adresse — à compléter par Hélène Fouré
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl italic text-ink mb-3">
              Directeur de la publication
            </h2>
            <p>Hélène Fouré</p>
          </section>

          <section>
            <h2 className="font-serif text-xl italic text-ink mb-3">
              Hébergeur
            </h2>
            <p>
              Vercel Inc.
              <br />
              340 Pine Street, Suite 701
              <br />
              San Francisco, CA 94104, États-Unis
              <br />
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terracotta hover:underline"
              >
                vercel.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl italic text-ink mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (textes, images,
              graphismes) est protégé par le droit d&apos;auteur. Toute
              reproduction est interdite sans autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl italic text-ink mb-3">
              Données personnelles
            </h2>
            <p>
              Les informations collectées via le formulaire de contact sont
              utilisées uniquement pour répondre à vos demandes. Elles ne
              sont ni cédées ni revendues à des tiers. Conformément au RGPD,
              vous disposez d&apos;un droit d&apos;accès, de rectification et
              de suppression de vos données.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
