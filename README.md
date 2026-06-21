# PahchinSan Developer

> **Web, App, ML & Data Science Studio.** Portfolio + studio toolkit by Afiq Andico (Pahchin).

A clean, IT-services-focused site. Pure dev/IT work — no creative content (that lives at **[anotherwaltz.id](https://github.com/afiqandico13/anotherwaltz-site)**).

🌐 **Live**: [pahchinsan.dev](https://github.com/afiqandico13/pahchinsan-developer) (setelah deploy)

---

## What's inside

| Section | Path | Notes |
|---|---|---|
| **Home** | `/` | Terminal-style hero + tech stack + featured projects + CTA |
| **Work** | `/work/` | Projects across Web/App, Data/ML, Research (filter JS) |
| **Demos** | `/demos/` | Live demo embeds (Taskflow SPA + Pricing Calculator) |
| **Studio** | `/studio/` | Services + pricing + downloadable templates |
| **About** | `/about/` | Bio, pengalaman, sertifikasi, penelitian + IT scope |
| **Contact** | `/contact/` | Form (Formspree-ready) + direct channels |
| `/taskflow-demo-app.html` | Standalone React SPA, 30 KB |
| `/pricing-calculator.html` | Interactive calculator, 43 KB |
| `/studio/brief.md`, `service-agreement.md`, `proposal.md` | Downloadable templates |

**7 pages total** (was 15 — creative content removed, focused on IT services only).

---

## Brand & Identity

**PahchinSan Developer** = IT services brand. One of 3 identities of Afiq Andico Pangimpian:

| Identity | Domain | GitHub |
|---|---|---|
| **Afiq Andico Pangimpian** (personal) | CV, kerja, research | [github.com/afiqandico13](https://github.com/afiqandico13) |
| **PahchinSan Developer** (IT services) | Freelance, web/app/ML | [github.com/afiqandico13/pahchinsan-developer](https://github.com/afiqandico13/pahchinsan-developer) |
| **Another Waltz** (art collective) | Pameran, musik, lukis | [github.com/anotherwaltz/anotherwaltz-site](https://github.com/afiqandico13/anotherwaltz-site) |

See `/about/` page on this site for the relationship.

---

## Stack

- **Framework**: [Astro 4](https://astro.build) (static-first)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com) + [daisyUI 4](https://daisyui.com) — custom `dark` theme
- **Fonts**: JetBrains Mono (display) + Inter (body)
- **Hosting**: Vercel / Netlify / GitHub Pages (3 options in DEPLOY.md)

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # ./dist
npm run preview
```

See `DEPLOY.md` for production deploy options.

---

## Customization

For new client projects, fork this repo and:
1. Edit `src/consts.ts` — site name, branding, social links
2. Edit `tailwind.config.mjs` — adjust color palette
3. Replace content in `src/pages/` with client content
4. Update Formspree ID in `src/pages/contact.astro`
5. Deploy

---

## License

MIT — see [LICENSE](./LICENSE).
