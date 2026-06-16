"use client";

import Link from "next/link";
import { STAY_CATALOG } from "@/data/stays/catalog";
import { StayCard } from "@/components/StayCard";
import { DESTINATION_SPOTS } from "@/data/destinations/catalog";
import { DestinationCard } from "@/components/DestinationCard";
import { useLocale } from "@/context/LocaleContext";
import { getDestinationUi } from "@/i18n/destinations/ui";

export function HomePage() {
  const { locale, t } = useLocale();
  const ui = getDestinationUi(locale);
  const featured = STAY_CATALOG.slice(0, 3);
  const topDestinations = [...DESTINATION_SPOTS]
    .sort((a, b) => b.appeal - a.appeal)
    .slice(0, 6);

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-ink-950 via-brand-900 to-ocean-900 px-4 py-16 text-white sm:px-6 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(124,58,237,0.30),_transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
            {t("home.eyebrow")}
          </p>
          <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            {t("home.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/75 sm:text-xl">{t("home.subtitle")}</p>
          <Link
            href="/stays"
            className="mt-8 inline-flex rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-400"
          >
            {t("home.cta")}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold text-ink-950 dark:text-white">
              {t("home.featured")}
            </h2>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">{t("home.featuredHint")}</p>
          </div>
          <Link
            href="/stays"
            className="text-sm font-semibold text-brand-600 hover:text-brand-500"
          >
            {t("home.viewAll")} →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((stay) => (
            <StayCard key={stay.slug} stay={stay} />
          ))}
        </div>
      </section>

      <section className="bg-neutral-100 px-4 py-12 dark:bg-ink-900 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-bold text-ink-950 dark:text-white">
                {ui.title}
              </h2>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">{ui.subtitle}</p>
            </div>
            <Link
              href="/destinations"
              className="text-sm font-semibold text-brand-600 hover:text-brand-500"
            >
              {ui.viewAll}
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topDestinations.map((spot) => (
              <DestinationCard key={spot.slug} spot={spot} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
