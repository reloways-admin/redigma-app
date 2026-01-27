

'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ProjectMetaLabel } from './project-meta-label';
import { TagList } from './tag-list';

export type ProjectCardProps = {
  /** Small label like "Platform" / "Fintech" */
  metaLabel: string;
  title: string;
  summary: string;
  tags: string[];
  href: string;

  /** Optional right-side preview image (as in the design) */
  imageSrc?: string;
  imageAlt?: string;

  /** Optional tweaks */
  className?: string;
  ctaLabel?: string;
};

export function ProjectCard({
  metaLabel,
  title,
  summary,
  tags,
  href,
  imageSrc,
  imageAlt = '',
  className,
  ctaLabel = 'View case study',
}: ProjectCardProps) {
  return (
    <article
      className={[
        'project-card',
        'grid gap-8 md:grid-cols-2 md:items-stretch',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {/* Left content */}
      <div className="flex flex-col">
        <ProjectMetaLabel>{metaLabel}</ProjectMetaLabel>

        <h3 className="mt-5 type-section-title text-[var(--text-primary)]">{title}</h3>

        <p className="mt-4 type-body text-[var(--text-secondary)]">{summary}</p>

        {tags?.length ? (
          <div className="mt-6">
            <TagList tags={tags} />
          </div>
        ) : null}

        <div className="mt-8">
          <Link href={href} className="project-link type-body">
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* Right preview */}
      {imageSrc ? (
        <div className="h-full">
          <div className="h-full border border-[var(--border-default)] bg-[var(--background)] p-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

export default ProjectCard;