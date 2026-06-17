"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { useLocale } from "@/context/LocaleContext";

interface SearchModalContextValue {
  open: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

const SearchModalContext = createContext<SearchModalContextValue | null>(null);

export function SearchModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();

  const openSearch = useCallback(() => setOpen(true), []);
  const closeSearch = useCallback(() => setOpen(false), []);

  return (
    <SearchModalContext.Provider value={{ open, openSearch, closeSearch }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-20 backdrop-blur-sm sm:pt-28"
          role="dialog"
          aria-modal="true"
          aria-label={t("search.title")}
          onClick={closeSearch}
          onKeyDown={(e) => e.key === "Escape" && closeSearch()}
        >
          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={undefined}
          >
            <div className="mb-3 flex items-center justify-between text-white">
              <p className="font-heading text-lg font-bold">{t("search.title")}</p>
              <button
                type="button"
                onClick={closeSearch}
                className="rounded-lg px-3 py-1 text-sm hover:bg-white/10"
                aria-label={t("search.close")}
              >
                ✕
              </button>
            </div>
            <SearchBar onSubmitted={closeSearch} />
          </div>
        </div>
      )}
    </SearchModalContext.Provider>
  );
}

export function useSearchModal() {
  const ctx = useContext(SearchModalContext);
  if (!ctx) throw new Error("useSearchModal must be used within SearchModalProvider");
  return ctx;
}
