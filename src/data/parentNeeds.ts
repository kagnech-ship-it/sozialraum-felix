import type { ParentNeed } from '../types/institution';

export const parentNeeds: ParentNeed[] = [
  {
    id: 'familie',
    label: 'Unterstützung für Familien',
    icon: '👨‍👩‍👧',
    categories: ['familie'],
  },
  {
    id: 'bildung',
    label: 'Bildung & Lernen',
    icon: '📚',
    categories: ['bildung'],
  },
  {
    id: 'sport',
    label: 'Sport & Freizeit',
    icon: '⚽',
    categories: ['sport', 'kultur'],
  },
  {
    id: 'jugend',
    label: 'Angebote für Kinder & Jugendliche',
    icon: '🧑‍🤝‍🧑',
    categories: ['jugend', 'beteiligung', 'inklusion'],
  },
  {
    id: 'beratung',
    label: 'Beratung',
    icon: '💬',
    categories: ['beratung'],
  },
  {
    id: 'schwierig',
    label: 'Unterstützung in schwierigen Situationen',
    icon: '❤️',
    categories: ['beratung', 'familie'],
  },
];
