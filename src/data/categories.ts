import type { Category } from '../types/institution';

export interface CategoryMeta {
  id: Category;
  label: string;
  color: string;
  colorSoft: string;
  textOn: string;
}

export const categories: Record<Category, CategoryMeta> = {
  familie: {
    id: 'familie',
    label: 'Familie',
    color: '#16a34a',
    colorSoft: '#dcfce7',
    textOn: '#14532d',
  },
  bildung: {
    id: 'bildung',
    label: 'Bildung',
    color: '#2563eb',
    colorSoft: '#dbeafe',
    textOn: '#1e3a8a',
  },
  jugend: {
    id: 'jugend',
    label: 'Jugend',
    color: '#ea580c',
    colorSoft: '#ffedd5',
    textOn: '#7c2d12',
  },
  beratung: {
    id: 'beratung',
    label: 'Beratung',
    color: '#dc2626',
    colorSoft: '#fee2e2',
    textOn: '#7f1d1d',
  },
  sport: {
    id: 'sport',
    label: 'Sport',
    color: '#0d9488',
    colorSoft: '#ccfbf1',
    textOn: '#134e4a',
  },
  kultur: {
    id: 'kultur',
    label: 'Kultur',
    color: '#7c3aed',
    colorSoft: '#ede9fe',
    textOn: '#4c1d95',
  },
  beteiligung: {
    id: 'beteiligung',
    label: 'Beteiligung',
    color: '#0891b2',
    colorSoft: '#cffafe',
    textOn: '#164e63',
  },
  inklusion: {
    id: 'inklusion',
    label: 'Inklusion',
    color: '#4f46e5',
    colorSoft: '#e0e7ff',
    textOn: '#312e81',
  },
};

export const categoryList: CategoryMeta[] = Object.values(categories);
