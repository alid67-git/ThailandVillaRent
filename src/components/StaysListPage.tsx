"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { STAY_CATALOG } from "@/data/stays/catalog";
import { StayCard } from "@/components/StayCard";
import { StayFilters, type StayFiltersState } from "@/components/StayFilters";
import { RegionMultiSelect } from "@/components/RegionMultiSelect";
import { useSearchModal } from "@/context/SearchModalContext";
import { useLocale } from "@/context/LocaleContext";
import type { StayRegion } from "@/data/stays/types";
import { parseRegionsParam, ALL_STAY_REGIONS } from "@/lib/region-params";

export function StaysListPage() {
  const { t } = useLocale();
  const { openSearch } = useSearchModal();
  const searchParams = useSearchParams();
  const initialRegions = parseRegionsParam(searchParams);
  const guestsParam = Number(searchParams.get("guests") ?? 0);

  const [regions, setRegions] = useState<StayRegion[]>(() =>
    initialRegions === "all" ? [...ALL_STAY_REGIONS] : initialRegions,
  );
  const [filters, setFilters] = useState<StayFiltersState>({
    priceMax: 9999,
    minRating: 0,
    size: "all",
    sort: "rating",
  });

  const results = useMemo(() => {
    let list = [...STAY_CATALOG];
    if (regions.length > 0) list = list.filter((s) => regions.includes(s.region));
    if (guestsParam > 0) list = list.filter((s) => s.maxGuests >= guestsParam);
    if (filters.priceMax < 9999) list = list.filter((s) => s.priceFromUsd <= filters.priceMax);
    if (filters.minRating > 0) list = list.filter((s) => s.rating >= filters.minRating);
    if (filters.size !== "all") list = list.filter((s) => s.size === filters.size);

    list.sort((a, b) => {
      if (filters.sort === "price-asc") return a.priceFromUsd - b.priceFromUsd;
      if (filters.sort === "price-desc") return b.priceFromUsd - a.priceFromUsd;
      return b.rating - a.rating;
    });
    return list;
  }, [regions, guestsParam, filters]);

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-ink-950">
      <section className="bg-gradient-to-br from-ink-950 via-brand-900 to-ocean-900 px-4 py-10 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-200">
            {t("home.focusTag")}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold">{t("stays.title")}</h1>
          <p className="mt-2 text-white/75">{t("stays.subtitle")}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openSearch}
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/15"
            >
              🔍 {t("search.title")}
            </button>
            <Link
              href="/map"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/15"
            >
              🗺️ {t("nav.map")}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 max-w-md">
          <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
            {t("filters.regions")}
          </label>
          <RegionMultiSelect value={regions} onChange={setRegions} className="mt-1" />
        </div>

        <StayFilters value={filters} onChange={setFilters} />

        <p className="mt-6 text-sm text-neutral-500">
          {t("stays.results", { count: results.length })}
        </p>

        <div className="mt-6 flex flex-col gap-6">
          {results.map((stay) => (
            <StayCard key={stay.slug} stay={stay} />
          ))}
        </div>

        {results.length === 0 && (
          <p className="mt-12 text-center text-neutral-500">{t("stays.noResults")}</p>
        )}
      </section>
    </main>
  );
}
