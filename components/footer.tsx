'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export function Footer() {
  const locale = useLocale(); // 'en' | 'de'
  const t = useTranslations('footer');

  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} {t('copyright')}
        </p>

        <div className="flex items-center gap-4 text-sm">
          <Link
            href={`/${locale}/feedback`}
            className="text-gray-600 hover:text-gray-900"
          >
            {t('links.feedback')}
          </Link>
          <Link
            href={`/${locale}/impressum`}
            className="text-gray-600 hover:text-gray-900"
          >
            {t('links.impressum')}
          </Link>
          <a
            href="mailto:amir@redigma.com"
            className="text-gray-600 hover:text-gray-900"
          >
            {t('links.email')}
          </a>
        </div>
      </div>
    </footer>
  );
}