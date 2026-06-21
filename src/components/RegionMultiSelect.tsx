"use client";

import { useEffect, useRef, useState } from "react";
import { REGIONS } from "@/data/stays/catalog";
import type { StayRegion } from "@/data/stays/types";
import { ALL_STAY_REGIONS, isAllRegionsSelected } from "@/lib/region-params";
import { useLocale } from "@/context/LocaleContext";

export function RegionMultiSelect({
  value,
  onChange,
  className = "",
}: {
  value: StayRegion[];
  onChange: (regions: StayRegion[]) => void;
  className?: string;
}) {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const allRef = useRef<HTMLInputElement>(null);

  const allSelected = isAllRegionsSelected(value);
  const someSelected = value.length > 0 && !allSelected;

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  useEffect(() => {
    if (allRef.current) {
      allRef.current.indeterminate = someSelected;
    }
  }, [someSelected, open]);

  function toggleAll() {
    if (allSelected) {
      onChange([]);
      return;
    }
    onChange([...ALL_STAY_REGIONS]);
  }

  function toggle(region: StayRegion) {
    if (value.includes(region)) {
      onChange(value.filter((r) => r !== region));
      return;
    }
    onChange([...value, region]);
  }

  const label = allSelected
    ? t("search.allRegions")
    : value.length === 0
      ? t("search.noRegions")
      : value.length <= 2
        ? value.map((r) => t(`regions.${r}`)).join(", ")
        : t("search.regionsSelected", { count: value.length });

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 text-left text-sm font-semibold dark:border-ink-600 dark:bg-ink-800"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="truncate">{label}</span>
        <span className="text-neutral-400">{open ? "▴" : "▾"}</span>
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 z-30 mt-1 max-h-64 overflow-y-auto rounded-xl border border-neutral-200 bg-white p-2 shadow-lift-lg dark:border-ink-600 dark:bg-ink-900"
        >
          <label className="mb-1 flex cursor-pointer items-center gap-2 rounded-lg border-b border-neutral-100 px-3 py-2.5 text-sm font-semibold hover:bg-brand-50 dark:border-ink-700 dark:hover:bg-ink-800">
            <input
              ref={allRef}
              type="checkbox"
              checked={allSelected}
              onChange={toggleAll}
              className="h-4 w-4 rounded border-neutral-300 text-brand-600"
            />
            <span>{t("search.allRegions")}</span>
          </label>
          {REGIONS.map((region) => (
            <label
              key={region}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-ink-800"
            >
              <input
                type="checkbox"
                checked={value.includes(region)}
                onChange={() => toggle(region)}
                className="h-4 w-4 rounded border-neutral-300 text-brand-600"
              />
              <span>{t(`regions.${region}`)}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
