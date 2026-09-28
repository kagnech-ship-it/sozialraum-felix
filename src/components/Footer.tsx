import { Home as HomeIcon, MapPin } from 'lucide-react';
import { KITA } from '../data/kita';
import { fullAddress } from '../utils/links';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)] py-12 text-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-brand)]">
                <HomeIcon size={18} strokeWidth={2.4} aria-hidden="true" />
              </span>
              Sozialraum Felix
            </div>
            <p className="mt-3 flex items-start gap-1.5 text-sm">
              <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden="true" />
              {KITA.name} · {fullAddress(KITA)}
            </p>
          </div>

          <nav aria-label="Footer-Navigation" className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href="#karte" className="hover:text-white">
              Karte
            </a>
            <a href="#einrichtungen" className="hover:text-white">
              Einrichtungen
            </a>
            <a href="#kategorien" className="hover:text-white">
              Kategorien
            </a>
            <a href="#ueber" className="hover:text-white">
              Über das Projekt
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/50">
          <p>
            Diese Website entstand als schulisches Projekt (LEK, Lernfeld 5) zur Praxisstelle
            Humanistische Kita / Familienhaus Felix, Zühlsdorfer Straße 18, 12679 Berlin. Alle
            Angaben zu Einrichtungen wurden anhand offizieller Quellen (berlin.de, offizielle
            Träger- und Einrichtungswebsites, Familienportal Berlin) geprüft – Quellenangaben je
            Einrichtung finden sich in der jeweiligen Detailansicht.
          </p>
          <p className="mt-2">Kein kommerzielles Angebot · nicht-offizielle Projektwebsite.</p>
        </div>
      </div>
    </footer>
  );
}
