# Spec — Site vitrine Hélène Fouré

**Date :** 2026-06-16  
**Statut :** Validé pour implémentation

---

## 1. Vue d'ensemble

Refonte complète du site vitrine d'**Hélène Fouré**, consultante en gestion d'entreprise et organisation administrative à Troyes (Grand Est). Migration depuis WordPress/Elementor vers Next.js 15 moderne, rapide et bien référencé.

**URL actuelle :** https://www.helene-foure.fr/  
**Cible :** dirigeants indépendants, TPE, professions libérales, artisans  
**Positionnement :** premium, humain, épuré — fil rouge = *respiration*  
**Tagline :** "Ici, tout est pensé pour que vous respiriez. Avec méthode, finesse et efficacité."

---

## 2. Stack technique

| Élément | Choix |
|---|---|
| Framework | Next.js 15 (App Router) |
| Langage | TypeScript strict |
| Styles | Tailwind CSS (tokens centralisés) |
| Animations | Framer Motion (islands `"use client"`) |
| Fonts | next/font — Fraunces (titres) + DM Sans (corps) |
| Images | next/image (placeholder pour la photo d'Hélène, V1) |
| Base de données | Neon (PostgreSQL serverless) — intégration semaine suivante |
| ORM | Drizzle ORM — intégration semaine suivante |
| Email | Resend — intégration semaine suivante |
| Déploiement | Vercel |
| SEO | metadata API, sitemap.ts, robots.ts, JSON-LD |

**V1 : pas de backend actif.** Le formulaire contact est un `<iframe>` (URL externe). La structure Drizzle/Neon/Resend est scaffoldée mais non connectée.

---

## 3. Variables d'environnement

```
NEXT_PUBLIC_CONTACT_FORM_URL=   # iframe formulaire contact (Tally, Google Forms…)
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/helene-foure/appel-decouverte  # futur
DATABASE_URL=                   # Neon connection string (semaine suivante)
RESEND_API_KEY=                 # (semaine suivante)
```

---

## 4. Design system

### 4.1 Palette (tokens Tailwind)

```js
colors: {
  cream:            '#F7F4EF',  // fond principal
  ink:              '#1C1A17',  // texte principal
  terracotta:       '#C97B5A',  // accent principal
  'terracotta-light': '#E8C4A8', // hover / surfaces légères
  stone:            '#E8E4DE',  // surfaces secondaires
  muted:            '#7A746E',  // texte secondaire
}
```

### 4.2 Typographie

- **Fraunces** (Google Fonts, variable, italic expressif) → H1, H2, H3, citations
- **DM Sans** (Google Fonts, variable) → body, nav, labels, boutons

```js
fontFamily: {
  serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
  sans:  ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
}
```

Tailles clés : H1 `text-5xl lg:text-7xl`, H2 `text-3xl lg:text-4xl`, body `text-base lg:text-lg`

### 4.3 Composants UI atomiques

**Button variants :**
- `primary` — fond terracotta, texte blanc, `rounded-full`, hover `bg-terracotta/90 scale-105`
- `ghost` — bordure terracotta, texte terracotta, hover `bg-terracotta-light`
- `dark` — fond ink, texte cream, pour sections sombres

**Card :** fond blanc, `rounded-2xl`, `shadow-sm hover:shadow-md transition`, padding `p-6 lg:p-8`

**Badge :** fond `terracotta-light`, texte terracotta, `rounded-full text-sm font-medium px-4 py-1`

### 4.4 Animations Framer Motion

```ts
// Réutilisable dans tous les composants animés
const fadeInUp = {
  initial:   { opacity: 0, y: 20 },
  animate:   { opacity: 1, y: 0 },
  transition:{ duration: 0.6, ease: 'easeOut' },
}
// Déclenchement : whileInView={{ opacity: 1, y: 0 }} once={true} viewport={{ amount: 0.2 }}
```

Stagger sur les grilles de cards : `staggerChildren: 0.1`

### 4.5 Espacements

Sections : `py-20 lg:py-32`. Container : `max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`.

---

## 5. Architecture des fichiers

```
src/
├── app/
│   ├── layout.tsx                    # Layout racine (Header + Footer + fonts)
│   ├── page.tsx                      # Accueil /
│   ├── offre/
│   │   └── page.tsx
│   ├── qui-suis-je/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── boite-a-outils/
│   │   └── page.tsx
│   ├── articles/
│   │   ├── page.tsx                  # Liste des articles
│   │   └── [slug]/
│   │       └── page.tsx              # Article individuel
│   ├── mentions-legales/
│   │   └── page.tsx
│   ├── politique-confidentialite/
│   │   └── page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/
│   │   ├── Header.tsx                # Sticky, backdrop-blur, mobile drawer
│   │   ├── Footer.tsx                # Fond ink, 3 colonnes
│   │   └── MobileNav.tsx             # Drawer hamburger
│   ├── ui/
│   │   ├── Button.tsx                # Variants primary / ghost / dark
│   │   ├── Card.tsx
│   │   └── Badge.tsx
│   └── sections/
│       ├── HeroSection.tsx           # "use client" (Framer Motion)
│       ├── ProblemSection.tsx
│       ├── ServicesPreviewSection.tsx
│       ├── MethodSection.tsx
│       ├── CtaSection.tsx
│       ├── ServicesList.tsx          # Page offre
│       ├── HowIWorkSection.tsx
│       ├── PricingSection.tsx
│       ├── AboutHeroSection.tsx      # Page qui-suis-je
│       ├── ValuesSection.tsx
│       ├── DiffSection.tsx
│       └── ContactIframe.tsx         # "use client" (iframe dynamique)
├── content/
│   ├── meta.ts                       # Metadata SEO par page
│   ├── services.ts                   # 5 services détaillés
│   ├── values.ts                     # 5 valeurs
│   ├── pillars.ts                    # 3 piliers méthode
│   └── articles.ts                   # 6 articles (titre, slug, date, excerpt, body MDX)
├── db/
│   ├── schema.ts                     # Drizzle schema (contact_submissions)
│   └── index.ts                      # Client Neon (désactivé V1)
├── actions/
│   └── contact.ts                    # Server Action formulaire (désactivé V1)
└── lib/
    ├── resend.ts                     # Client Resend (désactivé V1)
    └── fonts.ts                      # next/font exports
```

---

## 6. Header & Footer

### Header

- **Comportement :** sticky top-0, `z-50`. Au scroll : fond `cream/90 backdrop-blur-sm` + `border-b border-stone`. Au top : transparent.
- **Logo :** "Hélène Fouré" en Fraunces italic + sous-ligne "Consultante en gestion" en DM Sans muted `text-xs`
- **Nav desktop :** Accueil · Mon Offre · Qui suis-je · Boîte à outils · Articles (DM Sans, liens hover underline terracotta)
- **CTA desktop :** bouton primary "Réserver un appel" → `/contact`
- **Mobile :** bouton hamburger → `MobileNav` (drawer slide-in depuis la droite, fond cream, liens empilés + CTA)

### Footer

- Fond `ink`, texte `cream`
- **Colonne 1 :** Logo Hélène Fouré + tagline complète en italic Fraunces + email `contact@helene-foure.fr`
- **Colonne 2 :** Navigation (mêmes liens que header)
- **Colonne 3 :** "Troyes · Grand Est" + lien Google MyBusiness (texte, URL à fournir par Hélène)
- **Bas :** `© {année_dynamique} Hélène Fouré` · Mentions légales · Politique de confidentialité
- Séparateur `border-terracotta/30` entre colonnes sur desktop

---

## 7. Pages

### 7.1 Accueil `/`

**Metadata :**
```ts
title: 'Conseil En Gestion D\'entreprise | Hélène Fouré'
description: 'Avec mes services de conseil en gestion d\'entreprise, votre administratif et votre gestion enfin optimisés. Retrouvez du temps pour ce qui compte vraiment.'
```

**Sections :**

1. **HeroSection** *(fond cream, min-h-screen, 2 colonnes desktop)*
   - Col gauche : Badge "pour entrepreneurs exigeants" · H1 "Conseil en gestion d'entreprise et organisation administrative à Troyes" · paragraphe intro · 2 boutons (primary "Me rencontrer" → /contact, ghost "Voir mes services" → /offre)
   - Col droite : placeholder image (aspect-ratio 4/5, rounded-2xl, fond stone avec initiale "HF" centrée en Fraunces 80px terracotta)
   - Animation : fadeInUp staggeré gauche puis droite

2. **ProblemSection** *(fond stone)*
   - H2 "Dirigeant indépendant, TPE : vous n'avez plus le temps de tout gérer."
   - Texte paragraphes
   - Mise en avant italic terracotta : "Mon objectif : faire de votre back-office un véritable atout stratégique."
   - Texte secondaire : "Je structure votre activité pour plus de clarté, de temps et de rentabilité."

3. **ServicesPreviewSection** *(fond cream)*
   - H2 "Le conseil en gestion d'entreprise à Troyes, un levier pour votre activité."
   - Intro + 4 cards (icône SVG + titre + description)
   - Bandeau bénéfices fond terracotta : "Gain de temps · Visibilité sur vos finances · Décisions facilitées · Moins de stress, plus d'impact"
   - CTA ghost "Voir mes services" → /offre

4. **MethodSection** *(fond blanc)*
   - H2 "Une consultante, pas une exécutante."
   - Sous-titre "Une experte de la gestion… qui parle votre langage."
   - Texte intro
   - 3 cards piliers (💡 Clarté · ⚙️ Structure · 🤝 Relation de confiance)
   - Citation : "Avec moi, vous déléguez en toute sérénité, tout en gardant le contrôle."
   - CTA ghost "En savoir plus sur mon parcours" → /qui-suis-je

5. **CtaSection** *(fond ink)*
   - H2 "Prêt à professionnaliser votre gestion sans perdre votre liberté ?"
   - Texte
   - Bouton dark (terracotta sur ink) "Réservez votre appel découverte" → /contact

---

### 7.2 Offre `/offre`

**Metadata :**
```ts
title: 'Mon Offre - Organisation Administrative Et Conseil En Gestion | Hélène Fouré'
description: 'Découvrez mes services de gestion administrative, pré-comptabilité, contrôle de gestion et accompagnement stratégique pour indépendants et TPE.'
```

**Structure :**
- **Hero court :** H1 "Ce que je fais pour vous (et surtout ce que ça change pour vous)" + badge + CTA "Planifiez un appel découverte"
- **5 blocs services** en alternance fond blanc / fond stone, chaque bloc = 2 colonnes :
  - Gauche : "Ce que je fais" (liste avec puces terracotta)
  - Droite : "Ce que ça change pour vous" (liste avec ✓ terracotta, fond légèrement coloré)
  - Services : Gestion administrative premium · Assistance comptable & pré-comptabilité · Contrôle de gestion externalisé · Organisation & optimisation · Accompagnement stratégique premium
- **HowIWorkSection :** 3 points ✔️ sur fond cream
- **PricingSection :** fond stone, centré, typographie éditoriale, texte tarifs sur devis + service express
- **Bloc bio + double CTA :** H2 + texte présentation Hélène + 2 boutons

---

### 7.3 Qui suis-je `/qui-suis-je`

**Metadata :**
```ts
title: 'Qui Suis-je ? Consultante En Gestion D\'entreprise | Hélène Fouré'
description: 'Spécialisée en conseil en gestion d\'entreprise, j\'accompagne artisans et entrepreneurs vers plus de clarté, d\'organisation et de sérénité.'
```

**Structure :**
- **Hero court :** H1 "Qui suis-je ? Hélène, consultante en gestion d'entreprise" + intro 3 lignes + placeholder photo
- **"Ce qui m'anime"** *(fond stone)* : H2 + texte style manifeste large, centré
- **Parcours** *(fond blanc)* : H2 + texte colonne gauche + ligne de temps simple droite (2 étapes : "10 ans en entreprise" → "Consultante indépendante")
- **Valeurs** *(fond cream)* : H2 "Ce que je défends. Ce que je cultive." + 5 items en grille 2-3 colonnes, chaque valeur = grande initiale terracotta en Fraunces + nom + description
- **Différenciation** *(fond ink, texte cream)* : H2 + texte
- **CTA finale** *(fond cream)* : H2 "Prêt à travailler ensemble ?" + texte + bouton primary "Prenons contact" → /contact

---

### 7.4 Contact `/contact`

**Metadata :**
```ts
title: 'Contact - Prenons Contact | Hélène Fouré'
description: 'Une question, une envie, un projet ? Contactez Hélène Fouré, consultante en gestion d\'entreprise à Troyes.'
```

**Structure :**
- **Hero court :** H1 "Prenons contact" + sous-titre "Votre organisation ne va pas s'optimiser toute seule." + texte intro
- **`<ContactIframe />`** : composant `"use client"` qui embed `NEXT_PUBLIC_CONTACT_FORM_URL` en iframe `width: 100%, height: 700px`. Si env var absente, affiche un message avec l'email direct.
- **Coordonnées :** email `contact@helene-foure.fr` + localisation Troyes Grand Est + lien Google MyBusiness

*Architecture pour V2 (semaine suivante) :* formulaire natif → Server Action `contact.ts` → insert Neon + email Resend. La structure de fichiers est créée mais non active en V1.

---

### 7.5 Blog `/articles`

**Metadata :**
```ts
title: 'Le coin des bons conseils en gestion d\'entreprise | Hélène Fouré'
description: 'Conseils pratiques en gestion administrative, comptabilité et organisation pour artisans, indépendants et dirigeants de TPE.'
```

**Structure listing :**
- Hero court : H1 + intro "administratif, gestion et organisation… sans jargon compliqué"
- Grille d'articles (2 cols desktop, 1 mobile) : card avec titre, date formatée FR, extrait, lien "Lire →"

**Structure article `/articles/[slug]`:**
- Breadcrumb minimal
- H1 (titre article)
- Date + tag catégorie
- Corps de l'article (rendu depuis `content/articles.ts`, HTML structuré)
- CTA de fin → /contact
- Lien retour liste

**6 articles dans `content/articles.ts` :**

| Slug | Titre | Date |
|---|---|---|
| `conseil-gestion-entreprise-organisation-administrative-troyes` | Conseil en gestion d'entreprise et organisation administrative à Troyes et ailleurs : pourquoi se faire accompagner | 2026-01-22 |
| `micro-entreprise-obligations-administratives` | Micro-entreprise : vos obligations administratives essentielles | 2026-01-20 |
| `tableau-de-bord-petite-entreprise` | Tableau de bord : l'outil indispensable pour piloter votre petite entreprise | 2026-01-15 |
| `comment-suivre-tresorerie-entrepreneur` | Comment suivre sa trésorerie simplement quand on est entrepreneur | 2026-01-13 |
| `erreurs-gestion-independants` | Les erreurs de gestion les plus courantes chez les indépendants (et comment les éviter) | 2026-01-08 |
| `organisation-administrative-artisan` | Comment organiser simplement l'administratif quand on est artisan ? | 2026-01-06 |

Chaque entrée dans `content/articles.ts` = `{ slug, title, date, excerpt, body: string }` où `body` est du Markdown (template literal). Rendu dans `[slug]/page.tsx` via la lib `marked` (2 KB, SSR) → `dangerouslySetInnerHTML`. Pas de MDX, pas de CMS.

---

### 7.6 Boîte à outils `/boite-a-outils`

**Metadata :**
```ts
title: 'Outils De Gestion D\'entreprise – Boîte à Outils Pour Entrepreneurs | Hélène Fouré'
description: 'Outils de gestion d\'entreprise, conseils concrets et applicables pour entrepreneurs, artisans et indépendants.'
```

**Structure :**
- Hero : H1 + intro "un espace dédié aux outils de gestion d'entreprise, pensé pour accompagner les entrepreneurs..."
- Objectifs (4 points) : Gagner du temps · Éviter les erreurs courantes · Obtenir plus de clarté · Se concentrer sur le cœur de métier
- Article mis en avant : "Les 7 Pièges à Éviter pour Réussir Votre Aventure Artisanale" (card avec intro et CTA)
- Bandeau "à venir" : d'autres ressources arrivent bientôt

---

### 7.7 Mentions légales `/mentions-legales`

Gabarit standard FR à compléter par Hélène :
- Éditeur du site (nom, statut, SIRET, adresse)
- Directeur de publication
- Hébergeur (Vercel Inc.)
- Propriété intellectuelle
- Données personnelles

---

### 7.8 Politique de confidentialité `/politique-confidentialite`

Gabarit RGPD standard FR :
- Responsable du traitement
- Données collectées (formulaire de contact)
- Finalités et base légale
- Durée de conservation
- Droits des personnes (accès, rectification, effacement)
- Contact DPO / réclamation CNIL

---

## 8. SEO

### Metadata par page (résumé)

```ts
// layout.tsx — metadata de base
metadataBase: new URL('https://www.helene-foure.fr')
openGraph: { locale: 'fr_FR', type: 'website', siteName: 'Hélène Fouré' }
twitter:    { card: 'summary_large_image' }
```

Canonical automatique par page via `alternates.canonical`.

### sitemap.ts

Exporte toutes les URLs statiques + slugs articles.

### robots.ts

Allow all, disallow `/api/`, sitemap pointé.

### JSON-LD

Dans `layout.tsx` :
```json
{
  "@type": ["LocalBusiness", "Person"],
  "name": "Hélène Fouré",
  "jobTitle": "Consultante en gestion d'entreprise",
  "address": { "addressLocality": "Troyes", "addressRegion": "Grand Est", "addressCountry": "FR" },
  "url": "https://www.helene-foure.fr",
  "email": "contact@helene-foure.fr"
}
```

### Redirections 301

Dans `next.config.ts` :
```
/mon_offre/  →  /offre
/contact/    →  /contact   (même URL, pas de redirect nécessaire)
/qui-suis-je → /qui-suis-je (même, conservé)
```

---

## 9. Backend (V2 — semaine suivante)

Créer les fichiers en V1 mais non connectés :

**`db/schema.ts`**
```ts
export const contactSubmissions = pgTable('contact_submissions', {
  id:        serial('id').primaryKey(),
  name:      varchar('name', { length: 100 }).notNull(),
  email:     varchar('email', { length: 255 }).notNull(),
  message:   text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})
```

**`actions/contact.ts`** — Server Action (skeleton commenté, activé en V2)

**`lib/resend.ts`** — Client Resend (skeleton)

---

## 10. Accessibilité

- Toutes les images ont un `alt` descriptif (ou `alt=""` si décoratif)
- Focus visible sur tous les éléments interactifs (`ring-2 ring-terracotta ring-offset-2`)
- Aria-labels sur le hamburger et le drawer de navigation
- Contraste WCAG AA vérifié : texte ink sur cream ✓, cream sur terracotta ✓
- Balises sémantiques : `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`

---

## 11. Responsive

Mobile-first. Breakpoints Tailwind standards :
- `sm` (640px) : grilles 2 colonnes
- `lg` (1024px) : layouts desktop, hero 2 colonnes
- Nav mobile : hamburger → drawer

---

## 12. Déploiement

- Vercel (auto-deploy sur `main`)
- Variables d'env configurées dans le dashboard Vercel
- Domaine : `helene-foure.fr` → pointer vers Vercel DNS
