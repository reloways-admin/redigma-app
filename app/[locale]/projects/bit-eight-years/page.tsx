'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { PROJECTS, ToolBadge } from '@/sections/home/projects';
import { HomeFinalCta } from '@/sections/home/final-cta';
import { getBitCopy, type Figure } from './copy';

function CaseFigure({ figure }: { figure: Figure }) {
  if (!figure.src) {
    return (
      <figure className="case-figure">
        <div
          className="flex w-full items-center justify-center rounded-2xl border border-dashed border-[var(--border-subtle)] bg-[var(--surface-1)]"
          style={{ aspectRatio: figure.aspect ?? '16/9' }}
        >
          <p className="max-w-lg px-8 text-center text-[1.125rem] leading-relaxed text-[var(--text-secondary)]">
            {figure.placeholder}
          </p>
        </div>
      </figure>
    );
  }
  return (
    <figure className="case-figure">
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white"
        style={{ aspectRatio: figure.aspect ?? '16/9' }}
      >
        <Image
          src={figure.src}
          alt={figure.alt ?? ''}
          fill
          className="object-contain"
          sizes="(max-width: 1140px) 100vw, 1056px"
        />
      </div>
      {figure.caption ? <figcaption className="case-caption">{figure.caption}</figcaption> : null}
    </figure>
  );
}

function SectionHeading({ number, title, kicker }: { number: string; title: string; kicker?: string }) {
  return (
    <header>
      <span className="case-number">{kicker ? `${number} · ${kicker}` : number}</span>
      <h2 className="case-heading">{title}</h2>
    </header>
  );
}

export default function BitEightYearsPage() {
  const locale = useLocale();
  const t = getBitCopy(locale);
  const project = PROJECTS.find((p) => p.index === '03')!;

  return (
    <div className="bg-[var(--background)]">

      {/* ── Hero ── */}
      <section className="border-b border-[var(--border-subtle)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-6">

          <p className="type-kicker text-[#732fff] mb-6">{t.kicker}</p>

          <h1 className="text-4xl font-bold text-[var(--text-primary)] leading-tight lg:text-6xl mb-6 whitespace-pre-line">
            {t.title}
          </h1>
          <p className="case-lead">{t.lead}</p>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-[var(--border-subtle)] pt-8 sm:grid-cols-3 lg:grid-cols-5">
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
            <div className="col-span-2 sm:col-span-3 lg:col-span-5">
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
            src="/images/projects/table/table_cover_001.png"
            alt={t.heroAlt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1360px) 100vw, 1360px"
            priority
          />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="case-prose mx-auto px-6 pb-24 space-y-20">

        <div className="case-section space-y-6">
          <SectionHeading number={t.intro.number} title={t.intro.title} />
          {t.intro.body.map((p) => <p key={p}>{p}</p>)}
        </div>

        {t.areas.map((area) => (
          <div key={area.number} className="case-section space-y-8">
            <SectionHeading number={area.number} kicker={area.kicker} title={area.title} />
            <div className="space-y-6">
              {area.body.map((p) => <p key={p}>{p}</p>)}
            </div>

            {area.blocks.map((block) => (
              <div key={block.heading} className="space-y-5 pt-4">
                <h3 className="case-subheading">{block.heading}</h3>
                {block.body.map((p) => <p key={p}>{p}</p>)}
                <CaseFigure figure={block.figure} />
              </div>
            ))}
          </div>
        ))}

        <div className="case-section space-y-6">
          <SectionHeading number={t.learned.number} title={t.learned.title} />
          {t.learned.body.map((p) => <p key={p}>{p}</p>)}
        </div>

        <div className="case-section space-y-6">
          <h2 className="case-subheading">{t.selection.title}</h2>
          {t.selection.body.map((p) => <p key={p}>{p}</p>)}
        </div>

      </div>

      <HomeFinalCta />

    </div>
  );
}
