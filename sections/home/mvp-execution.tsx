export default function HomeMvpExecution() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          {/* Left rail */}
          <div className="md:col-span-4">
            <div className="mb-3 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-700">
                MVP execution
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
              From idea to working MVP
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-600">
              Relevant when teams need something real and usable, not just direction.
            </p>
          </div>

          {/* Main content */}
          <div className="md:col-span-8">
            <div className="space-y-8">
              <p className="text-base leading-7 text-gray-700">
                Sometimes teams don’t just need direction; they need something real, fast.
                When it’s the right fit, I help define the MVP scope, design the UX, and work
                closely with a trusted developer to turn the concept into a working product.
              </p>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  When it makes sense
                </p>

                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li>Define the MVP scope clearly</li>
                  <li>Design the product structure and UX</li>
                  <li>Work closely with a trusted developer</li>
                  <li>Turn the concept into a working MVP</li>
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  The boundary
                </p>
                <p className="mt-3 text-base leading-7 text-gray-700">
                  I don’t run development teams. I lead the product thinking and UX,
                  collaborating with development to move fast and smart without running
                  a heavy development team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
