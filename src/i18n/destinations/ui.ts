import type { Locale } from "@/i18n/config";

export type DestinationSlug =
  | "kamala-beach"
  | "surin-beach"
  | "bang-tao-beach"
  | "patong-beach"
  | "phuket-fantasea"
  | "kamala-market"
  | "big-buddha-phuket"
  | "old-phuket-town"
  | "wat-chalong"
  | "promthep-cape"
  | "phi-phi-day-trip"
  | "bang-pae-elephant"
  | "chaweng-beach"
  | "bo-phut-beach"
  | "fishermans-village"
  | "big-buddha-samui"
  | "wat-plai-laem"
  | "lamai-beach"
  | "maenam-beach"
  | "ang-thong-park"
  | "natien-beach"
  | "railay-beach"
  | "ao-nang-beach"
  | "phra-nang-cave"
  | "tiger-cave-temple"
  | "emerald-pool"
  | "doi-suthep"
  | "old-city-chiang-mai"
  | "sunday-walking-street"
  | "doi-inthanon"
  | "sticky-waterfall"
  | "grand-palace"
  | "wat-arun"
  | "chatuchak-market"
  | "asiatique-riverfront"
  | "walking-street-pattaya"
  | "koh-larn"
  | "sanctuary-of-truth"
  | "jomtien-beach"
  | "haad-rin-beach"
  | "bottle-beach"
  | "than-sadet-waterfall"
  | "sairee-beach"
  | "shark-bay-tao"
  | "pattaya-beach-lipe"
  | "sunrise-beach-lipe"
  | "ayutthaya-historical-park"
  | "wat-mahathat"
  | "pai-canyon"
  | "pam-bok-waterfall"
  | "hua-hin-beach";

export interface DestinationContent {
  name: string;
  description: string;
  bestFor: string;
  tips: string;
}

export type DestinationDictionary = Record<DestinationSlug, DestinationContent>;

export const destinationUi = {
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
} as const;

export type DestinationUiLocale = keyof typeof destinationUi;

export function getDestinationUi(locale: Locale) {
  if (locale in destinationUi) return destinationUi[locale as DestinationUiLocale];
  return destinationUi.en;
}
