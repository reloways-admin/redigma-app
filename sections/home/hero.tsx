'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { HeroTestimonials } from '@/components/hero-testimonials';

const SLIDES = [
  '/illustrations/hero/sketch-hero-grid.svg',
  '/illustrations/hero/sketch-hero-grid.svg',
  '/illustrations/hero/sketch-hero-grid.svg',
  '/illustrations/hero/sketch-hero-grid.svg',
];

const SLIDE_INTERVAL = 4000;

export function HomeHero() {
  const t = useTranslations('home.hero');
  const locale = useLocale();
  const [current, setCurrent] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

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

        {/* ── Carousel ── */}
        <div className="relative mt-16 w-full">

          {/* Slide track */}
          <div className="relative w-full">
            {SLIDES.map((src, i) => (
              <div
                key={i}
                className="transition-opacity duration-500"
                style={{ opacity: i === current ? 1 : 0, position: i === current ? 'relative' : 'absolute', inset: 0 }}
              >
                <Image
                  src={src}
                  alt={`Hero slide ${i + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={i === 0}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
