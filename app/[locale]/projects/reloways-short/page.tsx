'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { PROJECTS, ToolBadge } from '@/sections/home/projects';
import { HomeFinalCta } from '@/sections/home/final-cta';
import { getCopy } from './copy';

function CaseFigure({
  src,
  alt,
  caption,
  aspect = '16/9',
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: string;
}) {
  return (
    <figure className="case-figure">
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 1140px) 100vw, 1056px"
        />
      </div>
      {caption ? <figcaption className="case-caption">{caption}</figcaption> : null}
    </figure>
  );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
  return (
    <header>
      <span className="case-number">{number}</span>
      <h2 className="case-heading">{title}</h2>
    </header>
  );
}

/* One figure per build block, in order. */
const BLOCK_FIGURES = [
  { src: '/images/projects/reloways/reloways-onboarding-mobile.png', aspect: '3260/2369' },
  { src: '/images/projects/reloways/reloways-journey.png', aspect: '3840/2614' },
  { src: '/images/projects/reloways/reloways-next-step.png', aspect: '2080/1320' },
];

export default function RelowaysShortPage() {
  const project = PROJECTS.find((p) => p.index === '01')!;
  const t = getCopy(useLocale());

  return (
    <div className="bg-[var(--background)]">

      {/* ── Hero ── */}
      <section className="border-b border-[var(--border-subtle)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-6">

          <p className="type-kicker text-[#732fff] mb-6">{t.kicker}</p>

          <h1 className="text-4xl font-bold text-[var(--text-primary)] leading-tight lg:text-6xl mb-6 whitespace-pre-line">
            {t.title}
          </h1>
          <p className="case-lead">
            {t.lead}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-4 lg:grid-cols-5">
            {t.meta.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#732fff] underline underline-offset-4 hover:no-underline"
                  >
                    {item.value}
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M5 3h6v6M11 3L3.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ) : (
                  <p className="text-sm text-[var(--text-primary)] font-medium">{item.value}</p>
                )}
              </div>
            ))}
            <div className="col-span-2 sm:col-span-4 lg:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-3">{t.toolsLabel}</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {project.tools.map((tool) => (
                  <ToolBadge key={tool.name} tool={tool} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="mx-auto max-w-[1360px] px-6 py-12">
        <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '16/9' }}>
          <Image
            src="/images/home/projects/reloways-hero-laptop.jpg"
            alt={t.heroAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1360px) 100vw, 1360px"
            priority
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="case-prose mx-auto px-6 pb-24 space-y-20">

        {/* 01 */}
        <div className="case-section space-y-6">
          <SectionHeading number={t.problem.number} title={t.problem.title} />
          <p>
            {t.problem.p1}
          </p>
          <p>
            {t.problem.p2}
          </p>
          <p>
            {t.problem.p3}
          </p>
          <p>
            {t.problem.p4}
          </p>
          <p>
            {t.problem.p5}
          </p>
          <blockquote className="case-quote">
            <p>
              {t.problem.quote}
            </p>
          </blockquote>

          <CaseFigure
            src="/images/projects/reloways/reloways-before-state.png"
            alt={t.problem.figureAlt}
            aspect="2915/1820"
            caption={t.problem.figureCaption}
          />
        </div>

        {/* 02 */}
        <div className="case-section space-y-6">
          <SectionHeading number={t.audience.number} title={t.audience.title} />
          <p>
            {t.audience.p1}
          </p>
          <p>
            {t.audience.p2}
          </p>
          <p>
            {t.audience.p3}
          </p>
          <p>
            {t.audience.p4}
          </p>

          <CaseFigure
            src="/images/projects/reloways/reloways-personas.png"
            alt={t.audience.figureAlt}
            aspect="2842/1521"
            caption={t.audience.figureCaption}
          />
        </div>

        {/* 03 */}
        <div className="case-section space-y-8">
          <SectionHeading number={t.built.number} title={t.built.title} />
          <p>
            {t.built.intro}
          </p>

          {t.built.blocks.map((block, i) => (
            <div key={block.heading} className="space-y-5">

              <div className="flex items-baseline gap-3">
                <span className="text-sm font-bold text-[#732fff]">{block.number}</span>
                <h3 className="case-subheading">{block.heading}</h3>
              </div>

              {/* The decision behind the block, before the description of it */}
              <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-6 space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">
                    {t.built.soughtLabel}
                  </p>
                  <p className="text-[1.125rem] leading-[1.6] text-[var(--text-primary)]">{block.sought}</p>
                </div>
                <div className="border-t border-[var(--border-subtle)] pt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#732fff] mb-1.5">
                    {t.built.decidedLabel}
                  </p>
                  <p className="text-[1.125rem] leading-[1.6] text-[var(--text-primary)]">{block.decided}</p>
                </div>
              </div>

              {block.body.map((para) => <p key={para}>{para}</p>)}
              <CaseFigure
                src={BLOCK_FIGURES[i].src}
                alt={block.figureAlt!}
                aspect={BLOCK_FIGURES[i].aspect}
                caption={block.figureCaption}
              />
            </div>
          ))}

          <p>
            {t.built.closing}
          </p>
        </div>

        {/* 04 */}
        <div className="case-section space-y-6">
          <SectionHeading number={t.role.number} title={t.role.title} />
          <p>
            {t.role.intro}
          </p>
          {/* Titled entries rather than bullets: each one names a discipline
              and then says what it actually meant on this project. */}
          <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
            {t.role.items.map((item) => (
              <div key={item.title} className="py-5">
                <p className="text-[1.1875rem] font-bold text-[var(--text-primary)] mb-1.5">{item.title}</p>
                <p className="text-[1.125rem] leading-[1.65] text-[var(--text-primary)]">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 space-y-6">
            <h3 className="case-subheading">{t.role.hardTitle}</h3>
            {t.role.hard.map((para) => <p key={para}>{para}</p>)}
          </div>
        </div>

        {/* 05 */}
        <div className="case-section space-y-6">
          <SectionHeading number={t.status.number} title={t.status.title} />
          <p>
            {t.status.p1}
          </p>
          <p>
            {t.status.p2}
          </p>
          <p>
            {t.status.p3}
          </p>
          <p>
            {t.status.p4}
          </p>
          <p>
            {t.status.p5}
          </p>

          <CaseFigure
            src="/images/projects/reloways/reloways-live-phones.png"
            alt={t.status.figureAlt!}
            aspect="2740/1850"
            caption={t.status.figureCaption}
          />
        </div>

      </div>

      <HomeFinalCta />

    </div>
  );
}
