'use client';

import { useTranslations } from 'next-intl';

export function HomeEntryPoints() {
  const t = useTranslations('home.entryPoints');

  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Entry point 1 */}
          <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-900">
                  1
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {t('cards.existing.kicker')}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    {t('cards.existing.heading')}
                  </h3>
                </div>
              </div>

              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
                {t('cards.existing.tag')}
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-700">
              {t('cards.existing.intro')}
            </p>

            <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-medium text-gray-900">{t('cards.existing.listTitle')}</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>{t('cards.existing.bullets.uxInconsistent')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>{t('cards.existing.bullets.decisionsSlow')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>{t('cards.existing.bullets.featuresFriction')}</span>
                </li>
              </ul>
            </div>

            <p className="mt-6 text-sm leading-6 text-gray-700">
              {t('cards.existing.outro')}
            </p>

            <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-gray-300" />
          </article>

          {/* Entry point 2 */}
          <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-900">
                  2
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {t('cards.building.kicker')}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    {t('cards.building.heading')}
                  </h3>
                </div>
              </div>

              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
                {t('cards.building.tag')}
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-700">
              {t('cards.building.intro')}
            </p>

            <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-medium text-gray-900">{t('cards.building.listTitle')}</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>{t('cards.building.bullets.defineClearly')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>{t('cards.building.bullets.avoidMistakes')}</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>{t('cards.building.bullets.moveFast')}</span>
                </li>
              </ul>
            </div>

            <p className="mt-6 text-sm leading-6 text-gray-700">
              {t('cards.building.outro')}
            </p>

            <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-gray-300" />
          </article>
        </div>
      </div>
    </section>
  );
}
