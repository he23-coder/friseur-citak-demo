import { test, expect, type Page, type Route } from '@playwright/test';

async function prepareConfiguredForm(page: Page) {
  await page.addInitScript(() => {
    (window as any).turnstile = {
      render: (_selector: string, options: { callback: (token: string) => void }) => {
        queueMicrotask(() => options.callback('test-turnstile-token'));
        return 'widget-test';
      },
      reset: () => {},
      remove: () => {},
    };
  });
  await page.route('**/api/contact/config', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ configured: true, siteKey: '1x00000000000000000000AA' }),
    });
  });
}

async function fillValidForm(page: Page) {
  await page.fill('#f-name', 'Playwright Test');
  await page.fill('#f-phone', '0621 123456');
  await page.fill('#f-email', 'test@example.de');
  await page.fill('#f-when', 'werktags ab 17 Uhr');
  await page.check('#f-consent');
  await expect(page.locator('#f-turnstile')).toHaveValue('test-turnstile-token');
}

test.describe('Formulario de contacto real', () => {
  test.beforeEach(async ({ page }) => {
    await prepareConfiguredForm(page);
  });

  test('campos vacíos muestran errores y no envían', async ({ page }) => {
    let submitted = false;
    await page.route('**/api/contact', async (route) => {
      submitted = true;
      await route.abort();
    });
    await page.goto('/kontakt/');
    await page.locator('#form-submit').click();
    expect(await page.locator('.form__field.is-invalid').count()).toBeGreaterThanOrEqual(5);
    expect(submitted).toBeFalsy();
  });

  test('rechaza e-mail incorrecto y consentimiento ausente', async ({ page }) => {
    await page.goto('/kontakt/');
    await page.fill('#f-name', 'Anna Test');
    await page.fill('#f-phone', '0621 123456');
    await page.fill('#f-email', 'keine-mail');
    await page.fill('#f-when', 'vormittags');
    await page.locator('#form-submit').click();

    await expect(page.locator('#f-email')).toHaveAttribute('aria-invalid', 'true');
    await expect(page.locator('#f-consent')).toHaveAttribute('aria-invalid', 'true');
  });

  test('muestra loading, evita doble envío y solo confirma tras respuesta válida', async ({ page }) => {
    let submissions = 0;
    await page.route('**/api/contact', async (route: Route) => {
      submissions += 1;
      await new Promise((resolve) => setTimeout(resolve, 500));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true, message: 'Gesendet' }),
      });
    });
    await page.goto('/kontakt/');
    await fillValidForm(page);

    await page.locator('#form-submit').click();
    await expect(page.locator('#form-submit')).toHaveAttribute('aria-busy', 'true');
    await expect(page.locator('#form-submit')).toBeDisabled();
    await expect(page.locator('#form-success')).not.toHaveClass(/is-visible/);
    await expect(page.locator('#form-success')).toHaveClass(/is-visible/);
    expect(submissions).toBe(1);
  });

  test('muestra el error real del endpoint', async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 429,
        contentType: 'application/json',
        body: JSON.stringify({
          ok: false,
          code: 'rate_limited',
          message: 'Zu viele Anfragen in kurzer Zeit.',
        }),
      });
    });
    await page.goto('/kontakt/');
    await fillValidForm(page);
    await page.locator('#form-submit').click();
    await expect(page.locator('#form-status')).toContainText('Zu viele Anfragen');
    await expect(page.locator('#form-success')).not.toHaveClass(/is-visible/);
  });

  test('submit no contiene ni abre mailto', async ({ page }) => {
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true }),
      });
    });
    await page.goto('/kontakt/');
    await fillValidForm(page);
    const action = await page.locator('#contact-form').getAttribute('action');
    expect(action || '').not.toContain('mailto:');
    await page.locator('#form-submit').click();
    await expect(page).toHaveURL(/\/kontakt\/$/);
  });

  test('sin credenciales no simula éxito y mantiene alternativas', async ({ page }) => {
    await page.unroute('**/api/contact/config');
    await page.route('**/api/contact/config', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ configured: false, siteKey: null }),
      });
    });
    await page.goto('/kontakt/');
    await expect(page.locator('#form-submit')).toBeDisabled();
    await expect(page.locator('#form-config-note')).toContainText('noch nicht aktiviert');
    await expect(page.locator('#contact-alternatives')).toBeVisible();
    await expect(page.locator('#form-success')).not.toHaveClass(/is-visible/);
  });
});
