export function HomeHowIWork() {
  return (
    <section className="bg-white">
      {/* full-width divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          {/* Left rail */}
          <div className="md:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-700">How I work</p>
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900">
              How I usually work with teams
            </h2>

            <p className="mt-4 max-w-md text-base leading-7 text-gray-700">
              I work best when UX decisions actually affect the product.
            </p>

            <div className="mt-10 border-l-2 border-gray-200 pl-4">
              <p className="text-sm font-medium text-gray-900">What you can expect</p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Less noise. More clarity. Decisions that survive real product pressure.
              </p>
            </div>
          </div>

          {/* Main content */}
          <div className="md:col-span-7">
            <div className="space-y-10">
              <div>
                <p className="text-sm font-medium text-gray-600">That can mean:</p>

                <ol className="mt-5 space-y-6">
                  <li className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-semibold text-gray-900">
                      1
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Stepping into an existing system</p>
                      <p className="mt-1 text-sm leading-6 text-gray-700">
                        Bringing structure and clarity into a product that is already moving.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-semibold text-gray-900">
                      2
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Helping define a product before development</p>
                      <p className="mt-1 text-sm leading-6 text-gray-700">
                        Turning ideas into a clear structure so development can move fast without chaos.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full border border-gray-200 bg-white text-xs font-semibold text-gray-900">
                      3
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">Guiding an MVP from idea to something usable</p>
                      <p className="mt-1 text-sm leading-6 text-gray-700">
                        Keeping decisions grounded and making tradeoffs explicit.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <p className="max-w-2xl text-base leading-7 text-gray-700">
                My role is to reduce uncertainty, keep decisions grounded, and help teams move forward with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}