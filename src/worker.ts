interface RateLimitBinding {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}

interface EmailBinding {
  send(message: {
    to: string;
    from: string;
    replyTo?: string;
    subject: string;
    text: string;
    html: string;
  }): Promise<{ messageId: string }>;
}

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  CONTACT_RATE_LIMITER?: RateLimitBinding;
  EMAIL?: EmailBinding;
  TURNSTILE_SITE_KEY?: string;
  TURNSTILE_SECRET?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_EXPECTED_HOSTNAME?: string;
}

interface ContactPayload {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  salon?: unknown;
  when?: unknown;
  message?: unknown;
  consent?: unknown;
  turnstileToken?: unknown;
  website?: unknown;
}

const PRODUCTION_HOST = 'friseur-citak-demo.geraldhe21.workers.dev';
const MAX_BODY_BYTES = 12_000;

function json(data: Record<string, unknown>, status = 200, headers: HeadersInit = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
      ...headers,
    },
  });
}

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\r\n?/g, '\n')
    .trim()
    .slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[character]!,
  );
}

function configured(env: Env) {
  return Boolean(
    env.CONTACT_RATE_LIMITER &&
      env.EMAIL &&
      env.TURNSTILE_SITE_KEY &&
      env.TURNSTILE_SECRET &&
      env.CONTACT_TO_EMAIL &&
      env.CONTACT_FROM_EMAIL,
  );
}

async function rateLimitKey(request: Request) {
  const source = [
    request.headers.get('cf-connecting-ip') || 'unknown',
    request.headers.get('user-agent') || 'unknown',
    new URL(request.url).pathname,
  ].join('|');
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(source));
  return Array.from(new Uint8Array(digest))
    .slice(0, 12)
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function verifyTurnstile(request: Request, env: Env, token: string) {
  const form = new FormData();
  form.set('secret', env.TURNSTILE_SECRET!);
  form.set('response', token);
  const remoteIp = request.headers.get('cf-connecting-ip');
  if (remoteIp) form.set('remoteip', remoteIp);

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: form,
  });
  if (!response.ok) return false;

  const result = (await response.json()) as {
    success?: boolean;
    hostname?: string;
    action?: string;
  };
  const expectedHostname = env.CONTACT_EXPECTED_HOSTNAME || PRODUCTION_HOST;
  return Boolean(
    result.success &&
      result.action === 'contact' &&
      (result.hostname === expectedHostname ||
        (expectedHostname === 'localhost' && ['localhost', '127.0.0.1'].includes(result.hostname || ''))),
  );
}

async function handleContact(request: Request, env: Env) {
  const requestUrl = new URL(request.url);
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== requestUrl.host) {
    return json({ ok: false, code: 'origin', message: 'Ungültige Anfragequelle.' }, 403);
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, code: 'too_large', message: 'Die Anfrage ist zu groß.' }, 413);
  }
  if (!request.headers.get('content-type')?.includes('application/json')) {
    return json({ ok: false, code: 'content_type', message: 'Ungültiges Datenformat.' }, 415);
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return json({ ok: false, code: 'json', message: 'Die Formulardaten konnten nicht gelesen werden.' }, 400);
  }

  const name = cleanText(payload.name, 100);
  const phone = cleanText(payload.phone, 40);
  const email = cleanText(payload.email, 160).toLowerCase();
  const salon = cleanText(payload.salon, 40) || 'Egal';
  const callbackTime = cleanText(payload.when, 120);
  const message = cleanText(payload.message, 2_000);
  const turnstileToken = cleanText(payload.turnstileToken, 2_048);
  const website = cleanText(payload.website, 200);

  const fieldErrors: Record<string, string> = {};
  if (name.length < 2) fieldErrors.name = 'Bitte geben Sie Ihren Namen an.';
  if (!/^[+()\d\s./-]{5,40}$/.test(phone)) fieldErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer an.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) fieldErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse an.';
  if (callbackTime.length < 3) fieldErrors.when = 'Bitte nennen Sie einen Rückrufzeitraum.';
  if (payload.consent !== true) fieldErrors.consent = 'Bitte stimmen Sie der Datenschutzerklärung zu.';
  if (!turnstileToken) fieldErrors.turnstile = 'Bitte bestätigen Sie die Sicherheitsprüfung.';
  if (website) fieldErrors.website = 'Ungültige Anfrage.';

  if (Object.keys(fieldErrors).length) {
    return json(
      { ok: false, code: 'validation', message: 'Bitte prüfen Sie Ihre Angaben.', fieldErrors },
      400,
    );
  }

  if (!configured(env)) {
    return json(
      {
        ok: false,
        code: 'not_configured',
        message: 'Das Online-Formular ist noch nicht vollständig konfiguriert. Bitte nutzen Sie Telefon oder Online-Buchung.',
      },
      503,
    );
  }

  const limit = await env.CONTACT_RATE_LIMITER!.limit({ key: await rateLimitKey(request) });
  if (!limit.success) {
    return json(
      {
        ok: false,
        code: 'rate_limited',
        message: 'Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es in einer Minute erneut.',
      },
      429,
      { 'retry-after': '60' },
    );
  }

  let turnstileValid = false;
  try {
    turnstileValid = await verifyTurnstile(request, env, turnstileToken);
  } catch {
    return json(
      { ok: false, code: 'turnstile_unavailable', message: 'Die Sicherheitsprüfung ist derzeit nicht erreichbar.' },
      502,
    );
  }
  if (!turnstileValid) {
    return json(
      { ok: false, code: 'turnstile', message: 'Die Sicherheitsprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.' },
      422,
    );
  }

  const text = [
    'Neue Rückrufanfrage über die Hair-Lounge-Website',
    '',
    `Name: ${name}`,
    `Telefon: ${phone}`,
    `E-Mail: ${email}`,
    `Bevorzugter Salon: ${salon}`,
    `Rückruf-Zeitraum: ${callbackTime}`,
    message ? `Nachricht:\n${message}` : 'Nachricht: –',
  ].join('\n');
  const html = `
    <h1>Neue Rückrufanfrage</h1>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
    <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Bevorzugter Salon:</strong> ${escapeHtml(salon)}</p>
    <p><strong>Rückruf-Zeitraum:</strong> ${escapeHtml(callbackTime)}</p>
    <p><strong>Nachricht:</strong><br>${message ? escapeHtml(message).replace(/\n/g, '<br>') : '–'}</p>
  `;

  try {
    await env.EMAIL!.send({
      to: env.CONTACT_TO_EMAIL!,
      from: env.CONTACT_FROM_EMAIL!,
      replyTo: email,
      subject: 'Neue Rückrufanfrage – Hair Lounge Website',
      text,
      html,
    });
  } catch {
    return json(
      { ok: false, code: 'delivery', message: 'Ihre Anfrage konnte nicht zugestellt werden. Bitte rufen Sie uns an oder buchen Sie online.' },
      502,
    );
  }

  return json({
    ok: true,
    message: 'Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns schnellstmöglich.',
  });
}

const worker = {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact/config' && request.method === 'GET') {
      return json({
        configured: configured(env),
        siteKey: env.TURNSTILE_SITE_KEY || null,
      });
    }

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      return handleContact(request, env);
    }

    if (url.pathname.startsWith('/api/')) {
      return json({ ok: false, code: 'not_found', message: 'API-Endpunkt nicht gefunden.' }, 404);
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set('x-robots-tag', 'noindex, nofollow, noarchive');
    headers.set('x-content-type-options', 'nosniff');
    headers.set('referrer-policy', 'strict-origin-when-cross-origin');
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  },
};

export { handleContact };
export default worker;
