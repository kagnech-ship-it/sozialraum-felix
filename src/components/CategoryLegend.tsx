import { categoryList } from '../data/categories';
import type { Category } from '../types/institution';

const DESCRIPTIONS: Record<Category, string> = {
  familie: 'Familienangebote, Eltern-Kind-Gruppen, Familiencafé',
  bildung: 'Bücher, Medien, Leseförderung, Lernangebote',
  jugend: 'Offene Kinder- und Jugendarbeit, Treffpunkte',
  beratung: 'Erziehungs-, Familien- und Lebensberatung',
  sport: 'Bewegung, Mannschafts- und Kampfsport, Fitness',
  freizeit: 'Spiel-, Bewegungs- und Aufenthaltsorte',
  kultur: 'Kultur, Zirkuspädagogik, Veranstaltungen',
  beteiligung: 'Kinderrechte, Mitbestimmung, Projekte',
  inklusion: 'Offene Arbeit mit und ohne Behinderung',
  verwaltung: 'Anträge, Leistungen, behördliche Erstberatung',
};

interface CategoryLegendProps {
  onSelect: (category: Category) => void;
}

export default function CategoryLegend({ onSelect }: CategoryLegendProps) {
  return (
    <section id="kategorien" aria-labelledby="categories-heading" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="categories-heading" className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Kategorien im Sozialraum
          </h2>
          <p className="mt-3 text-base text-[var(--color-ink-soft)]">
            Jede Einrichtung ist einer Kategorie zugeordnet – auf der Karte farblich und mit
            Beschriftung erkennbar.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categoryList.map((cat) => (
            <li key={cat.id}>
              <button
                type="button"
                onClick={() => onSelect(cat.id)}
                className="flex h-full w-full flex-col items-start gap-2 rounded-2xl border border-[var(--color-line)] p-4 text-left shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card-hover)]"
                style={{ background: cat.colorSoft }}
              >
                <span
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm"
                  style={{ background: cat.color }}
                  aria-hidden="true"
                >
                  {cat.emoji}
                </span>
                <span className="font-display text-sm font-bold" style={{ color: cat.textOn }}>
                  {cat.label}
                </span>
                <span className="text-xs leading-snug" style={{ color: cat.textOn }}>
                  {DESCRIPTIONS[cat.id]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
