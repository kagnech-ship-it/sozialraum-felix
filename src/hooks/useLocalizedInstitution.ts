import { useTranslation } from 'react-i18next';
import type { Locale } from '../types/i18n';
import type { Institution, InstitutionTranslation } from '../types/institution';

/**
 * Liefert Beschreibung/Angebote/Zielgruppen einer Einrichtung in der aktuellen
 * Sprache. Name und Adresse bleiben immer im Original (Eigennamen werden
 * nicht übersetzt). Fehlt eine Übersetzung für die aktuelle Sprache, wird
 * ehrlich auf den deutschen Originaltext zurückgefallen statt etwas zu
 * erfinden.
 */
export function useLocalizedInstitution(institution: Institution): InstitutionTranslation {
  const { i18n } = useTranslation();
  const locale = (i18n.resolvedLanguage ?? 'de') as Locale;

  if (locale === 'de') {
    return {
      description: institution.description,
      offers: institution.offers,
      targetGroups: institution.targetGroups,
    };
  }

  const translation = institution.translations?.[locale];
  return {
    description: translation?.description ?? institution.description,
    offers: translation?.offers ?? institution.offers,
    targetGroups: translation?.targetGroups ?? institution.targetGroups,
  };
}
