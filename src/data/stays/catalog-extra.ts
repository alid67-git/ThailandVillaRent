import type { StayCatalogItem } from "./types";
import { sizeFromRooms } from "./types";
import { STAY_IMAGE_POOL } from "@/data/images";
import { STAY_PROPERTY_TYPES, STAY_REGION_META } from "./region-meta";

const HIGHLIGHT_POOL = [
  ["pool", "garden", "parking", "wifi"],
  ["pool", "beach", "breakfast", "parking"],
  ["privatePool", "oceanfront", "balcony", "spa"],
  ["garden", "bbq", "kitchen", "parking"],
  ["beachfront", "restaurant", "pool", "wifi"],
] as const;

const AMENITY_POOL = [
  ["pool", "wifi", "parking", "garden", "airCon"],
  ["wifi", "parking", "breakfast", "airCon", "luggage"],
  ["privatePool", "spa", "restaurant", "wifi", "airCon"],
  ["pool", "kitchen", "laundry", "wifi", "parking"],
  ["wifi", "parking", "bar", "breakfast", "safe"],
] as const;

function pickImages(index: number): string[] {
  const a = STAY_IMAGE_POOL[index % STAY_IMAGE_POOL.length];
  const b = STAY_IMAGE_POOL[(index + 3) % STAY_IMAGE_POOL.length];
  const c = STAY_IMAGE_POOL[(index + 7) % STAY_IMAGE_POOL.length];
  const d = STAY_IMAGE_POOL[(index + 11) % STAY_IMAGE_POOL.length];
  return [a, b, c, d];
}

function pseudoRating(seed: number): number {
  return Math.round((7.4 + (seed % 23) * 0.1) * 10) / 10;
}

function pseudoPrice(regionIndex: number, rooms: number): number {
  const base = [89, 120, 155, 210, 280, 350, 420, 520][regionIndex % 8];
  return base + rooms * 25;
}

export function buildExtraStays(): StayCatalogItem[] {
  const items: StayCatalogItem[] = [];
  let n = 0;

  STAY_REGION_META.forEach((meta, regionIndex) => {
    for (let i = 0; i < meta.newCount; i++) {
      const type = STAY_PROPERTY_TYPES[n % STAY_PROPERTY_TYPES.length];
      const area = meta.areas[i % meta.areas.length];
      const rooms = 1 + (n % 5);
      const slug = `${type}-${meta.region}-${area.key}-${String(i + 1).padStart(2, "0")}`;
      const images = pickImages(n);
      const hi = HIGHLIGHT_POOL[n % HIGHLIGHT_POOL.length];
      const am = AMENITY_POOL[n % AMENITY_POOL.length];

      items.push({
        id: `gen-${n + 6}`,
        slug,
        region: meta.region,
        areaKey: area.key,
        lat: area.lat + (i % 3) * 0.002,
        lng: area.lng + (i % 3) * 0.002,
        rating: pseudoRating(n),
        starRating: 3 + (n % 3),
        airportKm: meta.airportKmBase + (i % 5) * 3,
        airportDriveMin: 15 + (i % 8) * 5,
        airportKey: meta.airportKey,
        phone: `+66-81${String(1000000 + n).slice(0, 7)}`,
        roomCount: rooms,
        maxGuests: rooms * 2 + 2,
        size: sizeFromRooms(rooms),
        priceFromUsd: pseudoPrice(regionIndex, rooms),
        image: images[0],
        images,
        highlightKeys: [...hi],
        amenityKeys: [...am],
        landmarks: [],
        beaches: [],
        propertyType: type,
      });
      n++;
    }
  });

  return items;
}
