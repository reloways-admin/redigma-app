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

function PlaceholderFigure({ label, aspect = '16/9' }: { label: string; aspect?: string }) {
  return (
    <figure className="case-figure">
      <div
        className="flex w-full items-center justify-center rounded-2xl border border-dashed border-[var(--border-subtle)] bg-[var(--surface-1)]"
        style={{ aspectRatio: aspect }}
      >
        <p className="max-w-lg px-8 text-center text-[1.125rem] leading-relaxed text-[var(--text-secondary)]">
          {label}
        </p>
      </div>
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

export default function RelowaysShortPage() {
  const project = PROJECTS.find((p) => p.index === '01')!;
  const t = getCopy(useLocale());

  return (
    <div className="bg-[var(--background)]">

      {/* ── Hero ── */}
      <section className="border-b border-[var(--border-subtle)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-6">

          <p className="type-kicker text-[#732fff] mb-6">{t.kicker}</p>

          <h1 className="text-4xl font-bold text-[var(--text-primary)] leading-tight lg:text-6xl mb-6">
            {t.title}
          </h1>
          <p className="case-lead">
            {t.lead}
          </p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-4 lg:grid-cols-5">
            {t.meta.map((item) => (
              <div key={item.label}>
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-1.5">{item.label}</p>
                <p className="text-sm text-[var(--text-primary)] font-medium">{item.value}</p>
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
            <div key={block.heading} className="space-y-4">
              <h3 className="case-subheading">{block.heading}</h3>
              <p>{block.body}</p>
              <PlaceholderFigure label={block.figure} aspect={i === 2 ? '4/3' : '16/9'} />
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
          <ul>
            {t.role.items.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <p>
            {t.role.closing}
          </p>
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

          <PlaceholderFigure
            label={t.status.figure}
            aspect="16/9"
          />
        </div>

      </div>

      <HomeFinalCta />

    </div>
  );
}
