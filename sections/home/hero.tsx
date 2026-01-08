'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export function HomeHero() {
  const t = useTranslations('home.hero');
  const locale = useLocale();

  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center">
      <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-gray-700">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
        </span>
        <span>{t('status')}</span>
      </div>

      <h1 className="mb-6 text-4xl font-semibold">
        {t('title')}
      </h1>

      <p className="mb-8 mx-auto max-w-2xl text-lg text-gray-700">
        {t('subtitle')}
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-3">
        <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-800">
          {t('labels.productUx')}
        </span>
        <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-800">
          {t('labels.structure')}
        </span>
        <span className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-800">
          {t('labels.productThinking')}
        </span>
      </div>

      <Link
        href={`/${locale}/feedback`}
        className="inline-flex items-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white"
      >
        {t('cta')}
      </Link>
    </section>
  );
}