'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { HeroBoard } from '@/components/hero-board';
import { HeroTestimonials } from '@/components/hero-testimonials';

export function HomeHero() {
  const t = useTranslations('home.hero');
  const locale = useLocale();

  return (
    <section className="relative w-full bg-[var(--grey-200)]">
      <div className="mx-auto max-w-[1360px] px-6 pt-20 pb-20 lg:pt-32">

        {/* ── 2-column layout: left = content, right = testimonial ── */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* Left: h1, subtitle, CTA */}
          <div className="flex flex-col lg:w-3/5">
            <div className="mb-6 flex">
              <span className="status-pill">
                <span className="status-indicator" />
                {t('status')}
              </span>
            </div>
            {/* No entrance animation: the h1 is the page's main content and
                should be readable on first paint, never blank or half-blank. */}
            <h1 className="mb-8 text-hero-title tracking-tight text-[var(--text-primary)] max-w-2xl leading-tight">
              {t('titlePre')}{' '}
              <span className="text-[#732fff]">{t('titleHighlight1')}</span>
              {' '}{t('titleMid')}{' '}
              <span className="text-[#732fff]">{t('titleHighlight2')}</span>
            </h1>

            <p className="mb-10 max-w-xl text-hero-subtitle text-[var(--text-secondary)]">
              {t('subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href={`/${locale}/feedback`} variant="primary">
                {t('cta')}
              </Button>
              <Button href="#projects" variant="outline">
                {t('viewSelectedWork')}
              </Button>
            </div>
          </div>

          {/* Right column on desktop, stacked under the CTAs on phone and tablet */}
          <div className="lg:w-2/5 lg:self-center">
            <HeroTestimonials />
          </div>
        </div>

        {/* The sketch board. Inlined so its shapes can animate. */}
        <div className="relative mt-16 w-full">
          <HeroBoard />
        </div>

      </div>
    </section>
  );
}
