'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { EMAIL, WHATSAPP_URL } from '@/lib/contact';

const linkClass = 'text-sm text-white/50 hover:text-white transition-colors';

export function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const href = (path: string) => `/${locale}${path}`;

  return (
    <footer className="bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1360px] px-6 pt-20 pb-10">

        {/* Main row */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_auto] lg:gap-24 mb-20">

          {/* Left: tagline */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-white leading-tight lg:text-4xl whitespace-pre-line">
              {t('headline')}
            </h2>
            <p className="mt-4 text-sm text-white/50">
              {t('subline')}
            </p>
          </div>

          {/* Right: nav columns */}
          <div className="grid grid-cols-2 gap-12 lg:gap-16">

            {/* Case studies */}
            <div>
              <p className="text-sm font-semibold text-white mb-5">{t('caseStudiesLabel')}</p>
              {/* Navonera is unlinked here on purpose. Its page and assets are
                  still in the repo, it is simply not pointed at any more. */}
              <ul className="space-y-3">
                <li><Link href={href('/projects/bit')} className={linkClass}>Bit</Link></li>
                <li><Link href={href('/projects/reloways')} className={linkClass}>Reloways</Link></li>
                <li><Link href={href('/projects/gomatchit')} className={linkClass}>GoMatchIt</Link></li>
                <li><Link href={href('/projects/fincat')} className={linkClass}>Fincat</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm font-semibold text-white mb-5">{t('contactLabel')}</p>
              {/* Email first, then WhatsApp: the two ways anyone actually
                  reaches Amir, ahead of the social profiles. */}
              <ul className="space-y-3">
                <li>
                  <a href={`mailto:${EMAIL}`} className={linkClass}>
                    {EMAIL}
                  </a>
                </li>
                <li>
                  {/* The number itself is not printed: the wa.me link carries
                      it, and a phone number set in plain text on a marketing
                      page is an invitation to scrapers. */}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/redigma" target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/amirshalev" target="_blank" rel="noopener noreferrer" className={linkClass}>
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between gap-4 flex-wrap">
          {/* white/30 on #0a0a0a measured about 2.2:1. Lifted to clear AA. */}
          <p className="text-sm text-white/70">{t('copyright')}</p>
          <div className="flex items-center gap-6">
            <Link href={href('/feedback')} className="text-sm text-white/50 hover:text-white transition-colors">
              {t('getFeedback')}
            </Link>
            <Link href={href('/impressum')} className="text-sm text-white/50 hover:text-white transition-colors">
              {t('impressum')}
            </Link>
            <Link href={href('/datenschutz')} className="text-sm text-white/50 hover:text-white transition-colors">
              {t('privacy')}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
