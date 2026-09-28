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
      sq: {
        description:
          "Kopshti Humanistik Zühlsdorfer Straße është vendi i praktikës mbi të cilin bazohet kjo hartë e hapësirës sociale. Deri në 130 fëmijë të moshës 0–6 vjeç luajnë, zbulojnë dhe eksplorojnë këtu – me lojë të vetëdrejtuar dhe struktura të hapura të orientuara nga fëmija.",
        offers: [],
        targetGroups: ["Fëmijë (0–6 vjeç)"],
      },
      vi: {
        description:
          "Nhà trẻ Nhân văn Zühlsdorfer Straße là cơ sở thực hành mà bản đồ khu vực xã hội này dựa vào. Tối đa 130 trẻ em từ 0–6 tuổi vui chơi, khám phá và tìm hiểu tại đây – thông qua hình thức chơi tự định hướng và cấu trúc mở lấy trẻ làm trung tâm.",
        offers: [],
        targetGroups: ["Trẻ em (0–6 tuổi)"],
      },
      tr: {
        description:
          "Humanistische Kita Zühlsdorfer Straße, bu sosyal çevre haritasının temel aldığı uygulama yeridir. 0–6 yaş arasındaki 130'a kadar çocuk burada oynar, keşfeder ve araştırır – kendi belirledikleri oyunlarla ve çocuk odaklı, açık yapılar içinde.",
        offers: [],
        targetGroups: ["Çocuklar (0–6 yaş)"],
      },
      ar: {
        description:
          "حضانة «Humanistische Kita Zühlsdorfer Straße» هي موقع التدريب العملي الذي تقوم عليه خريطة المحيط الاجتماعي هذه. يلعب فيها ما يصل إلى 130 طفلًا تتراوح أعمارهم بين 0 و6 سنوات، ويكتشفون ويستكشفون – من خلال اللعب الذي يختارونه بأنفسهم وهياكل مفتوحة تتمحور حول الطفل.",
        offers: [],
        targetGroups: ["الأطفال (0–6 سنوات)"],
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
      sq: {
        description:
          "Një qendër familjare e pavarur në „Familienhaus Felix\" – pikë kontakti me prag të ulët për të gjitha familjet në lagje, me ekipin e vet, e pavarur nga kopshti në të njëjtën ndërtesë.",
        offers: ["Këshillim familjar", "Oferta prind-fëmijë", "Kafene familjare", "Mbështetje „wellcome“ në vitin e parë të jetës", "Takime dhe kurse të hapura", "Ekskursione familjare dhe nata familjare"],
        targetGroups: ["Familje", "Fëmijë (0–6 vjeç)", "Prindër"],
      },
      vi: {
        description:
          "Một trung tâm gia đình độc lập trong tòa nhà „Familienhaus Felix\" – điểm liên hệ dễ tiếp cận cho tất cả các gia đình trong khu phố, có đội ngũ riêng, độc lập với nhà trẻ trong cùng tòa nhà.",
        offers: ["Tư vấn gia đình", "Chương trình cha mẹ – con", "Quán cà phê gia đình", "Hỗ trợ „wellcome“ trong năm đầu đời", "Buổi gặp gỡ và khóa học mở", "Chuyến dã ngoại gia đình và đêm gia đình"],
        targetGroups: ["Gia đình", "Trẻ em (0–6 tuổi)", "Cha mẹ"],
      },
      tr: {
        description:
          "“Familienhaus Felix” binasında bağımsız bir aile merkezi – mahalledeki tüm aileler için kolay ulaşılabilir bir başvuru noktası; kendi ekibiyle, aynı binadaki kreşten bağımsız olarak çalışır.",
        offers: ["Aile danışmanlığı", "Ebeveyn-çocuk etkinlikleri", "Aile kafesi", "Bebeğin ilk yılında “wellcome” desteği", "Açık buluşmalar ve kurslar", "Aile gezileri ve aile gecesi"],
        targetGroups: ["Aileler", "Çocuklar (0–6 yaş)", "Ebeveynler"],
      },
      ar: {
        description:
          "مركز أسري مستقل داخل مبنى «Familienhaus Felix» – نقطة اتصال ميسّرة لجميع الأسر في الحي، بفريق عمل خاص به، ومستقل عن الحضانة الموجودة في المبنى نفسه.",
        offers: ["استشارات أسرية", "أنشطة للوالدين والأطفال", "مقهى الأسرة", "دعم برنامج «wellcome» خلال السنة الأولى من عمر الطفل", "لقاءات ودورات مفتوحة", "رحلات أسرية وأمسية عائلية"],
        targetGroups: ["الأسر", "الأطفال (0–6 سنوات)", "الوالدان"],
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
      sq: {
        description:
          "Institucioni më i madh kulturor dhe i kohës së lirë në verilindje të Berlinit, me pishinë, salla, palestër sportive dhe një program të gjerë eventesh për të gjithë familjen.",
        offers: ["Pishinë me saunë", "Palestër sportive për gra", "Fushë bowling-u", "Salla eventesh dhe program kulturor", "Kafene"],
        targetGroups: ["Familje", "Fëmijë", "Të rritur", "Shoqata"],
      },
      vi: {
        description:
          "Cơ sở văn hóa và giải trí lớn nhất ở đông bắc Berlin với bể bơi, các phòng hội trường, nhà thi đấu thể thao và một chương trình sự kiện phong phú cho cả gia đình.",
        offers: ["Bể bơi có sauna", "Nhà thi đấu thể thao dành cho phụ nữ", "Sân bowling", "Hội trường sự kiện và chương trình văn hóa", "Quán cà phê"],
        targetGroups: ["Gia đình", "Trẻ em", "Người lớn", "Câu lạc bộ / hội đoàn"],
      },
      tr: {
        description:
          "Kuzeydoğu Berlin'in en büyük kültür ve boş zaman merkezi; yüzme havuzu, salonlar, spor salonu ve tüm aile için geniş bir etkinlik programı sunar.",
        offers: ["Saunalı yüzme havuzu", "Kadınlara özel spor salonu", "Bowling salonu", "Etkinlik salonları ve kültür programı", "Kafe"],
        targetGroups: ["Aileler", "Çocuklar", "Yetişkinler", "Dernekler"],
      },
      ar: {
        description:
          "أكبر مركز ثقافي وترفيهي في شمال شرق برلين، ويضم مسبحًا مغطى وقاعات وصالة رياضية وبرنامجًا واسعًا من الفعاليات لكل أفراد الأسرة.",
        offers: ["مسبح مغطى مع ساونا", "صالة رياضية مخصصة للنساء", "صالة بولينغ", "قاعات فعاليات وبرنامج ثقافي", "مقهى"],
        targetGroups: ["الأسر", "الأطفال", "البالغون", "الجمعيات"],
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
      sq: {
        description:
          "Biblioteka qendrore e rrethit Marzahn-Hellersdorf brenda Freizeitforum Marzahn – në tre kate, me një përzgjedhje të gjerë mediash dhe programesh për nxitjen e leximit, edhe në shumë gjuhë të origjinës së banorëve të rrethit.",
        offers: ["Libra, audiolibra, DVD dhe lojëra", "Media në gjuhë të huaja (mes tjerash vietnamisht, arabisht, turqisht, rusisht, persisht, ukrainisht)", "Bibliotekë muzikore dhe artotekë", "Nxitje e leximit dhe orë leximi për kopshte/shkolla", "WiFi dhe vende pune", "Ekspozita dhe evente"],
        targetGroups: ["Fëmijë", "Të rinj", "Familje", "Shkolla", "Specialistë pedagogjikë"],
      },
      vi: {
        description:
          "Thư viện trung tâm quận Marzahn-Hellersdorf nằm trong Freizeitforum Marzahn – trải rộng trên ba tầng với nhiều loại tài liệu và chương trình hỗ trợ đọc sách, kể cả bằng nhiều thứ tiếng mẹ đẻ của cư dân trong quận.",
        offers: ["Sách, sách nói, DVD và trò chơi", "Tài liệu bằng tiếng nước ngoài (trong đó có tiếng Việt, tiếng Ả Rập, tiếng Thổ Nhĩ Kỳ, tiếng Nga, tiếng Ba Tư, tiếng Ukraina)", "Thư viện âm nhạc và cho mượn tác phẩm nghệ thuật", "Hỗ trợ đọc sách và giờ đọc truyện cho nhà trẻ/trường học", "Wifi và chỗ ngồi làm việc", "Triển lãm và sự kiện"],
        targetGroups: ["Trẻ em", "Thanh thiếu niên", "Gia đình", "Trường học", "Chuyên viên giáo dục"],
      },
      tr: {
        description:
          "Freizeitforum Marzahn içinde yer alan Marzahn-Hellersdorf ilçe merkez kütüphanesi – üç katta geniş bir medya seçkisi ve okuma teşvikine yönelik programlar sunar; ilçede konuşulan birçok anadilde de içerik bulunur.",
        offers: ["Kitaplar, sesli kitaplar, DVD'ler ve oyunlar", "Yabancı dillerde medya (Vietnamca, Arapça, Türkçe, Rusça, Farsça, Ukraynaca ve daha fazlası)", "Müzik kütüphanesi ve sanat eseri ödünç verme bölümü (Artothek)", "Kreşler/okullar için okuma teşviki ve kitap okuma saatleri", "WLAN ve çalışma alanları", "Sergiler ve etkinlikler"],
        targetGroups: ["Çocuklar", "Gençler", "Aileler", "Okullar", "Pedagojik uzmanlar"],
      },
      ar: {
        description:
          "المكتبة المركزية لمنطقة مارتسان-هيلرسدورف، وتقع داخل Freizeitforum Marzahn – تمتد على ثلاثة طوابق وتضم مجموعة واسعة من الوسائط وبرامج لتعزيز القراءة، بما في ذلك بلغات عديدة يتحدث بها سكان المنطقة.",
        offers: ["كتب وكتب صوتية وأقراص DVD وألعاب", "وسائط بلغات أجنبية (منها الفيتنامية والعربية والتركية والروسية والفارسية والأوكرانية)", "مكتبة موسيقية وقسم لإعارة الأعمال الفنية (Artothek)", "تعزيز القراءة وحصص القراءة للحضانات والمدارس", "واي فاي ومقاعد للعمل والدراسة", "معارض وفعاليات"],
        targetGroups: ["الأطفال", "الشباب", "الأسر", "المدارس", "المختصون التربويون"],
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
      sq: {
        description:
          "Institucion i hapur i kohës së lirë për të rinj, me fokus te edukimi kulturor dhe pjesëmarrja – nga studio muzike dhe regjistrimi deri te teatri me dritë të zezë.",
        offers: ["Zonë e hapur dhe kafene për të rinj", "Studio muzike dhe regjistrimi", "Teatër me dritë të zezë, vallëzim, gatim", "Projekte grafiti", "Ping-pong, futboll gjuhësor (kiker), bilardo"],
        targetGroups: ["Fëmijë dhe të rinj (8–18 vjeç)"],
      },
      vi: {
        description:
          "Cơ sở sinh hoạt thanh thiếu niên mở, tập trung vào giáo dục văn hóa và sự tham gia – từ phòng thu âm nhạc đến sân khấu ánh sáng đen (Schwarzlichttheater).",
        offers: ["Khu vực mở và quán cà phê thanh thiếu niên", "Phòng thu âm nhạc và thu âm", "Sân khấu ánh sáng đen, khiêu vũ, nấu ăn", "Dự án vẽ graffiti", "Bóng bàn, bàn bi lắc (kicker), billiards"],
        targetGroups: ["Trẻ em và thanh thiếu niên (8–18 tuổi)"],
      },
      tr: {
        description:
          "Kültürel eğitim ve katılıma odaklanan açık bir gençlik merkezi – müzik ve kayıt stüdyosundan karanlık tiyatroya (Schwarzlichttheater) kadar birçok imkân sunar.",
        offers: ["Açık alan ve gençlik kafesi", "Müzik ve kayıt stüdyosu", "Karanlık (siyah ışık) tiyatrosu, dans, yemek yapımı", "Grafiti projeleri", "Masa tenisi, langırt, bilardo"],
        targetGroups: ["Çocuklar ve gençler (8–18 yaş)"],
      },
      ar: {
        description:
          "مركز شبابي مفتوح يركّز على التربية الثقافية والمشاركة – من استوديو الموسيقى والتسجيل إلى مسرح الضوء الأسود.",
        offers: ["منطقة مفتوحة ومقهى للشباب", "استوديو موسيقى وتسجيل", "مسرح الضوء الأسود، الرقص، الطبخ", "مشاريع فن الغرافيتي", "تنس الطاولة، كرة القدم البشرية (Kicker)، البلياردو"],
        targetGroups: ["الأطفال والشباب (8–18 سنة)"],
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
      sq: {
        description:
          "Pika qendrore e kontaktit për pjesëmarrjen e fëmijëve dhe të rinjve në rrethin Marzahn-Hellersdorf – nga juria e fëmijëve deri te parlamenti i të rinjve.",
        offers: ["Juria e fëmijëve dhe e të rinjve", "Parlamenti i fëmijëve dhe i të rinjve", "Edukim mbi të drejtat e fëmijëve", "Sondazhe dhe ditë aksioni", "Projekte dhe seminare (workshope)"],
        targetGroups: ["Fëmijë", "Të rinj", "Familje në rreth"],
      },
      vi: {
        description:
          "Đầu mối trung tâm cho sự tham gia của trẻ em và thanh thiếu niên tại quận Marzahn-Hellersdorf – từ hội đồng giám khảo trẻ em đến nghị viện thanh thiếu niên.",
        offers: ["Hội đồng giám khảo trẻ em và thanh thiếu niên", "Nghị viện trẻ em và thanh thiếu niên", "Giáo dục về quyền trẻ em", "Khảo sát và ngày hành động", "Dự án và hội thảo"],
        targetGroups: ["Trẻ em", "Thanh thiếu niên", "Gia đình trong quận"],
      },
      tr: {
        description:
          "Marzahn-Hellersdorf ilçesinde çocuk ve gençlerin katılımı için merkezi başvuru noktası – çocuk jürisinden gençlik parlamentosuna kadar birçok imkân sunar.",
        offers: ["Çocuk ve gençlik jürisi", "Çocuk ve gençlik parlamentosu", "Çocuk hakları konusunda eğitim", "Anketler ve etkinlik günleri", "Projeler ve atölye çalışmaları"],
        targetGroups: ["Çocuklar", "Gençler", "İlçedeki aileler"],
      },
      ar: {
        description:
          "نقطة الاتصال المركزية لمشاركة الأطفال والشباب في منطقة مارتسان-هيلرسدورف – من لجنة تحكيم الأطفال إلى برلمان الشباب.",
        offers: ["لجنة تحكيم للأطفال والشباب", "برلمان الأطفال والشباب", "توعية بحقوق الطفل", "استطلاعات وأيام فعاليات", "مشاريع وورش عمل"],
        targetGroups: ["الأطفال", "الشباب", "الأسر في المنطقة"],
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
      sq: {
        description:
          "Punë sociale rrugore mobile për të rinj dhe të rritur të rinj: Gangway është e pranishme atje ku qëndrojnë të rinjtë dhe i shoqëron ata me prag të ulët nëpër faza të vështira të jetës.",
        offers: ["Punë sociale rrugore aktive/kërkuese", "Këshillim për probleme me prindërit, shkollën ose policinë", "Mbështetje për shkollën, formimin profesional dhe punën", "Shoqërim te institucionet zyrtare", "Projekte të kohës së lirë dhe sportit"],
        targetGroups: ["Të rinj dhe të rritur të rinj (rreth 14–27 vjeç)"],
      },
      vi: {
        description:
          "Công tác xã hội đường phố lưu động dành cho thanh thiếu niên và thanh niên: Gangway có mặt ở những nơi giới trẻ tụ tập, đồng hành dễ tiếp cận cùng họ qua những giai đoạn khó khăn trong cuộc sống.",
        offers: ["Công tác xã hội đường phố chủ động tiếp cận", "Tư vấn khi có vấn đề với cha mẹ, trường học hoặc cảnh sát", "Hỗ trợ về trường học, đào tạo nghề và công việc", "Đồng hành khi làm việc với cơ quan chức năng", "Dự án giải trí và thể thao"],
        targetGroups: ["Thanh thiếu niên và thanh niên (khoảng 14–27 tuổi)"],
      },
      tr: {
        description:
          "Gençler ve genç yetişkinler için mobil sokak sosyal çalışması: Gangway, gençlerin bulunduğu her yerde onların yanındadır ve zor yaşam dönemlerinde kolay erişilebilir şekilde destek sunar.",
        offers: ["Yerinde (sokak) sosyal çalışma", "Ebeveynler, okul veya polisle yaşanan sorunlarda danışmanlık", "Okul, meslek eğitimi ve iş konusunda destek", "Resmi kurumlara giderken eşlik etme", "Boş zaman ve spor projeleri"],
        targetGroups: ["Gençler ve genç yetişkinler (yaklaşık 14–27 yaş)"],
      },
      ar: {
        description:
          "عمل اجتماعي متنقل في الشارع للشباب والبالغين الصغار: يتواجد فريق Gangway حيث يتواجد الشباب، ويرافقهم بأسلوب ميسّر خلال المراحل الصعبة من حياتهم.",
        offers: ["عمل اجتماعي ميداني في الشارع", "استشارة عند وجود مشاكل مع الوالدين أو المدرسة أو الشرطة", "دعم في المدرسة والتدريب المهني والعمل", "مرافقة إلى الدوائر الرسمية", "مشاريع لوقت الفراغ والرياضة"],
        targetGroups: ["الشباب والبالغون الصغار (من نحو 14 إلى 27 سنة)"],
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
      sq: {
        description:
          "Klub i hapur sportiv dhe i të rinjve me oferta të gjera lëvizjeje – nga xhudo deri te ngjitja (klettern) – për fëmijë dhe të rinj nga i gjithë hapësira sociale.",
        offers: ["Futboll dhe basketboll", "Xhudo", "Ngjitje (Klettern)", "Pajisje force dhe fitnesi", "Ping-pong, bilardo, shigjeta (dart)"],
        targetGroups: ["Fëmijë dhe të rinj (rreth 7–21 vjeç)"],
      },
      vi: {
        description:
          "Câu lạc bộ thể thao và thanh thiếu niên mở với nhiều hoạt động vận động – từ judo đến leo núi – dành cho trẻ em và thanh thiếu niên từ khắp khu vực xã hội.",
        offers: ["Bóng đá và bóng rổ", "Judo", "Leo núi / leo tường", "Dụng cụ tập lực và thể hình", "Bóng bàn, billiards, phi tiêu (dart)"],
        targetGroups: ["Trẻ em và thanh thiếu niên (khoảng 7–21 tuổi)"],
      },
      tr: {
        description:
          "Judodan tırmanışa kadar geniş bir hareket yelpazesi sunan açık spor ve gençlik kulübü – tüm sosyal çevredeki çocuklar ve gençler için.",
        offers: ["Futbol ve basketbol", "Judo", "Tırmanış", "Güç ve fitness aletleri", "Masa tenisi, bilardo, dart"],
        targetGroups: ["Çocuklar ve gençler (yaklaşık 7–21 yaş)"],
      },
      ar: {
        description:
          "نادٍ رياضي وشبابي مفتوح يقدّم عروضًا رياضية متنوعة – من الجودو إلى التسلق – للأطفال والشباب من كامل المحيط الاجتماعي.",
        offers: ["كرة القدم وكرة السلة", "الجودو", "التسلق", "أجهزة القوة واللياقة البدنية", "تنس الطاولة، البلياردو، السهام (دارت)"],
        targetGroups: ["الأطفال والشباب (من نحو 7 إلى 21 سنة)"],
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
      sq: {
        description:
          "Institucion gjithëpërfshirës për fëmijë dhe të rinj, i përshtatshëm për karrocat me rrota, ku fëmijë dhe të rinj me dhe pa aftësi të kufizuara kalojnë kohën së bashku.",
        offers: ["Zonë e hapur dhe projekte", "Studio muzike dhe regjistrimi", "Ndihmë me detyrat e shtëpisë", "Udhëtime pushimesh dhe takime ndërkombëtare", "Kopsht"],
        targetGroups: ["Të rinj (rreth 10–27 vjeç)", "me dhe pa aftësi të kufizuara"],
      },
      vi: {
        description:
          "Cơ sở hòa nhập dành cho trẻ em và thanh thiếu niên, có lối đi cho xe lăn, nơi trẻ em và thanh thiếu niên có và không có khuyết tật cùng nhau sinh hoạt giải trí.",
        offers: ["Khu vực mở và các dự án", "Phòng thu âm nhạc và thu âm", "Hỗ trợ làm bài tập về nhà", "Chuyến đi nghỉ và giao lưu quốc tế", "Vườn"],
        targetGroups: ["Thanh thiếu niên (khoảng 10–27 tuổi)", "có và không có khuyết tật"],
      },
      tr: {
        description:
          "Tekerlekli sandalyeye uygun, kapsayıcı bir çocuk ve gençlik merkezi; engelli ve engelsiz çocuk ve gençler boş zamanlarını burada birlikte geçirir.",
        offers: ["Açık alan ve projeler", "Müzik ve kayıt stüdyosu", "Ev ödevi desteği", "Tatil gezileri ve uluslararası buluşmalar", "Bahçe"],
        targetGroups: ["Gençler (yaklaşık 10–27 yaş)", "engelli ve engelsiz"],
      },
      ar: {
        description:
          "مركز شامل للأطفال والشباب مهيأ لذوي الكراسي المتحركة، يقضي فيه الأطفال والشباب من ذوي الإعاقة ومن غير ذوي الإعاقة أوقات فراغهم معًا.",
        offers: ["منطقة مفتوحة ومشاريع", "استوديو موسيقى وتسجيل", "متابعة الواجبات المدرسية", "رحلات في العطلة ولقاءات دولية", "حديقة"],
        targetGroups: ["الشباب (من نحو 10 إلى 27 سنة)", "من ذوي الإعاقة ومن غير ذوي الإعاقة"],
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
      sq: {
        description:
          "Cirk për fëmijë dhe të rinj që nga viti 1992: pedagogji cirku për t'u përfshirë – nga zhonglimi deri te trapezi – si dhe javë projektesh për kopshte dhe shkolla.",
        offers: ["Stërvitje cirku (akrobaci, zhonglim, trampolinë)", "Trapez dhe vallëzim në litar", "Vallëzim", "Javë projektesh shkollore dhe pushimesh", "Shfaqje"],
        targetGroups: ["Fëmijë", "Të rinj", "Grupe kopshtesh dhe shkollash"],
      },
      vi: {
        description:
          "Đoàn xiếc thiếu nhi và thanh thiếu niên từ năm 1992: giáo dục xiếc để cùng tham gia – từ tung hứng đến đu bay – cùng các tuần dự án cho nhà trẻ và trường học.",
        offers: ["Tập luyện xiếc (nhào lộn, tung hứng, bạt lò xo)", "Đu bay và đi dây", "Khiêu vũ", "Tuần dự án cho trường học và kỳ nghỉ", "Buổi biểu diễn"],
        targetGroups: ["Trẻ em", "Thanh thiếu niên", "Nhóm nhà trẻ và trường học"],
      },
      tr: {
        description:
          "1992'den beri çocuk ve gençlik sirki: jonglörlükten trapeze kadar katılımcı sirk pedagojisi sunar; ayrıca kreşler ve okullar için proje haftaları düzenler.",
        offers: ["Sirk antrenmanı (akrobasi, jonglörlük, trambolin)", "Trapez ve ip cambazlığı", "Dans", "Okul ve tatil proje haftaları", "Gösteriler"],
        targetGroups: ["Çocuklar", "Gençler", "Kreş ve okul grupları"],
      },
      ar: {
        description:
          "سيرك للأطفال والشباب منذ عام 1992: تربية سيركية تفاعلية – من الألعاب البهلوانية إلى الأرجوحة الهوائية (الترابيز) – بالإضافة إلى أسابيع مشاريع للحضانات والمدارس.",
        offers: ["تدريب سيركي (بهلوانيات، ألعاب توازن، ترامبولين)", "الأرجوحة الهوائية والمشي على الحبل", "الرقص", "أسابيع مشاريع مدرسية وفي العطلة", "عروض"],
        targetGroups: ["الأطفال", "الشباب", "مجموعات الحضانات والمدارس"],
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
      sq: {
        description:
          "Qendër këshillimi psikologjik e Immanuel Albertinen Diakonie, me një ofertë të gjerë për familje, çifte dhe të rinj në situata të vështira jete.",
        offers: ["Këshillim edukativ dhe familjar", "Këshillim për ndarje dhe divorc", "Psikoterapi për fëmijë dhe të rinj", "Kafene për gra „IMAL“", "Këshillim social dhe migracioni"],
        targetGroups: ["Familje", "Çifte", "Fëmijë dhe të rinj", "gra refugjate"],
      },
      vi: {
        description:
          "Trung tâm tư vấn tâm lý của tổ chức Immanuel Albertinen Diakonie với nhiều chương trình dành cho gia đình, các cặp đôi và người trẻ trong những hoàn cảnh sống khó khăn.",
        offers: ["Tư vấn giáo dục và gia đình", "Tư vấn ly thân và ly hôn", "Trị liệu tâm lý cho trẻ em và thanh thiếu niên", "Quán cà phê dành cho phụ nữ „IMAL“", "Tư vấn xã hội và di cư"],
        targetGroups: ["Gia đình", "Các cặp đôi", "Trẻ em và thanh thiếu niên", "phụ nữ tị nạn"],
      },
      tr: {
        description:
          "Immanuel Albertinen Diakonie'ye bağlı psikolojik danışma merkezi; zorlu yaşam durumlarındaki aileler, çiftler ve gençler için geniş bir hizmet yelpazesi sunar.",
        offers: ["Eğitim ve aile danışmanlığı", "Ayrılık ve boşanma danışmanlığı", "Çocuk ve genç psikoterapisi", "“IMAL” kadın kafesi", "Sosyal ve göçmenlik danışmanlığı"],
        targetGroups: ["Aileler", "Çiftler", "Çocuklar ve gençler", "Mülteci kadınlar"],
      },
      ar: {
        description:
          "مركز استشارات نفسية تابع لجمعية Immanuel Albertinen Diakonie، يقدّم عروضًا واسعة للأسر والأزواج والشباب الذين يمرّون بظروف حياتية صعبة.",
        offers: ["استشارات تربوية وأسرية", "استشارات الانفصال والطلاق", "علاج نفسي للأطفال والمراهقين", "مقهى النساء «IMAL»", "استشارات اجتماعية وخاصة بالهجرة"],
        targetGroups: ["الأسر", "الأزواج", "الأطفال والمراهقون", "النساء اللاجئات"],
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
      sq: {
        description:
          "Ofertë ndër-brezash edukimi dhe takimi familjar në shtëpinë ndër-brezash për Marzahn-Süd/Biesdorf, e mbajtur nga pad gGmbH.",
        offers: ["Kurse masazhi për bebe", "Grupe prind-fëmijë", "Këshillim konfliktesh dhe edukimi", "Kopsht i hapur me oferta loje dhe lëvizjeje", "„Mirë se vjen në lagje, bebi“ për të porsalindurit", "Kafene lagjeje dhe kurse ndër-brezash"],
        targetGroups: ["Prindër", "Familje me foshnje/fëmijë të vegjël", "të gjithë brezat"],
      },
      vi: {
        description:
          "Chương trình giáo dục gia đình và giao lưu liên thế hệ tại ngôi nhà liên thế hệ dành cho khu vực Marzahn-Süd/Biesdorf, do tổ chức pad gGmbH điều hành.",
        offers: ["Khóa học mát-xa cho trẻ sơ sinh", "Nhóm cha mẹ – con", "Tư vấn xung đột và giáo dục con cái", "Khu vườn mở với các hoạt động vui chơi, vận động", "„Chào mừng đến khu phố, bé yêu“ dành cho trẻ sơ sinh", "Quán cà phê khu phố và các khóa học liên thế hệ"],
        targetGroups: ["Cha mẹ", "Gia đình có trẻ sơ sinh/trẻ nhỏ", "mọi thế hệ"],
      },
      tr: {
        description:
          "Marzahn-Güney/Biesdorf için Çok Kuşaklı Ev (Mehrgenerationenhaus) bünyesinde, pad gGmbH tarafından yürütülen, nesiller arası aile eğitimi ve buluşma hizmeti.",
        offers: ["Bebek masajı kursları", "Ebeveyn-çocuk grupları", "Çatışma ve eğitim danışmanlığı", "Oyun ve hareket imkânlarıyla açık bahçe", "Yeni doğanlar için “Mahalleye hoş geldin bebeğim” programı", "Mahalle kafesi ve nesiller arası kurslar"],
        targetGroups: ["Ebeveynler", "Bebek/küçük çocuk sahibi aileler", "Tüm nesiller"],
      },
      ar: {
        description:
          "عرض تربوي أسري وملتقى بين الأجيال في «بيت الأجيال المتعددة» (Mehrgenerationenhaus) لمنطقة جنوب مارتسان/بيسدورف، تديره جمعية pad gGmbH.",
        offers: ["دورات تدليك الرضع", "مجموعات للوالدين والأطفال", "استشارات في حل النزاعات والتربية", "حديقة مفتوحة بعروض للعب والحركة", "برنامج «أهلاً بك في الحي أيها الصغير» للمواليد الجدد", "مقهى الحي ودورات مشتركة بين الأجيال"],
        targetGroups: ["الوالدان", "الأسر التي لديها رضّع/أطفال صغار", "جميع الأجيال"],
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
      sq: {
        description:
          "Qendër për fëmijë, të rinj dhe familje e Kryqit të Kuq Gjerman (DRK), me fokus te forcimi i marrëdhënies prind-fëmijë dhe i kompetencës prindërore edukative.",
        offers: ["Këshillim dhe trajnim (coaching) edukativ", "Grupe prind-fëmijë (0–3 vjeç)", "Mëngjes dhe pasdite familjare", "Kafene gjuhësore", "Takime të shoqëruara (kafene takimesh)", "Ndihmë me detyrat e shtëpisë për nxënës të shkollës fillore"],
        targetGroups: ["Familje me fëmijë të vegjël", "Prindër", "prindër që jetojnë ndarazi"],
      },
      vi: {
        description:
          "Trung tâm trẻ em, thanh thiếu niên và gia đình của Hội Chữ thập đỏ Đức (DRK), tập trung vào việc củng cố mối quan hệ cha mẹ – con và năng lực nuôi dạy con của cha mẹ.",
        offers: ["Tư vấn và huấn luyện về giáo dục con cái", "Nhóm cha mẹ – con (0–3 tuổi)", "Bữa sáng và buổi chiều gia đình", "Quán cà phê ngôn ngữ", "Gặp gỡ con có người hỗ trợ đi cùng (quán cà phê thăm con)", "Hỗ trợ bài tập về nhà cho học sinh tiểu học"],
        targetGroups: ["Gia đình có con nhỏ", "Cha mẹ", "cha mẹ sống ly thân"],
      },
      tr: {
        description:
          "Alman Kızılhaçı'na (DRK) bağlı çocuk, gençlik ve aile merkezi; ebeveyn-çocuk ilişkisini ve ebeveynlerin eğitim becerilerini güçlendirmeye odaklanır.",
        offers: ["Eğitim danışmanlığı ve koçluğu", "Ebeveyn-çocuk grupları (0–3 yaş)", "Aile kahvaltıları ve aile öğleden sonraları", "Dil kafesi", "Refakatli görüşme (ayrı yaşayan ebeveyn-çocuk görüşme kafesi)", "İlkokul çağındaki çocuklar için ev ödevi desteği"],
        targetGroups: ["Küçük çocuklu aileler", "Ebeveynler", "Ayrı yaşayan ebeveynler"],
      },
      ar: {
        description:
          "مركز للأطفال والشباب والأسرة تابع للصليب الأحمر الألماني (DRK)، يركّز على تعزيز العلاقة بين الوالدين والطفل وتقوية المهارات التربوية للوالدين.",
        offers: ["استشارة وتوجيه تربوي", "مجموعات للوالدين والأطفال (0–3 سنوات)", "إفطار أسري وجلسات مسائية عائلية", "مقهى اللغة", "لقاءات مرافَقة بين الوالد المنفصل والطفل (مقهى التواصل)", "متابعة الواجبات المدرسية لأطفال المرحلة الابتدائية"],
        targetGroups: ["الأسر التي لديها أطفال صغار", "الوالدان", "الوالدان المنفصلان"],
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
      sq: {
        description:
          "Qendër e hapur për fëmijë, të rinj dhe familje e JAO gGmbH në „Haus Windspiel“ – në të njëjtën ndërtesë me këshillimin edukativ dhe familjar të Zyrës për Fëmijë dhe të Rinj (Jugendamt), por një ofertë e pavarur e një organizate tjetër mbajtëse.",
        offers: ["Takim familjar me kurse për prindër dhe festa familjare", "Orë të hapura këshillimi nga „nënat e lagjes“", "Punëtori qëndisje/qepjeje", "Grupe prind-fëmijë", "Ndihmë me detyrat e shtëpisë", "Program për pushimet verore"],
        targetGroups: ["Familje me fëmijë (0–18 vjeç)", "Prindër"],
      },
      vi: {
        description:
          "Trung tâm trẻ em, thanh thiếu niên và gia đình mở của tổ chức JAO gGmbH tại „Haus Windspiel“ – cùng tòa nhà với bộ phận tư vấn giáo dục và gia đình của Sở Thanh thiếu niên (Jugendamt), nhưng là một chương trình độc lập của một tổ chức chủ quản khác.",
        offers: ["Điểm gặp gỡ gia đình với các khóa học cho cha mẹ và lễ hội gia đình", "Giờ tư vấn mở của các „bà mẹ khu phố“", "Xưởng may vá", "Nhóm cha mẹ – con", "Hỗ trợ bài tập về nhà", "Chương trình nghỉ hè"],
        targetGroups: ["Gia đình có con (0–18 tuổi)", "Cha mẹ"],
      },
      tr: {
        description:
          "JAO gGmbH tarafından yürütülen, “Haus Windspiel” binasında yer alan açık bir çocuk, gençlik ve aile merkezi – Jugendamt'ın (Gençlik Dairesi) eğitim ve aile danışmanlığı ile aynı binada bulunur, ancak farklı bir kurum tarafından yürütülen bağımsız bir hizmettir.",
        offers: ["Ebeveyn kursları ve aile şenlikleriyle Aile Buluşma Noktası (FamilienTreff)", "Mahalle annelerinin (Stadtteilmütter) açık danışma saati", "Dikiş atölyesi", "Ebeveyn-çocuk grupları", "Ev ödevi yardımı", "Yaz tatili programı"],
        targetGroups: ["Çocuklu aileler (0–18 yaş)", "Ebeveynler"],
      },
      ar: {
        description:
          "مركز مفتوح للأطفال والشباب والأسرة تديره جمعية JAO gGmbH في مبنى «Haus Windspiel» – يقع في نفس المبنى الذي توجد فيه مصلحة الاستشارة التربوية والأسرية التابعة لمكتب رعاية الشباب (Jugendamt)، لكنه عرض مستقل تابع لجهة أخرى.",
        offers: ["ملتقى الأسرة (FamilienTreff) مع دورات للوالدين وأعياد أسرية", "ساعات استشارة مفتوحة مع «أمهات الحي» (Stadtteilmütter)", "ورشة خياطة", "مجموعات للوالدين والأطفال", "مساعدة في الواجبات المدرسية", "برنامج العطلة الصيفية"],
        targetGroups: ["الأسر التي لديها أطفال (0–18 سنة)", "الوالدان"],
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
      sq: {
        description:
          "Pikë kontakti qendrore fillestare për familjet kur kanë nevojë për mbështetje, informacion ose orientim në sistemin e ndihmës së rrethit. Pikë e përbashkët kontakti e Zyrës për Fëmijë dhe të Rinj (Jugendamt) dhe pad gGmbH.",
        offers: ["Këshillim fillestar për familje", "Ndihmë me kërkesa: pagesa prindërore (Elterngeld), kupon kopshti/klubi pasdite (Kita-/Hort-Gutschein), pagesë paraprake alimentacioni (Unterhaltsvorschuss)", "Këshillim për kujdestarinë prindërore (Sorgerecht) dhe njohjen e atësisë", "Referim te qendra këshillimi të specializuara", "Këshillim aktiv/mobil"],
        targetGroups: ["Familje në rreth", "prindër që presin fëmijë", "prindër beqarë"],
      },
      vi: {
        description:
          "Đầu mối trung tâm đầu tiên dành cho các gia đình khi cần hỗ trợ, thông tin hoặc định hướng trong hệ thống hỗ trợ của quận. Đầu mối chung giữa Sở Thanh thiếu niên (Jugendamt) và tổ chức pad gGmbH.",
        offers: ["Tư vấn ban đầu cho gia đình", "Hỗ trợ làm đơn: trợ cấp nuôi con (Elterngeld), phiếu nhà trẻ/bán trú (Kita-/Hort-Gutschein), trợ cấp cấp dưỡng nuôi con (Unterhaltsvorschuss)", "Tư vấn về quyền nuôi con (Sorgerecht) và nhận cha cho con", "Giới thiệu đến các cơ quan tư vấn chuyên môn", "Tư vấn chủ động tiếp cận/lưu động"],
        targetGroups: ["Gia đình trong quận", "cha mẹ sắp sinh con", "cha mẹ đơn thân"],
      },
      tr: {
        description:
          "Ailelerin ilçenin yardım sisteminde destek, bilgi veya yönlendirmeye ihtiyaç duyduklarında başvurabilecekleri merkezi ilk temas noktası. Jugendamt (Gençlik Dairesi) ve pad gGmbH tarafından birlikte yürütülen ortak bir hizmettir.",
        offers: ["Aileler için ilk danışmanlık", "Başvuru desteği: Ebeveyn parası (Elterngeld), kreş/okul sonrası bakım kuponu, nafaka avansı", "Velayet hakkı ve babalığın tanınması konusunda danışmanlık", "Uzman danışma merkezlerine yönlendirme", "Yerinde/mobil danışmanlık"],
        targetGroups: ["İlçedeki aileler", "Anne-baba adayları", "Tek ebeveynler"],
      },
      ar: {
        description:
          "نقطة اتصال أولى مركزية للأسر عند حاجتها إلى الدعم أو المعلومات أو التوجيه ضمن نظام المساعدة في المنطقة. مكتب مشترك بين مكتب رعاية الشباب (Jugendamt) وجمعية pad gGmbH.",
        offers: ["استشارة أولية للأسر", "مساعدة في تقديم الطلبات: إعانة الوالدين (Elterngeld)، قسيمة الحضانة/مركز الرعاية بعد الدوام المدرسي، سلفة النفقة", "استشارة حول حق الحضانة والاعتراف بالأبوة", "الإحالة إلى مراكز استشارية متخصصة", "استشارة ميدانية/متنقلة"],
        targetGroups: ["الأسر في المنطقة", "الآباء والأمهات المستقبليون", "الوالدون العازبون"],
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
      sq: {
        description:
          "Pikë kontakti për të gjitha familjet në Hellersdorf-Nord, për t'u takuar, shkëmbyer përvoja dhe marrë këshillim, e mbajtur nga pad gGmbH.",
        offers: ["Këshillim social-pedagogjik", "Ndihmë me kërkesa dhe formularë", "Ambulancë për bebe që qajnë shumë (Schreibaby)", "Orë këshillimi për bebe", "Këshillim për gjidhënie dhe ushqyerje", "Takimi i lagjes Kastanie"],
        targetGroups: ["Familje", "Prindër me foshnje"],
      },
      vi: {
        description:
          "Điểm liên hệ cho tất cả các gia đình ở Hellersdorf-Nord để gặp gỡ, trao đổi và được tư vấn, do tổ chức pad gGmbH điều hành.",
        offers: ["Tư vấn công tác xã hội", "Hỗ trợ làm đơn và giấy tờ", "Phòng khám hỗ trợ trẻ sơ sinh quấy khóc nhiều (Schreibaby)", "Giờ tư vấn cho trẻ sơ sinh", "Tư vấn cho con bú và dinh dưỡng", "Điểm gặp gỡ khu phố Kastanie"],
        targetGroups: ["Gia đình", "Cha mẹ có trẻ sơ sinh"],
      },
      tr: {
        description:
          "Hellersdorf-Kuzey'deki tüm aileler için bir araya gelme, deneyim paylaşma ve danışmanlık alma imkânı sunan, pad gGmbH tarafından yürütülen başvuru noktası.",
        offers: ["Sosyal pedagojik danışmanlık", "Başvuru ve form doldurma desteği", "Aşırı ağlayan bebekler için danışmanlık (Schreibaby polikliniği)", "Bebek danışma saati", "Emzirme ve beslenme danışmanlığı", "Kastanie Mahalle Buluşması"],
        targetGroups: ["Aileler", "Bebekli ebeveynler"],
      },
      ar: {
        description:
          "نقطة اتصال لجميع الأسر في شمال هيلرسدورف للالتقاء وتبادل الخبرات والحصول على استشارة، وتديرها جمعية pad gGmbH.",
        offers: ["استشارة اجتماعية تربوية", "مساعدة في تقديم الطلبات وتعبئة النماذج", "عيادة استشارية للرضّع كثيري البكاء", "ساعة استشارة للرضّع", "استشارات الرضاعة الطبيعية والتغذية", "ملتقى الحي «Kastanie»"],
        targetGroups: ["الأسر", "الوالدان اللذان لديهما رضّع"],
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
      sq: {
        description:
          "Institucion i hapur i kohës së lirë për fëmijë dhe të rinj, që ofron një pikë kontakti të qëndrueshme për fëmijë dhe të rinj në situata të vështira jete.",
        offers: ["Takim i hapur i kohës së lirë (futboll gjuhësor, bilardo)", "Këshillim për të rinj dhe social", "Edukim mjedisor", "Oferta pushimesh", "Shpërndarje javore ushqimi dhe gatim së bashku"],
        targetGroups: ["Fëmijë në moshë shkolle fillore", "Të rinj"],
      },
      vi: {
        description:
          "Cơ sở sinh hoạt giải trí mở dành cho trẻ em và thanh thiếu niên, mang lại một điểm tựa đáng tin cậy cho trẻ em và thanh thiếu niên trong hoàn cảnh sống khó khăn.",
        offers: ["Điểm gặp gỡ giải trí mở (bàn bi lắc, billiards)", "Tư vấn thanh thiếu niên và xã hội", "Giáo dục môi trường", "Chương trình dịp nghỉ lễ", "Phát thực phẩm hằng tuần và cùng nhau nấu ăn"],
        targetGroups: ["Trẻ em độ tuổi tiểu học", "Thanh thiếu niên"],
      },
      tr: {
        description:
          "Zor yaşam koşullarındaki çocuk ve gençlere güvenilir bir başvuru noktası sunan açık çocuk ve gençlik merkezi.",
        offers: ["Açık boş zaman buluşması (langırt, bilardo)", "Gençlik ve sosyal danışmanlık", "Çevre eğitimi", "Tatil etkinlikleri", "Haftalık gıda dağıtımı ve birlikte yemek pişirme"],
        targetGroups: ["İlkokul çağındaki çocuklar", "Gençler"],
      },
      ar: {
        description:
          "مركز مفتوح لأوقات فراغ الأطفال والشباب، يوفر نقطة اتصال موثوقة للأطفال والشباب الذين يعيشون ظروفًا حياتية صعبة.",
        offers: ["ملتقى مفتوح لوقت الفراغ (كرة القدم البشرية، البلياردو)", "استشارة شبابية واجتماعية", "التربية البيئية", "عروض للعطلة", "توزيع أسبوعي للمواد الغذائية والطبخ الجماعي"],
        targetGroups: ["الأطفال في سن المرحلة الابتدائية", "الشباب"],
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
      sq: {
        description:
          "Një vend për kohën e lirë dhe lëvizje: park lagjeje pa pengesa dhe gjithëpërfshirës, me zona tematike për grupmosha të ndryshme – jo një qendër klasike këshillimi, por një vend për lojë, ngjitje dhe qëndrim.",
        offers: ["Zona lojërash „Shkretëtira & Stepa“ (2–6 vjeç)", "Parkur ngjitjeje „Pylli dhe Livadhi“ (6–12 vjeç)", "Oferta lëvizjeje për të gjithë brezat", "Zonë relaksi dhe sporti „Xhungla“ (12–16 vjeç)", "Kopshti fqinjësor ngjitur „Kopshtet e Parajsës“"],
        targetGroups: ["Familje me fëmijë", "të gjithë brezat", "banorë të porsaardhur"],
      },
      vi: {
        description:
          "Một nơi để giải trí và vận động: công viên khu phố không rào cản, hòa nhập, với các khu vực chủ đề dành cho nhiều nhóm tuổi khác nhau – không phải một trung tâm tư vấn thông thường, mà là nơi để chơi, leo trèo và thư giãn.",
        offers: ["Khu vui chơi „Sa mạc & Thảo nguyên“ (2–6 tuổi)", "Đường leo trèo „Rừng và Đồng cỏ“ (6–12 tuổi)", "Hoạt động vận động cho mọi thế hệ", "Khu thư giãn và thể thao „Rừng rậm“ (12–16 tuổi)", "Vườn cộng đồng liền kề „Những khu vườn thiên đường“"],
        targetGroups: ["Gia đình có con", "mọi thế hệ", "cư dân mới chuyển đến"],
      },
      tr: {
        description:
          "Bir boş zaman ve hareket alanı: engelsiz erişime sahip, kapsayıcı bir mahalle parkı; farklı yaş grupları için tema alanlarıyla donatılmıştır – klasik bir danışma merkezi değil, oyun oynamak, tırmanmak ve vakit geçirmek için bir yerdir.",
        offers: ["“Çöl ve Step” oyun alanı (2–6 yaş)", "“Orman ve Çayır” tırmanış parkuru (6–12 yaş)", "Tüm nesiller için hareket imkânları", "“Cangıl” dinlenme ve spor alanı (12–16 yaş)", "Bitişikteki “Paradiesgärten” (Cennet Bahçeleri) komşuluk bahçesi"],
        targetGroups: ["Çocuklu aileler", "Tüm nesiller", "Bölgeye yeni taşınan sakinler"],
      },
      ar: {
        description:
          "مكان لوقت الفراغ والحركة: حديقة حي شاملة وخالية من العوائق، تضم مناطق مواضيعية لمختلف الفئات العمرية – وهي ليست مركز استشارة تقليديًا، بل مكان للعب والتسلق وقضاء الوقت.",
        offers: ["منطقة لعب «الصحراء والسهوب» (2–6 سنوات)", "مسار تسلق «الغابة والمرج» (6–12 سنة)", "عروض حركية لجميع الأجيال", "منطقة استرخاء ورياضة «الأدغال» (12–16 سنة)", "حديقة الحي المجاورة «Paradiesgärten» (حدائق الفردوس)"],
        targetGroups: ["الأسر التي لديها أطفال", "جميع الأجيال", "السكان الجدد في الحي"],
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
      sq: {
        description:
          "Qendra e këshillimit edukativ dhe familjar e Zyrës për Fëmijë dhe të Rinj (Jugendamt) Marzahn-Hellersdorf, në „Haus Windspiel“ – këshillim dhe terapi për çështje edukimi dhe kriza familjare. Në të njëjtën ndërtesë me KJFZ Haus Windspiel, por një ofertë e pavarur e administratës së rrethit.",
        offers: ["Këshillim për çështje edukimi", "Këshillim për ndarje dhe divorc", "Këshillim mbi kujdestarinë prindërore", "Terapi për sjellje dhe vonesa në zhvillim", "Mbështetje për probleme shkollore"],
        targetGroups: ["Familje me fëmijë"],
      },
      vi: {
        description:
          "Trung tâm tư vấn giáo dục và gia đình của Sở Thanh thiếu niên (Jugendamt) Marzahn-Hellersdorf tại „Haus Windspiel“ – tư vấn và trị liệu về các vấn đề giáo dục con cái và khủng hoảng gia đình. Cùng tòa nhà với KJFZ Haus Windspiel, nhưng là một chương trình độc lập của quận.",
        offers: ["Tư vấn về các vấn đề giáo dục con cái", "Tư vấn ly thân và ly hôn", "Tư vấn về quyền nuôi con", "Trị liệu cho các vấn đề hành vi và phát triển", "Hỗ trợ khi gặp khó khăn ở trường học"],
        targetGroups: ["Gia đình có con"],
      },
      tr: {
        description:
          "Marzahn-Hellersdorf Jugendamt'ının (Gençlik Dairesi) “Haus Windspiel” binasındaki eğitim ve aile danışma merkezi – eğitim sorunları ve ailevi krizlerde danışmanlık ve terapi sunar. KJFZ Haus Windspiel ile aynı binada yer alır, ancak ilçe idaresine (Bezirksamt) bağlı bağımsız bir hizmettir.",
        offers: ["Eğitim sorunlarında danışmanlık", "Ayrılık ve boşanma danışmanlığı", "Velayet hakkı konusunda danışmanlık", "Davranış ve gelişim sorunlarında terapi", "Okul sorunlarında destek"],
        targetGroups: ["Çocuklu aileler"],
      },
      ar: {
        description:
          "مصلحة الاستشارة التربوية والأسرية التابعة لمكتب رعاية الشباب (Jugendamt) في مارتسان-هيلرسدورف، وتقع في مبنى «Haus Windspiel» – تقدّم استشارة وعلاجًا في مسائل التربية والأزمات الأسرية. تقع في نفس مبنى مركز KJFZ Haus Windspiel، لكنها عرض مستقل تابع لإدارة المنطقة (Bezirksamt).",
        offers: ["استشارة في مسائل التربية", "استشارات الانفصال والطلاق", "استشارة حول حق الحضانة الأبوية", "علاج للاضطرابات السلوكية والنمائية", "دعم في مشكلات المدرسة"],
        targetGroups: ["الأسر التي لديها أطفال"],
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
      sq: {
        description:
          "Zyra e rrethit për Fëmijë dhe të Rinj (Jugendamt) është përgjegjëse për shërbimet e ndihmës për të rinj në të gjithë rrethin Marzahn-Hellersdorf – nga regjistrimi në kopsht deri te mbrojtja e fëmijëve.",
        offers: ["Regjistrimi në kopsht dhe kuponët e kopshtit (Kita-Gutschein)", "Kujdes ditor për fëmijë te dado (Kindertagespflege)", "Këshillim familjar", "Pagesë paraprake alimentacioni (Unterhaltsvorschuss)", "Mbrojtja e fëmijëve"],
        targetGroups: ["Prindër", "Familje", "Fëmijë dhe të rinj në rreth"],
      },
      vi: {
        description:
          "Sở Thanh thiếu niên (Jugendamt) của quận chịu trách nhiệm về các dịch vụ hỗ trợ thanh thiếu niên trên toàn quận Marzahn-Hellersdorf – từ đăng ký nhà trẻ đến bảo vệ trẻ em.",
        offers: ["Đăng ký nhà trẻ và phiếu nhà trẻ (Kita-Gutschein)", "Dịch vụ giữ trẻ tại gia (Kindertagespflege)", "Tư vấn gia đình", "Trợ cấp cấp dưỡng nuôi con (Unterhaltsvorschuss)", "Bảo vệ trẻ em"],
        targetGroups: ["Cha mẹ", "Gia đình", "Trẻ em và thanh thiếu niên trong quận"],
      },
      tr: {
        description:
          "İlçe Jugendamt'ı (Gençlik Dairesi), Marzahn-Hellersdorf ilçesinin tamamında çocuk ve gençlik yardımı hizmetlerinden sorumludur – kreş kaydından çocuk korumaya kadar birçok alanı kapsar.",
        offers: ["Kreş kaydı ve kreş kuponları", "Gündüz çocuk bakımı (bakıcı yanında)", "Aile danışmanlığı", "Nafaka avansı", "Çocuk koruma"],
        targetGroups: ["Ebeveynler", "Aileler", "İlçedeki çocuklar ve gençler"],
      },
      ar: {
        description:
          "مكتب رعاية الشباب (Jugendamt) في المنطقة مسؤول عن خدمات رعاية الأطفال والشباب في كامل منطقة مارتسان-هيلرسدورف – من التسجيل في الحضانة إلى حماية الطفل.",
        offers: ["التسجيل في الحضانة وقسائم الحضانة", "الرعاية النهارية للأطفال لدى مربية معتمدة", "استشارة أسرية", "سلفة النفقة", "حماية الطفل"],
        targetGroups: ["الوالدان", "الأسر", "الأطفال والشباب في المنطقة"],
      },
    },
  },
];

export const praxisstelle = institutions.find((inst) => inst.isPraxisstelle)!;
export const localInstitutions = institutions.filter((inst) => inst.zone !== 'ausserhalb');
export const outsideInstitutions = institutions.filter((inst) => inst.zone === 'ausserhalb');
