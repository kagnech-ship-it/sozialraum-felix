import { Home as HomeIcon, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { KITA } from '../data/kita';
import { RESEARCH_DATE, SITE_NAME } from '../data/site';
import { formatMonthYear } from '../utils/date';
import { fullAddress } from '../utils/links';

const base = import.meta.env.BASE_URL;

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)] py-12 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-brand)]">
                <HomeIcon size={18} strokeWidth={2.4} aria-hidden="true" />
              </span>
              {SITE_NAME.full}
            </div>
            <p className="mt-3 flex items-start gap-1.5 text-sm">
              <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
              {KITA.name} · {fullAddress(KITA)}
            </p>
          </div>

          <nav aria-label="Footer-Navigation" className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href={`${base}#karte`} className="hover:text-white">
              {t('nav.map')}
            </a>
            <a href={`${base}#einrichtungen`} className="hover:text-white">
              {t('nav.institutions')}
            </a>
            <a href={`${base}#kategorien`} className="hover:text-white">
              {t('nav.categories')}
            </a>
            <a href={`${base}#ueber`} className="hover:text-white">
              {t('nav.about')}
            </a>
            <Link to="/quellen" className="hover:text-white">
              {t('nav.sources')}
            </Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/50">
          <p>{t('footer.disclaimer1')}</p>
          <p className="mt-2">
            {t('footer.sourceLabel')} Gartinger, Silvia et al.: <em>Erzieherinnen + Erzieher</em>. Band
            1. 2. Auflage. Cornelsen, 2020, S. 662–677.
          </p>
          <p className="mt-2">
            {t('footer.sourcesNote')}{' '}
            <Link to="/quellen" className="underline hover:text-white">
              {t('footer.sourcesLinkLabel')}
            </Link>
            .
          </p>
          <p className="mt-2">{t('footer.nonCommercial')}</p>
          <p className="mt-2">{t('common.asOf', { date: formatMonthYear(RESEARCH_DATE, i18n.language) })}</p>
        </div>
      </div>
    </footer>
  );
}
