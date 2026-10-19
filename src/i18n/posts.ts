import { getCollection } from 'astro:content';
import type { Lang } from './index';

/** Blog posts in one language, newest first. Posts live in src/content/blog/<lang>/<slug>.md */
export async function getPosts(lang: Lang) {
  const all = await getCollection('blog');
  return all
    .filter((p) => p.id.startsWith(`${lang}/`))
    .map((p) => ({ ...p, slug: p.id.slice(lang.length + 1) }))
    .sort((a, b) => +b.data.date - +a.data.date);
}
