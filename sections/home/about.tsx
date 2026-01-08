'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

export function HomeAbout() {
  const t = useTranslations('home.about');

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Text */}
        <div>
          <h2 className="mb-4 text-2xl font-semibold">{t('title')}</h2>

          <p className="mb-4 text-gray-700">
            {t('intro')}
          </p>

          <p className="mb-4 text-gray-700">
            {t('body1')}
          </p>

          <p className="text-gray-700">
            {t('body2')}
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/home/amir-shalev.png"
            alt="Amir Shalev"
            width={420}
            height={420}
            className="rounded-xl object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
