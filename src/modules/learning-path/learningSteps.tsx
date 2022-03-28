export type LearningStep = {
  category: 'technique' | 'harmony' | 'rhythm';
  id: string;
  details: string;
  title: string;
  videoId: string;
};

export const learningSteps: LearningStep[] = [
  {
    id: '1',
    category: 'technique',
    title: 'Grundlagen',
    details: 'Aufbau Handpan und Spieltechniken',
    videoId: 'cTowcbuJ48U',
  },
  {
    id: '2',
    category: 'technique',
    title: 'Handbeherrschung',
    details: 'Spielen mit einer Hand/zwei Händen',
    videoId: 'YvuGyPLzkHw',
  },
  {
    id: '3',
    category: 'harmony',
    title: 'Intervalle',
    details: 'Zwei Töne gleichzeitig/Kombinationen',
    videoId: '4Qp7uI-ZNl8',
  },
  {
    id: '4',
    category: 'technique',
    title: 'Schnelleres Spiel',
    details: 'Doppelschläge, Split-Technik',
    videoId: 'ptvCTzdOnko',
  },
  {
    id: '5',
    category: 'harmony',
    title: 'Dreiklänge',
    details: 'Erklärungen, Arpeggios, Gruppen',
    videoId: 'I7J4NIn-fFA',
  },
  {
    id: '6',
    category: 'technique',
    title: 'Lautstärke',
    details: 'Dynamik, Akzente',
    videoId: 'ignhDQ9KHg',
  },
  {
    id: '7',
    category: 'technique',
    title: 'Perkussive Klänge',
    details: 'Schulter, Slap, Knöchel, Muted Bass',
    videoId: 'gJzUZ48PGO0',
  },
  {
    id: '8',
    category: 'rhythm',
    title: 'Beliebte Grundrhythmen',
    details: 'Pop, Latin',
    videoId: 'hynzuXmIx5s',
  },
  {
    id: '9',
    category: 'rhythm',
    title: 'Fill-ins',
    details: 'Rhythmen und Melodien kombinieren',
    videoId: 'nEkweUw6d1Q',
  },
  {
    id: '10',
    category: 'rhythm',
    title: 'Komplexere Rhythmen',
    details: '2 gegen 3, Taktarten',
    videoId: 'lpMF-EcQ9bA',
  },
];
