import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono, Google_Sans } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";

// Import globals at the bottom to ensure variables are available
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// One typeface for all three locales. Google Sans is OFL licensed and covers
// Latin and Hebrew, so Hebrew no longer needs a separate face. next/font
// downloads it at build time and serves it from our own origin, so no request
// ever reaches Google from a visitor's browser.
const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin", "hebrew"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Redigma",
  description: "Building clarity into digital products",
};

type Locale = "en" | "de" | "he";

const LOCALES: Locale[] = ["en", "de", "he"];

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!LOCALES.includes(locale as Locale)) {
    notFound();
  }

  const safeLocale = locale as Locale;
  setRequestLocale(safeLocale);
  const messages = await getMessages({ locale: safeLocale });

  const isRtl = safeLocale === "he";

  return (
    /* Font variables must live on <html>: --font-sans is declared at :root and
       references them, so declaring them on <body> leaves it unresolvable. */
    <html
      lang={safeLocale}
      dir={isRtl ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable} ${googleSans.variable}`}
    >
      <body
        className="antialiased min-h-screen font-sans"
      >
        <NextIntlClientProvider locale={safeLocale} messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Suspense fallback={null}>
              <Header />
            </Suspense>
            <main className="flex-1 pb-24 xl:pb-0">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}