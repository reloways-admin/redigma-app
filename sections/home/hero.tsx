'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';

export function HomeHero() {
  const t = useTranslations('home.hero');
  const locale = useLocale();

  return (
    <section className="relative mx-auto max-w-[1440px] px-6 py-16 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-[var(--spacing-hero-gap)] lg:grid-cols-2">
        
        <div className="flex flex-col items-start text-left">
          
          <div className="mb-8 flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span>{t('status')}</span>
          </div>

          <h1 className="mb-8 text-hero-title tracking-tight text-[var(--text-primary)]">
            {t.rich('title', {
              brand: (chunks) => <span className="text-[var(--header-brand)]">{chunks}</span>,
              br: () => <br />,
            })}
          </h1>

          <p className="mb-10 max-w-xl text-hero-subtitle text-[var(--text-secondary)]">
            {t('subtitle')}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href={`/${locale}/feedback`} variant="primary">
              {t('cta')}
            </Button>
            
            <Button href={`/${locale}/#projects`} variant="outline">
              {t('viewSelectedWork')}
            </Button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative aspect-[16/10] w-full max-w-[700px]">
            <Image
              src="/illustrations/hero/sketch-hero.svg" 
              alt="Redigma Clarity Illustration"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}