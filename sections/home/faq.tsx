'use client';

import { useTranslations } from 'next-intl';

/** Nine questions, in the order they are asked. */
const ITEMS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9'] as const;

/**
 * FAQ.
 *
 * Built on <details>/<summary> rather than a scripted accordion: the browser
 * gives the expand/collapse semantics, keyboard support and in-page find for
 * free, and the answers are still in the DOM when JavaScript has not run.
 *
 * Several answers carry a bracketed placeholder. Those are facts only Amir can
 * supply, and they are left visible on purpose so nothing gets invented and
 * nothing gets quietly shipped half-written.
 */
export function HomeFaq() {
  const t = useTranslations('home.faq');

  return (
    <section
      id="faq"
      className="border-t border-[var(--border-subtle)] bg-[var(--background)] py-20 lg:py-28 scroll-mt-[var(--spacing-12)]"
    >
      <div className="mx-auto max-w-[1360px] px-6">

        <h2 className="mb-10 text-3xl font-bold text-[var(--text-primary)] lg:text-4xl">
          {t('title')}
        </h2>

        <div className="max-w-3xl">
          {ITEMS.map((id, i) => (
            <details
              key={id}
              open={i === 0}
              className="faq-item border-b border-[var(--border-subtle)]"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-lg font-medium text-[var(--text-primary)] [&::-webkit-details-marker]:hidden">
                {t(`items.${id}.question`)}
                <span className="mt-1 shrink-0 leading-none text-[var(--text-primary)]" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path
                      className="faq-sign-bar"
                      d="M9 3.75V14.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="max-w-2xl pb-6 type-body leading-relaxed text-[var(--text-secondary)]">
                {t(`items.${id}.answer`)}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HomeFaq;
