// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages user site: served from the domain root, so no `base` path.
const SITE_URL = 'https://sangyoon-lee-aerospace.github.io';

// Pages that exist for local review but are not published to search engines.
// Keep in sync with `src/data/site.ts` (`isPagePublic`).
const UNLISTED = ['/404', '/teaching/', '/en/teaching/'];

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) => !UNLISTED.some((path) => new URL(page).pathname.startsWith(path)),
      // Korean at /, English at /en/ (see src/i18n/ui.ts).
      i18n: {
        defaultLocale: 'ko',
        locales: { ko: 'ko', en: 'en' },
      },
    }),
  ],
});
