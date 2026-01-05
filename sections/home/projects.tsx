import Link from 'next/link';

type Project = {
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  href: string;
};

const PROJECTS: Project[] = [
  {
    title: 'Reloways',
    subtitle: 'Platform and product system',
    summary:
      'Product UX, flows, and component structure for a relocation platform. Designed to move fast with a developer and keep the system consistent.',
    tags: ['Product UX', 'Design system', 'Flows'],
    href: '/project/reloways',
  },
  {
    title: 'Table',
    subtitle: 'B2B product experience',
    summary:
      'Improved clarity and usability across key product areas, with a focus on structure, decision points, and reducing friction for users.',
    tags: ['UX audit', 'IA', 'UI clarity'],
    href: '/project/table',
  },
  {
    title: 'Fincat',
    subtitle: 'Fintech UX refinement',
    summary:
      'Simplified complex flows and made the interface more predictable. Focused on fast iteration and pragmatic improvements for an existing product.',
    tags: ['Fintech', 'Refinement', 'MVP'],
    href: '/project/fincat',
  },
];

export default function HomeProjects() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">Selected product work</h2>
            <p className="mt-2 text-sm text-gray-600">
              A few examples of how I bring structure and clarity into products. Short on fluff, focused on decisions.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex w-fit items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
          >
            View all projects
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">{p.subtitle}</p>
                </div>
                <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">
                  Case
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-700">{p.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href={p.href}
                  className="inline-flex items-center text-sm font-medium text-gray-900 underline-offset-4 group-hover:underline"
                >
                  View case study
                </Link>
              </div>

              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition group-hover:ring-gray-300" />
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-gray-900">Not sure what you need yet?</p>
            <p className="mt-1 text-sm text-gray-600">
              Send what you have and I will reply with 3-4 focused UX observations.
            </p>
          </div>
          <Link
            href="/feedback"
            className="inline-flex w-fit items-center justify-center rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
          >
            Send your product or idea
          </Link>
        </div>
      </div>
    </section>
  );
}
