// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://friseur-citak-demo.geraldhe21.workers.dev',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
