"use client";

import Image from "next/image";
import Link from "next/link";
import type { DestinationSpot } from "@/data/destinations/types";
import { useLocale } from "@/context/LocaleContext";
import { getDestinationContent } from "@/i18n/destinations";
import type { DestinationSlug } from "@/i18n/destinations";
import { getDestinationUi } from "@/i18n/destinations/ui";

export function DestinationCard({ spot }: { spot: DestinationSpot }) {
  const { locale } = useLocale();
  const ui = getDestinationUi(locale);
  const content = getDestinationContent(locale, spot.slug as DestinationSlug);
  const catLabel = ui.category[spot.category];

  return (
    <Link href={`/destinations/${spot.slug}`} className="group">
      <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lift transition hover:-translate-y-1 hover:shadow-lift-lg dark:border-ink-700 dark:bg-ink-900">
        <div className="relative h-52 overflow-hidden sm:h-56">
          <Image
            src={spot.image}
            alt={content.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${spot.gradient} opacity-25 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-700">
            {catLabel}
          </span>
          <div className="absolute right-3 top-3 rounded-full bg-amber-500/90 px-2 py-0.5 text-xs font-bold text-white">
            {spot.appeal}/10
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h2 className="font-heading text-lg font-extrabold text-white">{content.name}</h2>
            <p className="mt-1 line-clamp-2 text-xs text-white/75">{content.description}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 divide-x divide-neutral-100 dark:divide-ink-700">
          <div className="px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">{ui.distance}</p>
            <p className="mt-0.5 text-xs font-bold text-ink-950 dark:text-neutral-100">
              {ui.proximity.km.replace("{km}", String(spot.refKm))}
            </p>
          </div>
          <div className="px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">{ui.driveTime}</p>
            <p className="mt-0.5 text-xs font-bold text-ink-950 dark:text-neutral-100">
              {ui.proximity.drive.replace("{min}", String(spot.refDriveMin))}
            </p>
          </div>
          <div className="px-3 py-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">{ui.appeal}</p>
            <p className="mt-0.5 text-xs font-bold text-amber-600">{spot.appeal}/10</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
