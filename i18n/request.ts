import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const LOCALES = ["en", "de", "he"] as const;
  const safeLocale = LOCALES.includes(locale as (typeof LOCALES)[number])
    ? (locale as (typeof LOCALES)[number])
    : "en";

  return {
    locale: safeLocale,
    messages: (await import(`../messages/${safeLocale}.json`)).default,
  };
});