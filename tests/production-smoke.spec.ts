import { test, expect } from '@playwright/test';

const routes = [
  '/',
  '/leistungen/',
  '/leistungen/damenhaarschnitt/',
  '/leistungen/herrenhaarschnitt/',
  '/leistungen/fade-cut/',
  '/leistungen/balayage/',
  '/leistungen/babylights/',
  '/leistungen/folienstraehnen/',
  '/leistungen/coloration/',
  '/leistungen/intensivtoenung/',
  '/leistungen/glossing/',
  '/leistungen/faceframe/',
  '/leistungen/repair-cut/',
  '/leistungen/styling/',
  '/leistungen/augenpflege/',
  '/leistungen/extensions/',
  '/leistungen/brautstyling/',
  '/leistungen/hochsteckfrisur/',
  '/leistungen/make-up/',
  '/leistungen/beach-waves/',
  '/leistungen/bartstyling/',
  '/leistungen/keratinglaettung/',
  '/leistungen/dauerwelle-curl-it/',
  '/leistungen/haarglaettung-straighten-it/',
  '/leistungen/olaplex/',
  '/leistungen/grauhaarveredelung/',
  '/salons/',
  '/salons/mannheim/',
  '/salons/weinheim/',
  '/ueber-uns/',
  '/kontakt/',
  '/termin/',
  '/impressum/',
  '/datenschutz/',
];

test.describe('Smoke y protección de la demo', () => {
  test('todas las rutas publicadas responden 200, un H1 y noindex', async ({ page }) => {
    for (const route of routes) {
      const errors: string[] = [];
      const onPageError = (error: Error) => errors.push(String(error));
      page.on('pageerror', onPageError);
      const response = await page.goto(route);
      expect(response?.status(), route).toBe(200);
      await expect(page.locator('h1'), route).toHaveCount(1);
      await expect(page.locator('meta[name="robots"]'), route).toHaveAttribute(
        'content',
        'noindex, nofollow, noarchive',
      );
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        ),
        route,
      ).toBeFalsy();
      expect(errors, route).toEqual([]);
      page.off('pageerror', onPageError);
    }
  });

  test('robots.txt bloquea todo y no publica sitemap', async ({ request, baseURL }) => {
    const response = await request.get(baseURL + '/robots.txt');
    expect(response.status()).toBe(200);
    const body = (await response.text()).replace(/\r\n/g, '\n').trim();
    expect(body).toBe('User-agent: *\nDisallow: /');
    expect(body).not.toContain('Sitemap:');
  });

  test('Pfungstadt está excluido de rutas y navegación', async ({ page }) => {
    const response = await page.goto('/salons/pfungstadt/');
    expect(response?.status()).toBe(404);
    await page.goto('/salons/');
    await expect(page.locator('body')).not.toContainText('Pfungstadt');
    await expect(page.locator('a[href*="pfungstadt"]')).toHaveCount(0);
  });

  test('404 tiene estado y contenido propios', async ({ page }) => {
    const response = await page.goto('/diese-seite-gibt-es-nicht/');
    expect(response?.status()).toBe(404);
    await expect(page.locator('h1')).toContainText('nicht gefunden');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow, noarchive',
    );
  });

  test('imagen hero carga y no hay imágenes rotas en home', async ({ page }) => {
    await page.goto('/');
    const hero = page.locator('.hero-e__media img').first();
    await expect(hero).toBeVisible();
    expect(
      await hero.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0),
    ).toBeTruthy();

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(800);
    const broken = await page.evaluate(
      () =>
        Array.from(document.querySelectorAll('img')).filter(
          (image) => image.complete && image.naturalWidth === 0 && image.src,
        ).length,
    );
    expect(broken).toBe(0);
  });
});
