import { defineConfig } from '@playwright/test';

const environment = process.env.TEST_ENV || 'production';
const baseURL =
  process.env.BASE_URL ||
  (environment === 'local'
    ? 'http://127.0.0.1:4321'
    : 'https://friseur-citak-demo.geraldhe21.workers.dev');
const executablePath = process.env.PLAYWRIGHT_EXECUTABLE_PATH;
const reportStem = `audits/playwright/${environment}`;

export default defineConfig({
  testDir: './tests',
  timeout: 45000,
  retries: 0,
  workers: 2,
  metadata: {
    generatedAt: new Date().toISOString(),
    environment,
    baseURL,
  },
  reporter: [
    ['line'],
    ['json', { outputFile: `${reportStem}-results.json` }],
    ['junit', { outputFile: `${reportStem}-junit.xml` }],
  ],
  use: {
    baseURL,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    launchOptions: executablePath
      ? {
          executablePath,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
        }
      : undefined,
  },
  projects: [{ name: 'chromium', use: { viewport: { width: 1440, height: 900 } } }],
  webServer:
    environment === 'local'
      ? {
          command: 'npm run build && npm run preview -- --host 127.0.0.1',
          url: baseURL,
          reuseExistingServer: true,
          timeout: 120_000,
        }
      : undefined,
});
