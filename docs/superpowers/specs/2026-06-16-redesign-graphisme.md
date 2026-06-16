# Spec — Refonte graphique site Hélène Fouré

**Date :** 2026-06-16  
**Statut :** Validé pour implémentation  
**Contexte :** Remplacement de la palette cream+terracotta+stone (trop générique/IA) par la vraie identité visuelle d'Hélène Fouré : marine profond + rose vif, typographie display bold, layout éditorial.

---

## 1. Système de design

### 1.1 Palette (tokens Tailwind)

```js
colors: {
  navy:        '#12163A',  // fond hero, sections sombres, texte principal sur blanc
  'navy-light': '#1E2448', // surfaces marines secondaires, hover
  rose:        '#E8447A',  // accent vif, CTAs, mots surlignés, section CTA
  'rose-pale': '#FDE8EF',  // fond sections très claires, chiffres décoratifs
  'off-white': '#F8F7F4',  // fond sections claires (remplace cream)
  white:       '#FFFFFF',  // texte sur fond marine, fond contenu
  slate:       '#64748B',  // texte secondaire (remplace muted)
}
```

**Tokens supprimés :** cream, ink, terracotta, terracotta-light, stone, muted.  
**Règle d'usage :**
- `navy` : hero, sections foncées, footer, header au scroll
- `rose` : uniquement pour les accents, CTAs, 1 mot par titre max, et la CtaSection (fond entier)
- `off-white` : sections claires (ProblemSection, alternances)
- `white` : fond body par défaut, pages articles/légales

### 1.2 Typographie

| Rôle | Police | Poids | Usage |
|---|---|---|---|
| Display (titres) | Bricolage Grotesque | 700–800 | H1, H2, numéros décoratifs |
| Corps | DM Sans | 400–500 | Body, nav, labels, boutons |
| Émotionnel | Fraunces italic | 400 | Citations, tagline uniquement |

**Chargement :** next/font/google — `Bricolage_Grotesque` (subsets: latin, variable), `DM_Sans` (déjà présent), `Fraunces` (déjà présent).

**Variable CSS :** `--font-bricolage`

**Tailles clés :**
- H1 hero : `clamp(3.5rem, 8vw, 6.5rem)` (via classe Tailwind custom ou `text-[clamp(...)]`)
- H2 sections : `text-4xl lg:text-5xl`
- Label section : `text-xs uppercase tracking-widest text-rose`
- Corps : `text-base lg:text-lg`

**Règle Fraunces :** uniquement pour les citations (`<blockquote>`) et le tagline "Je structure, tu respires." — jamais comme H1/H2.

### 1.3 Composants UI

**Button**
- `rounded-none` (coins droits)
- Padding : `px-8 py-4`
- Texte : `text-xs uppercase tracking-widest font-medium`
- Variante `primary` (sur fond marine) : `bg-rose text-white hover:bg-rose/90`
- Variante `ghost` (sur fond marine) : `border border-white text-white hover:bg-white/10`
- Variante `outline` (sur fond clair) : `border border-navy text-navy hover:bg-navy hover:text-white`
- Pas de `hover:scale-105`

**Badge**
- Supprimé. Remplacé par : `<span className="text-xs uppercase tracking-widest text-rose font-medium">`

**Card**
- Restyled : `rounded-none`, `border border-navy/10`, `bg-white`, pas de shadow. Conservée pour les pages qui l'utilisent directement (ex: `/boite-a-outils`). Les sections principales (ServicesPreview, Method, Values) n'en utilisent plus.

---

## 2. Mise en page des sections

### Header
- Transparent au top de page (texte blanc)
- Au scroll (>10px) : `bg-navy/95 backdrop-blur-sm border-b border-white/10`
- Logo : "Hélène Fouré" en Bricolage Grotesque, blanc
- CTA "Réserver un appel" : bouton `primary` (rose)

### HeroSection
- Fond : `navy`
- Titre H1 : Bricolage Grotesque 800, blanc, très grand. Maximum 2 lignes. Le mot "gestion" coloré en `rose`.
- Sous-titre : DM Sans, blanc/70%, max 2 lignes
- Boutons : `primary` (rose) + `ghost` (outline blanc), côte à côte
- Image placeholder : initiales "HF" en Bricolage Grotesque très grand, fond `navy-light`, pas d'arrondi (`rounded-none`), décalé légèrement à droite
- Pas de Badge, remplacé par label `text-xs uppercase rose` au-dessus du H1

### ProblemSection
- Fond : `off-white`
- H2 en Bricolage Grotesque, `navy`
- Corps en DM Sans, `slate`
- Citation/accroche : Fraunces italic, `rose`, grand (`text-2xl`)
- Pas de card, juste du texte qui respire, max-w-3xl centré

