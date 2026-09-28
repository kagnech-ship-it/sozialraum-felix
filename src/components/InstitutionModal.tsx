import { ExternalLink, MapPin, Navigation2, Star, X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { categories } from '../data/categories';
import type { Institution } from '../types/institution';
import { buildDirectionsUrl, fullAddress } from '../utils/links';

interface InstitutionModalProps {
  institution: Institution;
  onClose: () => void;
}

const TARGET_GROUP_ICONS: Record<string, string> = {
  familie: '👨‍👩‍👧',
  kind: '👶',
  eltern: '👨‍👩‍👧',
  jugend: '🧑‍🤝‍🧑',
  paar: '💑',
  bezirk: '🏙️',
  schul: '🏫',
  behinderung: '♿',
  frau: '👩',
  erwachsen: '🧑',
};

function iconForTargetGroup(label: string): string {
  const lower = label.toLowerCase();
  for (const [key, icon] of Object.entries(TARGET_GROUP_ICONS)) {
    if (lower.includes(key)) return icon;
  }
  return '👥';
}

export default function InstitutionModal({ institution, onClose }: InstitutionModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const meta = categories[institution.category];

  useEffect(() => {
    dialogRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[var(--color-ink)]/60 p-0 backdrop-blur-sm animate-fade-in sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="institution-modal-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="animate-pop-in max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white shadow-[var(--shadow-pop)] sm:rounded-3xl"
      >
        <div
          className="relative px-6 pb-6 pt-7 sm:px-8 sm:pt-8"
          style={{ background: `linear-gradient(180deg, ${meta.colorSoft} 0%, white 100%)` }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Schließen"
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[var(--color-ink)] shadow-sm hover:bg-white"
          >
            <X size={18} aria-hidden="true" />
          </button>

          {institution.isPraxisstelle ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-brand)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              <Star size={12} aria-hidden="true" />
              Praxisstelle
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
              style={{ background: meta.color, color: 'white' }}
            >
              {meta.label}
            </span>
          )}

          <h2 id="institution-modal-title" className="mt-3 pr-8 font-display text-2xl font-extrabold text-[var(--color-ink)]">
            {institution.name}
          </h2>

          <p className="mt-2 flex items-start gap-1.5 text-sm text-[var(--color-ink-soft)]">
            <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
            {fullAddress(institution)}
          </p>

          {institution.outsideLocalArea && (
            <p className="mt-3 rounded-xl bg-white/70 px-3 py-2 text-xs font-medium text-[var(--color-alert)]">
              Außerhalb des engeren Sozialraums – trotzdem wichtige Anlaufstelle
            </p>
          )}
        </div>

        <div className="px-6 pb-8 sm:px-8">
          <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
            {institution.description}
          </p>

          <section aria-labelledby="offers-heading" className="mt-6">
            <h3 id="offers-heading" className="text-sm font-bold uppercase tracking-wide text-[var(--color-ink)]">
              Angebote
            </h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {institution.offers.map((offer) => (
                <li key={offer} className="flex items-start gap-2 text-sm text-[var(--color-ink-soft)]">
                  <span className="mt-0.5 text-[var(--color-family)]" aria-hidden="true">
                    ✓
                  </span>
                  {offer}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="target-groups-heading" className="mt-6">
            <h3 id="target-groups-heading" className="text-sm font-bold uppercase tracking-wide text-[var(--color-ink)]">
              Für wen?
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {institution.targetGroups.map((group) => (
                <li
                  key={group}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-mist)] px-3 py-1.5 text-sm text-[var(--color-ink)]"
                >
                  <span aria-hidden="true">{iconForTargetGroup(group)}</span>
                  {group}
                </li>
              ))}
            </ul>
          </section>

          {institution.sourceUrl && (
            <p className="mt-6 text-xs text-[var(--color-ink-soft)]">
              Quelle: {institution.sourceLabel ?? 'Offizielle Website'} ·{' '}
              <a href={institution.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
                zur Quelle
              </a>
            </p>
          )}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={buildDirectionsUrl(institution)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
            >
              <Navigation2 size={16} aria-hidden="true" />
              Route planen
            </a>
            {institution.website && (
              <a
                href={institution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition-colors hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Website besuchen
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
