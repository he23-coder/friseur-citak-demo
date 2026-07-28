import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('Mobile-Menü öffnet, schließt per Button, Escape und Link', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await page.click('#burger');
    await expect(page.locator('.mobile-menu')).toHaveClass(/is-open/);
    await expect(page.locator('#burger')).toHaveAttribute('aria-expanded', 'true');

    // Schließen per Burger (Z-Index-Regression v1)
    await page.click('#burger');
    await expect(page.locator('.mobile-menu')).not.toHaveClass(/is-open/);

    // Öffnen und per Escape schließen
    await page.click('#burger');
    await page.keyboard.press('Escape');
    await expect(page.locator('.mobile-menu')).not.toHaveClass(/is-open/);

    // Öffnen und per Link schließen + navigieren
    await page.click('#burger');
    await page.locator('.mobile-menu a[href="/leistungen/"]').first().click();
    await expect(page).toHaveURL(/\/leistungen\//);
    await expect(page.locator('.mobile-menu')).not.toHaveClass(/is-open/);
  });

  test('Desktop-Navigation in einer Zeile mit Dropdowns', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const nav = page.locator('.main-nav');
    await expect(nav).toBeVisible();
    const height = await nav.evaluate((el) => el.getBoundingClientRect().height);
    expect(height).toBeLessThanOrEqual(80);

    // Dropdown Leistungen
    await page.locator('.nav-item--has-sub').first().hover();
    await expect(page.locator('.nav-sub').first()).toBeVisible();
  });

  test('Alle internen Links der Hauptseiten liefern 200', async ({ page, request, baseURL }) => {
    const pages = ['/', '/leistungen/', '/salons/mannheim/', '/kontakt/', '/ueber-uns/', '/termin/'];
    const hrefs = new Set<string>();
    for (const p of pages) {
      await page.goto(p);
      const links = await page.locator('a[href^="/"]').evaluateAll((els) =>
        els.map((e) => e.getAttribute('href')!.split('#')[0])
      );
      links.forEach((l) => hrefs.add(l));
    }
    for (const href of hrefs) {
      const resp = await request.get(baseURL + href);
      expect(resp.status(), `Link ${href} defekt`).toBe(200);
    }
  });

  test('Breadcrumbs auf Service-Seite funktionieren', async ({ page }) => {
    await page.goto('/leistungen/balayage/');
    const crumbs = page.locator('.breadcrumbs a');
    await expect(crumbs.first()).toHaveAttribute('href', '/');
    await crumbs.nth(1).click();
    await expect(page).toHaveURL(/\/leistungen\/$/);
  });

  test('Skip-Link vorhanden und fokussierbar', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.locator('.skip-link')).toBeFocused();
  });
});
