export type Locale = 'de' | 'en' | 'sq' | 'vi' | 'fr' | 'tr' | 'ar';

export const RTL_LOCALES: readonly Locale[] = ['ar'];

export const LOCALES: { code: Locale; label: string; nativeLabel: string; flag: string }[] = [
  { code: 'de', label: 'Deutsch', nativeLabel: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', label: 'Englisch', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'sq', label: 'Albanisch', nativeLabel: 'Shqip', flag: '🇦🇱' },
  { code: 'vi', label: 'Vietnamesisch', nativeLabel: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'fr', label: 'Französisch', nativeLabel: 'Français', flag: '🇫🇷' },
  { code: 'tr', label: 'Türkisch', nativeLabel: 'Türkçe', flag: '🇹🇷' },
  { code: 'ar', label: 'Arabisch', nativeLabel: 'العربية', flag: '🇸🇦' },
];
