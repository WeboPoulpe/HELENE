import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Hélène Fouré",
  description:
    "Politique de confidentialité et traitement des données personnelles sur helene-foure.fr",
  alternates: { canonical: '/politique-confidentialite' },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-white pt-32 pb-20 lg:pt-44">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl text-navy lg:text-4xl">
          Politique de confidentialité
        </h1>

        <div className="mt-10 space-y-8 text-base text-slate leading-relaxed">
          <section>
            <h2 className="font-display text-xl text-navy mb-3">
              Responsable du traitement
            </h2>
            <p>
              Hélène Fouré — contact@helene-foure.fr
              <br />
              Adresse à compléter par Hélène Fouré
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-navy mb-3">
              Données collectées
            </h2>
            <p>
              Via le formulaire de contact : nom, adresse email, contenu du
              message. Ces données sont collectées sur la base de votre
              consentement explicite (envoi du formulaire).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-navy mb-3">
              Finalités
            </h2>
            <p>
              Vos données sont utilisées uniquement pour répondre à votre
              demande de contact. Elles ne sont ni transmises à des tiers,
              ni utilisées à des fins commerciales.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-navy mb-3">
              Durée de conservation
            </h2>
            <p>
              Vos données sont conservées le temps nécessaire au traitement
              de votre demande, puis supprimées dans un délai de 3 ans
              maximum.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-navy mb-3">
              Vos droits
            </h2>
            <p>
              Conformément au RGPD, vous disposez des droits suivants :
              accès, rectification, effacement, limitation du traitement,
              portabilité. Pour exercer ces droits, contactez :{' '}
              <a
                href="mailto:contact@helene-foure.fr"
                className="text-rose hover:underline"
              >
                contact@helene-foure.fr
              </a>
            </p>
            <p className="mt-3">
              Vous pouvez également adresser une réclamation à la{' '}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose hover:underline"
              >
                CNIL
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
