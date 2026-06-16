export type DestinationRegion =
  | "phuket"
  | "koh-samui"
  | "krabi"
  | "chiang-mai"
  | "bangkok"
  | "pattaya"
  | "koh-phangan"
  | "koh-tao"
  | "koh-lipe"
  | "ayutthaya"
  | "pai"
  | "hua-hin";

export const DESTINATION_REGIONS = [
  "phuket",
  "koh-samui",
  "krabi",
  "chiang-mai",
  "bangkok",
  "pattaya",
  "koh-phangan",
  "koh-tao",
  "koh-lipe",
  "ayutthaya",
  "pai",
  "hua-hin",
] as const satisfies readonly DestinationRegion[];

export type DestinationCategory =
  | "beach"
  | "temple"
  | "market"
  | "show"
  | "viewpoint"
  | "nightlife"
  | "nature"
  | "island";

export interface DestinationSpot {
  id: string;
  slug: string;
  region: DestinationRegion;
  category: DestinationCategory;
  appeal: number;
  lat: number;
  lng: number;
  image: string;
  images: string[];
  gradient: string;
}

export interface StayProximityEntry {
  destinationSlug: string;
  km: number;
  driveMin: number;
  walkMin?: number;
}
