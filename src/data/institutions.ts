import type { Institution } from '../types/institution';

/**
 * Alle Angaben (Adresse, Angebote, Website) wurden vor der Umsetzung anhand
 * offizieller Quellen geprüft: berlin.de, offizielle Träger-/Einrichtungs-
 * websites und das Familienportal Berlin. Quellen je Einrichtung siehe
 * `sourceUrl`. Koordinaten sind Geokodierungen der verifizierten Adressen
 * (Straßen-Genauigkeit), keine offiziell veröffentlichten Werte.
 *
 * Zonen (`zone`) machen sichtbar, dass die Auswahl keine zufällige Berlin-
 * weite Liste ist, sondern einem echten Sozialraum-Konzept folgt:
 * "nahbereich" (~≤1 km, fußläufig), "sozialraum" (~1–2,5 km, weiterer
 * Sozialraum) und "ausserhalb" (>~2,5 km, wichtige Anlaufstelle außerhalb
 * des engeren Umfelds). Die Grenzen sind bewusst nachvollziehbar aus den
 * echten Koordinaten abgeleitet, nicht willkürlich gesetzt.
 *
 * `translations`: Beschreibung/Angebote/Zielgruppen je Sprache (Name und
 * Adresse bleiben als Eigennamen unübersetzt). Deutsch (Felder oben) ist
 * die Quelle; fehlt eine Übersetzung, wird ehrlich darauf zurückgefallen.
 */
