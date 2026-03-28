'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { PROJECTS, ProjectCard } from '@/sections/home/projects';

export default function ProjectsPage() {
  const t = useTranslations('home.projects');
  const locale = useLocale();

  return (
    <div className="bg-[var(--background)] flex-1">
      <div className="mx-auto max-w-[1360px] px-6 py-20 lg:py-28">

        <div className="flex items-end justify-between mb-4">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] lg:text-4xl">
            All work.
          </h1>
          <Link
            href={`/${locale}#projects`}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            ← Back
          </Link>
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
    </div>
  );
}
