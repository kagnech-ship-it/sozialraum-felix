import { Search, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const { t } = useTranslation();

  return (
    <div className="relative w-full">
      <label htmlFor="institution-search" className="sr-only">
        {t('search.label')}
      </label>
      <Search
        size={19}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-ink-soft)] rtl:left-auto rtl:right-4"
        aria-hidden="true"
      />
      <input
        id="institution-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('search.placeholder')}
        className="w-full rounded-full border border-[var(--color-line)] bg-white py-3.5 pl-11 pr-11 text-[15px] text-[var(--color-ink)] shadow-[var(--shadow-card)] transition-shadow placeholder:text-[var(--color-ink-soft)]/70 focus:border-[var(--color-brand)]"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          aria-label={t('search.reset')}
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-[var(--color-ink-soft)] hover:bg-[var(--color-mist)] rtl:right-auto rtl:left-3"
        >
          <X size={16} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
