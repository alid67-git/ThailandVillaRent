"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { RegionMultiSelect } from "@/components/RegionMultiSelect";
import { buildRegionsQuery, ALL_STAY_REGIONS } from "@/lib/region-params";
import type { StayRegion } from "@/data/stays/types";

export function SearchBar({
  compact = false,
  onSubmitted,
}: {
  compact?: boolean;
  onSubmitted?: () => void;
}) {
  const { t } = useLocale();
  const router = useRouter();
  const [regions, setRegions] = useState<StayRegion[]>([...ALL_STAY_REGIONS]);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    const regionQuery = buildRegionsQuery(regions);
    if (regionQuery) {
      const q = new URLSearchParams(regionQuery);
      q.forEach((v, k) => params.set(k, v));
    }
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    params.set("guests", String(guests));
    const qs = params.toString();
    router.push(qs ? `/stays?${qs}` : "/stays");
    onSubmitted?.();
  }

  return (
    <form
      onSubmit={onSearch}
      className={`rounded-2xl bg-white p-4 shadow-lift-lg dark:bg-ink-900 ${
        compact ? "" : "border border-neutral-200 dark:border-ink-700"
      }`}
    >
      <div className={`grid gap-3 ${compact ? "sm:grid-cols-2 lg:grid-cols-5" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
        <div className={compact ? "sm:col-span-2 lg:col-span-2" : "sm:col-span-2"}>
          <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
            {t("search.pickRegions")}
          </label>
          <RegionMultiSelect value={regions} onChange={setRegions} className="mt-1" />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
            {t("search.checkIn")}
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm dark:border-ink-600 dark:bg-ink-800"
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
            {t("search.checkOut")}
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm dark:border-ink-600 dark:bg-ink-800"
          />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
            {t("search.guests")}
          </label>
          <input
            type="number"
            min={1}
            max={20}
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm dark:border-ink-600 dark:bg-ink-800"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-xl bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-500 sm:w-auto"
      >
        {t("search.submit")}
      </button>
    </form>
  );
}
