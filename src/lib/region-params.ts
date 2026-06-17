import { REGIONS } from "@/data/stays/catalog";
import type { StayRegion } from "@/data/stays/types";

export function parseRegionsParam(params: URLSearchParams): StayRegion[] | "all" {
  const multi = params.get("regions");
  if (multi) {
    const parsed = multi
      .split(",")
      .map((r) => r.trim())
      .filter((r): r is StayRegion => (REGIONS as readonly string[]).includes(r));
    if (parsed.length > 0) return parsed;
  }
  const single = params.get("region");
  if (single && (REGIONS as readonly string[]).includes(single)) {
    return [single as StayRegion];
  }
  return "all";
}

export function buildRegionsQuery(regions: StayRegion[]): string {
  if (regions.length === 0 || regions.length >= REGIONS.length) return "";
  return `regions=${encodeURIComponent(regions.join(","))}`;
}
