// Teams – Namen aus den Original-Salonseiten (friseur-citak.de/mannheim, /weinheim)
// Fotos: nur dort, wo auf der Original-Webseite echte Porträts hinterlegt waren.

export interface TeamMember {
  name: string;
  salon: 'mannheim' | 'weinheim';
  photo?: string; // Dateiname in src/assets/team
}

export const team: TeamMember[] = [
  { name: 'Andy', salon: 'mannheim', photo: 'andy.jpg' },
  { name: 'Karo', salon: 'mannheim' },
  { name: 'Milena', salon: 'mannheim' },
  { name: 'Celina', salon: 'mannheim' },
  { name: 'Jelena', salon: 'mannheim' },
  { name: 'Cinzia', salon: 'mannheim' },
  { name: 'Gerey', salon: 'weinheim', photo: 'gerey.jpg' },
  { name: 'Hülya', salon: 'weinheim' },
  { name: 'Songül', salon: 'weinheim', photo: 'songuel.jpg' },
  { name: 'Melanie', salon: 'weinheim', photo: 'melanie.jpg' },
  { name: 'Durina', salon: 'weinheim' },
  { name: 'Kay', salon: 'weinheim', photo: 'kay.jpg' },
];
