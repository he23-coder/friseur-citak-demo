// Zentrale, verifizierte Unternehmensdaten (Quelle: friseur-citak.de + Google-Unternehmensprofile)

export const business = {
  name: 'Hair Lounge by Citak',
  legalName: 'Hairlounge by Citak & Co.',
  owner: 'Cagri Citak',
  email: 'info@friseur-citak.de',
  domain: 'friseur-citak.de',
  instagram: 'https://www.instagram.com/hairlounge_by_citak/',
  facebook: 'https://www.facebook.com/Hairlounge-by-Citak-Co-1874645829432343',
  whatsapp: 'tel:+4915234634007',
  whatsappDisplay: '+49 152 34634007',
  discount: {
    claim: '15 % Rabatt für Neukund:innen, Studierende, Azubis und Schüler:innen',
    note: 'Gültig montags bis mittwochs in beiden Salons – ausgenommen Extensions.',
  },
};

export interface Salon {
  id: 'mannheim' | 'weinheim';
  name: string;
  city: string;
  street: string;
  zip: string;
  district?: string;
  phoneDisplay: string;
  phoneHref: string;
  bookingUrl: string;
  hours: { days: string; time: string }[];
  hoursSchema: { dayOfWeek: string[]; opens: string; closes: string }[];
  googleMapsUrl: string;
  googleRating: { score: number; count: number };
  geo: { lat: number; lng: number };
}

export const salons: Salon[] = [
  {
    id: 'mannheim',
    name: 'Salon Mannheim',
    city: 'Mannheim',
    street: 'Friedrichsring 4',
    zip: '68161 Mannheim',
    district: 'Oststadt',
    phoneDisplay: '+49 (0) 621 777 358 44',
    phoneHref: 'tel:+4962177735844',
    bookingUrl: 'https://hygg.mitdenkt.io/',
    hours: [
      { days: 'Mo. – Fr.', time: '09:00 – 19:00 Uhr' },
      { days: 'Sa.', time: '09:00 – 16:00 Uhr' },
    ],
    hoursSchema: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
      { dayOfWeek: ['Saturday'], opens: '09:00', closes: '16:00' },
    ],
    googleMapsUrl: 'https://www.google.com/maps/place/Friseur+Hair+Lounge+by+Citak+Mannheim/@49.4854299,8.4759057,17z',
    googleRating: { score: 4.9, count: 172 },
    geo: { lat: 49.4854299, lng: 8.4759057 },
  },
  {
    id: 'weinheim',
    name: 'Salon Weinheim',
    city: 'Weinheim',
    street: 'Hauptstraße 81',
    zip: '69469 Weinheim',
    district: 'Fußgängerzone',
    phoneDisplay: '+49 (0) 6201 878 55 99',
    phoneHref: 'tel:+4962018785599',
    bookingUrl: 'https://otii.mitdenkt.io/',
    hours: [
      { days: 'Mo. – Fr.', time: '09:00 – 19:00 Uhr' },
      { days: 'Sa.', time: '09:00 – 15:00 Uhr' },
    ],
    hoursSchema: [
      { dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '19:00' },
      { dayOfWeek: ['Saturday'], opens: '09:00', closes: '15:00' },
    ],
    googleMapsUrl: 'https://www.google.com/maps/place/Friseur+Hair+Lounge+by+Citak+Weinheim/@49.5482163,8.6726135,17z',
    googleRating: { score: 4.9, count: 147 },
    geo: { lat: 49.5482163, lng: 8.6726135 },
  },
];

export const legal = {
  impressum: {
    name: 'Cagri Citak',
    company: 'Hair Lounge by Citak',
    street: 'Dürrestraße 2',
    zipCity: '69469 Weinheim',
    country: 'Deutschland',
    phone: '0171 9393321',
    email: 'info@friseur-citak.de',
  },
};
