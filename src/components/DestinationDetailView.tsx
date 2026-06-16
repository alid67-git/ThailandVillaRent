"use client";

import Image from "next/image";
import Link from "next/link";
import type { DestinationSpot } from "@/data/destinations/types";
import { STAY_CATALOG } from "@/data/stays/catalog";
import { getProximityForStay } from "@/data/stays/proximity";
import type { StaySlug } from "@/data/stays/types";
import { useLocale } from "@/context/LocaleContext";
import { getDestinationContent } from "@/i18n/destinations";
import type { DestinationSlug } from "@/i18n/destinations";
import { getDestinationUi } from "@/i18n/destinations/ui";
import { getStayContent } from "@/i18n/stays";

export function DestinationDetailView({ spot }: { spot: DestinationSpot }) {
  const { locale } = useLocale();
  const ui = getDestinationUi(locale);
  const content = getDestinationContent(locale, spot.slug as DestinationSlug);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}`;

  const nearbyStays = STAY_CATALOG.filter((s) => s.region === spot.region)
    .map((stay) => {
      const prox = getProximityForStay(stay.slug as StaySlug).find(
        (p) => p.destinationSlug === spot.slug,
      );
      return prox ? { stay, prox } : null;
    })
    .filter(Boolean) as {
    stay: (typeof STAY_CATALOG)[number];
    prox: { km: number; driveMin: number; walkMin?: number };
  }[];

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-ink-950">
      <section className="bg-gradient-to-br from-ink-950 via-brand-900 to-ocean-900 px-4 py-8 text-white sm:px-6">
        <div className="mx-auto max-w-6xl">
          <Link href="/destinations" className="text-sm text-white/70 hover:text-white">
            ← {ui.page.back}
          </Link>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:col-span-2">
              <Image src={spot.image} alt={content.name} fill className="object-cover" priority />
            </div>
            <div className="flex flex-col justify-end rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand-200">
                {ui.category[spot.category]}
              </span>
              <h1 className="mt-2 font-heading text-2xl font-extrabold sm:text-3xl">{content.name}</h1>
              <p className="mt-3 text-sm text-white/80">{content.description}</p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-white/60">{ui.distance}</p>
                  <p className="font-bold">{spot.refKm} km</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-white/60">{ui.driveTime}</p>
                  <p className="font-bold">{spot.refDriveMin} min</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-white/60">{ui.appeal}</p>
                  <p className="font-bold text-amber-300">{spot.appeal}/10</p>
                </div>
              </div>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex justify-center rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-bold hover:bg-brand-400"
              >
                🗺️ {ui.page.navigate}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6">
        <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
          <h2 className="font-heading text-xl font-bold">{ui.page.about}</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">{content.description}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-brand-50 p-4 dark:bg-brand-500/10">
              <p className="text-xs font-bold uppercase text-brand-600">{ui.page.bestFor}</p>
              <p className="mt-2 font-semibold text-ink-950 dark:text-white">{content.bestFor}</p>
            </div>
            <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-500/10">
              <p className="text-xs font-bold uppercase text-amber-700">💡 {ui.page.tips}</p>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{content.tips}</p>
            </div>
          </div>
        </section>

        {spot.images.length > 1 && (
          <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
            <h2 className="font-heading text-xl font-bold">{ui.page.gallery}</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {spot.images.map((img) => (
                <div key={img} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src={img} alt="" fill className="object-cover" sizes="200px" />
                </div>
              ))}
            </div>
          </section>
        )}

        {nearbyStays.length > 0 && (
          <section className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-ink-700 dark:bg-ink-900">
            <h2 className="font-heading text-xl font-bold">{ui.page.nearbyStays}</h2>
            <p className="mt-1 text-sm text-neutral-500">{ui.page.fromStay}</p>
            <div className="mt-4 space-y-3">
              {nearbyStays.map(({ stay, prox }) => {
                const stayContent = getStayContent(locale, stay.slug as StaySlug);
                return (
                  <Link
                    key={stay.slug}
                    href={`/stays/${stay.slug}`}
                    className="flex items-center justify-between rounded-xl border border-neutral-100 p-4 transition hover:border-brand-300 hover:bg-brand-50/50 dark:border-ink-700 dark:hover:bg-brand-500/5"
                  >
                    <div>
                      <p className="font-semibold text-ink-950 dark:text-white">{stayContent.name}</p>
                      <p className="text-sm text-neutral-500">
                        {prox.km} km · {prox.driveMin} min
                        {prox.walkMin ? ` · ${prox.walkMin} min walk` : ""}
                      </p>
                    </div>
                    <span className="text-brand-600">→</span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
