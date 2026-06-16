"use client";

import { SessionProvider } from "next-auth/react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LocaleProvider } from "@/context/LocaleContext";
import type { Locale } from "@/i18n/config";

export function Providers({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  return (
    <SessionProvider>
      <LocaleProvider initialLocale={initialLocale}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </LocaleProvider>
    </SessionProvider>
  );
}
