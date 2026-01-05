export function HomeWhoIsThisFor() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Good fit */}
        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">This is a good fit if:</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>You’re building a real product</li>
            <li>You value clarity over trends</li>
            <li>You want UX decisions that hold over time</li>
          </ul>
        </div>

        {/* Not a fit */}
        <div className="rounded-xl border p-6">
          <h2 className="mb-4 text-xl font-semibold">Probably not a fit if:</h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-700">
            <li>You’re looking for branding</li>
            <li>You need marketing pages</li>
            <li>You want design without product thinking</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
