import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

// Crawlers read robots.txt before anything else, so the preview host is blocked
// here as well as by the X-Robots-Tag header set in proxy.ts. Host-based for the
// same reason: the production deployment also answers on *.vercel.app.
export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get('host')?.toLowerCase().split(':')[0] ?? '';
  const isPreview =
    host.endsWith('.vercel.app') || host === 'localhost' || host.endsWith('.local');

  if (isPreview) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return { rules: { userAgent: '*', allow: '/' } };
}
