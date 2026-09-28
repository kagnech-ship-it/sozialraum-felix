import { categoryList } from '../data/categories';
import type { Category } from '../types/institution';

interface CategoryFilterProps {
  /** Empty array = "Alle" is active. May contain several categories (e.g. from a parent-need shortcut). */
  active: Category[];
  onChange: (category: Category | 'alle') => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const allActive = active.length === 0;

  return (
    <div className="scroll-x -mx-4 px-4 sm:mx-0 sm:px-0" role="group" aria-label="Nach Kategorie filtern">
      <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        <button
          type="button"
          onClick={() => onChange('alle')}
          aria-pressed={allActive}
          className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
            allActive
              ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-white'
              : 'border-[var(--color-line)] bg-white text-[var(--color-ink-soft)] hover:border-[var(--color-ink)]'
          }`}
        >
          Alle
        </button>
        {categoryList.map((cat) => {
          const isActive = active.includes(cat.id);
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onChange(cat.id)}
              aria-pressed={isActive}
              className="shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
              style={
                isActive
                  ? { background: cat.color, borderColor: cat.color, color: 'white' }
                  : { borderColor: 'var(--color-line)', background: 'white', color: 'var(--color-ink-soft)' }
              }
            >
              <span
                className="mr-1.5 inline-block h-2 w-2 rounded-full align-middle"
                style={{ background: isActive ? 'white' : cat.color }}
                aria-hidden="true"
              />
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
