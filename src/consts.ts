// Site-wide constants — single source of truth.
// Brand: PahchinSan Developer. Studio by Afiq Andico (Pahchin / Ruby Rubhin).

export const SITE = {
  name: 'PahchinSan Developer',
  brandShort: 'PahchinSan',
  brandTag: 'pahchinsan.dev',
  tagline: 'Web, App, ML & Data Science Studio.',
  description:
    'PahchinSan Developer — studio kecil di Bali yang membangun website, aplikasi, model machine learning, dan pipeline data. engineering rapi, eksekusi terukur.',
  url: 'https://pahchinsan.vercel.app',
  locale: 'id_ID',
  ogImage: '/og-default.svg',
  author: 'Pahchin San',
  fullName: 'Afiq Andico Pangimpian',
  aliases: ['Pahchin', 'PahchinSan', 'Ruby', 'Ruby Rubhin'],
  bornPlace: 'Situbondo, Jawa Timur',
  livePlace: 'Denpasar Utara, Bali',
  email: 'afiqandico13@gmail.com',
  whatsapp: '08990308936',
  founded: 2019,
  motto: 'Code with intent. Ship with confidence.',
} as const;

export const SOCIAL = [
  { name: 'GitHub',  handle: '@afiqandico13', url: 'https://github.com/afiqandico13' },
  { name: 'Instagram — Pahchin',     handle: '@pahchin',     url: 'https://instagram.com/pahchin' },
  { name: 'Instagram — Another Waltz', handle: '@anotherwaltz', url: 'https://instagram.com/anotherwaltz' },
  { name: 'Instagram — Pilgrim\u2019s Records', handle: '@pilgrims.records', url: 'https://instagram.com/pilgrims.records' },
  { name: 'Linktree', handle: 'linktr.ee/anotherwaltz', url: 'https://linktr.ee/anotherwaltz' },
  { name: 'WhatsApp', handle: '+62 899 0308 936', url: 'https://wa.me/628990308936' },
] as const;

export const NAV = [
  { href: '/',           label: 'Home' },
  { href: '/work/',      label: 'Work' },
  { href: '/demos/',     label: 'Demos' },
  { href: '/studio/',    label: 'Studio' },
  { href: '/blog/',      label: 'Blog' },
  { href: '/about/',     label: 'About' },
  { href: '/contact/',   label: 'Contact' },
] as const;

// Tech stack — what PahchinSan builds with
export const TECH_STACK = [
  { group: 'Frontend', items: ['Astro', 'Next.js', 'Vue', 'Tailwind CSS', 'daisyUI', 'TypeScript'] },
  { group: 'Backend',  items: ['Node.js', 'Python (Flask/FastAPI)', 'PHP', 'REST API', 'WebSocket'] },
  { group: 'Data / ML', items: ['Python', 'scikit-learn', 'Orange Data Mining', 'Pandas', 'NumPy'] },
  { group: 'Tools',    items: ['Git', 'Docker', 'VSCode', 'WSL', 'Vercel', 'Netlify'] },
] as const;
