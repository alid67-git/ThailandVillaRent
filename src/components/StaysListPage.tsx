"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { STAY_CATALOG } from "@/data/stays/catalog";
import { StayCard } from "@/components/StayCard";
import { StayFilters, type StayFiltersState } from "@/components/StayFilters";
import { useSearchModal } from "@/context/SearchModalContext";
import { useLocale } from "@/context/LocaleContext";
import type { StayRegion } from "@/data/stays/types";

export function StaysListPage() {
  const { t } = useLocale();
  const { openSearch } = useSearchModal();
  const searchParams = useSearchParams();
  const regionParam = (searchParams.get("region") as StayRegion) || "phuket";
  const areaParam = searchParams.get("area") ?? "";
  const guestsParam = Number(searchParams.get("guests") ?? 0);

  const [region, setRegion] = useState<StayRegion | "all">(
    regionParam === "phuket" || regionParam === "koh-samui" ? regionParam : "all",
  );
  const [filters, setFilters] = useState<StayFiltersState>({
    priceMax: 9999,
    minRating: 0,
    size: "all",
    sort: "rating",
  });

  const results = useMemo(() => {
    let list = [...STAY_CATALOG];
    if (region !== "all") list = list.filter((s) => s.region === region);
    if (areaParam) list = list.filter((s) => s.areaKey === areaParam);
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
  }, [region, areaParam, guestsParam, filters]);

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-ink-950">
      <section className="bg-gradient-to-br from-ink-950 via-brand-900 to-ocean-900 px-4 py-10 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-heading text-3xl font-extrabold">{t("stays.title")}</h1>
          <p className="mt-2 text-white/75">{t("stays.subtitle")}</p>
          <button
            type="button"
            onClick={openSearch}
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/15"
          >
            🔍 {t("search.title")}
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-6 flex flex-wrap gap-2">
          {(["all", "phuket", "koh-samui"] as const).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRegion(r)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                region === r
                  ? "bg-brand-600 text-white"
                  : "bg-white text-neutral-600 ring-1 ring-neutral-200 dark:bg-ink-800 dark:text-neutral-300 dark:ring-ink-600"
              }`}
            >
              {r === "all" ? t("filters.allRegions") : t(`regions.${r}`)}
            </button>
          ))}
        </div>

        <StayFilters value={filters} onChange={setFilters} />

        <p className="mt-6 text-sm text-neutral-500">
          {t("stays.results", { count: results.length })}
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
