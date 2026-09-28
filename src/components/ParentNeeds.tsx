import { useTranslation } from 'react-i18next';
import { parentNeeds } from '../data/parentNeeds';
import type { ParentNeed } from '../types/institution';

interface ParentNeedsProps {
  onSelect: (need: ParentNeed) => void;
  activeNeedId: string | null;
}

export default function ParentNeeds({ onSelect, activeNeedId }: ParentNeedsProps) {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="parent-needs-heading" className="bg-[var(--color-mist)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="parent-needs-heading" className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            {t('parentNeeds.title')}
          </h2>
          <p className="mt-3 text-base text-[var(--color-ink-soft)]">{t('parentNeeds.subtitle')}</p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
          {parentNeeds.map((need) => {
            const active = activeNeedId === need.id;
            return (
              <button
                key={need.id}
                type="button"
                onClick={() => onSelect(need)}
                aria-pressed={active}
                className={`group flex min-h-[132px] flex-col items-center justify-center gap-3 rounded-2xl border px-4 py-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)] ${
                  active
                    ? 'border-[var(--color-brand)] bg-[var(--color-brand-soft)]'
                    : 'border-[var(--color-line)] bg-white'
                }`}
              >
                <span className="text-3xl" aria-hidden="true">
                  {need.icon}
                </span>
                <span className="text-sm font-semibold leading-snug text-[var(--color-ink)]">
                  {t(`need.${need.id}`)}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
