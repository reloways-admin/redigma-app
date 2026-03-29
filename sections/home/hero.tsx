'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';

const SLIDES = [
  '/illustrations/hero/sketch-hero-grid.svg',
  '/illustrations/hero/sketch-hero-grid.svg',
  '/illustrations/hero/sketch-hero-grid.svg',
  '/illustrations/hero/sketch-hero-grid.svg',
];

const SLIDE_INTERVAL = 4000;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
});

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
            <h1 className="mb-8 text-hero-title tracking-tight text-[var(--text-primary)] max-w-2xl leading-tight">
              {t('titlePre')}{' '}
              <motion.span className="text-[#732fff]" {...fadeUp(0.15)}>
                {t('titleHighlight1')}
              </motion.span>
              {' '}{t('titleMid')}{' '}
              <motion.span className="text-[#732fff]" {...fadeUp(0.3)}>
                {t('titleHighlight2')}
              </motion.span>
            </h1>

            <p className="mb-10 max-w-xl text-hero-subtitle text-[var(--text-secondary)]">
              {t('subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button href={`/${locale}/feedback`} variant="primary">
                {t('cta')}
              </Button>
              <span className="hidden sm:inline-flex">
                <Button href="#projects" variant="outline">
                  {t('viewSelectedWork')}
                </Button>
              </span>
            </div>
          </div>

          {/* Right: testimonial (no card) — hidden on mobile/tablet */}
          <div className="hidden lg:block lg:w-2/5 lg:self-center">
            <p className="type-body text-[var(--text-primary)] leading-relaxed mb-6">
              &ldquo;I was so impressed with Amir&apos;s original approach, creativity, and manners, that I even had him work on my own brand.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/home/keren.png"
                  alt="Keren Rightler"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text-primary)]">Keren Rightler</p>
                <p className="text-xs text-[var(--text-secondary)]">Owner, Method Queen</p>
              </div>
            </div>
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
