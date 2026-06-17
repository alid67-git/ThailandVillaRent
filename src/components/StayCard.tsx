"use client";

import Link from "next/link";
import type { StayCatalogItem } from "@/data/stays/types";
import { useLocale } from "@/context/LocaleContext";
import { getStayContentForItem } from "@/i18n/stays";
import { HorizontalImageCarousel } from "@/components/HorizontalImageCarousel";

export function StayCard({ stay }: { stay: StayCatalogItem }) {
  const { locale, t } = useLocale();
  const content = getStayContentForItem(locale, stay);
  const regionLabel = t(`regions.${stay.region}`);
  const images = stay.images.length > 0 ? stay.images : [stay.image];
  const areaLabel = content.areas[stay.areaKey] ?? stay.areaKey;

  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lift transition hover:-translate-y-1 hover:shadow-lift-lg dark:border-ink-700 dark:bg-ink-900">
      <div className="relative">
        <HorizontalImageCarousel
          images={images}
          alt={content.name}
          className="relative aspect-[4/3]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-brand-700 shadow">
          {stay.rating}/10
        </div>
        <Link href={`/stays/${stay.slug}`} className="absolute inset-0 z-[5]" aria-label={content.name} />
      </div>
      <Link href={`/stays/${stay.slug}`} className="block p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {areaLabel} · {regionLabel}
        </p>
        <h3 className="mt-1 font-heading text-lg font-bold text-ink-950 dark:text-white">
          {content.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300">
          {content.tagline}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500">
          <span>✈️ {stay.airportKm} km</span>
          <span>·</span>
          <span>🛏️ {stay.roomCount} {t("stays.rooms")}</span>
          <span>·</span>
          <span>👥 {stay.maxGuests}</span>
          <span>·</span>
          <span>⭐ {stay.starRating}</span>
        </div>
        <p className="mt-3 text-sm font-semibold text-brand-600">
          {t("stays.fromPrice", { price: stay.priceFromUsd })}
        </p>
      </Link>
    </article>
  );
}
