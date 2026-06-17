"use client";

import { SessionProvider } from "next-auth/react";
import { SearchModalProvider } from "@/context/SearchModalContext";
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
        <SearchModalProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </SearchModalProvider>
      </LocaleProvider>
    </SessionProvider>
  );
}
