import { test, expect } from '@playwright/test';
import { handleContact } from '../src/worker';

const validPayload = {
  name: 'Anna <Test>',
  phone: '0621 123456',
  email: 'anna@example.de',
  salon: 'Mannheim',
  when: 'werktags ab 17 Uhr',
  message: '<script>alert(1)</script>',
  consent: true,
  turnstileToken: 'valid-token',
  website: '',
};

function request(payload: Record<string, unknown>) {
  return new Request('https://friseur-citak-demo.geraldhe21.workers.dev/api/contact', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      origin: 'https://friseur-citak-demo.geraldhe21.workers.dev',
      'cf-connecting-ip': '192.0.2.2',
      'user-agent': 'Playwright',
    },
    body: JSON.stringify(payload),
  });
}

function environment(overrides: Record<string, unknown> = {}) {
  return {
    CONTACT_RATE_LIMITER: { limit: async () => ({ success: true }) },
    EMAIL: { send: async () => ({ messageId: 'test-message' }) },
    TURNSTILE_SITE_KEY: 'site-key',
    TURNSTILE_SECRET: 'secret-key',
    CONTACT_TO_EMAIL: 'salon@example.de',
    CONTACT_FROM_EMAIL: 'website@example.de',
    CONTACT_EXPECTED_HOSTNAME: 'friseur-citak-demo.geraldhe21.workers.dev',
    ...overrides,
  } as any;
}

test.describe('Cloudflare contact endpoint', () => {
  let originalFetch: typeof fetch;

  test.beforeEach(() => {
    originalFetch = globalThis.fetch;
    globalThis.fetch = (async () =>
      new Response(
        JSON.stringify({
          success: true,
          hostname: 'friseur-citak-demo.geraldhe21.workers.dev',
          action: 'contact',
        }),
        { status: 200, headers: { 'content-type': 'application/json' } },
      )) as typeof fetch;
  });

  test.afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  test('valida campos vacíos, e-mail, consentimiento y Turnstile', async () => {
    const response = await handleContact(
      request({ email: 'falsch', consent: false, turnstileToken: '' }),
      environment(),
    );
    expect(response.status).toBe(400);
    const result = (await response.json()) as any;
    expect(result.fieldErrors.email).toBeTruthy();
    expect(result.fieldErrors.consent).toBeTruthy();
    expect(result.fieldErrors.turnstile).toBeTruthy();
  });

  test('rechaza Turnstile incorrecto', async () => {
    globalThis.fetch = (async () =>
      new Response(JSON.stringify({ success: false }), {
        headers: { 'content-type': 'application/json' },
      })) as typeof fetch;
    const response = await handleContact(request(validPayload), environment());
    expect(response.status).toBe(422);
    expect((await response.json() as any).code).toBe('turnstile');
  });

  test('aplica rate limiting antes de enviar', async () => {
    let delivered = false;
    const response = await handleContact(
      request(validPayload),
      environment({
        CONTACT_RATE_LIMITER: { limit: async () => ({ success: false }) },
        EMAIL: {
          send: async () => {
            delivered = true;
            return { messageId: 'unexpected' };
          },
        },
      }),
    );
    expect(response.status).toBe(429);
    expect(response.headers.get('retry-after')).toBe('60');
    expect(delivered).toBeFalsy();
  });

  test('sanitiza HTML y confirma solo tras entrega', async () => {
    let sent: any;
    const response = await handleContact(
      request(validPayload),
      environment({
        EMAIL: {
          send: async (message: any) => {
            sent = message;
            return { messageId: 'delivered' };
          },
        },
      }),
    );
    expect(response.status).toBe(200);
    expect((await response.json() as any).ok).toBe(true);
    expect(sent.html).toContain('&lt;script&gt;');
    expect(sent.html).not.toContain('<script>');
    expect(sent.replyTo).toBe('anna@example.de');
  });

  test('error de entrega produce error real, no éxito', async () => {
    const response = await handleContact(
      request(validPayload),
      environment({
        EMAIL: {
          send: async () => {
            throw new Error('delivery failed');
          },
        },
      }),
    );
    expect(response.status).toBe(502);
    expect((await response.json() as any).ok).toBe(false);
  });

  test('sin bindings devuelve not_configured', async () => {
    const response = await handleContact(request(validPayload), {} as any);
    expect(response.status).toBe(503);
    expect((await response.json() as any).code).toBe('not_configured');
  });
});
