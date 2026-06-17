import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marked } from 'marked'
import { articles } from '@/content/articles'
import { Button } from '@/components/ui/Button'
import { MarqueeBanner } from '@/components/ui/MarqueeBanner'

const articleKeywords = [
  'Conseils pratiques', 'Gestion simplifiée', 'Administratif', 'Organisation',
  'TPE', 'Indépendants', 'Artisans', 'Sans jargon',
]

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/articles/${article.slug}` },
  }
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const htmlContent = marked(article.body) as string

  return (
    <article className="bg-white">
      <header className="bg-navy relative overflow-hidden pt-32 pb-12 lg:pt-44 lg:pb-16">
        <div className="pointer-events-none absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-rose/10 blur-3xl animate-pulse" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: existing content */}
            <div>
              <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-white/60">
                <Link href="/" className="hover:text-rose transition-colors">Accueil</Link>
                <span className="mx-2">·</span>
                <Link href="/articles" className="hover:text-rose transition-colors">Articles</Link>
                <span className="mx-2">·</span>
                <span className="text-white">{article.title}</span>
              </nav>
              <p className="text-sm text-white/60 mb-3">{formatDate(article.date)}</p>
              <h1 className="font-display font-extrabold text-4xl leading-none text-white md:text-5xl xl:text-6xl">
                {article.title}
              </h1>
            </div>
            {/* Right: photo */}
            <div className="hidden xl:flex justify-end">
              <div className="relative aspect-[3/4] w-full max-w-xs overflow-hidden">
                <img
                  src="/articles-hero.png"
                  alt="Laptop et notes de travail"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy to-transparent" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <MarqueeBanner items={articleKeywords} variant="dark" />

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div
          className="prose prose-lg max-w-none prose-headings:font-display prose-a:text-rose prose-strong:text-navy"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <div className="mt-16 bg-rose-pale p-8 text-center">
          <p className="font-display text-xl text-navy">
            Besoin d&apos;aide pour votre gestion ?
          </p>
          <p className="mt-2 text-sm text-slate">
            Contactez-moi pour un premier échange sans engagement.
          </p>
          <div className="mt-6">
            <Link href="/contact">
              <Button variant="primary">Me contacter</Button>
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/articles"
            className="text-sm text-slate hover:text-rose transition-colors"
          >
            ← Retour aux articles
          </Link>
        </div>
      </div>
    </article>
  )
}
