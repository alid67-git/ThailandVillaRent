"use client";

import { useLocale } from "@/context/LocaleContext";
import type { StaySize } from "@/data/stays/types";

export interface StayFiltersState {
  priceMax: number;
  minRating: number;
  size: StaySize | "all";
  sort: "price-asc" | "price-desc" | "rating";
}

interface StayFiltersProps {
  value: StayFiltersState;
  onChange: (next: StayFiltersState) => void;
}

export function StayFilters({ value, onChange }: StayFiltersProps) {
  const { t } = useLocale();

  return (
    <div className="flex flex-wrap items-end gap-4 rounded-2xl border border-neutral-200 bg-white p-4 dark:border-ink-700 dark:bg-ink-900">
      <div>
        <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
          {t("filters.priceMax")}
        </label>
        <select
          value={value.priceMax}
          onChange={(e) => onChange({ ...value, priceMax: Number(e.target.value) })}
          className="mt-1 block rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm dark:border-ink-600 dark:bg-ink-800"
        >
          <option value={9999}>{t("filters.anyPrice")}</option>
          <option value={100}>$100</option>
          <option value={200}>$200</option>
          <option value={400}>$400</option>
          <option value={600}>$600</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
          {t("filters.size")}
        </label>
        <select
          value={value.size}
          onChange={(e) => onChange({ ...value, size: e.target.value as StayFiltersState["size"] })}
          className="mt-1 block rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm dark:border-ink-600 dark:bg-ink-800"
        >
          <option value="all">{t("filters.anySize")}</option>
          <option value="compact">{t("filters.sizeCompact")}</option>
          <option value="family">{t("filters.sizeFamily")}</option>
          <option value="large">{t("filters.sizeLarge")}</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
          {t("filters.minRating")}
        </label>
        <select
          value={value.minRating}
          onChange={(e) => onChange({ ...value, minRating: Number(e.target.value) })}
          className="mt-1 block rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm dark:border-ink-600 dark:bg-ink-800"
        >
          <option value={0}>{t("filters.anyRating")}</option>
          <option value={7}>7+</option>
          <option value={8}>8+</option>
          <option value={9}>9+</option>
        </select>
      </div>
      <div>
        <label className="text-xs font-bold uppercase tracking-wide text-neutral-500">
          {t("filters.sort")}
        </label>
        <select
          value={value.sort}
          onChange={(e) => onChange({ ...value, sort: e.target.value as StayFiltersState["sort"] })}
          className="mt-1 block rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm dark:border-ink-600 dark:bg-ink-800"
        >
          <option value="rating">{t("filters.sortRating")}</option>
          <option value="price-asc">{t("filters.sortPriceAsc")}</option>
          <option value="price-desc">{t("filters.sortPriceDesc")}</option>
        </select>
      </div>
    </div>
  );
}
