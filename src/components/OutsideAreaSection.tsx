import { AlertTriangle, ExternalLink, Navigation2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { outsideInstitutions } from '../data/institutions';
import { useLocalizedInstitution } from '../hooks/useLocalizedInstitution';
import { buildDirectionsUrl, fullAddress } from '../utils/links';
import type { Institution } from '../types/institution';

interface OutsideAreaSectionProps {
  onOpenDetails: (institution: Institution) => void;
}

function OutsideInstitutionCard({ inst, onOpenDetails }: { inst: Institution; onOpenDetails: (i: Institution) => void }) {
  const { t } = useTranslation();
  const content = useLocalizedInstitution(inst);

  return (
    <div className="rounded-2xl border-2 border-dashed border-[var(--color-alert)]/30 bg-white p-6 shadow-[var(--shadow-card)]">
      <span className="inline-block rounded-full bg-[var(--color-alert-soft)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--color-alert)]">
        {t('outsideArea.badge')}
      </span>
      <h3 className="mt-3 font-display text-lg font-bold text-[var(--color-ink)]">{inst.name}</h3>
      <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{fullAddress(inst)}</p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{content.description}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onOpenDetails(inst)}
          className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-semibold text-white"
        >
          {t('map.details')}
        </button>
        <a
          href={buildDirectionsUrl(inst)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)]"
        >
          <Navigation2 size={14} aria-hidden="true" />
          {t('map.route')}
        </a>
        {inst.website && (
          <a
            href={inst.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)]"
          >
            <ExternalLink size={14} aria-hidden="true" />
            {t('map.website')}
          </a>
        )}
      </div>
    </div>
  );
}

export default function OutsideAreaSection({ onOpenDetails }: OutsideAreaSectionProps) {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="outside-heading" className="bg-[var(--color-mist)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-alert-soft)] text-[var(--color-alert)]">
            <AlertTriangle size={20} aria-hidden="true" />
          </span>
          <div>
            <h2 id="outside-heading" className="font-display text-2xl font-bold text-[var(--color-ink)] sm:text-3xl">
              {t('outsideArea.title')}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
              {t('outsideArea.subtitle')}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {outsideInstitutions.map((inst) => (
            <OutsideInstitutionCard key={inst.id} inst={inst} onOpenDetails={onOpenDetails} />
          ))}
        </div>
      </div>
    </section>
  );
}
