import type { StaySlug } from "@/data/stays/types";
import type { StayProximityEntry } from "@/data/destinations/types";

/** Per-stay distances to beaches, attractions and day trips — from property location */
export const STAY_PROXIMITY: Record<StaySlug, StayProximityEntry[]> = {
  "bungalow-phuket": [
    { destinationSlug: "phuket-fantasea", km: 0.36, driveMin: 2, walkMin: 5 },
    { destinationSlug: "bang-pae-elephant", km: 0.15, driveMin: 2, walkMin: 3 },
    { destinationSlug: "kamala-market", km: 0.41, driveMin: 3, walkMin: 6 },
    { destinationSlug: "kamala-beach", km: 2.5, driveMin: 5 },
    { destinationSlug: "surin-beach", km: 3.8, driveMin: 7 },
    { destinationSlug: "bang-tao-beach", km: 5.4, driveMin: 10 },
    { destinationSlug: "patong-beach", km: 9.8, driveMin: 18 },
    { destinationSlug: "big-buddha-phuket", km: 14, driveMin: 28 },
    { destinationSlug: "wat-chalong", km: 16, driveMin: 30 },
    { destinationSlug: "old-phuket-town", km: 22, driveMin: 35 },
    { destinationSlug: "promthep-cape", km: 28, driveMin: 50 },
    { destinationSlug: "phi-phi-day-trip", km: 45, driveMin: 75 },
  ],
  "family-bungalow-kamala-2br": [
    { destinationSlug: "bang-pae-elephant", km: 0.37, driveMin: 2, walkMin: 5 },
    { destinationSlug: "kamala-market", km: 0.59, driveMin: 3, walkMin: 8 },
    { destinationSlug: "phuket-fantasea", km: 0.8, driveMin: 3 },
    { destinationSlug: "kamala-beach", km: 2.8, driveMin: 6 },
    { destinationSlug: "surin-beach", km: 4.0, driveMin: 8 },
    { destinationSlug: "bang-tao-beach", km: 5.8, driveMin: 11 },
    { destinationSlug: "patong-beach", km: 10.2, driveMin: 20 },
    { destinationSlug: "big-buddha-phuket", km: 14.5, driveMin: 30 },
    { destinationSlug: "wat-chalong", km: 16.5, driveMin: 32 },
    { destinationSlug: "old-phuket-town", km: 23, driveMin: 38 },
    { destinationSlug: "promthep-cape", km: 29, driveMin: 52 },
  ],
  "fantasy-villa-kamala": [
    { destinationSlug: "bang-pae-elephant", km: 0.15, driveMin: 2, walkMin: 2 },
    { destinationSlug: "kamala-market", km: 0.4, driveMin: 2, walkMin: 5 },
    { destinationSlug: "phuket-fantasea", km: 0.36, driveMin: 2, walkMin: 5 },
    { destinationSlug: "kamala-beach", km: 0.8, driveMin: 3 },
    { destinationSlug: "surin-beach", km: 3.5, driveMin: 7 },
    { destinationSlug: "bang-tao-beach", km: 5.0, driveMin: 9 },
    { destinationSlug: "patong-beach", km: 8.5, driveMin: 16 },
    { destinationSlug: "big-buddha-phuket", km: 13, driveMin: 26 },
    { destinationSlug: "wat-chalong", km: 15, driveMin: 28 },
    { destinationSlug: "old-phuket-town", km: 21, driveMin: 34 },
    { destinationSlug: "promthep-cape", km: 27, driveMin: 48 },
  ],
  "tango-luxe-beach-villa-koh-samui": [
    { destinationSlug: "wat-plai-laem", km: 0.26, driveMin: 2, walkMin: 4 },
    { destinationSlug: "big-buddha-samui", km: 0.9, driveMin: 4, walkMin: 12 },
    { destinationSlug: "bo-phut-beach", km: 0.3, driveMin: 2 },
    { destinationSlug: "fishermans-village", km: 0.8, driveMin: 4 },
    { destinationSlug: "chaweng-beach", km: 4.2, driveMin: 12 },
    { destinationSlug: "lamai-beach", km: 12, driveMin: 25 },
    { destinationSlug: "maenam-beach", km: 6.5, driveMin: 15 },
    { destinationSlug: "natien-beach", km: 16, driveMin: 32 },
    { destinationSlug: "ang-thong-park", km: 35, driveMin: 60 },
  ],
  "moonhut-bungalows-koh-samui": [
    { destinationSlug: "maenam-beach", km: 0.2, driveMin: 2, walkMin: 3 },
    { destinationSlug: "bo-phut-beach", km: 0.5, driveMin: 3 },
    { destinationSlug: "fishermans-village", km: 0.6, driveMin: 3, walkMin: 8 },
    { destinationSlug: "chaweng-beach", km: 9.8, driveMin: 22 },
    { destinationSlug: "big-buddha-samui", km: 5.5, driveMin: 14 },
    { destinationSlug: "wat-plai-laem", km: 5.2, driveMin: 13 },
    { destinationSlug: "lamai-beach", km: 14, driveMin: 28 },
    { destinationSlug: "natien-beach", km: 8, driveMin: 18 },
    { destinationSlug: "ang-thong-park", km: 38, driveMin: 65 },
  ],
};

export function getProximityForStay(slug: StaySlug) {
  return STAY_PROXIMITY[slug] ?? [];
}
