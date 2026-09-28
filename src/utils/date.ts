/**
 * Datum in der aktuellen Sprache formatieren. Lateinische Ziffern auch im
 * Arabischen, passend zu allen anderen Zahlen auf der Seite.
 */
export function formatMonthYear(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', numberingSystem: 'latn' }).format(date);
}

export function formatLongDate(date: Date, locale: string): string {
  return new Intl.DateTimeFormat(locale, { dateStyle: 'long', numberingSystem: 'latn' }).format(date);
}
