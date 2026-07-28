// Echte, öffentlich verifizierbare Google-Rezensionen (extrahiert am 28.07.2026
// aus den offiziellen Google-Maps-Profilen der beiden Salons). Alle 5 Sterne.

export interface Review {
  author: string;
  authorMeta: string;
  date: string;
  rating: 5;
  text: string;
  salon: 'mannheim' | 'weinheim';
  source: string;
}

export const reviews: Review[] = [
  {
    author: 'Hannah Schuhmann',
    authorMeta: '3 Rezensionen',
    date: 'vor 3 Wochen',
    rating: 5,
    text: 'Ich bin super zufrieden. Ich gehe immer zu Milena und Jelena und beide sind super freundlich. Zudem liefern beide immer top Ergebnisse. Ich bin froh, diesen Friseur gefunden zu haben.',
    salon: 'mannheim',
    source: 'https://www.google.com/maps/place/Friseur+Hair+Lounge+by+Citak+Mannheim/@49.4854299,8.4759057,17z',
  },
  {
    author: 'Antonia Markovic',
    authorMeta: '6 Rezensionen',
    date: 'vor 2 Monaten',
    rating: 5,
    text: 'Ich habe mir bei Durina blonde Strähnen machen lassen und bin total begeistert! Sie sind wunderschön geworden und genau so, wie ich es mir vorgestellt habe. Das Blond ist einfach perfekt, bisher hat das noch niemand so gut hinbekommen wie sie. Ich bin super zufrieden und komme gerne wieder. Absolute Empfehlung!',
    salon: 'weinheim',
    source: 'https://www.google.com/maps/place/Friseur+Hair+Lounge+by+Citak+Weinheim/@49.5482163,8.6726135,17z',
  },
  {
    author: 'Marc Knab',
    authorMeta: '3 Rezensionen',
    date: 'vor 4 Monaten',
    rating: 5,
    text: 'Ich war heute Mittag bei Celina und kann mich über nichts beklagen. Absolut top, Service, Kommunikation, Smalltalk, alles super freundlich und authentisch. Komme gerne wieder. Die Atmosphäre im Innern ist angenehm und einladend. Mega guter Vibe. Macht genauso weiter.',
    salon: 'mannheim',
    source: 'https://www.google.com/maps/place/Friseur+Hair+Lounge+by+Citak+Mannheim/@49.4854299,8.4759057,17z',
  },
  {
    author: 'Alicia Krauth',
    authorMeta: '3 Rezensionen',
    date: 'vor 4 Monaten',
    rating: 5,
    text: 'Ich war bei Hülya für Strähnchen und Extensions und bin mega zufrieden! Sie hat meine Haare nach einem vorherigen Fail echt gerettet – bin einfach nur froh, dass ich zu ihr gegangen bin. Die Farbe ist super schön geworden und die Extensions sitzen perfekt. Die Ringe halten bisher bombenfest, da verrutscht gar nichts. Fühle mich endlich wieder richtig wohl. Absolute Empfehlung!',
    salon: 'weinheim',
    source: 'https://www.google.com/maps/place/Friseur+Hair+Lounge+by+Citak+Weinheim/@49.5482163,8.6726135,17z',
  },
  {
    author: 'Lusine Khachatryan',
    authorMeta: 'Local Guide · 42 Rezensionen',
    date: 'vor 3 Monaten',
    rating: 5,
    text: 'Ich war im August eine Woche vor meiner Hochzeit hier bei Jelena und es war so so toll!! Wir haben uns super unterhalten, sie hat sich wirklich Zeit genommen und angehört, was ich mir vorstelle, und mich auch sehr gut beraten bzgl. der Haarfarbe & Haltbarkeit. Habe mir schon den nächsten Termin gebucht und freue mich!',
    salon: 'mannheim',
    source: 'https://www.google.com/maps/place/Friseur+Hair+Lounge+by+Citak+Mannheim/@49.4854299,8.4759057,17z',
  },
  {
    author: 'Katerina K',
    authorMeta: 'Local Guide · 23 Rezensionen',
    date: 'vor 2 Jahren',
    rating: 5,
    text: 'Nachdem ich umgezogen bin, hab ich mich sehr schwer damit getan, zu einem neuen Friseur zu gehen. Ich war dann heute das erste Mal hier und habe mich so gut aufgehoben gefühlt, dass ich glaube, meinen neuen Friseur gefunden zu haben. Sowohl Farbe als auch Schnitt sind super geworden! Das ganze Personal ist sehr freundlich und man fühlt sich einfach bestens betreut. Preis/Leistung stimmt! Hier werde ich in Zukunft öfter vorbeikommen. Danke für eure tolle Arbeit!',
    salon: 'weinheim',
    source: 'https://www.google.com/maps/place/Friseur+Hair+Lounge+by+Citak+Weinheim/@49.5482163,8.6726135,17z',
  },
];
