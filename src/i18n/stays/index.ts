import type { Locale } from "@/i18n/config";
import type { ManualStaySlug, StayContent } from "@/data/stays/types";
import type { StayCatalogItem } from "@/data/stays/types";
import { getStayBySlug } from "@/data/stays/catalog";
import en from "./en";
import tr from "./tr";
import de from "./de";
import fr from "./fr";
import ru from "./ru";
import th from "./th";
import ar from "./ar";
import zh from "./zh";
import { buildGeneratedStayContent } from "./generate";

const MANUAL_SLUGS = new Set<string>([
  "bungalow-phuket",
  "family-bungalow-kamala-2br",
  "fantasy-villa-kamala",
  "tango-luxe-beach-villa-koh-samui",
  "moonhut-bungalows-koh-samui",
]);

const manualDictionaries: Record<Locale, Record<ManualStaySlug, StayContent>> = {
  tr, en, de, fr, ru, th, ar, zh,
};

export function getStayContentForItem(locale: Locale, stay: StayCatalogItem): StayContent {
  if (MANUAL_SLUGS.has(stay.slug)) {
    return manualDictionaries[locale][stay.slug as ManualStaySlug];
  }
  return buildGeneratedStayContent(locale, stay);
}

export function getStayContent(locale: Locale, slug: string): StayContent {
  if (MANUAL_SLUGS.has(slug)) {
    return manualDictionaries[locale][slug as ManualStaySlug];
  }
  const stay = getStayBySlug(slug);
  if (!stay) {
    return buildGeneratedStayContent(locale, {
      slug,
      region: "phuket",
      areaKey: "kamala",
      roomCount: 2,
      maxGuests: 4,
      rating: 8,
      propertyType: "villa",
    } as StayCatalogItem);
  }
  return buildGeneratedStayContent(locale, stay);
}
