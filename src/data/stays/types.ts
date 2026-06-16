export type StayRegion = "phuket" | "koh-samui";

export type StaySize = "compact" | "family" | "large";

export interface StayLandmarkRef {
  id: string;
  meters: number;
}

export interface StayBeachRef {
  id: string;
  km: number;
  driveMin: number;
}

export interface StayCatalogItem {
  id: string;
  slug: string;
  region: StayRegion;
  areaKey: string;
  lat: number;
  lng: number;
  rating: number;
  starRating: number;
  airportKm: number;
  airportDriveMin: number;
  airportKey: string;
  phone: string;
  email?: string;
  roomCount: number;
  maxGuests: number;
  size: StaySize;
  opened?: number;
  renovated?: number;
  priceFromUsd: number;
  image: string;
  images: string[];
  highlightKeys: string[];
  amenityKeys: string[];
  landmarks: StayLandmarkRef[];
  beaches: StayBeachRef[];
}

export interface StayRoomContent {
  name: string;
  beds: string;
  size?: string;
  features: string[];
}

export interface StayFaqItem {
  q: string;
  a: string;
}

export interface StayPolicyContent {
  checkIn: string;
  checkOut: string;
  children: string;
  cribs: string;
  breakfast: string;
  deposit: string;
  pets: string;
  age: string;
  payment?: string;
  quietHours?: string;
}

export interface StayContent {
  name: string;
  localName: string;
  tagline: string;
  description: string;
  longDescription: string;
  address: string;
  ratingLabel: string;
  rooms: StayRoomContent[];
  amenitiesPopular: string[];
  amenitiesAll: string[];
  policies: StayPolicyContent;
  faq: StayFaqItem[];
  landmarks: Record<string, string>;
  beaches: Record<string, string>;
  areas: Record<string, string>;
  highlights: Record<string, string>;
  amenities: Record<string, string>;
}

export type StaySlug =
  | "bungalow-phuket"
  | "family-bungalow-kamala-2br"
  | "fantasy-villa-kamala"
  | "tango-luxe-beach-villa-koh-samui"
  | "moonhut-bungalows-koh-samui";

export function sizeFromRooms(roomCount: number): StaySize {
  if (roomCount <= 2) return "compact";
  if (roomCount <= 5) return "family";
  return "large";
}
