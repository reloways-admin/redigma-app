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
    <div className="rounded-2xl border border-white/10 bg-[#1c1c1c] p-8">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[#732fff] font-semibold text-base">{number}</span>
        <h3 className="text-white font-semibold text-xl">{title}</h3>
      </div>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-base leading-relaxed">
            <span className="mt-[5px] shrink-0 text-white/40">•</span>
            <span>
              <strong className="font-semibold text-white">{item.strong}</strong>
              {item.rest && <span className="text-white/65"> {item.rest}</span>}
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

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white lg:text-4xl leading-tight">
            {t('title')}{' '}
            <span className="text-[#732fff]">{t('titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-white/50 text-base leading-relaxed max-w-2xl">
            {t('sideText')}
          </p>
        </div>

        {/* Two cards side by side */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <StepCard number="1" title={t('step1.title')} items={step1Items} />
          <StepCard number="2" title={t('step2.title')} items={step2Items} />
        </div>

        {/* Author + CTA */}
        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-8">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/home/amir-shalev.png"
                alt={t('authorName')}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
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
    </section>
  );
}
