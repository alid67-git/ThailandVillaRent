import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Plus_Jakarta_Sans, Noto_Sans_SC, Noto_Sans_Thai } from "next/font/google";
import { Providers } from "@/components/Providers";
import { defaultLocale, LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";
import "./globals.css";

export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f2e26",
};

const thai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  variable: "--font-thai",
  display: "swap",
});

const chinese = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-chinese",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const heading = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thailand Villa Rent — Thailand Stay Rentals",
  description:
    "Handpicked stay rentals across Thailand. Full details, distances, amenities and policies.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(LOCALE_COOKIE)?.value;
  const initialLocale: Locale =
    localeCookie && locales.includes(localeCookie as Locale)
      ? (localeCookie as Locale)
      : defaultLocale;

  return (
    <html lang={initialLocale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var langs=["tr","en","ru","de","fr","th","ar","zh"];var chosen=localStorage.getItem("tvr-locale-chosen");var loc=localStorage.getItem("tvr-locale");var m=document.cookie.match(/(?:^|;\\s*)tvr-locale=([^;]+)/);if(m)loc=m[1];if(chosen!=="1"||!loc||langs.indexOf(loc)<0)loc="en";document.documentElement.lang=loc;document.documentElement.dir=loc==="ar"?"rtl":"ltr";}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${sans.variable} ${heading.variable} ${thai.variable} ${chinese.variable} min-h-screen font-sans antialiased`}
      >
        <Providers initialLocale={initialLocale}>{children}</Providers>
      </body>
    </html>
  );
}
