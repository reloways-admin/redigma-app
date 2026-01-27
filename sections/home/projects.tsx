'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

import { Kicker } from '@/components/ui/kicker';
import { ProjectMetaLabel } from '@/components/projects/project-meta-label';

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="project-tag">
      {children}
    </span>
  );
}

interface ProjectCardProps {
  metaLabel: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;
  imageSrc: string;
  ctaLabel: string;
  accentColor: string; // Added for dynamic variant styling
}

function ProjectCard({ metaLabel, title, summary, tags, href, imageSrc, ctaLabel, accentColor }: ProjectCardProps) {
  return (
    /* Injecting the local CSS variable so project-meta-label can consume it */
    <div 
      className="group flex flex-col" 
      style={{ '--accent-color': accentColor } as React.CSSProperties}
    >
      <div className="flex">
        <ProjectMetaLabel>{metaLabel}</ProjectMetaLabel>
      </div>

      <article className="project-card">
        <div className="flex flex-col items-start text-left">
          <h3 className="type-section-title text-[var(--text-primary)]">
            {title}
          </h3>
          <p className="mt-4 type-section-subtitle text-[var(--text-secondary)] max-w-md">
            {summary}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="mt-10">
            <Link href={href} className="project-link">
              {ctaLabel}
            </Link>
          </div>
        </div>

        <div className="relative aspect-video w-full overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-1)]">
          <Image 
            src={imageSrc} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </article>
    </div>
  );
}

export default function HomeProjects() {
  const t = useTranslations('home.projects');
  const locale = useLocale();

  const PROJECTS = [
    {
      metaLabel: 'PLATFORM',
      title: 'Reloways',
      accentColor: 'var(--green-900)', // Dynamic color for Reloways
      summary: 'Product UX, flows, and component structure for a relocation platform.',
      tags: ['Product UX', 'Design system', 'User flows'],
      href: '/project/reloways',
      imageSrc: '/illustrations/projects/reloways/reloways.jpg',
    },
    {
      metaLabel: 'B2B SAAS',
      title: 'Bit',
      accentColor: 'var(--purple-600)', // Dynamic color for Bit
      summary: 'Improved clarity and usability across key product areas.',
      tags: ['UX audit', 'IA', 'UI clarity'],
      href: '/project/bit',
      imageSrc: '/illustrations/projects/bit/bit.png',
    },
    {
      metaLabel: 'FINTECH',
      title: 'Fincat',
      accentColor: 'var(--coral-700)', // Dynamic color for Fincat
      summary: 'Improved clarity and usability across key product areas.',
      tags: ['Fintech', 'Refinement', 'MVP'],
      href: '/project/fincat',
      imageSrc: '/illustrations/projects/fincat/fintech.png',
    },
  ];

  return (
    <section className="projects-section py-24 lg:py-32 border-t border-[var(--border-subtle)]">
      <div className="mx-auto max-w-[1440px] px-6">
        
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-24">
          <div className="max-w-2xl text-left">
            <div className="flex mb-4">
              <Kicker className="w-fit">{t('kicker')}</Kicker>
            </div>
            
            <h2 className="type-page-title text-[var(--text-primary)]">
              {t('title')}
            </h2>
            <p className="mt-4 type-page-subtitle text-[var(--text-secondary)]">
              {t('subtitle')}
            </p>
          </div>

          <Link
            href={`/${locale}/projects`}
            className="btn-base bg-[var(--surface-1)] border border-[var(--border-subtle)] px-8 py-4 text-[var(--text-primary)] hover:bg-[var(--surface-3)]"
          >
            {t('viewAll')}
          </Link>
        </div>

        <div className="flex flex-col gap-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} ctaLabel={t('viewCase')} />
          ))}
        </div>
      </div>
    </section>
  );
}