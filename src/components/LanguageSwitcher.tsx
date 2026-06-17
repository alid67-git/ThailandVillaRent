"use client";

import { useEffect, useRef, useState } from "react";
import { FlagIcon } from "@/components/FlagIcon";
import { localeLabels, locales, type Locale } from "@/i18n/config";
import { useLocale } from "@/context/LocaleContext";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onPointerOutside(e: PointerEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerOutside);
    return () => document.removeEventListener("pointerdown", onPointerOutside);
  }, []);

  function pickLocale(loc: Locale) {
    setLocale(loc);
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/15"
      >
        <FlagIcon locale={locale} />
        <span>{localeLabels[locale]}</span>
        <svg
          viewBox="0 0 12 12"
          className={`h-3.5 w-3.5 shrink-0 opacity-70 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <path d="M2 4l4 4 4-4" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language"
          className="fixed inset-x-3 top-[4.5rem] z-[100] rounded-xl border border-white/10 bg-ink-900/95 p-1.5 shadow-lift-lg backdrop-blur-md sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:mt-2 sm:w-72"
        >
          <div className="grid grid-cols-2 gap-1">
            {locales.map((loc) => (
              <button
                key={loc}
                type="button"
                role="option"
                aria-selected={locale === loc}
                onClick={() => pickLocale(loc)}
                className={`flex min-h-[44px] items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                  locale === loc
                    ? "bg-brand-500/20 font-semibold text-brand-300"
                    : "text-white/80 hover:bg-white/5"
                }`}
              >
                <FlagIcon locale={loc} className="shrink-0" />
                <span className="truncate">{localeLabels[loc]}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
