# Deploy PahchinSan Developer

This site is built as a static Astro site. Three deployment options below — pick one.

---

## Option A — Vercel Dashboard (easiest, ~5 menit)

1. Buka https://vercel.com/new
2. Sign in pakai GitHub
3. Click **"Import Git Repository"**
4. Pilih `afiqandico13/pahchinsan-developer`
5. Framework preset: **Astro** (auto-detected)
6. Build command: `npm run build` (default)
7. Output directory: `dist` (default)
8. Click **Deploy**
9. Tunggu ~1 menit → dapet URL `pahchinsan-developer-xxx.vercel.app`
10. (Optional) Settings → Domains → add `pahchinsan-developer.vercel.app`

**Cost**: Free tier cukup. 100 GB bandwidth/bulan, lebih dari cukup untuk portfolio.

---

## Option B — Vercel CLI (kalau mau automate)

### Setup sekali:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login (akan buka browser)
vercel login

# Verifikasi
vercel whoami
```

### Deploy tiap kali:

```bash
cd "C:\Users\Afiq Andico\Projects\pahchinsan-developer"
vercel                    # preview deploy (test)
vercel --prod             # production deploy
```

Atau kalau mau full automation, simpan token di `~/.hermes/.env`:

```bash
echo 'VERCEL_TOKEN=xxx' >> ~/.hermes/.env
```

Token didapat dari: https://vercel.com/account/tokens → Create Token, scope Full Account.

---

## Option C — Netlify (alternative)

Sudah ada `netlify.toml` di repo. Tinggal:

1. Buka https://app.netlify.com/start
2. Connect to `afiqandico13/pahchinsan-developer`
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

---

## Option D — GitHub Pages (free, ada limitasi)

```bash
# 1. Tambahkan .github/workflows/deploy.yml
# (sudah include konfigurasi Astro di official docs)
# 2. Settings → Pages → Source: GitHub Actions
# 3. Push → auto-deploy ke https://afiqandico13.github.io/pahchinsan-developer
```

Note: GitHub Pages gak support custom domain `.dev` dengan HTTPS otomatis tanpa extra setup.

---

## Custom Domain Setup (Vercel + pahchinsan-developer.vercel.app)

1. Beli domain di Namecheap / Cloudflare / Porkbun (~Rp 250K/tahun untuk `.dev`)
2. Di Vercel → Settings → Domains → add `pahchinsan-developer.vercel.app`
3. Copy DNS records yang Vercel kasih (biasanya `A` record atau `CNAME`)
4. Paste di DNS settings registrar kamu
5. Tunggu propagasi (5-30 menit)
6. SSL auto-issue oleh Vercel

---

## Environment Variables

Untuk form kontak live (Formspree):

1. Daftar di https://formspree.io (free tier 50 submission/bulan)
2. Create form baru
3. Copy form ID (misal `xpzgkvwq`)
4. Set environment variable di Vercel: `FORMSPREE_ID=xpzgkvwq`
5. Update `src/pages/contact.astro` — ganti `your-form-id` dengan `xpzgkvwq`

---

## Post-Deploy Checklist

Setelah deploy sukses:

- [ ] Test semua halaman di production URL
- [ ] Test form kontak (kalau Formspree sudah setup)
- [ ] Test pricing calculator (should work standalone)
- [ ] Test taskflow demo (should work standalone)
- [ ] Test blog [slug] pages
- [ ] Test /art/ page (SVG paintings)
- [ ] Setup custom domain (kalau ada)
- [ ] Update sitemap.xml (auto by @astrojs/sitemap)
- [ ] Submit sitemap ke Google Search Console (https://search.google.com/search-console)
- [ ] Tambah OG image custom (1200x630 PNG) — replace `public/og-default.svg`

---

## Troubleshooting

**Build fails**: Cek logs di Vercel. Biasanya karena `@astrojs/sitemap` version conflict (pakai `3.2.1` exact).

**CSS gak muncul**: Hard refresh `Ctrl+Shift+R`. Atau cek Network tab — pastikan `_astro/*.css` ke-load.

**Dark theme gak muncul**: Browser cache. Clear site data atau `Cmd+Shift+R`.

**404 di sub-page**: Vercel static deploy handle ini otomatis. Kalau tetap 404, cek `vercel.json` (sudah include clean URLs).

**Images broken**: Cek path. Astro static = `public/` di-copy ke `dist/` root. Reference: `/art/anger-of-the-sun.svg`.
