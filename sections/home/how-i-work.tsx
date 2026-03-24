'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

const STEPS = [
  {
    key: 'existing' as const,
    imageSrc: '/illustrations/how-i-work/sketch-how-i-work-stepping.svg',
  },
  {
    key: 'beforeDev' as const,
    imageSrc: '/illustrations/how-i-work/sketch-how-i-work-define.svg',
  },
  {
    key: 'mvp' as const,
    imageSrc: '/illustrations/how-i-work/sketch-how-i-work-guiding.svg',
  },
];

export function HomeHowIWork() {
  const t = useTranslations('home.howIWork');

  return (
    <section
      id="how-i-work"
      className="border-t border-[var(--border-subtle)] py-20 lg:py-28 bg-[var(--background)] scroll-mt-[var(--spacing-12)]"
    >
      <div className="mx-auto max-w-[1360px] px-6">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] lg:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-1 text-2xl text-[var(--text-secondary)] lg:text-3xl">
            {t('intro')}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <div
              key={step.key}
              className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] overflow-hidden flex flex-col"
            >
              {/* Image area */}
              <div className="relative aspect-video w-full bg-[var(--surface-2)]">
                <Image
                  src={step.imageSrc}
                  alt=""
                  fill
                  className="object-contain p-8 opacity-80"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col gap-2 flex-1">
                <span className="text-xs font-semibold text-[#732fff] uppercase tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="text-base font-semibold text-[var(--text-primary)] leading-snug">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {t(`steps.${step.key}.body`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Outro */}
        <div className="mt-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] px-8 py-6">
          <p className="text-lg font-medium text-[var(--text-primary)] leading-relaxed">
            {t('outro')}
          </p>
        </div>

      </div>
    </section>
  );
}
