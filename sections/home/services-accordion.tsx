'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const SERVICES = [
  {
    id: 'shape',
    key: 'shape' as const,
    imageSrc: '/illustrations/how-i-work/sketch-wireframes-and-product-design.svg',
    color: '#1C83FB',
  },
  {
    id: 'fix',
    key: 'fix' as const,
    imageSrc: '/illustrations/how-i-work/sketch-ux-audit-and-redesign.svg',
    color: '#E52225',
  },
  {
    id: 'scale',
    key: 'scale' as const,
    imageSrc: '/illustrations/how-i-work/sketch-how-i-work-stepping.svg',
    color: '#10B981',
  },
  {
    id: 'ai',
    key: 'ai' as const,
    imageSrc: '/illustrations/how-i-work/sketch-ai.svg',
    color: '#E76F4D',
  },
];

/** Plus turning into an x. One glyph, rotated, so the two states cannot drift. */
function ToggleSign({ open, animate }: { open: boolean; animate: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
      style={{
        transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        transition: animate ? 'transform 220ms ease' : 'none',
      }}
    >
      <path d="M9 3.75V14.25M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * What I actually do.
 *
 * Back to an accordion: one service open at a time, its body and its
 * deliverables revealed together, and the panel on the right following
 * whichever row is open. The rows are real buttons with aria-expanded and
 * aria-controls rather than clickable divs, so the keyboard and screen readers
 * get the same accordion everyone else does.
 */
export default function HomeServicesAccordion() {
  const t = useTranslations('home.services');
  const [openId, setOpenId] = useState<string>(SERVICES[0].id);
  const reduceMotion = useReducedMotion();
  const panelIdBase = useId();

  const active = SERVICES.find((s) => s.id === openId) ?? SERVICES[0];

  /* With reduced motion the panels still open and close, they just do it
     instantly instead of sliding. */
  const drawer = reduceMotion
    ? { duration: 0 }
    : { duration: 0.22, ease: 'easeInOut' as const };

  return (
    <section id="services" className="border-t border-[var(--border-subtle)] py-20 lg:py-28 bg-[var(--background)] scroll-mt-[var(--spacing-12)]">
      <div className="mx-auto max-w-[1360px] px-6">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] lg:text-4xl">
            {t('heading')}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Left: the accordion */}
          <div>
            {SERVICES.map((service) => {
              const isOpen = service.id === openId;
              const panelId = `${panelIdBase}-${service.id}`;

              return (
                <div key={service.id} className="border-b border-[var(--border-subtle)]">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenId(isOpen ? '' : service.id)}
                      className="flex w-full items-start justify-between gap-4 py-5 text-start text-lg font-medium transition-colors duration-150 cursor-pointer"
                      style={{ color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                    >
                      <span className="flex-1">{t(`items.${service.key}.title`)}</span>
                      <span className="mt-1">
                        <ToggleSign open={isOpen} animate={!reduceMotion} />
                      </span>
                    </button>
                  </h3>

                  {/* The panel element is always in the DOM, even when it is
                      empty, so aria-controls always points at something real. */}
                  <div id={panelId}>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={drawer}
                          className="overflow-hidden"
                        >
                          <div className="pb-6">
                            <p className="max-w-sm type-body leading-relaxed text-[var(--text-secondary)]">
                              {t(`items.${service.key}.body`)}
                            </p>

                            {/* The deliverables ride along with the body rather
                                than being a second thing to click for. */}
                            <ul className="mt-4 flex max-w-sm flex-col gap-2">
                              {(t.raw(`items.${service.key}.bullets`) as string[]).map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex gap-2.5 text-sm leading-normal text-[var(--text-secondary)]"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full"
                                    style={{ backgroundColor: service.color }}
                                  />
                                  {bullet}
                                </li>
                              ))}
                            </ul>

                            {/* Mobile illustration, full width under its service */}
                            <div
                              className="relative mt-5 w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] lg:hidden"
                              style={{ aspectRatio: '16 / 9' }}
                            >
                              <Image
                                src={service.imageSrc}
                                alt=""
                                fill
                                className="object-contain p-6"
                                sizes="100vw"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: image panel, desktop only, following the open row */}
          <div
            className="sticky top-28 hidden overflow-hidden rounded-2xl border border-[var(--border-subtle)] lg:block"
            style={{ aspectRatio: '4 / 3' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -12, scale: 0.96 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const }}
                className="absolute inset-0"
              >
                <Image
                  src={active.imageSrc}
                  alt=""
                  fill
                  className="object-contain p-12"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
