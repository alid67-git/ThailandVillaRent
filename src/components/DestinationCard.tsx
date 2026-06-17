"use client";

import Link from "next/link";
import type { DestinationSpot } from "@/data/destinations/types";
import { useLocale } from "@/context/LocaleContext";
import { getDestinationContent } from "@/i18n/destinations";
import type { DestinationSlug } from "@/i18n/destinations";
import { getDestinationUi } from "@/i18n/destinations/ui";
import { HorizontalImageCarousel } from "@/components/HorizontalImageCarousel";

export function DestinationCard({ spot }: { spot: DestinationSpot }) {
  const { locale, t } = useLocale();
  const ui = getDestinationUi(locale);
  const content = getDestinationContent(locale, spot.slug as DestinationSlug);
  const catLabel = ui.category[spot.category];
  const regionLabel = t(`regions.${spot.region}`);
  const carouselImages = spot.images.length > 0 ? spot.images : [spot.image];

  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lift transition hover:-translate-y-1 hover:shadow-lift-lg dark:border-ink-700 dark:bg-ink-900">
      <div className="relative">
        <HorizontalImageCarousel images={carouselImages} alt={content.name} />
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${spot.gradient} opacity-25 mix-blend-multiply`} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
        <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-700">
          {catLabel}
        </span>
        <div className="pointer-events-none absolute right-3 top-3 z-10 rounded-full bg-amber-500/90 px-2 py-0.5 text-xs font-bold text-white">
          {spot.appeal}/10
        </div>
        <Link
          href={`/destinations/${spot.slug}`}
          className="absolute inset-0 z-[5]"
          aria-label={content.name}
        />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-white/70">
            {regionLabel}
          </p>
          <h2 className="font-heading text-lg font-extrabold text-white">{content.name}</h2>
          <p className="mt-1 line-clamp-2 text-xs text-white/75">{content.description}</p>
        </div>
      </div>
      <Link href={`/destinations/${spot.slug}`} className="block border-t border-neutral-100 px-4 py-3 dark:border-ink-700">
        <p className="text-xs font-medium text-neutral-500">{content.bestFor}</p>
      </Link>
    </article>
  );
}
