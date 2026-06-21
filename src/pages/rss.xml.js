import rss from '@astrojs/rss';
import { SITE } from '../consts';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  return rss({
    title: `${SITE.name} — Catatan`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id.replace(/\.md$/, '')}/`,
      categories: post.data.tags,
      author: post.data.author,
    })),
    customData: `<language>id-id</language>`,
  });
}
