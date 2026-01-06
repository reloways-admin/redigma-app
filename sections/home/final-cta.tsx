
import Link from 'next/link';

export function HomeFinalCta() {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-2xl font-semibold tracking-tight">
              Not sure where your product stands?
            </h2>
            <p className="text-base text-gray-700">Send what you have.</p>
            <p className="mt-1 text-base text-gray-700">
              We’ll figure out the right next step together.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/feedback"
              className="inline-flex items-center justify-center rounded-md bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Send your product or idea
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}