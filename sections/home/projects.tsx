'use client';

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
  /** Message key under home.projects.items.* */
  key: string;
  summary: string;
  tools: Tool[];
  href: (locale: string) => string;
  image: string;
  accent: string;
  color: string;
};

export const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'Reloways',
    key: 'reloways',
    summary:
      'Product UX, flows, and component structure for a relocation platform. Designed to move fast with a developer while keeping the system consistent.',
    tools: [
      { action: 'Designed', prep: 'with', name: 'Figma', icon: '/illustrations/projects/icons/Figma-Dark logo.svg' },
      { action: 'Developed', prep: 'with', name: 'Cursor', icon: '/illustrations/projects/icons/cursor logo.svg' },
      { action: 'Developed', prep: 'with', name: 'Claude', icon: '/illustrations/projects/icons/claude-logo.svg' },
      { action: 'Integrated', prep: 'with', name: 'AWS', icon: '/illustrations/projects/icons/AWS-Dark logo.svg' },
      { action: 'Content', prep: 'in', name: 'Strapi', icon: '/illustrations/projects/icons/strapi-logo.svg' },
      { action: 'Versioned', prep: 'on', name: 'GitHub', icon: '/illustrations/projects/icons/github-logo.svg' },
    ],
    href: (locale) => `/${locale}/projects/reloways`,
    image: '/images/home/projects/reloways_cover-1920x1080.png',
    accent: '#0b2416',
    color: '#0891B2',
  },
  {
    index: '02',
    title: 'Navonera',
    key: 'navonera',
    summary:
      'A neighborhood discovery platform connecting locals with hyper-relevant services and experiences.',
    tools: [
      { action: 'Designed', prep: 'with', name: 'Figma', icon: '/illustrations/projects/icons/Figma-Dark logo.svg' },
      { action: 'Designed', prep: 'with', name: 'Illustrator', icon: '/illustrations/projects/icons/illustrator logo.svg' },
    ],
    href: (locale) => `/${locale}/projects/navonera`,
    image: '/images/projects/navonera/navonera_cover-1.png',
    accent: '#1a0a08',
    color: '#E85530',
  },
  {
    index: '03',
    title: 'Bit',
    key: 'bit',
    summary:
      'The data table at the centre of an open-source design system. Plain by default and documented behaviour by behaviour, so teams extend it instead of rebuilding it.',
    tools: [
      { action: 'Designed', prep: 'with', name: 'Figma', icon: '/illustrations/projects/icons/Figma-Dark logo.svg' },
      { action: 'Developed', prep: 'by', name: 'Bit', icon: '/illustrations/projects/icons/bit-logo.svg' },
    ],
    href: (locale) => `/${locale}/projects/bit`,
    image: '/images/projects/table/table_cover_001.png',
    accent: '#0d0a1f',
    color: '#E11D48',
  },
  {
    index: '04',
    title: 'GoMatchIt',
    key: 'gomatchit',
    summary:
      'A 3-month design sprint that took a business process canvas from working prototype to shipped MVP, design system included.',
    tools: [
      { action: 'Designed', prep: 'with', name: 'Figma', icon: '/illustrations/projects/icons/Figma-Dark logo.svg' },
      { action: 'Designed', prep: 'with', name: 'Illustrator', icon: '/illustrations/projects/icons/illustrator logo.svg' },
    ],
    href: (locale) => `/${locale}/projects/gomatchit`,
    image: '/images/projects/gomatchit/gomatchit_cover_001-1.png',
    accent: '#090f1f',
    color: '#D97706',
  },
];

export function ToolBadge({ tool }: { tool: Tool }) {
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

export function ProjectCard({ project, viewProject }: { project: Project; viewProject: string }) {
  const locale = useLocale();
  const t = useTranslations('home.projects');
  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-[5fr_7fr] lg:gap-12 items-center py-10 border-t border-[var(--border-subtle)] first:border-t-0">

      {/* LEFT: text */}
      <div className="flex flex-col gap-5">
        <div>
          <p className="text-2xl font-bold text-[var(--text-secondary)] leading-snug lg:text-3xl mb-0">{project.title}.</p>
          <p className="text-2xl font-bold text-[var(--text-primary)] leading-snug lg:text-3xl">
            {t(`items.${project.key}.summary`)}
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

      {/* RIGHT: cover image */}
      <div className="overflow-hidden rounded-3xl" style={{ backgroundColor: project.accent }}>
        <div className="relative" style={{ aspectRatio: '16 / 9' }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
        </div>
      </div>

    </article>
  );
}

const HOME_INDICES = ['01', '03', '04'];

export default function HomeProjects() {
  const t = useTranslations('home.projects');
  const locale = useLocale();

  const homeProjects = PROJECTS.filter((p) => HOME_INDICES.includes(p.index));

  return (
    <section
      id="projects"
      className="scroll-mt-[var(--spacing-12)] py-20 lg:py-28 border-t border-[var(--border-subtle)]"
    >
      <div className="mx-auto max-w-[1360px] px-6">

        <div className="flex items-end justify-between mb-4">
          <h2 className="text-3xl font-bold text-[var(--text-primary)] lg:text-4xl">
            Selected work.
          </h2>
          <Link
            href={`/${locale}/projects`}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {t('viewAll')} →
          </Link>
        </div>

        <div>
          {homeProjects.map((project) => (
            <ProjectCard
              key={project.index}
              project={project}
              viewProject={t('viewCase')}
            />
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--surface-1)] transition-colors"
          >
            {t('viewAll')} →
          </Link>
        </div>

      </div>
    </section>
  );
}
