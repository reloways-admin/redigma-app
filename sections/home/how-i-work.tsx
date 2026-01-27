'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Kicker } from '@/components/ui/kicker';

export function HomeHowIWork() {
  const t = useTranslations('home.howIWork');

  return (
    /* 1. Added semantic padding class for consistent "air" */
    <section className="how-i-work-section py-24 lg:py-32 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[1440px] px-6">
        
        {/* Header - Left aligned to match Projects/Testimonials */}
        <div className="mb-24 text-left">
          <div className="flex mb-4">
            <Kicker className="w-fit">{t('badge')}</Kicker>
          </div>

          <h2 className="type-page-title text-[var(--foreground)]">
            {t('title')}
          </h2>

          <p className="mt-4 type-page-subtitle text-[var(--text-secondary)] max-w-2xl">
            {t('intro')}
          </p>
        </div>

        {/* 2. Removed max-w-[1040px] so it spans the full 1440px width */}
        <div className="mt-14">
          <p className="type-body-small text-[var(--text-secondary)] mb-6">
            {t('listLabel')}
          </p>

          {/* Grid matching the project-list architecture */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="how-i-work-card how-i-work-card--brand h-full">
              <div className="mb-8 aspect-video relative overflow-hidden bg-[var(--surface-1)]">
                <Image
                  src="/illustrations/how-i-work/sketch-how-i-work-stepping.svg"
                  alt=""
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="type-card-title text-[var(--text-primary)]">
                {t('steps.existing.title')}
              </h3>
              <p className="mt-4 type-body text-[var(--text-secondary)]">
                {t('steps.existing.body')}
              </p>
            </div>

            {/* Card 2 */}
            <div className="how-i-work-card how-i-work-card--coral h-full">
              <div className="mb-8 aspect-video relative overflow-hidden bg-[var(--surface-1)]">
                <Image
                  src="/illustrations/how-i-work/sketch-how-i-work-define.svg"
                  alt=""
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="type-card-title text-[var(--text-primary)]">
                {t('steps.beforeDev.title')}
              </h3>
              <p className="mt-4 type-body text-[var(--text-secondary)]">
                {t('steps.beforeDev.body')}
              </p>
            </div>

            {/* Card 3 */}
            <div className="how-i-work-card how-i-work-card--green h-full">
              <div className="mb-8 aspect-video relative overflow-hidden bg-[var(--surface-1)]">
                <Image
                  src="/illustrations/how-i-work/sketch-how-i-work-guiding.svg"
                  alt=""
                  fill
                  className="object-contain p-4"
                />
              </div>
              <h3 className="type-card-title text-[var(--text-primary)]">
                {t('steps.mvp.title')}
              </h3>
              <p className="mt-4 type-body text-[var(--text-secondary)]">
                {t('steps.mvp.body')}
              </p>
            </div>
          </div>

          {/* Big quote box - now full width */}
          <div className="mt-12 how-i-work-quote">
            <p className="type-quote text-[var(--text-primary)]">
              {t('outro')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}