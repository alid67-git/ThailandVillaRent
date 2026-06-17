"use client";

import { DESTINATION_SPOTS, getDestinationRegionsWithSpots } from "@/data/destinations/catalog";
import type { DestinationRegion } from "@/data/destinations/types";
import { DestinationCard } from "@/components/DestinationCard";
import { useLocale } from "@/context/LocaleContext";
import { getDestinationUi } from "@/i18n/destinations/ui";

export function DestinationsListPage() {
  const { locale, t } = useLocale();
  const ui = getDestinationUi(locale);
  const regions = getDestinationRegionsWithSpots();

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-ink-950">
      <section className="bg-gradient-to-br from-ink-950 via-brand-900 to-ocean-900 px-4 py-12 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
            {ui.eyebrow}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">{ui.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/75">{ui.subtitle}</p>
          <p className="mt-2 text-sm text-white/60">
            {ui.listSubtitle.replace("{count}", String(DESTINATION_SPOTS.length))}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-14 px-4 py-10 sm:px-6">
        {regions.map((region) => {
          const spots = DESTINATION_SPOTS.filter((d) => d.region === region).sort(
            (a, b) => b.appeal - a.appeal,
          );
          return (
            <div key={region}>
              <h2 className="font-heading text-xl font-bold text-ink-950 dark:text-white">
                {t(`regions.${region}` as `regions.${DestinationRegion}`)}
              </h2>
              <p className="mt-1 text-sm text-neutral-500">
                {ui.listSubtitle.replace("{count}", String(spots.length))}
              </p>
              <div className="mt-6 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {spots.map((spot) => (
                  <div
                    key={spot.slug}
                    className="w-[min(100%,300px)] shrink-0 snap-center sm:w-80"
                  >
                    <DestinationCard spot={spot} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
