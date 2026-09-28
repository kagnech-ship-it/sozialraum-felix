import type { Category } from '../types/institution';

export interface CategoryMeta {
  id: Category;
  label: string;
  emoji: string;
  color: string;
  colorSoft: string;
  textOn: string;
}

export const categories: Record<Category, CategoryMeta> = {
  familie: {
    id: 'familie',
    label: 'Familie',
    emoji: '❤️',
    color: '#16a34a',
    colorSoft: '#dcfce7',
    textOn: '#14532d',
  },
  beratung: {
    id: 'beratung',
    label: 'Beratung',
    emoji: '💬',
    color: '#dc2626',
    colorSoft: '#fee2e2',
    textOn: '#7f1d1d',
  },
  bildung: {
    id: 'bildung',
    label: 'Bildung',
    emoji: '📚',
    color: '#2563eb',
    colorSoft: '#dbeafe',
    textOn: '#1e3a8a',
  },
  jugend: {
    id: 'jugend',
    label: 'Jugend',
    emoji: '👥',
    color: '#ea580c',
    colorSoft: '#ffedd5',
    textOn: '#7c2d12',
  },
  sport: {
    id: 'sport',
    label: 'Sport & Bewegung',
    emoji: '⚽',
    color: '#0d9488',
    colorSoft: '#ccfbf1',
    textOn: '#134e4a',
  },
  freizeit: {
    id: 'freizeit',
    label: 'Freizeit',
    emoji: '🎮',
    color: '#d97706',
    colorSoft: '#fef3c7',
    textOn: '#78350f',
  },
  kultur: {
    id: 'kultur',
    label: 'Kultur',
    emoji: '🎭',
    color: '#7c3aed',
    colorSoft: '#ede9fe',
    textOn: '#4c1d95',
  },
  beteiligung: {
    id: 'beteiligung',
    label: 'Beteiligung',
    emoji: '🗣️',
    color: '#0891b2',
    colorSoft: '#cffafe',
    textOn: '#164e63',
  },
  inklusion: {
    id: 'inklusion',
    label: 'Inklusion',
    emoji: '♿',
    color: '#4f46e5',
    colorSoft: '#e0e7ff',
    textOn: '#312e81',
  },
  verwaltung: {
    id: 'verwaltung',
    label: 'Verwaltung & Leistungen',
    emoji: '🏛️',
    color: '#475569',
    colorSoft: '#e2e8f0',
    textOn: '#1e293b',
  },
};

export const categoryList: CategoryMeta[] = Object.values(categories);
