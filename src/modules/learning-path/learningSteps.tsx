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
    title: 'Grundübungen',
    details: 'Übungen mit einer Hand und zwei Händen',
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
    title: 'Technikübungen',
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
    title: 'Technikübungen 2',
    details: 'Dynamik, Akzente',
    videoId: 'ignhDQ9KHg',
  },
  {
    id: '7',
    category: 'rhythm',
    title: 'Perkussive Klänge',
    details: 'Schulter, Slap, Knöchel, Muted Bass',
    videoId: 'gJzUZ48PGO0',
  },
  {
    id: '8',
    category: 'rhythm',
    title: 'Rhythmen',
    details: 'Pop, Latin',
    videoId: 'hynzuXmIx5s',
  },
  {
    id: '9',
    category: 'rhythm',
    title: 'Rhythmen und Fill-ins',
    details: 'Melodien und Rhythmen kombinieren',
    videoId: 'nEkweUw6d1Q',
  },
  {
    id: '10',
    category: 'rhythm',
    title: 'Rhythmik',
    details: '2 gegen 3, Taktarten',
    videoId: 'lpMF-EcQ9bA',
  },
];
