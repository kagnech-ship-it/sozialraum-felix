# Sozialraum Felix

Eine interaktive Sozialraumkarte rund um das **Familienhaus Felix** (Humanistische Kita, Zühlsdorfer Straße 18, 12679 Berlin-Marzahn). Die Website zeigt Eltern und pädagogischen Fachkräften, welche Unterstützungssysteme – Beratung, Bildung, Freizeit, Beteiligung u. a. – im Sozialraum rund um die Kita zu finden sind.

Entstanden als schulisches Projekt (LEK, Lernfeld 5, Ausbildung zum Erzieher) zum Thema **„Unterstützungssysteme in der Bildungs- und Erziehungspartnerschaft im Sozialraum“**.

## 1. Projektbeschreibung

- **Praxisstelle / Zentrum der Karte:** Familienzentrum Felix, Zühlsdorfer Straße 16–18, 12679 Berlin
- **12 Einrichtungen** im und um den Sozialraum, kategorisiert (Familie, Bildung, Jugend, Beratung, Sport, Kultur, Beteiligung, Inklusion)
- Interaktive **Google-Maps-Karte** mit kategorie-spezifischen Markern, Info-Fenstern und Karten-/Listen-Synchronisation
- **Filter** nach Kategorie, **Volltextsuche**, thematische Schnellzugriffe („Was suchst du?“)
- Detailansicht je Einrichtung (Modal) mit Angeboten, Zielgruppen, Route- und Website-Links sowie Quellenangabe
- Ehrliche **Entfernungsangaben**: Luftlinie (immer berechnet aus echten Koordinaten) und – sobald Google Maps geladen ist – echte Rad-Routendistanz via Distance Matrix
- Läuft **auch ohne Google-Maps-API-Key vollständig** (Listen-Fallback)
- Barrierearm: Tastaturnavigation, sichtbarer Fokus, semantisches HTML, aria-Labels, Farbe nie als einziger Informationsträger

