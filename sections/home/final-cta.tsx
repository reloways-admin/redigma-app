
import Link from 'next/link';

export function HomeFinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="mb-4 text-2xl font-semibold">
          Not sure where your product stands?
        </h2>

        <p className="mb-2 text-gray-700">Send what you have.</p>
        <p className="mb-8 text-gray-700">
          We’ll figure out the right next step.
        </p>

        <Link
          href="/feedback"
          className="inline-flex items-center rounded-md bg-black px-6 py-3 text-sm font-medium text-white"
        >
          Send your product or idea
        </Link>
      </div>
    </section>
  );
}