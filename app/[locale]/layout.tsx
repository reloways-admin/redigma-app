import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";

// Import globals at the bottom to ensure variables are available
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redigma",
  description: "Building clarity into digital products",
};

type Locale = "en" | "de";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "en" && locale !== "de") {
    notFound();
  }

  const safeLocale = locale as Locale;
  setRequestLocale(safeLocale);
  const messages = await getMessages({ locale: safeLocale });

  return (
    <html lang={safeLocale}>
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-sans`}
      >
        <NextIntlClientProvider locale={safeLocale} messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Suspense fallback={null}>
              <Header />
            </Suspense>
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}