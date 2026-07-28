import { defineConfig } from '@playwright/test';

// BASE_URL: por defecto producción; para local: BASE_URL=http://localhost:4321
export default defineConfig({
  testDir: './tests',
  timeout: 45000,
  retries: 0,
  workers: 2,
  use: {
    baseURL: process.env.BASE_URL || 'https://friseur-citak-demo.geraldhe21.workers.dev',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
    { name: 'mobile', use: { viewport: { width: 390, height: 844 }, hasTouch: true } },
  ],
});
