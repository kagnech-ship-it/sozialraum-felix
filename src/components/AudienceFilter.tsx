import { audienceList } from '../data/audiences';
import type { Audience } from '../types/institution';

interface AudienceFilterProps {
  active: Audience[];
  onToggle: (audience: Audience) => void;
}

export default function AudienceFilter({ active, onToggle }: AudienceFilterProps) {
  return (
    <div className="scroll-x -mx-4 px-4 sm:mx-0 sm:px-0" role="group" aria-label="Nach Zielgruppe filtern">
      <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        {audienceList.map((aud) => {
          const isActive = active.includes(aud.id);
          return (
            <button
              key={aud.id}
              type="button"
              onClick={() => onToggle(aud.id)}
              aria-pressed={isActive}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-white'
                  : 'border-[var(--color-line)] bg-white text-[var(--color-ink-soft)] hover:border-[var(--color-ink)]'
              }`}
            >
              <span aria-hidden="true">{aud.emoji}</span>
              {aud.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
