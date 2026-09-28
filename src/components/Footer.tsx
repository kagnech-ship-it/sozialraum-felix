import { Home as HomeIcon, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
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
            <Link to="/quellen" className="hover:text-white">
              Quellen
            </Link>
          </nav>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/50">
          <p>
            Die Sozialraumkarte wurde im Rahmen der Ausbildung zum Erzieher im Lernfeld 5 erstellt.
            Sie dient der niedrigschwelligen Orientierung über Unterstützungsangebote für Kinder,
            Eltern und Familien im Umfeld der Praxisstelle.
          </p>
          <p className="mt-2">
            Fachliche Grundlage: Gartinger, Silvia et al.: <em>Erzieherinnen + Erzieher</em>. Band 1.
            2. Auflage. Cornelsen, 2020, S. 662–677.
          </p>
          <p className="mt-2">
            Alle Angaben zu Einrichtungen wurden anhand offizieller Quellen (berlin.de, offizielle
            Träger- und Einrichtungswebsites, Familienportal Berlin) geprüft – Quellenangaben je
            Einrichtung finden sich in der jeweiligen Detailansicht und gesammelt auf der{' '}
            <Link to="/quellen" className="underline hover:text-white">
              Quellen-Seite
            </Link>
            .
          </p>
          <p className="mt-2">Kein kommerzielles Angebot · nicht-offizielle Projektwebsite.</p>
        </div>
      </div>
    </footer>
  );
}
