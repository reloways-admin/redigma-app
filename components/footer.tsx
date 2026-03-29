'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

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
              <ul className="space-y-3">
                <li><Link href={href('/projects/bit')} className={linkClass}>Bit</Link></li>
                <li><Link href={href('/projects/navonera')} className={linkClass}>Navonera</Link></li>
                <li><Link href={href('/projects/gomatchit')} className={linkClass}>GoMatchIt</Link></li>
                <li><Link href={href('/projects/reloways')} className={linkClass}>Reloways</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-sm font-semibold text-white mb-5">{t('contactLabel')}</p>
              <ul className="space-y-3">
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
          <p className="text-sm text-white/30">{t('copyright')}</p>
          <div className="flex items-center gap-6">
            <Link href={href('/feedback')} className="text-sm text-white/50 hover:text-white transition-colors">
              {t('getFeedback')}
            </Link>
            <Link href={href('/impressum')} className="text-sm text-white/50 hover:text-white transition-colors">
              {t('impressum')}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
