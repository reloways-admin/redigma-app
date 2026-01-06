export function HomeEntryPoints() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600">
              Entry points
            </span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Most teams reach me in one of two moments
          </h2>
          <p className="mt-3 text-base text-gray-700">
            Different stages, same goal: clarity before complexity.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Entry point 1 */}
          <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-900">
                  1
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    Something already exists
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    Improve an active product
                  </h3>
                </div>
              </div>

              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
                Live or in build
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-700">
              Your product or MVP is live, or actively being built. Things work, but the UX starts to feel fragile.
            </p>

            <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-medium text-gray-900">Common signals</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>UX feels inconsistent</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>Decisions slow the team down</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>Adding features creates friction</span>
                </li>
              </ul>
            </div>

            <p className="mt-6 text-sm leading-6 text-gray-700">
              This is where I usually step in, bringing structure, clarity, and better UX decisions into an existing system.
            </p>

            <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-gray-300" />
          </article>

          {/* Entry point 2 */}
          <article className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-sm font-semibold text-gray-900">
                  2
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    You’re about to build
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    Define before you design
                  </h3>
                </div>
              </div>

              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
                Early stage
              </span>
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-700">
              You’re early, but serious. The goal is to make the product clear enough that development can move fast without chaos.
            </p>

            <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-sm font-medium text-gray-900">What teams want</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>Define the product clearly before development</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>Avoid costly UX mistakes later</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                  <span>Move fast without losing clarity</span>
                </li>
              </ul>
            </div>

            <p className="mt-6 text-sm leading-6 text-gray-700">
              In these cases, the focus is not on screens yet. It is on defining the product properly from the start.
            </p>

            <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-gray-300" />
          </article>
        </div>
      </div>
    </section>
  );
}
