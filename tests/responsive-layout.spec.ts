import { test, expect } from '@playwright/test';

const viewports = [
  { name: '360x800', width: 360, height: 800 },
  { name: '375x812', width: 375, height: 812 },
  { name: '390x844', width: 390, height: 844 },
  { name: '412x915', width: 412, height: 915 },
];

const routes = [
  '/',
  '/leistungen/',
  '/leistungen/brautstyling/',
  '/salons/mannheim/',
  '/kontakt/',
  '/termin/',
];

function parseRgb(value: string) {
  const parts = value.match(/[\d.]+/g)?.slice(0, 3).map(Number) || [0, 0, 0];
  return parts.map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4);
  });
}

function contrast(foreground: string, background: string) {
  const luminance = (rgb: number[]) =>
    0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  const a = luminance(parseRgb(foreground));
  const b = luminance(parseRgb(background));
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

test.describe('Layout responsive, contraste y safe area', () => {
  for (const viewport of viewports) {
    test(`header/hero claro y oscuro @ ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');

      for (const theme of ['light', 'dark']) {
        await page.evaluate((value) => (window as any).__hlcTheme?.apply(value, false), theme);
        await expect(page.locator('.brand img')).toBeVisible();
        await expect(page.locator('.header-mobile-actions .btn')).toBeVisible();
        await expect(page.locator('.mobile-primary-nav')).toBeVisible();

        const sample = await page.locator('.mobile-primary-nav a').first().evaluate((node) => {
          const link = getComputedStyle(node);
          const shell = getComputedStyle(document.querySelector('.header-shell')!);
          return { color: link.color, background: shell.backgroundColor };
        });
        expect(contrast(sample.color, sample.background)).toBeGreaterThanOrEqual(4.5);

        const horizontalOverflow = await page.evaluate(
          () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        );
        expect(horizontalOverflow).toBeFalsy();
      }
    });
  }

  test('rutas clave no desbordan a 360 px y tienen un H1', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    for (const route of routes) {
      await page.goto(route);
      await expect(page.locator('h1')).toHaveCount(1);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
        ),
        route,
      ).toBeFalsy();
    }
  });

  test('touch targets visibles miden al menos 44×44 px', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, 500));

    const selectors = [
      '.header-mobile-actions .theme-toggle button',
      '.header-mobile-actions .btn',
      '.sticky-bar a',
      '.carousel__btn',
    ];
    for (const selector of selectors) {
      const boxes = await page.locator(selector).evaluateAll((nodes) =>
        nodes.map((node) => {
          const rect = node.getBoundingClientRect();
          return { width: rect.width, height: rect.height };
        }),
      );
      for (const box of boxes) {
        expect(box.width, selector).toBeGreaterThanOrEqual(44);
        expect(box.height, selector).toBeGreaterThanOrEqual(44);
      }
    }
  });

  test('tabs permiten scroll horizontal propio sin desbordar la página', async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    await page.goto('/');
    const dimensions = await page.locator('.mobile-primary-nav__track').evaluate((node) => ({
      scrollWidth: node.scrollWidth,
      clientWidth: node.clientWidth,
      overflowX: getComputedStyle(node).overflowX,
    }));
    expect(dimensions.scrollWidth).toBeGreaterThan(dimensions.clientWidth);
    expect(dimensions.overflowX).toBe('auto');
  });

  test('barra inferior respeta safe-area y no tapa el footer', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const safeAreaRule = await page.evaluate(() =>
      Array.from(document.styleSheets).some((sheet) => {
        try {
          return Array.from(sheet.cssRules).some(
            (rule) =>
              rule.cssText.includes('.sticky-bar') &&
              rule.cssText.includes('safe-area-inset-bottom'),
          );
        } catch {
          return false;
        }
      }),
    );
    expect(safeAreaRule).toBeTruthy();

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(page.locator('.sticky-bar')).toHaveClass(/is-visible/);
    const footerPadding = await page
      .locator('.site-footer')
      .evaluate((node) => parseFloat(getComputedStyle(node).paddingBottom));
    const barHeight = (await page.locator('.sticky-bar').boundingBox())!.height;
    expect(footerPadding).toBeGreaterThanOrEqual(barHeight);
  });
});
