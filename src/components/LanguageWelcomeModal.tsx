import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LOCALES, type Locale } from '../types/i18n';

const STORAGE_KEY = 'sozialraum-felix-locale-chosen';

/**
 * Sprachauswahl-Popup beim ersten Besuch. Nach der Auswahl "schleicht" das
 * Fenster in Richtung oben rechts (zum dauerhaften Sprachumschalter) und
 * verschwindet dabei – respektiert prefers-reduced-motion.
 */
function shouldShowInitially(): boolean {
  try {
    return !localStorage.getItem(STORAGE_KEY);
  } catch {
    // Private-Browsing o.ä.: Popup einfach nicht zeigen, App bleibt nutzbar.
    return false;
  }
}

export default function LanguageWelcomeModal() {
  const { i18n, t } = useTranslation();
  const [visible, setVisible] = useState(shouldShowInitially);
  const [closing, setClosing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) dialogRef.current?.focus();
  }, [visible]);

  function choose(code: Locale) {
    i18n.changeLanguage(code);
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch {
      // ignore
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setVisible(false);
      return;
    }

    setClosing(true);
    window.setTimeout(() => setVisible(false), 420);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--color-ink)]/60 p-4 backdrop-blur-sm animate-fade-in"
      role="presentation"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lang-welcome-title"
        tabIndex={-1}
        className={`w-full max-w-lg rounded-3xl bg-white p-6 shadow-[var(--shadow-pop)] transition-[transform,opacity] duration-[420ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:p-8 ${
          closing ? 'origin-top-right translate-x-[38vw] translate-y-[-38vh] scale-[0.15] opacity-0' : 'animate-pop-in'
        }`}
      >
        <h2 id="lang-welcome-title" className="text-center font-display text-xl font-bold text-[var(--color-ink)] sm:text-2xl">
          {t('nav.language')}
        </h2>
        <p className="mt-2 text-center text-sm text-[var(--color-ink-soft)]">Choose your language · Sprache wählen</p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {LOCALES.map((locale) => (
            <button
              key={locale.code}
              type="button"
              onClick={() => choose(locale.code)}
              className="flex flex-col items-center gap-1.5 rounded-2xl border border-[var(--color-line)] px-3 py-4 transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-0.5 hover:border-[var(--color-brand)] hover:shadow-[var(--shadow-card-hover)] active:scale-[0.97]"
            >
              <span className="text-3xl" aria-hidden="true">
                {locale.flag}
              </span>
              <span className="text-sm font-semibold text-[var(--color-ink)]">{locale.nativeLabel}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
