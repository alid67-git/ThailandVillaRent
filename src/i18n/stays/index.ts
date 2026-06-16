import type { Locale } from "@/i18n/config";
import type { StaySlug } from "@/data/stays/types";
import type { StayContent } from "@/data/stays/types";
import en from "./en";
import tr from "./tr";
import de from "./de";
import fr from "./fr";
import ru from "./ru";
import th from "./th";
import ar from "./ar";
import zh from "./zh";

export const stayDictionaries: Record<Locale, Record<StaySlug, StayContent>> = {
  tr, en, de, fr, ru, th, ar, zh,
};

export function getStayContent(locale: Locale, slug: StaySlug): StayContent {
  return stayDictionaries[locale][slug];
}
