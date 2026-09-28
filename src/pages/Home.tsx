import { useMemo, useRef, useState } from 'react';
import AboutSection from '../components/AboutSection';
import CategoryLegend from '../components/CategoryLegend';
import FilterBar from '../components/FilterBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import InstitutionCard from '../components/InstitutionCard';
import InstitutionModal from '../components/InstitutionModal';
import SocialMap from '../components/Map';
import Navbar from '../components/Navbar';
import OutsideAreaSection from '../components/OutsideAreaSection';
import ParentNeeds from '../components/ParentNeeds';
import { KITA } from '../data/kita';
import { localInstitutions } from '../data/institutions';
import { useDistances } from '../hooks/useDistances';
import type { Category, Institution, ParentNeed } from '../types/institution';
import { matchesSearch } from '../utils/filter';

export default function Home() {
  const [search, setSearch] = useState('');
  const [activeCategories, setActiveCategories] = useState<Category[]>([]);
  const [activeNeedId, setActiveNeedId] = useState<string | null>(null);
  const [focusedInstitution, setFocusedInstitution] = useState<Institution | null>(null);
  const [modalInstitution, setModalInstitution] = useState<Institution | null>(null);

  const mapSectionRef = useRef<HTMLDivElement>(null);

  const distances = useDistances(KITA, localInstitutions);

  const filteredInstitutions = useMemo(
    () =>
      localInstitutions.filter(
        (inst) =>
          (activeCategories.length === 0 || activeCategories.includes(inst.category)) &&
          matchesSearch(inst, search),
      ),
    [activeCategories, search],
  );

  function handleCategoryChange(category: Category | 'alle') {
    setActiveNeedId(null);
    setActiveCategories(category === 'alle' ? [] : [category]);
  }

  function handleParentNeedSelect(need: ParentNeed) {
    if (activeNeedId === need.id) {
      setActiveNeedId(null);
      setActiveCategories([]);
      return;
    }
    setActiveNeedId(need.id);
    setActiveCategories(need.categories);
    mapSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleLegendSelect(category: Category) {
    setActiveNeedId(null);
    setActiveCategories([category]);
    mapSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleSelectFromCard(institution: Institution) {
    setFocusedInstitution(institution);
    mapSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main id="main">
        <Hero />

        <ParentNeeds onSelect={handleParentNeedSelect} activeNeedId={activeNeedId} />

        <CategoryLegend onSelect={handleLegendSelect} />

        <section id="karte" aria-labelledby="map-heading" className="bg-[var(--color-mist)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={mapSectionRef}>
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="map-heading" className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
                Der Sozialraum rund um das Familienhaus Felix
              </h2>
              <p className="mt-3 text-base text-[var(--color-ink-soft)]">
                Klicke auf einen Marker oder eine Karte unten, um mehr über eine Einrichtung zu
                erfahren.
              </p>
            </div>

            <div className="mt-8">
              <FilterBar
                search={search}
                onSearchChange={setSearch}
                activeCategories={activeCategories}
                onCategoryChange={handleCategoryChange}
                resultCount={filteredInstitutions.length}
              />
            </div>

            <div className="mt-6 h-[420px] overflow-hidden rounded-3xl shadow-[var(--shadow-card)] sm:h-[520px] lg:h-[600px]">
              <SocialMap
                institutions={filteredInstitutions}
                selectedInstitution={focusedInstitution}
                onSelectInstitution={setFocusedInstitution}
                onOpenDetails={setModalInstitution}
              />
            </div>
          </div>
        </section>

        <section id="einrichtungen" aria-labelledby="list-heading" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="list-heading" className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              Einrichtungen im Sozialraum
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[var(--color-ink-soft)]">
              Alle Einrichtungen im engeren Umfeld der Kita – mit Angeboten, Zielgruppen und direktem
              Zugang zu Route und Website.
            </p>

            {filteredInstitutions.length === 0 ? (
              <div className="mt-10 rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-mist)] p-10 text-center">
                <p className="text-base font-semibold text-[var(--color-ink)]">Keine Einrichtungen gefunden</p>
                <p className="mt-1 text-sm text-[var(--color-ink-soft)]">
                  Versuche einen anderen Suchbegriff oder wähle „Alle“ bei den Kategorien.
                </p>
              </div>
            ) : (
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredInstitutions.map((inst) => (
                  <InstitutionCard
                    key={inst.id}
                    institution={inst}
                    distance={distances[inst.id]}
                    highlighted={focusedInstitution?.id === inst.id}
                    onOpenDetails={setModalInstitution}
                    onFocusOnMap={handleSelectFromCard}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <OutsideAreaSection onOpenDetails={setModalInstitution} />

        <AboutSection />
      </main>

      <Footer />

      {modalInstitution && (
        <InstitutionModal institution={modalInstitution} onClose={() => setModalInstitution(null)} />
      )}
    </div>
  );
}
