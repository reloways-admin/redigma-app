'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';

type StepItem = { strong: string; rest: string };

/**
 * One step on the timeline.
 *
 * The number used to be a bare "1" floating next to a heading, which read as
 * decoration rather than as a sequence. It is a filled disc on a connecting
 * line now, with the word "Step" spelled out above the title, so the order is
 * stated rather than implied.
 */
function TimelineStep({
  number,
  label,
  title,
  items,
  isLast,
}: {
  number: number;
  label: string;
  title: string;
  items: StepItem[];
  isLast: boolean;
}) {
  return (
    <li className="flex gap-5 sm:gap-6">
      {/* Marker column: the disc, then the line that runs down to the next
          step. The line is a flex child so it stretches to whatever height the
          content next to it happens to be. */}
      <div className="flex flex-col items-center" aria-hidden="true">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#732fff] text-sm font-semibold text-white">
          {number}
        </span>
        {!isLast ? (
          <span className="mt-3 w-px flex-1 bg-[var(--border-subtle)]" />
        ) : null}
      </div>

      <div className={isLast ? 'flex-1' : 'flex-1 pb-12'}>
        <p className="type-kicker text-[var(--text-secondary)]">{label}</p>
        <h3 className="mt-2.5 text-xl font-semibold leading-tight text-[var(--text-primary)]">
          {title}
        </h3>
        <ul className="mt-5 flex flex-col gap-3.5">
          {items.map((item) => (
            <li key={item.strong} className="flex gap-3 text-base leading-relaxed">
              <span
                aria-hidden="true"
                className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--purple-400)]"
              />
              <span>
                <strong className="font-semibold text-[var(--text-primary)]">{item.strong}</strong>
                {item.rest ? <span className="text-[var(--text-secondary)]"> {item.rest}</span> : null}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </li>
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
    <section id="mini-product" className="bg-[#f0f0f5] border-t border-[var(--border-subtle)] py-20 lg:py-28 scroll-mt-[var(--spacing-12)]">
      <div className="mx-auto max-w-[1360px] px-6">

        {/* Heading, held to a reading width so it does not run the full 1360 */}
        <div className="mb-14 max-w-3xl lg:mb-16">
          <h2 className="text-3xl font-bold leading-tight text-[var(--text-primary)] lg:text-4xl">
            {t('title')}{' '}
            <span className="text-[#732fff]">{t('titleHighlight')}</span>
          </h2>
        </div>

        {/* Two steps on the left as a vertical timeline, the ask on the right.
            Three side-by-side cards read as three equal options, which is the
            wrong shape for something that is two steps and one call to act. */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-20 lg:items-start">

          <ol className="flex flex-col">
            <TimelineStep
              number={1}
              label={t('stepLabel', { n: 1 })}
              title={t('step1.title')}
              items={step1Items}
              isLast={false}
            />
            <TimelineStep
              number={2}
              label={t('stepLabel', { n: 2 })}
              title={t('step2.title')}
              items={step2Items}
              isLast
            />
          </ol>

          {/* The ask. Kept in a card so it stays a distinct object next to the
              timeline, and sticky on desktop so it is in reach the whole way
              down the steps. */}
          <div className="flex flex-col gap-8 rounded-2xl border border-[#732fff]/25 bg-white p-8 lg:sticky lg:top-28">
            <p className="text-2xl font-semibold leading-snug text-[var(--text-primary)]">
              &ldquo;{t('sideText')}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/home/amir-avatar.jpg"
                  alt=""
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <p className="text-[var(--text-primary)] font-medium text-sm">{t('authorName')}</p>
                <p className="text-[var(--text-secondary)] text-xs mt-0.5">{t('authorRole')}</p>
              </div>
            </div>
            <Button href={`/${locale}/feedback`} variant="primary" className="w-full">
              {t('cta')}
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
