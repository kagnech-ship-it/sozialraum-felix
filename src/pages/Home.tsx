import { lazy, Suspense, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AboutSection from '../components/AboutSection';
import CategoryLegend from '../components/CategoryLegend';
import DirectHelp from '../components/DirectHelp';
import FilterBar from '../components/FilterBar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import InstitutionCard from '../components/InstitutionCard';
import InstitutionModal from '../components/InstitutionModal';
import Navbar from '../components/Navbar';
import OutsideAreaSection from '../components/OutsideAreaSection';
import ParentNeeds from '../components/ParentNeeds';
import SozialraumFlow from '../components/SozialraumFlow';
import { KITA } from '../data/kita';
import { localInstitutions } from '../data/institutions';
import { useDistances } from '../hooks/useDistances';
import type { Audience, Category, Institution, ParentNeed } from '../types/institution';
import { matchesSearch } from '../utils/filter';
import { sortInstitutions, type SortOption } from '../utils/sort';

const SocialMap = lazy(() => import('../components/Map'));

export default function Home() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [activeCategories, setActiveCategories] = useState<Category[]>([]);
  const [activeAudiences, setActiveAudiences] = useState<Audience[]>([]);
  const [activeNeedId, setActiveNeedId] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>('naehe');
  const [focusedInstitution, setFocusedInstitution] = useState<Institution | null>(null);
  const [modalInstitution, setModalInstitution] = useState<Institution | null>(null);

  const mapSectionRef = useRef<HTMLDivElement>(null);

  const distances = useDistances(KITA, localInstitutions);

  const filteredInstitutions = useMemo(() => {
    const filtered = localInstitutions.filter(
      (inst) =>
        (activeCategories.length === 0 || activeCategories.includes(inst.category)) &&
        (activeAudiences.length === 0 || activeAudiences.some((a) => inst.audiences.includes(a))) &&
        matchesSearch(inst, search),
    );
    return sortInstitutions(filtered, sortBy, distances);
  }, [activeCategories, activeAudiences, search, sortBy, distances]);

  function handleCategoryChange(category: Category | 'alle') {
    setActiveNeedId(null);
    setActiveCategories(category === 'alle' ? [] : [category]);
  }

  function handleAudienceToggle(audience: Audience) {
    setActiveNeedId(null);
    setActiveAudiences((prev) => (prev.includes(audience) ? prev.filter((a) => a !== audience) : [...prev, audience]));
  }

  function handleNeedSelect(need: ParentNeed) {
    if (activeNeedId === need.id) {
      setActiveNeedId(null);
      setActiveCategories([]);
      setActiveAudiences([]);
      return;
    }
    setActiveNeedId(need.id);
    setActiveCategories(need.categories);
    setActiveAudiences(need.audiences ?? []);
    mapSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function handleLegendSelect(category: Category) {
    setActiveNeedId(null);
    setActiveCategories([category]);
    setActiveAudiences([]);
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

        <ParentNeeds onSelect={handleNeedSelect} activeNeedId={activeNeedId} />

        <CategoryLegend onSelect={handleLegendSelect} />

        <SozialraumFlow />

        <section id="karte" aria-labelledby="map-heading" className="bg-[var(--color-mist)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={mapSectionRef}>
            <div className="mx-auto max-w-2xl text-center">
              <h2 id="map-heading" className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
                {t('home.mapHeading', { name: KITA.name })}
              </h2>
              <p className="mt-3 text-base text-[var(--color-ink-soft)]">{t('home.mapSubtitle')}</p>
            </div>

            <div className="mt-8">
              <FilterBar
                search={search}
                onSearchChange={setSearch}
                activeCategories={activeCategories}
                onCategoryChange={handleCategoryChange}
                activeAudiences={activeAudiences}
                onAudienceToggle={handleAudienceToggle}
                sortBy={sortBy}
                onSortChange={setSortBy}
                resultCount={filteredInstitutions.length}
              />
            </div>

            <div className="mt-6 h-[420px] overflow-hidden rounded-3xl shadow-[var(--shadow-card)] sm:h-[520px] lg:h-[600px]">
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center bg-[var(--color-mist)]">
                    <span className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--color-brand)] border-t-transparent" />
                  </div>
                }
              >
                <SocialMap
                  institutions={filteredInstitutions}
                  selectedInstitution={focusedInstitution}
                  onSelectInstitution={setFocusedInstitution}
                  onOpenDetails={setModalInstitution}
                />
              </Suspense>
            </div>
          </div>
        </section>

        <section id="einrichtungen" aria-labelledby="list-heading" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="list-heading" className="font-display text-3xl font-bold text-[var(--color-ink)] sm:text-4xl">
              {t('home.listHeading')}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[var(--color-ink-soft)]">
              {t('home.listSubtitle')} {t('home.sortedBy', { option: t(`sort.${sortBy}`) })}
            </p>

            {filteredInstitutions.length === 0 ? (
              <div className="mt-10 rounded-2xl border border-dashed border-[var(--color-line)] bg-[var(--color-mist)] p-10 text-center">
                <p className="text-base font-semibold text-[var(--color-ink)]">{t('home.emptyTitle')}</p>
                <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{t('home.emptySubtitle')}</p>
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

        <DirectHelp onSelect={handleNeedSelect} />

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
