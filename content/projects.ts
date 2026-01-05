export type ProjectSection =
  | { type: 'headline'; title: string; subtitle?: string }
  | { type: 'text'; title?: string; body: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'facts'; items: { label: string; value: string }[] };

export type Project = {
  slug: string;
  title: string;
  intro: string;
  meta: { role: string; scope: string; industry: string; status: string };
  heroImage?: { src: string; alt: string };
  sections: ProjectSection[];
};

export const PROJECTS: Project[] = [
  {
    slug: 'table',
    title: 'Building Blocks: Crafting a Versatile Data Table Component',
    intro:
      'A reusable table component designed for speed, clarity, and scalability across product surfaces.',
    meta: {
      role: 'UX/UI',
      scope: 'Component system',
      industry: 'B2B SaaS',
      status: 'Case',
    },
    heroImage: { src: '/images/projects/table/hero.png', alt: 'Table component' },
    sections: [
      { type: 'text', title: 'The challenge', body: '...' },
      { type: 'text', title: 'The process', body: '...' },
      { type: 'image', src: '/images/projects/table/basic-table.png', alt: 'Basic table' },
      { type: 'facts', items: [{ label: 'Timeline', value: '...' }] },
    ],
  },
];