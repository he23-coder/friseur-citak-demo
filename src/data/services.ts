// Leistungen – Inhalte auf Basis der Originaltexte von friseur-citak.de/dienstleistungen,
// redaktionell überarbeitet. Keine erfundenen Leistungen, Preise oder Versprechen.

export interface Service {
  slug: string;
  name: string;
  category: 'Schnitt & Styling' | 'Farbe & Strähnen' | 'Pflege & Extras' | 'Extensions';
  tagline: string;
  intro: string;
  description: string[];
  benefits: string[];
  audience: string;
  image: string; // Dateiname in src/assets/services
  imageAlt: string;
  related: string[];
  faq: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    slug: 'damenhaarschnitt',
    name: 'Damenhaarschnitt',
    category: 'Schnitt & Styling',
    tagline: 'Ihr typgerechter Schnitt – mit Verwöhnhaarwäsche und Styling-Finish',
    intro:
      'Beratung, Entspannung und Präzision in einem Termin: Bei der Haarwäsche sorgt unser Massageliegestuhl dafür, dass Sie den Alltag hinter sich lassen.',
    description: [
      'Jeder Damenhaarschnitt beginnt mit einer persönlichen Beratung. Gemeinsam finden wir heraus, welcher Schnitt zu Ihrem Typ, Ihrer Haarstruktur und Ihrem Alltag passt.',
      'Während der Verwöhnhaarwäsche entspannen Sie auf unserem Massageliegestuhl bei einer Kopfmassage. Unsere Pflegeprodukte von Wella verleihen Ihrem Haar ein geschmeidiges, gepflegtes Gefühl.',
      'Anschließend schneiden wir Ihren typgerechten Haarschnitt und geben ihm mit einem individuellen Styling den letzten Schliff – damit Sie den Salon mit Ihrem neuen Look verlassen.',
    ],
    benefits: [
      'Persönliche Typberatung vor jedem Schnitt',
      'Verwöhnhaarwäsche mit Kopfmassage auf dem Massageliegestuhl',
      'Pflegeprodukte von Wella',
      'Individuelles Styling mit Finish',
    ],
    audience:
      'Für alle, die sich einen präzisen, typgerechten Schnitt wünschen – vom Bob über den Kurzhaarschnitt bis zum Nachschneiden der Spitzen.',
    image: 'damenhaarschnitt.jpg',
    imageAlt: 'Damenhaarschnitt: moderner blonder Kurzhaarschnitt von Hair Lounge by Citak',
    related: ['repair-cut', 'styling', 'coloration'],
    faq: [
      {
        q: 'Was kostet ein Damenhaarschnitt?',
        a: 'Der Damenhaarschnitt inklusive Beratung, Verwöhnhaarwäsche, Schnitt und Styling kostet bis Kinnlänge 52 €, ab Kinnlänge 62 €. Mit zusätzlichem Pflegebooster 68 € bzw. 78 €. Preise können je nach Aufwand und Produktmenge variieren.',
      },
      {
        q: 'Sollte ich vorher einen Termin vereinbaren?',
        a: 'Ja, wir empfehlen eine Terminvereinbarung – bequem online über unsere Buchungsseite oder telefonisch in Mannheim oder Weinheim.',
      },
    ],
    metaTitle: 'Damenhaarschnitt in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Typgerechter Damenhaarschnitt mit Verwöhnhaarwäsche, Kopfmassage und Styling-Finish. Jetzt Termin in Mannheim oder Weinheim vereinbaren.',
    featured: true,
  },
  {
    slug: 'herrenhaarschnitt',
    name: 'Herrenhaarschnitt',
    category: 'Schnitt & Styling',
    tagline: 'Klassischer Façon oder lässiger Stufenschnitt – wir finden Ihren Stil',
    intro:
      'Ob klassisch oder modern: In einer ehrlichen Beratung finden wir gemeinsam den Schnitt, der zu Ihnen passt.',
    description: [
      'Ein klassischer Façon oder doch ein lässiger Stufenhaarschnitt? In der Beratung klären wir, was zu Ihrer Kopfform, Ihrem Haartyp und Ihrem Stil passt.',
      'Bei der Entspannungshaarwäsche werden lästige Schnitthaare vollständig herausgewaschen – Sie verlassen den Salon ohne Jucken und Kratzen.',
      'Sowohl bei der Haarwäsche als auch beim Styling arbeiten wir ausschließlich mit renommierten Barber-Produkten.',
    ],
    benefits: [
      'Individuelle Beratung zu Stil und Kopfform',
      'Entspannungshaarwäsche inklusive',
      'Renommierte Barber-Produkte',
      'Sauberes Styling mit Finish',
    ],
    audience:
      'Für Herren, die Wert auf einen gepflegten, stimmigen Look legen – vom Business-Façon bis zum modernen Stufenschnitt.',
    image: 'herrenhaarschnitt.jpg',
    imageAlt: 'Barber-Produkte im Salon von Hair Lounge by Citak',
    related: ['fade-cut', 'styling', 'damenhaarschnitt'],
    faq: [
      {
        q: 'Was kostet ein Herrenhaarschnitt?',
        a: 'Der Herrenhaarschnitt kostet in Mannheim 35 €, in Weinheim 32 € – inklusive Beratung, Verwöhnhaarwäsche, Schnitt und Styling. Mit vitalisierender Kopfmassage 45 € (Mannheim) bzw. 42 € (Weinheim).',
      },
      {
        q: 'Arbeitet ihr mit Barber-Produkten?',
        a: 'Ja, bei Haarwäsche und Styling verwenden wir für unsere Herren ausschließlich renommierte Barber-Produkte.',
      },
    ],
    metaTitle: 'Herrenhaarschnitt in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Herrenhaarschnitt mit Beratung, Entspannungshaarwäsche und Barber-Produkten. Façon, Stufenschnitt & Styling. Termin online buchen.',
    featured: true,
  },
  {
    slug: 'fade-cut',
    name: 'Fade Cut',
    category: 'Schnitt & Styling',
    tagline: 'Der Façon 2.0 – präzise Übergänge ab exakt 0 mm',
    intro:
      'Der Fade Cut ist die moderne Variante des klassischen Herrenhaarschnitts: Die gesamte Haarkontur beginnt bei exakt 0 mm.',
    description: [
      'Beim Fade Cut wird die gesamte Haarkontur mit exakt 0 mm begonnen und stufenlos in die längeren Partien übergeführt.',
      'Je nach Wunsch arbeiten wir den Übergang mit der Rasierklinge oder einer speziellen Fade-Cut-Konturenmaschine aus – für ein besonders sauberes, präzises Ergebnis.',
    ],
    benefits: [
      'Präzise Übergänge ab 0 mm',
      'Wahlweise mit Rasierklinge oder Konturenmaschine',
      'Moderne, saubere Konturen',
      'Passendes Finish mit Barber-Produkten',
    ],
    audience: 'Für Herren, die einen modernen, markanten Kurzhaarschnitt mit klaren Konturen möchten.',
    image: 'fade-cut.jpg',
    imageAlt: 'Fade Cut: präziser Übergang beim Herrenhaarschnitt',
    related: ['herrenhaarschnitt', 'styling'],
    faq: [
      {
        q: 'Was ist der Unterschied zwischen Fade Cut und klassischem Façon?',
        a: 'Beim Fade Cut beginnt die Kontur bei exakt 0 mm und läuft stufenlos in die Länge aus – der Übergang ist damit deutlich präziser und moderner als beim klassischen Façon.',
      },
    ],
    metaTitle: 'Fade Cut in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Fade Cut mit präzisen Übergängen ab 0 mm – mit Rasierklinge oder Konturenmaschine. Jetzt Termin in Mannheim oder Weinheim buchen.',
  },
  {
    slug: 'balayage',
    name: 'Balayage',
    category: 'Farbe & Strähnen',
    tagline: 'Natürliche Farbverläufe – wie von der Sonne geküsst',
    intro:
      'Balayage steht für einen weichen, natürlichen Farbverlauf: Der Ansatz bleibt im Naturton, die Längen und Spitzen erstrahlen in hellem Glanz.',
    description: [
      'Bei der Balayage-Technik bleiben etwa 5–10 cm des Ansatzes im Naturton oder werden auf Wunsch dunkler gefärbt. Die Längen und Spitzen verlaufen flächig hell.',
      'Das Ergebnis wirkt natürlich und wie von der Sonne geküsst – eine langanhaltende, wunderschöne Haarfarbe, die ohne harten Ansatz auswächst.',
      'Durch regelmäßige Weiterbildungen unseres Teams setzen wir Techniken wie Balayage, Ombré und Painting Highlights sicher und typgerecht um.',
    ],
    benefits: [
      'Natürlicher, weicher Farbverlauf',
      'Kein harter Ansatz beim Herauswachsen',
      'Langanhaltendes Ergebnis',
      'Individuell auf Ihren Typ abgestimmt',
    ],
    audience:
      'Für alle, die sich eine natürliche Aufhellung ohne sichtbaren Ansatz wünschen – von dezenten Nuancen bis zu markanten Verläufen.',
    image: 'balayage.jpg',
    imageAlt: 'Balayage: natürlicher Farbverlauf in warmen Brauntönen',
    related: ['babylights', 'folienstraehnen', 'glossing'],
    faq: [
      {
        q: 'Was kostet eine Balayage?',
        a: 'Balayage-Techniken werden je nach Aufwand individuell kalkuliert – der Preis ist daher auf Anfrage. Gern beraten wir Sie vorab persönlich und nennen Ihnen einen konkreten Preis.',
      },
      {
        q: 'Wie pflegeleicht ist eine Balayage?',
        a: 'Da der Ansatz im Naturton bleibt, wächst eine Balayage ohne harten Übergang heraus. Das macht sie deutlich pflegeleichter als klassische Färbungen.',
      },
    ],
    metaTitle: 'Balayage in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Balayage mit natürlichem Farbverlauf – wie von der Sonne geküsst, ohne harten Ansatz. Beratung & Termin in Mannheim oder Weinheim.',
    featured: true,
  },
  {
    slug: 'babylights',
    name: 'Babylights',
    category: 'Farbe & Strähnen',
    tagline: 'Feinste Strähnen für ein natürlich helles Farbbild',
    intro:
      'Babylights sind besonders feine Foliensträhnen, die bis an den Ansatz gesetzt werden – für ein natürlich helles Farbbild vom Ansatz bis in die Spitzen.',
    description: [
      'Bei dieser Technik werden sehr feine Foliensträhnen bis zum Ansatz gesetzt. Das präzise Setzen der Folien erzeugt ein sehr natürlich helles Farbbild.',
      'Vom Ansatz bis in die Spitze entsteht ein gleichmäßiges, feines Ergebnis – dadurch lassen sich besonders helle und zugleich natürliche Effekte erzielen.',
    ],
    benefits: [
      'Besonders feine, natürliche Strähnen',
      'Gleichmäßiges Farbbild vom Ansatz bis in die Spitzen',
      'Sehr helle Ergebnisse möglich',
      'Sanft wirkende Aufhellung',
    ],
    audience: 'Für alle, die ein sehr natürliches, helles Blond oder feine Lichtreflexe ohne markante Strähnen wünschen.',
    image: 'babylights.jpg',
    imageAlt: 'Babylights: feines, natürliches Blond vom Ansatz bis in die Spitzen',
    related: ['folienstraehnen', 'balayage', 'glossing'],
    faq: [
      {
        q: 'Worin unterscheiden sich Babylights von Foliensträhnen?',
        a: 'Babylights werden deutlich feiner gesetzt und reichen bis an den Ansatz. Das Farbbild wirkt dadurch natürlicher und weicher als bei klassischen Foliensträhnen.',
      },
      {
        q: 'Was kosten Babylights?',
        a: 'Typgerechte Foliensträhnen – dazu zählen auch Babylights – kosten je nach Menge zwischen 55 € und 115 € inklusive Farbberatung und spezieller Farbversiegelung.',
      },
    ],
    metaTitle: 'Babylights in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Babylights: feinste Foliensträhnen für ein natürlich helles Farbbild vom Ansatz bis in die Spitzen. Termin in Mannheim oder Weinheim.',
  },
  {
    slug: 'folienstraehnen',
    name: 'Foliensträhnen',
    category: 'Farbe & Strähnen',
    tagline: 'Der Klassiker – gleichmäßige Strähnen vom Ansatz bis in die Spitzen',
    intro:
      'Foliensträhnen kommen nie aus der Mode: Mit Folien setzen wir klassische Strähnen für ein gleichmäßiges Farbbild.',
    description: [
      'Bei den klassischen Foliensträhnen werden die Strähnen mit Folien gesetzt, um vom Ansatz bis in die Spitzen ein gleichmäßiges Farbbild zu erhalten.',
      'Im Vergleich zu Babylights ist das Farbbild markanter und die gesetzten Strähnen deutlich erkennbarer – ideal, wenn Sie sich klar definierte Kontraste wünschen.',
    ],
    benefits: [
      'Gleichmäßiges Farbbild vom Ansatz bis in die Spitzen',
      'Markante, klar sichtbare Strähnen',
      'Individuelle Farbberatung inklusive',
      'Spezielle Farbversiegelung',
    ],
    audience: 'Für alle, die sich sichtbare, klar definierte Strähnen und starke Kontraste im Haar wünschen.',
    image: 'folienstraehnen.jpg',
    imageAlt: 'Foliensträhnen: gleichmäßiges, markantes Farbbild',
    related: ['babylights', 'balayage', 'coloration'],
    faq: [
      {
        q: 'Was kosten Foliensträhnen?',
        a: 'Typgerechte Foliensträhnen inklusive individueller Farbberatung und spezieller Farbversiegelung kosten je nach Menge zwischen 55 € und 115 €.',
      },
    ],
    metaTitle: 'Foliensträhnen in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Klassische Foliensträhnen vom Ansatz bis in die Spitzen – gleichmäßig, markant, typgerecht. Beratung & Termin in Mannheim oder Weinheim.',
  },
  {
    slug: 'coloration',
    name: 'Coloration',
    category: 'Farbe & Strähnen',
    tagline: 'Permanente Haarfarbe – bis zu 100 % deckend',
    intro:
      'Neuer Look gefällig? Mit einer permanenten Haarfarbe lassen sich natürliche wie ausdrucksstarke Ergebnisse zaubern.',
    description: [
      'Eine Coloration ist die permanente Haarfarbe: Sie hält dauerhaft und ist bis zu 100 % deckend – ideal, wenn Sie sich eine verlässliche, gleichmäßige Farbe wünschen.',
      'Wir arbeiten mit den Farbprodukten von Wella. Dabei stehen Haarschonung und Farbglanz immer im Fokus.',
      'Ob natürliche Nuance oder plakativer Statement-Look: In der individuellen Farbberatung finden wir den Ton, der zu Ihrem Typ passt.',
    ],
    benefits: [
      'Permanente, bis zu 100 % deckende Farbe',
      'Farbprodukte von Wella',
      'Haarschonung und Farbglanz im Fokus',
      'Individuelle Farbberatung',
    ],
    audience: 'Für alle, die eine dauerhafte, deckende Farbveränderung wünschen – von natürlich bis ausdrucksstark.',
    image: 'coloration.jpg',
    imageAlt: 'Coloration: gleichmäßige, glänzende Haarfarbe in sattem Braun',
    related: ['intensivtoenung', 'glossing', 'damenhaarschnitt'],
    faq: [
      {
        q: 'Was kostet eine Coloration?',
        a: 'Die Pflegehaarfarbe inklusive individueller Farbberatung und spezieller Farbversiegelung (bis 40 g) kostet 57 €. Je nach Aufwand und Produktmenge kann der Preis variieren.',
      },
      {
        q: 'Wie lange hält eine Coloration?',
        a: 'Eine Coloration ist eine permanente Haarfarbe – sie bleibt dauerhaft im Haar und wächst mit dem Ansatz heraus. Je nach Wunsch empfehlen wir einen Nachtermin für den Ansatz.',
      },
    ],
    metaTitle: 'Coloration in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Permanente Coloration mit Wella – bis zu 100 % deckend, glänzend und typgerecht. Termin in Mannheim oder Weinheim vereinbaren.',
  },
  {
    slug: 'intensivtoenung',
    name: 'Intensivtönung',
    category: 'Farbe & Strähnen',
    tagline: 'Farbveränderung ohne endgültige Entscheidung',
    intro:
      'Eine Intensivtönung ist ideal, wenn Sie sich farblich verändern möchten, ohne sich ganz festzulegen.',
    description: [
      'Die Intensivtönung verwäscht sich schonend und deckt erste weiße Haare zuverlässig ab – perfekt für alle, die eine Veränderung ohne dauerhafte Bindung suchen.',
      'Bei unseren Farbprodukten von Wella stehen Haarschonung und Farbglanz immer im Fokus – für ein gesund aussehendes, glänzendes Ergebnis.',
    ],
    benefits: [
      'Schonende, sich verweischende Tönung',
      'Deckt erste weiße Haare ab',
      'Farbprodukte von Wella',
      'Mehr Glanz und Farbtiefe',
    ],
    audience: 'Für alle, die ihre Haarfarbe sanft verändern oder erste weiße Haare abdecken möchten – ohne permanente Färbung.',
    image: 'intensivtoenung.jpg',
    imageAlt: 'Intensivtönung: natürlicher, glänzender Blondton mit sanften Wellen',
    related: ['coloration', 'glossing', 'balayage'],
    faq: [
      {
        q: 'Was ist der Unterschied zwischen Intensivtönung und Coloration?',
        a: 'Die Intensivtönung verwäscht sich schrittweise und ist ideal für sanfte Veränderungen oder erste weiße Haare. Die Coloration ist permanent und bis zu 100 % deckend.',
      },
    ],
    metaTitle: 'Intensivtönung in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Intensivtönung mit Wella: schonende Farbveränderung, deckt erste weiße Haare. Jetzt Beratung in Mannheim oder Weinheim sichern.',
  },
  {
    slug: 'glossing',
    name: 'Glossing',
    category: 'Farbe & Strähnen',
    tagline: 'Farbveredelung und seidiger Glanz in kurzer Zeit',
    intro:
      'Glossing wird vor allem von Blondinen geliebt – als Farbveredelung oder um einen Gelbstich zuverlässig zu korrigieren.',
    description: [
      'Ob Farbauffrischung oder Korrektur eines Gelbstichs: Mit einem Glossing entsteht in kurzer Zeit ein geschmeidiger Glanz und ein edles Farbbild.',
      'Das Glossing veredelt Ihre bestehende Haarfarbe, ohne sie grundlegend zu verändern – ideal als Finish nach Strähnen oder Balayage.',
    ],
    benefits: [
      'Korrigiert Gelbstich',
      'Seidiger Glanz in kurzer Zeit',
      'Veredelt bestehende Haarfarbe',
      'Ideales Finish nach Strähnen oder Balayage',
    ],
    audience: 'Für alle – besonders Blondinen –, die ihre Farbe auffrischen, veredeln oder einen Gelbstich korrigieren möchten.',
    image: 'glossing.png',
    imageAlt: 'Glossing: glänzendes, edles Blond mit seidigem Finish',
    related: ['balayage', 'babylights', 'coloration'],
    faq: [
      {
        q: 'Was kostet ein Glossing?',
        a: 'Das Glossing kostet bis 20 g 23 €. Je nach Haarlänge und Produktmenge kann der Preis variieren – gern beraten wir Sie vorab.',
      },
      {
        q: 'Hilft ein Glossing gegen Gelbstich?',
        a: 'Ja, genau dafür wird es häufig eingesetzt: Ein Glossing neutralisiert unerwünschte Gelbtöne und verleiht dem Haar ein kühles, edles Farbbild mit Glanz.',
      },
    ],
    metaTitle: 'Glossing in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Glossing für seidigen Glanz und gegen Gelbstich – Farbveredelung in kurzer Zeit. Termin in Mannheim oder Weinheim buchen.',
  },
  {
    slug: 'faceframe',
    name: 'Faceframe',
    category: 'Farbe & Strähnen',
    tagline: 'Gezielte Helligkeiten, die Ihr Gesicht optimal in Szene setzen',
    intro:
      'Das Gesicht bekommt einen Rahmen: Durch gezielt platzierte Helligkeiten heben wir Ihre schönsten Gesichtsmerkmale hervor.',
    description: [
      'Beim Faceframing werden helle Strähnen exakt rund ums Gesicht platziert. So entsteht ein Rahmen aus Licht, der die Gesichtszüge betont und frisch wirken lässt.',
      'Das kann in verschiedenster Form passieren – von dezenten Akzenten bis zu markanten hellen Partien rund um das Gesicht.',
    ],
    benefits: [
      'Betont die Gesichtszüge gezielt',
      'Frischer, wacher Look',
      'Individuell anpassbar – dezent bis markant',
      'Kombinierbar mit Balayage oder Strähnen',
    ],
    audience: 'Für alle, die ihrem Look mit wenigen, gezielten Strähnen mehr Ausdruck verleihen möchten.',
    image: 'faceframe.png',
    imageAlt: 'Faceframe: helle Strähnen als Rahmen rund ums Gesicht',
    related: ['babylights', 'folienstraehnen', 'balayage'],
    faq: [
      {
        q: 'Was ist ein Faceframe?',
        a: 'Beim Faceframing setzen wir gezielt helle Strähnen rund um Ihr Gesicht. Dadurch werden Ihre Gesichtsmerkmale optimal hervorgehoben – wie ein Rahmen aus Licht.',
      },
    ],
    metaTitle: 'Faceframe in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Faceframing: gezielte Helligkeiten rund ums Gesicht für einen frischen, betonten Look. Beratung & Termin in Mannheim oder Weinheim.',
  },
  {
    slug: 'repair-cut',
    name: 'Repair Cut',
    category: 'Pflege & Extras',
    tagline: 'Der Pflege-Haarschnitt, den Langhaarkundinnen lieben',
    intro:
      'Beim Repair Cut wird das Haar vor dem Schnitt mit einem besonderen Pflegeprodukt benetzt – bereits nach der ersten Behandlung spürbar.',
    description: [
      'Der Repair Cut verbindet Haarschnitt und Intensivpflege: Vor dem Schnitt wird das Haar mit einem besonderen Pflegeprodukt benetzt.',
      'Dabei wird die DNA des Haares perfekt erkannt und wiederhergestellt – das Ergebnis ist bereits nach der ersten Behandlung spürbar.',
      'Ein Must-have für alle Langhaarfrauen, die ihren Schnitt und die Gesundheit ihrer Längen gleichermaßen ernst nehmen.',
    ],
    benefits: [
      'Schnitt und Intensivpflege in einem Schritt',
      'Besonderes Pflegeprodukt vor dem Schnitt',
      'Bereits nach der 1. Behandlung spürbar',
      'Ideal für langes Haar',
    ],
    audience: 'Für Langhaarkundinnen und alle, die ihrem Haar neben dem Schnitt eine spürbare Pflegekur gönnen möchten.',
    image: 'repair-cut.jpg',
    imageAlt: 'Repair Cut: hochwertige Pflegeprodukte im Salon',
    related: ['damenhaarschnitt', 'styling', 'glossing'],
    faq: [
      {
        q: 'Für wen ist der Repair Cut geeignet?',
        a: 'Der Repair Cut ist besonders bei langem Haar beliebt. Er verbindet den Haarschnitt mit einer Intensivpflege, die bereits nach der ersten Behandlung spürbar ist.',
      },
    ],
    metaTitle: 'Repair Cut in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Repair Cut: Haarschnitt plus Intensivpflege – bereits nach der ersten Behandlung spürbar. Termin in Mannheim oder Weinheim buchen.',
  },
  {
    slug: 'styling',
    name: 'Styling',
    category: 'Schnitt & Styling',
    tagline: 'Vom klassischen Volumen bis zu modernen Beach Waves',
    intro:
      'Styling ist ein großes, breitgefächertes Thema – wir kreieren Ihren individuellen Look für jeden Anlass.',
    description: [
      'Ob mit der Rundbürste eine klassische Volumenfrisur oder mit dem GHD Glätteisen moderne, natürliche Beach Waves: Wir freuen uns darauf, Ihren individuellen Look zu kreieren.',
      'Auch für besondere Anlässe sind Sie bei uns richtig – von der eleganten Hochsteckfrisur bis zur Brautfrisur inklusive Probesteckfrisur und typgerechtem Make-up.',
    ],
    benefits: [
      'Klassische Volumenfrisuren mit der Rundbürste',
      'Moderne Beach Waves mit dem GHD Glätteisen',
      'Hochsteck- und Brautfrisuren auf Anfrage',
      'Individueller Look für jeden Anlass',
    ],
    audience: 'Für alle, die sich ein professionelles Styling wünschen – im Alltag, vor einem Event oder am Hochzeitstag.',
    image: 'styling.png',
    imageAlt: 'Styling: glamouröse, voluminöse Wellenfrisur',
    related: ['damenhaarschnitt', 'repair-cut', 'balayage'],
    faq: [
      {
        q: 'Bietet ihr auch Brautfrisuren an?',
        a: 'Ja, die Brautfrisur inklusive Probesteckfrisur und typgerechtem Make-up kostet 299 €. Gern beraten wir Sie vorab persönlich zu Ihrem Wunschlook.',
      },
      {
        q: 'Was kostet ein Styling ohne Schnitt?',
        a: 'Beratung, Verwöhnhaarwäsche und Styling mit Finish kosten bis Kinnlänge 32 €, ab Kinnlänge 42 €. Die Hochsteckfrisur mit Finish erhalten Sie auf Anfrage.',
      },
    ],
    metaTitle: 'Styling in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Professionelles Styling: Volumen, Beach Waves, Hochsteck- & Brautfrisuren. Termin in Mannheim oder Weinheim vereinbaren.',
  },
  {
    slug: 'augenpflege',
    name: 'Augenpflege & Brow-Styling',
    category: 'Pflege & Extras',
    tagline: 'Schöne Augenbrauen sind der Rahmen unseres Gesichts',
    intro:
      'Ob Färben, Zupfen oder ein BrowLift: Wir kümmern uns um Ihren Ausdruck.',
    description: [
      'Gepflegte Augenbrauen verändern das gesamte Gesicht. Wir formen, färben und zupfen Ihre Brauen passend zu Ihrer Gesichtsform.',
      'Auch Wimpern- und Augenbrauenfarbe sowie die Gesichtsenthaarung mit der schonenden Fadentechnik gehören zu unserem Angebot.',
    ],
    benefits: [
      'Augenbrauen-Design passend zur Gesichtsform',
      'Färben von Brauen und Wimpern',
      'BrowLift auf Wunsch',
      'Gesichtsenthaarung mit Fadentechnik',
    ],
    audience: 'Für alle, die ihren Blick mit gepflegten Brauen und Wimpern gezielt in Szene setzen möchten.',
    image: 'augenpflege.png',
    imageAlt: 'Augenpflege: perfekt geformte Augenbrauen als Rahmen des Gesichts',
    related: ['faceframe', 'styling', 'glossing'],
    faq: [
      {
        q: 'Was kostet das Augenbrauen-Design?',
        a: 'Das Augenbrauen-Design kostet 10 €, Augenbrauen- und Wimpernfarbe 12 €. Die Gesichtsenthaarung mit Fadentechnik kostet 25 €.',
      },
    ],
    metaTitle: 'Augenbrauen & Augenpflege in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Augenbrauen-Design, Färben, BrowLift und Fadentechnik – für einen Ausdruck, der überzeugt. Termin in Mannheim oder Weinheim.',
  },
  {
    slug: 'extensions',
    name: 'Extensions & Haarverdichtung',
    category: 'Extensions',
    tagline: 'Haarverlängerung mit Ultraschall von Great Lengths',
    intro:
      'Wir wurden ausgezeichnet: Hair Lounge by Citak gehört zu den besten Great-Lengths-Salons in Deutschland.',
    description: [
      'Bei der Ultraschall-Methode von Great Lengths aktiviert der Ultraschall die Verbindungsstelle zwischen Eigenhaar und Strähne – ohne Haar und Kopfhaut nachhaltig zu beeinflussen. Selbst nach mehrfacher Anwendung bleibt das Haar, wie ein wissenschaftliches Gutachten beweist, völlig intakt und gesund.',
      'Strähne für Strähne wird so mit Ihrem Eigenhaar verbunden, dass die kleinen Verbindungsstellen verborgen unter dem Deckhaar liegen. Mit nur wenigen Strähnen lassen sich verblüffende Effekte erzielen – oder Sie entscheiden sich für eine Haarpracht in neuer Dimension.',
      'Ob glatt, gewellt oder gelockt, ob fein oder kräftig: Es gibt immer das ideal auf Ihre Wünsche abgestimmte Resultat. Bei dieser Kundin wurden beispielsweise 75 Extensions in einer Haarlänge von 40 cm verarbeitet.',
    ],
    benefits: [
      'Ausgezeichneter Great-Lengths-Salon',
      'Schonende Ultraschall-Technik',
      'Verbindungsstellen unsichtbar unter dem Deckhaar',
      'Echthaar von Great Lengths – abgestimmt auf Ihren Haartyp',
    ],
    audience: 'Für alle, die sich längeres, volleres Haar oder eine Verdichtung am Oberkopf wünschen – auch bei diffusem Haar.',
    image: 'extensions-nachher.jpg',
    imageAlt: 'Extensions: Ergebnis nach der Haarverlängerung mit Great Lengths',
    related: ['glossing', 'damenhaarschnitt', 'coloration'],
    faq: [
      {
        q: 'Was kosten Extensions?',
        a: 'Der Preis richtet sich nach Anzahl der Strähnen und gewünschter Länge – Great-Lengths-Extensions erhalten Sie daher auf Anfrage. Gern erstellen wir Ihnen ein persönliches Angebot.',
      },
      {
        q: 'Was ist GL Volume?',
        a: 'GL Volume ist das innovative Oberkopfverdichtungs-System von Great Lengths bei diffusem Haar. Es besteht aus hochwertigem Echthaar. Auf Wunsch rechnen wir bei diesem Thema auch direkt mit Ihrer Krankenkasse ab.',
      },
      {
        q: 'Schadet die Ultraschall-Methode dem eigenen Haar?',
        a: 'Nein. Ein wissenschaftliches Gutachten belegt: Selbst nach mehrfacher Anwendung bleibt das Haar bei dieser Methode völlig intakt und gesund.',
      },
    ],
    metaTitle: 'Extensions & Haarverdichtung in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Extensions mit Ultraschall von Great Lengths – ausgezeichneter Salon. Haarverlängerung, Verdichtung & GL Volume. Beratungstermin sichern.',
    featured: true,
  },
  {
    slug: 'brautstyling',
    name: 'Brautstyling & Brautfrisur',
    category: 'Schnitt & Styling',
    tagline: 'Brautfrisur, Probesteckfrisur und typgerechtes Make-up',
    intro:
      'Ein abgestimmter Look für den Hochzeitstag: Die veröffentlichte Brautleistung verbindet Frisur, Probestecken und typgerechtes Make-up.',
    description: [
      'Zum Brautangebot gehören laut den Preislisten der Salons Mannheim und Weinheim die Brautfrisur, eine Probesteckfrisur und typgerechtes Make-up.',
      'Im Probetermin lässt sich der gewünschte Look vor dem Hochzeitstag besprechen und vorbereiten. Weitere Wünsche und der konkrete Ablauf werden persönlich abgestimmt.',
    ],
    benefits: [
      'Brautfrisur mit Finish',
      'Probesteckfrisur im Leistungsumfang',
      'Typgerechtes Make-up',
      'Persönliche Abstimmung vor dem Hochzeitstag',
    ],
    audience: 'Für Bräute, die Frisur und Make-up als abgestimmte Salonleistung planen möchten.',
    image: 'brautfrisur.jpg',
    imageAlt: 'Brautfrisur von Hair Lounge by Citak',
    related: ['hochsteckfrisur', 'make-up', 'styling'],
    faq: [
      {
        q: 'Was kostet das veröffentlichte Brautpaket?',
        a: 'Die Preislisten für Mannheim und Weinheim nennen 299 € für Brautfrisur inklusive Probesteckfrisur und typgerechtem Make-up. Preise können je nach Aufwand variieren.',
      },
      {
        q: 'Ist eine Probesteckfrisur enthalten?',
        a: 'Ja. Die Probesteckfrisur ist in der veröffentlichten Brautleistung ausdrücklich enthalten.',
      },
    ],
    metaTitle: 'Brautstyling & Brautfrisur in Mannheim und Weinheim',
    metaDescription:
      'Brautfrisur inklusive Probesteckfrisur und typgerechtem Make-up bei Hair Lounge by Citak. Persönliche Beratung in Mannheim und Weinheim.',
  },
  {
    slug: 'hochsteckfrisur',
    name: 'Hochsteckfrisur',
    category: 'Schnitt & Styling',
    tagline: 'Elegantes Event-Styling mit Finish',
    intro:
      'Für Feiern und besondere Anlässe führen beide aktiven Salons Hochsteckfrisuren mit Finish in ihren Preislisten.',
    description: [
      'Die Hochsteckfrisur wird als eigene Leistung mit Finish angeboten. Der gewünschte Stil und der notwendige Aufwand werden vorab persönlich abgestimmt.',
      'Da die Ausführung vom Anlass, der Haarlänge und dem gewünschten Look abhängt, veröffentlichen die Salons hierfür keinen festen Preis.',
    ],
    benefits: [
      'Eigenständige Styling-Leistung',
      'Finish im Leistungsumfang',
      'Persönliche Abstimmung des Wunschlooks',
      'Preis transparent auf Anfrage',
    ],
    audience: 'Für Kund:innen, die zu einem besonderen Anlass eine professionelle Hochsteckfrisur wünschen.',
    image: 'brautfrisur.jpg',
    imageAlt: 'Elegante Hochsteckfrisur von Hair Lounge by Citak',
    related: ['brautstyling', 'make-up', 'beach-waves'],
    faq: [
      {
        q: 'Was kostet eine Hochsteckfrisur?',
        a: 'Die aktuellen Preislisten nennen „auf Anfrage“. Bitte stimmen Sie Anlass, Haarlänge und gewünschten Look direkt mit dem Salon ab.',
      },
    ],
    metaTitle: 'Hochsteckfrisur in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Hochsteckfrisur mit Finish für besondere Anlässe. Preis und Ablauf auf Anfrage in Mannheim oder Weinheim abstimmen.',
  },
  {
    slug: 'make-up',
    name: 'Make-up',
    category: 'Pflege & Extras',
    tagline: 'Typgerechtes Make-up als Ergänzung zum Styling',
    intro:
      'Hair Lounge by Citak führt Make-up als buchbare Leistung und als Bestandteil des veröffentlichten Brautpakets.',
    description: [
      'Das Make-up wird passend zum gewünschten Gesamtlook abgestimmt. Auf der Originalwebsite wird es als Ergänzung zum Brautstyling sowie in den Preislisten der aktiven Salons aufgeführt.',
      'Für Tages- und Abend-Make-up veröffentlichen Mannheim und Weinheim derzeit keine getrennten festen Preise. Die konkrete Ausführung und der Preis werden deshalb vorab angefragt.',
    ],
    benefits: [
      'Typgerechte Abstimmung',
      'Passend zu Frisur und Anlass',
      'Im Brautpaket enthalten',
      'Einzelleistung auf Anfrage',
    ],
    audience: 'Für Kund:innen, die ihr Styling mit einem typgerechten Make-up ergänzen möchten.',
    image: 'brautfrisur.jpg',
    imageAlt: 'Brautstyling mit typgerechtem Make-up',
    related: ['brautstyling', 'hochsteckfrisur', 'styling'],
    faq: [
      {
        q: 'Bietet Hair Lounge Tages- und Abend-Make-up an?',
        a: 'Make-up ist als Leistung belegt. Die aktiven Salonseiten unterscheiden aktuell jedoch nicht öffentlich zwischen Tages- und Abend-Make-up; Preis und Ausführung erhalten Sie daher auf Anfrage.',
      },
    ],
    metaTitle: 'Make-up in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Typgerechtes Make-up passend zu Frisur und Anlass. Einzelbuchung auf Anfrage oder als Teil des Brautstylings.',
  },
  {
    slug: 'beach-waves',
    name: 'Beach Waves',
    category: 'Schnitt & Styling',
    tagline: 'Natürlich wirkende Wellen mit dem GHD Glätteisen',
    intro:
      'Moderne, natürliche Beach Waves gehören ausdrücklich zum Styling-Angebot der Hair Lounge by Citak.',
    description: [
      'Die Originalwebsite beschreibt Beach Waves als Styling mit dem GHD Glätteisen. Der Look wird im Rahmen des individuellen Stylings erarbeitet.',
      'Die passende Ausführung richtet sich nach Haar und gewünschtem Finish und wird beim Termin abgestimmt.',
    ],
    benefits: [
      'Veröffentlichte Styling-Leistung',
      'Ausarbeitung mit dem GHD Glätteisen',
      'Natürlich wirkender Wellen-Look',
      'Individuelles Finish',
    ],
    audience: 'Für Kund:innen, die sich moderne, natürliche Wellen als professionelles Styling wünschen.',
    image: 'styling.png',
    imageAlt: 'Professionelles Styling mit voluminösen Wellen',
    related: ['styling', 'hochsteckfrisur', 'glossing'],
    faq: [
      {
        q: 'Wie werden die Beach Waves gestylt?',
        a: 'Die Originalwebsite nennt hierfür das GHD Glätteisen. Die konkrete Ausführung wird passend zum Haar und zum gewünschten Look abgestimmt.',
      },
    ],
    metaTitle: 'Beach Waves in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Moderne, natürliche Beach Waves mit dem GHD Glätteisen. Individuelles Styling in Mannheim oder Weinheim anfragen.',
  },
  {
    slug: 'bartstyling',
    name: 'Bartstyling',
    category: 'Schnitt & Styling',
    tagline: 'Gepflegter Bart als Teil des Barber-Angebots',
    intro:
      'Die Hair Lounge nennt einen gestylten Bart ausdrücklich als Teil ihres Barber-Angebots für Mannheim und Weinheim.',
    description: [
      'Das Bartstyling ergänzt das veröffentlichte Angebot für Herren. Der gewünschte Stil und der notwendige Aufwand werden direkt mit dem Team abgestimmt.',
      'Ein eigenständiger Festpreis ist auf den aktuellen Preislisten nicht veröffentlicht. Deshalb bleibt der Preis transparent auf Anfrage.',
    ],
    benefits: [
      'Teil des veröffentlichten Barber-Angebots',
      'Abstimmung des gewünschten Stils',
      'Kombinierbar mit einem Herrenhaarschnitt',
      'Preis auf Anfrage',
    ],
    audience: 'Für Herren, die ihren Bart professionell in Form bringen lassen möchten.',
    image: 'herrenhaarschnitt.jpg',
    imageAlt: 'Barber-Produkte bei Hair Lounge by Citak',
    related: ['herrenhaarschnitt', 'fade-cut', 'grauhaarveredelung'],
    faq: [
      {
        q: 'Was kostet das Bartstyling?',
        a: 'Für Bartstyling ist derzeit kein eigenständiger Preis veröffentlicht. Bitte fragen Sie den gewünschten Umfang direkt im Salon an.',
      },
    ],
    metaTitle: 'Bartstyling in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Bartstyling als Teil des Barber-Angebots von Hair Lounge by Citak. Umfang und Preis in Mannheim oder Weinheim anfragen.',
  },
  {
    slug: 'keratinglaettung',
    name: 'Keratinglättung',
    category: 'Pflege & Extras',
    tagline: 'Technik, spezielle Finishbehandlung und Styling',
    intro:
      'Die Keratinglättung ist in den veröffentlichten Preislisten beider aktiven Salons als Permanent-Styling-Leistung aufgeführt.',
    description: [
      'Die veröffentlichte Leistung umfasst die Keratinglättung, die entsprechende Technik, eine spezielle Finishbehandlung und das abschließende Styling.',
      'Weitere Aussagen zur Eignung, Haltbarkeit oder zum individuellen Ergebnis werden bewusst erst nach persönlicher Beratung getroffen.',
    ],
    benefits: [
      'Veröffentlichte Permanent-Styling-Leistung',
      'Spezielle Finishbehandlung',
      'Abschließendes Styling',
      'Persönliche Beratung vor der Behandlung',
    ],
    audience: 'Für Kund:innen, die sich zur Keratinglättung persönlich und typgerecht beraten lassen möchten.',
    image: 'repair-cut.jpg',
    imageAlt: 'Pflegeprodukte für eine professionelle Haarbehandlung',
    related: ['haarglaettung-straighten-it', 'dauerwelle-curl-it', 'repair-cut'],
    faq: [
      {
        q: 'Was kostet die Keratinglättung?',
        a: 'Die Preislisten für Mannheim und Weinheim nennen 249 € bis Kinnlänge und 299 € ab Kinnlänge. Preise können je nach Aufwand und Produktmenge variieren.',
      },
    ],
    metaTitle: 'Keratinglättung in Mannheim & Weinheim | Hair Lounge by Citak',
    metaDescription:
      'Keratinglättung mit spezieller Finishbehandlung und Styling. Verifizierte Preise und persönliche Beratung in Mannheim und Weinheim.',
  },
  {
    slug: 'dauerwelle-curl-it',
    name: 'Dauerwelle · Curl It',
    category: 'Schnitt & Styling',
    tagline: 'Permanent Styling mit Curl-It-Technik',
    intro:
      '„Curl It (Dauerwelle)“ ist in Mannheim und Weinheim als eigene Permanent-Styling-Technik veröffentlicht.',
    description: [
      'Die Salonpreislisten nennen eine individuelle Beratung, die Curl-It-Technik für die Dauerwelle, eine spezielle Finishbehandlung und das Styling.',
      'Welche Ausführung zum Haar und zum gewünschten Look passt, wird im persönlichen Beratungsgespräch geklärt.',
    ],
    benefits: [
      'Individuelle Beratung',
      'Veröffentlichte Curl-It-Technik',
      'Spezielle Finishbehandlung',
      'Styling im Leistungsumfang',
    ],
    audience: 'Für Kund:innen, die sich für eine Dauerwelle mit der veröffentlichten Curl-It-Technik interessieren.',
    image: 'styling.png',
    imageAlt: 'Voluminöses Styling bei Hair Lounge by Citak',
    related: ['styling', 'beach-waves', 'haarglaettung-straighten-it'],
    faq: [
      {
        q: 'Was kostet Curl It beziehungsweise eine Dauerwelle?',
        a: 'Die aktiven Salonseiten nennen 89 € bis Kinnlänge und 139 € ab Kinnlänge. Preise können je nach Aufwand und Produktmenge variieren.',
      },
    ],
    metaTitle: 'Dauerwelle & Curl It in Mannheim und Weinheim',
    metaDescription:
      'Dauerwelle mit Curl-It-Technik, Beratung, spezieller Finishbehandlung und Styling bei Hair Lounge by Citak.',
  },
  {
    slug: 'haarglaettung-straighten-it',
    name: 'Haarglättung · Straighten It',
    category: 'Schnitt & Styling',
    tagline: 'Permanent Styling mit Straighten-It-Technik',
    intro:
      '„Straighten It (Haarglättung)“ ist in den aktuellen Preislisten von Mannheim und Weinheim als eigene Technik aufgeführt.',
    description: [
      'Die veröffentlichte Leistung verbindet individuelle Beratung, die Straighten-It-Technik, eine spezielle Finishbehandlung und das Styling.',
      'Die Eignung und die passende Ausführung werden persönlich beraten; nicht veröffentlichte Ergebnis- oder Haltbarkeitsversprechen werden nicht gemacht.',
    ],
    benefits: [
      'Individuelle Beratung',
      'Veröffentlichte Straighten-It-Technik',
      'Spezielle Finishbehandlung',
      'Styling im Leistungsumfang',
    ],
    audience: 'Für Kund:innen, die sich zur Straighten-It-Haarglättung persönlich beraten lassen möchten.',
    image: 'styling.png',
    imageAlt: 'Professionelles Finish bei Hair Lounge by Citak',
    related: ['keratinglaettung', 'dauerwelle-curl-it', 'styling'],
    faq: [
      {
        q: 'Was kostet Straighten It beziehungsweise die Haarglättung?',
        a: 'Die aktiven Salonseiten nennen 89 € bis Kinnlänge und 159 € ab Kinnlänge. Preise können je nach Aufwand und Produktmenge variieren.',
      },
    ],
    metaTitle: 'Haarglättung & Straighten It in Mannheim und Weinheim',
    metaDescription:
      'Haarglättung mit Straighten-It-Technik, Beratung, spezieller Finishbehandlung und Styling bei Hair Lounge by Citak.',
  },
  {
    slug: 'olaplex',
    name: 'Olaplex-Behandlung',
    category: 'Pflege & Extras',
    tagline: 'Veröffentlichte Zusatzbehandlung in beiden Salons',
    intro:
      'Olaplex gehört zum veröffentlichten Sortiment und wird in Mannheim und Weinheim als eigene Behandlung geführt.',
    description: [
      'Die Olaplex-Behandlung ist in den Preislisten beider aktiven Salons als Zusatzleistung aufgeführt. Olaplex wird außerdem als Produktpartner der Hair Lounge genannt.',
      'Die konkrete Kombination mit einer Farb-, Schnitt- oder Styling-Leistung wird persönlich abgestimmt.',
    ],
    benefits: [
      'In beiden aktiven Salons veröffentlicht',
      'Olaplex als genannter Produktpartner',
      'Kombination nach persönlicher Beratung',
      'Veröffentlichter Preis von 25 €',
    ],
    audience: 'Für Kund:innen, die eine Olaplex-Behandlung als Ergänzung zu ihrem Salontermin wünschen.',
    image: 'repair-cut.jpg',
    imageAlt: 'Professionelle Haarpflegeprodukte im Salon',
    related: ['repair-cut', 'coloration', 'glossing'],
    faq: [
      {
        q: 'Was kostet die Olaplex-Behandlung?',
        a: 'Die aktuellen Preislisten von Mannheim und Weinheim nennen 25 €. Preise können je nach Aufwand und Produktmenge variieren.',
      },
    ],
    metaTitle: 'Olaplex-Behandlung in Mannheim & Weinheim',
    metaDescription:
      'Olaplex-Behandlung bei Hair Lounge by Citak in Mannheim und Weinheim. Veröffentlichung als Zusatzleistung für 25 €.',
  },
  {
    slug: 'grauhaarveredelung',
    name: 'Grauhaarveredelung',
    category: 'Farbe & Strähnen',
    tagline: 'Veröffentlichte Farbleistung für Herren',
    intro:
      'Die Grauhaarveredelung wird in den Herren-Preislisten von Mannheim und Weinheim als eigene Leistung geführt.',
    description: [
      'Die veröffentlichte Herrenleistung richtet sich an Kund:innen, die sich zur Veredelung grauer Haare beraten lassen möchten.',
      'Details zur gewünschten Nuance und zur Ausführung werden im Salon abgestimmt. Die Website macht bewusst keine darüber hinausgehenden Ergebnisversprechen.',
    ],
    benefits: [
      'Eigene veröffentlichte Herrenleistung',
      'In Mannheim und Weinheim verfügbar',
      'Persönliche Abstimmung',
      'Veröffentlichter Preis von 30 €',
    ],
    audience: 'Für Herren, die ihre grauen Haare im Salon veredeln lassen möchten.',
    image: 'herrenhaarschnitt.jpg',
    imageAlt: 'Professionelle Produkte für Herren im Salon',
    related: ['herrenhaarschnitt', 'bartstyling', 'coloration'],
    faq: [
      {
        q: 'Was kostet die Grauhaarveredelung?',
        a: 'Die aktuellen Herren-Preislisten von Mannheim und Weinheim nennen 30 €. Preise können je nach Aufwand variieren.',
      },
    ],
    metaTitle: 'Grauhaarveredelung in Mannheim & Weinheim',
    metaDescription:
      'Grauhaarveredelung als veröffentlichte Herrenleistung bei Hair Lounge by Citak in Mannheim und Weinheim.',
  },
];

export const categories = ['Schnitt & Styling', 'Farbe & Strähnen', 'Pflege & Extras', 'Extensions'] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
