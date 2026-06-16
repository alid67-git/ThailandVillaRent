"use client";

import { LocaleProvider } from "@/context/LocaleContext";
import type { Locale } from "@/i18n/config";

export function Providers({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  return <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>;
}
