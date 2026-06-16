"use client";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLocale } from "@/context/LocaleContext";

export function HomePage() {
  const { t } = useLocale();

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-ink-950 via-brand-900 to-ocean-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(31,143,104,0.25),_transparent_55%)]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-sand-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-ocean-500/15 blur-3xl" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 py-8 sm:px-6">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/20 text-lg">
              🏝️
            </span>
            <span className="font-heading text-sm font-bold tracking-wide sm:text-base">
              Thailand Villa Rent
            </span>
          </div>
          <LanguageSwitcher />
        </header>

        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-400" />
            {t("home.eyebrow")}
          </div>

          <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            {t("home.title")}
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-white/75 sm:text-xl">
            {t("home.subtitle")}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur-sm">
              <span className="text-2xl">🏡</span>
              <div className="text-left">
                <p className="font-semibold">{t("home.villa")}</p>
                <p className="text-sm text-white/60">{t("home.comingSoon")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur-sm">
              <span className="text-2xl">🌴</span>
              <div className="text-left">
                <p className="font-semibold">{t("home.bungalow")}</p>
                <p className="text-sm text-white/60">{t("home.comingSoon")}</p>
              </div>
            </div>
          </div>

          <p className="mt-8 inline-flex items-center rounded-full bg-brand-500/20 px-5 py-2 text-sm font-medium text-brand-200">
            {t("home.cta")}
          </p>

          <p className="mt-8 max-w-lg text-sm leading-relaxed text-white/50">
            {t("home.note")}
          </p>
        </div>

        <footer className="border-t border-white/10 py-6 text-center text-xs text-white/40">
          <p>{t("footer.tagline")}</p>
          <p className="mt-1">{t("footer.copyright")}</p>
        </footer>
      </div>
    </main>
  );
}
