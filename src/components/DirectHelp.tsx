import { useTranslation } from 'react-i18next';
import { directHelpOptions } from '../data/directHelp';
import type { ParentNeed } from '../types/institution';

interface DirectHelpProps {
  onSelect: (need: ParentNeed) => void;
}

export default function DirectHelp({ onSelect }: DirectHelpProps) {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="direct-help-heading" className="bg-[var(--color-ink)] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="direct-help-heading" className="font-display text-3xl font-bold text-white sm:text-4xl">
          {t('directHelp.title')}
        </h2>
        <p className="mt-3 text-base text-white/70">{t('directHelp.subtitle')}</p>

        <div className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
          {directHelpOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <span aria-hidden="true">{option.icon}</span>
              {t(`directHelpOption.${option.id}`)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