export const institutions: Institution[] = [
  {
    id: 'humanistische-kita-zuehlsdorfer-strasse',
    name: 'Humanistische Kita Zühlsdorfer Straße',
    category: 'familie',
    isPraxisstelle: true,
    zone: 'nahbereich',
    address: 'Zühlsdorfer Straße 18',
    postalCode: '12679',
    city: 'Berlin',
    description:
      'Die Humanistische Kita Zühlsdorfer Straße ist die Praxisstelle, auf die sich diese Sozialraumkarte bezieht. Bis zu 130 Kinder im Alter von 0 bis 6 Jahren spielen, entdecken und forschen hier – mit selbstbestimmtem Spielen und kindorientierten, offenen Strukturen.',
    targetGroups: ['Kinder (0–6 Jahre)'],
    audiences: ['kind', 'kleinkind'],
    offers: [],
    website: 'https://humanistisch.de/kitas/kitas-berlin-brandenburg/humanistische-kita-zuehlsdorfer-strasse/',
    sourceUrl: 'https://humanistisch.de/kitas/kitas-berlin-brandenburg/humanistische-kita-zuehlsdorfer-strasse/',
    sourceLabel: 'Humanistischer Verband Berlin-Brandenburg (Träger)',
    latitude: 52.5472,
    longitude: 13.5482,
    translations: {
      en: {
        description:
          'The Humanistische Kita Zühlsdorfer Straße is the placement site this neighbourhood map is built around. Up to 130 children aged 0–6 play, explore and investigate here, through self-directed play and child-oriented, open structures.',
        offers: [],
        targetGroups: ['Children (0–6 years)'],
      },
      fr: {
        description:
          "La Humanistische Kita Zühlsdorfer Straße est le lieu de stage sur lequel repose cette carte de quartier. Jusqu'à 130 enfants de 0 à 6 ans y jouent, découvrent et explorent, à travers un jeu autonome et des structures ouvertes centrées sur l'enfant.",
        offers: [],
        targetGroups: ['Enfants (0–6 ans)'],
      },
    },
  },
  {
    id: 'familienzentrum-felix',
    name: 'Familienzentrum Felix',
    category: 'familie',
    zone: 'nahbereich',
    address: 'Zühlsdorfer Straße 16–18',
    postalCode: '12679',
    city: 'Berlin',
    description:
      'Ein eigenständiges Familienzentrum im „Familienhaus Felix“ – niedrigschwelliger Anlaufpunkt für alle Familien im Stadtteil, mit eigenem Team, unabhängig von der Kita im selben Haus.',
    targetGroups: ['Familien', 'Kinder (0–6 Jahre)', 'Eltern'],
    audiences: ['familie', 'eltern', 'kind', 'kleinkind'],
    offers: [
      'Familienberatung',
      'Eltern-Kind-Angebote',
      'Familiencafé',
      '„wellcome“-Unterstützung im 1. Lebensjahr',
      'Offene Treffs und Kurse',
      'Familienausflüge und Familiennacht',
    ],
    website: 'https://humanistisch.de/felix-zentrum',
    sourceUrl: 'https://humanistisch.de/felix-zentrum',
    sourceLabel: 'Humanistischer Verband Berlin-Brandenburg (Träger)',
    latitude: 52.5471,
    longitude: 13.5483,
    translations: {
      en: {
        description:
          "An independent family centre inside the \"Familienhaus Felix\" building – a low-threshold point of contact for all families in the neighbourhood, with its own team, independent of the Kita in the same building.",
        offers: [
          'Family counselling',
          'Parent-child activities',
          'Family café',
          '"wellcome" support during baby\'s first year',
          'Open drop-ins and courses',
          'Family outings and Family Night',
        ],
        targetGroups: ['Families', 'Children (0–6 years)', 'Parents'],
      },
      fr: {
        description:
          "Un centre familial indépendant au sein du bâtiment « Familienhaus Felix » – un point de contact facile d'accès pour toutes les familles du quartier, avec sa propre équipe, indépendant de la crèche située dans le même bâtiment.",
        offers: [
          'Conseil familial',
          'Activités parents-enfants',
          'Café familial',
          'Soutien « wellcome » pendant la première année de vie',
          'Rencontres et cours ouverts',
          'Sorties familiales et soirée familiale',
        ],
        targetGroups: ['Familles', 'Enfants (0–6 ans)', 'Parents'],
      },
    },
  },
  {
    id: 'freizeitforum-marzahn',
    name: 'Freizeitforum Marzahn',
    category: 'kultur',
    zone: 'nahbereich',
    address: 'Marzahner Promenade 55',
    postalCode: '12679',
    city: 'Berlin',
    description:
      'Die größte Kultur- und Freizeiteinrichtung im Nordosten Berlins mit Schwimmhalle, Sälen, Sporthalle und einem breiten Veranstaltungsprogramm für die ganze Familie.',
    targetGroups: ['Familien', 'Kinder', 'Erwachsene', 'Vereine'],
    audiences: ['familie', 'eltern', 'kind'],
    offers: [
      'Schwimmhalle mit Sauna',
      'Frauensporthalle',
      'Bowlingbahn',
      'Veranstaltungssäle und Kulturprogramm',
      'Café',
    ],
    website: 'https://www.freizeitforum-marzahn.com',
    sourceUrl: 'https://www.berlin.de',
    sourceLabel: 'berlin.de / GSE gGmbH (Betreiber)',
    latitude: 52.5468,
    longitude: 13.5567,
    translations: {
      en: {
        description:
          'The largest culture and leisure centre in north-east Berlin, with a swimming pool, halls, a sports hall and a wide programme of events for the whole family.',
        offers: ['Swimming pool with sauna', "Women's sports hall", 'Bowling alley', 'Event halls and cultural programme', 'Café'],
        targetGroups: ['Families', 'Children', 'Adults', 'Clubs and associations'],
      },
      fr: {
        description:
          "La plus grande structure culturelle et de loisirs du nord-est de Berlin, avec piscine, salles, salle de sport et un large programme d'événements pour toute la famille.",
        offers: ['Piscine avec sauna', 'Salle de sport pour femmes', 'Bowling', 'Salles de spectacle et programme culturel', 'Café'],
        targetGroups: ['Familles', 'Enfants', 'Adultes', 'Associations'],
      },
    },
  },
  {
    id: 'mark-twain-bibliothek',
    name: 'Mark-Twain-Bibliothek',
    category: 'bildung',
    zone: 'nahbereich',
    address: 'Marzahner Promenade 55',
    postalCode: '12679',
    city: 'Berlin',
    description:
      'Die Bezirkszentralbibliothek Marzahn-Hellersdorf im Freizeitforum Marzahn – auf drei Etagen mit einer großen Auswahl an Medien und Programmen zur Leseförderung, auch in vielen Herkunftssprachen des Bezirks.',
    targetGroups: ['Kinder', 'Jugendliche', 'Familien', 'Schulen', 'Pädagogische Fachkräfte'],
    audiences: ['kind', 'jugendlicher', 'familie', 'fachkraft'],
    offers: [
      'Bücher, Hörbücher, DVDs und Spiele',
      'Fremdsprachige Medien (u. a. Vietnamesisch, Arabisch, Türkisch, Russisch, Persisch, Ukrainisch)',
      'Musikbibliothek und Artothek',
      'Leseförderung und Vorlesestunden für Kitas/Schulen',
      'WLAN und Arbeitsplätze',
      'Ausstellungen und Veranstaltungen',
    ],
    website: 'https://www.berlin.de/bibliotheken-mh/bibliotheken/mark-twain-bibliothek/',
    sourceUrl: 'https://www.berlin.de/bibliotheken-mh/bibliotheken/mark-twain-bibliothek/',
    sourceLabel: 'berlin.de – Stadtbibliothek Marzahn-Hellersdorf',
    latitude: 52.5468,
    longitude: 13.5567,
    translations: {
      en: {
        description:
          "The district central library of Marzahn-Hellersdorf, inside the Freizeitforum Marzahn – three floors with a large selection of media and reading-support programmes, including in many of the district's languages of origin.",
        offers: [
          'Books, audiobooks, DVDs and games',
          'Foreign-language media (incl. Vietnamese, Arabic, Turkish, Russian, Persian, Ukrainian)',
          'Music library and art lending library',
          'Reading support and story time for kitas/schools',
          'Wi-Fi and workspaces',
          'Exhibitions and events',
        ],
        targetGroups: ['Children', 'Teenagers', 'Families', 'Schools', 'Early-years professionals'],
      },
      fr: {
        description:
          "La bibliothèque centrale de l'arrondissement de Marzahn-Hellersdorf, au sein du Freizeitforum Marzahn – trois étages avec un vaste choix de médias et des programmes d'aide à la lecture, y compris dans de nombreuses langues d'origine de l'arrondissement.",
        offers: [
          'Livres, livres audio, DVD et jeux',
          'Médias en langues étrangères (dont vietnamien, arabe, turc, russe, persan, ukrainien)',
          'Médiathèque musicale et artothèque',
          'Aide à la lecture et heures du conte pour crèches/écoles',
          'Wi-Fi et postes de travail',
          'Expositions et événements',
        ],
        targetGroups: ['Enfants', 'Adolescents', 'Familles', 'Écoles', 'Professionnel·le·s de la petite enfance'],
      },
    },
  },
  {
    id: 'fair-jugendfreizeiteinrichtung',
    name: 'FAIR Jugendfreizeiteinrichtung',
    category: 'jugend',
    zone: 'nahbereich',
    address: 'Marzahner Promenade 51',
    postalCode: '12679',
    city: 'Berlin',
    description:
      'Offene Jugendfreizeiteinrichtung mit Schwerpunkt kulturelle Bildung und Beteiligung – vom Musik- und Aufnahmestudio bis zum Schwarzlichttheater.',
    targetGroups: ['Kinder und Jugendliche (8–18 Jahre)'],
    audiences: ['jugendlicher'],
    offers: [
      'Offener Bereich und Jugendcafé',
      'Musik- und Aufnahmestudio',
      'Schwarzlichttheater, Tanz, Kochen',
      'Graffiti-Projekte',
      'Tischtennis, Kicker, Billard',
    ],
    website: 'https://humanistisch.de/kinder-jugendliche/freizeiteinrichtungen/fair/',
    sourceUrl: 'https://humanistisch.de/kinder-jugendliche/freizeiteinrichtungen/fair/',
    sourceLabel: 'Humanistischer Verband Berlin-Brandenburg (Träger)',
    latitude: 52.5467,
    longitude: 13.5555,
    translations: {
      en: {
        description:
          'Open youth centre focused on cultural education and participation – from the music and recording studio to the blacklight theatre.',
        offers: [
          'Open area and youth café',
          'Music and recording studio',
          'Blacklight theatre, dance, cooking',
          'Graffiti projects',
          'Table tennis, foosball, billiards',
        ],
        targetGroups: ['Children and teenagers (8–18 years)'],
      },
      fr: {
        description:
          "Structure de jeunesse ouverte axée sur l'éducation culturelle et la participation – du studio de musique et d'enregistrement au théâtre en lumière noire.",
        offers: [
          'Espace ouvert et café jeunesse',
          "Studio de musique et d'enregistrement",
          'Théâtre en lumière noire, danse, cuisine',
          'Projets de graffiti',
          'Tennis de table, babyfoot, billard',
        ],
        targetGroups: ['Enfants et adolescents (8–18 ans)'],
      },
    },
  },
  {
    id: 'kinder-jugendbeteiligungsbuero',
    name: 'Kinder- und Jugendbeteiligungsbüro',
    category: 'beteiligung',
    zone: 'nahbereich',
    address: 'Marzahner Promenade 51',
    postalCode: '12679',
    city: 'Berlin',
    description:
      'Die zentrale Anlaufstelle für Kinder- und Jugendbeteiligung im Bezirk Marzahn-Hellersdorf – von der Kinderjury bis zum Jugendparlament.',
    targetGroups: ['Kinder', 'Jugendliche', 'Familien im Bezirk'],
    audiences: ['kind', 'jugendlicher'],
    offers: [
      'Kinder- und Jugendjury',
      'Kinder- und Jugendparlament',
      'Bildung zu Kinderrechten',
      'Umfragen und Aktionstage',
      'Projekte und Workshops',
    ],
    website: 'https://kijubue.de',
    sourceUrl: 'https://kijubue.de',
    sourceLabel: 'Kinder- und Jugendbeteiligungsbüro Marzahn-Hellersdorf',
    latitude: 52.5467,
    longitude: 13.5555,
    translations: {
      en: {
        description:
          "The central point of contact for child and youth participation in the Marzahn-Hellersdorf district – from the children's jury to the youth parliament.",
        offers: [
          "Children's and youth jury",
          "Children's and youth parliament",
          "Education on children's rights",
          'Surveys and action days',
          'Projects and workshops',
        ],
        targetGroups: ['Children', 'Teenagers', 'Families in the district'],
      },
      fr: {
        description:
          "Le point de contact central pour la participation des enfants et des jeunes dans l'arrondissement de Marzahn-Hellersdorf – du jury d'enfants au parlement des jeunes.",
        offers: [
          "Jury d'enfants et de jeunes",
          'Parlement des enfants et des jeunes',
          "Sensibilisation aux droits de l'enfant",
          "Sondages et journées d'action",
          'Projets et ateliers',
        ],
        targetGroups: ['Enfants', 'Adolescents', "Familles de l'arrondissement"],
      },
    },
  },
  {
    id: 'gangway-marzahn',
    name: 'Gangway – Team Marzahn',
    category: 'beratung',
    zone: 'nahbereich',
    address: 'Marzahner Promenade 24',
    postalCode: '12679',
    city: 'Berlin',
    description:
      'Mobile Straßensozialarbeit für Jugendliche und junge Erwachsene: Gangway ist dort präsent, wo junge Menschen sich aufhalten, und begleitet sie niedrigschwellig durch schwierige Lebensphasen.',
    targetGroups: ['Jugendliche und junge Erwachsene (ca. 14–27 Jahre)'],
    audiences: ['jugendlicher'],
    offers: [
      'Aufsuchende Straßensozialarbeit',
      'Beratung bei Problemen mit Eltern, Schule oder Polizei',
      'Unterstützung bei Schule, Ausbildung und Job',
      'Begleitung zu Behörden',
      'Freizeit- und Sportprojekte',
    ],
    website: 'https://gangway.de/teams/marzahn/',
    sourceUrl: 'https://gangway.de/teams/marzahn/',
    sourceLabel: 'Gangway e.V. (offizielle Trägerwebsite)',
    latitude: 52.5436,
    longitude: 13.5468,
    translations: {
      en: {
        description:
          'Mobile street-based social work for teenagers and young adults: Gangway is present wherever young people spend time, offering low-threshold support through difficult phases of life.',
        offers: [
          'Outreach street-based social work',
          'Support with problems involving parents, school or police',
          'Help with school, training and jobs',
          'Accompaniment to official appointments',
          'Leisure and sports projects',
        ],
        targetGroups: ['Teenagers and young adults (approx. 14–27 years)'],
      },
      fr: {
        description:
          "Travail social de rue mobile pour les adolescents et jeunes adultes : Gangway est présent là où se trouvent les jeunes, et les accompagne de façon accessible à travers les périodes difficiles de leur vie.",
        offers: [
          'Travail social de rue itinérant',
          "Conseil en cas de problèmes avec les parents, l'école ou la police",
          "Soutien pour l'école, la formation et l'emploi",
          'Accompagnement auprès des administrations',
          'Projets de loisirs et de sport',
        ],
        targetGroups: ['Adolescents et jeunes adultes (environ 14–27 ans)'],
      },
    },
  },
  {
    id: 'sportjugendclub-marzahn',
    name: 'SportJugendClub Marzahn',
    category: 'sport',
    zone: 'nahbereich',
    address: 'Franz-Stenzer-Straße 39',
    postalCode: '12679',
    city: 'Berlin',
    description:
      'Offener Sport- und Jugendclub mit breitem Bewegungsangebot – vom Judo bis zum Klettern – für Kinder und Jugendliche aus dem gesamten Sozialraum.',
    targetGroups: ['Kinder und Jugendliche (ca. 7–21 Jahre)'],
    audiences: ['kind', 'jugendlicher'],
    offers: ['Fußball und Basketball', 'Judo', 'Klettern', 'Kraft- und Fitnessgeräte', 'Tischtennis, Billard, Dart'],
    website: 'https://www.sjcmarzahn.de',
    sourceUrl: 'https://www.sjcmarzahn.de',
    sourceLabel: 'SportJugendClub Marzahn (offizielle Website)',
    latitude: 52.546,
    longitude: 13.551,
    translations: {
      en: {
        description:
          'Open sports and youth club with a wide range of activities – from judo to climbing – for children and teenagers from across the neighbourhood.',
        offers: ['Football and basketball', 'Judo', 'Climbing', 'Strength and fitness equipment', 'Table tennis, billiards, darts'],
        targetGroups: ['Children and teenagers (approx. 7–21 years)'],
      },
      fr: {
        description:
          "Club de sport et de jeunesse ouvert avec une large offre de mouvement – du judo à l'escalade – pour les enfants et adolescents de tout le quartier.",
        offers: ['Football et basketball', 'Judo', 'Escalade', 'Appareils de musculation et de fitness', 'Tennis de table, billard, fléchettes'],
        targetGroups: ['Enfants et adolescents (environ 7–21 ans)'],
      },
    },
  },
  {
    id: 'jfe-impuls',
    name: 'JFE Impuls',
    category: 'inklusion',
    zone: 'sozialraum',
    address: 'Rudolf-Leonhard-Straße 2',
    postalCode: '12679',
    city: 'Berlin',
    description:
      'Inklusive, rollstuhlgerechte Kinder- und Jugendeinrichtung, in der Kinder und Jugendliche mit und ohne Behinderung gemeinsam Freizeit gestalten.',
    targetGroups: ['Jugendliche (ca. 10–27 Jahre)', 'mit und ohne Behinderung'],
    audiences: ['jugendlicher'],
    offers: [
      'Offener Bereich und Projekte',
      'Musik- und Aufnahmestudio',
      'Hausaufgabenbetreuung',
      'Ferienfahrten und internationale Begegnungen',
      'Garten',
    ],
    website: 'https://www.kinderring-berlin.de/einrichtungen/impuls/',
    sourceUrl: 'https://www.kinderring-berlin.de/einrichtungen/impuls/',
    sourceLabel: 'Kinderring Berlin e.V. (Träger)',
    latitude: 52.5517,
    longitude: 13.5646,
    translations: {
      en: {
        description:
          'Inclusive, wheelchair-accessible children\'s and youth centre where children and teenagers with and without disabilities spend their free time together.',
        offers: ['Open area and projects', 'Music and recording studio', 'Homework support', 'Holiday trips and international exchanges', 'Garden'],
        targetGroups: ['Teenagers (approx. 10–27 years)', 'with and without disabilities'],
      },
      fr: {
        description:
          "Structure inclusive et accessible en fauteuil roulant pour enfants et jeunes, où des jeunes avec et sans handicap passent leur temps libre ensemble.",
        offers: ['Espace ouvert et projets', "Studio de musique et d'enregistrement", 'Aide aux devoirs', 'Voyages de vacances et rencontres internationales', 'Jardin'],
        targetGroups: ['Adolescents (environ 10–27 ans)', 'avec et sans handicap'],
      },
    },
  },
  {
    id: 'cabuwazi-springling',
    name: 'CABUWAZI Springling',
    category: 'kultur',
    zone: 'nahbereich',
    address: 'Otto-Rosenberg-Straße 2',
    postalCode: '12681',
    city: 'Berlin',
    description:
      'Kinder- und Jugendzirkus seit 1992: Zirkuspädagogik zum Mitmachen – von der Jonglage bis zum Trapez – sowie Projektwochen für Kitas und Schulen.',
    targetGroups: ['Kinder', 'Jugendliche', 'Kita- und Schulgruppen'],
    audiences: ['kind', 'jugendlicher'],
    offers: ['Zirkustraining (Akrobatik, Jonglage, Trampolin)', 'Trapez und Seiltanz', 'Tanz', 'Schul- und Ferienprojektwochen', 'Shows'],
    website: 'https://cabuwazi.de',
    sourceUrl: 'https://cabuwazi.de',
    sourceLabel: 'CABUWAZI (offizielle Website)',
    latitude: 52.5519,
    longitude: 13.5477,
    translations: {
      en: {
        description:
          'Children\'s and youth circus since 1992: hands-on circus education – from juggling to the trapeze – plus project weeks for kitas and schools.',
        offers: ['Circus training (acrobatics, juggling, trampoline)', 'Trapeze and tightrope walking', 'Dance', 'School and holiday project weeks', 'Shows'],
        targetGroups: ['Children', 'Teenagers', 'Kita and school groups'],
      },
      fr: {
        description:
          "Cirque pour enfants et jeunes depuis 1992 : pédagogie du cirque à pratiquer soi-même – de la jonglerie au trapèze – ainsi que des semaines de projet pour crèches et écoles.",
        offers: ['Entraînement de cirque (acrobatie, jonglerie, trampoline)', 'Trapèze et fil tendu', 'Danse', 'Semaines de projet scolaires et de vacances', 'Spectacles'],
        targetGroups: ['Enfants', 'Adolescents', "Groupes de crèches et d'écoles"],
      },
    },
  },
  {
    id: 'immanuel-beratungszentrum-marzahn',
    name: 'Immanuel Beratungszentrum Marzahn',
    category: 'beratung',
    zone: 'sozialraum',
    address: 'Landsberger Allee 400',
    postalCode: '12681',
    city: 'Berlin',
    description:
      'Psychologische Beratungsstelle der Immanuel Albertinen Diakonie mit einem breiten Angebot für Familien, Paare und junge Menschen in belastenden Lebenssituationen.',
    targetGroups: ['Familien', 'Paare', 'Kinder und Jugendliche', 'geflüchtete Frauen'],
    audiences: ['familie', 'eltern', 'kind', 'jugendlicher'],
    offers: [
      'Erziehungs- und Familienberatung',
      'Trennungs- und Scheidungsberatung',
      'Kinder- und Jugendlichenpsychotherapie',
      'Frauencafé „IMAL“',
      'Sozial- und Migrationsberatung',
    ],
    website: 'https://beratung.immanuel.de/wo-wir-sind/berlin-marzahn/',
    sourceUrl: 'https://beratung.immanuel.de/wo-wir-sind/berlin-marzahn/',
    sourceLabel: 'Immanuel Albertinen Diakonie (Träger)',
    latitude: 52.5385,
    longitude: 13.5319,
    translations: {
      en: {
        description:
          'Psychological counselling centre run by Immanuel Albertinen Diakonie, offering a wide range of support for families, couples and young people in difficult life situations.',
        offers: [
          'Parenting and family counselling',
          'Separation and divorce counselling',
          'Psychotherapy for children and teenagers',
          '"IMAL" women\'s café',
          'Social and migration counselling',
        ],
        targetGroups: ['Families', 'Couples', 'Children and teenagers', 'Refugee women'],
      },
      fr: {
        description:
          "Centre de conseil psychologique de la Diaconie Immanuel Albertinen, proposant une large offre de soutien pour les familles, les couples et les jeunes en situation de vie difficile.",
        offers: [
          'Conseil éducatif et familial',
          'Conseil en séparation et divorce',
          'Psychothérapie pour enfants et adolescents',
          'Café des femmes « IMAL »',
          'Conseil social et en matière de migration',
        ],
        targetGroups: ['Familles', 'Couples', 'Enfants et adolescents', 'Femmes réfugiées'],
      },
    },
  },
  {
    id: 'aha-elterntreff',
    name: 'Haus am Akaziengrund – AHA-Elterntreff',
    category: 'familie',
    zone: 'sozialraum',
    address: 'Allee der Kosmonauten 77',
    postalCode: '12681',
    city: 'Berlin',
    description:
      'Generationenübergreifendes Familienbildungs- und Begegnungsangebot im Mehrgenerationenhaus für Marzahn-Süd/Biesdorf, getragen von pad gGmbH.',
    targetGroups: ['Eltern', 'Familien mit Säuglingen/Kleinkindern', 'alle Generationen'],
    audiences: ['eltern', 'familie', 'kleinkind'],
    offers: [
      'Babymassage-Kurse',
      'Eltern-Kind-Gruppen',
      'Konflikt- und Erziehungsberatung',
      'Offener Garten mit Spiel- und Bewegungsangeboten',
      '„Willkommen im Kiez, Baby“ für Neugeborene',
      'Kiez-Café und generationenübergreifende Kurse',
    ],
    website: 'https://pad-berlin.de/familie/aha-elterntreff.html',
    sourceUrl: 'https://pad-berlin.de/familie/aha-elterntreff.html',
    sourceLabel: 'pad gGmbH (Träger)',
    latitude: 52.5276,
    longitude: 13.5457,
    translations: {
      en: {
        description:
          'Cross-generational family education and meeting service in the multi-generation house for Marzahn-Süd/Biesdorf, run by pad gGmbH.',
        offers: [
          'Baby massage courses',
          'Parent-child groups',
          'Conflict and parenting counselling',
          'Open garden with play and movement activities',
          '"Welcome to the neighbourhood, baby" for newborns',
          'Neighbourhood café and cross-generational courses',
        ],
        targetGroups: ['Parents', 'Families with infants/toddlers', 'All generations'],
      },
      fr: {
        description:
          "Offre d'éducation familiale et de rencontre intergénérationnelle dans la maison multigénérationnelle pour Marzahn-Sud/Biesdorf, gérée par pad gGmbH.",
        offers: [
          'Cours de massage pour bébés',
          'Groupes parents-enfants',
          'Conseil en cas de conflit et conseil éducatif',
          'Jardin ouvert avec activités de jeu et de mouvement',
          '« Bienvenue dans le quartier, bébé » pour les nouveau-nés',
          'Café de quartier et cours intergénérationnels',
        ],
        targetGroups: ['Parents', 'Familles avec nourrissons/tout-petits', 'Toutes générations'],
      },
    },
  },
  {
    id: 'kjfz-drehkreuz',
    name: 'KJFZ Drehkreuz',
    category: 'familie',
    zone: 'nahbereich',
    address: 'Sella-Hasse-Straße 19/21',
    postalCode: '12687',
    city: 'Berlin',
    description:
      'Kinder-, Jugend- und Familienzentrum des DRK mit Fokus auf die Stärkung der Eltern-Kind-Beziehung und der elterlichen Erziehungskompetenz.',
    targetGroups: ['Familien mit kleinen Kindern', 'Eltern', 'getrennt lebende Eltern'],
    audiences: ['familie', 'eltern', 'kleinkind'],
    offers: [
      'Erziehungsberatung und -coaching',
      'Eltern-Kind-Gruppen (0–3 Jahre)',
      'Familienfrühstück und Familiennachmittage',
      'Sprachcafé',
      'Begleiteter Umgang (Umgangscafé)',
      'Hausaufgabenbetreuung für Grundschulkinder',
    ],
    website: 'https://www.drk-berlin-nordost.de/angebote/familienzentren/familienzentrum-drehkreuz.html',
    sourceUrl: 'https://www.drk-berlin-nordost.de/angebote/familienzentren/familienzentrum-drehkreuz.html',
    sourceLabel: 'DRK-Kreisverband Berlin-Nordost e.V. (Träger)',
    latitude: 52.5527,
    longitude: 13.5586,
    translations: {
      en: {
        description:
          'DRK children\'s, youth and family centre focused on strengthening the parent-child relationship and parenting skills.',
        offers: [
          'Parenting counselling and coaching',
          'Parent-child groups (0–3 years)',
          'Family breakfasts and family afternoons',
          'Language café',
          'Supervised contact visits (contact café)',
          'Homework support for primary-school children',
        ],
        targetGroups: ['Families with young children', 'Parents', 'Separated parents'],
      },
      fr: {
        description:
          "Centre pour enfants, jeunes et familles de la Croix-Rouge allemande (DRK), axé sur le renforcement de la relation parent-enfant et des compétences parentales.",
        offers: [
          'Conseil et coaching éducatif',
          'Groupes parents-enfants (0–3 ans)',
          'Petits-déjeuners et après-midis en famille',
          'Café des langues',
          'Visites accompagnées (café de médiation)',
          'Aide aux devoirs pour les enfants du primaire',
        ],
        targetGroups: ['Familles avec jeunes enfants', 'Parents', 'Parents séparés'],
      },
    },
  },
  {
    id: 'kjfz-haus-windspiel',
    name: 'KJFZ Haus Windspiel',
    category: 'familie',
    zone: 'ausserhalb',
    address: 'Golliner Straße 4–6',
    postalCode: '12689',
    city: 'Berlin',
    description:
      'Offenes Kinder-, Jugend- und Familienzentrum von JAO gGmbH im „Haus Windspiel“ – im selben Haus wie die Erziehungs- und Familienberatung des Jugendamts, aber ein eigenständiges Angebot eines anderen Trägers.',
    targetGroups: ['Familien mit Kindern (0–18 Jahre)', 'Eltern'],
    audiences: ['familie', 'eltern', 'kind', 'jugendlicher'],
    offers: [
      'FamilienTreff mit Elternkursen und Familienfesten',
      'Offene Sprechstunde der Stadtteilmütter',
      'Nähwerkstatt',
      'Eltern-Kind-Gruppen',
      'Hausaufgabenhilfe',
      'Sommerferienprogramm',
    ],
    website: 'https://www.jao-berlin.de/de/topic/167.marzahn.html',
    sourceUrl: 'https://www.jao-berlin.de/de/topic/167.marzahn.html',
    sourceLabel: 'JAO gGmbH (Jugendwerk Aufbau Ost, Träger)',
    latitude: 52.5672,
    longitude: 13.5799,
    translations: {
      en: {
        description:
          'Open children\'s, youth and family centre run by JAO gGmbH in the "Haus Windspiel" – in the same building as the youth welfare office\'s parenting and family counselling service, but an independent offer from a different provider.',
        offers: [
          'Family meeting point with parenting courses and family celebrations',
          'Open consultation hours with neighbourhood mothers',
          'Sewing workshop',
          'Parent-child groups',
          'Homework help',
          'Summer holiday programme',
        ],
        targetGroups: ['Families with children (0–18 years)', 'Parents'],
      },
      fr: {
        description:
          "Centre ouvert pour enfants, jeunes et familles géré par JAO gGmbH dans la « Haus Windspiel » – dans le même bâtiment que le service de conseil éducatif et familial de l'office de la jeunesse, mais une offre indépendante d'un autre organisme.",
        offers: [
          'Lieu de rencontre familial avec cours pour parents et fêtes de famille',
          'Permanence ouverte des mères de quartier',
          'Atelier de couture',
          'Groupes parents-enfants',
          'Aide aux devoirs',
          "Programme d'été",
        ],
        targetGroups: ['Familles avec enfants (0–18 ans)', 'Parents'],
      },
    },
  },
  {
    id: 'familienservicebuero-mh',
    name: 'Familienservicebüro Marzahn-Hellersdorf',
    category: 'beratung',
    zone: 'ausserhalb',
    address: 'Alice-Salomon-Platz 3',
    postalCode: '12627',
    city: 'Berlin',
    description:
      'Eine zentrale erste Anlaufstelle für Familien, wenn sie Unterstützung, Informationen oder Orientierung im Hilfesystem des Bezirks benötigen. Gemeinsame Anlaufstelle von Jugendamt und pad gGmbH.',
    targetGroups: ['Familien im Bezirk', 'werdende Eltern', 'Alleinerziehende'],
    audiences: ['eltern', 'familie'],
    offers: [
      'Erstberatung für Familien',
      'Antragshilfe: Elterngeld, Kita-/Hort-Gutschein, Unterhaltsvorschuss',
      'Beratung zu Sorgerecht und Vaterschaftsanerkennung',
      'Vermittlung an Fachberatungsstellen',
      'Aufsuchende/mobile Beratung',
    ],
    website: 'https://familienservicebuero-mh.de/',
    sourceUrl: 'https://www.berlin.de/ba-marzahn-hellersdorf/aktuelles/pressemitteilungen/2023/pressemitteilung.1374749.php',
    sourceLabel: 'berlin.de – Bezirksamt Marzahn-Hellersdorf',
    latitude: 52.5374,
    longitude: 13.6034,
    translations: {
      en: {
        description:
          "A central first point of contact for families needing support, information or guidance within the district's support system. A joint service point run by the youth welfare office and pad gGmbH.",
        offers: [
          'Initial counselling for families',
          'Help with applications: parental allowance, kita/after-school-care voucher, advance maintenance payments',
          'Advice on custody rights and paternity acknowledgement',
          'Referral to specialist counselling services',
          'Outreach/mobile counselling',
        ],
        targetGroups: ['Families in the district', 'Expectant parents', 'Single parents'],
      },
      fr: {
        description:
          "Un premier point de contact central pour les familles ayant besoin de soutien, d'informations ou d'orientation dans le système d'aide de l'arrondissement. Point de contact commun de l'office de la jeunesse et de pad gGmbH.",
        offers: [
          'Premier conseil pour les familles',
          'Aide aux démarches : allocation parentale, chèque crèche/périscolaire, avance sur pension alimentaire',
          'Conseil sur le droit de garde et la reconnaissance de paternité',
          'Orientation vers des services de conseil spécialisés',
          'Conseil itinérant/mobile',
        ],
        targetGroups: ["Familles de l'arrondissement", 'Futurs parents', 'Familles monoparentales'],
      },
    },
  },
  {
    id: 'familienhaus-kastanie',
    name: 'Familienhaus Kastanie',
    category: 'familie',
    zone: 'ausserhalb',
    address: 'Kastanienallee 55',
    postalCode: '12627',
    city: 'Berlin',
    description:
      'Anlaufstelle für alle Familien in Hellersdorf-Nord zum Zusammenkommen, Austauschen und Beraten lassen, getragen von pad gGmbH.',
    targetGroups: ['Familien', 'Eltern mit Säuglingen'],
    audiences: ['familie', 'eltern', 'kleinkind'],
    offers: [
      'Sozialpädagogische Beratung',
      'Antrags- und Formularhilfe',
      'Schreibabyambulanz',
      'Baby-Sprechstunde',
      'Stillberatung und Ernährungsberatung',
      'Kieztreff Kastanie',
    ],
    website: 'https://www.pad-berlin.de/familie/familienhaus-kastanie.html',
    sourceUrl: 'https://www.pad-berlin.de/familie/familienhaus-kastanie.html',
    sourceLabel: 'pad gGmbH (Träger)',
    latitude: 52.5401,
    longitude: 13.5996,
    translations: {
      en: {
        description:
          'A meeting point for all families in Hellersdorf-Nord to come together, exchange ideas and get advice, run by pad gGmbH.',
        offers: [
          'Social-pedagogical counselling',
          'Help with applications and forms',
          'Crying-baby clinic',
          'Baby consultation hours',
          'Breastfeeding and nutrition counselling',
          'Kastanie neighbourhood meeting point',
        ],
        targetGroups: ['Families', 'Parents with infants'],
      },
      fr: {
        description:
          "Point de rencontre pour toutes les familles de Hellersdorf-Nord, pour se retrouver, échanger et se faire conseiller, géré par pad gGmbH.",
        offers: [
          'Conseil socio-éducatif',
          'Aide aux démarches et formulaires',
          'Consultation pour bébés qui pleurent beaucoup',
          'Permanence bébé',
          'Conseil en allaitement et nutrition',
          'Point de rencontre de quartier Kastanie',
        ],
        targetGroups: ['Familles', 'Parents avec nourrissons'],
      },
    },
  },
  {
    id: 'jfe-treibhaus',
    name: 'JFE Treibhaus',
    category: 'jugend',
    zone: 'sozialraum',
    address: 'Allee der Kosmonauten 170',
    postalCode: '12685',
    city: 'Berlin',
    description:
      'Offene Kinder- und Jugendfreizeiteinrichtung, die Kindern und Jugendlichen in schwierigen Lebenslagen einen verlässlichen Anlaufpunkt bietet.',
    targetGroups: ['Kinder im Grundschulalter', 'Jugendliche'],
    audiences: ['kind', 'jugendlicher'],
    offers: [
      'Offener Freizeittreff (Kicker, Billard)',
      'Jugend- und Sozialberatung',
      'Umweltbildung',
      'Ferienangebote',
      'Wöchentliche Lebensmittelausgabe und gemeinsames Kochen',
    ],
    website: 'https://agrar-boerse-ev.de/inserat/treibhaus/',
    sourceUrl: 'https://agrar-boerse-ev.de/inserat/treibhaus/',
    sourceLabel: 'Agrarbörse Deutschland Ost e.V. (Träger)',
    latitude: 52.5386,
    longitude: 13.5615,
    translations: {
      en: {
        description:
          'Open children\'s and youth centre offering a reliable point of contact for children and teenagers facing difficult life circumstances.',
        offers: [
          'Open leisure meeting point (foosball, billiards)',
          'Youth and social counselling',
          'Environmental education',
          'Holiday activities',
          'Weekly food distribution and cooking together',
        ],
        targetGroups: ['Primary-school-age children', 'Teenagers'],
      },
      fr: {
        description:
          "Structure ouverte pour enfants et jeunes, offrant un point de contact fiable pour les enfants et adolescents en situation de vie difficile.",
        offers: [
          'Point de rencontre de loisirs ouvert (babyfoot, billard)',
          'Conseil jeunesse et social',
          "Éducation à l'environnement",
          'Activités de vacances',
          'Distribution alimentaire hebdomadaire et cuisine partagée',
        ],
        targetGroups: ['Enfants d\'âge scolaire primaire', 'Adolescents'],
      },
    },
  },
  {
    id: 'kiezpark-schoenagelstrasse',
    name: 'Kiezpark Schönagelstraße',
    category: 'freizeit',
    zone: 'sozialraum',
    address: 'Schönagelstraße 68',
    postalCode: '12685',
    city: 'Berlin',
    description:
      'Ein Freizeit- und Bewegungsort: barrierefreier, inklusiver Kiezpark mit Themenbereichen für verschiedene Altersgruppen – keine klassische Beratungsstelle, sondern ein Ort zum Spielen, Klettern und Verweilen.',
    targetGroups: ['Familien mit Kindern', 'alle Generationen', 'neu zugezogene Bewohner'],
    audiences: ['familie', 'kind', 'kleinkind'],
    offers: [
      'Spielbereich „Wüste & Steppe“ (2–6 Jahre)',
      'Kletterparcours „Wald und Wiese“ (6–12 Jahre)',
      'Bewegungsangebote für alle Generationen',
      'Chill- und Sportbereich „Dschungel“ (12–16 Jahre)',
      'Angrenzender Nachbarschaftsgarten „Paradiesgärten“',
    ],
    sourceUrl: 'https://www.nachhaltige-erneuerung.berlin.de/marzahn-hellersdorf/kiezpark-schoenagelstrasse',
    sourceLabel: 'berlin.de – Stadtumbau Ost',
    latitude: 52.5494,
    longitude: 13.5704,
    translations: {
      en: {
        description:
          'A leisure and movement space: a barrier-free, inclusive neighbourhood park with themed areas for different age groups – not a traditional counselling service, but a place to play, climb and spend time.',
        offers: [
          '"Desert & steppe" play area (2–6 years)',
          '"Forest and meadow" climbing trail (6–12 years)',
          'Movement activities for all generations',
          '"Jungle" chill-out and sports area (12–16 years)',
          'Adjoining "Paradiesgärten" neighbourhood garden',
        ],
        targetGroups: ['Families with children', 'All generations', 'Newly arrived residents'],
      },
      fr: {
        description:
          "Un lieu de loisirs et de mouvement : parc de quartier inclusif et sans obstacles avec des espaces thématiques pour différents groupes d'âge – pas un service de conseil classique, mais un lieu pour jouer, grimper et se détendre.",
        offers: [
          'Aire de jeux « Désert & steppe » (2–6 ans)',
          'Parcours d\'escalade « Forêt et prairie » (6–12 ans)',
          'Activités de mouvement pour toutes les générations',
          'Espace détente et sport « Jungle » (12–16 ans)',
          'Jardin de quartier attenant « Paradiesgärten »',
        ],
        targetGroups: ['Familles avec enfants', 'Toutes générations', 'Nouveaux habitants du quartier'],
      },
    },
  },
  {
    id: 'erziehungs-familienberatung-marzahn',
    name: 'Erziehungs- und Familienberatung Marzahn',
    category: 'beratung',
    zone: 'ausserhalb',
    address: 'Golliner Straße 4',
    postalCode: '12689',
    city: 'Berlin',
    description:
      'Erziehungs- und Familienberatungsstelle des Jugendamts Marzahn-Hellersdorf im „Haus Windspiel“ – Beratung und Therapie bei Erziehungsfragen und familiären Krisen. Im selben Haus wie das KJFZ Haus Windspiel, aber ein eigenständiges Angebot des Bezirksamts.',
    targetGroups: ['Familien mit Kindern'],
    audiences: ['familie', 'eltern'],
    offers: [
      'Beratung zu Erziehungsfragen',
      'Trennungs- und Scheidungsberatung',
      'Beratung zur elterlichen Sorge',
      'Therapie bei Verhaltens- und Entwicklungsauffälligkeiten',
      'Unterstützung bei Schulproblemen',
    ],
    website:
      'https://www.berlin.de/ba-marzahn-hellersdorf/politik-und-verwaltung/aemter/jugendamt/beratung-und-unterstuetzung/erziehungs-und-familienberatung/',
    sourceUrl:
      'https://www.berlin.de/ba-marzahn-hellersdorf/politik-und-verwaltung/aemter/jugendamt/beratung-und-unterstuetzung/erziehungs-und-familienberatung/',
    sourceLabel: 'berlin.de – Bezirksamt Marzahn-Hellersdorf',
    latitude: 52.5672,
    longitude: 13.5799,
    translations: {
      en: {
        description:
          'Parenting and family counselling service of the Marzahn-Hellersdorf youth welfare office, located in the "Haus Windspiel" – counselling and therapy for parenting questions and family crises. In the same building as the KJFZ Haus Windspiel, but an independent service run by the district office.',
        offers: [
          'Counselling on parenting questions',
          'Separation and divorce counselling',
          'Advice on parental custody',
          'Therapy for behavioural and developmental difficulties',
          'Support with school problems',
        ],
        targetGroups: ['Families with children'],
      },
      fr: {
        description:
          "Service de conseil éducatif et familial de l'office de la jeunesse de Marzahn-Hellersdorf, situé dans la « Haus Windspiel » – conseil et thérapie pour les questions éducatives et les crises familiales. Dans le même bâtiment que le KJFZ Haus Windspiel, mais un service indépendant géré par l'arrondissement.",
        offers: [
          'Conseil sur les questions éducatives',
          'Conseil en séparation et divorce',
          "Conseil sur l'autorité parentale",
          'Thérapie en cas de troubles du comportement et du développement',
          'Soutien en cas de difficultés scolaires',
        ],
        targetGroups: ['Familles avec enfants'],
      },
    },
  },
  {
    id: 'jugendamt-marzahn-hellersdorf',
    name: 'Jugendamt Marzahn-Hellersdorf',
    category: 'beratung',
    zone: 'ausserhalb',
    address: 'Riesaer Straße 94',
    postalCode: '12627',
    city: 'Berlin',
    description:
      'Das bezirkliche Jugendamt ist zuständig für Jugendhilfeleistungen im gesamten Bezirk Marzahn-Hellersdorf – von der Kitaanmeldung bis zum Kinderschutz.',
    targetGroups: ['Eltern', 'Familien', 'Kinder und Jugendliche im Bezirk'],
    audiences: ['eltern', 'familie'],
    offers: [
      'Kitaanmeldung und Kita-Gutscheine',
      'Kindertagespflege',
      'Familienberatung',
      'Unterhaltsvorschuss',
      'Kinderschutz',
    ],
    website: 'https://www.berlin.de/ba-marzahn-hellersdorf/politik-und-verwaltung/aemter/jugendamt/',
    sourceUrl: 'https://www.berlin.de/ba-marzahn-hellersdorf/politik-und-verwaltung/aemter/jugendamt/',
    sourceLabel: 'berlin.de – Bezirksamt Marzahn-Hellersdorf',
    latitude: 52.5315,
    longitude: 13.6157,
    translations: {
      en: {
        description:
          "The district youth welfare office is responsible for youth support services across the whole of Marzahn-Hellersdorf – from kita registration to child protection.",
        offers: ['Kita registration and kita vouchers', 'Childminding services', 'Family counselling', 'Advance maintenance payments', 'Child protection'],
        targetGroups: ['Parents', 'Families', 'Children and teenagers in the district'],
      },
      fr: {
        description:
          "L'office de la jeunesse de l'arrondissement est responsable des prestations d'aide à la jeunesse pour tout l'arrondissement de Marzahn-Hellersdorf – de l'inscription en crèche à la protection de l'enfance.",
        offers: ['Inscription en crèche et chèques crèche', 'Accueil familial de jour', 'Conseil familial', 'Avance sur pension alimentaire', "Protection de l'enfance"],
        targetGroups: ['Parents', 'Familles', "Enfants et adolescents de l'arrondissement"],
      },
    },
  },
];

export const praxisstelle = institutions.find((inst) => inst.isPraxisstelle)!;
export const localInstitutions = institutions.filter((inst) => inst.zone !== 'ausserhalb');
export const outsideInstitutions = institutions.filter((inst) => inst.zone === 'ausserhalb');
