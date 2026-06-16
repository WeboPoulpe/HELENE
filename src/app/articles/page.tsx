import type { Metadata } from 'next'
import Link from 'next/link'
import { articles } from '@/content/articles'
import { Badge } from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: "Le coin des bons conseils en gestion d'entreprise | Hélène Fouré",
  description:
    "Conseils pratiques en gestion administrative, comptabilité et organisation pour artisans, indépendants et dirigeants de TPE.",
  alternates: { canonical: '/articles' },
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default function ArticlesPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6">Blog</Badge>
          <h1 className="font-serif text-4xl italic leading-tight text-ink lg:text-5xl max-w-3xl">
            Le coin des bons conseils
          </h1>
          <p className="mt-6 max-w-2xl text-base text-muted lg:text-lg">
            Administratif, gestion et organisation… sans jargon compliqué.
            Des conseils pratiques pour les entrepreneurs qui avancent.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group rounded-2xl border border-stone bg-white p-6 shadow-sm transition-shadow hover:shadow-md lg:p-8"
              >
                <p className="text-xs text-muted">
                  {formatDate(article.date)}
                </p>
                <h2 className="mt-2 font-serif text-xl italic text-ink leading-snug group-hover:text-terracotta transition-colors">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <Link
                  href={`/articles/${article.slug}`}
                  className="mt-4 inline-block text-sm font-medium text-terracotta hover:text-terracotta/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 rounded-sm"
                >
                  Lire →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
