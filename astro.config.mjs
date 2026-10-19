import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Published at the root of a user site on GitHub Pages, so no base path is needed.
export default defineConfig({
  site: 'https://cubahiropro.github.io',
  integrations: [sitemap({ filter: (page) => !page.includes('/404'), i18n: { defaultLocale: 'en', locales: { en: 'en', fr: 'fr' } } })],
});
