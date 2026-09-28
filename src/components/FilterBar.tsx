import type { Category } from '../types/institution';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategories: Category[];
  onCategoryChange: (category: Category | 'alle') => void;
  resultCount: number;
}

export default function FilterBar({
  search,
  onSearchChange,
  activeCategories,
  onCategoryChange,
  resultCount,
}: FilterBarProps) {
  return (
    <div className="rounded-3xl border border-[var(--color-line)] bg-white p-4 shadow-[var(--shadow-card)] sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="sm:w-80 sm:shrink-0">
          <SearchBar value={search} onChange={onSearchChange} />
        </div>
        <CategoryFilter active={activeCategories} onChange={onCategoryChange} />
      </div>
      <p className="mt-3 text-xs font-medium text-[var(--color-ink-soft)]" role="status" aria-live="polite">
        {resultCount} {resultCount === 1 ? 'Einrichtung gefunden' : 'Einrichtungen gefunden'}
      </p>
    </div>
  );
}
