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
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Hélène Fouré"
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
              <div>
                <p className="font-display text-xl font-bold text-white leading-tight">Hélène Fouré</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-widest text-white/40">
                  Consultante en gestion d&apos;entreprise
                </p>
              </div>
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
