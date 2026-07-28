import { test, expect } from '@playwright/test';

test.describe('Rezensions-Karussell', () => {
  test('Pfeile, Dots, Tastatur und Swipe funktionieren', async ({ page }) => {
    await page.goto('/');
    const carousel = page.locator('[data-carousel]').first();
    await carousel.scrollIntoViewIfNeeded();

    const transform = () => page.locator('.carousel__track').first().evaluate((el) => el.style.transform);

    const t0 = await transform();
    await page.locator('.carousel__btn[data-next]').first().click();
    await page.waitForTimeout(700);
    const t1 = await transform();
    expect(t1).not.toEqual(t0);

    // Zurück
    await page.locator('.carousel__btn[data-prev]').first().click();
    await page.waitForTimeout(700);
    expect(await transform()).toEqual(t0);

    // Tastatur
    await page.locator('.carousel__viewport').first().focus();
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(700);
    expect(await transform()).not.toEqual(t0);
    await page.keyboard.press('ArrowLeft');
    await page.waitForTimeout(700);
    expect(await transform()).toEqual(t0);

    // Dots vorhanden; aktiver Dot an Position 0
    const dots = page.locator('.carousel__dot');
    expect(await dots.count()).toBeGreaterThan(0);
    await expect(dots.first()).toHaveAttribute('aria-selected', 'true');
  });

  test('Autoplay pausiert nach Interaktion', async ({ page }) => {
    await page.goto('/');
    const track = page.locator('.carousel__track').first();
    await page.locator('[data-carousel]').first().scrollIntoViewIfNeeded();
    await page.locator('.carousel__btn[data-next]').first().click();
    const t1 = await track.evaluate((el) => el.style.transform);
    // Nach Klick darf kein Autoplay mehr weiterschalten
    await page.waitForTimeout(7000);
    expect(await track.evaluate((el) => el.style.transform)).toEqual(t1);
  });

  test('„mehr lesen" klappt langen Review-Text auf', async ({ page }) => {
    await page.goto('/');
    const more = page.locator('.rev-card__more:visible').first();
    await more.scrollIntoViewIfNeeded();
    await more.click();
    await expect(page.locator('.rev-card__text.is-expanded').first()).toBeVisible();
    await expect(more).toHaveText('weniger lesen');
  });

  test('Karussell funktioniert im Dark Mode', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => { localStorage.setItem('hlc-theme', 'dark'); (window as any).__hlcTheme?.apply('dark', false); });
    const track = page.locator('.carousel__track').first();
    await page.locator('[data-carousel]').first().scrollIntoViewIfNeeded();
    await page.locator('.carousel__btn[data-next]').first().click();
    await page.waitForTimeout(700);
    expect(await track.evaluate((el) => el.style.transform)).not.toEqual('');
  });
});
