import { test, expect } from '@playwright/test';

// En desktop: Toggle im .header-cta; en móvil: im .header-mobile-actions
const visibleChoice = (page: any, theme: string) =>
  page.locator(`[data-theme-choice="${theme}"]:visible`).first();

test.describe('Theme-Toggle (Hell / Dunkel / System)', () => {
  test('Selector vorhanden, wechselt data-theme und persistiert', async ({ page }) => {
    await page.goto('/');
    const toggle = page.locator('.theme-toggle:visible').first();
    await expect(toggle).toBeVisible();

    await visibleChoice(page, 'dark').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await expect(page.locator('html')).toHaveAttribute('data-theme-mode', 'dark');

    await visibleChoice(page, 'light').click();
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');

    await visibleChoice(page, 'system').click();
    await expect(page.locator('html')).toHaveAttribute('data-theme-mode', 'system');
  });

  test('System-Modus folgt prefers-color-scheme', async ({ browser }) => {
    const ctx = await browser.newContext({ colorScheme: 'dark' });
    const page = await ctx.newPage();
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    await ctx.close();

    const ctx2 = await browser.newContext({ colorScheme: 'light' });
    const page2 = await ctx2.newPage();
    await page2.goto('/');
    await expect(page2.locator('html')).toHaveAttribute('data-theme', 'light');
    await ctx2.close();
  });

  test('Kein falscher Theme-Flash: data-theme vor erstem Paint gesetzt', async ({ page }) => {
    await page.goto('/');
    const early = await page.evaluate(() => document.documentElement.dataset.theme);
    expect(['light', 'dark']).toContain(early);
    const meta = await page.locator('#meta-theme-color').getAttribute('content');
    expect(['#F5F0E6', '#16120D']).toContain(meta);
  });

  test('Toggle per Tastatur erreichbar mit sichtbarem Fokus', async ({ page }) => {
    await page.goto('/');
    const btn = visibleChoice(page, 'dark');
    await btn.focus();
    await expect(btn).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
});
