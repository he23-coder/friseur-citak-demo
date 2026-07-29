import { test } from '@playwright/test';
import path from 'node:path';

test.skip(process.env.CAPTURE_VISUALS !== '1', 'Solo se ejecuta para la auditoría visual final.');

const output = path.resolve('audits/visual-final');
const mobile = { width: 390, height: 844 };
const desktop = { width: 1440, height: 900 };

async function setTheme(page: any, theme: 'light' | 'dark') {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.addInitScript((value: string) => localStorage.setItem('hlc-theme', value), theme);
}

test('capturas móviles claras y oscuras', async ({ page }) => {
  await page.setViewportSize(mobile);
  for (const theme of ['light', 'dark'] as const) {
    await setTheme(page, theme);
    await page.goto('/');
    await page.screenshot({ path: `${output}/mobile-${theme}-home.png`, fullPage: true });
    await page.screenshot({
      path: `${output}/mobile-${theme}-header-hero-initial.png`,
    });
    await page.evaluate(() => window.scrollTo(0, 650));
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${output}/mobile-${theme}-header-scrolled.png` });
    await page.locator('.sticky-bar').screenshot({
      path: `${output}/mobile-${theme}-bottom-navigation.png`,
    });

    const targets = [
      ['/leistungen/', 'leistungen'],
      ['/leistungen/brautstyling/', 'service'],
      ['/salons/mannheim/', 'salon'],
      ['/kontakt/', 'form'],
    ] as const;
    for (const [route, name] of targets) {
      await page.goto(route);
      await page.screenshot({ path: `${output}/mobile-${theme}-${name}.png`, fullPage: true });
    }

    await page.goto('/');
    await page.locator('[data-carousel]').first().scrollIntoViewIfNeeded();
    await page.screenshot({ path: `${output}/mobile-${theme}-reviews.png` });
    await page.locator('.site-footer').scrollIntoViewIfNeeded();
    await page.screenshot({ path: `${output}/mobile-${theme}-footer.png` });
  }
});

test('cabecera inicial en cuatro viewports, claro y oscuro', async ({ page }) => {
  for (const viewport of [
    { width: 360, height: 800 },
    { width: 375, height: 812 },
    { width: 390, height: 844 },
    { width: 412, height: 915 },
  ]) {
    for (const theme of ['light', 'dark'] as const) {
      await page.setViewportSize(viewport);
      await setTheme(page, theme);
      await page.goto('/');
      await page.screenshot({
        path: `${output}/header-hero-${viewport.width}x${viewport.height}-${theme}.png`,
      });
    }
  }
});

test('capturas de escritorio claras y oscuras', async ({ page }) => {
  await page.setViewportSize(desktop);
  for (const theme of ['light', 'dark'] as const) {
    await setTheme(page, theme);
    await page.goto('/');
    await page.screenshot({ path: `${output}/desktop-${theme}-home.png`, fullPage: true });
    await page.screenshot({ path: `${output}/desktop-${theme}-hero-navbar-ctas.png` });
    await page.goto('/kontakt/');
    await page.screenshot({ path: `${output}/desktop-${theme}-form.png`, fullPage: true });
    await page.goto('/leistungen/balayage/');
    await page.screenshot({ path: `${output}/desktop-${theme}-internal-service.png`, fullPage: true });
  }
});
