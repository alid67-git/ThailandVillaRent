"use client";

import Link from "next/link";
import type { StayCatalogItem } from "@/data/stays/types";
import type { StaySlug } from "@/data/stays/types";
import { getDestinationBySlug } from "@/data/destinations/catalog";
import { getProximityForStay } from "@/data/stays/proximity";
import { useLocale } from "@/context/LocaleContext";
import { getDestinationContent } from "@/i18n/destinations";
import type { DestinationSlug } from "@/i18n/destinations";
import { getDestinationUi } from "@/i18n/destinations/ui";

export function StayProximitySection({ stay }: { stay: StayCatalogItem }) {
  const { locale, t } = useLocale();
  const ui = getDestinationUi(locale);
  const entries = getProximityForStay(stay.slug as StaySlug);

  const airportLabel =
    stay.airportKey === "hkt" ? t("airports.hkt") : t("airports.usm");

  const beaches = entries.filter((e) => {
    const d = getDestinationBySlug(e.destinationSlug);
    return d?.category === "beach";
  });
  const attractions = entries.filter((e) => {
    const d = getDestinationBySlug(e.destinationSlug);
    return d && ["temple", "market", "show", "viewpoint", "nature"].includes(d.category);
  });
  const dayTrips = entries.filter((e) => {
    const d = getDestinationBySlug(e.destinationSlug);
    return d?.category === "island";
  });

  function Row({
    destinationSlug,
    km,
    driveMin,
    walkMin,
  }: {
    destinationSlug: string;
    km: number;
    driveMin: number;
    walkMin?: number;
  }) {
    const content = getDestinationContent(locale, destinationSlug as DestinationSlug);
    return (
      <Link
        href={`/destinations/${destinationSlug}`}
        className="flex items-center justify-between gap-3 rounded-xl border border-neutral-100 px-4 py-3 transition hover:border-brand-200 hover:bg-brand-50/50 dark:border-ink-700 dark:hover:bg-brand-500/5"
      >
        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-ink-950 dark:text-white">{content.name}</p>
          <p className="mt-0.5 text-xs text-neutral-500">
            {ui.proximity.km.replace("{km}", String(km))}
            {" · "}
            {ui.proximity.drive.replace("{min}", String(driveMin))}
            {walkMin
              ? ` · ${ui.proximity.walk.replace("{min}", String(walkMin))}`
              : ""}
          </p>
        </div>
        <span className="shrink-0 text-sm text-brand-600">→</span>
      </Link>
    );
  }

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
      <h2 className="font-heading text-xl font-bold">{ui.proximity.title}</h2>
      <p className="mt-1 text-sm text-neutral-500">{ui.proximity.subtitle}</p>

      <div className="mt-6 rounded-xl bg-neutral-50 p-4 dark:bg-ink-800/50">
        <p className="text-xs font-bold uppercase tracking-wide text-neutral-400">
          ✈️ {ui.proximity.airport}
        </p>
        <p className="mt-1 font-semibold text-ink-950 dark:text-white">
          {airportLabel} — {stay.airportKm} km ({stay.airportDriveMin} {t("detail.min")})
        </p>
      </div>

      {beaches.length > 0 && (
        <div className="mt-6">
          <p className="mb-2 text-sm font-bold text-brand-700 dark:text-brand-300">
            🏖️ {ui.proximity.beach}
          </p>
          <div className="space-y-2">
            {beaches.map((e) => (
              <Row key={e.destinationSlug} {...e} />
            ))}
          </div>
        </div>
      )}

      {attractions.length > 0 && (
        <div className="mt-6">
          <p className="mb-2 text-sm font-bold text-brand-700 dark:text-brand-300">
            📍 {ui.proximity.attraction}
          </p>
          <div className="space-y-2">
            {attractions.map((e) => (
              <Row key={e.destinationSlug} {...e} />
            ))}
          </div>
        </div>
      )}

      {dayTrips.length > 0 && (
        <div className="mt-6">
          <p className="mb-2 text-sm font-bold text-brand-700 dark:text-brand-300">
            ⛵ {ui.proximity.dayTrip}
          </p>
          <div className="space-y-2">
            {dayTrips.map((e) => (
              <Row key={e.destinationSlug} {...e} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
