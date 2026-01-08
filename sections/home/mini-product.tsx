'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export function HomeMiniProduct() {
  const t = useTranslations('home.miniProduct');
  const locale = useLocale();

  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">
            {t('title')}
          </h2>
          <p className="mt-3 text-base text-gray-700">
            {t('subtitle')}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{t('step1.kicker')}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{t('step1.title')}</h3>
              </div>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
                {t('step1.tag')}
              </span>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-700">
                  1
                </span>
                <span>
                  {t('step1.items.link')}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-700">
                  2
                </span>
                <span>
                  {t('step1.items.screens')}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-700">
                  3
                </span>
                <span>
                  {t('step1.items.note')}
                </span>
              </li>
            </ul>

            <p className="mt-6 text-xs text-gray-500">
              {t('step1.footnote')}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{t('step2.kicker')}</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">{t('step2.title')}</h3>
              </div>
              <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
                {t('step2.tag')}
              </span>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-gray-900 ring-1 ring-gray-200">
                  1
                </span>
                <span>
                  {t('step2.items.observations')}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-gray-900 ring-1 ring-gray-200">
                  2
                </span>
                <span>
                  {t('step2.items.risks')}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-gray-900 ring-1 ring-gray-200">
                  3
                </span>
                <span>
                  {t('step2.items.simplify')}
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm font-medium text-gray-900">{t('step2.calloutTitle')}</p>
              <p className="mt-1 text-sm text-gray-600">{t('step2.calloutText')}</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6 md:flex-row">
          <p className="text-sm text-gray-700">
            {t('footerText')}
          </p>
          <Link
            href={`/${locale}/feedback`}
            className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}