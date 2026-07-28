import { test, expect } from '@playwright/test';

const routes = ['/', '/leistungen/', '/leistungen/balayage/', '/salons/mannheim/', '/kontakt/'];

test.describe('Dark Mode – visuelle Integrität', () => {
  for (const route of routes) {
    test(`${route} rendert in Dunkel ohne Fehler und ohne Horizontal-Scroll`, async ({ page }) => {
      const errors: string[] = [];
      page.on('pageerror', (e) => errors.push(String(e)));
      await page.goto(route);
      await page.evaluate(() => {
        localStorage.setItem('hlc-theme', 'dark');
        (window as any).__hlcTheme?.apply('dark', false);
      });
      await page.waitForTimeout(400);
      const hScroll = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(hScroll).toBeFalsy();
      expect(errors).toEqual([]);
      // Kontrast-Stichprobe: Body-Text auf Body-Hintergrund
      const [color, bg] = await page.evaluate(() => {
        const cs = getComputedStyle(document.body);
        return [cs.color, cs.backgroundColor];
      });
      expect(color).not.toEqual(bg);
    });
  }

  test('Theme-Wechsel erzeugt keine Layout-Sprünge', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1200);
    const before = await page.evaluate(() => document.body.scrollHeight);
    await page.locator('[data-theme-choice="dark"]:visible').first().click();
    await page.waitForTimeout(600);
    const after = await page.evaluate(() => document.body.scrollHeight);
    // Toleranz 20 % für Bildlade- und Schriftmetrik-Effekte
    expect(Math.abs(after - before) / before).toBeLessThan(0.2);
  });

  test('Logo und Header in beiden Modi sichtbar', async ({ page }) => {
    await page.goto('/');
    for (const t of ['light', 'dark']) {
      await page.evaluate((tt) => (window as any).__hlcTheme?.apply(tt, false), t);
      const logoVisible = await page.locator('.brand img').first().isVisible();
      expect(logoVisible).toBeTruthy();
    }
  });
});
