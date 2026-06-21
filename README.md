# PahchinSan Developer

> **Web, App, ML & Data Science Studio.** Portfolio + studio toolkit by Afiq Andico (Pahchin / Ruby).

A unified personal site combining portfolio, live demos, and client-facing studio toolkit.

🌐 **Live**: [pahchinsan.vercel.app](https://pahchinsan.vercel.app) (setelah deploy)
📦 **Repo**: github.com/afiqandico13/pahchinsan-developer

---

## What's inside

This site unifies several previous projects into one cohesive brand experience:

| Section | Path | Source |
|---|---|---|
| **Home** | `/` | Terminal-style hero + tech stack + featured work |
| **Work** | `/work/` | 8 projects across Web/App, Data/ML, Research, Creative |
| **Demos** | `/demos/` | Live demo embeds (Taskflow SPA, Pricing Calculator) |
| **Studio** | `/studio/` | Services + pricing + downloadable templates (brief/agreement/proposal) |
| **Blog** | `/blog/` | 6 writing pieces — mix of tech, art, and reflections |
| **About** | `/about/` | Bio, pengalaman, sertifikasi, penelitian, aliases |
| **Contact** | `/contact/` | Form + direct channels |

**Live demos** (`/demos/`):
- `taskflow-demo-app.html` (30 KB) — single-file React 18 task management
- `pricing-calculator.html` (43 KB) — interactive pricing tool (offline-capable)

**Studio templates** (`/studio/`):
- `brief.md` (6 KB) — client questionnaire
- `service-agreement.md` (10 KB) — 11-Pasal contract
- `proposal.md` (11 KB) — penawaran template

---

## Stack

- **Framework**: [Astro 4](https://astro.build) (static-first, SEO-friendly)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com) + [daisyUI 4](https://daisyui.com) (custom `pahchin` dark theme)
- **Fonts**: JetBrains Mono (display/code) + Inter (body)
- **Typography**: mono-forward, dev-aesthetic
- **Content**: Markdown via Astro Content Collections
- **CMS-ready**: includes Decap CMS config (commented for client projects)
- **Hosting**: Vercel / Netlify (both supported via `vercel.json` + `netlify.toml`)

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # ./dist (459 KB static)
npm run preview
```

---

## Brand identity

- **Name**: PahchinSan Developer
- **Tag**: `pahchinsan.dev`
- **Voice**: engineering-precise, warm, no-bullshit
- **Theme**: dark by default (`#0B0E14` base, `#7C9CFF` accent, `#5EEAD4` secondary)
- **Aliases** (same person): Pahchin, PahchinSan (tech) · Ruby Rubhin (seni) · AFuckingCo (foto) · Pilgrim's Records (label musik)

The user `Afiq Andico` goes by Pahchin in tech contexts. Ruby Rubhin is the creative alias. Both are the same person — see `/about/#aliases` for full disclosure.

---

## Source projects consolidated

This site replaces and unifies:

1. **another-waltz-portfolio** (now archived as creative side of this site)
2. **portfolio-template-starter** (reusable template, also in this repo's structure)
3. **portfolio-service-tools** (calculator + templates → `/studio/` + `/demos/`)
4. **pahvhin.dev** (original single-file HTML concept → integrated as design language)

Old repos stay on GitHub for historical reference.

---

## Customization

For new client projects, fork this repo and:

1. Edit `src/consts.ts` — site name, branding, social links
2. Edit `tailwind.config.mjs` — adjust `pahchin` theme palette
3. Replace `src/content/blog/` with client content
4. Update `src/pages/work.astro` project list
5. Configure Decap CMS in `public/admin/config.yml` (uncomment your backend choice)
6. Update Formspree ID in `src/pages/contact.astro`
7. Deploy via Vercel/Netlify

See `/studio/brief.md` and `/studio/proposal.md` for client onboarding flow.

---

## License

Personal portfolio — all rights reserved by Afiq Andico (Pahchin).

For client work derived from this template: contact first.
