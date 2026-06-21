import rss from '@astrojs/rss';
import { SITE } from '../consts';

export async function GET(context) {
  // No blog collection in pahchinsan-developer (focus is IT services only).
  // Creative writing lives on the separate Another Waltz site.
  return rss({
    title: `${SITE.name}`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: [],
    customData: `<language>id-id</language>`,
  });
}
