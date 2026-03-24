import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";

// Import globals at the bottom to ensure variables are available
import "../globals.css";

const poppins = localFont({
  src: [
    { path: "../../public/fonts/Poppins-Regular.ttf",  weight: "400", style: "normal" },
    { path: "../../public/fonts/Poppins-Italic.ttf",   weight: "400", style: "italic" },
    { path: "../../public/fonts/Poppins-Medium.ttf",   weight: "500", style: "normal" },
    { path: "../../public/fonts/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/fonts/Poppins-Bold.ttf",     weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
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