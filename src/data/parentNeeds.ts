import type { ParentNeed } from '../types/institution';

export const parentNeeds: ParentNeed[] = [
  {
    id: 'familie',
    label: 'Familienangebote',
    icon: '👨‍👩‍👧',
    categories: ['familie'],
  },
  {
    id: 'beratung',
    label: 'Beratung',
    icon: '💬',
    categories: ['beratung'],
  },
  {
    id: 'bildung',
    label: 'Bildung & Lesen',
    icon: '📚',
    categories: ['bildung'],
  },
  {
    id: 'sport',
    label: 'Sport & Bewegung',
    icon: '⚽',
    categories: ['sport'],
  },
  {
    id: 'kultur',
    label: 'Kreativität & Kultur',
    icon: '🎨',
    categories: ['kultur', 'freizeit'],
  },
  {
    id: 'kinder',
    label: 'Angebote für Kinder',
    icon: '🧒',
    categories: [],
    audiences: ['kind', 'kleinkind'],
  },
  {
    id: 'jugendliche',
    label: 'Angebote für Jugendliche',
    icon: '🧑‍🤝‍🧑',
    categories: ['jugend'],
    audiences: ['jugendlicher'],
  },
  {
    id: 'antraege',
    label: 'Anträge & Leistungen',
    icon: '🏛️',
    categories: ['verwaltung'],
  },
];
