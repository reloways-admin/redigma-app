import Link from 'next/link';

export function HomeMiniProduct() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
              UX feedback
            </span>
          </div>
          <h2 className="text-2xl font-semibold tracking-tight">
            A quick UX perspective on your product
          </h2>
          <p className="mt-3 text-base text-gray-700">
            Send me what you have. I will reply with 3-4 focused UX observations you can act on.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Step 1</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">You send</h3>
              </div>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700">
                1-3 items
              </span>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-700">
                  1
                </span>
                <span>
                  A link to your live product (best), or a staging link
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-700">
                  2
                </span>
                <span>
                  Screenshots or early designs (Figma link is great)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-700">
                  3
                </span>
                <span>
                  A short note: who is it for, and what users should achieve
                </span>
              </li>
            </ul>

            <p className="mt-6 text-xs text-gray-500">
              You do not need a deck. Just something I can look at.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Step 2</p>
                <h3 className="mt-1 text-lg font-semibold text-gray-900">You get</h3>
              </div>
              <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700">
                Clear next steps
              </span>
            </div>

            <ul className="mt-5 space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-gray-900 ring-1 ring-gray-200">
                  1
                </span>
                <span>
                  3-4 focused UX observations (what to improve first)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-gray-900 ring-1 ring-gray-200">
                  2
                </span>
                <span>
                  What feels unclear or risky, and why users might drop
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs text-gray-900 ring-1 ring-gray-200">
                  3
                </span>
                <span>
                  What I would simplify or rethink to reduce friction
                </span>
              </li>
            </ul>

            <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4">
              <p className="text-sm font-medium text-gray-900">No sales pitch.</p>
              <p className="mt-1 text-sm text-gray-600">Just useful feedback you can use right away.</p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white p-6 md:flex-row">
          <p className="text-sm text-gray-700">
            This often helps decide whether refining, rebuilding, or building an MVP makes sense.
          </p>
          <Link
            href="/feedback"
            className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Send your product or idea
          </Link>
        </div>
      </div>
    </section>
  );
}