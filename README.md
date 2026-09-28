# Sozialraum Felix

Eine interaktive Sozialraumkarte rund um die **Humanistische Kita Zühlsdorfer Straße** (Zühlsdorfer Straße 18, 12679 Berlin-Marzahn) – die Praxisstelle. Die Website zeigt Eltern und pädagogischen Fachkräften, welche Unterstützungssysteme – Beratung, Bildung, Freizeit, Beteiligung u. a. – im Sozialraum rund um die Kita zu finden sind.

**Wichtig:** Die Humanistische Kita Zühlsdorfer Straße (Praxisstelle) und das **Familienzentrum Felix** sind zwei eigenständige, im selben Gebäudekomplex ("Familienhaus Felix") ansässige Einrichtungen desselben Trägers (Humanistischer Verband Berlin-Brandenburg) – auf der Karte bewusst als zwei getrennte Marker mit eigenen Detailseiten dargestellt, nicht als eine Einrichtung.

Entstanden als schulisches Projekt (LEK, Lernfeld 5, Ausbildung zum Erzieher) zum Thema **„Unterstützungssysteme in der Bildungs- und Erziehungspartnerschaft im Sozialraum“**.

## 1. Projektbeschreibung

- **Praxisstelle / Zentrum der Karte:** Humanistische Kita Zühlsdorfer Straße, Zühlsdorfer Straße 18, 12679 Berlin
- **20 Einrichtungen** im und um den Sozialraum, in 9 Kategorien (Familie, Bildung, Jugend, Beratung, Sport & Bewegung, Freizeit, Kultur, Beteiligung, Inklusion)
- **Zonen-Konzept:** Nahbereich / weiterer Sozialraum / außerhalb des engeren Sozialraums – macht sichtbar, dass die Auswahl einem echten Sozialraum-Konzept folgt, keiner zufälligen Berlin-weiten Liste
- Interaktive **Karte (Leaflet + OpenStreetMap)** mit kategorie-spezifischen Markern, Popups und Karten-/Listen-Synchronisation – **läuft ohne jeden API-Key**
- **Filter** nach Kategorie und Zielgruppe, **Volltextsuche**, **Sortierung** (Nähe/Kategorie/Alphabet/Relevanz), thematische Schnellzugriffe („Was suchst du?“, „Direkt Hilfe finden“)
- Detailansicht je Einrichtung (Modal) mit Angeboten, Zielgruppen, Route- und Website-Links sowie Quellenangabe
- Ehrliche **Entfernungsangaben**: Luftlinie, immer berechnet aus echten, recherchierten Koordinaten – nie erfundene Werte
- **Mehrsprachig:** Deutsch, Englisch, Albanisch, Vietnamesisch, Französisch, Türkisch, Arabisch (inkl. Rechts-nach-links-Layout) – Sprachumschalter in der Navigation
- Eigene **Quellen-Seite** (`/quellen`) mit allen verwendeten Quellen gesammelt
- Barrierearm: Tastaturnavigation, sichtbarer Fokus, semantisches HTML, aria-Labels, Farbe nie als einziger Informationsträger

