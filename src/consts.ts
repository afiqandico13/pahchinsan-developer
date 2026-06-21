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
  author: 'Pahchin',
  fullName: 'Afiq Andico Pangimpian',
  role: 'IT Support @ Cube Cafe Jimbaran',
  bornPlace: 'Situbondo, Jawa Timur',
  livePlace: 'Denpasar Utara, Bali',
  email: 'afiqandico13@gmail.com',
  whatsapp: '08990308936',
  founded: 2024,
  motto: 'Code with intent. Ship with confidence.',
} as const;

export const SOCIAL = [
  { name: 'GitHub',  handle: '@pahchinsan', url: 'https://github.com/pahchinsan' },
  { name: 'GitHub (personal)', handle: '@afiqandico13', url: 'https://github.com/afiqandico13' },
  { name: 'LinkedIn', handle: 'Afiq Andico', url: 'https://linkedin.com/in/afiqandico' },
  { name: 'Instagram', handle: '@pahchin.dev', url: 'https://instagram.com/pahchin.dev' },
  { name: 'WhatsApp', handle: '+62 899 0308 936', url: 'https://wa.me/628990308936' },
  { name: 'Email', handle: 'afiqandico13@gmail.com', url: 'mailto:afiqandico13@gmail.com' },
] as const;

export const NAV = [
  { href: '/',           label: 'Home' },
  { href: '/work/',      label: 'Work' },
  { href: '/demos/',     label: 'Demos' },
  { href: '/studio/',    label: 'Studio' },
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
