'use client';
import { useTranslations } from 'next-intl';

export default function HomeMvpExecution() {
  const t = useTranslations('home.mvpExecution');
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          {/* Left rail */}
          <div className="md:col-span-4">
            <div className="mb-3 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-700">
                {t('badge')}
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
              {t('title')}
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-600">
              {t('subtitle')}
            </p>
          </div>

          {/* Main content */}
          <div className="md:col-span-8">
            <div className="space-y-8">
              <p className="text-base leading-7 text-gray-700">
                {t('intro')}
              </p>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {t('whenLabel')}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>{t('list.scope')}</li>
                  <li>{t('list.ux')}</li>
                  <li>{t('list.dev')}</li>
                  <li>{t('list.mvp')}</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {t('boundaryLabel')}
                </p>
                <p className="mt-3 text-base leading-7 text-gray-700">
                  {t('boundaryText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
