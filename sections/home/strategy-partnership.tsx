export default function HomeStrategicPartnership() {
  return (
    <section className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-12 md:items-start">
          {/* Left rail */}
          <div className="md:col-span-4">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-700">
                Product direction
              </span>
            </div>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
              When UX isn’t the first step
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-600">
              This is only relevant when the product direction isn’t clear yet.
            </p>
          </div>

          {/* Main content */}
          <div className="md:col-span-8">
            <div className="space-y-6">
              <p className="text-base leading-7 text-gray-700">
                Sometimes the challenge isn’t the interface yet. In early or complex situations, teams need clarity around the problem, direction, or business logic before jumping into design.
              </p>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  The partnership
                </p>
                <p className="mt-3 text-base leading-7 text-gray-700">
                  In these cases, I collaborate with a trusted strategic partner to help define what to build and why. We sharpen your product identity and decision-making framework to ensure the foundation is solid.
                </p>
              </div>

              <div className="pt-2">
                <p className="text-sm leading-6 text-gray-600">
                  This is optional and only relevant when the product direction isn’t clear yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}