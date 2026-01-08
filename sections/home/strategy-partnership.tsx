'use client';
import { useTranslations } from 'next-intl';

export default function HomeStrategicPartnership() {
  const t = useTranslations('home.strategyPartnership');
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          {/* Left rail */}
          <div className="md:col-span-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1">
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
            <div className="space-y-6">
              <p className="text-base leading-7 text-gray-700">
                {t('intro')}
              </p>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {t('partnershipLabel')}
                </p>
                <p className="mt-3 text-base leading-7 text-gray-700">
                  {t('partnershipBody')}
                </p>
              </div>

              <div className="pt-2">
                <p className="text-sm leading-6 text-gray-600">
                  {t('note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}