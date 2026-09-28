import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { localInstitutions, outsideInstitutions, praxisstelle } from '../data/institutions';

const STEP_META = [
  { key: 'center', emoji: '🏠', color: 'var(--color-brand)' },
  { key: 'nahbereich', emoji: '📍', color: 'var(--color-family)' },
  { key: 'sozialraum', emoji: '🧭', color: '#0d9488' },
  { key: 'ausserhalb', emoji: '⚠️', color: 'var(--color-alert)' },
] as const;

export default function SozialraumFlow() {
  const { t } = useTranslation();

  const nahbereichCount = localInstitutions.filter(
    (inst) => inst.zone === 'nahbereich' && !inst.isPraxisstelle,
  ).length;
  const sozialraumCount = localInstitutions.filter((inst) => inst.zone === 'sozialraum').length;
  const outsideCount = outsideInstitutions.length;
  const counts = [1, nahbereichCount, sozialraumCount, outsideCount];

  const steps = STEP_META.map((meta) => ({
    ...meta,
    label: meta.key === 'center' ? praxisstelle.name : t(`zone.${meta.key}.label`),
    sub: meta.key === 'center' ? t('flow.center') : t(`zone.${meta.key}.description`),
  }));

  return (
    <section aria-labelledby="flow-heading" className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 id="flow-heading" className="sr-only">
          {t('flow.sectionLabel')}
        </h2>
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-soft)]">
          {t('flow.caption', { name: praxisstelle.name })}
        </p>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          {steps.map((step, i) => (
            <div key={step.key} className="flex flex-1 items-center gap-3">
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[var(--color-line)] bg-white px-4 py-3 shadow-[var(--shadow-card)]">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-base"
                  style={{ background: `color-mix(in srgb, ${step.color} 15%, white)` }}
                  aria-hidden="true"
                >
                  {step.emoji}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[var(--color-ink)]">
                    {step.label}
                    {counts[i] > 0 && <span className="ms-1.5 font-normal text-[var(--color-ink-soft)]">({counts[i]})</span>}
                  </p>
                  <p className="truncate text-xs text-[var(--color-ink-soft)]">{step.sub}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight
                  size={18}
                  className="hidden shrink-0 text-[var(--color-line)] sm:block rtl:rotate-180"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
