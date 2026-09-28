import type { ParentNeed } from '../types/institution';

export const directHelpOptions: ParentNeed[] = [
  { id: 'dh-beratung', label: 'Ich brauche Beratung', icon: '💬', categories: ['beratung'] },
  { id: 'dh-familie', label: 'Ich suche ein Familienangebot', icon: '👨‍👩‍👧', categories: ['familie'] },
  {
    id: 'dh-kind',
    label: 'Ich suche etwas für mein Kind',
    icon: '🧒',
    categories: [],
    audiences: ['kind', 'kleinkind'],
  },
  { id: 'dh-antrag', label: 'Ich suche Unterstützung bei einem Antrag', icon: '🏛️', categories: ['verwaltung'] },
  {
    id: 'dh-freizeit',
    label: 'Ich suche Freizeitangebote',
    icon: '🎮',
    categories: ['freizeit', 'sport', 'kultur'],
  },
];
