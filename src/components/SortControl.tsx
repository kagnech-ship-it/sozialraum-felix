import { ArrowUpDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { sortOptions, type SortOption } from '../utils/sort';

interface SortControlProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortControl({ value, onChange }: SortControlProps) {
  const { t } = useTranslation();

  return (
    <label className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-ink-soft)]">
      <ArrowUpDown size={15} aria-hidden="true" />
      <span className="sr-only sm:not-sr-only">{t('sort.label')}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="rounded-full border border-[var(--color-line)] bg-white px-3 py-2 text-sm font-medium text-[var(--color-ink)]"
      >
        {sortOptions.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {t(`sort.${opt.id}`)}
          </option>
        ))}
      </select>
    </label>
  );
}
