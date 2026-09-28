import type { DistanceInfo } from '../hooks/useDistances';
import type { Category, Institution } from '../types/institution';

export type SortOption = 'naehe' | 'kategorie' | 'alphabet' | 'relevanz';

export const sortOptions: { id: SortOption }[] = [
  { id: 'naehe' },
  { id: 'kategorie' },
  { id: 'alphabet' },
  { id: 'relevanz' },
];

/**
 * Feste Kategorie-Reihenfolge – sowohl für die Sortierung "Kategorie" als
 * auch für "Relevanz für Familien" (familien- und beratungsnahe Angebote
 * zuerst). Sprachunabhängig, damit die Sortierung beim Sprachwechsel nicht
 * springt.
 */
const CATEGORY_ORDER: Category[] = [
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
        const rankDiff = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
        return rankDiff !== 0 ? rankDiff : a.name.localeCompare(b.name, 'de');
      });
    case 'alphabet':
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'de'));
    case 'relevanz':
      return sorted.sort((a, b) => {
        const rankDiff = CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category);
        if (rankDiff !== 0) return rankDiff;
        return (distances[a.id]?.meters ?? Infinity) - (distances[b.id]?.meters ?? Infinity);
      });
    default:
      return sorted;
  }
}
