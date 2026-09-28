import { BookOpen, GraduationCap, Heart } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="ueber" aria-labelledby="about-heading" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-soft)] px-4 py-1.5 text-sm font-semibold text-[var(--color-brand-dark)]">
            <GraduationCap size={16} aria-hidden="true" />
            LEK · Lernfeld 5
          </span>
          <h2 id="about-heading" className="mt-4 font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
            Über diese Sozialraumkarte
          </h2>
        </div>

        <div className="mt-10 rounded-3xl border border-[var(--color-line)] bg-[var(--color-mist)] p-8 shadow-[var(--shadow-card)] sm:p-10">
          <p className="text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
            Diese digitale Sozialraumkarte wurde im Rahmen der Ausbildung zum Erzieher im Lernfeld 5
            entwickelt. Ziel ist es, Unterstützungssysteme im Sozialraum sichtbar und für Eltern und
            pädagogische Fachkräfte leicht zugänglich zu machen.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-soft)] sm:text-lg">
            Die Praxisstelle befindet sich im Zentrum der Karte. Die dargestellten Einrichtungen wurden
            nach ihrer möglichen Bedeutung für Kinder, Eltern und Familien ausgewählt.
          </p>

          <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-family-soft)] text-[var(--color-family)]">
              <Heart size={20} aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
              Kita → Eltern → Kinder → Sozialraum → Unterstützungssysteme: Die Bildungs- und
              Erziehungspartnerschaft lebt vom Zusammenspiel aller Beteiligten im Umfeld der Kita.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-card)] sm:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-mist)] text-[var(--color-ink)]">
              <BookOpen size={18} aria-hidden="true" />
            </span>
            <h3 className="font-display text-lg font-bold text-[var(--color-ink)]">Fachliche Grundlage</h3>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-soft)] sm:text-base">
            Gartinger, Silvia et al.: <em>Erzieherinnen + Erzieher</em>, Band 1, 2. Auflage, Cornelsen,
            2020, S. 662–677.
          </p>
          <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
            Diese Literatur ist die fachliche Grundlage der schulischen Aufgabenstellung.
          </p>
        </div>
      </div>
    </section>
  );
}
