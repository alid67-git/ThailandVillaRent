"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { AREAS_BY_REGION } from "@/data/stays/catalog";

export function SearchBar({ compact = false }: { compact?: boolean }) {
  const { t } = useLocale();
  const router = useRouter();
  const [region, setRegion] = useState<"phuket" | "koh-samui">("phuket");
  const [area, setArea] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  const areas = AREAS_BY_REGION[region] ?? [];

  function onSearch(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set("region", region);
    if (area) params.set("area", area);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    params.set("guests", String(guests));
    router.push(`/stays?${params.toString()}`);
  }

  return (
    <form
      onSubmit={onSearch}
      className={`rounded-2xl bg-white p-4 shadow-lift-lg dark:bg-ink-900 ${
        compact ? "" : "border border-neutral-200 dark:border-ink-700"
      }`}
    >
      <div className={`grid gap-3 ${compact ? "sm:grid-cols-2 lg:grid-cols-6" : "sm:grid-cols-2 lg:grid-cols-5"}`}>
        <div className={compact ? "lg:col-span-2" : "sm:col-span-2"}>
          <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
            {t("search.destination")}
          </label>
          <select
            value={region}
            onChange={(e) => {
              setRegion(e.target.value as "phuket" | "koh-samui");
              setArea("");
            }}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm font-semibold dark:border-ink-600 dark:bg-ink-800"
            required
          >
            <option value="phuket">{t("regions.phuket")}</option>
            <option value="koh-samui">{t("regions.koh-samui")}</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
            {t("search.area")}
          </label>
          <select
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="mt-1 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-sm dark:border-ink-600 dark:bg-ink-800"
          >
            <option value="">{t("search.allAreas")}</option>
            {areas.map((a) => (
              <option key={a} value={a}>
                {t(`areas.${a}` as "areas.kamala")}
              </option>
            ))}
          </select>
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
