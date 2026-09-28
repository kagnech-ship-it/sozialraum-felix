# Sozialraum Felix

Eine interaktive Sozialraumkarte rund um das **Familienhaus Felix** (Humanistische Kita, Zühlsdorfer Straße 18, 12679 Berlin-Marzahn). Die Website zeigt Eltern und pädagogischen Fachkräften, welche Unterstützungssysteme – Beratung, Bildung, Freizeit, Beteiligung u. a. – im Sozialraum rund um die Kita zu finden sind.

Entstanden als schulisches Projekt (LEK, Lernfeld 5, Ausbildung zum Erzieher) zum Thema **„Unterstützungssysteme in der Bildungs- und Erziehungspartnerschaft im Sozialraum“**.

## 1. Projektbeschreibung

- **Praxisstelle / Zentrum der Karte:** Familienzentrum Felix, Zühlsdorfer Straße 16–18, 12679 Berlin
- **12 Einrichtungen** im und um den Sozialraum, kategorisiert (Familie, Bildung, Jugend, Beratung, Sport, Kultur, Beteiligung, Inklusion)
- Interaktive **Karte (Leaflet + OpenStreetMap)** mit kategorie-spezifischen Markern, Popups und Karten-/Listen-Synchronisation – **läuft ohne jeden API-Key**
- **Filter** nach Kategorie, **Volltextsuche**, thematische Schnellzugriffe („Was suchst du?“)
- Detailansicht je Einrichtung (Modal) mit Angeboten, Zielgruppen, Route- und Website-Links sowie Quellenangabe
- Ehrliche **Entfernungsangaben**: Luftlinie, immer berechnet aus echten, recherchierten Koordinaten – nie erfundene Werte
- Barrierearm: Tastaturnavigation, sichtbarer Fokus, semantisches HTML, aria-Labels, Farbe nie als einziger Informationsträger

## 2. Tech-Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (über das offizielle `@tailwindcss/vite`-Plugin)
- [Lucide Icons](https://lucide.dev/) (`lucide-react`)
- [Leaflet](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/) mit **OpenStreetMap**-Kartenkacheln (kostenlos, kein API-Key nötig)

## 3. Installation

Voraussetzung: Node.js (empfohlen: aktuelle LTS-Version) und npm.

```bash
npm install
```

## 4. Entwicklung starten

```bash
npm run dev
```

Die Website ist danach unter `http://localhost:5173/sozialraum-felix/` erreichbar. Die Karte nutzt OpenStreetMap über Leaflet und **benötigt keinen API-Key** – sie funktioniert direkt nach `npm install`.

## 5. Kartendienst (Leaflet / OpenStreetMap)

Anders als ursprünglich mit der Google Maps JavaScript API geplant, nutzt die Website jetzt **Leaflet** mit **OpenStreetMap**-Kartenkacheln. Das hat für die Abgabe einen entscheidenden Vorteil: **kein API-Key, keine Google-Cloud-Einrichtung, keine Abrechnung** – die Karte funktioniert bei jedem, der den Link öffnet, sofort und garantiert.

- Kartenkacheln: `tile.openstreetmap.org` (offizieller, kostenloser OSM-Tile-Server)
- Pflicht-Attribution „© OpenStreetMap-Mitwirkende" wird automatisch unten rechts auf der Karte angezeigt (siehe [OSM-Nutzungsbedingungen](https://www.openstreetmap.org/copyright))
- „Route öffnen“-Links führen weiterhin zu Google Maps (reine Weblinks, keine JavaScript API, kein Key nötig) – dort hat praktisch jeder Nutzer bereits eine App/einen Account

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

Die Website ist eine statische Single-Page-App (Ergebnis von `npm run build` im Ordner `dist/`) und kann auf jedem statischen Hoster ausgeliefert werden, z. B. Netlify, Vercel, GitHub Pages oder ein eigener Webserver. Da kein API-Key benötigt wird, ist dafür keine zusätzliche Konfiguration nötig.

### Deployment auf GitHub Pages (empfohlener Weg für die Abgabe)

Dieses Projekt enthält bereits einen fertigen GitHub-Actions-Workflow (`.github/workflows/deploy.yml`), der bei jedem Push auf `main` automatisch baut und auf GitHub Pages veröffentlicht.

1. **GitHub-Account anlegen** (falls noch nicht vorhanden): <https://github.com/signup>
2. **Neues, öffentliches Repository erstellen**, z. B. mit dem Namen `sozialraum-felix` (Name ist wichtig, siehe Schritt 5).
3. Dieses lokale Projekt zum neuen Repository pushen:
   ```bash
   git remote add origin https://github.com/<dein-github-name>/sozialraum-felix.git
   git branch -M main
   git push -u origin main
   ```
4. Im Repository unter **Settings → Pages** bei „Build and deployment“ → **Source: GitHub Actions** auswählen (nicht „Deploy from a branch“).
5. Falls das Repository **nicht** `sozialraum-felix` heißt: In [`vite.config.ts`](vite.config.ts) den Wert von `base` an den tatsächlichen Repository-Namen anpassen (`base: '/dein-repo-name/'`), committen und pushen – sonst werden CSS/JS-Dateien nicht gefunden.
6. Nach dem nächsten Push läuft der Workflow automatisch (Tab **Actions** im Repository zeigt den Fortschritt). Der fertige Link erscheint unter **Settings → Pages** und hat die Form:
   ```
   https://<dein-github-name>.github.io/sozialraum-felix/
   ```
   Diesen Link kannst du direkt an den Dozenten / die Dozentin weitergeben.

Ein manueller Redeploy (z. B. nach einer Datenänderung) passiert automatisch bei jedem `git push` auf `main` – oder manuell über den Button **Run workflow** im Actions-Tab.

## 8. Projektstruktur

```
src/
  components/     Navbar, Hero, Map, MapMarker, FilterBar, SearchBar,
                   InstitutionCard, InstitutionModal, CategoryFilter,
                   CategoryLegend, ParentNeeds, OutsideAreaSection,
                   AboutSection, Footer
  data/           institutions.ts (zentrale Datenquelle), categories.ts,
                   kita.ts, parentNeeds.ts
  hooks/          useDistances.ts (Luftlinien-Entfernung aus recherchierten Koordinaten)
  pages/          Home.tsx
  types/          institution.ts
  utils/          distance.ts, filter.ts, links.ts, mapIcons.ts
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

- [ ] Prüfen, ob sich die Trägerschaft/Adresse von CABUWAZI Springling zum Abgabezeitpunkt geändert hat (bei der Recherche wurde ein kürzlicher Trägerwechsel am Standort festgestellt)
- [ ] Aktualität der Öffnungszeiten/Kontaktdaten bei Bedarf direkt bei den Einrichtungen nachprüfen, falls diese für die Abgabe relevant sind (auf der Website bewusst nicht dargestellt, um keine veralteten Angaben zu riskieren)
- [ ] Eigene Screenshots/Notizen zur Abgabe ergänzen, falls die LEK das verlangt

## Hinweis

Dies ist ein nicht-kommerzielles, schulisches Projekt. Es besteht keine offizielle Verbindung zu den dargestellten Einrichtungen über die zitierten öffentlichen Quellen hinaus.
