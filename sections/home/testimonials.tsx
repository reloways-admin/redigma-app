'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('home.testimonials');

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h2 className="mb-4 text-3xl font-semibold">
        {t('title.main')} <span className="text-purple-600">{t('title.highlight')}</span>
      </h2>

      <div className="mt-16 grid gap-16 md:grid-cols-2 text-left">
        <div>
          <p className="text-lg leading-relaxed text-gray-800">
            {t('items.keren.quote')}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Image
              src="/images/home/keren.png"
              alt="Keren Rightler"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="font-medium">
              {t('items.keren.name')}
              <div className="text-sm text-gray-500">{t('items.keren.role')}</div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-gray-800">
            {t('items.adi.quote')}
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Image
              src="/images/home/adi.png"
              alt="Adi Nudel"
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="font-medium">
              {t('items.adi.name')}
              <div className="text-sm text-gray-500">{t('items.adi.role')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}