### ServicesPreviewSection
- Fond : `white`
- H2 en Bricolage Grotesque, `navy`
- 4 services en liste numérotée verticale ou grille 2 colonnes desktop :
  - Numéro décoratif (`01`, `02`…) en Bricolage Grotesque, très grand (~6rem), couleur `rose-pale`, en absolute derrière le contenu
  - Titre service en Bricolage Grotesque medium, `navy`
  - Description en DM Sans, `slate`
  - Séparateur : ligne fine `border-t border-navy/10`
- CTA : lien texte "Voir mes services →" en `rose`, pas de bouton

### MethodSection
- Fond : `navy`
- H2 en Bricolage Grotesque, `white`
- 3 piliers en layout horizontal (colonnes) sur desktop, vertical sur mobile
  - Grand numéro (`01`, `02`, `03`) en Bricolage, blanc/20%
  - Titre pilier en Bricolage, blanc
  - Description en DM Sans, blanc/70%
  - Pas de card, séparateur vertical `border-l border-white/10` entre colonnes
- Citation Fraunces italic, `rose`

### CtaSection
- Fond : `rose` (fond entier — signature visuelle forte)
- H2 en Bricolage Grotesque, `navy`
- Texte en DM Sans, `navy/80`
- Bouton `outline` (`border-navy text-navy hover:bg-navy hover:text-white`)

### Footer
- Fond : `navy` (inchangé dans la structure, juste les couleurs mises à jour)
- Texte : blanc, blanc/60% pour les liens secondaires
- Accent : `rose` pour les liens hover

---

## 3. Animations

### Règle générale
Supprimer tous les `fadeInUp` (y: 20 → 0). Remplacer par :

**Fade simple :**
```ts
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: 'easeOut' },
}
```

**Reveal titre hero (clip vertical) :**
```ts
// Wrapper overflow-hidden + enfant translateY
const revealContainer = { overflow: 'hidden' }
const revealText = {
  initial: { y: '100%' },
  animate: { y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }, // easeOutExpo custom
}
// Appliqué mot par mot ou ligne par ligne sur le H1 hero
// Désactivé sur mobile (prefers-reduced-motion ou breakpoint)
```

**Ligne d'extension (séparateurs) :**
```ts
const lineReveal = {
  initial: { scaleX: 0 },
  whileInView: { scaleX: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
  style: { transformOrigin: 'left' },
}
```

**whileInView :** `once={true}`, `viewport={{ amount: 0.2 }}` — conservé.

---

## 4. Fichiers à modifier

### Nouveaux fichiers / modifications majeures
| Fichier | Action |
|---|---|
| `tailwind.config.ts` | Remplacer palette entière |
| `src/lib/fonts.ts` | Ajouter `Bricolage_Grotesque`, exporter `bricolageGrotesk` |
| `src/app/layout.tsx` | Ajouter variable `--font-bricolage`, mettre à jour body className |
| `src/app/globals.css` | Mettre à jour base styles (body bg white, font-sans) |
| `src/components/ui/Button.tsx` | Refonte complète (rounded-none, uppercase, 3 variantes) |
| `src/components/ui/Badge.tsx` | Supprimer ou transformer en span label |
| `src/components/ui/Card.tsx` | Supprimer (plus utilisée) |
| `src/components/layout/Header.tsx` | Couleurs navy + logo blanc |
| `src/components/layout/Footer.tsx` | Couleurs navy mises à jour |
| `src/components/layout/MobileNav.tsx` | Fond navy, texte blanc |
| `src/components/sections/HeroSection.tsx` | Refonte complète (navy, reveal animation, layout) |
| `src/components/sections/ProblemSection.tsx` | Couleurs off-white/navy/rose |
| `src/components/sections/ServicesPreviewSection.tsx` | Layout liste numérotée, supprimer cards |
| `src/components/sections/MethodSection.tsx` | Fond navy, piliers sans cards |
| `src/components/sections/CtaSection.tsx` | Fond rose, texte navy |
| `src/components/sections/ServicesList.tsx` | Couleurs mises à jour (navy, rose) |
| `src/components/sections/HowIWorkSection.tsx` | Couleurs mises à jour |
| `src/components/sections/PricingSection.tsx` | Couleurs mises à jour |
| `src/components/sections/AboutHeroSection.tsx` | Couleurs mises à jour |
| `src/components/sections/ValuesSection.tsx` | Supprimer cards, layout grille simple |
| `src/components/sections/DiffSection.tsx` | Couleurs mises à jour |

### Fichiers inchangés
`next.config.ts`, `src/content/*`, `src/db/*`, `src/actions/*`, `src/lib/resend.ts`, toutes les pages (`src/app/*/page.tsx`), `src/app/sitemap.ts`, `src/app/robots.ts`.

---

## 5. Contraintes

- Pas de nouvelle dépendance npm (Bricolage Grotesque est sur Google Fonts → next/font)
- Accessibilité : contraste WCAG AA — blanc sur `navy` ✓, `navy` sur `rose-pale` à vérifier, `navy` sur `white` ✓
- Le build doit passer sans erreur TypeScript
- Mobile-first conservé, breakpoints Tailwind inchangés
