import Link from 'next/link';
import { PROJECTS } from '@/content/projects';

export default function ProjectsIndexPage() {
  return (
    <main className="bg-white">
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
            <p className="mt-3 text-sm text-gray-600">
              Selected product work. Focused on structure, clarity, and decisions that hold over time.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {PROJECTS.map((p) => {
              const subtitleParts = [p.meta.industry, p.meta.scope].filter(Boolean);
              const subtitle = subtitleParts.join(' · ');

              const tags = [p.meta.role, p.meta.scope, p.meta.industry]
                .filter(Boolean)
                // de-dupe while keeping order
                .filter((value, index, arr) => arr.indexOf(value) === index);

              return (
                <article
                  key={p.slug}
                  className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">{p.title}</h2>
                      {subtitle ? (
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-500">
                          {subtitle}
                        </p>
                      ) : null}
                    </div>

                    {p.meta.status ? (
                      <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">
                        {p.meta.status}
                      </span>
                    ) : (
                      <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700">
                        Case
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm leading-6 text-gray-700">{p.intro}</p>

                  {tags.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-6">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center text-sm font-medium text-gray-900 underline-offset-4 group-hover:underline"
                    >
                      View case study
                    </Link>
                  </div>

                  <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition group-hover:ring-gray-300" />
                </article>
              );
            })}
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

      <section>
        <div className="mx-auto max-w-6xl px-6 py-12 text-center">
          <Link href="/" className="text-sm font-medium text-gray-900 underline underline-offset-4">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}