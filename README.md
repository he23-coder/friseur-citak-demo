# Hair Lounge by Citak — Website-Redesign (Demo)

Moderne, konversionsorientierte Neukonzeption der Website **friseur-citak.de** als
Vertriebs-Demo: Astro 5, TypeScript, statischer Build, Deployment auf Cloudflare Workers.

**Live-Demo:** https://friseur-citak-demo.workers.dev

---

## Highlights

- **Premium-Design** im Editorial-Stil (Schwarz-Weiß-Fotografie + Gold, Fraunces/Manrope)
- **14 eigene SEO-Landingpages** für jede Leistung (`/leistungen/…`)
- **2 Salonseiten** mit Team, kompletter Preisliste, Karten-Fassade und Rezensionen
- **Google-Rezensionen-Karussell** mit echten, verifizierbaren Rezensionen (Touch, Tastatur, Autoplay-Pause)
- **Mobile-First** mit Sticky-Aktionsleiste (Anrufen / Termin / Route)
- **SEO**: HairSalon-Schema, Service-Schema, FAQ-Schema, Breadcrumbs, Sitemap, Canonical, OG-Tags
- **Performance**: Bilder als responsive WebP via `astro:assets`, lazy loading, kein JS-Framework im Client
- **Barrierefreiheit**: semantisches HTML, Fokus-States, ARIA, `prefers-reduced-motion`

## Technologie

| Bereich | Wahl |
| --- | --- |
| Framework | [Astro 5](https://astro.build) (statischer Output) |
| Sprache | TypeScript |
| Styling | Eigenes CSS-Design-System (kein Framework) |
| Fonts | Fraunces + Manrope via `@fontsource` (selbst gehostet, DSGVO-freundlich) |
| Hosting | Cloudflare Workers (Static Assets) via Wrangler |

## Installation & Entwicklung

```bash
npm install
npm run dev        # Dev-Server auf http://localhost:4321
```

## Build

```bash
npm run build      # statischer Build nach dist/
npm run preview    # lokaler Preview des Builds
```

## Deployment (Cloudflare Workers)

```bash
npx wrangler deploy   # baut nicht selbst → vorher npm run build ausführen
```

Die Konfiguration steht in `wrangler.toml` (Static Assets aus `dist/`).

## Seitenstruktur

```
/                        Startseite (Hero, Leistungen, Salons, Team, Rezensionen, Galerie, CTA)
/leistungen/             Übersicht aller Leistungen nach Kategorie
/leistungen/damenhaarschnitt/
/leistungen/herrenhaarschnitt/
/leistungen/fade-cut/
/leistungen/balayage/
/leistungen/babylights/
/leistungen/folienstraehnen/
/leistungen/coloration/
/leistungen/intensivtoenung/
/leistungen/glossing/
/leistungen/faceframe/
/leistungen/repair-cut/
/leistungen/styling/
/leistungen/augenpflege/
/leistungen/extensions/
/salons/mannheim/        Team, Preisliste, Rezensionen, Anfahrt
/salons/weinheim/        Team, Preisliste, Rezensionen, Anfahrt
/ueber-uns/              Geschichte (Sema Citak, Cagri Citak, Timeline)
/termin/                 Buchungs-Hub (Links zum Original-Buchungssystem)
/kontakt/                Rückruf-Formular (mailto-basiert), Kontaktdaten, Karten
/impressum/              Impressum (Originaldaten)
/datenschutz/            Datenschutzerklärung
/404/                    Fehlerseite (noindex)
```

## Herkunft der Inhalte

Alle Inhalte wurden am 28.07.2026 per Playwright-Analyse aus **öffentlich verifizierbaren
Quellen** übernommen und redaktionell überarbeitet:

- **Texte, Leistungen, Preise, Team-Namen, Öffnungszeiten, Adressen** → Original-Website
  friseur-citak.de (Startseite, /dienstleistungen, /extensions, /mannheim, /weinheim,
  /ueber-uns, /kontakt, /impressum, /datenschutz)
- **Rezensionen (6 Stück, alle 5★)** → offizielle Google-Maps-Profile der beiden Salons
  (Mannheim: 4,9★/172 Rezensionen · Weinheim: 4,9★/147 Rezensionen, Stand 28.07.2026).
  Quelle jeder Rezension ist in `src/data/reviews.ts` hinterlegt.
- **Bilder** → Original-Website (Salon-Fotos, Team-Porträts, Arbeitsergebnisse,
  Partner-Logos Wella/Sebastian/Olaplex/Great Lengths)
- **Buchungslinks** → unverändert auf das Original-Buchungssystem (mitdenkt.io) verlinkt

## Nicht verifizierbare Daten / offene Platzhalter

- **USt-IdNr.** auf der Original-Datenschutzseite („DE 47112 / 42213") hat ein ungewöhnliches
  Format → im neuen Impressum bewusst weggelassen, vom Inhaber prüfen lassen.
- **E-Mail-Formular**: Das Rückruf-Formular arbeitet ohne Backend via `mailto:` (wie das
  Original-Formular, nur besser validiert). Für produktiven Einsatz kann ein Form-Service
  (z. B. Cloudflare Workers + Mailchannels) ergänzt werden.
- **Team-Fotos**: Nur für 5 von 12 Team-Mitgliedern existierten echte Porträts auf der
  Original-Website (Andy, Gerey, Songül, Melanie, Kay). Übrige Mitglieder erhalten
  Initialen-Platzhalter – Fotos können nachgeliefert werden.
- **Instagram-Bilder** werden nicht eingebunden (DSGVO/Performance); die Galerie nutzt
  Original-Salonfotos.

## Rechtliches

Demo-Projekt zu Vertriebszwecken. Inhalte und Bildmaterial stammen von der öffentlichen
Website des Unternehmens Hair Lounge by Citak und dienen ausschließlich der Präsentation
eines Redesigns gegenüber dem Inhaber.
