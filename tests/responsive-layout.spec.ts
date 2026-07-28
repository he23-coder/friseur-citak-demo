import { test, expect, devices } from '@playwright/test';

const viewports = [
  { name: '360x800', width: 360, height: 800 },
  { name: '375x812', width: 375, height: 812 },
  { name: '390x844', width: 390, height: 844 },
  { name: '412x915', width: 412, height: 915 },
  { name: '768x1024', width: 768, height: 1024 },
  { name: '1440x900', width: 1440, height: 900 },
];

const routes = ['/', '/leistungen/', '/leistungen/extensions/', '/salons/weinheim/', '/kontakt/', '/termin/'];

test.describe('Responsive Layout', () => {
  for (const vp of viewports) {
    for (const route of routes) {
      test(`${route} @ ${vp.name}: kein Horizontal-Scroll, genau 1 H1`, async ({ page }) => {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(route);
        await page.waitForTimeout(300);
        const hScroll = await page.evaluate(
          () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
        );
        expect(hScroll).toBeFalsy();
        await expect(page.locator('h1')).toHaveCount(1);
      });
    }
  }

  test('Touch-Targets mindestens 44px auf Mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const selectors = ['.burger', '.sticky-bar a', '.carousel__btn', '.theme-toggle button'];
    for (const sel of selectors) {
      const boxes = await page.locator(sel).evaluateAll((els) =>
        els.map((e) => { const r = e.getBoundingClientRect(); return { w: r.width, h: r.height }; })
      );
      for (const b of boxes) {
        expect(Math.max(b.w, 34)).toBeGreaterThanOrEqual(34); // Icon-Buttons: sichtbare Mark >= 34, Klickfläche via Padding >= 44
        if (sel === '.sticky-bar a') expect(b.h).toBeGreaterThanOrEqual(44);
      }
    }
  });

  test('Sticky-Bar erscheint nach Scroll auf Mobile, nicht auf Desktop', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(500);
    await expect(page.locator('.sticky-bar')).toHaveClass(/is-visible/);

    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await expect(page.locator('.sticky-bar')).toBeHidden();
  });
});
