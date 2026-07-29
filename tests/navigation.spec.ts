import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('mobile no contiene burger ni navegación oculta', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await expect(
      page.locator(
        '.burger, .mobile-menu, [data-menu-toggle], button[aria-label*="menü" i], button[aria-label*="menu" i]',
      ),
    ).toHaveCount(0);
    await expect(page.locator('body')).not.toHaveClass(/menu-open/);

    const mobileNav = page.locator('.mobile-primary-nav');
    await expect(mobileNav).toBeVisible();
    await expect(mobileNav.getByRole('link')).toHaveCount(5);
    for (const label of ['Startseite', 'Leistungen', 'Salons', 'Über uns', 'Kontakt']) {
      await expect(mobileNav.getByRole('link', { name: label, exact: true })).toBeVisible();
    }
  });

  test('barra inferior tiene cinco acciones, Termin principal y estado activo accesible', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/leistungen/');
    await page.evaluate(() => window.scrollTo(0, 500));
    await expect(page.locator('.sticky-bar')).toHaveClass(/is-visible/);

    const links = page.locator('.sticky-bar a');
    await expect(links).toHaveCount(5);
    await expect(page.locator('.sticky-bar__primary')).toHaveText(/Termin/);
    await expect(page.locator('.sticky-bar a[href="/leistungen/"]')).toHaveAttribute(
      'aria-current',
      'page',
    );

    await page.locator('.sticky-bar a[href="/kontakt/"]').focus();
    await expect(page.locator('.sticky-bar a[href="/kontakt/"]')).toBeFocused();
  });

  test('header pasa a estado compacto sin salto de anchura', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    const header = page.locator('#site-header');
    const before = await header.boundingBox();

    await page.evaluate(() => window.scrollTo(0, 500));
    await expect(header).toHaveClass(/is-scrolled/);
    const after = await header.boundingBox();

    expect(after?.width).toBe(before?.width);
    expect(after!.height).toBeLessThan(before!.height);
    await expect(page.locator('.header-mobile-actions')).toBeVisible();
  });

  test('navegación de escritorio mantiene dropdowns', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    const nav = page.locator('.main-nav');
    await expect(nav).toBeVisible();
    expect((await nav.boundingBox())!.height).toBeLessThanOrEqual(80);

    await page.locator('.nav-item--has-sub').first().hover();
    await expect(page.locator('.nav-sub').first()).toBeVisible();
  });

  test('enlaces internos principales y breadcrumbs funcionan', async ({ page, request, baseURL }) => {
    const pages = [
      '/',
      '/leistungen/',
      '/salons/',
      '/salons/mannheim/',
      '/salons/weinheim/',
      '/kontakt/',
      '/ueber-uns/',
      '/termin/',
    ];
    for (const href of pages) {
      const response = await request.get(baseURL + href);
      expect(response.status(), `Link ${href} defekt`).toBe(200);
    }

    await page.goto('/leistungen/balayage/');
    const crumbs = page.locator('.breadcrumbs a');
    await expect(crumbs.first()).toHaveAttribute('href', '/');
    await crumbs.nth(1).click();
    await expect(page).toHaveURL(/\/leistungen\/$/);
  });

  test('skip link está disponible por teclado', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    await expect(page.locator('.skip-link')).toBeFocused();
  });
});
