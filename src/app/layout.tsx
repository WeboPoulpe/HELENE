import type { Metadata } from 'next'
import { bricolageGrotesk, dmSans, fraunces } from '@/lib/fonts'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.helene-foure.fr'),
  title: {
    default: "Conseil En Gestion D'entreprise | Hélène Fouré",
    template: "%s | Hélène Fouré",
  },
  description:
    "Avec mes services de conseil en gestion d'entreprise, votre administratif et votre gestion enfin optimisés. Retrouvez du temps pour ce qui compte vraiment.",
  openGraph: {
    locale: 'fr_FR',
    type: 'website',
    siteName: 'Hélène Fouré',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Person'],
  name: 'Hélène Fouré',
  jobTitle: 'Consultante en gestion d\'entreprise',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Troyes',
    addressRegion: 'Grand Est',
    addressCountry: 'FR',
  },
  url: 'https://www.helene-foure.fr',
  email: 'contact@helene-foure.fr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${bricolageGrotesk.variable} ${dmSans.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
