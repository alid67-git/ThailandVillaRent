"use client";

import { useEffect, useRef, useState } from "react";
import { REGIONS } from "@/data/stays/catalog";
import type { StayRegion } from "@/data/stays/types";
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

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  function isChecked(region: StayRegion) {
    return value.length === 0 || value.includes(region);
  }

  function toggle(region: StayRegion) {
    const base = value.length === 0 ? [...REGIONS] : [...value];
    const next = base.includes(region)
      ? base.filter((r) => r !== region)
      : [...base, region];
    if (next.length === 0 || next.length === REGIONS.length) {
      onChange([]);
      return;
    }
    onChange(next);
  }

  function selectAll() {
    onChange([]);
  }

  const label =
    value.length === 0
      ? t("search.allRegions")
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
          <button
            type="button"
            onClick={selectAll}
            className="mb-1 w-full rounded-lg px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-brand-600 hover:bg-brand-50 dark:hover:bg-ink-800"
          >
            {t("search.allRegions")}
          </button>
          {REGIONS.map((region) => (
            <label
              key={region}
              className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-neutral-50 dark:hover:bg-ink-800"
            >
              <input
                type="checkbox"
                checked={isChecked(region)}
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
