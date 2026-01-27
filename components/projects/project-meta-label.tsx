

'use client';

type ProjectMetaLabelProps = {
  children: string;
};

export function ProjectMetaLabel({ children }: ProjectMetaLabelProps) {
  return (
    <span className="project-meta-label type-body-small">
      {children}
    </span>
  );
}