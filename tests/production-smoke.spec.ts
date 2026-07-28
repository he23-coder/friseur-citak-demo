import { test, expect } from '@playwright/test';

// Smoke-Tests gegen die jeweilige baseURL (Produktion oder lokaler Build)
const routes = [
  '/', '/leistungen/', '/leistungen/damenhaarschnitt/', '/leistungen/herrenhaarschnitt/',
  '/leistungen/fade-cut/', '/leistungen/balayage/', '/leistungen/babylights/',
  '/leistungen/folienstraehnen/', '/leistungen/coloration/', '/leistungen/intensivtoenung/',
  '/leistungen/glossing/', '/leistungen/faceframe/', '/leistungen/repair-cut/',
  '/leistungen/styling/', '/leistungen/augenpflege/', '/leistungen/extensions/',
  '/salons/mannheim/', '/salons/weinheim/', '/ueber-uns/', '/kontakt/', '/termin/',
  '/impressum/', '/datenschutz/',
];

test.describe('Production Smoke', () => {
  for (const route of routes) {
    test(`${route} → 200, 1 H1, keine Konsolenfehler, kein H-Scroll`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(String(e)));
      page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
      const resp = await page.goto(route);
      expect(resp?.status()).toBe(200);
      await page.waitForTimeout(400);
      await expect(page.locator('h1')).toHaveCount(1);
      const hScroll = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
      );
      expect(hScroll).toBeFalsy();
      expect(errors).toEqual([]);
    });
  }

  test('404-Seite liefert 404 mit eigener Gestaltung', async ({ page }) => {
    const resp = await page.goto('/diese-seite-gibt-es-nicht/');
    expect(resp?.status()).toBe(404);
    await expect(page.locator('h1')).toContainText('nicht gefunden');
  });

  test('Sitemap und robots.txt erreichbar', async ({ request, baseURL }) => {
    const sm = await request.get(baseURL + '/sitemap-index.xml');
    expect(sm.status()).toBe(200);
    const rb = await request.get(baseURL + '/robots.txt');
    expect(rb.status()).toBe(200);
    expect(await rb.text()).toContain('Sitemap:');
  });

  test('Hero-Bild lädt (LCP-Kandidat)', async ({ page }) => {
    await page.goto('/');
    const img = page.locator('.hero-e__media img').first();
    await expect(img).toBeVisible();
    const loaded = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0);
    expect(loaded).toBeTruthy();
  });

  test('Keine kaputten Bilder auf der Startseite', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(async () => {
      await new Promise((r) => {
        let y = 0;
        const t = setInterval(() => {
          y += 500; window.scrollTo(0, y);
          if (y >= document.body.scrollHeight) { clearInterval(t); r(null); }
        }, 90);
      });
    });
    await page.waitForTimeout(1500);
    const broken = await page.evaluate(() =>
      Array.from(document.querySelectorAll('img')).filter((i) => i.complete && i.naturalWidth === 0 && i.src).length
    );
    expect(broken).toBe(0);
  });
});
