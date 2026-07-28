// Preislisten – exakt von den Original-Salonseiten übernommen.
// Hinweis der Salons: „Sämtliche Preise können je nach Aufwand und Produktmenge variieren."

export interface PriceRow {
  label: string;
  short?: string; // bis Kinn
  long?: string; // ab Kinn
}

export interface PriceGroup {
  title: string;
  note?: string;
  twoCols?: boolean;
  rows: PriceRow[];
}

export interface SalonPrices {
  groups: PriceGroup[];
}

const damen: PriceGroup = {
  title: 'Damen',
  twoCols: true,
  rows: [
    { label: 'Beratung, Verwöhnhaarwäsche, Styling mit Finish', short: '32 €', long: '42 €' },
    { label: 'Beratung, Verwöhnhaarwäsche, typgerechter Haarschnitt, Styling mit Finish', short: '52 €', long: '62 €' },
    { label: 'Beratung, Verwöhnhaarwäsche, typgerechter Haarschnitt mit Pflegebooster, Styling mit Finish', short: '68 €', long: '78 €' },
    { label: 'Hochsteckfrisur mit Finish', short: 'auf Anfrage', long: 'auf Anfrage' },
    { label: 'Brautfrisur inkl. Probesteckfrisur, typgerechtes Make-up', short: '299 €', long: '299 €' },
    { label: 'Make-up', short: 'auf Anfrage', long: 'auf Anfrage' },
    { label: 'Mehraufwand', short: '10 €', long: '10 €' },
  ],
};

const permanentStyling: PriceGroup = {
  title: 'Permanent Styling',
  twoCols: true,
  rows: [
    { label: 'Keratinglättung, Technik, spezielle Finishbehandlung, Styling', short: '249 €', long: '299 €' },
    { label: 'Individuelle Beratung, Technik Curl It (Dauerwelle), spezielle Finishbehandlung, Styling', short: '89 €', long: '139 €' },
    { label: 'Individuelle Beratung, Technik Straighten It (Haarglättung), spezielle Finishbehandlung, Styling', short: '89 €', long: '159 €' },
  ],
};

const herrenMannheim: PriceGroup = {
  title: 'Herren',
  twoCols: false,
  rows: [
    { label: 'Beratung, Verwöhnhaarwäsche, typgerechter Haarschnitt, Styling', short: '35 €' },
    { label: 'Beratung, Verwöhnhaarwäsche, typgerechter Haarschnitt, vitalisierende Kopfmassage, Styling', short: '45 €' },
    { label: 'Grauhaarveredelung', short: '30 €' },
  ],
};

const herrenWeinheim: PriceGroup = {
  title: 'Herren',
  twoCols: false,
  rows: [
    { label: 'Beratung, Verwöhnhaarwäsche, typgerechter Haarschnitt, Styling', short: '32 €' },
    { label: 'Beratung, Verwöhnhaarwäsche, typgerechter Haarschnitt, vitalisierende Kopfmassage, Styling', short: '42 €' },
    { label: 'Grauhaarveredelung', short: '30 €' },
  ],
};

const farbeMannheim: PriceGroup = {
  title: 'Farbe',
  twoCols: true,
  rows: [
    { label: 'Individuelle Farbberatung, Pflegehaarfarbe, spezielle Farbversiegelung (bis 40 g)', short: '57 €', long: '57 €' },
    { label: 'Individuelle Farbberatung, Lichtreflexe, spezielle Farbversiegelung', short: '55 €', long: '115 €' },
    { label: 'Individuelle Farbberatung, typgerechte Foliensträhnen, spezielle Farbversiegelung (variiert nach Menge)', short: '55 €', long: '115 €' },
    { label: 'Balayage-Techniken', short: 'auf Anfrage', long: 'auf Anfrage' },
    { label: 'Glossing bis 20 g', short: '23 €', long: '23 €' },
    { label: 'Olaplex-Behandlung', short: '25 €', long: '25 €' },
  ],
};

const farbeWeinheim: PriceGroup = {
  title: 'Farbe',
  twoCols: true,
  rows: [
    { label: 'Individuelle Farbberatung, Pflegeansatzfarbe (bis 40 g), spezielle Farbversiegelung', short: '57 €', long: '57 €' },
    { label: 'Beratung, Verwöhnhaarwäsche, Lichtreflexe, Styling mit Finish', short: 'auf Anfrage', long: 'auf Anfrage' },
    { label: 'Individuelle Farbberatung, typgerechte Foliensträhnen, spezielle Farbversiegelung (variiert nach Menge)', short: '55 €', long: '115 €' },
    { label: 'Balayage-Techniken', short: 'auf Anfrage', long: 'auf Anfrage' },
    { label: 'Glossing bis 20 g', short: '23 €', long: '23 €' },
    { label: 'Olaplex-Behandlung', short: '25 €', long: '25 €' },
  ],
};

const extensions: PriceGroup = {
  title: 'Haarverlängerung / Haarverdichtung',
  twoCols: false,
  rows: [{ label: 'Great Lengths', short: 'auf Anfrage' }],
};

const sonderleistungen: PriceGroup = {
  title: 'Sonderleistungen',
  twoCols: false,
  rows: [
    { label: 'Augenbrauen-Design', short: '10 €' },
    { label: 'Gesicht enthaaren (Fadentechnik)', short: '25 €' },
    { label: 'Augenbrauen- / Wimpernfarbe', short: '12 €' },
  ],
};

const kinder: PriceGroup = {
  title: 'Kinder',
  twoCols: false,
  rows: [
    { label: 'Jungs bis 5 Jahre', short: '18 €' },
    { label: 'Jungs bis 12 Jahre', short: '24 €' },
    { label: 'Mädchen bis 5 Jahre', short: '20 €' },
    { label: 'Mädchen bis 12 Jahre', short: '32 €' },
  ],
};

export const pricesMannheim: SalonPrices = {
  groups: [damen, permanentStyling, herrenMannheim, farbeMannheim, extensions, sonderleistungen, kinder],
};

export const pricesWeinheim: SalonPrices = {
  groups: [damen, permanentStyling, herrenWeinheim, farbeWeinheim, extensions, sonderleistungen, kinder],
};

export const priceNote =
  'Sämtliche Preise können je nach Aufwand und Produktmenge variieren. Gerne beraten wir Sie persönlich!';