## 2. Tech-Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (über das offizielle `@tailwindcss/vite`-Plugin)
- [Lucide Icons](https://lucide.dev/) (`lucide-react`)
- [Leaflet](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/) mit **OpenStreetMap**-Kartenkacheln (kostenlos, kein API-Key nötig; als eigener Chunk lazy geladen)
- [React Router](https://reactrouter.com/) für die `/quellen`-Seite
- [react-i18next](https://react.i18next.com/) für die 7-sprachige Oberfläche

## 3. Installation

Voraussetzung: Node.js (empfohlen: aktuelle LTS-Version) und npm.

```bash
npm install
```

## 4. Entwicklung starten

```bash
npm run dev
```

Die Website ist danach unter `http://localhost:5173/` erreichbar. Die Karte nutzt OpenStreetMap über Leaflet und **benötigt keinen API-Key** – sie funktioniert direkt nach `npm install`.

## 5. Kartendienst (Leaflet / OpenStreetMap)

Anders als ursprünglich mit der Google Maps JavaScript API geplant, nutzt die Website jetzt **Leaflet** mit **OpenStreetMap**-Kartenkacheln. Das hat für die Abgabe einen entscheidenden Vorteil: **kein API-Key, keine Google-Cloud-Einrichtung, keine Abrechnung** – die Karte funktioniert bei jedem, der den Link öffnet, sofort und garantiert.

- Kartenkacheln: `tile.openstreetmap.org` (offizieller, kostenloser OSM-Tile-Server)
- Pflicht-Attribution „© OpenStreetMap-Mitwirkende" wird automatisch unten rechts auf der Karte angezeigt (siehe [OSM-Nutzungsbedingungen](https://www.openstreetmap.org/copyright))
- „Route öffnen“-Links führen weiterhin zu Google Maps (reine Weblinks, keine JavaScript API, kein Key nötig) – dort hat praktisch jeder Nutzer bereits eine App/einen Account

## 6. Mehrsprachigkeit

Die Oberfläche gibt es komplett in **7 Sprachen**: Deutsch, Englisch, Albanisch, Vietnamesisch, Französisch, Türkisch und Arabisch (mit automatischem Rechts-nach-links-Layout). Der Sprachumschalter (Globus-Icon) sitzt oben rechts in der Navigation; die Wahl wird im Browser gespeichert.

- **UI-Texte:** [`react-i18next`](https://react.i18next.com/), Übersetzungsdateien unter `src/i18n/locales/*.json` (ein JSON pro Sprache, gleiche Schlüsselstruktur)
- **Einrichtungsinhalte:** Beschreibung, Angebote und Zielgruppen jeder Einrichtung sind zusätzlich pro Sprache im Feld `translations` in [`src/data/institutions.ts`](src/data/institutions.ts) hinterlegt (Namen und Adressen bleiben als Eigennamen unübersetzt). Fehlt eine Übersetzung, wird ehrlich auf den deutschen Originaltext zurückgefallen statt etwas zu erfinden.
- **Arabisch (RTL):** `src/components/DocumentLocale.tsx` setzt `dir="rtl"` auf `<html>`, Tailwind-`rtl:`-Klassen und logische Abstände (`ms-`/`me-`/`ps-`/`pe-`) spiegeln das Layout; eine eigene Google-Font (Cairo) sorgt für saubere arabische Typografie.
- Alle Fachbegriffe (Jugendamt, Erziehungsberatung, Elterngeld usw.) wurden nach Möglichkeit anhand offizieller mehrsprachiger Seiten von berlin.de bzw. dem Familienportal Berlin geprüft, nicht einfach wörtlich übersetzt.

Eine neue Sprache ergänzen: Locale-Code in `src/types/i18n.ts` (`LOCALES`) eintragen, `src/i18n/locales/<code>.json` nach dem Schema der bestehenden Dateien anlegen, in `src/i18n/index.ts` importieren und registrieren, optional `translations.<code>` bei den Einrichtungen in `institutions.ts` ergänzen.

## 7. Build

```bash
npm run build
```

Erstellt einen produktionsfertigen Build in `dist/`. Vorher wird automatisch ein TypeScript-Check (`tsc -b`) ausgeführt. Die Karte (Leaflet) wird als eigener Chunk erst beim Erreichen des Kartenbereichs nachgeladen (Lazy Loading), das hält das Hauptbundle klein.

Build lokal ansehen:

```bash
npm run preview
```

## 8. Deployment

Die Website ist eine statische Single-Page-App (Ergebnis von `npm run build` im Ordner `dist/`) und kann auf jedem statischen Hoster ausgeliefert werden, z. B. Netlify, Vercel, GitHub Pages oder ein eigener Webserver. Da kein API-Key benötigt wird, ist dafür keine zusätzliche Konfiguration nötig.

### Deployment auf GitHub Pages (empfohlener Weg für die Abgabe)

Dieses Projekt enthält bereits einen fertigen GitHub-Actions-Workflow (`.github/workflows/deploy.yml`), der bei jedem Push auf `main` automatisch baut und auf GitHub Pages veröffentlicht.

Die Website läuft als **Organisations-Seite** direkt unter der Wurzel der Adresse:

```
https://sozialraum-kita-zuehlsdorfer-strasse.github.io/
```

Dafür gehört das Repository der GitHub-Organisation `sozialraum-kita-zuehlsdorfer-strasse` und heißt exakt `sozialraum-kita-zuehlsdorfer-strasse.github.io` – nur bei diesem Namensschema liefert GitHub Pages die Seite ohne Unterpfad aus. Entsprechend steht in [`vite.config.ts`](vite.config.ts) `base: '/'`.

Einrichtung von Grund auf (falls das Projekt neu aufgesetzt werden muss):

1. **GitHub-Account anlegen** (falls noch nicht vorhanden): <https://github.com/signup>
2. **Organisation anlegen** (kostenlos): oben rechts „+“ → **New organization** → **Free**, Name `sozialraum-kita-zuehlsdorfer-strasse`. Der Name der Organisation wird zur Subdomain des Links.
3. In der Organisation ein **öffentliches Repository** mit dem Namen `sozialraum-kita-zuehlsdorfer-strasse.github.io` erstellen und dieses Projekt dorthin pushen:
   ```bash
   git remote add origin https://github.com/sozialraum-kita-zuehlsdorfer-strasse/sozialraum-kita-zuehlsdorfer-strasse.github.io.git
   git branch -M main
   git push -u origin main
   ```
4. Im Repository unter **Settings → Pages** bei „Build and deployment“ → **Source: GitHub Actions** auswählen (nicht „Deploy from a branch“).
5. Soll die Seite stattdessen in einem normalen Repository (Link der Form `https://<name>.github.io/<repo-name>/`) laufen, muss `base` in [`vite.config.ts`](vite.config.ts) auf `'/<repo-name>/'` gesetzt werden – sonst werden CSS/JS-Dateien nicht gefunden.
6. Nach dem nächsten Push läuft der Workflow automatisch (Tab **Actions** im Repository zeigt den Fortschritt).
   Diesen Link kannst du direkt an den Dozenten / die Dozentin weitergeben.

Ein manueller Redeploy (z. B. nach einer Datenänderung) passiert automatisch bei jedem `git push` auf `main` – oder manuell über den Button **Run workflow** im Actions-Tab.

## 9. Projektstruktur

```
src/
  components/     Navbar, LanguageSwitcher, DocumentLocale, Hero, Map, MapMarker,
                   FilterBar, SearchBar, CategoryFilter, AudienceFilter, SortControl,
                   InstitutionCard, InstitutionModal, CategoryLegend, ParentNeeds,
                   DirectHelp, SozialraumFlow, OutsideAreaSection, AboutSection, Footer
  data/           institutions.ts (zentrale Datenquelle, inkl. translations),
                   categories.ts, audiences.ts, kita.ts, parentNeeds.ts, directHelp.ts
  hooks/          useDistances.ts (Luftlinien-Entfernung), useLocalizedInstitution.ts
  i18n/           index.ts, locales/{de,en,sq,vi,fr,tr,ar}.json
  pages/          Home.tsx, Quellen.tsx
  types/          institution.ts, i18n.ts
  utils/          distance.ts, filter.ts, links.ts, mapIcons.ts, sort.ts
```

## 10. Verwendete Quellen

Alle Angaben zu den Einrichtungen (Adresse, Angebote, Website) wurden vor der Umsetzung anhand offizieller Quellen recherchiert und geprüft:

| Einrichtung | Hauptquelle |
|---|---|
| Humanistische Kita Zühlsdorfer Straße (Praxisstelle) | humanistisch.de/kitas/kitas-berlin-brandenburg/humanistische-kita-zuehlsdorfer-strasse (Humanistischer Verband Berlin-Brandenburg) |
| Familienzentrum Felix | humanistisch.de/felix-zentrum (Humanistischer Verband Berlin-Brandenburg) |
| Freizeitforum Marzahn | berlin.de, freizeitforum-marzahn.com |
| Mark-Twain-Bibliothek | berlin.de/bibliotheken-mh |
| FAIR Jugendfreizeiteinrichtung | humanistisch.de |
| Kinder- und Jugendbeteiligungsbüro | kijubue.de |
| Gangway – Team Marzahn | gangway.de/teams/marzahn |
| SportJugendClub Marzahn | sjcmarzahn.de |
| JFE Impuls | kinderring-berlin.de |
| CABUWAZI Springling | cabuwazi.de |
| Immanuel Beratungszentrum Marzahn | beratung.immanuel.de |
| Haus am Akaziengrund – AHA-Elterntreff | pad-berlin.de |
| KJFZ Drehkreuz | drk-berlin-nordost.de |
| KJFZ Haus Windspiel | jao-berlin.de |
| Familienservicebüro Marzahn-Hellersdorf | berlin.de (Bezirksamt Marzahn-Hellersdorf) |
| Familienhaus Kastanie | pad-berlin.de |
| JFE Treibhaus | agrar-boerse-ev.de |
| Kiezpark Schönagelstraße | berlin.de (Stadtumbau Ost) |
| Erziehungs- und Familienberatung Marzahn | berlin.de (Bezirksamt Marzahn-Hellersdorf) |
| Jugendamt Marzahn-Hellersdorf | berlin.de (Bezirksamt Marzahn-Hellersdorf) |

Die jeweilige Quelle ist zusätzlich direkt in der Detailansicht (Modal) jeder Einrichtung sowie gesammelt auf der [Quellen-Seite](#) (`/quellen`) verlinkt. Koordinaten wurden aus den geprüften Adressen geokodiert (Straßen-Genauigkeit) – sie sind keine offiziell veröffentlichten Werte, dienen aber als verlässliche Grundlage für Kartenmarker und Luftlinien-Entfernungen.

**Fachliche Grundlage:** Gartinger, Silvia et al.: *Erzieherinnen + Erzieher*, Band 1, 2. Auflage, Cornelsen, 2020, S. 662–677.

**Hinweis zu KJFZ Haus Windspiel / Erziehungs- und Familienberatung Marzahn:** Beide Einrichtungen befinden sich im selben Gebäude (Golliner Straße), sind aber eigenständige Angebote unterschiedlicher Träger (JAO gGmbH bzw. Jugendamt Marzahn-Hellersdorf) – kein Duplikat.

## 11. Vor der Abgabe noch zu prüfen

- [ ] Prüfen, ob sich die Trägerschaft/Adresse von CABUWAZI Springling zum Abgabezeitpunkt geändert hat (bei der Recherche wurde ein kürzlicher Trägerwechsel am Standort festgestellt)
- [ ] Aktualität der Öffnungszeiten/Kontaktdaten bei Bedarf direkt bei den Einrichtungen nachprüfen, falls diese für die Abgabe relevant sind (auf der Website bewusst nicht dargestellt, um keine veralteten Angaben zu riskieren)
- [ ] Übersetzungen (v. a. Albanisch, Vietnamesisch, Türkisch, Arabisch) stichprobenartig von einer sprachkundigen Person gegenlesen lassen, wenn möglich – maschinell/KI-gestützt erstellte Übersetzungen professioneller Qualität, aber keine amtliche Beglaubigung
- [ ] Eigene Screenshots/Notizen zur Abgabe ergänzen, falls die LEK das verlangt

## Hinweis

Dies ist ein nicht-kommerzielles, schulisches Projekt. Es besteht keine offizielle Verbindung zu den dargestellten Einrichtungen über die zitierten öffentlichen Quellen hinaus.
