import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  locales: ['en', 'de', 'he'],
  defaultLocale: 'en',
});

/**
 * Only the real domain should be indexed.
 *
 * This is deliberately host-based rather than based on VERCEL_ENV: the
 * production deployment still answers on *.vercel.app, so an env check would
 * either index both or neither. Keying on the host means the rule stops
 * applying by itself once traffic is served from redigma.com, with nothing to
 * remember to undo.
 */
function isPublicHost(host: string): boolean {
  const h = host.toLowerCase().split(':')[0];
  if (h.endsWith('.vercel.app')) return false;
  if (h === 'localhost' || h.endsWith('.local')) return false;
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) return false;
  return true;
}

export default function proxy(request: NextRequest) {
  const response = intlMiddleware(request);

  if (!isPublicHost(request.headers.get('host') ?? '')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
}

export const config = {
  matcher: ['/', '/(de|en|he)/:path*'],
};
