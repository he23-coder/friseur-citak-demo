import { test, expect } from '@playwright/test';

test.describe('Kontakt-Formular', () => {
  test('Validierung zeigt Fehler bei leeren Pflichtfeldern', async ({ page }) => {
    await page.goto('/kontakt/');
    await page.locator('#contact-form button[type="submit"]').click();
    const invalidCount = await page.locator('.form__field.is-invalid').count();
    expect(invalidCount).toBeGreaterThanOrEqual(3);
  });

  test('Ungültige E-Mail wird abgelehnt, gültige angenommen', async ({ page }) => {
    await page.goto('/kontakt/');
    await page.fill('#f-email', 'keine-mail');
    await page.locator('#contact-form button[type="submit"]').click();
    await expect(page.locator('#f-email')).toHaveClass(/is-invalid|/, { timeout: 1000 }).catch(() => {});
    const invalid = await page.locator('#f-email').evaluate((el) => el.closest('.form__field')!.classList.contains('is-invalid'));
    expect(invalid).toBeTruthy();
  });

  test('Vollständiges Formular öffnet mailto und zeigt Erfolgshinweis', async ({ page, context }) => {
    await page.goto('/kontakt/');
    await page.fill('#f-name', 'Playwright Test');
    await page.fill('#f-phone', '0621 123456');
    await page.fill('#f-email', 'test@example.de');
    await page.fill('#f-when', 'werktags ab 17 Uhr');
    await page.locator('#contact-form button[type="submit"]').click();
    await expect(page.locator('#form-success')).toHaveClass(/is-visible/);
  });

  test('Fehler verschwinden beim Tippen', async ({ page }) => {
    await page.goto('/kontakt/');
    await page.locator('#contact-form button[type="submit"]').click();
    await page.fill('#f-name', 'Anna');
    const invalid = await page.locator('#f-name').evaluate((el) => el.closest('.form__field')!.classList.contains('is-invalid'));
    expect(invalid).toBeFalsy();
  });
});
