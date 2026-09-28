import type { Locale } from './i18n';

export type Category =
  | 'familie'
  | 'bildung'
  | 'jugend'
  | 'beratung'
  | 'sport'
  | 'freizeit'
  | 'kultur'
  | 'beteiligung'
  | 'inklusion';

/** Kontrollierte Zielgruppen-Tags für den "Für wen?"-Filter. */
export type Audience = 'kleinkind' | 'kind' | 'jugendlicher' | 'familie' | 'eltern' | 'fachkraft';

/**
 * Wie nah eine Einrichtung an der Praxisstelle liegt – macht auf der Karte
 * und in der Liste sichtbar, dass die Auswahl nicht zufällig aus ganz Berlin
 * stammt, sondern einem echten Sozialraum-Konzept folgt.
 */
export type Zone = 'nahbereich' | 'sozialraum' | 'ausserhalb';

export interface InstitutionTranslation {
  description: string;
  offers: string[];
  targetGroups: string[];
}

export interface Institution {
  id: string;
  name: string;
  category: Category;
  address: string;
  postalCode: string;
  city: string;
  description: string;
  targetGroups: string[];
  audiences: Audience[];
  offers: string[];
  website?: string;
  sourceUrl?: string;
  sourceLabel?: string;
  mapsUrl?: string;
  latitude: number;
  longitude: number;
  isPraxisstelle?: boolean;
  zone: Zone;
  /** Übersetzungen für nicht-deutsche Sprachen; Deutsch ist die Quelle (Felder oben). */
  translations?: Partial<Record<Exclude<Locale, 'de'>, InstitutionTranslation>>;
}

export interface ParentNeed {
  id: string;
  label: string;
  icon: string;
  categories: Category[];
  audiences?: Audience[];
}
