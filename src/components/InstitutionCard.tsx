import { Bike, ExternalLink, MapPin, Navigation2, Star, Target } from 'lucide-react';
import type { DistanceInfo } from '../hooks/useDistances';
import { categories } from '../data/categories';
import { zoneMeta } from '../data/zones';
import type { Institution } from '../types/institution';
import { buildDirectionsUrl, fullAddress } from '../utils/links';
import { estimateCyclingMinutes, formatDistanceMeters } from '../utils/distance';

interface InstitutionCardProps {
  institution: Institution;
  distance?: DistanceInfo;
  highlighted?: boolean;
  onOpenDetails: (institution: Institution) => void;
  onFocusOnMap?: (institution: Institution) => void;
  onHover?: (institution: Institution | null) => void;
}

export default function InstitutionCard({
  institution,
  distance,
  highlighted,
  onOpenDetails,
  onFocusOnMap,
  onHover,
}: InstitutionCardProps) {
  const meta = categories[institution.category];
  const cyclingMinutes = distance ? estimateCyclingMinutes(distance.meters) : undefined;

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl border bg-white p-5 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${
        highlighted ? 'border-[var(--color-brand)] ring-2 ring-[var(--color-brand)]/30' : 'border-[var(--color-line)]'
      }`}
      onMouseEnter={() => onHover?.(institution)}
      onMouseLeave={() => onHover?.(null)}
    >
      <div className="flex items-start justify-between gap-2">
        {institution.isPraxisstelle ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-brand)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            <Star size={11} aria-hidden="true" />
            Praxisstelle
          </span>
        ) : (
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide"
            style={{ background: meta.colorSoft, color: meta.textOn }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: meta.color }} aria-hidden="true" />
            {meta.label}
          </span>
        )}
        {institution.zone === 'ausserhalb' ? (
          <span className="rounded-full bg-[var(--color-alert-soft)] px-2 py-1 text-[10px] font-semibold text-[var(--color-alert)]">
            außerhalb
          </span>
        ) : (
          !institution.isPraxisstelle && (
            <span className="rounded-full bg-[var(--color-mist)] px-2 py-1 text-[10px] font-medium text-[var(--color-ink-soft)]">
              {zoneMeta[institution.zone].label}
            </span>
          )
        )}
      </div>

      <h3 className="mt-3 font-display text-lg font-bold leading-snug text-[var(--color-ink)]">
        {institution.name}
      </h3>

      <p className="mt-1.5 flex items-start gap-1.5 text-[13px] text-[var(--color-ink-soft)]">
        <MapPin size={14} className="mt-0.5 shrink-0" aria-hidden="true" />
        {fullAddress(institution)}
      </p>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">
        {institution.description}
      </p>

      {distance && !institution.isPraxisstelle && (
        <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-[var(--color-mist)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink-soft)]">
          <Bike size={13} aria-hidden="true" />
          Luftlinie {formatDistanceMeters(distance.meters)}
          {cyclingMinutes ? ` · ca. ${cyclingMinutes} Min. Rad` : ''}
        </p>
      )}

      <div className="mt-auto flex items-center gap-2 pt-5">
        <button
          type="button"
          onClick={() => onOpenDetails(institution)}
          className="flex-1 rounded-full bg-[var(--color-ink)] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
        >
          Details
        </button>
        {onFocusOnMap && !institution.isPraxisstelle && (
          <button
            type="button"
            onClick={() => onFocusOnMap(institution)}
            aria-label={`${institution.name} auf der Karte anzeigen`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
          >
            <Target size={16} aria-hidden="true" />
          </button>
        )}
        <a
          href={buildDirectionsUrl(institution)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Route zu ${institution.name} öffnen`}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
        >
          <Navigation2 size={16} aria-hidden="true" />
        </a>
        {institution.website && (
          <a
            href={institution.website}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Website von ${institution.name} öffnen`}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-line)] text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
          >
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
