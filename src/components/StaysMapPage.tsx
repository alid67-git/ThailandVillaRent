"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { STAY_CATALOG } from "@/data/stays/catalog";
import type { StayRegion } from "@/data/stays/types";
import { RegionMultiSelect } from "@/components/RegionMultiSelect";
import { useLocale } from "@/context/LocaleContext";
import { parseRegionsParam, ALL_STAY_REGIONS, isAllRegionsSelected } from "@/lib/region-params";
import { getStayContentForItem } from "@/i18n/stays";

const StaysMapInner = dynamic(
  () => import("@/components/StaysMapInner").then((m) => m.StaysMapInner),
  { ssr: false, loading: () => <div className="h-full animate-pulse rounded-2xl bg-neutral-200 dark:bg-ink-800" /> },
);

export function StaysMapPage() {
  const { locale, t } = useLocale();
  const searchParams = useSearchParams();
  const initialRegions = parseRegionsParam(searchParams);
  const [regions, setRegions] = useState<StayRegion[]>(
    initialRegions === "all" ? [...ALL_STAY_REGIONS] : initialRegions,
  );

  const highlightRegions: StayRegion[] | "all" = isAllRegionsSelected(regions) ? "all" : regions;

  const sidebarStays = useMemo(() => {
    if (isAllRegionsSelected(regions)) return STAY_CATALOG;
    return STAY_CATALOG.filter((s) => regions.includes(s.region));
  }, [regions]);

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-ink-950">
      <section className="bg-gradient-to-br from-ink-950 via-brand-900 to-ocean-900 px-4 py-8 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-200">
            {t("home.focusTag")}
          </p>
          <h1 className="mt-2 font-heading text-3xl font-extrabold">{t("map.title")}</h1>
          <p className="mt-2 max-w-2xl text-white/75">{t("map.subtitle")}</p>
          <p className="mt-3 text-sm text-white/60">{t("map.filterHint")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="mb-4 flex flex-wrap items-end gap-4">
          <div className="min-w-[220px] flex-1 sm:max-w-xs">
            <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
              {t("filters.regions")}
            </label>
            <RegionMultiSelect value={regions} onChange={setRegions} className="mt-1" />
          </div>
          <p className="text-sm text-neutral-500">
            {t("map.allStays", { count: STAY_CATALOG.length })}
            {highlightRegions !== "all" && (
              <span> · {t("stays.results", { count: sidebarStays.length })}</span>
            )}
          </p>
          <Link
            href="/stays"
            className="ml-auto text-sm font-semibold text-brand-600 hover:underline"
          >
            {t("nav.stays")} →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="h-[min(70vh,640px)] min-h-[420px] overflow-hidden rounded-2xl border border-neutral-200 shadow-lift dark:border-ink-700">
            <StaysMapInner stays={STAY_CATALOG} highlightRegions={highlightRegions} />
          </div>

          <aside className="max-h-[min(70vh,640px)] overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-3 dark:border-ink-700 dark:bg-ink-900">
            <div className="space-y-2">
              {sidebarStays.map((stay) => {
                const content = getStayContentForItem(locale, stay);
                return (
                  <Link
                    key={stay.slug}
                    href={`/stays/${stay.slug}`}
                    className="block rounded-xl border border-neutral-100 p-3 transition hover:border-brand-300 hover:bg-brand-50/50 dark:border-ink-700 dark:hover:bg-ink-800"
                  >
                    <p className="text-[10px] font-bold uppercase text-brand-600">
                      {t(`regions.${stay.region}`)}
                    </p>
                    <p className="mt-0.5 text-sm font-bold leading-snug">{content.name}</p>
                    <p className="mt-1 text-sm font-semibold text-brand-700">
                      {t("stays.fromPrice", { price: stay.priceFromUsd })}
                    </p>
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
