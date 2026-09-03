'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import { HomeFinalCta } from '@/sections/home/final-cta';
import { getFincatCopy, type Figure } from './copy';

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

export default function FincatPage() {
  const locale = useLocale();
  const t = getFincatCopy(locale);

  return (
    <div className="bg-[var(--background)]">

      {/* ── Hero ── */}
      <section className="border-b border-[var(--border-subtle)] py-16 lg:py-20">
        <div className="mx-auto max-w-[1360px] px-6">

          <p className="type-kicker text-[#732fff] mb-6">{t.kicker}</p>

          <h1 className="text-4xl font-bold text-[var(--text-primary)] leading-tight lg:text-6xl mb-6 whitespace-pre-line">
            {t.title}
          </h1>
          <p className="type-kicker text-[var(--text-secondary)] mb-6 normal-case tracking-normal text-base">
            {t.subtitle}
          </p>
          <div className="space-y-5">
            {t.lead.map((p) => <p key={p} className="case-lead">{p}</p>)}
          </div>

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
          </div>
        </div>
      </section>

      {/* ── Hero image ── */}
      <div className="mx-auto max-w-[1360px] px-6 py-12">
        {t.heroFigure.src ? (
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: t.heroFigure.aspect }}>
            <Image
              src={t.heroFigure.src}
              alt={t.heroFigure.alt ?? ''}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1360px) 100vw, 1360px"
              priority
            />
          </div>
        ) : (
          <div
            className="flex w-full items-center justify-center rounded-2xl border border-dashed border-[var(--border-subtle)] bg-[var(--surface-1)]"
            style={{ aspectRatio: t.heroFigure.aspect }}
          >
            <p className="max-w-lg px-8 text-center text-[1.125rem] leading-relaxed text-[var(--text-secondary)]">
              {t.heroFigure.placeholder}
            </p>
          </div>
        )}
      </div>

      {/* ── Content ── */}
      <div className="case-prose mx-auto px-6 pb-24 space-y-20">

        {t.sections.map((section) => (
          <div key={section.number} className="case-section space-y-8">
            <SectionHeading number={section.number} kicker={section.kicker} title={section.title} />
            <div className="space-y-6">
              {section.body.map((p) => <p key={p}>{p}</p>)}
            </div>
            {section.figure ? <CaseFigure figure={section.figure} /> : null}
            {section.figures?.map((f) => <CaseFigure key={f.src ?? f.placeholder} figure={f} />)}

            {section.blocks?.map((block) => (
              <div key={block.heading} className="space-y-5 pt-4">
                <h3 className="case-subheading">{block.heading}</h3>
                {block.body.map((p) => <p key={p}>{p}</p>)}
                {block.figure ? <CaseFigure figure={block.figure} /> : null}
              </div>
            ))}
          </div>
        ))}

        <div className="case-section space-y-6">
          <CaseFigure figure={t.closingFigure} />
          <h2 className="case-heading">{t.closing.title}</h2>
          {t.closing.body.map((p) => <p key={p}>{p}</p>)}
        </div>

      </div>

      <HomeFinalCta />

    </div>
  );
}
