'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export function HomeFinalCta() {
  const t = useTranslations('home.finalCta');
  const locale = useLocale();

  return (
    /* Deep dark background with expansive vertical padding */
    <section className="bg-[#050508] py-24 lg:py-40 text-white">
      <div className="mx-auto max-w-[1440px] px-6 text-center">
        
        <div className="mx-auto max-w-4xl">
          {/* Using your page title typography role for impact */}
          <h2 className="type-page-title mb-8 text-white leading-tight">
            {t('title')}
          </h2>
          
          {/* Combining lines for a cohesive paragraph */}
          <p className="type-body text-gray-400 max-w-2xl mx-auto mb-12">
            {t('line1')} {t('line2')}
          </p>
        </div>

        {/* Dual action buttons matching the architectural style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {/* Primary Action: Brand Purple */}
          <Link
            href={`/${locale}/feedback`}
            className="w-full sm:w-auto px-8 py-4 bg-[#6344F5] text-white font-medium transition hover:brightness-110 text-center"
          >
            {t('button')}
          </Link>
          
          {/* Secondary Action: White */}
          <Link
            href="mailto:hello@redigma.com"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium transition hover:bg-gray-100 text-center"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}