import { categories } from '../data/categories';
import type { DistanceInfo } from '../hooks/useDistances';
import type { Category, Institution } from '../types/institution';

export type SortOption = 'naehe' | 'kategorie' | 'alphabet' | 'relevanz';

export const sortOptions: { id: SortOption; label: string }[] = [
  { id: 'naehe', label: 'Nähe zur Kita' },
  { id: 'kategorie', label: 'Kategorie' },
  { id: 'alphabet', label: 'Alphabet' },
  { id: 'relevanz', label: 'Relevanz für Familien' },
];

/** Grobe Rangfolge für „Relevanz für Familien“ – familien- und beratungsnahe Angebote zuerst. */
const RELEVANCE_ORDER: Category[] = [
  'familie',
  'beratung',
  'bildung',
  'jugend',
  'sport',
  'freizeit',
  'kultur',
  'beteiligung',
  'inklusion',
  'verwaltung',
];

export function sortInstitutions(
  institutions: Institution[],
  sortBy: SortOption,
  distances: Record<string, DistanceInfo>,
): Institution[] {
  const sorted = [...institutions];

  switch (sortBy) {
    case 'naehe':
      return sorted.sort((a, b) => (distances[a.id]?.meters ?? Infinity) - (distances[b.id]?.meters ?? Infinity));
    case 'kategorie':
      return sorted.sort((a, b) => {
        const catCompare = categories[a.category].label.localeCompare(categories[b.category].label, 'de');
        return catCompare !== 0 ? catCompare : a.name.localeCompare(b.name, 'de');
      });
    case 'alphabet':
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'de'));
    case 'relevanz':
      return sorted.sort((a, b) => {
        const rankDiff = RELEVANCE_ORDER.indexOf(a.category) - RELEVANCE_ORDER.indexOf(b.category);
        if (rankDiff !== 0) return rankDiff;
        return (distances[a.id]?.meters ?? Infinity) - (distances[b.id]?.meters ?? Infinity);
      });
    default:
      return sorted;
  }
}
