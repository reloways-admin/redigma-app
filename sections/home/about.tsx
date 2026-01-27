'use client';

import * as React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Kicker } from '@/components/ui/kicker';

/* Changed to named export HomeAbout to match your page.tsx import */
export function HomeAbout() {
  const t = useTranslations('home.about');

  return (
    /* Unified section padding and top border for consistency */
    <section className="testimonials-section py-24 lg:py-32 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[1440px] px-6">
        
        {/* 2-Column Grid with vertical centering */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Content Column */}
          <div className="flex flex-col items-start text-left">
            <div className="mb-6">
              <Kicker className="w-fit">{t('title')}</Kicker>
            </div>
            
            {/* Semantic typography for the heading */}
            <h2 className="type-section-title text-[var(--text-primary)] mb-8 max-w-lg">
              {t('intro')}
            </h2>
            
            <div className="space-y-6 max-w-xl mb-12">
              <p className="type-body text-[var(--text-secondary)]">
                {t('body1')}
              </p>
              <p className="type-body text-[var(--text-secondary)]">
                {t('body2')}
              </p>
            </div>

            {/* Status indicators */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="status-pill">
                <span className="status-indicator" />
                Berlin Based
              </div>
              <div className="text-xs font-medium text-[var(--text-secondary)]">
                • Working internationally
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative">
            {/* Decorative background grid pattern */}
            <div className="about-grid-bg" />
            
            {/* Square image container with architectural border */}
            <div className="about-image-wrapper">
                <Image
                  src="/images/home/amir.svg"
                  alt="Amir Shalev"
                  fill
                  /* Changed from object-cover to object-contain */
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  priority
                />
              </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}