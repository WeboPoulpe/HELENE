import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { marked } from 'marked'
import { articles } from '@/content/articles'
import { Button } from '@/components/ui/Button'

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
      <header className="bg-cream pt-32 pb-12 lg:pt-44 lg:pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-muted">
            <Link href="/" className="hover:text-terracotta transition-colors">Accueil</Link>
            <span className="mx-2">·</span>
            <Link href="/articles" className="hover:text-terracotta transition-colors">Articles</Link>
            <span className="mx-2">·</span>
            <span className="text-ink">{article.title}</span>
          </nav>
          <p className="text-sm text-muted mb-3">{formatDate(article.date)}</p>
          <h1 className="font-serif text-3xl italic leading-tight text-ink lg:text-4xl">
            {article.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div
          className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:italic prose-a:text-terracotta prose-strong:text-ink"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />

        <div className="mt-16 rounded-2xl bg-stone p-8 text-center">
          <p className="font-serif text-xl italic text-ink">
            Besoin d&apos;aide pour votre gestion ?
          </p>
          <p className="mt-2 text-sm text-muted">
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
            className="text-sm text-muted hover:text-terracotta transition-colors"
          >
            ← Retour aux articles
          </Link>
        </div>
      </div>
    </article>
  )
}
