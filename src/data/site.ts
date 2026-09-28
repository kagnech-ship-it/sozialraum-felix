/**
 * Name der Website (Eigenname, wird nicht übersetzt) und Stand der Recherche.
 * `RESEARCH_DATE` ist der Tag, an dem alle Online-Quellen zuletzt abgerufen
 * und geprüft wurden – bei einer erneuten Prüfung hier aktualisieren.
 */
export const SITE_NAME = {
  primary: 'Sozialraum',
  secondary: 'Zühlsdorfer Straße',
  full: 'Sozialraum Zühlsdorfer Straße',
} as const;

export const RESEARCH_DATE = new Date(2026, 8, 28);
