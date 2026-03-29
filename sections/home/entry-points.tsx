'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

// ─── 3-card layout (active version) ─────────────────────────────────────────

const CARDS = [
  { id: 'live',   color: '#732FFF', illustration: '/illustrations/entry-point/sketch-live.svg' },
  { id: 'early',  color: '#155DFC', illustration: '/illustrations/entry-point/sketch-define.svg' },
  { id: 'before', color: '#0D9B3B', illustration: '/illustrations/how-i-work/sketch-how-i-work-stepping.svg' },
] as const;

type StageId = 'live' | 'early' | 'before';

export function HomeEntryPoints() {
  const t = useTranslations('home.entryPoints');

  return (
    <section
      id="entry-points"
      className="bg-[var(--background)] py-24 lg:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-[1360px] px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-[var(--foreground)] lg:text-4xl">
            {t('title')}{' '}
            <span className="text-[var(--text-secondary)]">{t('titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            {t('subtitle')}
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map(({ id, color, illustration }) => (
            <div
              key={id}
              className="flex flex-col overflow-hidden rounded-2xl bg-[var(--surface-1)]"
              style={{ border: `1.5px solid ${color}` }}
            >
              {/* Colored header bar */}
              <div
                className="px-6 py-3"
                style={{ backgroundColor: color }}
              >
                <span className="text-sm font-medium text-white">
                  {t(`stages.${id as StageId}.label`)}
                </span>
              </div>

              {/* Illustration */}
              <div className="relative aspect-video w-full bg-[var(--surface-2)]">
                <Image
                  src={illustration}
                  alt=""
                  fill
                  className="object-contain p-8 opacity-80"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="text-lg font-semibold leading-snug text-[var(--text-primary)]">
                  {t(`stages.${id as StageId}.heading`)}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {t(`stages.${id as StageId}.body`)}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── Toggle version (kept for reference) ─────────────────────────────────────

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STAGE_IDS = ['before', 'early', 'live'] as const;
type ToggleStageId = typeof STAGE_IDS[number];

const STAGE_META: Record<ToggleStageId, { shapeColor: string; shapePosition: { gridRow: number; gridCol: number } }> = {
  before: { shapeColor: '#22c55e', shapePosition: { gridRow: 3, gridCol: 4 } },
  early:  { shapeColor: '#3b82f6', shapePosition: { gridRow: 2, gridCol: 5 } },
  live:   { shapeColor: '#732fff', shapePosition: { gridRow: 3, gridCol: 5 } },
};

const COLS = 9;
const ROWS = 6;

export function HomeEntryPointsToggle() {
  const t = useTranslations('home.entryPoints');
  const [activeId, setActiveId] = useState<ToggleStageId>('live');

  const meta = STAGE_META[activeId];

  return (
    <section
      id="entry-points"
      className="bg-[var(--background)] py-24 lg:py-32 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-[1360px] px-6">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-[var(--foreground)] lg:text-4xl">
            {t('title')}{' '}
            <span className="text-[var(--text-secondary)]">{t('titleHighlight')}</span>
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            {t('subtitle')}
          </p>
        </div>

        {/* Tab pills */}
        <div className="mb-16 flex justify-center">
          <div className="relative inline-flex items-center rounded-full border border-[var(--border-subtle)] p-1">
            {STAGE_IDS.map((id) => {
              const isActive = id === activeId;
              return (
                <button
                  key={id}
                  onClick={() => setActiveId(id)}
                  className="relative z-10 inline-flex items-center px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-full"
                  style={{ color: isActive ? '#fff' : 'var(--text-secondary)' }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: '#732fff' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 36 }}
                    />
                  )}
                  <span className="relative z-10">{t(`stages.${id}.label`)}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content panel */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left: text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId + '-text'}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <h3 className="text-3xl font-bold text-[var(--text-primary)] mb-4 lg:text-4xl leading-tight">
                {t(`stages.${activeId}.heading`)}
              </h3>
              <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-md">
                {t(`stages.${activeId}.body`)}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Right: grid canvas */}
          <div
            className="relative overflow-hidden border border-[var(--border-subtle)]"
            style={{ aspectRatio: '7 / 5' }}
          >
            {/* Grid lines */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, var(--border-subtle) 1px, transparent 1px),
                  linear-gradient(to bottom, var(--border-subtle) 1px, transparent 1px)
                `,
                backgroundSize: `${100 / COLS}% ${100 / ROWS}%`,
              }}
            />

            {/* Colored shape */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId + '-shape'}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="absolute rounded-sm"
                style={{
                  backgroundColor: meta.shapeColor,
                  width: `${(100 / COLS) * 1.5}%`,
                  height: `${(100 / ROWS) * 1.5}%`,
                  left: `${(meta.shapePosition.gridCol - 1) * (100 / COLS)}%`,
                  top: `${(meta.shapePosition.gridRow - 1) * (100 / ROWS)}%`,
                  transform: 'translate(-10%, -10%)',
                }}
              />
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
