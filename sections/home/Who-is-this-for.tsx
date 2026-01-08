'use client';

import { useTranslations } from 'next-intl';

export function HomeWhoIsThisFor() {
  const t = useTranslations('home.whoIsThisFor');
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Good fit */}
        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">{t('goodFit.title')}</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>{t('goodFit.items.realProduct')}</li>
            <li>{t('goodFit.items.clarity')}</li>
            <li>{t('goodFit.items.longTermUx')}</li>
          </ul>
        </div>

        {/* Not a fit */}
        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">{t('notFit.title')}</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>{t('notFit.items.branding')}</li>
            <li>{t('notFit.items.marketingPages')}</li>
            <li>{t('notFit.items.noProductThinking')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
