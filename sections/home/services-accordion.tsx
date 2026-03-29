'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

const SERVICES = [
  {
    id: 'shape',
    key: 'shape' as const,
    imageSrc: '/illustrations/how-i-work/sketch-how-i-work-guiding.svg',
    color: '#9333EA',
  },
  {
    id: 'fix',
    key: 'fix' as const,
    imageSrc: '/illustrations/entry-point/sketch-define.svg',
    color: '#0EA5E9',
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
    imageSrc: '/illustrations/how-i-work/sketch-how-i-work-define.svg',
    color: '#F59E0B',
  },
];

function PlusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9 3.75V14.25M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function HomeServicesAccordion() {
  const t = useTranslations('home.services');
  const [openId, setOpenId] = useState<string>(SERVICES[0].id);

  const active = SERVICES.find((s) => s.id === openId) ?? SERVICES[0];

  return (
    <section id="services" className="border-t border-[var(--border-subtle)] py-20 lg:py-28 bg-[var(--background)]">
      <div className="mx-auto max-w-[1360px] px-6">

        {/* Heading */}
        <div className="mb-14">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] lg:text-4xl">
            {t('heading')}
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">

          {/* Left: service list */}
          <div>
            {SERVICES.map((service) => {
              const isOpen = service.id === openId;
              return (
                <div
                  key={service.id}
                  className="border-b border-[var(--border-subtle)] py-5 cursor-pointer"
                  onClick={() => setOpenId(isOpen ? '' : service.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span
                        className="text-lg font-medium transition-colors duration-150 block"
                        style={{ color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                      >
                        {t(`items.${service.key}.title`)}
                      </span>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.22, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <p className="type-body text-[var(--text-secondary)] leading-relaxed max-w-sm">
                              {t(`items.${service.key}.body`)}
                            </p>
                            {/* Mobile image — shown inline below body, hidden on desktop */}
                            <div
                              className="lg:hidden mt-5 relative overflow-hidden rounded-2xl border border-[var(--border-subtle)]"
                              style={{ aspectRatio: '4 / 3' }}
                            >
                              <Image
                                src={service.imageSrc}
                                alt={t(`items.${service.key}.title`)}
                                fill
                                className="object-contain p-10 opacity-80"
                                sizes="100vw"
                              />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <span
                      className="mt-1 shrink-0 transition-colors duration-150"
                      style={{ color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                    >
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: image panel — desktop only */}
          <div
            className="hidden lg:block relative overflow-hidden rounded-2xl"
            style={{ aspectRatio: '4 / 3', border: `1.5px solid ${active.color}` }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src={active.imageSrc}
                  alt={t(`items.${active.key}.title`)}
                  fill
                  className="object-contain p-12 opacity-80"
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
