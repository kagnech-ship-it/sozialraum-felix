import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { institutions } from '../data/institutions';

export default function QuellenPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <Link to="/" className="text-sm font-semibold text-[var(--color-brand)] hover:underline">
          {t('quellen.back')}
        </Link>

        <h1 className="mt-4 font-display text-3xl font-extrabold text-[var(--color-ink)] sm:text-4xl">
          {t('quellen.title')}
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-ink-soft)]">
          {t('quellen.intro')}
        </p>

        <section aria-labelledby="q-fachlich" className="mt-10">
          <h2 id="q-fachlich" className="font-display text-xl font-bold text-[var(--color-ink)]">
            {t('quellen.academicTitle')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
            Gartinger, Silvia et al.: <em>Erzieherinnen + Erzieher</em>. Band 1. 2. Auflage.
            Cornelsen, 2020, S. 662–677.
          </p>
        </section>

        <section aria-labelledby="q-karte" className="mt-10">
          <h2 id="q-karte" className="font-display text-xl font-bold text-[var(--color-ink)]">
            {t('quellen.mapDataTitle')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">
            {t('quellen.mapDataIntro')}{' '}
            <a
              href="https://leafletjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--color-brand)] underline"
            >
              Leaflet <ExternalLink size={12} aria-hidden="true" />
            </a>{' '}
            {t('quellen.mapDataMid')}{' '}
            <a
              href="https://www.openstreetmap.org/copyright"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--color-brand)] underline"
            >
              OpenStreetMap <ExternalLink size={12} aria-hidden="true" />
            </a>
            . {t('quellen.mapDataOutro')}
          </p>
        </section>

        <section aria-labelledby="q-einrichtungen" className="mt-10">
          <h2 id="q-einrichtungen" className="font-display text-xl font-bold text-[var(--color-ink)]">
            {t('quellen.institutionsTitle')}
          </h2>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">{t('quellen.institutionsNote')}</p>
          <ul className="mt-4 divide-y divide-[var(--color-line)] rounded-2xl border border-[var(--color-line)]">
            {institutions.map((inst) => (
              <li key={inst.id} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
                <span className="font-medium text-[var(--color-ink)]">{inst.name}</span>
                <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[var(--color-ink-soft)]">
                  {inst.sourceUrl && (
                    <a
                      href={inst.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--color-brand)] underline"
                    >
                      {inst.sourceLabel ?? t('modal.source')} <ExternalLink size={11} aria-hidden="true" />
                    </a>
                  )}
                  {inst.website && inst.website !== inst.sourceUrl && (
                    <a
                      href={inst.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--color-brand)] underline"
                    >
                      {t('quellen.websiteLabel')} <ExternalLink size={11} aria-hidden="true" />
                    </a>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
