import { Home as HomeIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const base = import.meta.env.BASE_URL;

const LINKS = [
  { href: `${base}#karte`, label: 'Karte' },
  { href: `${base}#einrichtungen`, label: 'Einrichtungen' },
  { href: `${base}#kategorien`, label: 'Kategorien' },
  { href: `${base}#ueber`, label: 'Über das Projekt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white/90 backdrop-blur-md">
      <a href={`${base}#main`} className="skip-link">
        Zum Inhalt springen
      </a>
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold text-[var(--color-ink)]">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-brand)] text-white shadow-sm">
            <HomeIcon size={18} strokeWidth={2.4} aria-hidden="true" />
          </span>
          Sozialraum Felix
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
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
              Quellen
            </Link>
          </li>
        </ul>

        <a
          href={`${base}#karte`}
          className="hidden rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-[var(--color-brand-dark)] md:inline-block"
        >
          Sozialraum entdecken
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[var(--color-ink)] md:hidden"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-[var(--color-line)] bg-white px-4 pb-4 md:hidden">
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
                Quellen
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
