import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[var(--color-ink)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, #1d4ed8 0%, transparent 45%), radial-gradient(circle at 80% 0%, #16a34a 0%, transparent 40%), radial-gradient(circle at 90% 90%, #ea580c 0%, transparent 40%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90">
            <MapPin size={15} aria-hidden="true" />
            Familienhaus Felix · Berlin-Marzahn
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Unterstützung im Sozialraum
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
            Entdecke Beratungsstellen, Bildungsangebote, Freizeitmöglichkeiten und weitere
            Unterstützung rund um das Familienhaus Felix.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#karte"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-brand)] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Sozialraum entdecken
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="#einrichtungen"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/15 sm:w-auto"
            >
              Alle Einrichtungen anzeigen
            </a>
          </div>

          <dl className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-4 text-white/85">
            <div>
              <dt className="sr-only">Anzahl Einrichtungen</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-3xl">12</dd>
              <dd className="text-xs text-white/60 sm:text-sm">Einrichtungen</dd>
            </div>
            <div>
              <dt className="sr-only">Anzahl Kategorien</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-3xl">8</dd>
              <dd className="text-xs text-white/60 sm:text-sm">Kategorien</dd>
            </div>
            <div>
              <dt className="sr-only">Stadtteil</dt>
              <dd className="font-display text-2xl font-bold text-white sm:text-3xl">1</dd>
              <dd className="text-xs text-white/60 sm:text-sm">Sozialraum</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
