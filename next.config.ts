import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Wire next-intl to the app router config at ./i18n/request.ts
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
