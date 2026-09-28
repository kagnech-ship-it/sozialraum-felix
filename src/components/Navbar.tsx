import { Home as HomeIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SITE_NAME } from '../data/site';
import LanguageSwitcher from './LanguageSwitcher';

const base = import.meta.env.BASE_URL;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const LINKS = [
    { href: `${base}#karte`, label: t('nav.map') },
    { href: `${base}#einrichtungen`, label: t('nav.institutions') },
    { href: `${base}#kategorien`, label: t('nav.categories') },
    { href: `${base}#ueber`, label: t('nav.about') },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/90 backdrop-blur-md">
      <a href={`${base}#main`} className="skip-link">
        {t('nav.skipToContent')}
      </a>
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <Link to="/" className="flex shrink-0 items-center gap-2.5 font-display text-lg font-bold text-[var(--color-ink)]">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white shadow-sm">
            <HomeIcon size={18} strokeWidth={2.4} aria-hidden="true" />
          </span>
          <span className="flex flex-col whitespace-nowrap leading-none">
            <span>{SITE_NAME.primary}</span>
            <span className="mt-0.5 text-xs font-semibold text-[var(--color-ink-soft)]">{SITE_NAME.secondary}</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-mist)] hover:text-[var(--color-ink)]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/quellen"
              className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-mist)] hover:text-[var(--color-ink)]"
            >
              {t('nav.sources')}
            </Link>
          </li>
        </ul>

        <div className="flex min-w-0 items-center gap-2">
          {/* Auch auf dem Handy sichtbar, damit Eltern die Sprache sofort finden;
              darf schrumpfen, damit der Seitenname oben links nicht umbricht. */}
          <LanguageSwitcher className="min-w-0" />

          <a
            href={`${base}#karte`}
            className="hidden rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-[var(--color-brand-dark)] lg:inline-block"
          >
            {t('nav.discover')}
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[var(--color-ink)] lg:hidden"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-[var(--color-line)] bg-white px-4 pb-4 lg:hidden">
          <div className="pt-3 sm:hidden">
            <LanguageSwitcher />
          </div>
          <ul className="flex flex-col gap-1 pt-2">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-[var(--color-ink-soft)] hover:bg-[var(--color-mist)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/quellen"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-[var(--color-ink-soft)] hover:bg-[var(--color-mist)]"
              >
                {t('nav.sources')}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
