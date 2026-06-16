import type { Locale } from "@/i18n/config";
import { destinationUiStrings } from "./uiStrings";

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

export function getDestinationUi(locale: Locale) {
  return destinationUiStrings[locale];
}
