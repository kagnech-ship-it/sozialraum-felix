import { categories } from '../data/categories';
import type { Institution } from '../types/institution';

export function matchesSearch(institution: Institution, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;

  const haystack = [
    institution.name,
    categories[institution.category].label,
    institution.description,
    institution.offers.join(' '),
    institution.targetGroups.join(' '),
  ]
    .join(' ')
    .toLowerCase();

  return haystack.includes(q);
}
