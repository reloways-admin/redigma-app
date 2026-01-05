export function HomeEntryPoints() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="mb-4 text-2xl font-semibold">
          Most teams reach me in one of two moments.
        </h2>
        <p className="text-gray-600">
          Different stages, same goal: clarity before complexity.
        </p>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {/* Entry point 1 */}
        <div className="rounded-xl border p-6">
          <p className="mb-2 text-sm font-medium text-gray-500">1</p>
          <h3 className="mb-3 text-xl font-semibold">Something already exists</h3>

          <p className="mb-6 text-gray-700">
            Your product or MVP is live, or actively being built.
          </p>

          <p className="mb-3 text-sm font-medium text-gray-600">Things work – but:</p>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
            <li>UX feels inconsistent</li>
            <li>Decisions slow the team down</li>
            <li>Adding features creates friction</li>
          </ul>

          <p className="text-gray-700">
            This is where I usually step in – bringing structure, clarity, and better
            UX decisions into an existing product.
          </p>
        </div>

        {/* Entry point 2 */}
        <div className="rounded-xl border p-6">
          <p className="mb-2 text-sm font-medium text-gray-500">2</p>
          <h3 className="mb-3 text-xl font-semibold">You’re about to build</h3>

          <p className="mb-6 text-gray-700">You’re early – but serious.</p>

          <p className="mb-3 text-sm font-medium text-gray-600">You want to:</p>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-gray-700">
            <li>Define the product clearly before development</li>
            <li>Avoid costly UX mistakes later</li>
            <li>Move fast without chaos</li>
          </ul>

          <p className="text-gray-700">
            In these cases, the focus isn’t on screens – it’s on defining the product
            properly from the start.
          </p>
        </div>
      </div>
    </section>
  );
}
