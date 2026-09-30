import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

// Wire next-intl to the app router config at ./i18n/request.ts
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // LOCAL ONLY, do not commit: LAN IP added so a phone on the same Wi-Fi gets HMR.
  allowedDevOrigins: ['10.0.0.10', '192.168.0.109'],
};

export default withNextIntl(nextConfig);
