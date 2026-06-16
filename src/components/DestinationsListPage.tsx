"use client";

import { DESTINATION_SPOTS } from "@/data/destinations/catalog";
import { DestinationCard } from "@/components/DestinationCard";
import { useLocale } from "@/context/LocaleContext";
import { getDestinationUi } from "@/i18n/destinations/ui";

export function DestinationsListPage() {
  const { locale } = useLocale();
  const ui = getDestinationUi(locale);
  const phuket = DESTINATION_SPOTS.filter((d) => d.region === "phuket").sort(
    (a, b) => b.appeal - a.appeal,
  );
  const samui = DESTINATION_SPOTS.filter((d) => d.region === "koh-samui").sort(
    (a, b) => b.appeal - a.appeal,
  );

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-ink-950">
      <section className="bg-gradient-to-br from-ink-950 via-brand-900 to-ocean-900 px-4 py-12 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-200">
            {ui.eyebrow}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold sm:text-4xl">{ui.title}</h1>
          <p className="mt-3 max-w-2xl text-lg text-white/75">{ui.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="font-heading text-xl font-bold text-ink-950 dark:text-white">Phuket</h2>
        <p className="mt-1 text-sm text-neutral-500">
          {ui.listSubtitle.replace("{count}", String(phuket.length))}
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {phuket.map((spot) => (
            <DestinationCard key={spot.slug} spot={spot} />
          ))}
        </div>

        <h2 className="mt-14 font-heading text-xl font-bold text-ink-950 dark:text-white">
          Koh Samui
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {samui.map((spot) => (
            <DestinationCard key={spot.slug} spot={spot} />
          ))}
        </div>
      </section>
    </main>
  );
}
