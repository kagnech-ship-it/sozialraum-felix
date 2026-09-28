import { useTranslation } from 'react-i18next';
import type { Audience, Category } from '../types/institution';
import type { SortOption } from '../utils/sort';
import AudienceFilter from './AudienceFilter';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';
import SortControl from './SortControl';

interface FilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategories: Category[];
  onCategoryChange: (category: Category | 'alle') => void;
  activeAudiences: Audience[];
  onAudienceToggle: (audience: Audience) => void;
  sortBy: SortOption;
  onSortChange: (value: SortOption) => void;
  resultCount: number;
}

export default function FilterBar({
  search,
  onSearchChange,
  activeCategories,
  onCategoryChange,
  activeAudiences,
  onAudienceToggle,
  sortBy,
  onSortChange,
  resultCount,
}: FilterBarProps) {
  const { t } = useTranslation();

  return (
    <div className="rounded-3xl border border-[var(--color-line)] bg-white p-4 shadow-[var(--shadow-card)] sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="sm:w-72 sm:shrink-0">
          <SearchBar value={search} onChange={onSearchChange} />
        </div>
        <CategoryFilter active={activeCategories} onChange={onCategoryChange} />
      </div>

      <div className="mt-3 border-t border-[var(--color-line)] pt-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
          {t('filterBar.audienceLabel')}
        </p>
        <AudienceFilter active={activeAudiences} onToggle={onAudienceToggle} />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-line)] pt-3">
        <p className="text-xs font-medium text-[var(--color-ink-soft)]" role="status" aria-live="polite">
          {t('filterBar.resultCount', { count: resultCount })}
        </p>
        <SortControl value={sortBy} onChange={onSortChange} />
      </div>
    </div>
  );
}
