import type { Locale } from "@/i18n/config";
import type { DestinationDictionary } from "./ui";
import en from "./en";
import tr from "./tr";
import de from "./de";
import fr from "./fr";
import ru from "./ru";
import th from "./th";
import ar from "./ar";
import zh from "./zh";

export const destinationDictionaries: Record<Locale, DestinationDictionary> = {
  en,
  tr,
  de,
  fr,
  ru,
  th,
  ar,
  zh,
};

export function getDestinationContent(locale: Locale, slug: keyof DestinationDictionary) {
  return destinationDictionaries[locale][slug];
}

export type { DestinationDictionary, DestinationSlug } from "./ui";