## 2. Tech-Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (über das offizielle `@tailwindcss/vite`-Plugin)
- [Lucide Icons](https://lucide.dev/) (`lucide-react`)
- [`@react-google-maps/api`](https://www.npmjs.com/package/@react-google-maps/api) als React-Wrapper für die Google Maps JavaScript API

## 3. Installation

Voraussetzung: Node.js (empfohlen: aktuelle LTS-Version) und npm.

```bash
npm install
```

## 4. Entwicklung starten

```bash
npm run dev
```

Die Website ist danach unter `http://localhost:5173` erreichbar. Sie funktioniert **auch ohne Google-Maps-API-Key** – die Karte zeigt dann einen Hinweis, alle Einrichtungen sind trotzdem vollständig als Liste sichtbar (siehe Abschnitt 5).

## 5. Google Maps API-Key einrichten

Die Website nutzt die **Google Maps JavaScript API** für die interaktive Karte, die Marker und (optional) die Rad-Routendistanzen.

### Key erstellen

1. Google Cloud Console öffnen: <https://console.cloud.google.com/>
2. Ein Projekt anlegen (oder ein bestehendes verwenden).
3. Unter **APIs & Dienste → Bibliothek** aktivieren:
   - **Maps JavaScript API**
   - **Distance Matrix API** (optional, für echte Rad-Routendistanzen – ohne sie wird automatisch die berechnete Luftlinie angezeigt)
4. Unter **APIs & Dienste → Anmeldedaten** einen neuen **API-Schlüssel** erstellen.
5. Den Schlüssel einschränken (empfohlen):
   - **Anwendungseinschränkung:** HTTP-Referrer (Websites), z. B. `http://localhost:5173/*` für die lokale Entwicklung
   - **API-Einschränkung:** nur die oben aktivierten APIs zulassen

### Key eintragen

```bash
cp .env.example .env
```

In der neu erstellten `.env`-Datei den Key eintragen:

```bash
VITE_GOOGLE_MAPS_API_KEY=dein-eigener-key-hier
```

Danach den Dev-Server neu starten (`npm run dev`). Die `.env`-Datei wird von Git ignoriert (siehe `.gitignore`) – der Key landet also nicht im Repository.

### Ohne API-Key

Fehlt der Key oder schlägt das Laden fehl, zeigt die Karte automatisch den Hinweis „Google Maps API-Key fehlt“. Die Website bleibt **vollständig nutzbar**: Alle 12 Einrichtungen werden weiterhin als Karten-Liste mit Adresse, Beschreibung, Angeboten, Routen-Link (öffnet Google Maps in einem neuen Tab) und Website-Link angezeigt. Entfernungen werden in diesem Fall als „Luftlinie“ aus den hinterlegten, recherchierten Koordinaten berechnet – es werden nie erfundene Werte angezeigt.

## 6. Build

```bash
npm run build
```

Erstellt einen produktionsfertigen Build in `dist/`. Vorher wird automatisch ein TypeScript-Check (`tsc -b`) ausgeführt.

Build lokal ansehen:

```bash
npm run preview
```

## 7. Deployment

Die Website ist eine statische Single-Page-App (Ergebnis von `npm run build` im Ordner `dist/`) und kann auf jedem statischen Hoster ausgeliefert werden, z. B. Netlify, Vercel, GitHub Pages oder ein eigener Webserver.

Wichtig: Den `VITE_GOOGLE_MAPS_API_KEY` beim Deployment als **Umgebungsvariable der Hosting-Plattform** setzen (nicht die lokale `.env`-Datei deployen) und den API-Key in der Google Cloud Console auf die produktive Domain einschränken.

## 8. Projektstruktur

```
src/
  components/     Navbar, Hero, Map, MapMarker, FilterBar, SearchBar,
                   InstitutionCard, InstitutionModal, CategoryFilter,
                   CategoryLegend, ParentNeeds, OutsideAreaSection,
                   AboutSection, Footer
  data/           institutions.ts (zentrale Datenquelle), categories.ts,
                   kita.ts, parentNeeds.ts
  hooks/          useDistances.ts (Luftlinie + optionale Distance-Matrix-Routendistanz)
  pages/          Home.tsx
  types/          institution.ts
  utils/          distance.ts, filter.ts, links.ts, mapIcons.ts, mapStyle.ts
```

## 9. Verwendete Quellen

Alle Angaben zu den Einrichtungen (Adresse, Angebote, Website) wurden vor der Umsetzung anhand offizieller Quellen recherchiert und geprüft:

| Einrichtung | Hauptquelle |
|---|---|
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
| Erziehungs- und Familienberatung Marzahn | berlin.de (Bezirksamt Marzahn-Hellersdorf) |
| Jugendamt Marzahn-Hellersdorf | berlin.de (Bezirksamt Marzahn-Hellersdorf) |

Die jeweilige Quelle ist zusätzlich direkt in der Detailansicht (Modal) jeder Einrichtung verlinkt. Koordinaten wurden aus den geprüften Adressen geokodiert (Straßen-Genauigkeit) – sie sind keine offiziell veröffentlichten Werte, dienen aber als verlässliche Grundlage für Kartenmarker und Luftlinien-Entfernungen.

**Fachliche Grundlage:** Gartinger, Silvia et al.: *Erzieherinnen + Erzieher*, Band 1, 2. Auflage, Cornelsen, 2020, S. 662–677.

## 10. Vor der Abgabe noch zu prüfen

- [ ] Eigenen Google-Maps-API-Key eintragen und die Karte einmal live mit Key testen (Marker, Info-Fenster, Zoom/Pan, Klick-Synchronisation mit den Cards)
- [ ] Prüfen, ob sich die Trägerschaft/Adresse von CABUWAZI Springling zum Abgabezeitpunkt geändert hat (bei der Recherche wurde ein kürzlicher Trägerwechsel am Standort festgestellt)
- [ ] Aktualität der Öffnungszeiten/Kontaktdaten bei Bedarf direkt bei den Einrichtungen nachprüfen, falls diese für die Abgabe relevant sind (auf der Website bewusst nicht dargestellt, um keine veralteten Angaben zu riskieren)
- [ ] Eigene Screenshots/Notizen zur Abgabe ergänzen, falls die LEK das verlangt

## Hinweis

Dies ist ein nicht-kommerzielles, schulisches Projekt. Es besteht keine offizielle Verbindung zu den dargestellten Einrichtungen über die zitierten öffentlichen Quellen hinaus.
