import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import ar from './locales/ar.json';
import de from './locales/de.json';
import en from './locales/en.json';
import fr from './locales/fr.json';
import sq from './locales/sq.json';
import tr from './locales/tr.json';
import vi from './locales/vi.json';

export const SUPPORTED_LOCALES = ['de', 'en', 'sq', 'vi', 'fr', 'tr', 'ar'] as const;

void i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
      sq: { translation: sq },
      vi: { translation: vi },
      fr: { translation: fr },
      tr: { translation: tr },
      ar: { translation: ar },
    },
    fallbackLng: 'de',
    supportedLngs: SUPPORTED_LOCALES,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'sozialraum-felix-locale',
    },
  });

export default i18next;
