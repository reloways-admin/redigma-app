'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Kicker } from '@/components/ui/kicker';

export function HomeHowIWork() {
  const t = useTranslations('home.howIWork');

  return (
    <section className="bg-[var(--background)]">
      {/* full-width divider */}
      <div className="how-i-work-divider" />

      <div className="mx-auto max-w-[1440px] px-6 py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <Kicker>{t('badge')}</Kicker>
          </div>

          <h2 className="type-section-title text-[var(--foreground)]">
            {t('title')}
          </h2>

          <p className="mt-4 type-body text-[var(--text-secondary)]">
            {t('intro')}
          </p>
        </div>

        {/* Label above cards */}
        <div className="mx-auto mt-14 max-w-[1040px]">
          <p className="type-body-small text-[var(--text-secondary)]">
            {t('listLabel')}
          </p>

          {/* 3 cards */}
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="how-i-work-card how-i-work-card--brand">
              <div className="mb-6">
                <Image
                  src="/illustrations/how-i-work/sketch-how-i-work-stepping.svg"
                  alt=""
                  width={320}
                  height={180}
                  className="h-auto w-full"
                  priority={false}
                />
              </div>

              <h3 className="type-card-title text-[var(--text-primary)]">
                {t('steps.existing.title')}
              </h3>
              <p className="mt-3 type-body text-[var(--text-secondary)]">
                {t('steps.existing.body')}
              </p>
            </div>

            {/* Card 2 */}
            <div className="how-i-work-card how-i-work-card--coral">
              <div className="mb-6">
                <Image
                  src="/illustrations/how-i-work/sketch-how-i-work-define.svg"
                  alt=""
                  width={320}
                  height={180}
                  className="h-auto w-full"
                />
              </div>

              <h3 className="type-card-title text-[var(--text-primary)]">
                {t('steps.beforeDev.title')}
              </h3>
              <p className="mt-3 type-body text-[var(--text-secondary)]">
                {t('steps.beforeDev.body')}
              </p>
            </div>

            {/* Card 3 */}
            <div className="how-i-work-card how-i-work-card--green">
              <div className="mb-6">
                <Image
                  src="/illustrations/how-i-work/sketch-how-i-work-guiding.svg"
                  alt=""
                  width={320}
                  height={180}
                  className="h-auto w-full"
                />
              </div>

              <h3 className="type-card-title text-[var(--text-primary)]">
                {t('steps.mvp.title')}
              </h3>
              <p className="mt-3 type-body text-[var(--text-secondary)]">
                {t('steps.mvp.body')}
              </p>
            </div>
          </div>

          {/* Big quote box */}
          <div className="mt-10 how-i-work-quote">
            <p className="type-quote text-[var(--text-primary)]">
              {t('outro')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}