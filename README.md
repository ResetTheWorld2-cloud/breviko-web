# BREVIKO v2

Marketing-Site für BREVIKO — Apps, Websites & KI aus Bad Salzuflen.
Inspiriert vom Huly.io Audit. Gebaut mit Astro 5 + Tailwind 4.

## Stack

- **Astro 5** (Static Site, kein Hydration overhead)
- **Tailwind CSS 4** (CSS-First Config in `src/styles/global.css`)
- **JetBrains Mono Variable** + **Inter Variable** (self-hosted via Fontsource)
- **TypeScript strict**
- **Intersection Observer** für Reveal-on-Scroll (kein Framer Motion)
- **Schema.org JSON-LD** für SEO
- **`prefers-reduced-motion`** respektiert (was Huly NICHT macht!)

## Design-Prinzipien (aus Lean-UX-Master + Huly Audit)

1. **Mono-Display für Headlines** = einzigartiges Wiedererkennungsmerkmal
2. **Negative letter-spacing IMMER** (-0.025 bis -0.04 em)
3. **Line-height 0.9 für Headlines** = sehr kompakt, modern
4. **Font-weight max 600** (nie 700+) = elegant statt aggressiv
5. **Monochromatic + 1 Akzentfarbe** (Coral/Warm)
6. **Theme-Bruch in der Mitte** (#111111 für Warum-Section)
7. **Container 1280px, Padding 32px**
8. **Sticky Header mit Backdrop-Blur** (besser als Hulys absolute Header)
9. **Reveal-on-Scroll via IO** (keine externe Animation-Lib)
10. **Reduced Motion respektiert**

## Setup

```bash
npm install
npm run dev      # Dev-Server auf http://localhost:4321
npm run build    # Production Build → dist/
npm run preview  # Preview des Builds
```

## Struktur

```
breviko-v2/
├── astro.config.mjs        # Astro + Tailwind 4 vite plugin
├── tsconfig.json            # Strict TS + path aliases
├── package.json
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── styles/
    │   └── global.css       # Design Tokens, Glow-Button CSS, Reveal
    ├── layouts/
    │   └── Layout.astro     # HTML, Meta, Schema.org, Reveal-Script
    ├── components/
    │   ├── Header.astro     # Sticky mit Backdrop-Blur
    │   ├── Footer.astro     # Minimal
    │   ├── ui/
    │   │   └── GlowButton.astro    # 3-Layer Signature Glow CTA
    │   └── sections/
    │       ├── HeroSection.astro
    │       ├── PainPointsSection.astro
    │       ├── LeistungenSection.astro
    │       ├── WarumBrevikoSection.astro
    │       ├── ProjekteSection.astro
    │       ├── VersprechenSection.astro
    │       ├── UeberSection.astro
    │       └── KontaktSection.astro
    └── pages/
        └── index.astro      # Page that ties all sections together
```

## Inhalte (8 Sektionen)

| # | Section | Headline |
|---|---|---|
| 1 | Hero | Keine Zeit für Papierkram? Gut so. |
| 2 | Pain Points | Dein Geschäft läuft. Aber du läufst hinterher. |
| 3 | Leistungen | Was dein Geschäft wirklich braucht. |
| 4 | Warum BREVIKO | Alles aus einer Hand. |
| 5 | Projekte | Gebaut aus Neugier. Geblieben weil's funktioniert. |
| 6 | Versprechen | Vier Dinge, die wir anders machen. |
| 7 | Über uns | Kein Großraumbüro. Trotzdem großartige Ergebnisse. |
| 8 | Kontakt | App, Website, KI-Agent? Einfach schreiben. |

## TODO

- [ ] Open Graph Image (`/og-image.jpg`) generieren
- [ ] Apple Touch Icon (`/apple-touch-icon.png`)
- [ ] Plausible Analytics einbauen
- [ ] Impressum + Datenschutz Seiten
- [ ] Mobile Menu Toggle (JS Logic)
- [ ] Lighthouse Audit + Performance Budget
- [ ] axe-core A11y Test
- [ ] Deployment auf Vercel/Netlify
