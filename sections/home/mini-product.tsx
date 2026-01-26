'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Kicker } from '@/components/ui/kicker';
import { Button } from '@/components/ui/button';

function splitFirstSentence(text: string): { strong: string; rest: string } {
  const trimmed = (text ?? '').trim();
  if (!trimmed) return { strong: '', rest: '' };

  const idx = trimmed.indexOf('.');
  if (idx === -1) return { strong: trimmed, rest: '' };

  const strong = trimmed.slice(0, idx + 1).trim();
  const rest = trimmed.slice(idx + 1).trim();
  return { strong, rest };
}

export function HomeMiniProduct() {
  const t = useTranslations('home.miniProduct');
  const locale = useLocale();

  // Keep both cards the same height (use the taller one).
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const [equalCardHeight, setEqualCardHeight] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      const h1 = card1Ref.current?.getBoundingClientRect().height ?? 0;
      const h2 = card2Ref.current?.getBoundingClientRect().height ?? 0;
      const next = Math.max(Math.round(h1), Math.round(h2));
      if (next > 0) setEqualCardHeight(next);
    };

    // measure after paint
    const id = window.requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    return () => {
      window.cancelAnimationFrame(id);
      window.removeEventListener('resize', measure);
    };
  }, []);

  const step1Footnote = splitFirstSentence(t('step1.footnote'));
  const step2Callout = splitFirstSentence(t('step2.calloutText'));

  // Square number style (like the Figma)
  const numberClasses =
    'inline-flex h-9 w-9 items-center justify-center border border-[var(--mini-product-border)] bg-[var(--background)] text-[var(--text-brand)] font-semibold text-sm';

  // STEP label (kicker-like)
  const stepLabelClasses =
    'inline-flex items-center px-2 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[var(--kicker-bg)] text-[var(--kicker-text)]';

  const cardStyle = equalCardHeight ? ({ minHeight: equalCardHeight } as React.CSSProperties) : undefined;

  return (
    <section className="mini-product-section">
      <div className="mx-auto max-w-[1440px] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <Kicker>{t('badge')}</Kicker>
          </div>

          {/* Title should be 48px -> use type-section-title (mapped to 48px in typography.css) */}
          <h2 className="type-section-title text-[var(--foreground)]">{t('title')}</h2>

          {/* Subtitle should be 16px -> use type-body (16px) */}
          <p className="mt-3 type-body text-[var(--text-secondary)]">{t('subtitle')}</p>
        </div>

        {/* Always render as a normal vertical stack for now (desktop + mobile) */}
        <div className="mx-auto mt-10 max-w-[544px]">
          <div className="flex flex-col gap-6">
            {/* CARD 1 */}
            <div ref={card1Ref} className="mini-product-card p-8" style={cardStyle}>
              <span className={stepLabelClasses}>{t('step1.kicker')}</span>
              <h3 className="mt-3 type-card-title text-[var(--text-primary)]">{t('step1.title')}</h3>

              <ul className="mt-6 space-y-4 type-body text-[var(--text-secondary)]">
                <li className="flex items-center gap-4">
                  <span className={numberClasses}>01</span>
                  <span>{t('step1.items.link')}</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className={numberClasses}>02</span>
                  <span>{t('step1.items.screens')}</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className={numberClasses}>03</span>
                  <span>{t('step1.items.note')}</span>
                </li>
              </ul>

              {/* Bottom copy (no extra border / box) */}
              <div className="mt-8">
                {step1Footnote.strong ? (
                  <p className="type-body font-medium text-[var(--text-primary)]">{step1Footnote.strong}</p>
                ) : null}
                {step1Footnote.rest ? (
                  <p className="mt-2 type-body text-[var(--text-secondary)]">{step1Footnote.rest}</p>
                ) : null}
              </div>
            </div>

            {/* CARD 2 */}
            <div ref={card2Ref} className="mini-product-card p-8" style={cardStyle}>
              <span className={stepLabelClasses}>{t('step2.kicker')}</span>
              <h3 className="mt-3 type-card-title text-[var(--text-primary)]">{t('step2.title')}</h3>

              <ul className="mt-6 space-y-4 type-body text-[var(--text-secondary)]">
                <li className="flex items-center gap-4">
                  <span className={numberClasses}>01</span>
                  <span>{t('step2.items.observations')}</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className={numberClasses}>02</span>
                  <span>{t('step2.items.risks')}</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className={numberClasses}>03</span>
                  <span>{t('step2.items.simplify')}</span>
                </li>
              </ul>

              {/* Bottom copy (no extra border / box) */}
              <div className="mt-8">
                <p className="type-body font-medium text-[var(--text-primary)]">{t('step2.calloutTitle')}</p>
                {step2Callout.strong ? (
                  <p className="mt-2 type-body text-[var(--text-secondary)]">{step2Callout.strong}</p>
                ) : null}
                {step2Callout.rest ? (
                  <p className="mt-2 type-body text-[var(--text-secondary)]">{step2Callout.rest}</p>
                ) : null}
              </div>
            </div>

            {/* CTA (alone, centered) */}
            <div className="mt-2 flex justify-center">
              <Button href={`/${locale}/feedback`} variant="primary">
                {t('cta')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}