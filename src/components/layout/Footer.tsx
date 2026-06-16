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
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          <div className="flex flex-col gap-4 lg:border-r lg:border-terracotta/30 lg:pr-8">
            <div>
              <p className="font-serif text-xl italic text-cream">
                Hélène Fouré
              </p>
              <p className="mt-1 text-xs font-sans text-cream/60">
                Consultante en gestion d&apos;entreprise
              </p>
            </div>
            <p className="font-serif italic text-cream/80 text-sm leading-relaxed">
              &ldquo;Ici, tout est pensé pour que vous respiriez. Avec méthode,
              finesse et efficacité.&rdquo;
            </p>
            <a
              href="mailto:contact@helene-foure.fr"
              className="text-sm text-terracotta hover:text-terracotta-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
            >
              contact@helene-foure.fr
            </a>
          </div>

          <div className="lg:border-r lg:border-terracotta/30 lg:pr-8">
            <p className="mb-4 text-xs font-sans font-medium uppercase tracking-wider text-cream/50">
              Navigation
            </p>
            <nav aria-label="Navigation footer">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/70 hover:text-terracotta transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-sans font-medium uppercase tracking-wider text-cream/50">
              Localisation
            </p>
            <p className="text-sm text-cream/70">Troyes · Grand Est</p>
            <p className="mt-1 text-sm text-cream/70">
              Interventions locales et à distance
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm text-terracotta hover:text-terracotta-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
            >
              Voir sur Google Maps →
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-terracotta/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/40">
            © {year} Hélène Fouré — Tous droits réservés
          </p>
          <div className="flex gap-4">
            <Link
              href="/mentions-legales"
              className="text-xs text-cream/40 hover:text-cream/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
            >
              Mentions légales
            </Link>
            <Link
              href="/politique-confidentialite"
              className="text-xs text-cream/40 hover:text-cream/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-sm"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
