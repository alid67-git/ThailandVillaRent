"use client";

import Image from "next/image";
import Link from "next/link";
import type { StayCatalogItem } from "@/data/stays/types";
import { useLocale } from "@/context/LocaleContext";
import { getStayContent } from "@/i18n/stays";
import type { StaySlug } from "@/data/stays/types";

export function StayCard({ stay }: { stay: StayCatalogItem }) {
  const { locale, t } = useLocale();
  const content = getStayContent(locale, stay.slug as StaySlug);
  const regionLabel =
    stay.region === "phuket" ? t("regions.phuket") : t("regions.koh-samui");

  return (
    <Link
      href={`/stays/${stay.slug}`}
      className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lift transition hover:-translate-y-1 hover:shadow-lift-lg dark:border-ink-700 dark:bg-ink-900"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={stay.image}
          alt={content.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-brand-700 shadow">
          {stay.rating}/10
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {content.areas[stay.areaKey]} · {regionLabel}
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
          <span>⭐ {stay.starRating}</span>
        </div>
        <p className="mt-3 text-sm font-semibold text-brand-600">
          {t("stays.fromPrice", { price: stay.priceFromUsd })}
        </p>
      </div>
    </Link>
  );
}
