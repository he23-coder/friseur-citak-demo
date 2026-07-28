# PRODUCT.md — Hair Lounge by Citak (Demo-Redesign)

## Produkt
Website-Redesign (Vertriebs-Demo) für **Hair Lounge by Citak**, Familien-Friseurunternehmen
in 2. Generation mit zwei Salons: Mannheim (Friedrichsring 4) und Weinheim (Hauptstraße 81).

## Modus der Oberfläche
**Persuade** – Besucher:innen sollen Termine buchen, anrufen oder die Route planen.
Sekundär: Vertrauen aufbauen (Rezensionen, Geschichte, Team) und Leistungen verständlich machen.

## Zielgruppe
- Bestands- und Neukund:innen (18–65) in Mannheim/Weinheim, überwiegend mobil.
- Der Inhaber (Cagri Citak) als Entscheider über die neue Website.
- Lokale Suchende: „Friseur Mannheim“, „Balayage Weinheim“, „Extensions Mannheim“.

## Wahrheit (verifiziert, darf nicht erfunden werden)
- 2 Salons, Öffnungszeiten, Telefonnummern, Adressen (siehe `src/data/site.ts`).
- 14 Leistungen mit Originalbeschreibungen; komplette Preislisten beider Salons.
- Team: 12 Namen, 5 echte Porträts (Andy, Gerey, Songül, Melanie, Kay).
- Google: Mannheim 4,9★/172 · Weinheim 4,9★/147; 6 echte 5★-Rezensionen in `src/data/reviews.ts`.
- 15 % Rabatt Mo–Mi für Neukund:innen/Studierende/Azubis/Schüler:innen (außer Extensions).
- Marken: Wella, Sebastian, Olaplex, Great Lengths (ausgezeichneter GL-Salon).
- Geschichte: Sema Citak ab 1975; Cagri Citak (Inhaber), WM-Platz 3 2008, Wella-Fachtrainer.
- Buchung extern via mitdenkt.io (hygg = Mannheim, otii = Weinheim).

## Conversion-Ziele (Priorität)
1. Online-Terminbuchung (externe Links)
2. Anruf (tel:)
3. Routenplanung (Google Maps)
4. Kontakt/Rückruf-Formular (mailto)

## Technische Constraints
- Astro 5, statischer Build, Cloudflare Workers (Static Assets).
- Kein JS-Framework im Client; vanilla JS-Inseln.
- Selbst gehostete Fonts (@fontsource), WebP via astro:assets.
- Gleiche URLs wie bisher (SEO-Erhalt): Slugs, Anchor-IDs, Nav-Labels bleiben stabil.

## Brand-Verpflichtungen (vom Brief gepinnt)
- Gold des Logos + reale Salon-Fotografie als Identitätskern.
- „Lujo editorial contemporáneo“: Fashion-Editorial + Salon-Fotografie + warmer Minimalismus.
- Vollständig designtes Dark Mode (Hell / Dunkel / System), warm, kein Rein-Schwarz.
- Mobile-first mit eigener mobiler Komposition, Sticky-Aktionsleiste.
