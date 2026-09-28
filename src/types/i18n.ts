export type Locale = 'de' | 'en' | 'sq' | 'vi' | 'fr' | 'tr' | 'ar';

export const RTL_LOCALES: readonly Locale[] = ['ar'];

export const LOCALES: { code: Locale; label: string; nativeLabel: string }[] = [
  { code: 'de', label: 'Deutsch', nativeLabel: 'Deutsch' },
  { code: 'en', label: 'Englisch', nativeLabel: 'English' },
  { code: 'sq', label: 'Albanisch', nativeLabel: 'Shqip' },
  { code: 'vi', label: 'Vietnamesisch', nativeLabel: 'Tiếng Việt' },
  { code: 'fr', label: 'Französisch', nativeLabel: 'Français' },
  { code: 'tr', label: 'Türkisch', nativeLabel: 'Türkçe' },
  { code: 'ar', label: 'Arabisch', nativeLabel: 'العربية' },
];
