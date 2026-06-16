import type { Locale } from "@/i18n/config";

export type DestinationUiStrings = {
  eyebrow: string;
  title: string;
  subtitle: string;
  distance: string;
  driveTime: string;
  walkTime: string;
  appeal: string;
  appealScore: string;
  viewAll: string;
  listTitle: string;
  listSubtitle: string;
  category: {
    beach: string;
    temple: string;
    market: string;
    show: string;
    viewpoint: string;
    nightlife: string;
    nature: string;
    island: string;
  };
  page: {
    back: string;
    gallery: string;
    about: string;
    tips: string;
    bestFor: string;
    navigate: string;
    fromStay: string;
    nearbyStays: string;
  };
  proximity: {
    title: string;
    subtitle: string;
    airport: string;
    beach: string;
    attraction: string;
    dayTrip: string;
    km: string;
    drive: string;
    walk: string;
  };
  hubs: {
    kamala: string;
    boPhut: string;
    maenam: string;
  };
};

export const destinationUiStrings: Record<Locale, DestinationUiStrings> = {
  en: {
    eyebrow: "Explore",
    title: "Places to visit",
    subtitle:
      "Beaches, temples, markets and islands across Thailand — curated places worth visiting.",
    distance: "Distance",
    driveTime: "Drive time",
    walkTime: "Walk",
    appeal: "Appeal",
    appealScore: "{score}/10",
    viewAll: "All places →",
    listTitle: "Places to explore",
    listSubtitle: "{count} destinations across Thailand",
    category: {
      beach: "Beach",
      temple: "Temple",
      market: "Market & village",
      show: "Show & entertainment",
      viewpoint: "Viewpoint",
      nightlife: "Nightlife",
      nature: "Nature & wildlife",
      island: "Island & day trip",
    },
    page: {
      back: "Places to visit",
      gallery: "Photo gallery",
      about: "Why visit?",
      tips: "Visitor tips",
      bestFor: "Best for",
      navigate: "Open in Google Maps",
      fromStay: "Distance from this stay",
      nearbyStays: "Stays nearby",
    },
    proximity: {
      title: "Distances from this property",
      subtitle: "Drive and walk times to beaches, attractions and day trips",
      airport: "Airport",
      beach: "Beaches",
      attraction: "Attractions",
      dayTrip: "Day trips",
      km: "{km} km",
      drive: "{min} min drive",
      walk: "{min} min walk",
    },
    hubs: {
      kamala: "from Kamala",
      boPhut: "from Bo Phut",
      maenam: "from Maenam",
    },
  },
  tr: {
    eyebrow: "Keşif",
    title: "Gezilecek yerler",
    subtitle:
      "Tayland genelinde plajlar, tapınaklar, pazarlar ve adalar — ziyaret etmeye değer seçilmiş yerler.",
    distance: "Mesafe",
    driveTime: "Sürüş süresi",
    walkTime: "Yürüyüş",
    appeal: "Çekicilik",
    appealScore: "{score}/10",
    viewAll: "Tüm yerler →",
    listTitle: "Keşfedilecek yerler",
    listSubtitle: "Tayland genelinde {count} destinasyon",
    category: {
      beach: "Plaj",
      temple: "Tapınak",
      market: "Pazar ve köy",
      show: "Gösteri ve eğlence",
      viewpoint: "Manzara noktası",
      nightlife: "Gece hayatı",
      nature: "Doğa ve vahşi yaşam",
      island: "Ada ve günübirlik tur",
    },
    page: {
      back: "Gezilecek yerler",
      gallery: "Fotoğraf galerisi",
      about: "Neden gitmelisiniz?",
      tips: "Ziyaret ipuçları",
      bestFor: "Kimler için",
      navigate: "Google Maps'te aç",
      fromStay: "Bu konaklamadan mesafe",
      nearbyStays: "Yakındaki konaklamalar",
    },
    proximity: {
      title: "Bu mülkten mesafeler",
      subtitle: "Plajlar, cazibe merkezleri ve günlük turlara sürüş ve yürüyüş süreleri",
      airport: "Havalimanı",
      beach: "Plajlar",
      attraction: "Cazibe merkezleri",
      dayTrip: "Günübirlik turlar",
      km: "{km} km",
      drive: "{min} dk sürüş",
      walk: "{min} dk yürüyüş",
    },
    hubs: {
      kamala: "Kamala'dan",
      boPhut: "Bo Phut'tan",
      maenam: "Maenam'dan",
    },
  },
  de: {
    eyebrow: "Entdecken",
    title: "Sehenswürdigkeiten",
    subtitle:
      "Strände, Tempel, Märkte und Inseln in ganz Thailand — sorgfältig ausgewählte Orte.",
    distance: "Entfernung",
    driveTime: "Fahrzeit",
    walkTime: "Zu Fuß",
    appeal: "Beliebtheit",
    appealScore: "{score}/10",
    viewAll: "Alle Orte →",
    listTitle: "Orte zum Entdecken",
    listSubtitle: "{count} Reiseziele in Thailand",
    category: {
      beach: "Strand",
      temple: "Tempel",
      market: "Markt & Dorf",
      show: "Show & Unterhaltung",
      viewpoint: "Aussichtspunkt",
      nightlife: "Nachtleben",
      nature: "Natur & Tierwelt",
      island: "Insel & Tagesausflug",
    },
    page: {
      back: "Sehenswürdigkeiten",
      gallery: "Fotogalerie",
      about: "Warum besuchen?",
      tips: "Besuchertipps",
      bestFor: "Ideal für",
      navigate: "In Google Maps öffnen",
      fromStay: "Entfernung von dieser Unterkunft",
      nearbyStays: "Unterkünfte in der Nähe",
    },
    proximity: {
      title: "Entfernungen von dieser Unterkunft",
      subtitle: "Fahr- und Gehzeiten zu Stränden, Attraktionen und Tagesausflügen",
      airport: "Flughafen",
      beach: "Strände",
      attraction: "Attraktionen",
      dayTrip: "Tagesausflüge",
      km: "{km} km",
      drive: "{min} Min. Fahrt",
      walk: "{min} Min. zu Fuß",
    },
    hubs: {
      kamala: "von Kamala",
      boPhut: "von Bo Phut",
      maenam: "von Maenam",
    },
  },
  fr: {
    eyebrow: "Explorer",
    title: "Lieux à visiter",
    subtitle:
      "Plages, temples, marchés et îles à travers la Thaïlande — des lieux sélectionnés avec soin.",
    distance: "Distance",
    driveTime: "Temps de trajet",
    walkTime: "À pied",
    appeal: "Attrait",
    appealScore: "{score}/10",
    viewAll: "Tous les lieux →",
    listTitle: "Lieux à découvrir",
    listSubtitle: "{count} destinations en Thaïlande",
    category: {
      beach: "Plage",
      temple: "Temple",
      market: "Marché & village",
      show: "Spectacle & divertissement",
      viewpoint: "Point de vue",
      nightlife: "Vie nocturne",
      nature: "Nature & faune",
      island: "Île & excursion",
    },
    page: {
      back: "Lieux à visiter",
      gallery: "Galerie photo",
      about: "Pourquoi y aller ?",
      tips: "Conseils aux visiteurs",
      bestFor: "Idéal pour",
      navigate: "Ouvrir dans Google Maps",
      fromStay: "Distance depuis ce logement",
      nearbyStays: "Logements à proximité",
    },
    proximity: {
      title: "Distances depuis ce logement",
      subtitle: "Temps de route et de marche vers plages, attractions et excursions",
      airport: "Aéroport",
      beach: "Plages",
      attraction: "Attractions",
      dayTrip: "Excursions",
      km: "{km} km",
      drive: "{min} min en voiture",
      walk: "{min} min à pied",
    },
    hubs: {
      kamala: "depuis Kamala",
      boPhut: "depuis Bo Phut",
      maenam: "depuis Maenam",
    },
  },
  ru: {
    eyebrow: "Исследуйте",
    title: "Места для посещения",
    subtitle:
      "Пляжи, храмы, рынки и острова по всему Таиланду — отобранные достопримечательности.",
    distance: "Расстояние",
    driveTime: "Время в пути",
    walkTime: "Пешком",
    appeal: "Привлекательность",
    appealScore: "{score}/10",
    viewAll: "Все места →",
    listTitle: "Места для открытий",
    listSubtitle: "{count} направлений по Таиланду",
    category: {
      beach: "Пляж",
      temple: "Храм",
      market: "Рынок и деревня",
      show: "Шоу и развлечения",
      viewpoint: "Смотровая площадка",
      nightlife: "Ночная жизнь",
      nature: "Природа и дикая жизнь",
      island: "Остров и однодневная поездка",
    },
    page: {
      back: "Места для посещения",
      gallery: "Фотогалерея",
      about: "Почему стоит посетить?",
      tips: "Советы посетителям",
      bestFor: "Подходит для",
      navigate: "Открыть в Google Maps",
      fromStay: "Расстояние от этого жилья",
      nearbyStays: "Жильё рядом",
    },
    proximity: {
      title: "Расстояния от этого объекта",
      subtitle: "Время в пути и пешком до пляжей, достопримечательностей и экскурсий",
      airport: "Аэропорт",
      beach: "Пляжи",
      attraction: "Достопримечательности",
      dayTrip: "Однодневные поездки",
      km: "{km} км",
      drive: "{min} мин на машине",
      walk: "{min} мин пешком",
    },
    hubs: {
      kamala: "от Камалы",
      boPhut: "от Бо Пхута",
      maenam: "от Маенама",
    },
  },
  th: {
    eyebrow: "สำรวจ",
    title: "สถานที่ท่องเที่ยว",
    subtitle:
      "ชายหาด วัด ตลาด และเกาะทั่วประเทศไทย — สถานที่คัดสรรที่คุ้มค่าแก่การไปเยือน",
    distance: "ระยะทาง",
    driveTime: "เวลาขับรถ",
    walkTime: "เดิน",
    appeal: "ความน่าสนใจ",
    appealScore: "{score}/10",
    viewAll: "สถานที่ทั้งหมด →",
    listTitle: "สถานที่แนะนำ",
    listSubtitle: "{count} แห่งทั่วประเทศไทย",
    category: {
      beach: "ชายหาด",
      temple: "วัด",
      market: "ตลาดและหมู่บ้าน",
      show: "โชว์และบันเทิง",
      viewpoint: "จุดชมวิว",
      nightlife: "ไนท์ไลฟ์",
      nature: "ธรรมชาติและสัตว์ป่า",
      island: "เกาะและทริปวันเดียว",
    },
    page: {
      back: "สถานที่ท่องเที่ยว",
      gallery: "แกลเลอรีภาพ",
      about: "ทำไมต้องไป?",
      tips: "เคล็ดลับผู้เยี่ยมชม",
      bestFor: "เหมาะสำหรับ",
      navigate: "เปิดใน Google Maps",
      fromStay: "ระยะทางจากที่พักนี้",
      nearbyStays: "ที่พักใกล้เคียง",
    },
    proximity: {
      title: "ระยะทางจากที่พักนี้",
      subtitle: "เวลาขับรถและเดินไปชายหาด สถานที่ท่องเที่ยว และทริปวันเดียว",
      airport: "สนามบิน",
      beach: "ชายหาด",
      attraction: "สถานที่ท่องเที่ยว",
      dayTrip: "ทริปวันเดียว",
      km: "{km} กม.",
      drive: "ขับ {min} นาที",
      walk: "เดิน {min} นาที",
    },
    hubs: {
      kamala: "จากกมลา",
      boPhut: "จากโบภูต",
      maenam: "จากแม่น้ำ",
    },
  },
  ar: {
    eyebrow: "استكشف",
    title: "أماكن للزيارة",
    subtitle:
      "شواطئ ومعابد وأسواق وجزر في جميع أنحاء تايلاند — أماكن مختارة تستحق الزيارة.",
    distance: "المسافة",
    driveTime: "وقت القيادة",
    walkTime: "مشياً",
    appeal: "الجاذبية",
    appealScore: "{score}/10",
    viewAll: "جميع الأماكن →",
    listTitle: "أماكن للاستكشاف",
    listSubtitle: "{count} وجهة في تايلاند",
    category: {
      beach: "شاطئ",
      temple: "معبد",
      market: "سوق وقرية",
      show: "عرض وترفيه",
      viewpoint: "نقطة مشاهدة",
      nightlife: "حياة ليلية",
      nature: "طبيعة وحياة برية",
      island: "جزيرة ورحلة يومية",
    },
    page: {
      back: "أماكن للزيارة",
      gallery: "معرض الصور",
      about: "لماذا تزور؟",
      tips: "نصائح للزوار",
      bestFor: "مناسب لـ",
      navigate: "فتح في خرائط Google",
      fromStay: "المسافة من هذا السكن",
      nearbyStays: "إقامات قريبة",
    },
    proximity: {
      title: "المسافات من هذا العقار",
      subtitle: "أوقات القيادة والمشي إلى الشواطئ والمعالم والرحلات اليومية",
      airport: "المطار",
      beach: "الشواطئ",
      attraction: "المعالم",
      dayTrip: "رحلات يومية",
      km: "{km} كم",
      drive: "{min} دقيقة بالسيارة",
      walk: "{min} دقيقة مشياً",
    },
    hubs: {
      kamala: "من كامالا",
      boPhut: "من بو فوت",
      maenam: "من ماينام",
    },
  },
  zh: {
    eyebrow: "探索",
    title: "景点推荐",
    subtitle: "泰国各地的海滩、寺庙、市场和岛屿——精选值得一游的目的地。",
    distance: "距离",
    driveTime: "车程",
    walkTime: "步行",
    appeal: "吸引力",
    appealScore: "{score}/10",
    viewAll: "全部景点 →",
    listTitle: "探索目的地",
    listSubtitle: "泰国共 {count} 个景点",
    category: {
      beach: "海滩",
      temple: "寺庙",
      market: "市场与村落",
      show: "表演与娱乐",
      viewpoint: "观景点",
      nightlife: "夜生活",
      nature: "自然与野生动物",
      island: "岛屿与一日游",
    },
    page: {
      back: "景点推荐",
      gallery: "图片库",
      about: "为什么值得去？",
      tips: "游客贴士",
      bestFor: "适合人群",
      navigate: "在 Google 地图中打开",
      fromStay: "距此住宿的距离",
      nearbyStays: "附近住宿",
    },
    proximity: {
      title: "距此物业的距离",
      subtitle: "到海滩、景点和一日游的驾车与步行时间",
      airport: "机场",
      beach: "海滩",
      attraction: "景点",
      dayTrip: "一日游",
      km: "{km} 公里",
      drive: "驾车 {min} 分钟",
      walk: "步行 {min} 分钟",
    },
    hubs: {
      kamala: "从卡马拉",
      boPhut: "从波普",
      maenam: "从湄南",
    },
  },
};
