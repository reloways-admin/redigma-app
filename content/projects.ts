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
    slug: 'reloways',
    title: 'Reloways',
    intro: 'Product UX, flows, and component structure for a relocation platform. Designed to move fast with a developer while keeping the system consistent.',
    meta: { role: 'UX/UI Design', scope: 'Full product', industry: 'RelTech', status: 'Case study' },
    heroImage: { src: '/illustrations/projects/reloways/reloways.png', alt: 'Reloways platform' },
    sections: [
      { type: 'headline', title: 'Overview', subtitle: 'Building a relocation platform from the ground up.' },
      { type: 'text', title: 'The challenge', body: 'Reloways needed a UX foundation that could support rapid development without creating technical debt or a confusing user experience.' },
      { type: 'facts', items: [{ label: 'Timeline', value: '3 months' }, { label: 'Role', value: 'Lead UX/UI' }, { label: 'Industry', value: 'RelTech' }] },
      { type: 'text', title: 'How we worked', body: 'Close collaboration with the developer. Every screen was designed with real data states in mind: empty, loading, error, and success.' },
    ],
  },
  {
    slug: 'navonera',
    title: 'Navonera',
    intro: 'A neighborhood discovery platform connecting locals with hyper-relevant services and experiences in their area.',
    meta: { role: 'UX/UI Design', scope: 'MVP', industry: 'PropTech', status: 'Case study' },
    heroImage: { src: '/illustrations/projects/nabovers/nabovers.png', alt: 'Nabovers platform' },
    sections: [
      { type: 'headline', title: 'Overview', subtitle: 'Making neighborhoods feel smaller and more connected.' },
      { type: 'text', title: 'The challenge', body: 'Nabovers needed to turn a complex hyper-local data set into a simple, enjoyable discovery experience for new and long-term residents.' },
      { type: 'facts', items: [{ label: 'Timeline', value: '2 months' }, { label: 'Role', value: 'Lead UX/UI' }, { label: 'Industry', value: 'PropTech' }] },
      { type: 'text', title: 'How we worked', body: 'Starting with user interviews to understand discovery patterns, then rapidly iterating on the core map + list view interaction model.' },
    ],
  },
  {
    slug: 'bit',
    title: 'Bit',
    intro: 'Improved clarity and usability across key product areas, with a focus on structure, decision points, and reducing friction for users.',
    meta: { role: 'UX Audit & Redesign', scope: 'Product areas', industry: 'B2B SaaS', status: 'Case study' },
    heroImage: { src: '/illustrations/projects/bit/bit.png', alt: 'Bit platform' },
    sections: [
      { type: 'headline', title: 'Overview', subtitle: 'Bringing clarity to a growing B2B SaaS product.' },
      { type: 'text', title: 'The challenge', body: 'Bit had grown fast. The UX reflected that: inconsistent patterns, unclear decision points, and a growing list of user complaints about navigating complex workflows.' },
      { type: 'facts', items: [{ label: 'Timeline', value: '6 weeks' }, { label: 'Role', value: 'UX Lead' }, { label: 'Industry', value: 'B2B SaaS' }] },
      { type: 'text', title: 'How we worked', body: 'A structured UX audit followed by targeted redesigns of the highest-friction areas. Every change was validated against the existing user mental models.' },
    ],
  },
  {
    slug: 'gomatchit',
    title: 'GoMatchIt',
    intro: 'A B2B matching platform connecting companies with vetted service providers. Designed the full product from initial concept to investor-ready prototype.',
    meta: { role: 'Product Design', scope: 'Full product', industry: 'B2B Marketplace', status: 'Case study' },
    heroImage: { src: '/illustrations/projects/gomatchit/gomatchit.png', alt: 'GoMatchIt platform' },
    sections: [
      { type: 'headline', title: 'Overview', subtitle: 'Designing the matching layer between businesses and service providers.' },
      { type: 'text', title: 'The challenge', body: 'GoMatchIt needed a product that felt trustworthy to both sides of the marketplace: companies looking for services, and providers wanting qualified leads.' },
      { type: 'facts', items: [{ label: 'Timeline', value: '4 months' }, { label: 'Role', value: 'Lead Product Designer' }, { label: 'Industry', value: 'B2B Marketplace' }] },
      { type: 'text', title: 'Starting point', body: 'The product started as a spreadsheet matching process. My job was to turn that manual process into a product experience that scaled.' },
      { type: 'text', title: 'How we worked', body: 'Weekly design sprints with the founding team. We moved from rough concept to high-fidelity flows in 6 weeks, then refined based on early user testing.' },
      { type: 'text', title: 'Key challenges', body: 'The dual-sided nature of the marketplace meant every screen needed to serve two very different mental models simultaneously. We solved this with a clear role-based onboarding and distinct dashboard views.' },
      { type: 'text', title: 'The canvas', body: 'The heart of the product was a matching canvas where companies could see ranked providers with explainable match scores. Getting the information density right was the central design challenge.' },
      { type: 'text', title: 'Final thoughts', body: 'This project was a good example of how product thinking and UX work best when combined from day one, not as sequential steps but as an ongoing conversation.' },
    ],
  },
];
