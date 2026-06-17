"use client";

import { useEffect, useMemo } from "react";
import Link from "next/link";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import type { StayCatalogItem } from "@/data/stays/types";
import type { StayRegion } from "@/data/stays/types";
import { useLocale } from "@/context/LocaleContext";
import { getStayContentForItem } from "@/i18n/stays";

import "leaflet/dist/leaflet.css";

function FitThailandBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (positions.length === 0) return;
    map.fitBounds(L.latLngBounds(positions), { padding: [48, 48], maxZoom: 7 });
  }, [map, positions]);
  return null;
}

function priceMarkerIcon(price: number, dimmed: boolean) {
  const opacity = dimmed ? 0.45 : 1;
  return L.divIcon({
    className: "",
    html: `<div style="opacity:${opacity};transform:translate(-50%,-100%);background:#0d6b52;color:#fff;font-size:11px;font-weight:700;padding:3px 8px;border-radius:999px;border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.25);white-space:nowrap">$${price}</div>`,
    iconSize: [0, 0],
    iconAnchor: [0, 0],
  });
}

export function StaysMapInner({
  stays,
  highlightRegions,
}: {
  stays: StayCatalogItem[];
  highlightRegions: StayRegion[] | "all";
}) {
  const { locale, t } = useLocale();
  const positions = useMemo(
    () => stays.map((s) => [s.lat, s.lng] as [number, number]),
    [stays],
  );

  return (
    <MapContainer
      center={[13.2, 101.5]}
      zoom={6}
      className="h-full w-full rounded-2xl"
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitThailandBounds positions={positions} />
      {stays.map((stay) => {
        const content = getStayContentForItem(locale, stay);
        const dimmed =
          highlightRegions !== "all" && !highlightRegions.includes(stay.region);
        const typeKey = stay.propertyType === "bungalow" ? "bungalow" : "villa";

        return (
          <Marker
            key={stay.slug}
            position={[stay.lat, stay.lng]}
            icon={priceMarkerIcon(stay.priceFromUsd, dimmed)}
            zIndexOffset={dimmed ? 0 : 100}
          >
            <Popup>
              <div className="min-w-[180px] text-sm">
                <p className="text-[10px] font-bold uppercase tracking-wide text-brand-600">
                  {t(`map.${typeKey}`)} · {t(`regions.${stay.region}`)}
                </p>
                <p className="mt-1 font-bold text-ink-950">{content.name}</p>
                <p className="mt-1 text-brand-700">
                  {t("stays.fromPrice", { price: stay.priceFromUsd })}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  {stay.rating}/10 · {stay.roomCount} {t("stays.rooms")}
                </p>
                <Link
                  href={`/stays/${stay.slug}`}
                  className="mt-2 inline-block text-xs font-bold text-brand-600 hover:underline"
                >
                  {t("map.viewDetail")} →
                </Link>
              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
