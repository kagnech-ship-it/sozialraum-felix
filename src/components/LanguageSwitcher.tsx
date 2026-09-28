import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LOCALES } from '../types/i18n';

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { i18n, t } = useTranslation();

  return (
    <label className={`inline-flex items-center gap-1.5 ${className}`}>
      <Globe size={16} className="shrink-0 text-[var(--color-ink-soft)]" aria-hidden="true" />
      <span className="sr-only">{t('nav.language')}</span>
      <select
        value={i18n.resolvedLanguage ?? 'de'}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        aria-label={t('nav.language')}
        className="min-w-0 truncate rounded-lg border-0 bg-transparent py-1 pe-6 text-sm font-medium text-[var(--color-ink-soft)] focus:bg-white"
      >
        {LOCALES.map((locale) => (
          <option key={locale.code} value={locale.code}>
            {locale.nativeLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
