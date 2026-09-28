import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { RTL_LOCALES, type Locale } from '../types/i18n';

/** Hält <html lang> und <html dir> mit der aktiven Sprache synchron (wichtig für Arabisch/RTL). */
export default function DocumentLocale() {
  const { i18n } = useTranslation();
  const locale = (i18n.resolvedLanguage ?? 'de') as Locale;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';
  }, [locale]);

  return null;
}
