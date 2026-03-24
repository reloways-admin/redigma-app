'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

type Tool = {
  action: string;
  prep: string;
  name: string;
  icon: string;
};

type Project = {
  index: string;
  title: string;
  summary: string;
  tools: Tool[];
  href: (locale: string) => string;
  images: string[];
  accent: string;
};

const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'Reloways',
    summary:
      'Product UX, flows, and component structure for a relocation platform. Designed to move fast with a developer while keeping the system consistent.',
    tools: [
      { action: 'Designed', prep: 'with', name: 'Figma', icon: '/illustrations/projects/icons/Figma-Dark logo.svg' },
      { action: 'Developed', prep: 'with', name: 'Cursor', icon: '/illustrations/projects/icons/cursor logo.svg' },
      { action: 'Integrated', prep: 'with', name: 'AWS', icon: '/illustrations/projects/icons/AWS-Dark logo.svg' },
    ],
    href: (locale) => `/${locale}/projects/reloways`,
    images: ['/illustrations/projects/reloways/reloways.png'],
    accent: '#0b2416',
  },
  {
    index: '02',
    title: 'Navonera',
    summary:
      'A neighborhood discovery platform connecting locals with hyper-relevant services and experiences.',
    tools: [
      { action: 'Designed', prep: 'with', name: 'Figma', icon: '/illustrations/projects/icons/Figma-Dark logo.svg' },
      { action: 'Designed', prep: 'with', name: 'Illustrator', icon: '/illustrations/projects/icons/illustrator logo.svg' },
    ],
    href: (locale) => `/${locale}/projects/navonera`,
    images: ['/illustrations/projects/reloways/reloways.png'],
    accent: '#1a0a08',
  },
  {
    index: '03',
    title: 'Bit',
    summary:
      'Improved clarity and usability across key product areas, with a focus on structure, decision points, and reducing friction for users.',
    tools: [
      { action: 'Designed', prep: 'with', name: 'Figma', icon: '/illustrations/projects/icons/Figma-Dark logo.svg' },
      { action: 'Developed', prep: 'by', name: 'Bit', icon: '/illustrations/projects/icons/bit-logo.svg' },
    ],
    href: (locale) => `/${locale}/projects/bit`,
    images: ['/illustrations/projects/bit/bit.png'],
    accent: '#0d0a1f',
  },
  {
    index: '04',
    title: 'GoMatchIt',
    summary:
      'A 3-month design sprint to launch a usable and scalable B2B marketplace MVP.',
    tools: [
      { action: 'Designed', prep: 'with', name: 'Figma', icon: '/illustrations/projects/icons/Figma-Dark logo.svg' },
      { action: 'Designed', prep: 'with', name: 'Illustrator', icon: '/illustrations/projects/icons/illustrator logo.svg' },
    ],
    href: (locale) => `/${locale}/projects/gomatchit`,
    images: ['/illustrations/projects/reloways/reloways.png'],
    accent: '#090f1f',
  },
];

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M11 13.5L6.5 9L11 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M7 4.5L11.5 9L7 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ToolBadge({ tool }: { tool: Tool }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="h-9 w-9 shrink-0 rounded-xl overflow-hidden bg-[var(--surface-2)] flex items-center justify-center">
        {tool.icon ? (
          <Image src={tool.icon} alt={tool.name} width={36} height={36} className="object-cover" />
        ) : (
          <span className="text-[11px] font-bold text-[var(--text-primary)]">
            {tool.name.slice(0, 2)}
          </span>
        )}
      </div>
      <div className="leading-tight">
        <div className="text-xs font-semibold text-[var(--text-primary)]">{tool.action}</div>
        <div className="text-xs text-[var(--text-secondary)]">{tool.prep} {tool.name}</div>
      </div>
    </div>
  );
}

function ProjectCard({ project, viewProject }: { project: Project; viewProject: string }) {
  const locale = useLocale();
  const [idx, setIdx] = React.useState(0);
  const total = project.images.length;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <article className="grid grid-cols-1 gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16 items-center py-16 border-t border-[var(--border-subtle)] first:border-t-0">

      {/* LEFT: text */}
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-2xl font-bold text-[var(--text-secondary)] leading-snug lg:text-3xl mb-0">{project.title}.</p>
          <p className="text-2xl font-bold text-[var(--text-primary)] leading-snug lg:text-3xl">
            {project.summary}
          </p>
        </div>

        {/* Tool badges */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-1">
          {project.tools.map((tool) => (
            <ToolBadge key={tool.name} tool={tool} />
          ))}
        </div>

        {/* CTA */}
        <div className="pt-2">
          <Link
            href={project.href(locale)}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--surface-1)] transition-colors"
          >
            {viewProject} →
          </Link>
        </div>
      </div>

      {/* RIGHT: carousel */}
      <div className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: '4 / 3', backgroundColor: project.accent }}>
        <Image
          src={project.images[idx]}
          alt={project.title}
          fill
          className="object-cover transition-opacity duration-300"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-[rgba(15,15,20,0.7)] text-white hover:bg-[rgba(15,15,20,0.9)] transition-colors"
          aria-label="Previous image"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-9 w-9 flex items-center justify-center rounded-full bg-[rgba(15,15,20,0.7)] text-white hover:bg-[rgba(15,15,20,0.9)] transition-colors"
          aria-label="Next image"
        >
          <ArrowRight />
        </button>

        {/* Dot indicators — only shown when multiple images */}
        {total > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === idx ? 20 : 6,
                  backgroundColor: i === idx ? '#fff' : 'rgba(255,255,255,0.4)',
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

    </article>
  );
}

export default function HomeProjects() {
  const t = useTranslations('home.projects');

  return (
    <section
      id="projects"
      className="scroll-mt-[var(--spacing-12)] py-20 lg:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-[1360px] px-6">

        <div className="mb-4">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] lg:text-4xl">
            Selected work.
          </h2>
        </div>

        <div>
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.index}
              project={project}
              viewProject={t('viewCase')}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
