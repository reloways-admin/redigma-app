'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';

function StepCard({ number, title, items }: {
  number: string;
  title: string;
  items: { strong: string; rest: string }[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-[#732fff] font-semibold text-base">{number}</span>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed">
            <span className="mt-[3px] shrink-0 text-white/40">•</span>
            <span>
              <strong className="font-semibold text-white">{item.strong}</strong>
              {item.rest && <span className="text-white/50"> {item.rest}</span>}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HomeMiniProduct() {
  const t = useTranslations('home.miniProduct');
  const locale = useLocale();

  const step1Items = [
    { strong: t('step1.item1Strong'), rest: t('step1.item1Rest') },
    { strong: t('step1.item2Strong'), rest: t('step1.item2Rest') },
    { strong: t('step1.item3Strong'), rest: t('step1.item3Rest') },
  ];

  const step2Items = [
    { strong: t('step2.item1Strong'), rest: t('step2.item1Rest') },
    { strong: t('step2.item2Strong'), rest: t('step2.item2Rest') },
    { strong: t('step2.item3Strong'), rest: t('step2.item3Rest') },
  ];

  return (
    <section id="mini-product" className="bg-[#0a0a0a] py-20 lg:py-28 scroll-mt-[var(--spacing-12)]">
      <div className="mx-auto max-w-[1360px] px-6">

        {/* Title */}
        <h2 className="mb-14 text-center text-3xl font-bold text-white lg:text-4xl leading-tight">
          {t('title')}{' '}
          <span className="text-white/40">{t('titleHighlight')}</span>
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px] lg:gap-16 lg:items-start">

          {/* Left: stacked cards */}
          <div className="flex flex-col gap-4">
            <StepCard number="1" title={t('step1.title')} items={step1Items} />
            <StepCard number="2" title={t('step2.title')} items={step2Items} />
          </div>

          {/* Right: author + CTA */}
          <div className="flex flex-col gap-6">
            <p className="text-white/60 text-base leading-relaxed">
              {t('sideText')}
            </p>
            <hr className="border-white/10" />
            <div className="flex items-center gap-3">
              <Image
                src="/images/home/amir-shalev.png"
                alt={t('authorName')}
                width={44}
                height={44}
                className="rounded-full object-cover shrink-0"
              />
              <div>
                <p className="text-white font-medium text-sm">{t('authorName')}</p>
                <p className="text-white/50 text-xs mt-0.5">{t('authorRole')}</p>
              </div>
            </div>
            <Button href={`/${locale}/feedback`} variant="primary">
              {t('cta')}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
