import { ArrowRight, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { categoryList } from '../data/categories';
import { institutions } from '../data/institutions';
import { KITA } from '../data/kita';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="top" className="relative overflow-hidden bg-[var(--color-ink)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #1d4ed8 0%, transparent 45%), radial-gradient(circle at 80% 0%, #16a34a 0%, transparent 40%), radial-gradient(circle at 90% 90%, #ea580c 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
            <MapPin size={15} aria-hidden="true" />
            {t('hero.badge', { name: KITA.name })}
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t('hero.title')}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            {t('hero.subtitle')}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#karte"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              {t('hero.ctaPrimary')}
              <ArrowRight size={18} aria-hidden="true" className="rtl:rotate-180" />
            </a>
            <a
              href="#einrichtungen"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15 sm:w-auto"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>

          <dl className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-4 text-white/85">
            <div>
              <dt className="sr-only">{t('hero.statInstitutions')}</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-3xl">{institutions.length}</dd>
              <dd className="text-xs text-white/60 sm:text-sm">{t('hero.statInstitutions')}</dd>
            </div>
            <div>
              <dt className="sr-only">{t('hero.statCategories')}</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-3xl">{categoryList.length}</dd>
              <dd className="text-xs text-white/60 sm:text-sm">{t('hero.statCategories')}</dd>
            </div>
            <div>
              <dt className="sr-only">{t('hero.statSocialSpace')}</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-3xl">1</dd>
              <dd className="text-xs text-white/60 sm:text-sm">{t('hero.statSocialSpace')}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
