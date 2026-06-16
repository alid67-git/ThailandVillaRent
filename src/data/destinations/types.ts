import type { StayRegion } from "@/data/stays/types";

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
  region: StayRegion;
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
