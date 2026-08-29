'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

type Slide = {
  key: string;
  imageSrc?: string;
};

// Order matters: Keren first, she is the strongest opening line.
const SLIDES: Slide[] = [
  { key: 'keren', imageSrc: '/images/home/keren.jpg' },
  { key: 'eyal', imageSrc: '/images/home/eyal.jpg' },
  { key: 'adi', imageSrc: '/images/home/adi.jpg' },
];

const ADVANCE_MS = 8000;

function Chevron({ className = '' }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function HeroTestimonials() {
  const t = useTranslations('home.hero.testimonials');
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  // Respect users who have asked for less motion: no auto-advance for them.
  const reducedMotion = useRef(false);
  useEffect(() => {
    reducedMotion.current =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), ADVANCE_MS);
    return () => clearInterval(timer);
  }, [paused, index]);

  const slide = SLIDES[index];
  const author = t(`items.${slide.key}.author`);
  const role = t(`items.${slide.key}.role`);

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Fixed height sized to the longest quote, with shorter ones centred.
          Without this the page below would jump every time a slide advanced. */}
      <div
        className="flex min-h-[190px] items-center lg:min-h-[170px]"
        aria-live="polite"
      >
        <blockquote
          key={slide.key}
          className="animate-[fadeIn_400ms_ease-out] space-y-4 text-[var(--text-primary)]"
        >
          {t(`items.${slide.key}.quote`)
            .split('\n\n')
            .map((para, i, all) => (
              <p key={i} className="type-body leading-relaxed">
                {i === 0 ? '\u201C' : ''}
                {para}
                {i === all.length - 1 ? '\u201D' : ''}
              </p>
            ))}
        </blockquote>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {slide.imageSrc ? (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image src={slide.imageSrc} alt={author} fill className="object-cover" sizes="40px" />
          </div>
        ) : (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#732fff]/10">
            <span className="text-xs font-semibold text-[#732fff]">
              {author.split(' ').map((n) => n[0]).join('').slice(0, 2)}
            </span>
          </div>
        )}
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[var(--text-primary)]">{author}</p>
          {role ? <p className="text-xs text-[var(--text-secondary)]">{role}</p> : null}
        </div>
      </div>

      {/* Arrows + dots. The arrows make it obvious the quotes are navigable;
          dots alone read as decoration. Chevrons use logical rotation so they
          point the correct way in RTL. */}
      <div className="mt-6 flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label={t('aria.prev')}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-[#732fff] hover:text-[#732fff]"
          >
            <Chevron className="rotate-180 rtl:rotate-0" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label={t('aria.next')}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--text-secondary)] transition-colors hover:border-[#732fff] hover:text-[#732fff]"
          >
            <Chevron className="rtl:rotate-180" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.key}
              type="button"
              onClick={() => go(i)}
              aria-label={`${t('aria.go')} ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? 'w-6 bg-[#732fff]'
                  : 'w-1.5 bg-[var(--text-secondary)]/30 hover:bg-[var(--text-secondary)]/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroTestimonials;
