'use client';

import { useId, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

/** Nine questions, in the order they are asked. */
const ITEMS = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9'] as const;

/**
 * FAQ.
 *
 * Centred: a centred heading over a single centred column, so the section reads
 * as a closing summary rather than as another left-aligned content block.
 *
 * It used to be <details>/<summary>, which the browser cannot animate. Each row
 * is a button with aria-expanded and aria-controls now, and the answer slides
 * open as a drawer on height and opacity. The plus rotates 45 degrees into an x
 * on the way in and back on the way out. Under prefers-reduced-motion both the
 * drawer and the rotation happen instantly.
 *
 * Several answers carry a bracketed placeholder. Those are facts only Amir can
 * supply, and they are left visible on purpose so nothing gets invented and
 * nothing gets quietly shipped half-written.
 */
export function HomeFaq() {
  const t = useTranslations('home.faq');
  const reduceMotion = useReducedMotion();
  const panelIdBase = useId();

  /* A set rather than a single id: the rows used to be independent <details>
     and closing one to read another would be a step backwards. */
  const [openIds, setOpenIds] = useState<ReadonlySet<string>>(() => new Set([ITEMS[0]]));

  function toggle(id: string) {
    setOpenIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  const drawer = reduceMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      id="faq"
      className="border-t border-[var(--border-subtle)] bg-[var(--background)] py-20 lg:py-28 scroll-mt-[var(--spacing-12)]"
    >
      <div className="mx-auto max-w-[1360px] px-6">

        <h2 className="mb-10 text-center text-3xl font-bold text-[var(--text-primary)] lg:mb-14 lg:text-4xl">
          {t('title')}
        </h2>

        <div className="mx-auto max-w-3xl">
          {ITEMS.map((id) => {
            const isOpen = openIds.has(id);
            const panelId = `${panelIdBase}-${id}`;
            const buttonId = `${panelIdBase}-${id}-button`;

            return (
              <div key={id} className="border-b border-[var(--border-subtle)]">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(id)}
                    className="flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-start text-lg font-medium text-[var(--text-primary)]"
                  >
                    <span className="flex-1">{t(`items.${id}.question`)}</span>
                    <span
                      className="mt-1 shrink-0 leading-none"
                      aria-hidden="true"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: reduceMotion ? 'none' : 'transform 280ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M9 3.75V14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>

                {/* The panel element is always in the DOM, even when it is
                    empty, so aria-controls always points at something real.
                    Only the answer inside it comes and goes. */}
                <div id={panelId} role="region" aria-labelledby={buttonId}>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={drawer}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 type-body leading-relaxed text-[var(--text-secondary)]">
                          {t(`items.${id}.answer`)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default HomeFaq;
